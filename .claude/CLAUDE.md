# Golf Training Hub - Multi-Channel Repository

## Mental Map of Repository

### Directory Structure

```
golf/
├── .claude/                        # Claude configuration
│   └── CLAUDE.md                   # This file
│
├── docs/                           # GitHub Pages website (main deliverable)
│   ├── index.html                  # Home page (On-Course | Practice buttons)
│   ├── on-course.html              # Club selector page (6 clubs)
│   ├── practice.html               # Practice flow (Warm-up → Stations)
│   ├── styles.css                  # Mobile-first CSS
│   ├── app.js                      # All content + navigation logic
│   └── README.md                   # Deployment instructions
│
├── channels/                       # All YouTube channels
│   └── andrew-cullen-pga/
│       ├── metadata.md             # Channel metadata & info
│       │
│       ├── raw/                    # Raw data from YouTube
│       │   ├── transcripts/        # 52 video transcripts
│       │   │   └── video_*.md
│       │   └── videos_list.md      # 50 videos with URLs/IDs
│       │
│       └── processed/              # Analyzed/compiled content
│           ├── summaries/          # 52 individual video summaries
│           │   └── video_*_summary.md
│           ├── guides/             # Compiled reference guides
│           │   ├── master_summary.md      # Complete 96KB reference
│           │   ├── practice_program.md    # Full 32KB practice system
│           │   └── club_quick_reference.md # On-course club guide
│           └── practice/           # Mobile-optimized practice files
│               ├── 00_warm_up.md          # 10-min warm-up routine
│               ├── 01_quick_drill_finder.md # Searchable drill index
│               ├── 02_session_planner.md   # Pre-practice planning
│               ├── progress_tracker.md     # Progress tracking templates
│               ├── troubleshooting.md      # Common problems & solutions
│               └── README.md               # Practice system overview
│
├── .gitignore                      # Git ignore file
└── README.md                       # Root README
```

### Content Flow: Source → Website

#### On-Course Reference
**Source:** `channels/andrew-cullen-pga/processed/guides/club_quick_reference.md`
**Destination:** `docs/app.js` → `clubContent` object
**Structure:**
- Driver (G.R.I.P.S.)
- Fairway Woods (S.W.E.E.P.)
- Hybrids (B.L.E.N.D.)
- Irons (C.E.P.S.)
- Wedges/Chipping (S.A.C.T.)
- Putter (F.A.V.E.S.)

#### Practice System
**Sources:**
- `channels/andrew-cullen-pga/processed/practice/00_warm_up.md` → `docs/app.js` → `warmupContent`
- `channels/andrew-cullen-pga/processed/guides/practice_program.md` Stations → `docs/app.js` → `stationContent`

**Stations:**
1. Driver - Distance & Accuracy
2. Iron Play - Pure Striking
3. Chipping - Short Game
4. Putting Fundamentals
5. Wedges - Full Swing
6. Bunker Play

#### Video References
**Source:** `channels/andrew-cullen-pga/raw/videos_list.md`
**Destination:** `docs/app.js` → `videoMap` object
**Format:** `{ videoNumber: 'YouTubeID' }`

### Website Navigation Flow

```
HOME (index.html)
├─→ ON-COURSE (on-course.html)
│   ├─ [Driver] → Driver content + video links
│   ├─ [Woods] → Woods content + video links
│   ├─ [Hybrids] → Hybrids content + video links
│   ├─ [Irons] → Irons content + video links
│   ├─ [Wedges] → Wedges content + video links
│   └─ [Putter] → Putter content + video links
│
└─→ PRACTICE (practice.html)
    ├─ STEP 1: Warm-Up (10 minutes)
    │   └─ [Done] button
    │
    └─ STEP 2: Choose Station
        ├─ [Driver] → Driver drills + video links
        ├─ [Irons] → Iron drills + video links
        ├─ [Wedges] → Wedge drills + video links
        ├─ [Chipping] → Chipping drills + video links
        ├─ [Putting] → Putting drills + video links
        └─ [Bunker] → Bunker drills + video links
```

### Key Technologies

