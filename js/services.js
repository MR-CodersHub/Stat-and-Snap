/**
 * STAT & SNAP — Services database + dynamic detail renderer.
 * service-details.html?service=<slug> renders a unique service per card.
 * Without a slug (nav links), the Varsity Team Photo Day service is shown.
 */
const SERVICES = [
  {
    slug: "individual-portraits",
    tag: "Studio & Field",
    title: "Individual Athlete Portraits",
    excerpt: "Dramatic multi-light studio portraits with stadium backgrounds, smoke FX, and digital poster effects.",
    image: "https://i.pinimg.com/736x/85/cf/ac/85cfacfe0870f89a15524f31cb9d83fe.jpg",
    hero: "https://i.pinimg.com/736x/a2/dc/ed/a2dced51b0e4d3343428a569971d461b.jpg",
    duration: "2–3 min / athlete",
    price: "From $35 / athlete",
    icon: "fa-user-ninja",
    overviewTitle: "Magazine-Worthy Portraits For Every Roster Spot",
    overview: "Our mobile studio brings stadium-grade lighting, custom school-crest backdrops, and high-contrast sports art directly to your gym or field. Each athlete gets three directed poses — no awkward blue-backdrop yearbook look.",
    extra: "Barcode check-in links every frame to the student ID, so parents get correctly named galleries within 48 hours and yearbook advisors get clean PSPA files.",
    includes: [
      { icon: "fa-lightbulb", color: "var(--color-gold)", t: "4-Point Mobile Strobes", d: "Key, rim, and background lights plus optional smoke FX for arena depth." },
      { icon: "fa-palette", color: "var(--color-crimson)", t: "Custom Crest Backdrops", d: "School colors, mascot graphics, and jersey-number art baked into every frame." },
      { icon: "fa-bolt", color: "var(--color-evergreen)", t: "Same-Day Culling", d: "Best 3 frames per athlete selected on-site for 48-hour proof delivery." }
    ],
    steps: [
      { t: "Roster Sync", d: "AD uploads CSV 7 days out; QR cards printed per athlete." },
      { t: "Studio Build", d: "Crew arrives 60 min early to build lights and calibrate color." },
      { t: "Rapid Posing", d: "3 signature poses per athlete, ~2 minutes door-to-door." },
      { t: "Proof Delivery", d: "Watermarked galleries texted/emailed to parents in 48 hrs." }
    ],
    gallery: [
      { img: "https://i.pinimg.com/736x/d2/a1/a2/d2a1a2ae273484e74fd11aaa02672385.jpg", tag: "Smoke Series", title: "Arena Glow Portrait" },
      { img: "https://i.pinimg.com/736x/cb/a5/e7/cba5e75a639c90ad034700dabdb72a7b.jpg", tag: "Edge Light", title: "Varsity Edge Portrait" },
      { img: "https://i.pinimg.com/1200x/b9/58/31/b95831624681a42da8e084fe84b7012d.jpg", tag: "Poster Cutout", title: "Dramatic Poster Art" }
    ],
    faqs: [
      { q: "How long does each athlete take?", a: "Under 3 minutes: scan QR, 3 poses, back to practice. A 60-player roster flows in under 2 hours." },
      { q: "Can parents choose backgrounds?", a: "Yes — galleries include 2–3 backdrop options (arena black, school crest, stadium lights) at no extra charge." }
    ]
  },
  {
    slug: "team-group",
    tag: "Unity & Tradition",
    title: "Team & Group Photography",
    excerpt: "Symmetrical team lineups, composite panoramas, and gymnasium vinyl banners for the whole program.",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop",
    hero: "https://i.pinimg.com/736x/a2/dc/ed/a2dced51b0e4d3343428a569971d461b.jpg",
    duration: "15 min / team",
    price: "From $349 / team",
    icon: "fa-people-group",
    overviewTitle: "One Sharp Team Photo — Even With Absent Players",
    overview: "We shoot disciplined 15-minute team sessions with taped floor marks and locked lighting, then build composite panoramas so blinkers, late arrivals, and flu-season absences never ruin the final print.",
    extra: "Every booking includes a gym-ready vinyl banner file and a PSPA-named team roster image for yearbook spreads.",
    includes: [
      { icon: "fa-layer-group", color: "var(--color-gold)", t: "Composite Panoramas", d: "Every athlete's best expression merged — retake players added seamlessly." },
      { icon: "fa-flag", color: "var(--color-crimson)", t: "Vinyl Banner Export", d: "High-definition gym wall banner layout with sponsor strip included." },
      { icon: "fa-qrcode", color: "var(--color-evergreen)", t: "Roster Lineup System", d: "Height-ordered lineup cards keep 30-player teams posed in minutes." }
    ],
    steps: [
      { t: "Lineup Plan", d: "Coaches get height-ordered lineup sheets the night before." },
      { t: "Group Capture", d: "Formal lineup + fun energy shot, 10 minutes total." },
      { t: "Individuals", d: "Players rotate to portrait station without leaving the gym." },
      { t: "Composite Build", d: "Blinkers fixed, absentees composited, banner shipped in 2 weeks." }
    ],
    gallery: [
      { img: "https://i.pinimg.com/1200x/d5/91/32/d59132fcdb3142c9bbff298066746c19.jpg", tag: "Varsity Banner", title: "Gym Wall Roster Banner" },
      { img: "https://i.pinimg.com/1200x/0b/a3/57/0ba3575308371967ef49e99db796064a.jpg", tag: "Panorama", title: "Composite Team Panorama" },
      { img: "https://i.pinimg.com/1200x/79/83/8a/79838ab60a8a3b683542c8e4d5c31f59.jpg", tag: "Champions", title: "Championship Keepsake" }
    ],
    faqs: [
      { q: "What if players are missing?", a: "They attend the free retake day within 14 days and are composited in — the final team photo looks like everyone was there." },
      { q: "Do coaches get free prints?", a: "Yes — head and assistant coaches receive complimentary 8x10 team prints." }
    ]
  },
  {
    slug: "action-coverage",
    tag: "Live Game Day",
    title: "Action Game Coverage",
    excerpt: "High-speed sideline photography for Friday night lights, tournaments, and rivalry games.",
    image: "https://i.pinimg.com/1200x/b2/e5/70/b2e570ed9283e5cccd89dfa565efcaf0.jpg",
    hero: "https://i.pinimg.com/736x/a2/dc/ed/a2dced51b0e4d3343428a569971d461b.jpg",
    duration: "Full game (2–3 hrs)",
    price: "From $499 / game",
    icon: "fa-bolt",
    overviewTitle: "Friday Night Energy, Frozen At 1/8000s",
    overview: "Two sideline shooters cover both ends of the field with 400mm+ glass and high-speed sync — tackles, buzzer-beaters, and celebrations delivered as a shareable gallery the next morning.",
    extra: "Includes a 20-image highlight pack for the school's socials plus full-resolution downloads for yearbook action spreads.",
    includes: [
      { icon: "fa-camera", color: "var(--color-gold)", t: "Dual Sideline Crew", d: "Two angles on every play — no missed touchdowns or game-winners." },
      { icon: "fa-share-nodes", color: "var(--color-crimson)", t: "Next-Morning Highlights", d: "20 edited hero shots for Instagram, HUDL, and MaxPreps by 9 AM." },
      { icon: "fa-book-open", color: "var(--color-evergreen)", t: "Yearbook Action Pack", d: "200+ tagged, high-res frames sized for full-bleed spreads." }
    ],
    steps: [
      { t: "Scout & Plan", d: "We confirm kickoff, lighting, and roster numbers 48 hrs out." },
      { t: "Sideline Setup", d: "Crew arrives 60 min early for white-balance and remote angles." },
      { t: "Live Coverage", d: "Full-game burst coverage plus halftime portrait sidelines." },
      { t: "Rapid Delivery", d: "Highlights next morning, full gallery within 72 hours." }
    ],
    gallery: [
      { img: "https://i.pinimg.com/1200x/b2/e5/70/b2e570ed9283e5cccd89dfa565efcaf0.jpg", tag: "Football", title: "Friday Night Drive" },
      { img: "https://i.pinimg.com/1200x/47/82/20/4782203c09dd83d425e5b33b0f5000f2.jpg", tag: "Gear Up", title: "Gridiron Detail Series" },
      { img: "https://i.pinimg.com/736x/ba/3d/25/ba3d250059d112a852a2b1767d2297c5.jpg", tag: "Stadium", title: "Varsity Stadium Night" }
    ],
    faqs: [
      { q: "Do you shoot night games?", a: "Yes — our strobes and fast primes are built for poorly lit fields. Floodlit playoff coverage is our specialty." },
      { q: "Can parents buy action prints?", a: "Absolutely — each jersey number is tagged so parents can filter the gallery by their athlete." }
    ]
  },
  {
    slug: "yearbook-sync",
    tag: "PSPA Compliant",
    title: "Yearbook Photography & Sync",
    excerpt: "PSPA-compliant index exports, roster linking, and direct portal sync for advisors.",
    image: "https://i.pinimg.com/1200x/7b/ce/4b/7bce4b41b875c4c7d423a672801bf01f.jpg",
    hero: "https://i.pinimg.com/736x/a2/dc/ed/a2dced51b0e4d3343428a569971d461b.jpg",
    duration: "Season-long support",
    price: "Included in Varsity+",
    icon: "fa-book-open",
    overviewTitle: "Yearbook Deadlines Without The Panic",
    overview: "We deliver PSPA-formatted portraits (LastFirst-Grade-ID, no spaces) that drop straight into your publisher's software — plus a cloud portal your student editors can pull from all season.",
    extra: "Chloe, our production manager, audits your roster CSV before photo day so hyphenated names and transfers never become deadline-week surprises.",
    includes: [
      { icon: "fa-tags", color: "var(--color-gold)", t: "PSPA Roster Tagging", d: "Every frame filename-matched to SIS IDs with quarantine review." },
      { icon: "fa-cloud-arrow-up", color: "var(--color-crimson)", t: "Portal Sync", d: "Direct cloud folder for advisors and student editors, season-long." },
      { icon: "fa-circle-check", color: "var(--color-evergreen)", t: "3-Cycle Proofing", d: "Roster, portrait, then spread checks — locked before printer dates." }
    ],
    steps: [
      { t: "CSV Audit", d: "Registrar export reviewed 2 weeks before photo day." },
      { t: "Tagged Capture", d: "QR-linked shooting guarantees correct filenames at capture." },
      { t: "Advisor Review", d: "Quarantine folder cleared weekly with your staff." },
      { t: "Publisher Drop", d: "Final PSPA export delivered 2 weeks ahead of plant date." }
    ],
    gallery: [
      { img: "https://i.pinimg.com/1200x/7b/ce/4b/7bce4b41b875c4c7d423a672801bf01f.jpg", tag: "Index", title: "PSPA Index Portraits" },
      { img: "https://i.pinimg.com/736x/33/60/24/3360244063f78dee8cceb8e2892dd980.jpg", tag: "Workflow", title: "Advisor Sync Session" },
      { img: "https://i.pinimg.com/736x/63/6f/63/636f630298114eec8f8534c75c2fc0b3.jpg", tag: "Deadline", title: "Proof-to-Print Review" }
    ],
    faqs: [
      { q: "Which publishers do you support?", a: "All major PSPA ingest systems — Jostens, Herff Jones, Balfour, and TreeRing exports included." },
      { q: "What about mid-year transfers?", a: "They shoot on retake day and merge into the same PSPA batch automatically." }
    ]
  },
  {
    slug: "senior-portraits",
    tag: "Class of 2026",
    title: "Senior Athlete Portraits",
    excerpt: "Tribute sessions with varsity jackets, gear, trophies, and gym-wall banner art.",
    image: "https://i.pinimg.com/736x/6e/90/2f/6e902f225fb775185d5fcd5809545ab7.jpg",
    hero: "https://i.pinimg.com/736x/a2/dc/ed/a2dced51b0e4d3343428a569971d461b.jpg",
    duration: "20 min / senior",
    price: "From $89 / senior",
    icon: "fa-medal",
    overviewTitle: "Senior Night Starts With The Portrait",
    overview: "Extended 20-minute sessions: varsity jacket look, uniform action look, and a banner-optimized hero pose. Seniors direct their own mood with smoke, spotlights, and legacy props.",
    extra: "Banner vinyl ships in 3 weeks — photographed in August, hanging for the home opener. Sponsor strips can zero-out the cost.",
    includes: [
      { icon: "fa-shirt", color: "var(--color-gold)", t: "3-Look Session", d: "Jacket, uniform, and banner hero — 15+ proofs per senior." },
      { icon: "fa-trophy", color: "var(--color-crimson)", t: "Legacy Props", d: "Trophies, letterman patches, and career-stat overlays available." },
      { icon: "fa-flag", color: "var(--color-evergreen)", t: "Banner-Ready Files", d: "6-foot print resolution with grommet-safe crop guides." }
    ],
    steps: [
      { t: "Style Consult", d: "Seniors pick looks and props via online form before shoot week." },
      { t: "Tribute Shoot", d: "20-minute directed session with parent viewing on laptop." },
      { t: "Banner Proof", d: "Digital banner mockup approved before vinyl goes to print." },
      { t: "Unveiling", d: "Banners delivered and hung before first home game." }
    ],
    gallery: [
      { img: "https://i.pinimg.com/736x/6e/90/2f/6e902f225fb775185d5fcd5809545ab7.jpg", tag: "Tribute", title: "Varsity Jacket Series" },
      { img: "https://i.pinimg.com/1200x/f5/d1/71/f5d171454f557a1d2420567e409fb9d8.jpg", tag: "Banner", title: "Senior Banner Wall" },
      { img: "https://i.pinimg.com/1200x/70/1b/ad/701badfcc2cfca1de15c56e4f21b7600.jpg", tag: "Dedication", title: "Yearbook Dedication Look" }
    ],
    faqs: [
      { q: "When should seniors book?", a: "August — vinyl + shipping takes 3 weeks and you want banners up for opening night." },
      { q: "Can families order extra prints?", a: "Yes — senior galleries include wall art, albums, and announcement cards." }
    ]
  },
  {
    slug: "events-galas",
    tag: "Banquets & Nights",
    title: "School Sports Events & Galas",
    excerpt: "Banquets, signing days, championships, and athletic galas with red-carpet polish.",
    image: "https://i.pinimg.com/1200x/cf/8c/91/cf8c91f7ffcabc8dc21c51a1bc9156e2.jpg",
    hero: "https://i.pinimg.com/736x/a2/dc/ed/a2dced51b0e4d3343428a569971d461b.jpg",
    duration: "Half / full day",
    price: "From $749 / event",
    icon: "fa-champagne-glasses",
    overviewTitle: "Banquets That Feel Like Awards Shows",
    overview: "Red-carpet step-and-repeat, table candids, trophy details, and on-stage award moments — plus a same-week highlight reel the booster club can actually fundraise with.",
    extra: "Signing-day packages include family portraits with coaches and instant 8x10 prints for the commitment table.",
    includes: [
      { icon: "fa-camera-retro", color: "var(--color-gold)", t: "Step-and-Repeat Wall", d: "Branded backdrop with studio lighting for athlete arrivals." },
      { icon: "fa-award", color: "var(--color-crimson)", t: "Award Moment Capture", d: "Stage, handshake, and trophy-lift frames for every honoree." },
      { icon: "fa-truck-fast", color: "var(--color-evergreen)", t: "72-Hour Gala Gallery", d: "Shareable parent gallery plus 30 social-ready highlights." }
    ],
    steps: [
      { t: "Run-of-Show", d: "We map speeches, awards, and photo windows with your AD." },
      { t: "Red Carpet", d: "Arrivals and team tables shot before lights dim." },
      { t: "Ceremony", d: "Silent-shutter stage coverage — no clicks during speeches." },
      { t: "After-Party", d: "Team candids and sponsor thank-you frames to close the night." }
    ],
    gallery: [
      { img: "https://i.pinimg.com/1200x/cf/8c/91/cf8c91f7ffcabc8dc21c51a1bc9156e2.jpg", tag: "Celebration", title: "Championship Confetti Night" },
      { img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop", tag: "Gala", title: "Athletic Awards Gala" },
      { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", tag: "Crew", title: "Banquet Team Coverage" }
    ],
    faqs: [
      { q: "Do you provide prints on-site?", a: "Yes — add live 8x10 printing for signing tables and senior-night gifts." },
      { q: "Can you film as well?", a: "We offer a highlight photo-film add-on; full video crews available on request." }
    ]
  },
  {
    slug: "retake-makeup",
    tag: "Zero Absentees",
    title: "Photo Retake & Makeup Days",
    excerpt: "Dedicated backup dates guaranteeing 100% team inclusion — free with every booking.",
    image: "https://i.pinimg.com/1200x/11/d4/23/11d423fe96193569a5849c988430af92.jpg",
    hero: "https://i.pinimg.com/736x/a2/dc/ed/a2dced51b0e4d3343428a569971d461b.jpg",
    duration: "Within 14 days",
    price: "Free with booking",
    icon: "fa-rotate-left",
    overviewTitle: "No Senior Left Out Of The Team Photo",
    overview: "Illness, injury, and academic conflicts happen. Every photo day includes a scheduled makeup date within 14 days on the identical lighting setup — absentees composite invisibly into team panoramas.",
    extra: "Parents of retake athletes get the same 48-hour gallery promise and the same print packages.",
    includes: [
      { icon: "fa-calendar-check", color: "var(--color-gold)", t: "Guaranteed Return Date", d: "Locked at booking — no chasing the studio for availability." },
      { icon: "fa-wand-magic-sparkles", color: "var(--color-crimson)", t: "Invisible Composites", d: "Same backdrop, same strobe power, logged per team." },
      { icon: "fa-bell", color: "var(--color-evergreen)", t: "Auto Parent Alerts", d: "Absent families texted directly with their retake window." }
    ],
    steps: [
      { t: "Absentee List", d: "Coaches flag missing athletes in the portal night-of." },
      { t: "Retake Invite", d: "Families get SMS booking links within 24 hours." },
      { t: "Matched Shoot", d: "Same setup re-built from logged team settings." },
      { t: "Merge & Ship", d: "Panoramas updated and re-shipped at no charge." }
    ],
    gallery: [
      { img: "https://i.pinimg.com/1200x/11/d4/23/11d423fe96193569a5849c988430af92.jpg", tag: "Lineup", title: "Makeup Day Lineup" },
      { img: "https://i.pinimg.com/736x/6b/b9/4f/6bb94fa9a2e59d04dac1709f43915c1d.jpg", tag: "Composite", title: "Seamless Team Merge" },
      { img: "https://i.pinimg.com/1200x/0b/a3/57/0ba3575308371967ef49e99db796064a.jpg", tag: "Final", title: "100% Inclusion Print" }
    ],
    faqs: [
      { q: "Is retake day really free?", a: "Yes — one retake date per season is included in every team booking." },
      { q: "What if an athlete is still out?", a: "We hold the composite slot and merge them at the next season shoot or via studio visit." }
    ]
  },
  {
    slug: "bulk-contracts",
    tag: "Full Department",
    title: "Custom School Bulk Contracts",
    excerpt: "Season-long athletic department retainers with revenue share and priority dates.",
    image: "https://i.pinimg.com/1200x/fb/e2/40/fbe240a95b3f54be1e9a363c65d5b54c.jpg",
    hero: "https://i.pinimg.com/736x/a2/dc/ed/a2dced51b0e4d3343428a569971d461b.jpg",
    duration: "Full season / year",
    price: "Custom + 10% share",
    icon: "fa-handshake",
    overviewTitle: "One Partner For All 18 Teams",
    overview: "Bulk contracts lock your entire fall–winter–spring calendar with priority dates, unlimited team banners, free coach prints, and a 10% revenue share back to the athletic department.",
    extra: "You get a dedicated account director, seasonal planning calls, and a single invoice parents never see — they order direct.",
    includes: [
      { icon: "fa-building-columns", color: "var(--color-gold)", t: "Priority Calendar", d: "First pick of fall/winter dates before single-team bookings open." },
      { icon: "fa-sack-dollar", color: "var(--color-crimson)", t: "10% Revenue Share", d: "Quarterly payout to the athletic department on parent orders." },
      { icon: "fa-user-tie", color: "var(--color-evergreen)", t: "Account Director", d: "One contact for scheduling, rosters, banners, and yearbook sync." }
    ],
    steps: [
      { t: "Season Audit", d: "We map all teams, gyms, and yearbook deadlines in one call." },
      { t: "Contract & Dates", d: "Custom proposal with locked photo-day matrix." },
      { t: "Rolling Shoots", d: "Fall, winter, spring executed with same crew and look." },
      { t: "Share & Review", d: "Quarterly revenue report + banner refresh planning." }
    ],
    gallery: [
      { img: "https://i.pinimg.com/1200x/fb/e2/40/fbe240a95b3f54be1e9a363c65d5b54c.jpg", tag: "Department", title: "All-School Media Retainer" },
      { img: "https://i.pinimg.com/1200x/d5/91/32/d59132fcdb3142c9bbff298066746c19.jpg", tag: "Banners", title: "Unlimited Banner Program" },
      { img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=800&auto=format&fit=crop", tag: "Night", title: "Season-Long Coverage" }
    ],
    faqs: [
      { q: "What does the school pay?", a: "$0 upfront — parent orders fund the program; schools earn a 10% share." },
      { q: "Can we cancel mid-year?", a: "Yes — contracts are season-to-season with a 30-day out and you keep all delivered files." }
    ]
  },
  {
    slug: "tournament-night",
    tag: "Playoffs & Lights",
    title: "Tournament & Night-Game Coverage",
    excerpt: "Multi-day storytelling and floodlit playoff coverage for championship runs.",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=800&auto=format&fit=crop",
    hero: "https://i.pinimg.com/736x/a2/dc/ed/a2dced51b0e4d3343428a569971d461b.jpg",
    duration: "Multi-day",
    price: "From $899 / weekend",
    icon: "fa-trophy",
    overviewTitle: "Championship Runs Deserve Championship Coverage",
    overview: "Bracket-long storytelling: arrival portraits, pool-play action, semifinal drama, and trophy-lift finales — edited nightly so the hype builds while the tournament is still live.",
    extra: "Floodlit night-game rigs (fast primes + courtside strobes) keep faces clean even under the worst park-district lights.",
    includes: [
      { icon: "fa-moon", color: "var(--color-gold)", t: "Night-Game Rig", d: "Low-light primes and balanced strobes for true skin tones." },
      { icon: "fa-fire", color: "var(--color-crimson)", t: "Nightly Hype Drops", d: "30-image edits delivered before the next morning's bracket." },
      { icon: "fa-film", color: "var(--color-evergreen)", t: "Run Recap Gallery", d: "Championship album with team, action, and trophy chapters." }
    ],
    steps: [
      { t: "Bracket Brief", d: "Schedule, venues, and key players mapped pre-tournament." },
      { t: "Pool Play", d: "Full-team coverage with nightly selects for socials." },
      { t: "Knockouts", d: "Dual shooters for semifinals and finals." },
      { t: "Trophy Edit", d: "Final recap gallery + championship prints within a week." }
    ],
    gallery: [
      { img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=800&auto=format&fit=crop", tag: "Lights", title: "Playoff Under Lights" },
      { img: "https://i.pinimg.com/736x/ba/3d/25/ba3d250059d112a852a2b1767d2297c5.jpg", tag: "Stadium", title: "Varsity Stadium Final" },
      { img: "https://i.pinimg.com/1200x/47/82/20/4782203c09dd83d425e5b33b0f5000f2.jpg", tag: "Detail", title: "Tournament Detail Series" }
    ],
    faqs: [
      { q: "Do you travel for tournaments?", a: "Yes — regional travel included; state finals quoted per bracket." },
      { q: "How fast are finals photos?", a: "Trophy-lift selects within 2 hours for school announcements and local press." }
    ]
  }
];

function getService() {
  const slug = new URLSearchParams(window.location.search).get("service");
  return SERVICES.find((s) => s.slug === slug) || SERVICES[1];
}

function escS(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderService() {
  const svc = getService();

  document.title = svc.title + " | Stat & Snap Services";
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", svc.excerpt);

  const heroBg = document.getElementById("serviceHeroBg");
  if (heroBg) heroBg.style.backgroundImage = "url('" + svc.hero + "')";
  const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  set("serviceCrumb", svc.title);
  const tagEl = document.getElementById("serviceTag");
  if (tagEl) tagEl.innerHTML = '<i class="fa-solid fa-star"></i> ' + escS(svc.tag);
  set("serviceTitle", svc.title);
  set("serviceDesc", svc.excerpt);
  set("serviceDuration", svc.duration);
  set("servicePrice", svc.price);
  set("serviceOverviewTitle", svc.overviewTitle);
  set("serviceOverviewDesc", svc.overview);
  set("serviceOverviewExtra", svc.extra);
  set("serviceCtaTitle", "Book " + svc.title + " Now");

  const img = document.getElementById("serviceImage");
  if (img) { img.src = svc.image; img.alt = svc.title; }

  const inc = document.getElementById("includesGrid");
  if (inc) {
    inc.innerHTML = svc.includes.map((f) =>
      '<div class="card-glass svc-d-inc"><span class="svc-d-inc-icon"><i class="fa-solid ' + f.icon + '"></i></span>'
      + '<h3>' + escS(f.t) + '</h3><p>' + escS(f.d) + '</p></div>'
    ).join("");
  }

  const proc = document.getElementById("processGrid");
  if (proc) {
    proc.innerHTML = svc.steps.map((s, i) =>
      '<div class="process-step svc-d-step"><div class="process-number">' + (i + 1) + '</div><h4>' + escS(s.t) + '</h4>'
      + '<p>' + escS(s.d) + '</p></div>'
    ).join("");
  }

  const gal = document.getElementById("galleryGrid");
  if (gal) {
    gal.innerHTML = svc.gallery.map((g) =>
      '<div class="portfolio-card" data-lightbox="' + g.img + '"><img src="' + g.img + '" alt="' + escS(g.title) + '" loading="lazy">'
      + '<div class="portfolio-overlay"><span class="portfolio-tag">' + escS(g.tag) + '</span><h3 class="portfolio-title">' + escS(g.title) + '</h3></div></div>'
    ).join("");
    if (window.__statSnapLightbox) window.__statSnapLightbox();
  }

  const faq = document.getElementById("faqContainer");
  if (faq) {
    faq.innerHTML = svc.faqs.map((f, i) =>
      '<div class="accordion-item' + (i === 0 ? " active" : "") + '"><div class="accordion-header"><span>' + escS(f.q) + '</span>'
      + '<i class="fa-solid fa-chevron-down accordion-icon"></i></div><div class="accordion-body">' + escS(f.a) + '</div></div>'
    ).join("");
    faq.querySelectorAll(".accordion-header").forEach((header) => {
      header.addEventListener("click", () => {
        const item = header.closest(".accordion-item");
        const wasActive = item.classList.contains("active");
        faq.querySelectorAll(".accordion-item").forEach((el) => el.classList.remove("active"));
        if (!wasActive) item.classList.add("active");
      });
    });
  }

  const rel = document.getElementById("relatedServices");
  if (rel) {
    const others = SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3);
    rel.innerHTML = others.map((s) =>
      '<div class="card-glass svc-d-rel"><div class="svc-d-rel-img"><img src="' + s.image + '" alt="' + escS(s.title) + '" loading="lazy">'
      + '<span class="section-tag svc-d-rel-tag">' + escS(s.tag) + '</span></div>'
      + '<h3>' + escS(s.title) + '</h3>'
      + '<p>' + escS(s.excerpt) + '</p>'
      + '<a href="service-details.html?service=' + s.slug + '" class="btn btn-sm btn-outline">Explore Details <i class="fa-solid fa-chevron-right"></i></a></div>'
    ).join("");
  }
}

document.addEventListener("DOMContentLoaded", renderService);
