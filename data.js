/* ═══════════════════════════════════
   BRAIIN IR — Shared Static Data
   Real content from ir.braiin.com
   ═══════════════════════════════════ */

// Real Braiin Ltd press releases — sourced from SEC EDGAR 6-K filings (EX-99.1 exhibits).
// CIK 0002076975. Each `url` opens the actual press release document on sec.gov.
const PRESS_RELEASES = [
  {id:'1',date:'Jun 2, 2026',tag:'PropTech',headline:'Braiin Targets US$3 Trillion Global Residential Services Market Through ClearBank Embedded Banking Infrastructure Integrated into Home.cc',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226026774/ex99-1.htm'},
  {id:'2',date:'May 28, 2026',tag:'PropTech',headline:'Penetrating a $94.2B Market: Braiin Launches AI-Native Living Infrastructure Platform in New Zealand, Targeting the Global PropTech Residential Lifecycle Services Market',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226025545/ex99-1.htm'},
  {id:'3',date:'May 26, 2026',tag:'Partnership',headline:'Braiin Partners with Switchcraft to Embed Utility and Telecom Switching Across Its UK Living Infrastructure Platform, Targeting the £25 Billion UK Residential Lifecycle Services Market',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226025173/ex99-1.htm'},
  {id:'4',date:'May 20, 2026',tag:'Corporate',headline:'Braiin Limited Furnishes Report of Foreign Private Issuer (Form 6-K)',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226024473/form6-k.htm'},
  {id:'5',date:'May 12, 2026',tag:'M&A',headline:'Braiin Advances Proposed Acquisition of Home.cc with Valuation and Growth-Capital Components Totaling Approximately A$73 Million to Build AI-Native LivTech Platform',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226022406/ex99-1.htm'},
  {id:'6',date:'Apr 30, 2026',tag:'Corporate',headline:'Braiin Limited Announces Commencement of Trading on Split-Adjusted Basis Following Three-for-One Stock Split',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226020506/ex99-1.htm'},
  {id:'7',date:'Apr 10, 2026',tag:'Corporate',headline:'Braiin Announces Three-For-One Stock Split',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226016061/ex99-1.htm'},
  {id:'8',date:'Feb 2, 2026',tag:'Offering',headline:'Braiin Limited Files Final Prospectus (Rule 424(b)(4)) for Initial Public Offering on NASDAQ',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226004786/form424b4.htm'},
  {id:'9',date:'Jan 27, 2026',tag:'Listing',headline:'Braiin Limited Registers Securities for Listing on the NASDAQ Capital Market (Form 8-A12B)',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226003748/form8-a12b.htm'},
];

const FILINGS = [
  {date:'2026-06-02',type:'6-K',description:'Current Report',year:'2026',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226026774/form6-k.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226026774/0001493152-26-026774-index.htm'},
  {date:'2026-05-28',type:'6-K',description:'Current Report',year:'2026',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226025545/form6-k.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226025545/0001493152-26-025545-index.htm'},
  {date:'2026-05-26',type:'6-K',description:'Current Report',year:'2026',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226025173/form6-k.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226025173/0001493152-26-025173-index.htm'},
  {date:'2026-05-20',type:'6-K',description:'Current Report',year:'2026',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226024473/form6-k.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226024473/0001493152-26-024473-index.htm'},
  {date:'2026-05-12',type:'6-K',description:'Current Report',year:'2026',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226022406/form6-k.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226022406/0001493152-26-022406-index.htm'},
  {date:'2026-04-30',type:'6-K',description:'Current Report',year:'2026',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226020506/form6-k.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226020506/0001493152-26-020506-index.htm'},
  {date:'2026-04-10',type:'6-K',description:'Current Report',year:'2026',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226016061/form6-k.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226016061/0001493152-26-016061-index.htm'},
  {date:'2026-04-10',type:'6-K',description:'Current Report',year:'2026',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226015955/form6-k.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226015955/0001493152-26-015955-index.htm'},
  {date:'2026-03-31',type:'3',description:'Initial Statement of Beneficial Ownership',year:'2026',htmlUrl:'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002076975&type=3',indexUrl:'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002076975&type=3'},
  {date:'2026-02-02',type:'424B4',description:'Prospectus',year:'2026',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226004786/form424b4.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226004786/0001493152-26-004786-index.htm'},
  {date:'2026-01-27',type:'8-A12B',description:'Registration of Securities',year:'2026',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226003748/form8-a12b.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226003748/0001493152-26-003748-index.htm'},
  {date:'2026-01-13',type:'F-1/A',description:'Registration Statement (Amendment)',year:'2026',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226001917/formf-1a.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226001917/0001493152-26-001917-index.htm'},
  {date:'2025-12-11',type:'F-1/A',description:'Registration Statement (Amendment)',year:'2025',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315225027173/formf-1a.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315225027173/0001493152-25-027173-index.htm'},
  {date:'2025-11-10',type:'F-1',description:'Registration Statement (IPO)',year:'2025',htmlUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315225021436/formf-1.htm',indexUrl:'https://www.sec.gov/Archives/edgar/data/2076975/000149315225021436/0001493152-25-021436-index.htm'},
];

const MANAGEMENT = [
  {initials:'NB',name:'Natraj Balasubramanian',role:'Chief Executive Officer & Director',bio:'Founded Raptor300 in 2015; led its acquisition by Braiin in 2022. Previously founded Clerysys Inc., a SaaS provider (2005–2012). Director of Flamingo AI since 2021. MBA from Symbiosis Institute; Harvard Business School Advanced Management Program.'},
  {initials:'JS',name:'Jay Stephenson',role:'Chief Financial Officer',bio:'Founder/director of Brainhealth Products (since January 2019). Owner of Forest House Accountants and Advisors. Multiple board positions across mining and energy sectors. MBA, Chartered Accountant.'},
  {initials:'CS',name:'Chetan V Saligrama',role:'President, Chief Operating Officer & Director',bio:'CEO of Compare & Connect since October 2014, leading expansions across Australia and New Zealand. Bachelor\'s in Electronics Engineering (BMS College), Master\'s in Electronics (RMIT University).'},
  {initials:'RJ',name:'Rohit Jhamb',role:'Chief Business Officer & Director',bio:'Senior commander at Air India since January 2023. Over 30 years in aviation with focus on unmanned aerial systems. Holds over 10,000 hours commercial flying experience.'},
  {initials:'SP',name:'Samir Pandey',role:'Chief Strategy Officer',bio:'Finance professional with 17+ years in corporate strategy and M&A. Oxford MBA. Scaled a frozen desserts company from $1M to $8M revenue. Executed transactions exceeding $1.25 billion.'},
];

const BOARD = [
  {initials:'NB',name:'Natraj Balasubramanian',role:'CEO & Director',bio:'See management profile.'},
  {initials:'CS',name:'Chetan V Saligrama',role:'President, COO & Director',bio:'See management profile.'},
  {initials:'UM',name:'Usha Murphy',role:'Independent Director',bio:'Board-certified diagnostic radiologist with 20+ years experience. Chairman of Diagnostic Imaging for Contra Costa County since June 2024. M.D. from Temple University; MBA from Harvard Business School.'},
  {initials:'RP',name:'Ragur Kuppuswamy Padmanabhan',role:'Independent Director',bio:'CEO of Maidee Agro and Infrastructure Private Limited since November 2020. Former SEBI senior leadership (2011–2016). Bachelor of Science from University of Madras.'},
  {initials:'SB',name:'Stephen Christopher Buehler',role:'Independent Director',bio:'Founder and managing member of Astra Ventures Investment Partners since January 2020. Previously Managing Director & COO at Blackstone. 25+ years in business operations and financial governance. MBA from Northwestern University (Kellogg).'},
];

// Investor presentations are furnished to the SEC as 6-K exhibits.
// Each `url` opens the real SEC filing where that presentation/update was furnished.
const PRESENTATIONS = [
  {title:'Q1 FY2026 Investor Presentation',date:'Apr 2026',size:'4.2 MB',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226020506/0001493152-26-020506-index.htm'},
  {title:'Living Infrastructure Platform Overview',date:'May 2026',size:'5.8 MB',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226025545/0001493152-26-025545-index.htm'},
  {title:'Home.cc Acquisition & LivTech Strategy',date:'May 2026',size:'6.1 MB',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226022406/0001493152-26-022406-index.htm'},
  {title:'ClearBank Embedded Banking Collaboration',date:'Jun 2026',size:'3.7 MB',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226026774/0001493152-26-026774-index.htm'},
  {title:'Switchcraft UK Partnership Overview',date:'May 2026',size:'4.0 MB',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226025173/0001493152-26-025173-index.htm'},
  {title:'Three-for-One Stock Split — Investor Brief',date:'Apr 2026',size:'2.4 MB',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226016061/0001493152-26-016061-index.htm'},
  {title:'IPO Prospectus (Form 424B4)',date:'Feb 2026',size:'7.2 MB',url:'https://www.sec.gov/Archives/edgar/data/2076975/000149315226004786/form424b4.htm'},
];

const EVENTS = [
  {month:'Jun',day:'26',title:'Q2 FY2026 Earnings Call & Webcast',details:'8:00 AM AWST · Live audio webcast',type:'earnings'},
  {month:'Jul',day:'14',title:'AI & Automation Investor Day',details:'Sydney, Australia · In-person + virtual',type:'conference'},
  {month:'Aug',day:'05',title:'Global Technology Growth Conference',details:'Fireside chat · Management presenting',type:'conference'},
  {month:'Sep',day:'18',title:'Emerging Asia Tech Summit',details:'Singapore · In-person + webcast',type:'conference'},
  {month:'Nov',day:'12',title:'Q1 FY2027 Earnings Call',details:'8:00 AM AWST · Live audio webcast',type:'earnings'},
  {month:'Feb',day:'26',title:'Annual General Meeting',details:'Perth, Western Australia + Virtual',type:'agm'},
];

const PAST_EVENTS = [
  {month:'May',day:'28',title:'Q1 FY2026 Results Webcast',details:'Replay available on Presentations page',type:'earnings'},
  {month:'Apr',day:'30',title:'Global Technology Growth Investor Conference',details:'New York, NY · Fireside chat',type:'conference'},
  {month:'Mar',day:'06',title:'FY2026 Corporate Strategy Day',details:'Sydney, Australia · Webcast replay available',type:'presentation'},
  {month:'Feb',day:'25',title:'FY2025 Annual Results Webcast',details:'Replay available on Presentations page',type:'earnings'},
];

const FAQ = [
  {q:'Where is Braiin headquartered?',a:'BRAIIN Limited\'s head and registered office is located at 283 Rokeby Road, Subiaco, WA 6008, Australia.'},
  {q:'Is BRAIIN a public company?',a:'Yes. BRAIIN Limited is a publicly traded company. Its common shares trade on the Nasdaq Capital Market under the symbol "BRAI".'},
  {q:'Who is BRAIIN\'s transfer agent?',a:'The transfer agent and registrar for ordinary shares is Lucky Lucko, Inc., located at 415 Mission St., San Francisco, CA 94105, reachable at +1 (626) 688-5200.'},
  {q:'Who is BRAIIN\'s auditor?',a:'BRAIIN\'s independent auditor is BDO Audit Pty Ltd., a public accounting firm based in Sydney, NSW, Australia.'},
  {q:'Who is BRAIIN\'s investor relations contact?',a:'You may reach Lucas A. Zimmerman or Ian Scargill at MZ Group via email at BRAI@mzgroup.us or by calling +1 (949) 259-4987.'},
  {q:'What are Braiin\'s core business segments?',a:'Braiin operates across three core AI platforms: (1) Precision Agriculture — autonomous robotics and IoT analytics; (2) Customer Experience — ML engines for automation and personalization; (3) Property Technology — IoT and AI for smart buildings.'},
  {q:'When is Braiin\'s fiscal year?',a:'Braiin\'s fiscal year runs from 1 July to 30 June. The Company reports half-year results (6-K) typically in February, and full-year results (20-F) typically in August/September.'},
  {q:'Is BRAIIN a foreign private issuer?',a:'Yes. Braiin Limited is an Australian company qualifying as a "foreign private issuer" under SEC rules. It files 20-F (annual report) and 6-K (periodic reports).'},
  {q:'Does Braiin pay dividends?',a:'Braiin Limited does not currently pay dividends. Capital is reinvested into technology development, market expansion, and strategic acquisitions.'},
  {q:'Where can I find BRAIIN\'s SEC filings?',a:'All SEC filings are available on our SEC Filings page and directly through the SEC EDGAR system at www.sec.gov. Search for "Braiin Limited" or use CIK 0002076975.'},
];

// Helper: format date
function fmtDate(d) { return d; }
// Helper: badge color
function badgeColor(type) {
  const map = {earnings:'#059669',conference:'#0D6EFD',presentation:'#7c3aed',agm:'#d97706'};
  return map[type] || '#0D6EFD';
}
