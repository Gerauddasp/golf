// ===================================
// VIDEO ID MAPPING
// ===================================
const videoMap = {
    1: 'BwM1id5_M7Y',
    2: '87f37LgxErs',
    3: 'm-nsYW9yF3w',
    4: 'iuEYwZM7LE8',
    5: 'tJ5WQI9GFrw',
    6: 'yxibYB-YsHE',
    8: 'R3FbvDldCO8',
    9: '8NCfEUqrZS4',
    10: 'V0EUZrzvWiE',
    11: 'OihyXHY3zMo',
    12: 'CygNzfAyfIY',
    13: '_hkffZHD_F8',
    14: 'pNEEblktEFo',
    15: 'UXUN-J9Bylc',
    16: '33p5cPpwCQg',
    17: 'LIx29m-MTQw',
    18: '4ctdGA4TSZU',
    19: 'zAjVtzQhW1s',
    20: 'JQWFbUrvxyk',
    21: 'GT3XpqvB7ag',
    22: 'SMOX8IFC8sU',
    23: 'CLiVfLi__K0',
    24: 'UP3TfArXU-g',
    26: 'dFYRdlJPP4Q',
    27: '0Jq_I3_Xh1U',
    28: 'njRXDZIEV6Y',
    29: '60SCX98tR2g',
    30: 'LrrCiJie3ak',
    31: 'tqLiszaMfTY',
    32: 'NxfBgWIw1fg',
    33: 'PCMR_S0CyJA',
    34: 'nTMT-lByuAI',
    35: 'j5nDtRfO8JQ',
    36: 'KQZqCibOPtg',
    37: 'z6TvlHQAs2k',
    38: 'CSv1G_cgoW8',
    39: 'nCoTWfNdG4U',
    40: 'V6qcvaW2a-s',
    41: 'pl283KfffR0',
    42: '3oaqEVKxk2U',
    43: 'ceG66YbcUXk',
    44: 'sqfujmwEbJM',
    45: 'j2JZ7dnaaMI',
    46: 'a4Xkee70YC4',
    47: 'aobgCVRIaVA',
    48: 'BAeehn_RIyc',
    49: '023NK8ZJQIc',
    50: 'QUqyak3rypM'
};

