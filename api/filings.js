// Vercel Serverless Function — GET /api/filings
// Returns ALL SEC EDGAR filings for Braiin Ltd (CIK 0002076975),
// including ownership forms (3/4/5), with standard descriptions and
// working SEC.gov links (primary HTML document + filing index page).

const CIK = process.env.EDGAR_CIK || '0002076975';

const FORM_DESC = {
  '6-K': 'Current Report',
  '20-F': 'Annual Report',
  '20-F/A': 'Annual Report (Amendment)',
  'F-1': 'Registration Statement (IPO)',
  'F-1/A': 'Registration Statement (Amendment)',
  'F-3': 'Registration Statement (Shelf)',
  '424B4': 'Prospectus',
  '424B5': 'Prospectus',
  '8-A12B': 'Registration of Securities',
  '3': 'Initial Statement of Beneficial Ownership',
  '4': 'Statement of Changes in Beneficial Ownership',
  '5': 'Annual Statement of Beneficial Ownership',
  'SC 13G': 'Beneficial Ownership Report',
  'SC 13G/A': 'Beneficial Ownership Report (Amendment)',
  'SC 13D': 'Beneficial Ownership Report',
  'EFFECT': 'Notice of Effectiveness',
  'CERT': 'Certification of Approval for Listing',
  'DRS': 'Draft Registration Statement',
  'DRS/A': 'Draft Registration Statement (Amendment)',
  'D': 'Notice of Exempt Offering of Securities',
  'D/A': 'Notice of Exempt Offering (Amendment)',
};

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

    for (let i = 0; i < rec.form.length && out.length < 60; i++) {
      const form = rec.form[i];
      const acc = rec.accessionNumber[i];
      const accClean = acc.replace(/-/g, '');
      const primary = rec.primaryDocument[i] || '';
      const base = `https://www.sec.gov/Archives/edgar/data/${cikNum}/${accClean}`;

      out.push({
        date: rec.filingDate[i],
        type: form,
        description: rec.primaryDocDescription[i] || FORM_DESC[form] || `Form ${form}`,
        // Primary document (HTML view)
        htmlUrl: primary ? `${base}/${primary}` : `${base}/`,
        // Official SEC.gov filing index page ("View this form on SEC.gov")
        indexUrl: `${base}/${acc}-index.htm`,
        // Folder (all documents in the filing)
        folderUrl: `${base}/`,
        accessionNumber: acc,
        year: rec.filingDate[i].slice(0, 4),
      });
    }

    res.status(200).json(out);
  } catch (err) {
    res.status(502).json({ error: 'Failed to fetch filings', detail: String(err) });
  }
}
