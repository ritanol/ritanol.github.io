# Complete colorful asset plan

Every prompt is ready to use. Generate large, then nearest-neighbor reduce, map to `palette.json` without dithering, force sprite alpha to 0/255, and verify exact dimensions.

## Shared prompt prefix

Every block below begins with this same contract: original colorful story-RPG pixel art; pure black stage; vivid flat palette colors; rough naive asymmetry; hard pixels; 1 px black outlines; no copied game content; no anti-aliasing, gradients, blur, glow-spam, scanlines, cyberpunk, technology, anime rendering, or text; maximum 10 colors per sprite and 24 per scene.

## Assets

### `hero-scene.png` — 320×240

```text
ORIGINAL COLORFUL STORY-RPG PIXEL ART. Pure black stage, vivid flat palette colors, rough naive asymmetry, hard pixels, no gradients/blur/glow/text/copying. A colorful Ruins garden at dusk: uneven dusty-purple broken arch, mismatched stones, one flat hard-edged warm-yellow light shaft, sparse patch of golden flowers with dark-green leaves, a small pile of red autumn leaves, and two tiny cyan echo flowers in dark background corners. Low center: the recurring brown-haired child seen from behind in a plain bright-orange hoodie with yellow drawstrings and dark pants, beside a round moth companion with two stubby antennae, two small wings and one cyan accent. 35–50% black negative space, vignette by objects disappearing into black, no mirrored symmetry. Maximum 24 colors. 4:3 composition readable at 320×240.
```

### `hero-idle-front.png` — 24×32

```text
ORIGINAL COLORFUL STORY-RPG PIXEL ART. Transparent background, hard 1 px black outline, flat fills, no gradients/blur/text/copying. Front-facing recurring hero: blocky brown hair, peach dot-face, bright-orange plain hoodie, two yellow drawstring pixels, dark-gray pants, black shoes. Oversized head, short limbs, neutral idle, slight asymmetry. No stripes. Maximum 10 colors, readable at 24×32.
```

### `hero-walk-front.png`, `hero-walk-back.png`, `hero-walk-side.png` — 96×32 each

```text
ORIGINAL COLORFUL STORY-RPG PIXEL ART. Transparent background, hard 1 px black outline, flat fills, no gradients/blur/text/copying. Same exact orange-hoodie hero as the idle sprite. Exactly four equal 24×32 frames in one horizontal row: contact, passing, opposite contact, passing. [FRONT / BACK / WALKING RIGHT SIDE] view. Keep head/torso registration stable, move short limbs 1–3 px, no dividers, maximum 10 colors.
```

### `portrait-neutral.png`, `portrait-curious.png`, `portrait-smile.png` — 48×48 each

```text
ORIGINAL COLORFUL STORY-RPG PIXEL ART. Transparent background, chunky black outline, flat colors, no gradients/blur/glossy eyes/text/copying. Same exact brown-haired orange-hoodie hero, square head-and-shoulders dialogue portrait with dot/block eyes and a tiny mouth. Expression: [NEUTRAL / CURIOUS WITH ONE BROW PIXEL RAISED / SMALL WARM SMILE]. Maximum 12 colors, readable at 48×48.
```

### `icon-soul-jump.png` — 32×32

```text
ORIGINAL COLORFUL STORY-RPG PIXEL ICON. Transparent background, hard black outline, flat colors only. A red heart leaping over one small uneven dusty-purple stone step, two orange motion pixels, no glow or text. Maximum 8 colors, readable at 32×32.
```

### `icon-super-fun-game.png` — 32×32

```text
ORIGINAL COLORFUL STORY-RPG PIXEL ICON. Transparent background, hard black outline, flat colors only. A chunky golden-yellow five-point star with one orange outline/detail cluster and one white pixel sparkle. No copied save-star geometry, no glow or text. Maximum 7 colors, readable at 32×32.
```

### `icon-harness.png` — 32×32

```text
ORIGINAL COLORFUL STORY-RPG PIXEL ICON. Transparent background, hard black outline, flat colors only. A lavender and cyan marionette hand gently holding three golden thread loops. Organic theatrical symbol, no computer, robot, terminal, controller, circuit or text. Maximum 9 colors, readable at 32×32.
```

### `save-point.png` — 96×32