// ===================================
// CLUB REFERENCE CONTENT
// ===================================
const clubContent = {
    driver: `
        <h2>🚗 DRIVER - "G.R.I.P.S."</h2>
        <p><strong>Mnemonic:</strong> <strong>G</strong>rip strong, <strong>R</strong>ib stretch, <strong>I</strong>nside shoulder, <strong>P</strong>ush left, <strong>S</strong>oft jaw</p>

        <h3>Setup:</h3>
        <ul>
            <li><strong>Strong grip:</strong> Hold club outside left hip, natural arm hang</li>
            <li><strong>Handle HIGH:</strong> Level with or higher than club head (not low/back)</li>
            <li><strong>Forearm:</strong> Right forearm slightly BELOW left at address</li>
        </ul>

        <h3>Swing Thoughts (Pick ONE):</h3>
        <ol>
            <li><strong>Rib Stretch:</strong> Pick RIGHT rib, stretch it FAR AWAY from ball</li>
            <li><strong>Soft Right Hand:</strong> No "lobster fingers" - keep right hand softer than left</li>
            <li><strong>Shoulder Behind:</strong> Right shoulder stays BEHIND in transition</li>
            <li><strong>Glide & Push:</strong> Right pocket moves toward target BEFORE top, then STOMP left foot</li>
            <li><strong>Jaw Relaxed:</strong> Mouth slightly open, no tension</li>
        </ol>

        <blockquote>
            <strong>Key Feel:</strong> "Stretch rib away, soft right hand, glide and stomp"
        </blockquote>

        <p><em>Reference: Videos 1, 2, 3, 12, 13, 15, 28, 29</em></p>
    `,

    woods: `
        <h2>🌲 FAIRWAY WOODS - "S.W.E.E.P."</h2>
        <p><strong>Mnemonic:</strong> <strong>S</strong>ternum over, <strong>W</strong>ide turn, <strong>E</strong>ven levels, <strong>E</strong>asy tempo, <strong>P</strong>ush brush</p>

        <h3>Setup:</h3>
        <ul>
            <li><strong>Ball Position:</strong> Opposite left heel (inside heel)</li>
            <li><strong>Grip:</strong> Grip down slightly for better control</li>
            <li><strong>Sternum:</strong> Keep chest center covering ball (don't lean back)</li>
            <li><strong>Trust the loft:</strong> Resist urge to scoop</li>
        </ul>

        <h3>Swing Thoughts (Pick ONE):</h3>
        <ol>
            <li><strong>Sweep Motion:</strong> Brush the grass, not dig - "bruise the ground"</li>
            <li><strong>Keep Levels:</strong> Maintain body height through impact</li>
            <li><strong>Big Hip Turn:</strong> Full backswing rotation without swaying</li>
            <li><strong>Ball First:</strong> Hit ball first, then brush turf</li>
        </ol>

        <blockquote>
            <strong>Key Feel:</strong> "Keep levels, brush the grass"
        </blockquote>

        <p><strong>Common Mistake:</strong> ❌ Leaning back to "help" ball up (causes tops/thins)</p>
    `,

    hybrids: `
        <h2>🔷 HYBRIDS - "B.L.E.N.D."</h2>
        <p><strong>Mnemonic:</strong> <strong>B</strong>all forward, <strong>L</strong>ike iron swing, <strong>E</strong>ven weight, <strong>N</strong>o scoop, <strong>D</strong>escending</p>

        <h3>Setup:</h3>
        <ul>
            <li><strong>Ball Position:</strong> Just forward of center (under left pec/ear)</li>
            <li><strong>Stance:</strong> Shoulder-width or slightly wider</li>
            <li><strong>Sternum:</strong> Tiny tilt back from ball (not centered over it)</li>
            <li><strong>Weight:</strong> Even distribution or slight favor to lead leg</li>
            <li><strong>Shaft:</strong> Touch of lean forward, but not excessive</li>
        </ul>

        <h3>Swing Thoughts (Pick ONE):</h3>
        <ol>
            <li><strong>Iron-Like:</strong> Descending blow, ball-then-ground contact</li>
            <li><strong>Sweep with Intent:</strong> Feel like taking divot (wide sole prevents actual divot)</li>
            <li><strong>Add Speed:</strong> Don't be afraid to give it a hit - sole provides forgiveness</li>
            <li><strong>Sternum Position:</strong> Chest slightly back at setup, forward at impact</li>
        </ol>

        <blockquote>
            <strong>Key Feel:</strong> "Sweep with intent to bruise ground"
        </blockquote>

        <p><strong>Common Mistake:</strong> ❌ Playing it like fairway wood (too much sweep) OR getting too steep</p>
    `,

    irons: `
        <h2>⚙️ IRONS - "C.E.P.S."</h2>
        <p><strong>Mnemonic:</strong> <strong>C</strong>enter forward, <strong>E</strong>yes ahead, <strong>P</strong>ush left, <strong>S</strong>tay down</p>

        <h3>Setup:</h3>
        <ul>
            <li><strong>Ball Position:</strong> Middle of stance (center between feet)</li>
            <li><strong>Center of Mass:</strong> At ball or ahead (THE non-negotiable)</li>
            <li><strong>Balance:</strong> Pressure under balls of feet</li>
        </ul>

        <h3>Swing Thoughts (Pick ONE):</h3>
        <ol>
            <li><strong>Eyes Ahead:</strong> Look at grass 3-4 cm AHEAD of ball (not at ball)</li>
            <li><strong>Skater Push:</strong> Push under right foot to move LEFT early</li>
            <li><strong>Belt Buckle:</strong> Keep same distance from ball throughout</li>
            <li><strong>Chest Forward:</strong> Center of chest/pelvis at or ahead of ball at impact</li>
            <li><strong>Game Face:</strong> Jaw relaxed, mouth slightly open</li>
        </ol>

        <blockquote>
            <strong>Key Feel:</strong> "Eyes ahead, chest forward, collect the ball"
        </blockquote>

        <p><em>Reference: Videos 4, 5, 8, 11, 14, 16</em></p>
    `,

    wedges: `
        <h2>🔪 WEDGES (Chipping) - "S.A.C.T."</h2>
        <p><strong>Mnemonic:</strong> <strong>S</strong>ame setup, <strong>A</strong>rms stuck, <strong>C</strong>hest turns, <strong>T</strong>urn = distance</p>

        <h3>Setup (Critical!):</h3>
        <ul>
            <li><strong>Posture:</strong> SAME as full swing - NOT upright with rounded shoulders</li>
            <li><strong>Grip:</strong> SAME as full swing</li>
            <li><strong>Position:</strong> Tilted forward from hips (athletic)</li>
        </ul>

        <h3>Swing Concept:</h3>
        <ul>
            <li><strong>ONE Moving Part:</strong> Chest/rib cage rotation ONLY</li>
            <li><strong>Arms:</strong> Feel "stuck to sides" - no independent hand/wrist action</li>
            <li><strong>Distance Control:</strong> Short turn = short chip, long turn = longer chip</li>
        </ul>

        <h3>Swing Thoughts (Pick ONE):</h3>
        <ol>
            <li><strong>Chest Only:</strong> ONE moving part - chest rotation</li>
            <li><strong>Shoulder Geometry:</strong> Backswing = LEFT shoulder down, Through = RIGHT shoulder down</li>
            <li><strong>Stay in Posture:</strong> Everything 90° to spine throughout</li>
        </ol>

        <blockquote>
            <strong>Key Feel:</strong> "Good posture, chest turns, arms are passengers"
        </blockquote>

        <p><strong>Avoid:</strong> ❌ "Windscreen wipers" (independent hands/arms), standing upright, using wrists</p>

        <p><em>Reference: Videos 31, 32, 33, 34, 35, 36, 37</em></p>
    `,

    putter: `
        <h2>🎯 PUTTER - "F.A.V.E.S."</h2>
        <p><strong>Mnemonic:</strong> <strong>F</strong>ace aim, <strong>A</strong>lways hole it, <strong>V</strong>isualize 3x, <strong>E</strong>yes trigger, <strong>S</strong>oft forearms</p>

        <h3>Setup Fundamentals:</h3>
        <ul>
            <li><strong>Ball Position:</strong> Under LEFT eye (sternum reference)</li>
            <li><strong>Eye Alignment:</strong> NEVER beyond ball (disaster) - must be over or inside
                <ul>
                    <li>✅ <strong>TURN</strong> head to look at hole</li>
                    <li>❌ <strong>Don't TILT</strong> head (eyes go offline)</li>
                </ul>
            </li>
            <li><strong>Face Aim:</strong> Club face determines 85% of start line - get this square FIRST</li>
        </ul>

        <h3>Pre-Stroke Routine:</h3>
        <ol>
            <li><strong>Visualize Success 3x:</strong>
                <ul>
                    <li>Once while reading putt</li>
                    <li>Twice during address (two looks at hole)</li>
                </ul>
            </li>
            <li><strong>Clock Face for Breaks:</strong>
                <ul>
                    <li>Straight: 6:00</li>
                    <li>Right to left: 4:00</li>
                    <li>Left to right: 7:00-9:00</li>
                </ul>
            </li>
            <li><strong>NO Practice Swing:</strong> Trust instinct</li>
        </ol>

        <h3>Execution:</h3>
        <ul>
            <li><strong>Eye TRIGGER:</strong> <strong>Hole → Ball → GO</strong> (no delay, no freeze)</li>
            <li><strong>Soft Forearms:</strong> Focus on soft forearms (not grip pressure)</li>
            <li><strong>Always Hole It:</strong> Never "lag" - always visualize making it</li>
        </ul>

        <h3>Special Situations:</h3>
        <ul>
            <li><strong>Downhill:</strong> Hit from TOE of putter, look at FRONT of ball</li>
            <li><strong>Fringe:</strong> Eye sequence = <strong>Fringe edge → Hole → Ball → GO</strong></li>
            <li><strong>5-Footers:</strong> Visualize specific entry point at edge</li>
        </ul>

        <blockquote>
            <strong>Key Feel:</strong> "Soft forearms, see it drop, hole→ball→go"
        </blockquote>

        <p><em>Reference: Videos 38, 39, 40, 41, 42, 43, 44, 45, 46</em></p>
    `
};

