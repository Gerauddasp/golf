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
        <h2>📖 Golf Terms Explained</h2>

        <h3>Key Measurements:</h3>
        <ul>
            <li><strong>Attack Angle:</strong> The angle at which your club approaches the ball
                <ul>
                    <li>Positive (+3°) = hitting UP on ball (driver)</li>
                    <li>Zero (0°) = sweeping level with ground (fairway woods)</li>
                    <li>Negative (-3°) = hitting DOWN on ball (irons)</li>
                    <li><em>Check: Look at your divot - before ball = descending, after = correct for irons, no divot = good for woods</em></li>
                </ul>
            </li>
            <li><strong>Shaft Lean:</strong> How much the handle leans toward target at impact
                <ul>
                    <li>0° = shaft vertical (driver)</li>
                    <li>20cm forward = handle ahead by hand's width (irons)</li>
                    <li><em>Check: Video from side, pause at impact</em></li>
                </ul>
            </li>
        </ul>

        <h3>Position References:</h3>
        <ul>
            <li><strong>"Inside lead heel":</strong> 5-8cm inside your front heel</li>
            <li><strong>"Center":</strong> Directly between your feet</li>
            <li><strong>"Forward of center":</strong> 5-10cm toward front foot from center</li>
        </ul>

        <h3>Foot Angles (imagine clock on ground):</h3>
        <ul>
            <li><strong>0°:</strong> Pointing at target (12 o'clock)</li>
            <li><strong>90°:</strong> Perpendicular to target (3 o'clock for right foot)</li>
            <li><strong>25° open:</strong> Slightly toward target (1 o'clock for left foot)</li>
        </ul>
    </div>
`;

// ===================================
// CLUB REFERENCE CONTENT (UPDATED WITH EXPLANATIONS)
// ===================================
const clubContent = {
    driver: `
        <h2>🚗 DRIVER</h2>
        <p><strong>Goal:</strong> Maximum distance with controlled curve</p>

        <h3>Setup Fundamentals:</h3>
        <ul>
            <li><strong>Ball Position:</strong> Inside lead heel (5-8cm inside front heel)
                <br><em>Why: Promotes hitting UP on ball for optimal launch</em></li>
            <li><strong>Weight Distribution:</strong> 55-60% on back foot
                <br><em>Why: Creates spine tilt away from target</em></li>
            <li><strong>Feet Position:</strong>
                <ul>
                    <li>Back foot: 90° to target (pointing sideways like 3 o'clock)</li>
                    <li>Front foot: Open 25° (turned slightly toward target like 1 o'clock)</li>
                </ul>
                <em>Why: Back foot perpendicular = stable base, front foot open = allows hip rotation</em>
            </li>
            <li><strong>Spine Tilt:</strong> Upper body leans slightly away from target
                <br><em>Check: Right shoulder lower than left (for righties)</em></li>
        </ul>

        <h3>Key Swing Dynamics:</h3>
        <ul>
            <li><strong>Maintain Width:</strong> Arms stay extended at top (like holding beach ball)
                <br><em>Check: Space visible between arms and chest at top = good</em></li>
            <li><strong>Hips Initiate:</strong> Lower body starts downswing, not hands
                <br><em>Feel: Like throwing a ball - hips lead, arm follows</em></li>
            <li><strong>Attack Angle:</strong> +3-5° (hitting UP on ball)
                <br><em>Check: High launch, no divot = correct</em></li>
            <li><strong>Shaft Lean:</strong> 0-2° only (nearly vertical)
                <br><em>NOT like irons! Shaft should be straight up at impact</em></li>
        </ul>

        <h3>Primary Drill: Stop-at-Top Width</h3>
        <ol>
            <li>Take normal backswing</li>
            <li>PAUSE at top for 2 seconds</li>
            <li>Check: Arms wide? Space between arms and chest?</li>
            <li>If arms collapsed = slice coming</li>
            <li>Complete swing maintaining width</li>
        </ol>
        <p><strong>Practice:</strong> 80% of drives for 2 months (commitment required!)</p>
        <p><em>Source: Me and My Golf research</em></p>

        <h3>Quick Checks:</h3>
        <ul>
            <li>✅ No divot (hitting up)</li>
            <li>✅ Weight 90% front foot at finish</li>
            <li>✅ Back foot up on toe</li>
            <li>✅ Can hold finish for 3 seconds</li>
        </ul>
    `,

    woods: `
        <h2>🌲 FAIRWAY WOODS</h2>
        <p><strong>Goal:</strong> Consistent contact from fairway or tee</p>

        <h3>Setup Fundamentals:</h3>
        <ul>
            <li><strong>Ball Position:</strong> Just inside lead heel (2-5cm inside)
                <br><em>Why: Slightly back from driver promotes level strike</em></li>
            <li><strong>Weight Distribution:</strong> 50-50 balanced
                <br><em>Check: Push test - stable in all directions</em></li>
            <li><strong>Mindset:</strong> "Sweep, don't dig"</li>
        </ul>

        <h3>Key Swing Dynamics:</h3>
        <ul>
            <li><strong>Attack Angle:</strong> 0° (perfectly level)
                <ul>
                    <li>NOT +3° like driver (would top it)</li>
                    <li>NOT -3° like irons (would dig)</li>
                </ul>
                <em>Feel: Brushing grass without taking divot</em>
            </li>
            <li><strong>"Tickle the Grass":</strong> Club barely touches ground
                <br><em>Visual: Like sweeping dust off table without scratching</em></li>
            <li><strong>Tempo:</strong> Don't rush transition (longer shaft needs time)</li>
        </ul>

        <h3>Primary Drill: Tee Clipping</h3>
        <ol>
            <li>Place tee upside down, flush with ground</li>
            <li>Try to sweep tee off ground WITHOUT breaking it</li>
            <li>Broken tee = too steep (hitting down)</li>
            <li>Missed tee = too shallow (hitting up)</li>
            <li>Clean sweep = perfect 0° attack angle</li>
        </ol>
        <p><em>Source: Athletic Motion Golf data</em></p>

        <h3>Quick Checks:</h3>
        <ul>
            <li>✅ Ball-sized mark on grass (no deep divot)</li>
            <li>✅ Ball flight medium height</li>
            <li>✅ Consistent contact from deck</li>
        </ul>
    `,

    hybrids: `
        <h2>🔷 HYBRIDS</h2>
        <p><strong>Goal:</strong> Versatile club bridging woods and irons</p>

        <h3>Setup Fundamentals:</h3>
        <ul>
            <li><strong>Ball Position:</strong> Just forward of center (5cm ahead)
                <br><em>Why: Allows slight descending blow like iron</em></li>
            <li><strong>Approach:</strong> Think "iron swing with wood forgiveness"</li>
        </ul>

        <h3>Key Swing Dynamics:</h3>
        <ul>
            <li><strong>Attack Angle:</strong> 0 to -2° (between woods and irons)
                <br><em>Slightly descending acceptable, unlike fairway woods</em></li>
            <li><strong>Trust the Design:</strong> Club's sole prevents digging</li>
            <li><strong>Feel:</strong> Like a long iron but with sweep intent</li>
        </ul>

        <h3>When to Use:</h3>
        <ul>
            <li>Long approach shots (180-220 yards)</li>
            <li>Tight lies where fairway wood might top</li>
            <li>Out of light rough</li>
        </ul>

        <p><em>Note: Limited instruction available - true blend technique</em></p>
    `,

    irons: `
        <h2>⚙️ IRONS</h2>
        <p><strong>Goal:</strong> Consistent ball-first contact</p>

        <h3>Setup Fundamentals:</h3>
        <ul>
            <li><strong>Ball Position:</strong> Center to slightly forward
                <ul>
                    <li>Long irons (5-6): 5cm forward</li>
                    <li>Mid irons (7-8): Center</li>
                    <li>Short irons (9-PW): Center</li>
                </ul>
            </li>
            <li><strong>Weight Through LACES:</strong> Pressure on middle of feet
                <br><em>Check: Can wiggle toes = good, can't = too much on toes</em></li>
            <li><strong>Eyes:</strong> Look 3-4cm ahead of ball (toward target)
                <br><em>Why: Where you look influences low point</em></li>
        </ul>

        <h3>Key Swing Dynamics:</h3>
        <ul>
            <li><strong>Connected Takeaway:</strong> Arms stay close initially
                <br><em>Check: Towel under arms shouldn't fall first 30cm</em></li>
            <li><strong>Lead Shoulder Forward:</strong> 5-6cm ahead at impact vs setup
                <br><em>Why: Creates proper descending blow</em></li>
            <li><strong>Shaft Lean:</strong> ~20cm forward (hand's width)
                <br><em>Result: Ball then ground contact</em></li>
        </ul>

        <h3>Primary Drill: Set to Point</h3>
        <ol>
            <li>SHORT backswing (waist height)</li>
            <li>SQUEEZE elbows together through impact</li>
            <li>SHORT follow-through (waist height)</li>
            <li>Feel: Arms extending while elbows stay close</li>
        </ol>
        <p><strong>Why it works:</strong> Prevents chicken wing causing fat/thin</p>
        <p><em>Source: Me and My Golf</em></p>

        <h3>Quick Checks:</h3>
        <ul>
            <li>✅ Divot starts AT ball position</li>
            <li>✅ Crisp "click" sound at impact</li>
            <li>✅ Ball flight penetrating</li>
            <li>✅ Consistent distance</li>
        </ul>
    `,

    wedges: `
        <h2>🔪 WEDGES - Full Swing</h2>
        <p><strong>Goal:</strong> Precise distance control</p>

        <h3>Setup Fundamentals:</h3>
        <ul>
            <li><strong>Same as Irons</strong> but:</li>
            <li><strong>Choke Down:</strong> 2-3cm for control
                <br><em>Why: Better feel and consistency</em></li>
            <li><strong>Narrower Stance:</strong> Feet closer together
                <br><em>Why: Less power needed, more control</em></li>
        </ul>

        <h3>Distance Control System:</h3>
        <ul>
            <li><strong>5-Yard Increments:</strong> Know exact distances
                <ul>
                    <li>Full swing: 100 yards</li>
                    <li>10:30 swing: 90 yards</li>
                    <li>9:00 swing: 75 yards</li>
                </ul>
                <em>Practice: Hit 10 balls at each length, measure average</em>
            </li>
        </ul>

        <h3>Key Principle:</h3>
        <p><strong>"Less loft = more consistency"</strong></p>
        <ul>
            <li>Use PW from 110 vs forced SW</li>
            <li>Controlled swing > max effort</li>
        </ul>

        <p><em>Source: Russell Henley via Me and My Golf</em></p>
    `,

    chipping: `
        <h2>🎯 CHIPPING & PITCHING</h2>
        <p><strong>Goal:</strong> Get up and down consistently</p>

        <h3>Critical Setup:</h3>
        <ul>
            <li><strong>SAME POSTURE as full swing!</strong>
                <br><em>Common error: Standing too upright</em>
                <br><em>Check: Fingertips reach kneecaps when arms hang</em></li>
        </ul>

        <h3>Three Shot Types:</h3>

        <h4>1. CHIP (Low Runner):</h4>
        <ul>
            <li><strong>Setup:</strong> Ball back, weight forward</li>
            <li><strong>Technique:</strong> ONE moving part - chest rotation only</li>
            <li><strong>Feel:</strong> Arms stuck to sides</li>
            <li><strong>Distance:</strong> Size of turn controls distance</li>
        </ul>

        <h4>2. PITCH (Higher/Softer):</h4>
        <ul>
            <li><strong>Setup:</strong> Ball center, face slightly open</li>
            <li><strong>Technique:</strong> Toe rotates up in backswing</li>
            <li><strong>Feel:</strong> More wrist hinge allowed</li>
        </ul>

        <h4>3. FLOP (Highest):</h4>
        <ul>
            <li><strong>Secret:</strong> LONG and SLOW tempo (not just open face!)</li>
            <li><strong>Feel:</strong> Swing in slow motion</li>
            <li><strong>Let club slide under ball</strong></li>
        </ul>

        <h3>Primary Drill: Chest Rotation Only</h3>
        <ol>
            <li>Normal posture (not upright!)</li>
            <li>Arms feel glued to chest</li>
            <li>ONLY chest rotates</li>
            <li>Small turn = short shot</li>
            <li>Big turn = longer shot</li>
        </ol>
        <p><em>Source: Andrew Cullen simplification</em></p>
    `,

    putter: `
        <h2>🎯 PUTTING</h2>
        <p><strong>Goal:</strong> Make everything inside 10 feet, good pace outside</p>

        <h3>Setup Fundamentals:</h3>
        <ul>
            <li><strong>Ball Position:</strong> Under left eye
                <br><em>Check: Drop ball from eye, should hit ball</em></li>
            <li><strong>Face Square:</strong> 85% of direction!
                <br><em>Path only 15% - face matters most</em></li>
        </ul>

        <h3>Execution Keys:</h3>
        <ul>
            <li><strong>Eye Trigger:</strong> Hole → Ball → GO (no pause!)
                <br><em>Why: Eliminates freezing/overthinking</em></li>
            <li><strong>Always Try to Hole It:</strong> Even from 40 feet
                <br><em>Never "lag" mentality</em></li>
        </ul>

        <h3>Special Situations:</h3>
        <ul>
            <li><strong>Downhill:</strong> Hit with toe of putter (reduces speed)</li>
            <li><strong>Uphill:</strong> Firm, accelerate through</li>
            <li><strong>Breaking:</strong> Pick spot on edge, roll over it</li>
        </ul>

        <h3>Primary Drill: Around the Clock</h3>
        <ol>
            <li>4 balls at 3 feet (12, 3, 6, 9 o'clock)</li>
            <li>Must make all 4 = 1 round</li>
            <li>Do 5 rounds (20 putts)</li>
            <li>Goal: 17/20 or better</li>
        </ol>
        <p><em>Source: Andrew Cullen's #1 drill</em></p>
    `
};

// ===================================
// WARM-UP CONTENT (ENHANCED WITH OPTIONS)
// ===================================
const warmupContent = `
    <h2>⏱️ WARM-UP OPTIONS</h2>
    <p><strong>Choose based on your session type:</strong></p>

    <div class="warmup-option">
        <h3>📍 STANDARD (10 minutes)</h3>
        <p><em>For: Regular practice or casual round</em></p>

        <h4>Phase 1: Activation (5 min)</h4>
        <ul>
            <li>Arm circles: 10 forward, 10 back</li>
            <li>Trunk twists: 10 each direction</li>
            <li>Leg swings: 10 each leg</li>
            <li>Shoulder rolls: 10 forward, 10 back</li>
        </ul>

        <h4>Phase 2: Fundamentals (3 min)</h4>
        <ul>
            <li>Grip check: Natural position, 3/10 pressure</li>
            <li>Posture check: Fingertips to kneecaps test</li>
            <li>Weight check: Pressure through laces</li>
        </ul>

        <h4>Phase 3: Swing Building (2 min)</h4>
        <ul>
            <li>30% swings × 5</li>
            <li>50% swings × 5</li>
            <li>70% swings × 5</li>
            <li>Full swings × 5</li>
        </ul>
    </div>

    <div class="warmup-option">
        <h3>💪 EXTENDED FOR SPEED (15-18 min)</h3>
        <p><em>For: When working on driver distance</em></p>

        <h4>Phase 1: Dynamic Stretching (5 min)</h4>
        <ul>
            <li>Full body activation</li>
            <li>Hip circles and leg swings</li>
            <li>Arm windmills</li>
            <li>Torso rotations with club</li>
        </ul>

        <h4>Phase 2: Mobility Work (5 min)</h4>
        <ul>
            <li>Hip flexor stretches</li>
            <li>Thoracic spine rotations</li>
            <li>Shoulder dislocations with club</li>
            <li>Wrist circles</li>
        </ul>

        <h4>Phase 3: Progressive Speed (5-8 min)</h4>
        <ul>
            <li>Slow motion swings × 5</li>
            <li>50% speed × 5</li>
            <li>75% speed × 5</li>
            <li>90% speed × 5</li>
            <li>Max effort × 3 (with full recovery)</li>
        </ul>
        <p><em>Source: Me and My Golf speed training</em></p>
    </div>

    <div class="warmup-option">
        <h3>⛳ PRE-ROUND (15 min)</h3>
        <p><em>For: Before competition (no changes, just activation)</em></p>

        <h4>Phase 1: Physical Activation (5 min)</h4>
        <ul>
            <li>Light stretching only</li>
            <li>Get body warm</li>
            <li>NO technical thoughts</li>
        </ul>

        <h4>Phase 2: Setup Verification (5 min)</h4>
        <ul>
            <li>Check grip (don't change)</li>
            <li>Verify stance width</li>
            <li>Confirm ball positions</li>
        </ul>

        <h4>Phase 3: Tempo Work (5 min)</h4>
        <ul>
            <li>Smooth swings only</li>
            <li>Find YOUR rhythm</li>
            <li>No mechanical work</li>
            <li>Build confidence</li>
        </ul>
        <p><em>Source: Athletic Motion Golf</em></p>
    </div>
`;

// ===================================
// STATION/DRILL CONTENT (UPDATED)
// ===================================
const stationContent = {
    driver: `
        <h3>DRIVER STATION - Distance & Accuracy</h3>
        <p><strong>Choose drills based on your main issue:</strong></p>

        <div class="drill-card">
            <h4>For SLICE: Stop-at-Top Width Drill</h4>
            <p><strong>Why it works:</strong> Prevents over-the-top move causing slice</p>
            <ol>
                <li>Take normal backswing with driver</li>
                <li>PAUSE at top for 2 full seconds</li>
                <li>Check: Can you see space between arms and chest?</li>
                <li>If arms collapsed close to body = slice incoming</li>
                <li>Complete swing maintaining that width</li>
                <li>Hit 10 balls with this pause</li>
            </ol>
            <p>✅ <strong>Success:</strong> Ball starts straight or slightly right (for righties)</p>
            <p><strong>Commitment:</strong> 80% of drives for 2 months!</p>
            <p><em>Source: Me and My Golf - proven to fix slice</em></p>
        </div>

        <div class="drill-card">
            <h4>For BLOCKS/OPEN FACE: Nuclear Bag Drill</h4>
            <p><strong>Why it works:</strong> Teaches aggressive face closure</p>
            <ol>
                <li>Place impact bag just outside ball position</li>
                <li>At waist height, club face should be CLOSED (toe down)</li>
                <li>Hit bag with TOE of club first (not heel)</li>
                <li>Really exaggerate the toe rotation</li>
                <li>Will feel very closed initially (that's good!)</li>
            </ol>
            <p>✅ <strong>Success:</strong> Hooks at first, then straightens</p>
            <p><em>Source: Me and My Golf</em></p>
        </div>

        <div class="drill-card">
            <h4>For SEQUENCE: Belt Grab Drill</h4>
            <p><strong>Why it works:</strong> Makes hips-first sequence obvious</p>
            <ol>
                <li>Left hand grabs belt at hip</li>
                <li>Make backswing with right hand only on club</li>
                <li>From top, feel hip PULL back first</li>
                <li>Then arms follow naturally</li>
                <li>Do 20 practice swings this way</li>
            </ol>
            <p>✅ <strong>Success:</strong> Natural power, no forced moves</p>
            <p><em>Source: Ben Hogan fundamentals</em></p>
        </div>

        <div class="drill-card">
            <h4>For POWER: Rib Stretch Drill</h4>
            <p><strong>Why it works:</strong> Creates proper rotation and space</p>
            <ol>
                <li>Pick a specific rib on RIGHT side</li>
                <li>On backswing, stretch that rib FAR from ball</li>
                <li>Feel the stretch/separation</li>
                <li>Creates natural rotation</li>
                <li>Hit 10 balls focusing only on this</li>
            </ol>
            <p>✅ <strong>Success:</strong> Increased rotation, more speed</p>
            <p><em>Source: Andrew Cullen</em></p>
        </div>
    `,

    irons: `
        <h3>IRON STATION - Pure Ball Striking</h3>
        <p><strong>Progressive drills for crisp contact:</strong></p>

        <div class="drill-card">
            <h4>For FAT/THIN: Set to Point Drill</h4>
            <p><strong>Why it works:</strong> Forces proper arm extension</p>
            <ol>
                <li>Use 7-iron with tee (confidence)</li>
                <li>SHORT backswing (waist height only)</li>
                <li>Through impact: SQUEEZE ELBOWS together hard</li>
                <li>SHORT follow-through (waist height)</li>
                <li>Feel arms extending while elbows close</li>
                <li>10 shots with tee, then 10 from ground</li>
            </ol>
            <p>✅ <strong>Success:</strong> Ball-then-ground contact every time</p>
            <p><strong>Why this fixes fat shots:</strong> Prevents chicken wing</p>
            <p><em>Source: Me and My Golf - instant improvement</em></p>
        </div>

        <div class="drill-card">
            <h4>For CONSISTENCY: Connected Takeaway</h4>
            <p><strong>Why it works:</strong> Eliminates compensation moves</p>
            <ol>
                <li>Place towel under both armpits</li>
                <li>Make practice swings</li>
                <li>Towel shouldn't fall in first 30cm</li>
                <li>Arms stay connected to body</li>
                <li>Hit 10 balls maintaining connection</li>
            </ol>
            <p>✅ <strong>Success:</strong> No heel/toe misses</p>
            <p><em>Source: Me and My Golf</em></p>
        </div>

        <div class="drill-card">
            <h4>For BALANCE: Weight Through Laces</h4>
            <p><strong>Why it works:</strong> Proper weight = stable strike</p>
            <ol>
                <li>Place alignment stick under middle of feet</li>
                <li>Rock forward (toes) - feel unstable</li>
                <li>Rock back (heels) - feel restricted</li>
                <li>Find middle (laces) - feel athletic</li>
                <li>Hit 10 balls maintaining laces pressure</li>
            </ol>
            <p>✅ <strong>Success:</strong> Solid contact, good balance</p>
            <p><em>Source: Me and My Golf</em></p>
        </div>

        <div class="drill-card">
            <h4>For LOW POINT: Eyes Ahead Drill</h4>
            <p><strong>Why it works:</strong> Vision influences strike location</p>
            <ol>
                <li>Look at spot 3-4cm AHEAD of ball</li>
                <li>Keep eyes there through swing</li>
                <li>"Collect" ball on way through</li>
                <li>Don't look at ball directly</li>
                <li>Hit 10 balls this way</li>
            </ol>
            <p>✅ <strong>Success:</strong> Divot starts at ball</p>
            <p><em>Source: Andrew Cullen</em></p>
        </div>
    `,

    woods: `
        <h3>FAIRWAY WOODS STATION - Sweep Perfection</h3>
        <p><strong>Master the sweep for consistent contact:</strong></p>

        <div class="drill-card">
            <h4>Primary: Tee Clipping Drill</h4>
            <p><strong>Why it works:</strong> Perfect feedback for attack angle</p>
            <ol>
                <li>Place tee upside down, flush with ground</li>
                <li>Goal: Sweep tee cleanly without breaking</li>
                <li>Start with 10 tee-only swings</li>
                <li>Broken tee = too steep (hitting down like iron)</li>
                <li>Missed tee = too shallow (hitting up like driver)</li>
                <li>Clean sweep = perfect 0° attack angle</li>
                <li>Add ball once you can clip 7/10 tees clean</li>
            </ol>
            <p>✅ <strong>Success:</strong> Tee flies forward intact</p>
            <p><strong>Feel:</strong> "Barely tickle the grass"</p>
            <p><em>Source: Athletic Motion Golf - PGA Tour average</em></p>
        </div>

        <div class="drill-card">
            <h4>For TEMPO: Don't Rush Transition</h4>
            <p><strong>Why it works:</strong> Longer shaft needs time</p>
            <ol>
                <li>Count "1" on backswing</li>
                <li>Slight pause "and"</li>
                <li>Count "2" on downswing</li>
                <li>Smooth acceleration, not violent</li>
                <li>Hit 10 balls with this count</li>
            </ol>
            <p>✅ <strong>Success:</strong> Solid contact, good trajectory</p>
            <p><em>Multiple instructors emphasize this</em></p>
        </div>

        <div class="drill-card">
            <h4>For HEIGHT: Trust the Loft</h4>
            <p><strong>Why it works:</strong> Stops helping ball up</p>
            <ol>
                <li>Tee ball very low (5mm)</li>
                <li>Focus on sweeping ground</li>
                <li>Let club's loft create height</li>
                <li>No body lean back</li>
                <li>Stay level through impact</li>
            </ol>
            <p>✅ <strong>Success:</strong> Ball launches naturally</p>
        </div>
    `,

    wedges: `
        <h3>WEDGE STATION - Distance Control</h3>
        <p><strong>Calibrate your distances precisely:</strong></p>

        <div class="drill-card">
            <h4>5-Yard Increment System</h4>
            <p><strong>Why it works:</strong> Exact distance knowledge</p>
            <ol>
                <li>Start with your 56° or gap wedge</li>
                <li>Hit 10 balls at each swing length:</li>
                <li>• 7:30 backswing (¼ swing)</li>
                <li>• 9:00 backswing (½ swing)</li>
                <li>• 10:30 backswing (¾ swing)</li>
                <li>• Full swing</li>
                <li>Measure average distance for each</li>
                <li>Write down your numbers!</li>
            </ol>
            <p>✅ <strong>Success:</strong> Know exact carry distances</p>
            <p><strong>Example:</strong> 7:30 = 50y, 9:00 = 65y, 10:30 = 80y, Full = 95y</p>
            <p><em>Source: Russell Henley via Me and My Golf</em></p>
        </div>

        <div class="drill-card">
            <h4>Less Loft Principle</h4>
            <p><strong>Why it works:</strong> Lower trajectory = more consistent</p>
            <ol>
                <li>From 100 yards, compare:</li>
                <li>• Full 56° wedge</li>
                <li>• ¾ pitching wedge</li>
                <li>• ½ 9-iron</li>
                <li>Hit 5 balls with each</li>
                <li>Note which is most consistent</li>
            </ol>
            <p>✅ <strong>Success:</strong> Tighter dispersion with less loft</p>
            <p><strong>Rule:</strong> Always use least loft possible</p>
        </div>

        <div class="drill-card">
            <h4>Choke Down Consistency</h4>
            <p><strong>Why it works:</strong> Better control, consistent strike</p>
            <ol>
                <li>Choke down 2-3cm on ALL wedges</li>
                <li>This reduces distance by 5-10 yards</li>
                <li>But increases consistency dramatically</li>
                <li>Practice all wedges choked down</li>
            </ol>
            <p>✅ <strong>Success:</strong> Tighter groupings</p>
        </div>
    `,

    chipping: `
        <h3>CHIPPING STATION - Short Game Mastery</h3>
        <p><strong>Three techniques for every situation:</strong></p>

        <div class="drill-card">
            <h4>CHIP: One Moving Part Drill</h4>
            <p><strong>Why it works:</strong> Simplifies to single move</p>
            <ol>
                <li>CRITICAL: Same posture as full swing!</li>
                <li>Place towel under both arms</li>
                <li>Make chip swings - towel stays put</li>
                <li>ONLY chest rotates</li>
                <li>Arms are passengers</li>
                <li>Small turn = short chip</li>
                <li>Big turn = longer chip</li>
            </ol>
            <p>✅ <strong>Success:</strong> Consistent contact, predictable roll</p>
            <p><strong>Common Error:</strong> Standing too upright - stay athletic!</p>
            <p><em>Source: Andrew Cullen simplification</em></p>
        </div>

        <div class="drill-card">
            <h4>PITCH: Toe-Up Technique</h4>
            <p><strong>Why it works:</strong> Creates height and spin</p>
            <ol>
                <li>Ball position center or slightly forward</li>
                <li>Open face slightly at address</li>
                <li>On backswing: toe points UP (not straight back)</li>
                <li>Allow natural wrist hinge</li>
                <li>Rotate through impact</li>
                <li>Higher flight, softer landing</li>
            </ol>
            <p>✅ <strong>Success:</strong> Ball lands soft, minimal roll</p>
            <p><em>Source: Athletic Motion Golf</em></p>
        </div>

        <div class="drill-card">
            <h4>FLOP: Long & Slow Secret</h4>
            <p><strong>Why it works:</strong> Tempo matters more than face angle!</p>
            <ol>
                <li>Open face (but that's secondary)</li>
                <li>LONG backswing (bigger than expected)</li>
                <li>SLOW tempo throughout (key!)</li>
                <li>Feel like slow motion swing</li>
                <li>Let club slide under ball</li>
                <li>Trust the technique</li>
            </ol>
            <p>✅ <strong>Success:</strong> Super high, lands dead</p>
            <p><strong>The Secret:</strong> It's the tempo, not the face!</p>
            <p><em>Source: Athletic Motion Golf discovery</em></p>
        </div>

        <div class="drill-card">
            <h4>Distance Control: Turn Size</h4>
            <p><strong>Why it works:</strong> Body controls distance, not hands</p>
            <ol>
                <li>Set up 3 targets: 5, 10, 15 yards</li>
                <li>Use SAME technique (chest rotation)</li>
                <li>5 yards = tiny turn</li>
                <li>10 yards = medium turn</li>
                <li>15 yards = bigger turn</li>
                <li>Arms stay passive throughout</li>
            </ol>
            <p>✅ <strong>Success:</strong> Consistent distance with each turn size</p>
        </div>
    `,

    putting: `
        <h3>PUTTING STATION - Make Everything</h3>
        <p><strong>Build confidence from 3 feet out:</strong></p>

        <div class="drill-card">
            <h4>#1 DRILL: Around the Clock</h4>
            <p><strong>Why it works:</strong> Practices all breaks under pressure</p>
            <ol>
                <li>Place 4 balls around hole at 3 feet</li>
                <li>Positions: 12, 3, 6, 9 o'clock</li>
                <li>Must make all 4 in a row = 1 round</li>
                <li>If you miss, start over!</li>
                <li>Complete 5 rounds (20 putts total)</li>
                <li>Goal: Make 17/20 or better</li>
            </ol>
            <p>✅ <strong>Success:</strong> 85%+ from 3 feet</p>
            <p><strong>Andrew says:</strong> "This drill changes handicaps!"</p>
            <p><em>Source: Andrew Cullen's #1 putting drill</em></p>
        </div>

        <div class="drill-card">
            <h4>Eye Trigger Practice</h4>
            <p><strong>Why it works:</strong> Eliminates freezing over ball</p>
            <ol>
                <li>Set up to 5-foot putt</li>
                <li>Look at hole</li>
                <li>Look at ball</li>
                <li>Stroke IMMEDIATELY (no pause!)</li>
                <li>The sequence: Hole→Ball→GO</li>
                <li>Practice 10 putts this way</li>
            </ol>
            <p>✅ <strong>Success:</strong> No freezing, natural stroke</p>
            <p><strong>Key:</strong> NO delay after eyes return to ball</p>
            <p><em>Source: Andrew Cullen</em></p>
        </div>

        <div class="drill-card">
            <h4>Downhill Speed Control</h4>
            <p><strong>Why it works:</strong> Toe strike reduces speed</p>
            <ol>
                <li>Find downhill putt on practice green</li>
                <li>Hit 5 putts from sweet spot (normal)</li>
                <li>Hit 5 putts from TOE of putter</li>
                <li>Notice speed difference</li>
                <li>Also: Look at FRONT of ball</li>
            </ol>
            <p>✅ <strong>Success:</strong> Better pace on fast putts</p>
            <p><em>Source: Andrew Cullen special technique</em></p>
        </div>

        <div class="drill-card">
            <h4>Always Hole It Mentality</h4>
            <p><strong>Why it works:</strong> Aggressive = better pace (paradox)</p>
            <ol>
                <li>Even from 40+ feet</li>
                <li>NEVER think "just lag it"</li>
                <li>Always visualize ball going IN</li>
                <li>Try to make everything</li>
                <li>Watch how pace improves</li>
            </ol>
            <p>✅ <strong>Success:</strong> Fewer 3-putts, more makes</p>
            <p><strong>Philosophy:</strong> Trying to hole it improves distance control</p>
        </div>
    `,

    bunker: `
        <h3>BUNKER STATION - Sand Saves</h3>
        <p><strong>Basic bunker technique:</strong></p>

        <div class="drill-card">
            <h4>Greenside Bunker Basics</h4>
            <p><strong>Setup:</strong></p>
            <ul>
                <li>Open stance (feet aim left of target for righties)</li>
                <li>Open club face (aim right of target)</li>
                <li>Ball forward in stance</li>
                <li>Dig feet into sand for stability</li>
            </ul>

            <p><strong>Technique:</strong></p>
            <ol>
                <li>Aim to hit sand 2-3cm behind ball</li>
                <li>Keep club face open through impact</li>
                <li>Accelerate through sand (don't decelerate)</li>
                <li>Follow through completely</li>
            </ol>

            <p><strong>Feel:</strong> "Splash" the sand onto green</p>
            <p>✅ <strong>Success:</strong> Ball comes out with sand</p>
        </div>

        <div class="drill-card">
            <h4>Distance Control</h4>
            <ul>
                <li><strong>Short (5-10 yards):</strong> Hit 3cm behind ball</li>
                <li><strong>Medium (10-20 yards):</strong> Hit 2cm behind ball</li>
                <li><strong>Long (20-30 yards):</strong> Hit 1cm behind ball</li>
            </ul>
            <p><strong>Or:</strong> Vary swing length, keep sand entry consistent</p>
        </div>

        <p><em>Note: Limited bunker content in current channels - basic technique shown</em></p>
    `,

    faults: `
        <h3>FAULT DIAGNOSIS - Quick Fixes</h3>
        <p><strong>Identify your problem, apply the cure:</strong></p>

        <div class="drill-card">
            <h4>SLICE (Ball curves hard right)</h4>
            <p><strong>Causes:</strong> Open face + outside-in path</p>
            <p><strong>Quick Check:</strong> At waist-high backswing, is toe pointing up?</p>

            <p><strong>Fix #1: Strengthen Grip</strong></p>
            <ul>
                <li>See 3-4 knuckles on top hand (not 1-2)</li>
                <li>V's point to right shoulder</li>
            </ul>

            <p><strong>Fix #2: Stop-at-Top Width</strong></p>
            <ul>
                <li>Maintain arm width at top</li>
                <li>Prevents over-the-top move</li>
            </ul>

            <p><strong>Fix #3: Nuclear Bag Drill</strong></p>
            <ul>
                <li>Close face aggressively</li>
                <li>Hit with toe of club</li>
            </ul>

            <p><strong>Commitment:</strong> 2 months minimum!</p>
        </div>

        <div class="drill-card">
            <h4>HOOK (Ball curves hard left)</h4>
            <p><strong>Cause:</strong> Face too closed, in-to-out extreme</p>

            <p><strong>Fix: Lower Rotational Finish</strong></p>
            <ol>
                <li>Hands finish BELOW shoulders</li>
                <li>Club wraps around body</li>
                <li>Not high and extended</li>
                <li>Prevents hand flip</li>
            </ol>
            <p>✅ <strong>Success:</strong> Straighter ball flight</p>
        </div>

        <div class="drill-card">
            <h4>FAT SHOTS (Hitting ground first)</h4>
            <p><strong>Causes:</strong> Weight back, arms disconnecting</p>
            <p><strong>Check:</strong> Falling backward after swing?</p>

            <p><strong>Fix #1: Set to Point Drill</strong></p>
            <ul>
                <li>Squeeze elbows through impact</li>
                <li>Short backswing and follow-through</li>
            </ul>

            <p><strong>Fix #2: Weight Forward</strong></p>
            <ul>
                <li>55% weight on front foot at address (irons)</li>
                <li>80% at impact</li>
            </ul>

            <p><strong>Fix #3: Eyes Ahead</strong></p>
            <ul>
                <li>Look 3-4cm ahead of ball</li>
                <li>Moves low point forward</li>
            </ul>
        </div>

        <div class="drill-card">
            <h4>THIN SHOTS (Hitting middle of ball)</h4>
            <p><strong>Cause:</strong> Standing up, no weight transfer</p>
            <p><strong>Check:</strong> Video shows head rising?</p>

            <p><strong>Fix: Maintain Posture</strong></p>
            <ol>
                <li>Keep chest angle constant</li>
                <li>Lead shoulder stays DOWN through impact</li>
                <li>Feel like staying in posture longer</li>
                <li>Weight transfers to front foot</li>
            </ol>
            <p>✅ <strong>Success:</strong> Ball-then-ground contact</p>
        </div>

        <div class="drill-card">
            <h4>INCONSISTENT CONTACT</h4>
            <p><strong>Cause:</strong> Multiple variables changing</p>

            <p><strong>Fix: Connected Takeaway</strong></p>
            <ol>
                <li>Arms stay connected to body</li>
                <li>Eliminates compensation moves</li>
                <li>Creates repeatable swing</li>
                <li>Use towel drill for feel</li>
            </ol>

            <p><strong>Also Check:</strong></p>
            <ul>
                <li>Weight through LACES (not toes/heels)</li>
                <li>Consistent ball position</li>
                <li>Same posture every time</li>
            </ul>
        </div>
    `
};

// Continue with remaining JavaScript functions...
// (generateYouTubeLink, addYouTubeLinks, and page initialization code remain the same)

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
    // Pattern to match video references
    const singleVideoPattern = /Video (\d+)(?![\d,])/g;
    const multiVideoPattern = /Videos ([\d, ]+)/g;

    // Replace single video references
    content = content.replace(singleVideoPattern, (match, videoNum) => {
        return generateYouTubeLink(parseInt(videoNum));
    });

    // Replace multiple video references
    content = content.replace(multiVideoPattern, (match, videoList) => {
        const videoNumbers = videoList.split(',').map(num => num.trim());
        const links = videoNumbers.map(num => generateYouTubeLink(parseInt(num)));
        return '<strong>Watch:</strong> ' + links.join(', ');
    });

    // Handle "Reference: Video X" or "Reference: Videos X, Y, Z" format
    content = content.replace(/<em>Reference: (Video \d+|Videos [\d, ]+)<\/em>/g, (match, videoRef) => {
        if (videoRef.startsWith('Videos')) {
            const videoList = videoRef.replace('Videos ', '');
            const videoNumbers = videoList.split(',').map(num => num.trim());
            const links = videoNumbers.map(num => generateYouTubeLink(parseInt(num)));
            return '<p><strong>Watch:</strong> ' + links.join(', ') + '</p>';
        } else {
            const videoNum = videoRef.replace('Video ', '');
            return '<p><strong>Watch:</strong> ' + generateYouTubeLink(parseInt(videoNum)) + '</p>';
        }
    });

    return content;
}

// ===================================
// ON-COURSE PAGE LOGIC
// ===================================
if (document.querySelector('.club-button')) {
    const clubButtons = document.querySelectorAll('.club-button');
    const clubContentArea = document.querySelector('.club-content');

    // Load lexicon and initial message
    clubContentArea.innerHTML = golfLexicon + `
        <div class="info-message">
            <p><strong>👆 Select a club above to see specific guidance</strong></p>
            <p>Each section includes:</p>
            <ul>
                <li>Setup fundamentals with explanations</li>
                <li>Key swing dynamics</li>
                <li>Primary drill for that club</li>
                <li>Quick checks for success</li>
            </ul>
        </div>`;

    clubButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            clubButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Load club content with YouTube links
            const club = button.dataset.club;
            if (clubContent[club]) {
                clubContentArea.innerHTML = addYouTubeLinks(clubContent[club]);
            } else if (club === 'chipping') {
                // Chipping content is stored separately
                clubContentArea.innerHTML = addYouTubeLinks(clubContent.chipping);
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

            // Update title and load content with YouTube links
            stationTitle.textContent = stationName;
            let content = '';

            // Map stations to content (handle special cases)
            if (station === 'bunker') {
                // Bunker doesn't have specific content yet, use general chipping
                content = stationContent['chipping'] || '<p>Bunker content coming soon...</p>';
            } else if (station === 'faults') {
                // Add faults station if not present
                content = stationContent['faults'] || '<p>Fault diagnosis content coming soon...</p>';
            } else {
                content = stationContent[station] || '<p>Content coming soon...</p>';
            }

            stationDrills.innerHTML = addYouTubeLinks(content);

            // Show station content
            stationSelector.classList.add('hidden');
            stationContentSection.classList.remove('hidden');
        });
    });
}