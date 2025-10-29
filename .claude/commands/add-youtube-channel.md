---
description: Add a new YouTube golf instruction channel to the repository
---

# Add YouTube Golf Channel

You are adding a new YouTube golf instruction channel to the multi-channel golf training repository.

## Arguments

Parse the command arguments. User can provide:
- Channel @handle (e.g., `@MeAndMyGolf`)
- Channel name (e.g., `Me and My Golf`)
- Full YouTube URL (e.g., `https://www.youtube.com/@MeAndMyGolf`)

Extract the channel identifier from whatever format user provided.

## Step 1: Search and Confirm Channel

If user provided just a name (not @handle or URL), search first:

```
mcp__youtube__search_youtube
  query: [channel name] golf
  type: channel
```

Present results and confirm with user which channel they want.

## Step 2: Fetch Channel Videos

```
mcp__youtube__get_channel_videos
  channelId: [confirmed channel identifier]
  limit: 200
```

## Step 3: Analyze Videos and Present Filtering Options

**Analyze the returned video list WITHOUT sampling individual videos:**

Look at the fields from get_channel_videos:
- `title` - Check for promotional keywords, topics
- `duration` - Identify very short clips vs full lessons
- `uploadedAt` - Determine date range
- `description` (if available) - Assess instructional value

**Only sample videos if:**
- Descriptions are empty/missing
- Teaching style unclear from titles alone
- Need to verify quality

**Present filtering options to user using AskUserQuestion:**

Questions to ask:
1. **Date range**: All videos? Last 1-2 years? Specific cutoff?
2. **Duration filter**: Include shorts (<1 min)? Minimum duration?
3. **Content filter**: Any obvious promos/ads to exclude based on titles?
4. **Total count**: Process all X videos or limit to top Y?

## Step 4: Create Directory Structure

```bash
mkdir -p channels/[channel-name]/raw/transcripts
mkdir -p channels/[channel-name]/processed/summaries
mkdir -p channels/[channel-name]/processed/guides
mkdir -p channels/[channel-name]/processed/practice
```

## Step 5: Create Metadata and Video List

**Create metadata.md:**
```yaml
---
channel_name: [Name]
source: YouTube
channel_id: [ID]
channel_url: [URL]
total_videos_processed: TBD
date_processed: [Today]
instructors: [Names]
teaching_style: [Description]
specialties: [Topics]
---
```

**Create videos_list.md:**
Table with: # | Title | Duration | Upload Date | URL | Video ID | Status

Mark each video: ✅ Process / ❌ Exclude / ⚠️ Warning

## Step 6: Process Videos with Parallel Agents

**Your role: Launch and manage youtube-transcript-analyzer agents**

### Processing Strategy

**Launch agents in batches:**
- Start with Batch 1 (first 10-15 videos to process)
- Use **single message** with **multiple Task tool calls** (one per video)
- Each Task uses `subagent_type: youtube-transcript-analyzer`

**As batches complete:**
- Launch next batch of 10-15 videos
- Continue until all videos processed
- Update TodoWrite after each batch
- Provide progress updates to user

### Agent Instructions (per video)

For each video, create a Task with:

```
subagent_type: youtube-transcript-analyzer
description: Process [Channel] Video X
prompt: |
  Process video for golf training repository.

  **Video Details:**
  - Video #: [Number]
  - Title: [Title]
  - Video ID: [ID]
  - URL: [Full YouTube URL]
  - Duration: [Duration]
  - Upload Date: [Date]

  **Your Tasks:**
  1. Fetch the transcript using mcp__youtube__get_video_transcript
  2. Create transcript file: /Users/geraudd/Documents/youtube/golf/channels/[channel-name]/raw/transcripts/video_XXX.md
     - Include: Video metadata, URL, duration, upload date, transcript text
  3. Create summary file: /Users/geraudd/Documents/youtube/golf/channels/[channel-name]/processed/summaries/video_XXX_summary.md
     - Adapt format to instructor's teaching style (see below)

  **Summary Format:**
  [Provide format adapted to this instructor's style - feel-based, data-driven, or technique-focused]

  Return confirmation when both files created.
```

