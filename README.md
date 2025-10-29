# ⛳ Golf Training Hub

Personal golf training website aggregating instruction from multiple YouTube channels.

## 🌐 Website

**Live Site:** [Your GitHub Pages URL]

**Local Testing:**
```bash
open docs/index.html
```

## 📺 Channels

### Andrew Cullen PGA

- **Videos Processed:** 52 lessons
- **Channel:** https://www.youtube.com/@AndrewCullenPGA
- **Focus:** Feel-based, natural movement, biomechanics
- **Teaching Style:** Simplified, mnemonic devices, "not everyone is the same"
- **Location:** `channels/andrew-cullen-pga/`

**Content:**
- Complete practice system
- On-course quick reference with mnemonics (G.R.I.P.S., S.W.E.E.P., etc.)
- Master summary of all 52 videos
- Raw transcripts and summaries available
- Integrated into mobile website (`docs/`)

---

### Me and My Golf ⭐ NEW

- **Videos Processed:** 15 full-length lessons
- **Channel:** https://www.youtube.com/@meandmygolf
- **Focus:** Fault diagnosis, practical drills, TPI collaboration
- **Teaching Style:** Data-validated fixes with launch monitor feedback
- **Instructors:** Piers Ward, Andy Proudman (PGA Professionals)
- **Location:** `channels/me-and-my-golf/`

**Content:**
- **Master Summary:** Complete reference of all 15 videos
- **Driver System:** Comprehensive driver instruction (setup → finish)
- **Iron Striking System:** Pure contact and ball-first mechanics
- **Fault Diagnosis Flowchart:** Symptom → diagnosis → solution quick reference
- **Practice System:** Range sessions, 30-day programs, drill finder
- TPI collaboration videos with Dave Phillips (biomechanics)
- Russell Henley wedge system (tour-level short game)
- Raw transcripts and detailed summaries available

**Highlights:**
- TPI-certified instruction with biomechanics insights
- Launch monitor data throughout (path, face, speed)
- Real student transformations with before/after numbers
- Tour player collaborations (Russell Henley, Tommy Fleetwood, Viktor Hovland)
- Practical fault correction with immediate results
- 50+ drills organized by fault type

---

### Athletic Motion Golf

- **Videos Processed:** 92 lessons (from last 2 years)
- **Channel:** https://www.youtube.com/@AthleticMotionGolf
- **Focus:** Data-driven, 3D biomechanics, scientific analysis
- **Teaching Style:** Evidence-based using GEARS 3D, TrackMan, force plates
- **Instructors:** Mike Granato, Shaun Webb, Kevin Sprecher
- **Location:** `channels/athletic-motion-golf/`

**Content:**
- **Master Summary:** Complete reference of all 92 videos
- **Biomechanics Fundamentals:** Scientific principles explained
- **Common Faults & Fixes:** Symptom → diagnosis → solution
- **Club-Specific Guide:** Technical instruction by club type
- **Practice System:** Diagnostic checklist, fault correction drills, training programs
- Raw transcripts and detailed summaries available
- Videos without transcripts: 2 (ultra-short format, transcripts disabled)

**Highlights:**
- 1.1+ million swings analyzed
- 3D motion capture insights
- Tour player biomechanics
- Debunks 10+ common instruction myths
- Progressive training programs included

## 🔄 Channel Comparison

### Three Complementary Teaching Approaches

Each channel excels in different areas - use them together for complete golf instruction:

| Aspect | Andrew Cullen PGA | Me and My Golf | Athletic Motion Golf |
|--------|------------------|----------------|---------------------|
| **Philosophy** | "Not everyone is the same" | "Diagnose then prescribe" | "Here's what the data shows" |
| **Teaching Style** | Feel-based, natural movement | Fault correction, practical fixes | Data-driven, scientific |
| **Technology** | Minimal, observation-based | Launch monitor validation | 3D motion capture, force plates |
| **Content Format** | Quick tips, mnemonic devices | Problem → solution drills | Detailed biomechanics breakdowns |
| **Terminology** | Simple, accessible | Practical with some tech | Technical, anatomical |
| **Best For** | On-course quick reference | Fixing specific faults fast | Understanding technical "why" |
| **Strengths** | Practical "how" with feels | Immediate, measurable results | Scientific "why" with data |
| **Unique Value** | Mnemonics (G.R.I.P.S., etc.) | TPI + tour player insights | 3D motion capture analysis |

### Using All Three Channels Together

**The Complete Learning Path:**

1. **Diagnose Your Issue** → Me and My Golf (Fault Diagnosis Flowchart)
2. **Understand Why It Happens** → Athletic Motion Golf (biomechanics)
3. **Learn How to Fix It** → Me and My Golf (drill progressions)
4. **Simplify for the Course** → Andrew Cullen PGA (feel cues, mnemonics)

**Example: Fixing a Slice**

- **Me and My Golf:** Launch monitor shows 6° left path, 3° open face → prescribes specific drills
- **Athletic Motion Golf:** Explains biomechanical reasons (early extension, steep shoulder plane, grip issues)
- **Andrew Cullen PGA:** Simplifies to "feel the club wrap around body" (G.R.I.P.S. mnemonic)
- **Result:** You understand the problem, know how to fix it, and have simple feels to maintain it

**When to Use Each Channel:**

- **Struggling with a fault?** Start with **Me and My Golf** (fault diagnosis + immediate fixes)
- **Want to understand mechanics?** Use **Athletic Motion Golf** (scientific explanations)
- **Need on-course simplicity?** Reference **Andrew Cullen PGA** (mnemonics, quick tips)

## 📁 Repository Structure

```
golf/
├── docs/              # Website (mobile-optimized)
├── channels/          # YouTube channel content
│   └── [channel]/
│       ├── metadata.md       # Channel info & stats
│       ├── raw/              # Transcripts, video lists
│       └── processed/        # Summaries, guides, practice plans
├── .gitignore
└── README.md
```

## 🔨 Adding a New Channel

1. Create `channels/[channel-name]/`
2. Add `metadata.md` with channel info
3. Fetch transcripts to `raw/transcripts/`
4. Create video list in `raw/videos_list.md`
5. Generate summaries in `processed/summaries/`
6. Compile guides in `processed/guides/`
7. Optionally update website in `docs/`

## 🚀 Deployment

Deployed via GitHub Pages from the `docs/` folder.

**To deploy:**
1. Push to GitHub
2. Settings → Pages → Source: main branch, `/docs` folder
3. Site will be live at `https://[username].github.io/golf/`

## 📝 License

Personal training tool. All golf instruction content is based on publicly available YouTube videos. Each channel's original content is credited and linked.
