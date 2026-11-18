# Pixel-art asset manifest

All PNGs use hard nearest-neighbor pixels and the shared 20-color project palette. Sprite alpha is binary (fully transparent or fully opaque); `bg-city-night.png` and `tile-dark-world.png` are intentionally opaque.

| File | Final size | Frames | Notes |
|---|---:|---:|---|
| `hero-idle.png` | 32×48 | 1 | Original game-dev hero, 3/4 idle pose |
| `hero-walk.png` | 128×48 | 4 × 32×48 | Right-facing walk cycle |
| `hero-portrait.png` | 48×48 | 1 | Neutral dialogue portrait |
| `hero-portrait-smile.png` | 48×48 | 1 | Smiling dialogue portrait |
| `icon-soul-jump.png` | 32×32 | 1 | Red jumping soul with stepped trail |
| `icon-super-fun-game.png` | 32×32 | 1 | Golden star project icon |
| `icon-harness.png` | 32×32 | 1 | Cyan terminal/robot helper |
| `save-point.png` | 96×32 | 3 × 32×32 | Center-registered twinkle sequence |
| `bg-city-night.png` | 480×270 | 1 | Opaque layered city background |
| `bg-city-far.png` | 480×270 | 1 | Transparent parallax skyline layer |
| `moon.png` | 48×48 | 1 | Full moon with solid-pixel glow ring |
| `tile-dark-world.png` | 32×32 | 1 | Mathematically periodic diamond floor tile |
| `tile-stars.png` | 128×128 | 1 | Transparent starfield with clear repeat gutter |
| `ornament-corner.png` | 16×16 | 1 | White/lavender frame-corner knot |
| `favicon.png` | 32×32 | 1 | Red soul heart with white highlight |
| `shoot-star.png` | 32×8 | 1 | Horizontal shooting-star streak |

Generated as original bitmap art with the built-in image-generation tool, then reduced, palette-normalized, alpha-cleaned, and dimension-verified locally. No existing game characters or sprites were used.
