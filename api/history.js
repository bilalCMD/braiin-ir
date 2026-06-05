// Vercel Serverless Function — GET /api/history?symbol=BRAI&range=3mo
// Returns daily OHLCV bars from Yahoo Finance.

export default async function handler(req, res) {
  const symbol = (req.query.symbol || 'BRAI').toUpperCase();
  const range = req.query.range || '3mo';
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');

  try {
    const r = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=${range}`,
      { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' } }
    );
    if (!r.ok) throw new Error(`Yahoo returned ${r.status}`);

    const data = await r.json();
    const result = data?.chart?.result?.[0];
    if (!result) throw new Error('no data');

    const { timestamp, indicators } = result;
    const q = indicators.quote[0];
    const bars = timestamp
      .map((ts, i) => ({
        date: new Date(ts * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' }),
        open: q.open[i] ?? 0,
        high: q.high[i] ?? 0,
        low: q.low[i] ?? 0,
        close: q.close[i] ?? 0,
        volume: q.volume[i] ?? 0,
      }))
      .filter(b => b.close > 0);

    res.status(200).json(bars);
  } catch (err) {
    res.status(502).json({ error: 'Failed to fetch history', detail: String(err) });
  }
}
