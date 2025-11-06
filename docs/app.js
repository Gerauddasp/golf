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
// GOLF LEXICON - KEY TERMS EXPLAINED
// ===================================
const golfLexicon = `
    <div id="lexicon" style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
        <h2>📖 Golf Terms Explained - Our Systematic Approach</h2>

        <p style="background: #e8f5e9; padding: 15px; border-radius: 8px;">
            <strong>🎯 The Andrew Cullen Philosophy:</strong><br>
            "Not everyone is the same" - Find YOUR natural positions within these ranges.
            This system provides consistency while allowing personal adaptation.
        </p>

        <h3>🤲 GRIP FUNDAMENTALS</h3>
        <ul>
            <li><strong>The Knuckles System:</strong>
                <span class="image-toggle" data-image="knuckles">📷</span>
                <div class="hidden-image" id="img-knuckles">
                    <img src="images/grip-knuckles.jpeg" alt="Knuckles counting visualization - showing 2-4 knuckles visible on left hand grip" loading="lazy" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px;">
                </div>
                <ul>
                    <li>Look down at your LEFT hand (for right-handed golfers)</li>
                    <li>Count how many knuckles you can see</li>
                    <li>2 knuckles = "neutral" (traditional teaching)</li>
                    <li>3-4 knuckles = "stronger" (Andrew's preference, more natural)</li>
                    <li><em>Why it varies: Your natural arm hang determines YOUR best grip</em></li>
                </ul>
            </li>
            <li><strong>Pressure Scale (1-10):</strong>
                <ul>
                    <li>1 = Butterfly landing on your hand</li>
                    <li>3 = Holding a bird (won't fly away, won't hurt it)</li>
                    <li>5 = Firm handshake</li>
                    <li>7 = Squeezing toothpaste from tube</li>
                    <li>10 = Crushing a can</li>
                    <li><strong>Andrew's recommendation: Left 3-4, Right 2-3</strong></li>
                </ul>
            </li>
            <li><strong>V's Pointing:</strong>
                <span class="image-toggle" data-image="vs">📷</span>
                <div class="hidden-image" id="img-vs">
                    <img src="images/grip-Vs.jpeg" alt="V's pointing visualization - showing V formed between thumb and index finger pointing to right shoulder" loading="lazy" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px;">
                </div>
                <ul>
                    <li>The "V" = valley formed between thumb and index finger</li>
                    <li>Both V's should point to right shoulder/ear area</li>
                    <li><strong>Why Driver emphasis?</strong> Maximum power requires strongest grip position</li>
                    <li>Other clubs can use slightly weaker for control</li>
                </ul>
            </li>
            <li><strong>Andrew's Left Hand Method:</strong>
                <ul>
                    <li>Club starts at your left side (not in front)</li>
                    <li>Grab naturally from the side</li>
                    <li>This creates YOUR natural grip angle</li>
                    <li>Works for ALL clubs - just adjust strength as needed</li>
                </ul>
            </li>
        </ul>

        <h3>🦵 STANCE & POSTURE</h3>
        <ul>
            <li><strong>Knee Flex - The Hand Test:</strong>
                <ul>
                    <li>Stand naturally, arms hanging</li>
                    <li>Bend knees until longest finger touches TOP of kneecap</li>
                    <li>NOT middle of kneecap (too much flex)</li>
                    <li>This is YOUR proper knee flex for ALL clubs</li>
                </ul>
            </li>
            <li><strong>Club Height at Setup:</strong>
                <ul>
                    <li><strong>Driver:</strong> Hands at belt buckle, shaft tilts up</li>
                    <li><strong>Woods:</strong> Hands just below belt buckle</li>
                    <li><strong>Hybrids:</strong> Hands at belt buckle level</li>
                    <li><strong>Irons:</strong> Hands at belt buckle to belly button</li>
                    <li><strong>Wedges:</strong> Hands slightly lower (more bent over)</li>
                </ul>
            </li>
            <li><strong>Distance from Ball:</strong>
                <ul>
                    <li><strong>The Arm Hang Test:</strong> Arms hang naturally with slight reach</li>
                    <li>Hands should be 1 fist-width from thighs</li>
                    <li><strong>Eye Level Check:</strong> Can you see your shoelaces? Too close if not</li>
                    <li>Right arm slightly extended but relaxed</li>
                </ul>
            </li>
        </ul>

        <h3>⛳ BALL POSITION</h3>
        <span class="image-toggle" data-image="ballposition">📷</span>
        <div class="hidden-image" id="img-ballposition">
            <img src="images/ball-position.jpeg" alt="Ball position guide for different clubs" loading="lazy" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px;">
        </div>
        <ul>
            <li><strong>Driver:</strong> Center of stance (middle between feet)</li>
            <li><strong>Fairway Woods:</strong> Inside left heel (opposite heel)</li>
            <li><strong>Hybrids:</strong> 2 balls forward of center</li>
            <li><strong>Long Irons (4-6):</strong> 1 ball forward of center</li>
            <li><strong>Mid Irons (7-8):</strong> Center of stance</li>
            <li><strong>Short Irons (9-PW):</strong> Center of stance</li>
            <li><strong>Wedges (full swing):</strong> Center of stance</li>
            <li><strong>Chipping:</strong> Back of center (favor back foot)</li>
            <li><strong>Putting:</strong> Under left eye</li>
        </ul>

        <h3>👟 FEET POSITIONS & ANGLES</h3>
        <ul>
            <li><strong>The Jump Test (Find YOUR Natural Angle):</strong>
                <ul>
                    <li>Jump straight up and land naturally</li>
                    <li>Look at your feet - this is YOUR natural stance</li>
                    <li>Most people land with feet slightly flared (10-15°)</li>
                    <li>Use this as your base for all shots</li>
                </ul>
            </li>
            <li><strong>Typical Angles:</strong>
                <ul>
                    <li><strong>Back foot:</strong> 80-90° (nearly perpendicular)</li>
                    <li><strong>Front foot:</strong> 20-25° open (toward target)</li>
                    <li>More flexibility = more flare allowed</li>
                </ul>
            </li>
        </ul>

        <h3>📐 STANCE WIDTH</h3>
        <ul>
            <li><strong>Driver:</strong> Outside of feet at shoulder width</li>
            <li><strong>Fairway Woods:</strong> Just inside shoulder width</li>
            <li><strong>Hybrids:</strong> Shoulder width</li>
            <li><strong>Long Irons:</strong> Slightly inside shoulders</li>
            <li><strong>Mid Irons:</strong> Hip width to shoulders</li>
            <li><strong>Short Irons:</strong> Hip width</li>
            <li><strong>Wedges:</strong> Narrow (inside hip width)</li>
            <li><strong>Chipping:</strong> Feet close together</li>
        </ul>

        <h3>🎿 SPINE TILT & WEIGHT</h3>
        <ul>
            <li><strong>Spine Tilt Basics:</strong>
                <ul>
                    <li>Bend from hips, not waist</li>
                    <li>Spine straight but angled</li>
                    <li>Feel like pushing butt back</li>
                    <li>Same basic posture for ALL clubs</li>
                </ul>
            </li>
            <li><strong>Weight Distribution by Club:</strong>
                <ul>
                    <li><strong>Driver:</strong> 55-60% back foot (slight lean away)</li>
                    <li><strong>Woods:</strong> 50-50 balanced</li>
                    <li><strong>Hybrids:</strong> 50-50 or 55% front</li>
                    <li><strong>Irons:</strong> 55% front foot</li>
                    <li><strong>Wedges:</strong> 55-60% front foot</li>
                    <li><strong>Chipping:</strong> 60-70% front foot</li>
                </ul>
            </li>
        </ul>

        <h3>⚡ SWING DYNAMICS</h3>
        <ul>
            <li><strong>The Sequence (All Clubs):</strong>
                <ol>
                    <li>Backswing: Shoulders turn, arms follow</li>
                    <li>Transition: Hips start first (lower body leads)</li>
                    <li>Downswing: Hips → Torso → Arms → Club</li>
                    <li>Impact: Body positions vary by club</li>
                    <li>Follow-through: Complete rotation to target</li>
                </ol>
            </li>
            <li><strong>Where to "Aim" (Low Point):</strong>
                <ul>
                    <li><strong>Driver:</strong> Hit UP - low point before ball</li>
                    <li><strong>Woods:</strong> Sweep - low point at ball</li>
                    <li><strong>Hybrids:</strong> Slightly down - just after ball</li>
                    <li><strong>Irons:</strong> Down - divot starts at ball</li>
                    <li><strong>Wedges:</strong> Down - crisp ball-turf contact</li>
                </ul>
            </li>
        </ul>

        <h3>✅ QUICK REFERENCE CHECKS</h3>
        <ul>
            <li><strong>Good Grip:</strong> Can see 2-4 knuckles, pressure 3-4/10</li>
            <li><strong>Good Setup:</strong> Athletic, balanced, arms hang freely</li>
            <li><strong>Good Strike:</strong> Solid sound, predictable flight</li>
            <li><strong>Good Finish:</strong> Balanced, can hold for 3 seconds</li>
        </ul>

        <p style="background: #fff3cd; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <strong>💡 Remember:</strong> This system gives you consistency across all clubs.
            The fundamentals stay the same - only small adjustments change.
            Pick ONE swing thought per round and commit to it!
        </p>
    </div>
`;

