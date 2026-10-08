/**
 * STAT & SNAP — Blog article database + dynamic detail renderer.
 * blog-details.html?post=<slug> renders a unique article per blog card.
 * Without a slug (nav links), the featured article is shown.
 */
const BLOG_AUTHORS = {
  elena: {
    name: "Elena Rostova",
    role: "Creative Director & Founder, Stat & Snap",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    bio: "Elena has photographed over 400 high school athletic events and works directly with athletic boards on media strategy."
  },
  marcus: {
    name: "Marcus Sterling",
    role: "Senior Action Lead, Stat & Snap",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    bio: "Marcus is a high-speed action specialist covering football, basketball, and track across 120+ partner schools."
  },
  chloe: {
    name: "Chloe Vance",
    role: "Yearbook Production Manager, Stat & Snap",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    bio: "Chloe is an expert in PSPA file indexing, color calibration, and print publishing workflows for school yearbooks."
  }
};

const BLOG_POSTS = [
  {
    slug: "photo-day-tips-essential",
    category: "Photo Day Tips",
    date: "October 2, 2026",
    readTime: "6 min read",
    title: "10 Essential Photo Day Tips Every Athletic Director Must Know",
    excerpt: "Streamline your high school sports media schedule, maximize parent satisfaction, and guarantee 100% yearbook roster accuracy.",
    image: "https://i.pinimg.com/1200x/66/39/3c/66393c083acd8bd4885f33efb50bed35.jpg",
    author: "elena",
    takeaways: [
      "Pre-scheduling team time slots 3 weeks in advance prevents gym usage conflicts.",
      "Barcode registration eliminates manual data entry and spelling mistakes in parent galleries.",
      "Dedicated retake dates ensure absent student athletes are included in final team composite panoramas."
    ],
    quote: "A structured 15-minute staggered schedule allows photographers to focus on lighting quality rather than crowd control.",
    sections: [
      { h: "1. Establish A Staggered Time Slot Matrix", p: ["Never bring all varsity, JV, and freshman teams into the gymnasium at once. Allocate dedicated 15-minute windows per team. For instance, set Freshman Boys Basketball at 3:15 PM, JV at 3:30 PM, and Varsity at 3:45 PM. This keeps room noise low and maintains steady photographer momentum."] },
      { h: "2. Leverage Barcode Scanning For Roster Integrity", p: ["The biggest cause of delayed yearbook publishing is misidentified student photos. By adopting QR barcode scanning at the photo station, each frame is instantly tied to the student's official school ID number in real time."] },
      { h: "3. Lock In Guaranteed Makeup Sessions Early", p: ["Athletes get sick, sustain injuries, or miss team photos due to academic conflicts. Always ensure your media studio includes a backup retake session within 14 days of the primary photo day so no senior is left out of the team banner."] }
    ]
  },
  {
    slug: "basketball-lighting",
    category: "Athlete Portraits",
    date: "Sep 28, 2026",
    readTime: "5 min read",
    title: "How Mobile Lighting Sets The Tone For Varsity Basketball Media Days",
    excerpt: "Learn how high-speed flash sync turns gymnasiums into stadium arenas.",
    image: "https://i.pinimg.com/1200x/e5/ac/a3/e5aca34ba37440d824470d90a26fe78b.jpg",
    author: "elena",
    takeaways: [
      "High-speed sync flash overpowers flat gym fluorescents for dramatic contrast.",
      "A single red-gelled rim light creates the signature arena glow.",
      "Smoke FX adds depth but requires 10 extra minutes of gym prep."
    ],
    quote: "One strobe, one gel, one vision — that is all a great basketball portrait needs.",
    sections: [
      { h: "1. Kill The Ambient First", p: ["Gym fluorescents are the enemy of drama. We start by underexposing ambient light by two stops, turning the gym into a near-black canvas. Only then do the strobes paint the athlete back into the frame with sculpted highlights."] },
      { h: "2. Gel For Team Identity", p: ["A red or school-color gel on the rim light ties every portrait to team branding. Parents recognize the colors instantly, and the gallery feels like a unified campaign rather than random snapshots."] },
      { h: "3. Pose For The Light, Not The Camera", p: ["Chin down, shoulders angled, ball held into the key light. We direct three go-to poses per athlete so a 60-player roster flows through in under two hours without a single flat frame."] }
    ]
  },
  {
    slug: "pspa-tagging",
    category: "Yearbook Planning",
    date: "Sep 20, 2026",
    readTime: "6 min read",
    title: "Mastering PSPA Roster Tagging For Seamless Yearbook Publication",
    excerpt: "A step-by-step checklist for yearbook advisors to avoid mislabeled student names.",
    image: "https://i.pinimg.com/736x/33/60/24/3360244063f78dee8cceb8e2892dd980.jpg",
    author: "chloe",
    takeaways: [
      "Export filenames must follow LastFirst-Grade-StudentID with zero spaces.",
      "Validate the roster CSV against the SIS before photo day, not after.",
      "Keep one quarantine folder for unmatched scans and clear it weekly."
    ],
    quote: "Clean filenames at capture time save forty hours of manual cleanup at deadline time.",
    sections: [
      { h: "1. Standardize Filenames Before The First Click", p: ["PSPA compliance starts with naming. Every frame leaves our cameras tagged as LastName-FirstName-Grade-ID. No spaces, no nicknames, no exceptions. Publishers ingest these files with zero manual mapping."] },
      { h: "2. Audit The Roster CSV Early", p: ["Ask your registrar for the official student information export two weeks before photo day. Hyphenated last names, suffixes, and preferred names cause 90% of mismatches — resolve them in a spreadsheet, not in panic week."] },
      { h: "3. Build A Quarantine Workflow", p: ["Absent athletes, mid-year transfers, and illegible barcodes land in one quarantine folder. Review it every Friday with your advisor so nothing reaches the publisher untagged."] }
    ]
  },
  {
    slug: "senior-banners",
    category: "School Photography",
    date: "Sep 14, 2026",
    readTime: "4 min read",
    title: "Why Senior Athletic Banners Are The Ultimate High School Tradition",
    excerpt: "Explore how vinyl gym wall banners boost team morale and school spirit.",
    image: "https://i.pinimg.com/1200x/f5/d1/71/f5d171454f557a1d2420567e409fb9d8.jpg",
    author: "marcus",
    takeaways: [
      "Oversized senior banners turn gym walls into recruiting tools.",
      "Shoot banner portraits in August so vinyl ships before first tip-off.",
      "Sponsor logos on banners can fund the entire banner program."
    ],
    quote: "A senior banner is the only trophy that hangs in the gym all season long.",
    sections: [
      { h: "1. Morale You Can Measure", p: ["Ask any senior what their banner unveiling feels like and you will hear the same word: real. When a 6-foot portrait drops in the gym, underclassmen see a standard worth chasing and parents see a program worth funding."] },
      { h: "2. Time The Shoot For August", p: ["Vinyl printing, grommets, and shipping take three weeks. Photograph seniors during pre-season conditioning and banners are courtside for the home opener — not arriving at playoffs."] },
      { h: "3. Let Sponsors Pay For It", p: ["A discreet sponsor strip along the banner bottom covers print costs at most schools we serve. Local businesses love gym-wall visibility, and ADs love a zero-dollar invoice."] }
    ]
  },
  {
    slug: "aquatic-splash",
    category: "Behind The Scenes",
    date: "Sep 05, 2026",
    readTime: "5 min read",
    title: "Capturing High-Speed Water Splash Action In Aquatic Photography",
    excerpt: "Camera settings and lens choice for indoor pool lighting challenges.",
    image: "https://i.pinimg.com/1200x/07/57/8f/07578fbafb8bc6704ae97062143bf817.jpg",
    author: "marcus",
    takeaways: [
      "Freeze splashes at 1/2000s minimum with rear-curtain strobe sync.",
      "A 70-200mm lens keeps bodies dry while staying tight on form.",
      "White-balance for pool LEDs first, then gel strobes to match."
    ],
    quote: "Water forgives nothing — nail exposure in-camera or lose the droplet forever.",
    sections: [
      { h: "1. Tame The Pool Deck Light", p: ["Indoor pools mix daylight skylights with green-shifted LEDs. We lock a custom white balance off a gray card at deck level, then gel our strobes to match so skin tones stay honest and water stays blue."] },
      { h: "2. Shoot Long, Stay Dry", p: ["A 70-200mm at f/2.8 isolates swimmers from chaotic backgrounds while keeping every camera body three meters from splash range. One towel per body, always."] },
      { h: "3. Time The Stroke Peak", p: ["Butterfly breath, freestyle catch, backstroke breakout — each stroke has a one-frame peak. We study heat sheets, pre-focus the lane, and burst only the peak to keep galleries tight."] }
    ]
  },
  {
    slug: "posing-guide",
    category: "Athlete Portraits",
    date: "Aug 29, 2026",
    readTime: "4 min read",
    title: "Posing Guide: 5 Dynamic Poses Every Student Athlete Should Master",
    excerpt: "Simple posture adjustments that dramatically improve sports portrait quality.",
    image: "https://i.pinimg.com/736x/8b/60/25/8b6025ececbc38fb558873e322113f38.jpg",
    author: "elena",
    takeaways: [
      "Angles beat symmetry — turn shoulders 45 degrees from the lens.",
      "Props in hands eliminate stiff arms in every sport.",
      "Chin slightly down and forward sharpens every jawline."
    ],
    quote: "Great posing is just confident posture with somewhere to put your hands.",
    sections: [
      { h: "1. The Power Stance", p: ["Feet shoulder-width, weight on the back leg, chest open to the key light. It works for linemen and liberos alike because it reads as ready — the universal athlete language."] },
      { h: "2. Give Hands A Job", p: ["A ball, a helmet, a crossed-arm grip on the jersey. Empty dangling arms ruin more portraits than bad lighting. Every pose in our playbook assigns the hands first."] },
      { h: "3. Eyes With Intent", p: ["Past the lens, never at the floor. We give athletes a focal point — the championship banner, the student section — and the intensity follows naturally."] }
    ]
  },
  {
    slug: "composite-panoramas",
    category: "Team Photography",
    date: "Aug 18, 2026",
    readTime: "5 min read",
    title: "Composite Panoramas: Solving The Problem Of Missing Team Members",
    excerpt: "How digital composite group photos save the day during flu season.",
    image: "https://i.pinimg.com/736x/6b/b9/4f/6bb94fa9a2e59d04dac1709f43915c1d.jpg",
    author: "elena",
    takeaways: [
      "Shoot every athlete individually against the same backdrop for seamless merges.",
      "Lock tripod position and focal length for the entire roster.",
      "Retake-day athletes composite in with zero visible difference."
    ],
    quote: "Nobody should miss the team photo because of a fever in October.",
    sections: [
      { h: "1. Why Composites Beat Single Shots", p: ["One blink ruins a 40-person photo. Composites let us pick every athlete's best expression, fix blinkers, and add late roster additions weeks later — the final panorama looks sharper than any single frame could."] },
      { h: "2. Consistency Is Everything", p: ["Locked tripod, taped floor marks, identical strobe power. Every individual must match the group lighting exactly, or the merge falls apart. Our crew logs settings per team for this reason."] },
      { h: "3. Flu Season Insurance", p: ["Retake-day athletes are photographed on the same setup and dropped into the panorama. Parents of absent players get the same team print as everyone else — guaranteed."] }
    ]
  },
  {
    slug: "48hour-checklist",
    category: "Photo Day Tips",
    date: "Aug 10, 2026",
    readTime: "4 min read",
    title: "The 48-Hour Photo Day Countdown: An AD's Final Checklist",
    excerpt: "Roster files, gym slots, parent links — the exact 48-hour sequence our crew runs before every shoot.",
    image: "https://i.pinimg.com/1200x/82/a3/77/82a377d07bebb9d5f4aae1c8c650100f.jpg",
    author: "marcus",
    takeaways: [
      "Confirm the final roster CSV 48 hours out — freeze changes after that.",
      "Send parent ordering links the night before, not the morning of.",
      "Walk the gym for outlet and backdrop space one day early."
    ],
    quote: "Calm photo days are scheduled 48 hours in advance, not improvised at 3 PM.",
    sections: [
      { h: "1. T-Minus 48 Hours: Freeze The Roster", p: ["Late roster edits are the top cause of mislabeled galleries. Lock the CSV two days out, print QR cards from that exact file, and route any stragglers to retake day instead of hand-editing on site."] },
      { h: "2. T-Minus 24 Hours: Alert The Parents", p: ["Ordering links sent the night before get triple the open rate of morning-of blasts. Parents arrive knowing packages, athletes arrive knowing poses, and the line moves twice as fast."] },
      { h: "3. Game Day: Walk The Gym First", p: ["Our lead arrives 60 minutes early to claim outlets, tape backdrop zones, and confirm the practice schedule hasn't shifted. Fifteen minutes of scouting prevents an hour of chaos."] }
    ]
  },
  {
    slug: "proofs-to-print",
    category: "Yearbook Planning",
    date: "Aug 02, 2026",
    readTime: "6 min read",
    title: "From Proofs to Print: Hitting Yearbook Deadlines Without Panic",
    excerpt: "How advisors sync PSPA exports, proof cycles, and printer dates into one calm timeline.",
    image: "https://i.pinimg.com/736x/63/6f/63/636f630298114eec8f8534c75c2fc0b3.jpg",
    author: "chloe",
    takeaways: [
      "Work backwards from the printer date and buffer two full weeks.",
      "Run three proof cycles: roster, portraits, then final spreads.",
      "Freeze fall sports pages before winter season starts."
    ],
    quote: "Deadlines are just a calendar with consequences — plan backwards and breathe easy.",
    sections: [
      { h: "1. Anchor Everything To The Printer Date", p: ["Get the plant date in writing, subtract shipping, proofing, and two buffer weeks — that is your real deadline. Every milestone (roster lock, portrait delivery, spread freeze) hangs off that single anchor."] },
      { h: "2. Three Proof Cycles, No More", p: ["Cycle one checks names and grades. Cycle two checks portrait swaps. Cycle three is final spreads only. Advisors who proof everything every round burn out staff and still miss errors."] },
      { h: "3. Freeze Fall Before Winter", p: ["Lock fall sports spreads the week winter tryouts start. Rolling freezes keep the book moving while action shots keep coming — the alternative is a March avalanche."] }
    ]
  },
  {
    slug: "mobile-studio-van",
    category: "Behind The Scenes",
    date: "Jul 26, 2026",
    readTime: "4 min read",
    title: "Inside the Setup: How Our Mobile Studio Fits in One Van",
    excerpt: "Strobes, backdrops, smoke FX — the rig that turns any school gym into a pro arena.",
    image: "https://i.pinimg.com/1200x/94/e0/73/94e07317b5274cecbb73573f77fdbe9a.jpg",
    author: "marcus",
    takeaways: [
      "Four battery strobes cover a full roster with zero wall outlets.",
      "Pre-labeled cases cut gym setup to under 60 minutes.",
      "Every rig carries a backup body, backup trigger, backup cables."
    ],
    quote: "If it doesn't fit in the van, it doesn't come to photo day.",
    sections: [
      { h: "1. Power Without Outlets", p: ["Gym outlets are always across the room or already claimed. Four battery strobes with 500+ full-power pops each mean we light a 60-player roster anywhere — parking lot included."] },
      { h: "2. Cases Labeled Like A Pit Crew", p: ["Stands, modifiers, backdrops, triggers — every case labeled, every cable coiled the same way. Two crew members unload and build the full studio in under an hour, blindfolded if needed."] },
      { h: "3. Backups For The Backups", p: ["A dead trigger once cost a studio a whole season contract. We carry two of everything that can fail: bodies, triggers, batteries, even gaffer tape colors. Redundancy is the real product."] }
    ]
  },
  {
    slug: "bad-weather-plan",
    category: "Photo Day Tips",
    date: "Jul 18, 2026",
    readTime: "4 min read",
    title: "Rain or Shine: Our Bad-Weather Backup Plan for Outdoor Photo Days",
    excerpt: "How we relocate field sessions to covered setups without losing a single pose.",
    image: "https://i.pinimg.com/736x/0e/5f/ab/0e5fab3202d23cdc36954b4ba3bb4ce7.jpg",
    author: "marcus",
    takeaways: [
      "Every outdoor booking includes a pre-scouted covered backup zone.",
      "The call to move indoors happens 3 hours before, never mid-shoot.",
      "Dramatic storm light often beats the planned sunny portraits."
    ],
    quote: "The weather doesn't cancel photo day — it just changes the backdrop.",
    sections: [
      { h: "1. Scout Cover Before You Need It", p: ["Every field booking gets a walkthrough first: fieldhouse overhangs, bus barns, covered bleachers. When rain hits, the crew is already moving instead of debating."] },
      { h: "2. Call It Three Hours Out", p: ["Watching radar at noon for a 3 PM shoot wastes everyone's afternoon. Our rule: decide by 12 PM, notify coaches by 1 PM, and the relocated setup is built before buses arrive."] },
      { h: "3. Sell The Storm Light", p: ["Post-rain skies and wet turf reflect strobes beautifully. Some of our most-ordered portraits ever were shot under threatening clouds — tell athletes the drama is free."] }
    ]
  },
  {
    slug: "dedication-pages",
    category: "Yearbook Planning",
    date: "Jul 11, 2026",
    readTime: "5 min read",
    title: "Senior Dedication Pages: A New Revenue Line for Yearbook Programs",
    excerpt: "Pricing, templates, and parent messaging that fill dedication pages every year.",
    image: "https://i.pinimg.com/1200x/70/1b/ad/701badfcc2cfca1de15c56e4f21b7600.jpg",
    author: "chloe",
    takeaways: [
      "Tiered sizes (quarter, half, full page) capture every parent budget.",
      "Canva-style templates triple submission rates versus blank pages.",
      "Early-bird pricing fills 60% of pages before winter break."
    ],
    quote: "Parents don't buy ad space — they buy a permanent spotlight for their senior.",
    sections: [
      { h: "1. Price In Tiers, Not Take-It-Or-Leave-It", p: ["A single full-page price scares off half your buyers. Quarter, half, and full-page tiers let every family participate — and the blended revenue beats a flat rate nearly every time."] },
      { h: "2. Templates Beat Blank Canvases", p: ["Give parents three designed starting layouts with photo slots marked. Submission rates triple when families arrange rather than design, and your staff spends zero hours fixing broken files."] },
      { h: "3. Discount Early, Thank Yourself Later", p: ["A 20% early-bird window before winter break fills most pages while enthusiasm is high. Late money still comes — at full price, funding your spring shortfall."] }
    ]
  },
  {
    slug: "retouch-day",
    category: "Behind The Scenes",
    date: "Jul 04, 2026",
    readTime: "5 min read",
    title: "Retouch Day: How Proofs Become Posters in 48 Hours",
    excerpt: "Culling, color grading, and cutouts — inside our post-production pipeline.",
    image: "https://i.pinimg.com/1200x/56/a3/86/56a3868a3ca19fe307c1c43f5b246344.jpg",
    author: "elena",
    takeaways: [
      "Cull to the best 3 frames per athlete before touching a single slider.",
      "One grade preset per team keeps galleries visually unified.",
      "Cutouts and background swaps happen last, never first."
    ],
    quote: "Retouching should be invisible — if parents notice it, we've failed.",
    sections: [
      { h: "1. Cull Ruthlessly First", p: ["Two thousand frames become three keepers per athlete before any editing begins. Blinks, half-smiles, and soft focus die here, so retouch hours go only to images parents will actually buy."] },
      { h: "2. Grade By Team, Not By Frame", p: ["One color preset per team locks the gallery into a campaign look — same skin tones, same background mood. Individual tweaks happen after the preset, never instead of it."] },
      { h: "3. Cutouts Close The Show", p: ["Background swaps and poster cutouts are the final step, applied only to ordered portraits. That order keeps the 48-hour proof promise intact for every roster."] }
    ]
  }
];

