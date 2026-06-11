/* ═══════════════════════════════════════
   BRAIIN IR — Shared Header & Footer
   ═══════════════════════════════════════ */

// ── NAV DATA ──────────────────────────────
const NAV = [
  { label: 'Corporate', href: 'https://braiin.com/', external: true },
  { label: 'Presentations', href: 'presentations' },
  { label: 'Press Releases', href: 'press-releases' },
  {
    label: 'Governance', dropdown: [
      { label: 'Management', href: 'management' },
      { label: 'Board of Directors', href: 'board-of-directors' },
    ]
  },
  { label: 'SEC Filings', href: 'sec-filings' },
  { label: 'Email Alerts', href: 'alerts' },
  {
    label: 'Resources', dropdown: [
      { label: 'Media & Events', href: 'events' },
      { label: 'Stock', href: 'stock' },
      { label: 'FAQ', href: 'faq' },
      { label: 'Contact Us', href: 'contact' },
    ]
  },
];

// ── LOGO SVG ──────────────────────────────
function logoSVG(onHero = false) {
  const lineColor = onHero ? 'rgba(255,255,255,0.3)' : 'rgba(30,60,100,0.2)';
  return `<svg width="36" height="36" viewBox="0 0 40 40" fill="none">
    <line x1="20" y1="7" x2="8" y2="17" stroke="${lineColor}" stroke-width="1.3"/>
    <line x1="20" y1="7" x2="32" y2="17" stroke="${lineColor}" stroke-width="1.3"/>
    <line x1="20" y1="7" x2="20" y2="21" stroke="${lineColor}" stroke-width="1.3"/>
    <line x1="8" y1="17" x2="20" y2="21" stroke="${lineColor}" stroke-width="1.3"/>
    <line x1="32" y1="17" x2="20" y2="21" stroke="${lineColor}" stroke-width="1.3"/>
    <line x1="8" y1="17" x2="13" y2="32" stroke="${lineColor}" stroke-width="1.3"/>
    <line x1="32" y1="17" x2="27" y2="32" stroke="${lineColor}" stroke-width="1.3"/>
    <line x1="20" y1="21" x2="13" y2="32" stroke="${lineColor}" stroke-width="1.3"/>
    <line x1="20" y1="21" x2="27" y2="32" stroke="${lineColor}" stroke-width="1.3"/>
    <circle cx="20" cy="7" r="4" fill="#E91E8C"/>
    <circle cx="8" cy="17" r="3.5" fill="#3B82F6"/>
    <circle cx="32" cy="17" r="3.5" fill="#F97316"/>
    <circle cx="20" cy="21" r="3" fill="#14B8A6"/>
    <circle cx="13" cy="32" r="3.5" fill="#22C55E"/>
    <circle cx="27" cy="32" r="3.5" fill="#A855F7"/>
  </svg>`;
}

function logoHTML() {
  // Official BRAIIN logo. On the dark hero header a CSS filter turns it white.
  return `<a href="index" class="nav-logo">
    <img src="logo.png" alt="BRAIIN" class="nav-logo-img" />
  </a>`;
}