// ===================================
// CLUB REFERENCE CONTENT (ON-COURSE QUICK REFERENCE - NO DRILLS)
// ===================================
const clubContent = {
    driver: `
        <h2>🚗 DRIVER - Complete Setup System</h2>
        <p><strong>Goal:</strong> Maximum distance with controlled flight</p>
        <p><a href="#lexicon" style="color: #1976d2;">📖 See Golf Terms Explained for detailed definitions</a></p>

        <h3>🤲 GRIP (The Foundation)</h3>
        <ul>
            <li><strong>Knuckles:</strong> 3-4 visible (stronger grip for power)</li>
            <li><strong>Pressure:</strong> Left hand 3-4/10, Right hand 2-3/10
                <br><em>Think: "Holding a bird" in your hands</em></li>
            <li><strong>V's Pointing:</strong> Both to right shoulder/ear</li>
            <li><strong>Left Hand Position:</strong> Grab from side naturally (Andrew's method)</li>
        </ul>

        <h3>🦵 STANCE & POSTURE</h3>
        <ul>
            <li><strong>Knee Flex:</strong> Slight - hands hang to top of kneecaps</li>
            <li><strong>Club Height:</strong> Hands at belt buckle, shaft tilts up slightly</li>
            <li><strong>Distance from Ball:</strong>
                <br>• Arms hang naturally with slight reach
                <br>• Right arm extended but relaxed
                <br>• Can see your shoelaces</li>
            <li><strong>Ball Position:</strong> Center of stance (middle between feet)</li>
            <li><strong>Feet Width:</strong> Outside of feet at shoulder width</li>
            <li><strong>Feet Angles:</strong> Back foot 90°, Front foot 25° open</li>
            <li><strong>Spine Tilt:</strong> Upper body leans slightly away from target</li>
            <li><strong>Weight Distribution:</strong> 55-60% on back foot</li>
        </ul>

        <h3>⚡ SWING DYNAMICS</h3>
        <ul>
            <li><strong>Sequence:</strong>
                <br>1. Wide backswing (maintain arm extension)
                <br>2. Hips initiate downswing
                <br>3. Shoulders/arms follow
                <br>4. Hit UP on ball (ascending blow)</li>
            <li><strong>Low Point:</strong> 10-15cm BEFORE ball</li>
            <li><strong>Key Feel:</strong> Sweeping ball off tee, not hitting down</li>
        </ul>

        <h3>💭 ONE SWING THOUGHT (Pick ONE only)</h3>
        <ul>
            <li>"Keep width at top" - maintain arm extension</li>
            <li>"Right shoulder stays back" - prevents over-the-top</li>
            <li>"Sweep up through ball" - ascending blow</li>
            <li>"Soft right hand" - prevents "lobster grip"</li>
            <li>"Glide then push" - proper sequence</li>
        </ul>

        <h3>✅ QUICK CHECKS</h3>
        <ul>
            <li>✅ Tee still in ground (no divot)</li>
            <li>✅ High launch, low spin</li>
            <li>✅ Weight finishes 90% on front foot</li>
            <li>✅ Can hold finish for 3 seconds</li>
        </ul>

        <p><em>Reference: Videos 1, 3, 26, 28, 29</em></p>
    `,

    woods: `
        <h2>🌲 FAIRWAY WOODS - Complete Setup System</h2>
        <p><strong>Goal:</strong> Consistent contact from fairway or tee</p>
        <p><a href="#lexicon" style="color: #1976d2;">📖 See Golf Terms Explained for detailed definitions</a></p>

        <h3>🤲 GRIP (The Foundation)</h3>
        <ul>
            <li><strong>Knuckles:</strong> 2-3 visible (neutral to slight strong)</li>
            <li><strong>Pressure:</strong> Left hand 3-4/10, Right hand 2-3/10
                <br><em>Think: "Firm handshake" pressure</em></li>
            <li><strong>V's Pointing:</strong> Both to right shoulder</li>
            <li><strong>Grip Down:</strong> Hold club 1-2cm lower for control</li>
        </ul>

        <h3>🦵 STANCE & POSTURE</h3>
        <ul>
            <li><strong>Knee Flex:</strong> Slight - hands hang to top of kneecaps</li>
            <li><strong>Club Height:</strong> Hands just below belt buckle</li>
            <li><strong>Distance from Ball:</strong>
                <br>• Arms hang naturally
                <br>• Slightly further than irons
                <br>• Room to swing under chin</li>
            <li><strong>Ball Position:</strong> Inside left heel (opposite heel)</li>
            <li><strong>Feet Width:</strong> Just inside shoulder width</li>
            <li><strong>Feet Angles:</strong> Natural flare from jump test (10-15°)</li>
            <li><strong>Spine Tilt:</strong> Neutral - not leaning away like driver</li>
            <li><strong>Weight Distribution:</strong> 50-50 balanced</li>
        </ul>

        <h3>⚡ SWING DYNAMICS</h3>
        <ul>
            <li><strong>Sequence:</strong>
                <br>1. Smooth backswing (not rushed)
                <br>2. Hips start downswing
                <br>3. Sweep through impact zone
                <br>4. Brush grass after ball</li>
            <li><strong>Low Point:</strong> AT the ball (level sweep)</li>
            <li><strong>Key Feel:</strong> Brushing grass, not digging</li>
        </ul>

        <h3>💭 ONE SWING THOUGHT (Pick ONE only)</h3>
        <ul>
            <li>"Sweep the grass" - no dig, no lift</li>
            <li>"Stay level" - maintain spine angle</li>
            <li>"Sternum covers ball" - stay centered</li>
            <li>"Trust the loft" - don't help it up</li>
            <li>"Smooth tempo" - 1...and...2 count</li>
        </ul>

        <h3>✅ QUICK CHECKS</h3>
        <ul>
            <li>✅ Light brush mark on grass (no divot)</li>
            <li>✅ Ball flight medium-high trajectory</li>
            <li>✅ Solid "click" sound at impact</li>
            <li>✅ Consistent carry distance</li>
        </ul>

        <p><em>Reference: Videos 21, 26</em></p>
    `,

    hybrids: `
        <h2>🔷 HYBRIDS - Complete Setup System</h2>
        <p><strong>Goal:</strong> Versatile shots from various lies</p>
        <p><a href="#lexicon" style="color: #1976d2;">📖 See Golf Terms Explained for detailed definitions</a></p>

        <h3>🤲 GRIP (The Foundation)</h3>
        <ul>
            <li><strong>Knuckles:</strong> 2-3 visible (neutral grip like irons)</li>
            <li><strong>Pressure:</strong> Left hand 4/10, Right hand 3/10
                <br><em>Think: Same as your iron grip</em></li>
            <li><strong>V's Pointing:</strong> Both to right shoulder</li>
            <li><strong>Left Hand Position:</strong> Standard neutral position</li>
        </ul>

        <h3>🦵 STANCE & POSTURE</h3>
        <ul>
            <li><strong>Knee Flex:</strong> Slight - hands hang to top of kneecaps</li>
            <li><strong>Club Height:</strong> Hands at belt buckle level</li>
            <li><strong>Distance from Ball:</strong>
                <br>• Between iron and wood distance
                <br>• Arms hang comfortably
                <br>• Slight reach feeling</li>
            <li><strong>Ball Position:</strong> 2 balls forward of center</li>
            <li><strong>Feet Width:</strong> Shoulder width</li>
            <li><strong>Feet Angles:</strong> Natural flare (10-15°)</li>
            <li><strong>Spine Tilt:</strong> Slight forward lean like irons</li>
            <li><strong>Weight Distribution:</strong> 50-50 or 55% front foot</li>
        </ul>

        <h3>⚡ SWING DYNAMICS</h3>
        <ul>
            <li><strong>Sequence:</strong>
                <br>1. Iron-like backswing
                <br>2. Hips initiate downswing
                <br>3. Slightly descending blow
                <br>4. Sweep through with speed</li>
            <li><strong>Low Point:</strong> Just AFTER ball (slight descend)</li>
            <li><strong>Key Feel:</strong> Iron swing with wood forgiveness</li>
        </ul>

        <h3>💭 ONE SWING THOUGHT (Pick ONE only)</h3>
        <ul>
            <li>"Sweep with slight descend" - hybrid sweet spot</li>
            <li>"Trust the design" - club prevents digging</li>
            <li>"Iron swing, wood result" - best of both</li>
            <li>"Ball then ground" - proper sequence</li>
            <li>"Add speed through impact" - don't hold back</li>
        </ul>

        <h3>✅ QUICK CHECKS</h3>
        <ul>
            <li>✅ Small divot or brush mark</li>
            <li>✅ Penetrating ball flight (not ballooning)</li>
            <li>✅ Consistent distance gaps</li>
            <li>✅ Works from various lies</li>
        </ul>

        <p><em>Reference: Practice Program notes</em></p>
    `,

    irons: `
        <h2>⚙️ IRONS - Complete Setup System</h2>
        <p><strong>Goal:</strong> Consistent ball-first contact (THE fundamental)</p>
        <p><a href="#lexicon" style="color: #1976d2;">📖 See Golf Terms Explained for detailed definitions</a></p>

        <h3>🤲 GRIP (The Foundation)</h3>
        <ul>
            <li><strong>Knuckles:</strong> 2-3 visible (neutral grip)</li>
            <li><strong>Pressure:</strong> Left hand 4/10, Right hand 3/10
                <br><em>Think: "Firm handshake, not death grip"</em></li>
            <li><strong>V's Pointing:</strong> Both to right shoulder</li>
            <li><strong>Left Hand Position:</strong> Grab from side naturally</li>
        </ul>

        <h3>🦵 STANCE & POSTURE</h3>
        <ul>
            <li><strong>Knee Flex:</strong> Slight - hands hang to top of kneecaps</li>
            <li><strong>Club Height:</strong> Hands at belt buckle to belly button</li>
            <li><strong>Distance from Ball:</strong>
                <br>• Arms hang straight down
                <br>• Hands one fist from thighs
                <br>• Not reaching, not cramped</li>
            <li><strong>Ball Position:</strong>
                <br>• Long irons (4-6): 1 ball forward of center
                <br>• Mid irons (7-8): Center of stance
                <br>• Short irons (9-PW): Center of stance</li>
            <li><strong>Feet Width:</strong>
                <br>• Long irons: Slightly inside shoulders
                <br>• Mid irons: Hip width to shoulders
                <br>• Short irons: Hip width</li>
            <li><strong>Feet Angles:</strong> Natural flare (10-15°)</li>
            <li><strong>Spine Tilt:</strong> Bend from hips, spine straight</li>
            <li><strong>Weight Distribution:</strong> 55% front foot</li>
            <li><strong>⚠️ CRITICAL: Eyes look 3-4cm AHEAD of ball!</strong></li>
        </ul>

        <h3>⚡ SWING DYNAMICS</h3>
        <ul>
            <li><strong>Sequence:</strong>
                <br>1. Turn shoulders, maintain posture
                <br>2. Hips start downswing (skater push)
                <br>3. Sternum moves ahead of ball
                <br>4. Strike ball THEN ground</li>
            <li><strong>Low Point:</strong> 5-10cm AFTER ball</li>
            <li><strong>Key Feel:</strong> Compress ball against ground</li>
            <li><strong>The 3-Axis System:</strong>
                <br>• X-Axis: Low point at/after ball
                <br>• Y-Axis: Maintain posture height
                <br>• Z-Axis: Keep proper distance from body</li>
        </ul>

        <h3>💭 ONE SWING THOUGHT (Pick ONE only)</h3>
        <ul>
            <li>"Eyes ahead of ball" - promotes forward strike</li>
            <li>"Ball then ground" - proper sequence</li>
            <li>"Chest to target" - complete rotation</li>
            <li>"Weight forward at impact" - 80% front foot</li>
            <li>"Skater push off right foot" - proper weight shift</li>
        </ul>

        <h3>✅ QUICK CHECKS</h3>
        <ul>
            <li>✅ Divot starts AT ball position (not before)</li>
            <li>✅ Crisp "compression" sound</li>
            <li>✅ Penetrating ball flight</li>
            <li>✅ Consistent distances</li>
            <li>✅ Belt buckle same distance throughout</li>
        </ul>

        <p><em>Reference: Videos 5, 11, 12, 13</em></p>
    `,

    wedges: `
        <h2>🔪 WEDGES & CHIPPING - Complete Setup System</h2>
        <p><strong>Goal:</strong> Precise distance control & short game mastery</p>
        <p><a href="#lexicon" style="color: #1976d2;">📖 See Golf Terms Explained for detailed definitions</a></p>

        <h3>FULL WEDGE SHOTS</h3>

        <h4>🤲 GRIP (The Foundation)</h4>
        <ul>
            <li><strong>Knuckles:</strong> 2-3 visible (neutral)</li>
            <li><strong>Pressure:</strong> Left hand 3-4/10, Right hand 2-3/10
                <br><em>Think: "Lighter for feel"</em></li>
            <li><strong>Choke Down:</strong> Hold club 2-3cm lower for control</li>
            <li><strong>V's Pointing:</strong> Both to right shoulder</li>
        </ul>

        <h4>🦵 STANCE & POSTURE</h4>
        <ul>
            <li><strong>Knee Flex:</strong> Slight - hands hang to top of kneecaps</li>
            <li><strong>Club Height:</strong> Hands slightly lower (more bent over)</li>
            <li><strong>Distance from Ball:</strong>
                <br>• Slightly closer than irons
                <br>• Arms hang naturally</li>
            <li><strong>Ball Position:</strong> Center of stance</li>
            <li><strong>Feet Width:</strong> Narrow (inside hip width)</li>
            <li><strong>Feet Angles:</strong> Slightly open stance</li>
            <li><strong>Spine Tilt:</strong> More bent over than irons</li>
            <li><strong>Weight Distribution:</strong> 55-60% front foot</li>
        </ul>

        <h4>⚡ DISTANCE CONTROL SYSTEM</h4>
        <ul>
            <li><strong>Clock System:</strong>
                <br>• 7:30 backswing = 1/4 swing (e.g., 40m)
                <br>• 9:00 backswing = 1/2 swing (e.g., 60m)
                <br>• 10:30 backswing = 3/4 swing (e.g., 75m)
                <br>• Full swing = maximum (e.g., 90m)</li>
            <li><strong>Key:</strong> Same tempo, different backswing length</li>
        </ul>

        <hr style="margin: 20px 0;">

        <h3>CHIPPING TECHNIQUE</h3>

        <h4>🎯 Setup Differences from Full Swing</h4>
        <ul>
            <li><strong>Ball Position:</strong> Back of center (favor back foot)</li>
            <li><strong>Feet Width:</strong> Feet close together</li>
            <li><strong>Weight:</strong> 60-70% on front foot</li>
            <li><strong>Hands:</strong> Ahead of ball at address</li>
            <li><strong>⚠️ SAME POSTURE as full swing!</strong>
                <br><em>Don't stand taller - maintain athletic position</em></li>
        </ul>

        <h4>⚡ CHIPPING DYNAMICS</h4>
        <ul>
            <li><strong>The ONE Rule:</strong> Chest rotation ONLY
                <br>• Arms stay "stuck to sides"
                <br>• NO independent hand/wrist action
                <br>• Body turn controls everything</li>
            <li><strong>Distance Control:</strong>
                <br>• 5m chip = tiny chest turn
                <br>• 10m chip = bigger chest turn
                <br>• 15m chip = even bigger turn</li>
            <li><strong>Shoulder Geometry:</strong>
                <br>• Backswing: Left shoulder DOWN
                <br>• Through swing: Right shoulder DOWN
                <br>• Everything 90° to spine</li>
        </ul>

        <h3>💭 ONE SWING THOUGHT (Pick ONE only)</h3>
        <ul>
            <li><strong>Full Wedges:</strong>
                <br>• "Accelerate through" - never decelerate
                <br>• "Control with turn size" - not hands
                <br>• "Trust the loft" - don't help it up</li>
            <li><strong>Chipping:</strong>
                <br>• "Chest turns the club" - body control
                <br>• "Arms stay connected" - no flip
                <br>• "Brush grass forward" - proper contact</li>
        </ul>

        <h3>✅ QUICK CHECKS</h3>
        <ul>
            <li>✅ Consistent trajectory height</li>
            <li>✅ Predictable carry distances</li>
            <li>✅ Clean ball-turf contact</li>
            <li>✅ No chunks or skulls</li>
        </ul>

        <p><em>Reference: Videos 31, 32, 33, 34, 35</em></p>
    `,

    putter: `
        <h2>🎯 PUTTING - Quick Reference</h2>
        <p><strong>Goal:</strong> Make everything inside 3 meters</p>
        <p><a href="#lexicon" style="color: #1976d2;">📖 See Golf Terms Explained for detailed definitions</a></p>

        <h3>Complete Setup:</h3>
        <ul>
            <li><strong>Grip:</strong>
                <ul>
                    <li>Personal preference (many styles work)</li>
                    <li>Light pressure (2-3 out of 10)</li>
                    <li>Palms facing each other</li>
                </ul>
            </li>
            <li><strong>Distance from Ball:</strong>
                <ul>
                    <li>Eyes directly over ball</li>
                    <li>Arms hang naturally under shoulders</li>
                    <li>Comfortable posture</li>
                </ul>
            </li>
            <li><strong>Ball Position:</strong> Under left eye (for right-handed)</li>
            <li><strong>Stance:</strong> Comfortable width, weight balanced</li>
            <li><strong>Face Aim:</strong> Square to target (85% of direction!)</li>
        </ul>

        <h3>Execution Method:</h3>
        <ul>
            <li><strong>Eye Trigger:</strong> Look at hole → Look at ball → Stroke IMMEDIATELY</li>
            <li><strong>No delay</strong> after eyes return to ball</li>
            <li><strong>Mentality:</strong> Always try to make it (never just "lag")</li>
        </ul>

        <h3>Special Situations:</h3>
        <ul>
            <li><strong>Downhill:</strong> Hit with toe of putter for less speed</li>
            <li><strong>Uphill:</strong> Firm stroke, accelerate through</li>
            <li><strong>Breaking putts:</strong> Pick spot on edge, roll over it</li>
        </ul>

        <h3>Quick Checks:</h3>
        <ul>
            <li>✅ Face square at address</li>
            <li>✅ No freezing over ball</li>
            <li>✅ Smooth acceleration</li>
            <li>✅ Head stays still</li>
        </ul>
    `
};

