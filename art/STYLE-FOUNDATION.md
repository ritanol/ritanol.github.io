# ritanol colorful story-RPG style foundation

This is an original pixel-art system informed by Undertale's broad visual language: vivid flat colors, rough symbolic sprites, black stage-like negative space, chunky white UI, and region-specific palettes. It must never copy Undertale or Deltarune characters, sprites, locations, dialogue, emblems, or exact compositions.

## Core idea

Black frames the world, but the world inside the frame is colorful. Each scene chooses one environmental family plus one or two soul-color accents. Objects pop through flat saturated fills, not glow effects. Normal sprites use at most 10 colors; scenes use at most 24.

## Master palette

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | Page stage, sprite outline, UI fill, deepest shadow |
| White | `#FFFFFF` | UI borders/text, eyes, highest flat highlight |
| Light gray | `#C0C0C0` | Pale materials, secondary text |
| Mid gray | `#808080` | Sprite shadow, disabled UI |
| Dark gray | `#404040` | Dark clothing and stone neutral |
| Soul red | `#FF0000` | Heart, danger, missing HP |
| Soul orange | `#FF7F27` | Hero hoodie, FIGHT/action, orange soul |
| Soul yellow | `#FFFF00` | Selected text, HP, save stars |
| Soul green | `#00C000` | Healing, green soul, rare natural accent |
| Soul cyan | `#00FFFF` | Echo flowers, cyan soul, rare accent |
| Cyan light | `#42FCFF` | Readable cyan edge on black |
| Soul blue | `#0000FF` | Canon blue soul and blue attacks |
| Readable blue | `#3C78FF` | Blue objects that must read on black |
| Soul purple | `#D535D9` | Purple soul and rare menu accent |
| Ruins dark | `#2B1B3A` | Deep ruined stone |
| Ruins shadow | `#4A2C5A` | Shadowed stone |
| Ruins mid | `#6B4380` | Main stone fill |
| Ruins light | `#8E6AA0` | One flat stone highlight |
| Leaf red | `#C03030` | Autumn leaves |
| Leaf red dark | `#8A1F2A` | Leaf shadow |
| Flower gold | `#FFD030` | Golden flowers |
| Flower orange | `#FFA500` | Flower center/shadow |
| Leaf green | `#2E7D32` | Sparse leaves and stems |
| Waterfall navy | `#0A0A30` | Deep Waterfall background |
| Waterfall blue | `#101050` | Waterfall structure/shadow |
| Water teal | `#2080A0` | Water and stems |
| Mushroom pink | `#FF40C0` | Waterfall mushroom accent |
| Ice blue | `#A0D8FF` | Snow and ice light |
| Ice shadow | `#5088C0` | Snow/ice shadow |
| Lamp yellow | `#FFD060` | Warm Snowdin light |
| Hot red-orange | `#FF3000` | Hotland heat |
| Hot pink | `#D0206A` | Hotland accent |
| Skin peach | `#FFC090` | Hero face/hands |
| Skin shadow | `#D08050` | One skin shadow tone |
| Hair brown | `#603010` | Hero hair |

## Color usage

- Use one environment family per scene: Ruins, Waterfall, Snowdin, or Hotland.
- Add one or two soul colors as semantic accents. Do not distribute every accent everywhere.
- Pure black should remain 35–55% of a hero composition, especially at the edges.
- Bright elements use solid color clusters. Never fake brightness with blur or large translucent halos.
- A normal 24×32 sprite uses 6–10 colors including black. A portrait uses 8–12. A full scene uses 16–24.

## Sprite construction

- Standard hero size: 24×32 px. Head is 12–14 px tall; torso 8–10 px; legs/feet 8–10 px.
- Use a hard 1 px black outline. A 2 px corner cluster is allowed only where it strengthens the silhouette.
- Faces use dot eyes and a 1–3 px mouth. No glossy anime eyes, noses, or smooth facial shading.
- Each material gets a base plus at most one shadow. White may be used for one tiny eye or specular pixel.
- Hero design: original child with brown blocky hair, peach skin, bright orange plain hoodie, yellow drawstrings, dark-gray pants, black shoes. Absolutely no striped sweater.
- Companion: round moth-like body, two short stubby antennae, exactly two small side wings, tiny feet, cyan or yellow accent. It must not resemble a rabbit.
- Walk sheets: four frames—contact, passing, opposite contact, passing. Keep head and torso registered; move limbs 1–3 px.
- Shapes should be slightly naive and asymmetrical. Prefer a memorable silhouette over correct anatomy.