// ===================================
// WARM-UP CONTENT
// ===================================
const warmupContent = `
    <h2>⏱️ 10-MINUTE WARM-UP ROUTINE</h2>
    <p><strong>DO THIS EVERY SESSION - NO EXCEPTIONS</strong></p>
    <p><em>Purpose: Wake up your body, establish feel, check fundamentals</em></p>

    <h3>📍 PHASE 1: SETUP CHECK (3 minutes)</h3>
    <p><strong>No ball needed - just club in hand</strong></p>

    <h4>A. Grip Check (1 min)</h4>
    <ol>
        <li><strong>Find your natural grip:</strong>
            <ul>
                <li>Stand straight, let left arm hang naturally</li>
                <li>Notice how hand naturally rotates inward</li>
                <li>Place club in hand in this natural position</li>
                <li><strong>Check:</strong> Can you see 2-4 knuckles? (Your natural amount)</li>
            </ul>
        </li>
        <li><strong>Thumb position:</strong>
            <ul>
                <li>Use SHORT thumb position (Andrew's preference)</li>
                <li>Thumb sits on top, not extended down</li>
            </ul>
        </li>
        <li><strong>Grip pressure:</strong>
            <ul>
                <li>Level 3 on 1-5 scale</li>
                <li>Soft enough to allow rotation, firm enough for control</li>
                <li><strong>Advanced:</strong> Try left hand = 4, right hand = 2</li>
            </ul>
        </li>
    </ol>

    <h4>B. Posture Check (2 min)</h4>
    <ol>
        <li><strong>Mike Adams posture test:</strong>
            <ul>
                <li>Stand straight with good posture</li>
                <li>Place hands on thighs</li>
                <li>Sit back and bend from hip joint</li>
                <li>Slide hands down until longest finger touches TOP of kneecap</li>
                <li>Feel tension in glutes</li>
                <li>Let arms hang naturally</li>
            </ul>
        </li>
        <li><strong>Balance check:</strong>
            <ul>
                <li>Feel pressure under balls of feet (shoelace area)</li>
                <li>NOT in toes, NOT in heels</li>
                <li>Stable, athletic position</li>
            </ul>
        </li>
        <li><strong>Center of gravity:</strong>
            <ul>
                <li>Imagine glass of wine at belt buckle</li>
                <li>Goal: Don't spill a drop during swing</li>
            </ul>
        </li>
    </ol>

    <p>✅ <strong>Success Metric:</strong> Position feels athletic and stable</p>

    <h3>🔄 PHASE 2: BODY WAKE-UP (3 minutes)</h3>
    <p><strong>Now pick up your club</strong></p>

    <h4>A. Chest Rotation Drill (10 reps)</h4>
    <ol>
        <li>Take your posture position (no ball)</li>
        <li>Pick a rib on your RIGHT side</li>
        <li>Stretch that rib as FAR away as possible on backswing</li>
        <li>Let arms swing WITH body (stay passive)</li>
        <li>Make 10 slow-motion practice swings</li>
    </ol>
    <p><strong>FEEL:</strong> Your whole rib cage turning, not just shoulders</p>

    <h4>B. Feet Together Swings (10 reps)</h4>
    <ol>
        <li>Put feet together</li>
        <li>Make half-speed swings (no ball)</li>
        <li>Feel centralized position</li>
        <li>Notice how body stays stable</li>
    </ol>
    <p><strong>FEEL:</strong> Can't move too far off center or you'll lose balance</p>

    <h4>C. Game Face Practice (5 reps)</h4>
    <ol>
        <li>Make practice swings with mouth SLIGHTLY open</li>
        <li>No tension in jaw</li>
        <li>Feel shoulders and arms soften</li>
    </ol>
    <p><strong>FEEL:</strong> Relaxed upper body, natural sequencing</p>

    <h3>⚾ PHASE 3: BALL CONTACT WAKE-UP (4 minutes)</h3>

    <h4>A. Short Pitch Shots (10 balls)</h4>
    <ul>
        <li>Use pitching wedge</li>
        <li>Targets 20-30 yards</li>
        <li>Focus ONLY on making clean contact</li>
        <li>Don't worry about where ball goes</li>
        <li>Just wake up the swing</li>
    </ul>
    <p>✅ <strong>Success Metric:</strong> Solid contact on 7/10 shots</p>

    <h4>B. Mid-Range Shots (10 balls)</h4>
    <ul>
        <li>Use 7 or 8-iron</li>
        <li>Targets 50-75 yards</li>
        <li>Three-quarter swings</li>
        <li>Focus on rhythm and balance</li>
    </ul>
    <p>✅ <strong>Success Metric:</strong> Finish in balance on every shot</p>

    <p><strong>⏱️ Total Time:</strong> 10 minutes</p>
`;