function getBlogPost() {
  const slug = new URLSearchParams(window.location.search).get("post");
  return BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
}

function escHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderBlogPost() {
  const post = getBlogPost();
  const author = BLOG_AUTHORS[post.author] || BLOG_AUTHORS.elena;

  document.title = post.title + " | Stat & Snap Blog";
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", post.excerpt);

  const heroBg = document.getElementById("postHeroBg");
  if (heroBg) heroBg.style.backgroundImage = "url('" + post.image + "')";
  const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  set("postBadge", post.category);
  set("postCrumb", post.title);
  set("postDate", post.date);
  set("postReadTime", post.readTime);
  set("postAuthor", "By " + author.name);
  set("postTitle", post.title);
  set("postExcerpt", post.excerpt);

  const tags = document.getElementById("postTags");
  if (tags) {
    tags.innerHTML = '<span class="post-tag"><i class="fa-solid fa-tag"></i> ' + escHtml(post.category) + '</span>'
      + '<span class="post-tag"><i class="fa-regular fa-clock"></i> ' + escHtml(post.readTime) + '</span>'
      + '<span class="post-tag"><i class="fa-regular fa-calendar"></i> ' + escHtml(post.date) + '</span>';
  }

  const takeaways = document.getElementById("postTakeaways");
  if (takeaways) {
    takeaways.innerHTML = post.takeaways.map((t) =>
      '<li><i class="fa-solid fa-angle-right" style="color: var(--color-gold); margin-right: 0.5rem;"></i>' + escHtml(t) + '</li>'
    ).join("");
  }

  const body = document.getElementById("postBody");
  if (body) {
    let html = "";
    const tocTitles = [];
    post.sections.forEach((sec, i) => {
      const anchor = "post-sec-" + i;
      tocTitles.push({ anchor: anchor, title: sec.h });
      html += '<h2 id="' + anchor + '" class="post-h2">' + escHtml(sec.h) + '</h2>';
      sec.p.forEach((para) => { html += '<p class="post-p">' + escHtml(para) + '</p>'; });
      if (i === 0 && post.quote) {
        html += '<blockquote class="post-quote">"' + escHtml(post.quote) + '"</blockquote>';
      }
      if (i === 1) {
        html += '<div class="post-imggrid">'
          + '<img src="' + post.image + '" alt="' + escHtml(post.title) + '" loading="lazy">'
          + '<img src="' + post.image + '" alt="' + escHtml(post.title) + ' detail" loading="lazy">'
          + '</div>';
      }
    });
    body.innerHTML = html;
    const toc = document.getElementById("postToc");
    if (toc) {
      toc.innerHTML = tocTitles.map((t, i) =>
        '<li><a href="#' + t.anchor + '"><span>' + (i + 1) + '</span> ' + escHtml(t.title) + '</a></li>'
      ).join("");
    }
  }

  const aImg = document.getElementById("postAuthorImg");
  if (aImg) { aImg.src = author.img; aImg.alt = author.name; }
  set("postAuthorName", author.name);
  set("postAuthorRole", author.role);
  set("postAuthorBio", author.bio);

  const related = document.getElementById("relatedGrid");
  if (related) {
    const others = BLOG_POSTS.filter((p) => p.slug !== post.slug);
    const sameCat = others.filter((p) => p.category === post.category);
    const picks = sameCat.concat(others.filter((p) => p.category !== post.category)).slice(0, 2);
    related.innerHTML = picks.map((p) =>
      '<article class="blog-card post-rel-card"><div class="blog-card-img"><img src="' + p.image + '" alt="' + escHtml(p.title) + '" loading="lazy">'
      + '<span class="post-rel-badge">' + escHtml(p.category) + '</span></div>'
      + '<div class="blog-card-body"><div class="blog-card-meta"><span><i class="fa-regular fa-calendar"></i> ' + escHtml(p.date) + '</span></div>'
      + '<h3 class="blog-card-title"><a href="blog-details.html?post=' + p.slug + '">' + escHtml(p.title) + '</a></h3>'
      + '<p>' + escHtml(p.excerpt) + '</p>'
      + '<a href="blog-details.html?post=' + p.slug + '" class="btn btn-sm btn-secondary">Read Article <i class="fa-solid fa-arrow-right"></i></a></div></article>'
    ).join("");
  }

  const progress = document.getElementById("postProgress");
  if (progress && !window.__postProgressBound) {
    window.__postProgressBound = true;
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? Math.min(100, Math.max(0, (h.scrollTop / max) * 100)) : 0;
      progress.style.width = pct + "%";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
}

document.addEventListener("DOMContentLoaded", renderBlogPost);