// ===================================
// SIMPLIFIED WARM-UP CONTENT (DRIVING RANGE APPROPRIATE)
// ===================================
const warmupContent = `
    <h2>⏱️ QUICK RANGE WARM-UP (5 minutes)</h2>
    <p><strong>Simple, effective, not embarrassing!</strong></p>

    <div class="warmup-option">
        <h3>Step 1: Setup Check (1 minute)</h3>
        <p><em>Just normal golf preparation - nothing weird!</em></p>
        <ul>
            <li><strong>Grip check:</strong> Take your normal grip a few times</li>
            <li><strong>Stance width:</strong> Practice address position</li>
            <li><strong>Feel the club:</strong> A few gentle wagggles</li>
            <li><strong>No stretching needed</strong> - that's what the swings are for</li>
        </ul>
    </div>

    <div class="warmup-option">
        <h3>Step 2: Small Swings (2 minutes)</h3>
        <p><em>Start with wedge - build confidence</em></p>
        <ul>
            <li>Take your pitching wedge or 9-iron</li>
            <li>10 swings at 50% speed</li>
            <li>Target: 40-50 meters only</li>
            <li>Focus: Clean contact, not distance</li>
        </ul>
    </div>

    <div class="warmup-option">
        <h3>Step 3: Progressive Swings (2 minutes)</h3>
        <p><em>Build up to full speed</em></p>
        <ul>
            <li><strong>7-iron:</strong> 5 swings at 75% speed</li>
            <li><strong>5-wood or hybrid:</strong> 3 swings at 80% speed</li>
            <li><strong>Driver:</strong> 2 swings at 90% speed</li>
            <li><strong>Driver:</strong> 2-3 full swings</li>
        </ul>
    </div>

    <div class="info-message" style="background: #e8f5e9; padding: 15px; margin: 20px 0; border-radius: 8px;">
        <p><strong>💡 That's it!</strong> You're ready to practice or play.</p>
        <p>No embarrassing stretches, no weird movements - just progressive golf swings.</p>
    </div>
`;