// ===================================
// STATION/DRILL CONTENT
// ===================================
const stationContent = {
    driver: `
        <h3>STATION 1: DRIVER - DISTANCE & ACCURACY</h3>
        <p><strong>Purpose:</strong> Eliminate slice, add distance, improve consistency</p>
        <p><strong>Time:</strong> 20-25 minutes</p>

        <div class="drill-card">
            <h4>BEGINNER: Setup Fundamentals</h4>
            <p><strong>Drill 1A: Grip Position for Straighter Drives</strong> <span class="drill-level">B</span></p>
            <ol>
                <li>Hold club OUTSIDE left hip</li>
                <li>Let arm hang naturally</li>
                <li>Place club in hand in this position</li>
                <li>Hit 10 balls with this stronger grip</li>
            </ol>
            <p>✅ <strong>Success:</strong> Ball starts more left or straight (less slice)</p>
            <p><em>Reference: Video 3</em></p>
        </div>

        <div class="drill-card">
            <h4>Drill 1B: Handle Position Check</h4>
            <p><span class="drill-level">B</span></p>
            <ol>
                <li>Set up with handle LEVEL with club head (not behind)</li>
                <li>Keep hands in NEUTRAL or HIGH position</li>
                <li>Check: shaft should be 90° to ground</li>
                <li>Hit 10 balls focusing ONLY on maintaining this position</li>
            </ol>
            <p>✅ <strong>Success:</strong> Less slice spin, ball draws or goes straight</p>
            <p><em>Reference: Video 3</em></p>
        </div>

        <div class="drill-card">
            <h4>Drill 1C: Forearm Alignment</h4>
            <p><span class="drill-level">B</span></p>
            <ol>
                <li>Set up normally</li>
                <li>Check: right forearm SLIGHTLY BELOW left forearm</li>
                <li>This encourages inside-out path</li>
                <li>Hit 10 balls with this setup</li>
            </ol>
            <p>✅ <strong>Success:</strong> Inside-out swing path, draw spin</p>
            <p><em>Reference: Video 3</em></p>
        </div>

        <div class="drill-card">
            <h4>INTERMEDIATE: Rib Stretch for Rotation</h4>
            <p><span class="drill-level">I</span></p>
            <ol>
                <li>Take setup with driver</li>
                <li>Pick ONE specific rib on your RIGHT side</li>
                <li>Feel: Stretch that rib as FAR AWAY from the ball as possible</li>
                <li>This creates proper rotation and space</li>
                <li>Hit 15 balls focusing ONLY on rib stretch</li>
            </ol>
            <p>✅ <strong>Success:</strong> Feel rotation from inside, increased distance</p>
            <p><em>Reference: Video 28</em></p>
        </div>

        <div class="drill-card">
            <h4>ADVANCED: Glide & Push Sequence</h4>
            <p><span class="drill-level">A</span></p>
            <ol>
                <li>Setup: Driver, normal stance</li>
                <li>Backswing: Feel right pocket moving TOWARD target BEFORE you reach top</li>
                <li>Top of swing: Right pocket has already started forward</li>
                <li>Transition: STOMP left foot into ground</li>
                <li>Follow through: Pressure moves left</li>
            </ol>
            <p><strong>Sequence:</strong> Glide → Stomp → Release</p>
            <p>✅ <strong>Success:</strong> 20+ yards added, inside-out path</p>
            <p><em>Reference: Videos 13, 15</em></p>
        </div>
    `,

    irons: `
        <h3>STATION 2: IRON PLAY - PURE STRIKING</h3>
        <p><strong>Purpose:</strong> Consistent ball-first contact, eliminate fat/thin shots</p>
        <p><strong>Time:</strong> 20-25 minutes</p>

        <div class="drill-card">
            <h4>BEGINNER: Eyes Ahead Drill</h4>
            <p><span class="drill-level">B</span></p>
            <ol>
                <li>Take normal iron setup</li>
                <li>Instead of looking AT ball, look at grass 3-4 cm AHEAD of ball</li>
                <li>This is where you want LOW POINT</li>
                <li>Make swing while looking ahead</li>
                <li>Hit 15 balls, focus ONLY on looking ahead</li>
            </ol>
            <p>✅ <strong>Success:</strong> Ball-first contact, forward divot</p>
            <p><em>Reference: Video 11</em></p>
        </div>

        <div class="drill-card">
            <h4>INTERMEDIATE: Belt Buckle Stability</h4>
            <p><span class="drill-level">I</span></p>
            <ol>
                <li>Setup: 7-iron, normal stance</li>
                <li>Note distance from belt buckle to ball</li>
                <li>Goal: Keep this EXACT distance throughout swing</li>
                <li>Prevents lifting/dropping</li>
                <li>Hit 15 balls focusing on stable center</li>
            </ol>
            <p>✅ <strong>Success:</strong> Consistent contact, no fat/thin</p>
            <p><em>Reference: Video 14</em></p>
        </div>

        <div class="drill-card">
            <h4>ADVANCED: Skater Push Drill</h4>
            <p><span class="drill-level">A</span></p>
            <ol>
                <li>Setup: Iron, normal stance</li>
                <li>Backswing: Normal</li>
                <li>Transition: PUSH under right foot like speed skater</li>
                <li>This moves you LEFT early (before hands drop)</li>
                <li>Result: Center ahead of ball at impact</li>
            </ol>
            <p>✅ <strong>Success:</strong> Perfect divots, compressed contact</p>
            <p><em>Reference: Video 4</em></p>
        </div>
    `,

    chipping: `
        <h3>STATION 3: SHORT GAME - CHIPPING</h3>
        <p><strong>Purpose:</strong> Consistent chip contact, distance control</p>
        <p><strong>Time:</strong> 15-20 minutes</p>

        <div class="drill-card">
            <h4>BEGINNER: Posture Check Chipping</h4>
            <p><span class="drill-level">B</span></p>
            <ol>
                <li>CRITICAL: Use SAME posture as full swing</li>
                <li>NOT upright, NOT rounded shoulders</li>
                <li>Tilted forward from hips, athletic</li>
                <li>Hit 15 chips focusing ONLY on maintaining posture</li>
            </ol>
            <p>✅ <strong>Success:</strong> Clean contact, no chunks/skulls</p>
            <p><em>Reference: Videos 31, 32</em></p>
        </div>

        <div class="drill-card">
            <h4>INTERMEDIATE: Chest Rotation Only</h4>
            <p><span class="drill-level">I</span></p>
            <ol>
                <li>Setup: Good posture, arms feel "stuck to sides"</li>
                <li>ONE moving part: Chest rotation</li>
                <li>NO independent hand/arm action</li>
                <li>Backswing: LEFT shoulder down (chest turns)</li>
                <li>Through: RIGHT shoulder down (chest turns)</li>
                <li>Arms are passengers</li>
            </ol>
            <p>✅ <strong>Success:</strong> Consistent contact, predictable distance</p>
            <p><em>Reference: Videos 33, 34, 35</em></p>
        </div>

        <div class="drill-card">
            <h4>ADVANCED: Distance Control by Turn</h4>
            <p><span class="drill-level">A</span></p>
            <ol>
                <li>Short chip: SMALL chest turn</li>
                <li>Medium chip: MEDIUM chest turn</li>
                <li>Long chip: LARGER chest turn</li>
                <li>Practice hitting to 3 different distances using ONLY turn size</li>
            </ol>
            <p>✅ <strong>Success:</strong> Control distance within 3 feet of target</p>
            <p><em>Reference: Video 36</em></p>
        </div>
    `,

    wedges: `
        <h3>WEDGES - FULL SWING</h3>
        <p><strong>Purpose:</strong> Consistent wedge play from various distances</p>
        <p><strong>Time:</strong> 15-20 minutes</p>

        <div class="drill-card">
            <h4>Distance Control Drill</h4>
            <p><span class="drill-level">I</span></p>
            <ol>
                <li>Pick 3 targets: 50, 75, and 100 yards</li>
                <li>Use same wedge for all three</li>
                <li>Control distance with swing length, not speed</li>
                <li>Hit 5 balls to each target</li>
            </ol>
            <p>✅ <strong>Success:</strong> Land within 10 yards of each target</p>
        </div>
    `,

    putting: `
        <h3>STATION 4: PUTTING FUNDAMENTALS</h3>
        <p><strong>Purpose:</strong> Improve start line, distance control, make more putts</p>
        <p><strong>Time:</strong> 15-20 minutes</p>

        <div class="drill-card">
            <h4>BEGINNER: Face Aim Setup</h4>
            <p><span class="drill-level">B</span></p>
            <ol>
                <li>Place ball, step away</li>
                <li>Visualize line to hole</li>
                <li>Step up, aim FACE first (85% of start line)</li>
                <li>Then adjust body</li>
                <li>Hit 10 putts focusing ONLY on face aim</li>
            </ol>
            <p>✅ <strong>Success:</strong> Ball starts on intended line</p>
            <p><em>Reference: Videos 38, 39</em></p>
        </div>

        <div class="drill-card">
            <h4>INTERMEDIATE: Hole-Ball-Go Trigger</h4>
            <p><span class="drill-level">I</span></p>
            <ol>
                <li>Setup to putt</li>
                <li>Look at HOLE (visualize ball going in)</li>
                <li>Eyes to BALL</li>
                <li>Immediately GO (no freeze, no delay)</li>
                <li>Sequence: Hole → Ball → GO</li>
                <li>Hit 15 putts with this trigger</li>
            </ol>
            <p>✅ <strong>Success:</strong> Smooth stroke, better feel</p>
            <p><em>Reference: Videos 40, 41, 42</em></p>
        </div>

        <div class="drill-card">
            <h4>ADVANCED: Andrew's #1 Putting Drill</h4>
            <p><span class="drill-level">A</span></p>
            <ol>
                <li>3-foot putt</li>
                <li>Visualize success 3 times (once reading, twice at address)</li>
                <li>Focus: SOFT FOREARMS (not grip pressure)</li>
                <li>Use hole-ball-go trigger</li>
                <li>ALWAYS visualize holing it (never "lag")</li>
                <li>Make 10 in a row before moving back</li>
            </ol>
            <p>✅ <strong>Success:</strong> Make 10 consecutive 3-footers</p>
            <p><em>Reference: Videos 43, 44, 45</em></p>
        </div>
    `,

    bunker: `
        <h3>BUNKER PLAY</h3>
        <p><strong>Purpose:</strong> Escape bunkers consistently</p>
        <p><strong>Time:</strong> 15-20 minutes</p>

        <div class="drill-card">
            <h4>Basic Bunker Setup</h4>
            <p><span class="drill-level">B</span></p>
            <ol>
                <li>Open stance (aim left)</li>
                <li>Open club face</li>
                <li>Ball forward in stance</li>
                <li>Hit sand 2 inches behind ball</li>
                <li>Full swing, let club glide through sand</li>
            </ol>
            <p>✅ <strong>Success:</strong> Get ball out of bunker 8/10 times</p>
        </div>
    `
};

