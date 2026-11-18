import type { CSSProperties } from "react";

const COLORS: Record<string, string> = {
  w: "#ffffff",
  r: "#ff0000",
  d: "#a80000",
};

/** Draws a character grid as crisp square pixels. */
export function PixelArt({
  grid,
  className,
  style,
  tint,
}: {
  grid: string[];
  className?: string;
  style?: CSSProperties;
  /** Replaces the main (red) fill, e.g. to draw a soul in another color. */
  tint?: string;
}) {
  const rects: JSX.Element[] = [];
  grid.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      const fill = ch === "r" && tint ? tint : COLORS[ch];
      if (fill) rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} />);
    });
  });
  return (
    <svg
      className={className}
      style={style}
      viewBox={`0 0 ${grid[0]?.length ?? 8} ${grid.length}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {rects}
    </svg>
  );
}

const SOUL = [
  ".rr..rr.",
  "rwrrrrrr",
  "rrrrrrrr",
  "rrrrrrrr",
  ".rrrrrr.",
  "..rrrr..",
  "...rr...",
  "........",
];

/** The red soul, used as the menu cursor. */
export function Heart({
  className,
  style,
  tint,
}: {
  className?: string;
  style?: CSSProperties;
  tint?: string;
}) {
  return <PixelArt className={className} style={style} tint={tint} grid={SOUL} />;
}