```text
ORIGINAL COLORFUL STORY-RPG PIXEL ART. Transparent background. Exactly three equal 32×32 frames in one row: small yellow four-point star, expanded bright yellow/white star, small star with shifted orange sparkle. Fixed center registration, hard edges, no glow blur, no dividers, maximum 6 colors.
```

### `enemy-gloamling.png` — 40×40

```text
ORIGINAL COLORFUL STORY-RPG PIXEL MONSTER. Transparent background, hard black outline, flat fills. Harmless squat pear-shaped gloamling with an orange body, two uneven tiny leaf nubs rather than ears, short feet, one large white dot eye and one closed eye, holding one tiny cyan flower on a teal stem. Rough asymmetry, cute but not anime, maximum 10 colors, 40×40.
```

### `tile-ruin-floor.png` — 32×32

```text
ORIGINAL COLORFUL STORY-RPG PIXEL TILE. Seamless 32×32 dusty-purple cracked flagstone floor with sparse dark-green moss and one tiny red leaf. Flat 5–7 colors, hard edges, no central focal object. Opposite edges must join exactly.
```

### `tile-ruin-wall.png` — 32×32

```text
ORIGINAL COLORFUL STORY-RPG PIXEL TILE. Seamless 32×32 uneven dusty-purple block wall, broad naive stones, sparse black cracks, one worn golden flower carving. Flat 5–7 colors. Opposite edges must join exactly.
```

### `tile-ruin-pillar.png` — 32×64

```text
ORIGINAL COLORFUL STORY-RPG PIXEL SPRITE. Transparent background. One crooked broken dusty-purple pillar, mismatched base/capital, black cracks, one red vine leaf and one flat light stone edge. Rough asymmetry, hard outline, 7 colors maximum, 32×64.
```

### `tile-flowers.png` — 32×32

```text
ORIGINAL COLORFUL STORY-RPG PIXEL TILE. Seamless sparse patch of 7–12 golden-yellow flowers with orange centers, dark-green leaves, and visible black soil gaps. No purple carpet, no glow, flat 6 colors maximum. Opposite edges must join exactly, 32×32.
```

### `character-parade.png` — 320×48

```text
ORIGINAL COLORFUL STORY-RPG PIXEL ART. Transparent background, even baseline. Seven entirely original figures with generous gaps: orange-hoodie child, cyan-accent moth, orange gloamling, tall green stone gardener, yellow candle scholar, blue round caped creature, pink antlered flower keeper. Each has a distinct silhouette and one bright soul-color accent. Flat fills, hard outlines, no copied characters, 320×48.
```

### `soul-hearts.png` — 256×32

```text
ORIGINAL COLORFUL STORY-RPG PIXEL SYMBOL SHEET. Transparent background. Exactly eight equal 32×32 frames in one row, centered and evenly spaced: red heart, orange heart, yellow heart, green heart, cyan heart, readable-blue #3C78FF heart, purple heart, and a broken red heart split by a black zigzag crack. Same original chunky heart geometry in all frames, hard black outline, one white highlight pixel, no glow, no dividers.
```

### `ui-atlas.png` — 128×64

```text
ORIGINAL COLORFUL STORY-RPG PIXEL UI ATLAS. Transparent 128×64 sheet with separated elements: white cut-corner frame pieces sized for thick display borders, white 5×3 down arrow, red heart cursor, yellow/red HP segments, orange/yellow/cyan/green button frames, tiny white/yellow sparkle, simple divider ornaments. Pure black where fill is needed; no rendered words, no gradients, no rounded corners, no copied exact UI layout.
```

### `divider-echo-flowers.png` — 320×32

```text
ORIGINAL COLORFUL STORY-RPG PIXEL DIVIDER. Transparent background, 320×32 horizontal strip. Sparse uneven row of glowing-looking echo flowers built only from solid cyan #00FFFF and light-cyan #42FCFF petals on teal/navy stems, with wide black/transparent gaps and a few small readable-blue leaves. Hard pixels, no blur or halo, no symmetry, no text.
```

### `favicon.png` — 32×32

```text
ORIGINAL COLORFUL STORY-RPG PIXEL ICON. Transparent 32×32 canvas. One centered original red heart with a hard black 1 px outline, one darker-red lower edge cluster and a tiny white upper-left highlight. Flat colors, no glow, no text, 3 px breathing room.
```