## Scene construction

- Build scenes as flat layers with hard boundaries: black stage, dark silhouette, midground, foreground, accent objects.
- Ruins use uneven broken arches, mismatched stones, crooked pillars, red autumn leaves, sparse golden flowers, and small green leaves.
- A light shaft may use one flat warm-yellow tone plus white at most. No alpha gradient, lavender gradient, bloom, fog cloud, or dithering cloud.
- Golden flower patches are sparse: 7–15 flowers, visible black gaps, dark green leaves. Never a dense purple carpet.
- Echo flowers are small cyan petals on teal/blue stems. Their “glow” is only cyan plus lighter cyan pixels, never blur.
- Keep details broad enough to read after nearest-neighbor reduction. Do not fill every stone with cracks.
- Opposite tile edges must join exactly; treat tiles as periodic patterns, not cropped illustrations.

## UI specifications

- UI fill: pure black.
- Primary web dialogue/card border: **6 px solid white** at display size. At 3× asset scaling this corresponds to a 2 px native line.
- Corners: square cut corners or one stepped pixel. No CSS border radius.
- Dialogue padding: 18–24 px at display size; portrait slot 96×96 displayed from a 48×48 source.
- Heart cursor: 7×7 native red heart. Continue arrow: 5×3 native white downward triangle.
- HP: yellow fill, red missing-health background, black 1 px gutter.
- Battle/menu buttons: orange FIGHT, yellow ACT/selected, cyan ITEM/info, green MERCY/heal where appropriate. Text and border use the same soul color; fill stays black.
- UI atlas elements must be separated by transparent gutters and contain no rendered words.

## Typography

- Closest free Google Fonts match to the monospaced Determination-style dialogue look: **VT323**. Use 24–32 CSS px with tight line-height and normal weight.
- More rigid bitmap UI labels: **Silkscreen**, weight 400 or 700, uppercase.
- Chunky headline: **Pixelify Sans**, weight 700. Use uppercase with line-height 0.9–1.0.
- Alternative very blocky short label: **Press Start 2P**; use sparingly because it is wide.
- Headline color can change by line using soul colors, but never use a rainbow gradient.

## Never do this

- No neon cyberpunk skyline, futuristic city, hologram, circuit, terminal, robot-helper, controller logo, or tech-dashboard motif.
- No gradients, soft bloom, glow-spam, scanlines, CRT noise, chromatic aberration, blur, lens flare, or transparency haze.
- No anime shading, glossy eyes, smooth cel rendering, long limbs, or fashion-model proportions.
- No perfectly mirrored ruins, polished fantasy architecture, dense decorative filigree, or realistic materials.
- No muddy all-purple treatment. Environmental palettes must include their warm/cool regional colors.
- No striped sweater on the hero. No long ears on the moth companion.
- No copied Undertale/Deltarune character, sprite, room, emblem, dialogue, or exact UI arrangement.

## Canonical image-generation prompt prefix

```text
ORIGINAL COLORFUL STORY-RPG PIXEL ART. Use pure black stage-like negative space with vivid fully saturated flat pixel colors chosen from the supplied palette. Hard square edges, rough naive asymmetry, 1-pixel black outlines, dot-scale faces, base color plus at most one shadow per material. Maximum 10 colors per sprite and 24 per scene. No existing game character, sprite, location, emblem, dialogue, or exact composition. No anti-aliasing, gradients, blur, bloom, glow-spam, dithering clouds, scanlines, cyberpunk skyline, technology, terminal motifs, anime rendering, glossy eyes, or text. Shapes must survive nearest-neighbor reduction to the requested native size. The recurring hero is an original brown-haired child in a plain bright-orange hoodie with yellow drawstrings, dark-gray pants and black shoes—never a striped sweater. The recurring companion is a small round moth with two stubby antennae and exactly two small wings—never rabbit-like.
```