// ===================================
// UTILITY: Generate YouTube Link
// ===================================
function generateYouTubeLink(videoNumber, timestamp = null) {
    const videoId = videoMap[videoNumber];
    if (!videoId) return '';

    let url = `https://youtu.be/${videoId}`;
    if (timestamp) {
        // Convert timestamp to seconds if it's in MM:SS format
        let seconds = timestamp;
        if (typeof timestamp === 'string' && timestamp.includes(':')) {
            const parts = timestamp.split(':');
            seconds = parseInt(parts[0]) * 60 + parseInt(parts[1]);
        }
        url += `?t=${seconds}`;
    }
    return url;
}

// ===================================
// UTILITY: Add YouTube Links to Content
// ===================================
function addYouTubeLinks(htmlContent) {
    // Pattern to match: "Reference: Video X" or "Reference: Videos X, Y, Z"
    const pattern = /<em>Reference: Videos? ([\d, ]+)<\/em>/g;

    return htmlContent.replace(pattern, (match, videoNumbers) => {
        const numbers = videoNumbers.split(',').map(n => n.trim());
        const links = numbers.map(num => {
            const url = generateYouTubeLink(parseInt(num));
            return `<a href="${url}" class="video-link" target="_blank">Video ${num}</a>`;
        }).join(' ');

        return `<p><strong>Watch:</strong> ${links}</p>`;
    });
}

