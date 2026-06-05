// Vercel Serverless Function — GET /api/stock/quote?symbol=BRAI
// Proxies Yahoo Finance (avoids browser CORS) and returns a clean quote.

export default async function handler(req, res) {
  const symbol = (req.query.symbol || 'BRAI').toUpperCase();
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');

  try {
    const [chartRes, sumRes] = await Promise.allSettled([
      fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=5m&range=1d`, {
        headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' },
      }),
      fetch(`https://query1.finance.yahoo.com/v10/finance/quoteSummary/${symbol}?modules=summaryDetail,defaultKeyStatistics`, {
        headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' },
      }),
    ]);

    if (chartRes.status !== 'fulfilled' || !chartRes.value.ok) throw new Error('chart fetch failed');
    const data = await chartRes.value.json();
    const result = data?.chart?.result?.[0];
    if (!result) throw new Error('no chart data');

    const m = result.meta;
    const closes = (result.indicators.quote[0].close || []).filter(v => v !== null);
    const opens = result.indicators.quote[0].open || [];
    const prevClose = m.previousClose ?? m.chartPreviousClose ?? m.regularMarketPrice;
    const price = m.regularMarketPrice;
    const open = m.regularMarketOpen ?? opens.find(v => v !== null) ?? prevClose;

    let marketCap = 0, sharesOutstanding = 0;
    if (sumRes.status === 'fulfilled' && sumRes.value.ok) {
      try {
        const sd = await sumRes.value.json();
        const r = sd?.quoteSummary?.result?.[0];
        marketCap = r?.summaryDetail?.marketCap?.raw ?? 0;
        sharesOutstanding = r?.defaultKeyStatistics?.sharesOutstanding?.raw
          ?? r?.summaryDetail?.sharesOutstanding?.raw ?? 0;
      } catch {}
    }

    res.status(200).json({
      symbol,
      price,
      prevClose,
      open,
      high: m.regularMarketDayHigh,
      low: m.regularMarketDayLow,
      volume: +(m.regularMarketVolume / 1e6).toFixed(4),
      volumeRaw: m.regularMarketVolume,
      change: +(price - prevClose).toFixed(2),
      changePct: +(((price - prevClose) / prevClose) * 100).toFixed(2),
      fiftyTwoWeekHigh: m.fiftyTwoWeekHigh ?? 0,
      fiftyTwoWeekLow: m.fiftyTwoWeekLow ?? 0,
      marketCap,
      sharesOutstanding,
      history: closes.length >= 5 ? closes : [prevClose, price],
      marketState: m.marketState ?? 'CLOSED',
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    res.status(502).json({ error: 'Failed to fetch quote', detail: String(err) });
  }
}