// ===================================
// STATION/DRILL CONTENT WITH ALTERNATIVES AND VIDEO LINKS
// ===================================
const stationContent = {
    driver: `
        <h3>DRIVER STATION - Distance & Accuracy</h3>
        <p><strong>Choose drills based on your main issue:</strong></p>

        <div class="drill-card">
            <h4>🎥 For SLICE: Stop-at-Top Width Drill <a href="https://youtu.be/${videoMap[1]}" target="_blank">📹</a></h4>
            <p><strong>Why it works:</strong> Prevents over-the-top move causing slice</p>

            <p><strong>Standard Version:</strong></p>
            <ol>
                <li>Take normal backswing with driver</li>
                <li>PAUSE at top for 2 full seconds</li>
                <li>Check: Can you see space between arms and chest?</li>
                <li>If arms collapsed = slice incoming</li>
                <li>Complete swing maintaining width</li>
            </ol>

            <p><strong>No Equipment Needed:</strong> ✅ This drill requires nothing extra</p>

            <p>✅ <strong>Success:</strong> Ball starts straight or slightly right</p>
            <p><strong>Commitment:</strong> 80% of drives for 2 months!</p>
            <p><em>Source: Me and My Golf</em></p>
        </div>

        <div class="drill-card">
            <h4>🎥 For BLOCKS: Towel Whip Drill <a href="https://youtu.be/${videoMap[3]}" target="_blank">📹</a></h4>
            <p><em>(Alternative to Nuclear Bag Drill)</em></p>
            <p><strong>Why it works:</strong> Teaches face rotation through impact</p>

            <p><strong>Version 1 - With Towel:</strong></p>
            <ol>
                <li>Hold towel like a club</li>
                <li>Make swing focusing on "whipping" towel through impact</li>
                <li>Feel the snap at bottom of swing</li>
                <li>This is face rotation feel</li>
            </ol>

            <p><strong>Version 2 - Golf Bag Alternative:</strong></p>
            <ol>
                <li>Set your golf bag where ball would be</li>
                <li>Practice swings stopping at bag</li>
                <li>Focus on toe of club reaching bag first</li>
                <li>Feel face rotating closed</li>
            </ol>

            <p>✅ <strong>Success:</strong> Draws instead of blocks</p>
            <p><em>Source: Me and My Golf adaptation</em></p>
        </div>

        <div class="drill-card">
            <h4>🎥 For SEQUENCE: Step Drill <a href="https://youtu.be/${videoMap[28]}" target="_blank">📹</a></h4>
            <p><em>(Alternative to Belt Grab)</em></p>
            <p><strong>Why it works:</strong> Forces proper hip-initiated sequence</p>

            <p><strong>No Equipment Version:</strong></p>
            <ol>
                <li>Start with feet together</li>
                <li>Take backswing</li>
                <li>Step forward with lead foot to start downswing</li>
                <li>Complete swing</li>
                <li>The step forces hips to lead</li>
            </ol>

            <p>✅ <strong>Success:</strong> Natural power, proper sequence</p>
            <p><em>Source: Classic instruction</em></p>
        </div>
    `,

    irons: `
        <h3>IRON STATION - Pure Ball Striking</h3>
        <p><strong>Progressive drills for crisp contact:</strong></p>

        <div class="drill-card">
            <h4>🎥 For FAT/THIN: Tee Height Drill <a href="https://youtu.be/${videoMap[5]}" target="_blank">📹</a></h4>
            <p><em>(Alternative to elaborate drills)</em></p>
            <p><strong>Why it works:</strong> Gives clear feedback on strike quality</p>

            <p><strong>Version 1 - With Tees (uses only 5-10 tees):</strong></p>
            <ol>
                <li>Place ball on low tee (5mm high)</li>
                <li>Goal: Hit ball without hitting tee</li>
                <li>If you hit tee = fat shot</li>
                <li>Clean strike leaves tee standing</li>
                <li>Use same tees multiple times</li>
            </ol>

            <p><strong>Version 2 - No Tees:</strong></p>
            <ol>
                <li>Place ball on best lie you can find</li>
                <li>Focus on brushing grass AFTER ball</li>
                <li>Mark divot start point with tee</li>
                <li>Check: Divot starts at or after mark</li>
            </ol>

            <p>✅ <strong>Success:</strong> Clean ball-then-ground contact</p>
            <p><em>Source: Universal teaching method</em></p>
        </div>

        <div class="drill-card">
            <h4>🎥 For CONSISTENCY: Arm Connection Drill <a href="https://youtu.be/${videoMap[12]}" target="_blank">📹</a></h4>
            <p><em>(Alternative to towel drill)</em></p>
            <p><strong>Why it works:</strong> Keeps arms and body synchronized</p>

            <p><strong>Version 1 - With Headcover:</strong></p>
            <ol>
                <li>Place headcover under lead armpit</li>
                <li>Make half swings keeping it in place</li>
                <li>If it falls = arms disconnected</li>
            </ol>

            <p><strong>Version 2 - No Equipment:</strong></p>
            <ol>
                <li>Cross arms on chest</li>
                <li>Make practice turns</li>
                <li>Feel body rotation</li>
                <li>Then swing trying to match that feeling</li>
            </ol>

            <p>✅ <strong>Success:</strong> Consistent contact</p>
            <p><em>Source: Me and My Golf</em></p>
        </div>

        <div class="drill-card">
            <h4>🎥 For LOW POINT: Grass Line Drill <a href="https://youtu.be/${videoMap[11]}" target="_blank">📹</a></h4>
            <p><strong>Why it works:</strong> Trains consistent strike location</p>

            <p><strong>Range Version:</strong></p>
            <ol>
                <li>Find a different colored grass blade or range stripe</li>
                <li>Place ball on back edge of line</li>
                <li>Try to take divot on TARGET side of line</li>
                <li>Line gives clear feedback</li>
            </ol>

            <p><strong>No Line Alternative:</strong></p>
            <ol>
                <li>Place broken tee 3cm ahead of ball</li>
                <li>Try to hit the tee after hitting ball</li>
                <li>Forces forward strike</li>
            </ol>

            <p>✅ <strong>Success:</strong> Divot consistently after ball</p>
            <p><em>Source: Andrew Cullen adaptation</em></p>
        </div>
    `,

    woods: `
        <h3>FAIRWAY WOODS STATION - Sweep Perfection</h3>
        <p><strong>Master the sweep for consistent contact:</strong></p>

        <div class="drill-card">
            <h4>🎥 Primary: Brush the Grass Drill <a href="https://youtu.be/${videoMap[21]}" target="_blank">📹</a></h4>
            <p><em>(Alternative to Tee Clipping)</em></p>
            <p><strong>Why it works:</strong> Perfect feedback for attack angle</p>

            <p><strong>Version 1 - No Tees Needed:</strong></p>
            <ol>
                <li>Make practice swings without ball</li>
                <li>Listen for club brushing grass</li>
                <li>Should hear "swish" at lowest point</li>
                <li>No divot, just brushing sound</li>
                <li>Add ball once you get consistent brush</li>
            </ol>

            <p><strong>Version 2 - Leaf Drill:</strong></p>
            <ol>
                <li>Place a leaf where ball would be</li>
                <li>Try to sweep leaf off ground</li>
                <li>Leaf should fly forward, not be crushed</li>
                <li>Perfect sweep indicator</li>
            </ol>

            <p>✅ <strong>Success:</strong> Clean sweep, solid contact</p>
            <p><em>Source: Athletic Motion Golf principle</em></p>
        </div>

        <div class="drill-card">
            <h4>🎥 For TEMPO: Count Drill <a href="https://youtu.be/${videoMap[26]}" target="_blank">📹</a></h4>
            <p><strong>Why it works:</strong> Prevents rushing with longer clubs</p>

            <p><strong>No Equipment Needed:</strong></p>
            <ol>
                <li>Count "1" on backswing (full second)</li>
                <li>Slight pause "and"</li>
                <li>Count "2" on downswing</li>
                <li>"1...and...2" rhythm</li>
                <li>Same tempo every swing</li>
            </ol>

            <p>✅ <strong>Success:</strong> Consistent solid contact</p>
            <p><em>Source: Universal tempo training</em></p>
        </div>
    `,

    wedges: `
        <h3>WEDGE STATION - Distance Control</h3>
        <p><strong>Calibrate your distances precisely (all in meters):</strong></p>

        <div class="drill-card">
            <h4>🎥 Clock System Calibration <a href="https://youtu.be/${videoMap[31]}" target="_blank">📹</a></h4>
            <p><strong>Why it works:</strong> Creates predictable distances</p>

            <p><strong>How to Build Your System:</strong></p>
            <ol>
                <li>Hit 10 balls with 7:30 backswing (1/4 swing)</li>
                <li>Measure average distance (e.g., 40m)</li>
                <li>Hit 10 balls with 9:00 backswing (1/2 swing)</li>
                <li>Measure average (e.g., 60m)</li>
                <li>Hit 10 balls with 10:30 backswing (3/4 swing)</li>
                <li>Measure average (e.g., 75m)</li>
                <li>Full swing (e.g., 90m)</li>
                <li>Write down YOUR numbers!</li>
            </ol>

            <p><strong>No Range Finder?</strong> Use range markers or pace it off</p>

            <p>✅ <strong>Success:</strong> Know exact carry distances</p>
            <p><em>Source: Russell Henley via Me and My Golf</em></p>
        </div>

        <div class="drill-card">
            <h4>🎥 Landing Spot Practice <a href="https://youtu.be/${videoMap[33]}" target="_blank">📹</a></h4>
            <p><strong>Why it works:</strong> Improves distance control</p>

            <p><strong>Simple Version:</strong></p>
            <ol>
                <li>Pick targets at 30m, 40m, 50m</li>
                <li>Try to land on exact spot</li>
                <li>Don't worry about roll out</li>
                <li>5 balls to each target</li>
                <li>Score how many within 3m of target</li>
            </ol>

            <p>✅ <strong>Success:</strong> 3/5 within 3m of target</p>
            <p><em>Source: Tour practice routine</em></p>
        </div>
    `,

    chipping: `
        <h3>CHIPPING STATION - Short Game Mastery</h3>
        <p><strong>Three techniques for every situation:</strong></p>

        <div class="drill-card">
            <h4>🎥 BASIC CHIP: One Club Length <a href="https://youtu.be/${videoMap[32]}" target="_blank">📹</a></h4>
            <p><strong>Why it works:</strong> Simplifies to body rotation only</p>

            <p><strong>Setup & Execution:</strong></p>
            <ol>
                <li>SAME posture as full swing (don't stand taller!)</li>
                <li>Ball back in stance</li>
                <li>Weight 60% on front foot</li>
                <li>Hands ahead of ball</li>
                <li>Rotate chest back and through</li>
                <li>Arms stay quiet (no wrist action)</li>
            </ol>

            <p><strong>Distance Control:</strong></p>
            <ul>
                <li>5m chip = tiny chest turn</li>
                <li>10m chip = bigger chest turn</li>
                <li>15m chip = even bigger turn</li>
            </ul>

            <p>✅ <strong>Success:</strong> Consistent contact, predictable roll</p>
            <p><em>Source: Andrew Cullen simplification</em></p>
        </div>

        <div class="drill-card">
            <h4>🎥 PITCH SHOT: Higher & Softer <a href="https://youtu.be/${videoMap[34]}" target="_blank">📹</a></h4>
            <p><strong>When to use:</strong> Need to carry obstacle or stop quickly</p>

            <p><strong>Different from Chip:</strong></p>
            <ol>
                <li>Ball position center or slightly forward</li>
                <li>Open clubface slightly at address</li>
                <li>Allow some wrist hinge in backswing</li>
                <li>Club goes more up than back</li>
                <li>Feel: "Slide under ball"</li>
                <li>Finish with chest facing target</li>
            </ol>

            <p>✅ <strong>Success:</strong> Higher flight, softer landing</p>
            <p><em>Source: Athletic Motion Golf</em></p>
        </div>

        <div class="drill-card">
            <h4>🎥 Distance Practice: 3 Spots <a href="https://youtu.be/${videoMap[35]}" target="_blank">📹</a></h4>
            <p><strong>Why it works:</strong> Builds feel for distance</p>

            <p><strong>Simple Practice:</strong></p>
            <ol>
                <li>Place towels at 5m, 10m, 15m</li>
                <li>Hit 5 balls to each towel</li>
                <li>Use SAME technique (chest rotation)</li>
                <li>Only change size of turn</li>
                <li>Track how many stop within 1m</li>
            </ol>

            <p><strong>No Towels?</strong> Use tees or just pick spots</p>

            <p>✅ <strong>Success:</strong> 3/5 within 1m of target</p>
            <p><em>Source: Tour short game practice</em></p>
        </div>
    `,

    putting: `
        <h3>PUTTING STATION - Make Everything</h3>
        <p><strong>Build confidence from 1 meter out:</strong></p>

        <div class="drill-card">
            <h4>🎥 #1 DRILL: Clock Drill <a href="https://youtu.be/${videoMap[38]}" target="_blank">📹</a></h4>
            <p><strong>Why it works:</strong> Practices all breaks under pressure</p>

            <p><strong>Setup:</strong></p>
            <ol>
                <li>Place 4 balls around hole at 1 meter (3 feet)</li>
                <li>Positions: 12, 3, 6, 9 o'clock</li>
                <li>Must make all 4 in a row = 1 round</li>
                <li>If you miss, start over!</li>
                <li>Complete 5 rounds (20 putts total)</li>
                <li>Goal: Make 17/20 or better</li>
            </ol>

            <p><strong>No Multiple Balls?</strong> Use one ball, mark each spot with tee</p>

            <p>✅ <strong>Success:</strong> 85%+ from 1 meter</p>
            <p><strong>Andrew says:</strong> "This drill changes handicaps!"</p>
            <p><em>Source: Andrew Cullen's #1 putting drill</em></p>
        </div>

        <div class="drill-card">
            <h4>🎥 Eye Trigger Practice <a href="https://youtu.be/${videoMap[39]}" target="_blank">📹</a></h4>
            <p><strong>Why it works:</strong> Eliminates freezing over ball</p>

            <p><strong>The Method:</strong></p>
            <ol>
                <li>Set up to 1.5m putt</li>
                <li>Look at hole</li>
                <li>Look at ball</li>
                <li>Stroke IMMEDIATELY (no pause!)</li>
                <li>Sequence: Hole→Ball→GO</li>
                <li>Practice 10 putts this way</li>
            </ol>

            <p>✅ <strong>Success:</strong> No freezing, natural stroke</p>
            <p><strong>Key:</strong> NO delay after eyes return to ball</p>
            <p><em>Source: Andrew Cullen</em></p>
        </div>

        <div class="drill-card">
            <h4>🎥 Distance Ladder <a href="https://youtu.be/${videoMap[40]}" target="_blank">📹</a></h4>
            <p><strong>Why it works:</strong> Builds distance feel</p>

            <p><strong>Progressive Practice:</strong></p>
            <ol>
                <li>Putt to 1m, then 2m, then 3m, then 4m</li>
                <li>Then back: 4m, 3m, 2m, 1m</li>
                <li>Goal: Each putt stops within 30cm</li>
                <li>Feel the different stroke sizes</li>
            </ol>

            <p>✅ <strong>Success:</strong> Better lag putting</p>
            <p><em>Source: Universal putting practice</em></p>
        </div>
    `,

    bunker: `
        <h3>BUNKER STATION - Sand Saves</h3>
        <p><strong>Greenside bunker technique:</strong></p>

        <div class="drill-card">
            <h4>🎥 Basic Bunker Setup & Technique <a href="https://youtu.be/${videoMap[37]}" target="_blank">📹</a></h4>
            <p><strong>Why it works:</strong> Uses bounce of club properly</p>

            <p><strong>Setup (Different from normal!):</strong></p>
            <ol>
                <li><strong>Stance:</strong>
                    <ul>
                        <li>Dig feet into sand for stability</li>
                        <li>Open stance (aim left of target for righties)</li>
                        <li>Weight 60% on front foot</li>
                    </ul>
                </li>
                <li><strong>Club:</strong>
                    <ul>
                        <li>Open clubface (aim right of target)</li>
                        <li>Grip AFTER opening face</li>
                    </ul>
                </li>
                <li><strong>Ball:</strong> Forward in stance (opposite front heel)</li>
            </ol>

            <p><strong>Technique:</strong></p>
            <ol>
                <li>Aim to hit sand 2-3cm BEHIND ball</li>
                <li>Think: "Splash sand onto green"</li>
                <li>ACCELERATE through sand (don't slow down!)</li>
                <li>Full follow-through (don't quit on it)</li>
                <li>Let sand carry ball out</li>
            </ol>

            <p><strong>Distance Control:</strong></p>
            <ul>
                <li><strong>Short (5-10m):</strong> Hit 3cm behind ball</li>
                <li><strong>Medium (10-20m):</strong> Hit 2cm behind ball</li>
                <li><strong>Long (20-30m):</strong> Hit 1cm behind, longer swing</li>
            </ul>

            <p>✅ <strong>Success:</strong> Ball comes out with sand every time</p>
            <p><em>Source: Standard bunker technique</em></p>
        </div>

        <div class="drill-card">
            <h4>🎥 Line in Sand Drill <a href="https://youtu.be/${videoMap[37]}" target="_blank">📹</a></h4>
            <p><strong>Why it works:</strong> Trains consistent entry point</p>

            <p><strong>Practice Without Ball:</strong></p>
            <ol>
                <li>Draw line in sand with club</li>
                <li>Make swings trying to hit line</li>
                <li>Check: Did you hit line consistently?</li>
                <li>Too far behind = fat/no distance</li>
                <li>Too far forward = thin/bladed</li>
                <li>Once consistent, place ball 2-3cm ahead of line</li>
            </ol>

            <p>✅ <strong>Success:</strong> Consistent sand entry point</p>
            <p><em>Source: Common bunker practice</em></p>
        </div>

        <div class="drill-card">
            <h4>Buried Lie Technique</h4>
            <p><strong>When ball is plugged in sand:</strong></p>

            <ol>
                <li><strong>Setup:</strong> Square stance (not open)</li>
                <li><strong>Club:</strong> Square face (not open)</li>
                <li><strong>Swing:</strong> Steep angle down</li>
                <li><strong>Hit:</strong> Closer to ball (1cm behind)</li>
                <li><strong>Expect:</strong> No spin, ball rolls out</li>
            </ol>

            <p>✅ <strong>Success:</strong> Ball escapes bunker</p>
            <p><em>Note: Limited bunker content in current channels</em></p>
        </div>
    `,

    faults: `
        <h3>FAULT DIAGNOSIS - Quick Fixes</h3>
        <p><strong>Identify your problem, apply the cure:</strong></p>

        <div class="drill-card">
            <h4>SLICE (Ball curves hard right)</h4>
            <p><strong>Causes:</strong> Open face + outside-in path</p>

            <p><strong>Quick Check:</strong></p>
            <ul>
                <li>At waist-high backswing, is toe pointing up?</li>
                <li>If pointing back = face too open</li>
            </ul>

            <p><strong>Fix #1: Stronger Grip</strong></p>
            <ul>
                <li>See 3-4 knuckles on top hand (not 1-2)</li>
                <li>V's point to right shoulder</li>
                <li>Immediate improvement likely</li>
            </ul>

            <p><strong>Fix #2: Stop-at-Top Width</strong></p>
            <ul>
                <li>Maintain width at top of swing</li>
                <li>Pause and check</li>
                <li>Prevents over-the-top</li>
            </ul>

            <p><strong>Alternative Equipment-Free Fix:</strong></p>
            <ul>
                <li>Feel right elbow drop straight down in transition</li>
                <li>Not out toward ball</li>
            </ul>

            <p><strong>Commitment:</strong> 2 months minimum!</p>
        </div>

        <div class="drill-card">
            <h4>HOOK (Ball curves hard left)</h4>
            <p><strong>Cause:</strong> Face too closed, excessive in-to-out</p>

            <p><strong>Fix: Feel Fade Swing</strong></p>
            <ol>
                <li>Weaken grip slightly (see 2 knuckles, not 4)</li>
                <li>Feel like swinging LEFT after impact</li>
                <li>Keep face more open through zone</li>
                <li>Think: "Hold off release"</li>
            </ol>

            <p>✅ <strong>Success:</strong> Straighter or slight fade</p>
        </div>

        <div class="drill-card">
            <h4>FAT SHOTS (Hitting ground first)</h4>
            <p><strong>Causes:</strong> Weight back, low point behind ball</p>

            <p><strong>Fix #1: Forward Focus</strong></p>
            <ul>
                <li>Look at spot 3-4cm AHEAD of ball</li>
                <li>Keep weight on front foot (60%+)</li>
                <li>Feel like hitting down on ball</li>
            </ul>

            <p><strong>Fix #2: Practice on Slopes</strong></p>
            <ul>
                <li>Hit balls from uphill lie</li>
                <li>Forces weight forward</li>
                <li>Creates proper angle</li>
            </ul>

            <p>✅ <strong>Success:</strong> Ball first, then ground</p>
        </div>

        <div class="drill-card">
            <h4>THIN SHOTS (Hitting middle of ball)</h4>
            <p><strong>Cause:</strong> Rising up, trying to help ball up</p>

            <p><strong>Fix: Stay Down Feel</strong></p>
            <ol>
                <li>Feel chest stays over ball longer</li>
                <li>Keep spine angle constant</li>
                <li>Think: "Cover the ball" with chest</li>
                <li>Don't look up early</li>
            </ol>

            <p><strong>Practice Tip:</strong></p>
            <ul>
                <li>Hit 10 balls looking at ground after impact</li>
                <li>Don't watch ball flight</li>
                <li>Maintains posture</li>
            </ul>

            <p>✅ <strong>Success:</strong> Solid contact with divot</p>
        </div>

        <div class="drill-card">
            <h4>NO DISTANCE</h4>
            <p><strong>Cause:</strong> Poor speed generation, no width</p>

            <p><strong>Fix: Create Width & Speed</strong></p>
            <ol>
                <li><strong>Width:</strong> Feel wide at top (arms away from body)</li>
                <li><strong>Speed:</strong> Try faster backswing (not slower!)</li>
                <li><strong>Sequence:</strong> Let hips start downswing</li>
                <li><strong>Release:</strong> Let club release naturally</li>
            </ol>

            <p><strong>Feel Drill:</strong></p>
            <ul>
                <li>Swing with swoosh at bottom</li>
                <li>Swoosh should be AFTER ball position</li>
                <li>Not before (casting) or at top (no speed)</li>
            </ul>

            <p>✅ <strong>Success:</strong> 10-20m more distance</p>
        </div>
    `
};