// ===================================
// ON-COURSE PAGE LOGIC
// ===================================
if (document.querySelector('.club-selector')) {
    const clubButtons = document.querySelectorAll('.club-button');
    const clubContentArea = document.querySelector('.club-content');

    // Load default club (driver) with YouTube links
    clubContentArea.innerHTML = addYouTubeLinks(clubContent.driver);

    clubButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            clubButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Load club content with YouTube links
            const club = button.dataset.club;
            clubContentArea.innerHTML = addYouTubeLinks(clubContent[club]);
        });
    });
}

// ===================================
// PRACTICE PAGE LOGIC
// ===================================
if (document.querySelector('.practice-section')) {
    const warmupSection = document.getElementById('warmup-section');
    const stationSelector = document.getElementById('station-selector');
    const stationContentSection = document.getElementById('station-content');
    const warmupDoneBtn = document.getElementById('warmup-done-btn');
    const backToWarmupBtn = document.getElementById('back-to-warmup-btn');
    const backToStationsBtn = document.getElementById('back-to-stations-btn');
    const stationButtons = document.querySelectorAll('.station-button');
    const stationTitle = document.getElementById('station-title');
    const stationDrills = document.querySelector('.station-drills');
    const warmupContentArea = document.querySelector('.warmup-content');

    // Load warm-up content
    warmupContentArea.innerHTML = warmupContent;

    // Warm-up done button
    warmupDoneBtn.addEventListener('click', () => {
        warmupSection.classList.add('hidden');
        stationSelector.classList.remove('hidden');
    });

    // Back to warm-up button
    backToWarmupBtn.addEventListener('click', () => {
        stationSelector.classList.add('hidden');
        warmupSection.classList.remove('hidden');
    });

    // Back to stations button
    backToStationsBtn.addEventListener('click', () => {
        stationContentSection.classList.add('hidden');
        stationSelector.classList.remove('hidden');
    });

    // Station selection
    stationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const station = button.dataset.station;
            const stationName = button.querySelector('.label').textContent;

            // Update title and load content with YouTube links
            stationTitle.textContent = stationName;
            const content = stationContent[station] || '<p>Content coming soon...</p>';
            stationDrills.innerHTML = addYouTubeLinks(content);

            // Show station content
            stationSelector.classList.add('hidden');
            stationContentSection.classList.remove('hidden');
        });
    });
}