// ── RENDER HEADER ─────────────────────────
function renderHeader(activePage = '', heroMode = false) {
  const navLinks = NAV.map(item => {
    if (item.dropdown) {
      const items = item.dropdown.map(d =>
        `<a href="${d.href}" ${activePage === d.href ? 'class="active"' : ''}>${d.label}</a>`
      ).join('');
      return `<div class="nav-drop">
        <button class="nav-drop-btn">${item.label}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="nav-drop-menu">${items}</div>
      </div>`;
    }
    const active = activePage === item.href ? 'style="color:var(--accent)"' : '';
    const ext = item.external ? 'target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${item.href}" class="nav-link" ${active} ${ext}>${item.label}</a>`;
  }).join('');

  const drawerLinks = NAV.map(item => {
    if (item.dropdown) {
      const sub = item.dropdown.map(d =>
        `<a href="${d.href}">${d.label}</a>`
      ).join('');
      return `<div>
        <button class="drawer-group-btn" onclick="this.nextElementSibling.classList.toggle('open')">
          ${item.label}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="drawer-sub">${sub}</div>
      </div>`;
    }
    const ext = item.external ? 'target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${item.href}" ${ext}>${item.label}</a>`;
  }).join('<div class="drawer-divider"></div>');

  const topClass = heroMode ? 'topbar topbar-hero' : 'topbar';

  document.getElementById('header-placeholder').innerHTML = `
    <!-- UNIFIED TOP BAR (ticker + nav share one stacking context) -->
    <div class="${topClass}" id="topBar">
      <!-- TICKER BAR -->
      <div class="ticker-bar">
        <div class="wrap">
          <div class="ticker-inner">
            <div class="ticker-left">
              <span class="dot"></span>
              <span class="t-sym">NASDAQ: BRAI</span>
              <span class="t-price" id="tkPrice">$—</span>
              <span id="tkChg" class="t-up">—</span>
            </div>
            <div class="ticker-right" id="tickerRight">
              <span>Vol <b id="tkVol">—</b></span>
              <span>Mkt Cap <b>$412.6M</b></span>
              <span id="mktStatus">—</span>
            </div>
          </div>
        </div>
      </div>

      <!-- HEADER NAV -->
      <header class="site-header" id="siteHeader">
        <div class="wrap">
          <div class="nav-wrap">
            ${logoHTML()}
            <nav class="nav-links" aria-label="Main navigation">
              ${navLinks}
            </nav>
            <div style="display:flex;align-items:center;gap:8px">
              <a href="alerts" class="btn btn-primary btn-sm" style="display:none" id="navAlertBtn">Get Alerts</a>
              <button class="hamburger" id="hamburger" aria-label="Open menu">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 6h18M3 12h18M3 18h18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!-- MOBILE DRAWER -->
    <div class="drawer-overlay" id="drawerOverlay"></div>
    <aside class="mobile-drawer" id="mobileDrawer" aria-label="Mobile navigation">
      <div class="drawer-head">
        ${logoHTML()}
        <button class="drawer-close" id="drawerClose" aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <nav class="drawer-nav">${drawerLinks}</nav>
      <div class="drawer-legal">
        <a href="privacy">Privacy Policy</a>
        <a href="terms">Terms &amp; Security</a>
        <a href="disclaimer">Forward-Looking Statements</a>
      </div>
      <div class="drawer-footer-note">NASDAQ: BRAI · Braiin Limited</div>
    </aside>
  `;

  // Show alert button on desktop
  document.getElementById('navAlertBtn').style.display = '';

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const close = document.getElementById('drawerClose');

  function openDrawer() { drawer.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeDrawer() { drawer.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = ''; }

  hamburger.addEventListener('click', openDrawer);
  close.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Hero scroll behavior — toggle 'scrolled' on the whole top bar
  if (heroMode) {
    const topBar = document.getElementById('topBar');
    const onScroll = () => topBar.classList.toggle('scrolled', window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Stock ticker
  loadTicker();
}

// ── RENDER FOOTER ─────────────────────────
function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="wrap">
        <div class="footer-grid">
          <div>
            ${logoHTML()}
            <p class="footer-desc">Braiin Limited (NASDAQ: BRAI) — deploying proprietary AI and machine learning to precision agriculture, customer experience, and property technology.</p>
            <div class="social-row">
              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 17V10.3H6.1V17zM7.22 9.27a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6M18 17v-3.67c0-2-.43-3.53-2.76-3.53a2.42 2.42 0 0 0-2.18 1.2h-.03V10.3H10.9V17h2.23v-3.31c0-.88.16-1.73 1.25-1.73s1.08 1 1.08 1.78V17z"/></svg>
              </a>
              <a href="#" aria-label="X">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.6l5.24 6.93zm-1.3 19.5h2.04L6.49 3.24H4.3z"/></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.77-1.77C19.33 5.1 12 5.1 12 5.1s-7.33 0-8.83.43A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.77 1.77c1.5.43 8.83.43 8.83.43s7.33 0 8.83-.43a2.5 2.5 0 0 0 1.77-1.77C23 15.2 23 12 23 12M9.75 15.02V8.98L15 12z"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <div class="footer-col-title">Investor Relations</div>
            <div class="footer-links">
              <a href="press-releases">Press Releases</a>
              <a href="sec-filings">SEC Filings</a>
              <a href="presentations">Presentations</a>
              <a href="events">Events</a>
              <a href="alerts">Email Alerts</a>
            </div>
          </div>
          <div>
            <div class="footer-col-title">Company</div>
            <div class="footer-links">
              <a href="https://braiin.com" target="_blank" rel="noopener">Corporate Site</a>
              <a href="management">Management</a>
              <a href="board-of-directors">Board of Directors</a>
              <a href="contact">Contact Us</a>
              <a href="faq">FAQ</a>
              <a href="stock">Stock</a>
            </div>
          </div>
        </div>
        <div class="footer-bar">
          <span>© ${new Date().getFullYear()} Braiin Limited. All rights reserved. NASDAQ: BRAI.</span>
          <span class="footer-legal-links">
            <a href="privacy">Privacy Policy</a>
            <a href="terms">Terms &amp; Security</a>
            <a href="disclaimer">Forward-Looking Statements</a>
          </span>
          <span>Designed &amp; built by <b>Dart Marketing</b></span>
        </div>
      </div>
    </footer>
  `;
}

// ── STOCK TICKER ──────────────────────────
async function loadTicker() {
  try {
    const r = await fetch('/api/stock/quote?symbol=BRAI');
    if (!r.ok) throw new Error();
    const d = await r.json();
    updateTicker(d.price, d.prevClose, d.volumeRaw || d.volume * 1e6);
    setInterval(async () => {
      try {
        const r2 = await fetch('/api/stock/quote?symbol=BRAI');
        if (r2.ok) { const d2 = await r2.json(); updateTicker(d2.price, d2.prevClose, d2.volumeRaw || d2.volume * 1e6); }
      } catch {}
    }, 60000);
  } catch {
    // Simulate if backend offline
    simulateTicker();
  }
}

function updateTicker(price, prevClose, vol) {
  const chg = parseFloat((price - prevClose).toFixed(2));
  const pct = parseFloat(((chg / prevClose) * 100).toFixed(2));
  const up = chg >= 0;
  const sign = up ? '+' : '';
  const el = (id) => document.getElementById(id);
  if (!el('tkPrice')) return;
  el('tkPrice').textContent = '$' + price.toFixed(2);
  const chgEl = el('tkChg');
  chgEl.textContent = `${sign}${chg.toFixed(2)} (${sign}${pct.toFixed(2)}%)`;
  chgEl.className = up ? 't-up' : 't-down';
  el('tkVol').textContent = vol >= 1e6 ? (vol/1e6).toFixed(2)+'M' : Math.round(vol/1000)+'K';
  const etH = new Date().getUTCHours() - 4;
  const open = etH >= 9 && etH < 16;
  const ms = el('mktStatus');
  ms.textContent = '● Market ' + (open ? 'Open' : 'Closed');
  ms.style.color = open ? 'var(--up)' : 'var(--muted)';
}

function simulateTicker() {
  let p = 8.15;
  updateTicker(p, 9.04, 64322);
  setInterval(() => { p = Math.max(0.5, parseFloat((p + (Math.random()-0.5)*0.04).toFixed(2))); updateTicker(p, 9.04, 64322 + Math.floor(Math.random()*5000)); }, 2200);
}

// ── SPARK LINE ────────────────────────────
function drawSparkline(canvasId, data, isUp) {
  const el = document.getElementById(canvasId);
  if (!el) return;
  if (typeof el.getContext !== 'function') {
    // SVG fallback
    drawSVGSparkline(el, data, isUp);
    return;
  }
  drawSVGSparkline(el, data, isUp);
}

function drawSVGSparkline(container, data, isUp) {
  if (!data || data.length < 2) return;
  const W = 300, H = 80, P = 4;
  const min = Math.min(...data), max = Math.max(...data), rng = (max - min) || 1;
  const pts = data.map((v, i) => ({
    x: P + (i / (data.length-1)) * (W-P*2),
    y: H-P - ((v-min)/rng) * (H-P*2)
  }));
  const line = pts.map((p,i) => `${i?'L':'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const area = `${line} L${(W-P).toFixed(1)},${H} L${P},${H} Z`;
  const col = isUp ? '#10b981' : '#ef4444';
  const last = pts[pts.length-1];
  container.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" style="width:100%;height:100%">
    <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${col}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${col}" stop-opacity="0"/>
    </linearGradient></defs>
    <path d="${area}" fill="url(#sg)"/>
    <path d="${line}" fill="none" stroke="${col}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="${last.x.toFixed(1)}" cy="${last.y.toFixed(1)}" r="3" fill="${col}"/>
  </svg>`;
}