- **HTML5**: Structure
- **CSS3**: Mobile-first responsive design
- **Vanilla JavaScript**: No frameworks/dependencies
- **GitHub Pages**: Free static hosting

### Content Organization in app.js

```javascript
// 1. VIDEO MAPPING (lines ~5-60)
videoMap = { 1: 'BwM1id5_M7Y', 2: '87f37LgxErs', ... }

// 2. CLUB CONTENT (lines ~65-250)
clubContent = {
    driver: "...",    // G.R.I.P.S. mnemonic
    woods: "...",     // S.W.E.E.P. mnemonic
    hybrids: "...",   // B.L.E.N.D. mnemonic
    irons: "...",     // C.E.P.S. mnemonic
    wedges: "...",    // S.A.C.T. mnemonic
    putter: "..."     // F.A.V.E.S. mnemonic
}

// 3. WARM-UP CONTENT (lines ~255-380)
warmupContent = "..."  // 3 phases, 10 minutes

// 4. STATION/DRILL CONTENT (lines ~385-635)
stationContent = {
    driver: "...",    // Beginner/Intermediate/Advanced drills
    irons: "...",     // Ball-first contact drills
    chipping: "...",  // Posture & chest rotation
    wedges: "...",    // Distance control
    putting: "...",   // Face aim, trigger, Andrew's #1 drill
    bunker: "..."     // Basic setup
}

// 5. UTILITIES (lines ~640-675)
generateYouTubeLink()  // Creates timestamped YouTube URLs
addYouTubeLinks()      // Converts "Video X" → clickable link

// 6. PAGE LOGIC (lines ~680-end)
// - On-course page: Club selector
// - Practice page: Warm-up → Station selector → Drills
```

### Video Reference Format

**In Content:**
```html
<p><em>Reference: Video 3</em></p>
<p><em>Reference: Videos 1, 2, 3, 12, 13</em></p>
```

**Generated Output:**
```html
<p><strong>Watch:</strong>
    <a href="https://youtu.be/BwM1id5_M7Y" class="video-link" target="_blank">Video 1</a>
    <a href="https://youtu.be/87f37LgxErs" class="video-link" target="_blank">Video 2</a>
</p>
```

### Design Principles

1. **Mobile-First**: Designed for phone use on course/range
2. **High Contrast**: Readable in bright sunlight
3. **Large Tap Targets**: Easy thumb navigation
4. **Minimal Scrolling**: Key info above fold
5. **Fast Loading**: < 2 seconds on 3G
6. **Offline-Ready**: All content embedded in JS

### Andrew Cullen's Core Philosophy

Embedded throughout the site:
1. "Not everyone is the same" - Find YOUR natural positions
2. "Men can typically only think of ONE thing at a time" - Simplify!
3. "Most important is the feel" - Get the picture, get the feel
4. "Work with gravity, not against it" - Natural movements
5. "Trust your instincts" - Reduce mental complexity

### Future Enhancement Ideas

- [ ] Add more detailed timestamps for drills
- [ ] Add drill completion tracking (localStorage)
- [ ] Add service worker for true offline capability
- [ ] Add dark mode for evening practice
- [ ] Add "random drill" generator
- [ ] Add custom notes feature
- [ ] Add print-friendly versions

### Deployment Status

- ✅ Website built and functional
- ⏳ Ready to push to GitHub
- ⏳ Enable GitHub Pages in repo settings
- ⏳ Test on mobile device

### Quick Commands

```bash
# Local testing
open docs/index.html

# Or with local server
cd docs && python3 -m http.server 8000

# Git deployment
git add .
git commit -m "Add golf training website"
git push origin main

# Then enable GitHub Pages:
# Settings → Pages → Source: main branch, /docs folder
```

## Summary

This repository contains:
- **52 video lessons** from Andrew Cullen PGA
- **Complete written references** (master_summary.md, practice_program.md, club_quick_reference.md)
- **Practice system** (practice/ folder)
- **Mobile website** (docs/ folder) - YOUR NEW GOLF COMPANION

The website extracts the most actionable content and organizes it for quick access while practicing or playing golf.
