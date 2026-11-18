import type { CSSProperties } from "react";

const COLORS: Record<string, string> = {
  w: "#ffffff",
  y: "#ffe94a",
  r: "#ff2a3d",
  c: "#3de8d0",
  m: "#ff4fd8",
  p: "#7a2bd1",
};

/** Draws a character grid as crisp square pixels. */
export function PixelArt({
  grid,
  className,
}: {
  grid: string[];
  className?: string;
}) {
  const rects: JSX.Element[] = [];
  grid.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      const fill = COLORS[ch];
      if (fill) rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} />);
    });
  });
  return (
    <svg
      className={className}
      viewBox={`0 0 ${grid[0]?.length ?? 8} ${grid.length}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {rects}
    </svg>
  );
}

export const ICONS = {
  soul: [
    ".rr..rr.",
    "rwrrrrrr",
    "rrrrrrrr",
    "rrrrrrrr",
    ".rrrrrr.",
    "..rrrr..",
    "...rr...",
    "........",
  ],
  star: [
    "...yy...",
    "...yy...",
    "yyyyyyyy",
    ".yyyyyy.",
    "..yyyy..",
    ".yyyyyy.",
    ".yy..yy.",
    "yy....yy",
  ],
  terminal: [
    "cccccccc",
    "c......c",
    "c.c....c",
    "c..c...c",
    "c.c....c",
    "c...cc.c",
    "c......c",
    "cccccccc",
  ],
};

export function Heart({ className }: { className?: string }) {
  return <PixelArt className={className} grid={ICONS.soul} />;
}

export function Sparkle({ style, delay = 0 }: { style: CSSProperties; delay?: number }) {
  return (
    <svg
      className="sparkle"
      viewBox="0 0 7 7"
      shapeRendering="crispEdges"
      aria-hidden="true"
      style={{ ...style, animationDelay: `${delay}s` }}
    >
      <path fill="#ffe94a" d="M3 0h1v7H3zM0 3h7v1H0z" />
      <path fill="#fff" d="M3 3h1v1H3z" />
    </svg>
  );
}

/** Deterministic pseudo-random so the skyline is the same on every build. */
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

const BUILDINGS: [number, number, number][] = [
  [0, 70, 170], [80, 50, 250], [140, 90, 130], [240, 60, 210], [310, 100, 110],
  [420, 70, 170], [500, 50, 270], [560, 110, 120], [680, 80, 190], [770, 60, 140],
  [840, 100, 240], [950, 70, 150], [1030, 90, 210], [1130, 70, 120],
];
const BODY = ["#1a1450", "#241a6b", "#2a1b7a"];
const LIGHTS = ["#3de8d0", "#ff4fd8", "#ffe94a"];

export function Skyline() {
  const rand = rng(7);
  const parts: JSX.Element[] = [];
  const H = 300;
  BUILDINGS.forEach(([x, w, h], i) => {
    const top = H - h;
    parts.push(<rect key={`b${i}`} x={x} y={top} width={w} height={h} fill={BODY[i % BODY.length]} />);
    parts.push(<rect key={`e${i}`} x={x} y={top} width={w} height="10" fill="#3a2a9a" />);
    if (i % 3 === 1) parts.push(<rect key={`a${i}`} x={x + w / 2 - 5} y={top - 40} width="10" height="40" fill="#3a2a9a" />);
    for (let wy = top + 30; wy < H - 10; wy += 20) {
      for (let wx = x + 10; wx < x + w - 10; wx += 20) {
        if (rand() < 0.38) {
          parts.push(
            <rect
              key={`w${i}-${wx}-${wy}`}
              x={wx}
              y={wy}
              width="10"
              height="10"
              fill={LIGHTS[Math.floor(rand() * LIGHTS.length)]}
            />,
          );
        }
      }
    }
  });
  return (
    <svg
      className="skyline"
      viewBox={`0 0 1200 ${H}`}
      preserveAspectRatio="xMidYMax slice"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {parts}
    </svg>
  );
}