**One agent = One video** (don't assign multiple videos to single agent)

## Step 7: Create Compiled Guides (Flexible)

**Examine other channels for inspiration:**
- Look at `channels/andrew-cullen-pga/processed/guides/` for feel-based style
- Look at `channels/athletic-motion-golf/processed/guides/` for data-driven style

**Create guides that make sense for THIS instructor:**

**Always create:**
1. **master_summary.md** - Complete reference organized by relevant topics

**Then create guides based on content patterns you observe:**

**Possible guides to consider:**
- Biomechanics/fundamentals guide (if scientific instructor)
- Practice program (if drill-focused)
- Club-specific guide (if organized by clubs)
- Common faults & fixes (if troubleshooting-focused)
- Skill progressions (if beginner → advanced content)
- Quick reference (if on-course tips)
- Mental game (if strategy/psychology content)
- Short game mastery (if specialized content)
- Swing thoughts compilation (if feel-based cues)

**Extract what's actually in the content:**
- Common tips across videos
- Recurring drills
- Club-specific instruction
- Fault patterns addressed
- Practice methods taught
- Philosophy and principles

**Organize flexibly** - don't force a structure that doesn't fit the content

## Step 8: Create Practice System (Flexible)

**Examine existing practice systems for ideas:**
- `channels/andrew-cullen-pga/processed/practice/` - feel-based drills and stations
- `channels/athletic-motion-golf/processed/practice/` - diagnostic and scientific

**Create practice files that match THIS instructor's approach:**

**Possible practice files:**
- diagnostic_checklist.md (for technical instructors)
- drill_library.md (organized by topic or club)
- practice_sessions.md (structured routines)
- warm_up.md (pre-practice preparation)
- progress_tracker.md (tracking templates)
- quick_drill_finder.md (searchable index)
- fault_fixes.md (problem → solution)
- skill_development.md (progressive programs)
- README.md (always include - explains the practice system)

**Let content guide structure** - extract drills, tips, and practice methods that actually exist in the videos

## Step 9: Update Root README

Edit `/Users/geraudd/Documents/youtube/golf/README.md`:

Add new channel section under `## 📺 Channels`:

```markdown
### [Channel Name]

- **Videos Processed:** [Number] lessons
- **Channel:** [URL]
- **Focus:** [Main topics]
- **Teaching Style:** [Approach description]
- **Instructors:** [Names]
- **Location:** `channels/[channel-name]/`

**Content:**
- [List key guides created]
- Raw transcripts and summaries available

**Highlights:**
- [Key unique aspects of this channel]
```

Update channel comparison table if it exists.

## Step 10: Provide Final Summary

Report to user:
- ✅ Total videos processed (X/Y success rate)
- ✅ Files created (transcripts, summaries, guides)
- ✅ File sizes and locations
- ✅ Videos without transcripts (if any)
- ✅ Next steps (optional: integrate into website)

## Key Principles

1. **Parallel Processing:** Launch 10-15 agents per message (single message, multiple Task calls)
2. **One Agent = One Video:** Don't assign multiple videos to single agent
3. **Launch Next Batch:** As previous batch completes
4. **Flexible Structure:** Adapt guides to content, don't force templates
5. **Use TodoWrite:** Track progress through batches
6. **Progress Updates:** After each batch completes
7. **Parse Arguments:** Handle @handle, names, or URLs
8. **Search First:** If unclear channel, search and confirm
9. **Analyze Before Sampling:** Use video list metadata first, sample only if needed
10. **Extract What Exists:** Create guides based on actual content patterns

## Now Execute

Based on the channel provided in arguments ($ARGUMENTS), follow this methodology:

1. Parse the channel identifier
2. Search if needed, confirm with user
3. Fetch videos
4. Present filtering options
5. Process in parallel batches
6. Create flexible guides based on content
7. Update repository

Start now!
