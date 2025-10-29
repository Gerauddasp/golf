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

### Athletic Motion Golf ⭐ NEW

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

### Andrew Cullen PGA vs Athletic Motion Golf

Both channels provide excellent instruction but with complementary approaches:

| Aspect | Andrew Cullen PGA | Athletic Motion Golf |
|--------|------------------|---------------------|
| **Philosophy** | "Not everyone is the same" | "Here's what the data shows" |
| **Teaching Style** | Feel-based, natural movement | Data-driven, scientific |
| **Technology** | Minimal, observation-based | 3D motion capture, TrackMan, force plates |
| **Content Format** | Quick tips, mnemonic devices | Detailed biomechanics breakdowns |
| **Terminology** | Simple, accessible | Technical, anatomical |
| **Best For** | Golfers seeking simplicity | Golfers wanting technical understanding |
| **Strengths** | Practical "how" with feels | Scientific "why" with data |

### Using Both Channels Together

**Recommended Approach:**
1. **Understand WHY** with Athletic Motion Golf (biomechanical principles)
2. **Learn HOW** with Andrew Cullen PGA (feel-based execution)
3. **Combine** technical understanding with practical application
4. **Result:** Complete golf education from both perspectives

**Example:**
- **AMG teaches:** Why trail arm must lift in backswing (segment-to-segment analysis, 3D data)
- **Andrew Cullen teaches:** How to feel and execute this naturally (simple cues, natural motion)
- **Together:** Both understanding and ability to execute

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
