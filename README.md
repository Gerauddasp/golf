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
- **Focus:** Biomechanics, natural movement, all skill levels
- **Location:** `channels/andrew-cullen-pga/`

**Content:**
- Complete practice system
- On-course quick reference with mnemonics
- Master summary of all 52 videos
- Raw transcripts and summaries available

### Future Channels

- Add more instructors here as you expand...

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
