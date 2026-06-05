# Deploy to Vercel — Braiin IR Site

This `site/` folder is a complete static website + serverless API, ready for Vercel.

```
site/
├── *.html              ← all pages (static)
├── styles.css          ← styles
├── components.js       ← header/footer/ticker
├── data.js             ← shared data
├── hero-bg.jpg         ← image
├── vercel.json         ← Vercel config
└── api/                ← serverless functions (live data)
    ├── stock/quote.js  → /api/stock/quote
    ├── history.js      → /api/history
    └── filings.js      → /api/filings
```

---

## Option A — Deploy via Vercel CLI (fastest)

1. Install the CLI (one time):
   ```
   npm i -g vercel
   ```
2. Open a terminal **inside the `site` folder**:
   ```
   cd C:\Users\sam\Downloads\irbraiin\site
   ```
3. Run:
   ```
   vercel
   ```
   - Log in when prompted (browser opens).
   - "Set up and deploy?" → **Y**
   - "Which scope?" → pick your account
   - "Link to existing project?" → **N**
   - "Project name?" → `braiin-ir` (or anything)
   - "In which directory is your code located?" → **./** (just press Enter)
   - It builds & gives you a preview URL.
4. To publish to production:
   ```
   vercel --prod
   ```
   You'll get a live URL like `https://braiin-ir.vercel.app`.

---

## Option B — Deploy via GitHub + Vercel Dashboard (no CLI)

1. Put the `site/` folder in a GitHub repo (push it).
2. Go to **vercel.com → Add New → Project**.
3. Import your GitHub repo.
4. **Root Directory** → set to `site` (if the repo root isn't the site folder).
5. Framework Preset → **Other** (it's static + serverless, no build step needed).
6. Click **Deploy**. Done.

---

## Local testing with live API (optional)

To test the `/api/...` serverless functions locally:
```
cd C:\Users\sam\Downloads\irbraiin\site
vercel dev
```
Opens at `http://localhost:3000` with the API working.

> Opening `index.html` directly (file://) also works — the API calls just fail
> gracefully and the page shows the built-in fallback data (real last-known values).

---

## Environment Variables (optional)

In Vercel → Project → Settings → Environment Variables:

| Name        | Value          | Used by         |
|-------------|----------------|-----------------|
| `EDGAR_CIK` | `0002076975`   | `/api/filings`  |

Stock data uses Yahoo Finance — **no API key needed**.

---

## What works in production

- ✅ All pages, navigation, mobile menu
- ✅ Live BRAI stock quote (Yahoo Finance via `/api/stock/quote`)
- ✅ Live price chart + historical table (`/api/history`)
- ✅ Live SEC filings (`/api/filings` → data.sec.gov)
- ✅ Press release links open real SEC documents
- ✅ Email alerts / contact form (front-end validation; wire to a real service when ready)