// Continue with utility functions...

// ===================================
// UTILITY FUNCTIONS
// ===================================
function generateYouTubeLink(videoNumber) {
    const videoId = videoMap[videoNumber];
    if (videoId) {
        return `<a href="https://youtu.be/${videoId}" class="video-link" target="_blank" rel="noopener noreferrer">Video ${videoNumber}</a>`;
    }
    return `Video ${videoNumber}`;
}

function addYouTubeLinks(content) {
    // This function can be simplified since we're adding direct links to drills now
    return content;
}

// ===================================
// ON-COURSE PAGE LOGIC
// ===================================
if (document.querySelector('.club-button')) {
    const clubButtons = document.querySelectorAll('.club-button');
    const clubContentArea = document.querySelector('.club-content');

    // Load lexicon and initial message (no club pre-selected)
    clubContentArea.innerHTML = golfLexicon + `
        <div class="info-message" style="background: #e3f2fd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p><strong>👆 Select a club above for quick reference</strong></p>
            <p>Each section includes:</p>
            <ul>
                <li>Complete setup (grip, stance, ball position)</li>
                <li>ONE swing thought to use</li>
                <li>Quick checks for success</li>
            </ul>
            <p><em>💡 Tip: Pick ONE thought per round and stick with it!</em></p>
        </div>`;

    clubButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            clubButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Load club content
            const club = button.dataset.club;
            if (club === 'terms') {
                // Show Golf Terms Explained
                clubContentArea.innerHTML = golfLexicon + `
                    <div class="info-message" style="background: #e3f2fd; padding: 20px; margin: 20px 0; border-radius: 8px;">
                        <p><strong>👆 Select a club above for quick reference</strong></p>
                        <p>This standardized system ensures consistency across all clubs while allowing for your personal adaptations.</p>
                    </div>`;
            } else if (clubContent[club]) {
                clubContentArea.innerHTML = clubContent[club];
            }
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

            // Update title and load content
            stationTitle.textContent = stationName + ' Station';
            let content = stationContent[station] || '<p>Content coming soon...</p>';

            stationDrills.innerHTML = content;

            // Show station content
            stationSelector.classList.add('hidden');
            stationContentSection.classList.remove('hidden');
        });
    });
}

// ===================================
// IMAGE TOGGLE FUNCTIONALITY
// ===================================
document.addEventListener('click', function(e) {
    // Check if clicked element is image toggle button
    if (e.target.classList.contains('image-toggle')) {
        const imageId = 'img-' + e.target.dataset.image;
        const imageDiv = document.getElementById(imageId);

        if (imageDiv) {
            // Toggle visibility
            imageDiv.classList.toggle('visible');

            // Update button text/icon
            if (imageDiv.classList.contains('visible')) {
                e.target.textContent = '✕ Hide';
                e.target.style.background = '#f44336';
            } else {
                e.target.textContent = '📷';
                e.target.style.background = '#4caf50';
            }
        }
    }
});