// Vercel Serverless Function — GET /api/filings
// Returns latest SEC EDGAR filings for Braiin Ltd (CIK 0002076975).

const CIK = process.env.EDGAR_CIK || '0002076975';
const SKIP = new Set(['3', '4', '5', 'D', 'D/A', 'EFFECT', 'CERT', 'DRS', 'DRS/A']);

export default async function handler(_req, res) {
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=7200');

  try {
    const padded = CIK.replace(/^0+/, '').padStart(10, '0');
    const r = await fetch(`https://data.sec.gov/submissions/CIK${padded}.json`, {
      headers: { 'User-Agent': 'Braiin-IR-Site contact@braiin.com' },
    });
    if (!r.ok) throw new Error(`EDGAR returned ${r.status}`);

    const data = await r.json();
    const rec = data.filings.recent;
    const cikNum = CIK.replace(/^0+/, '');
    const out = [];

    for (let i = 0; i < rec.form.length && out.length < 20; i++) {
      if (SKIP.has(rec.form[i])) continue;
      const accClean = rec.accessionNumber[i].replace(/-/g, '');
      out.push({
        date: rec.filingDate[i],
        type: rec.form[i],
        description: rec.primaryDocDescription[i] || `Form ${rec.form[i]}`,
        url: `https://www.sec.gov/Archives/edgar/data/${cikNum}/${accClean}/${rec.primaryDocument[i]}`,
        accessionNumber: rec.accessionNumber[i],
      });
    }

    res.status(200).json(out);
  } catch (err) {
    res.status(502).json({ error: 'Failed to fetch filings', detail: String(err) });
  }
}
