import Head from "next/head";
import { useEffect, useRef, useState } from "react";

import type { CSSProperties } from "react";

import { Heart } from "@/components/Pixel";

type Tab = "projects" | "about" | "links" | "mercy";
type Face = "neutral" | "curious" | "smile";

/** The seven soul colors. */
const SOULS = ["#ff0000", "#ff7f27", "#ffff00", "#00c000", "#00ffff", "#3c78ff", "#d535d9"];

const TABS: { id: Tab; label: string; face: Face; color: string }[] = [
  { id: "projects", label: "FIGHT", face: "neutral", color: "#ff0000" },
  { id: "about", label: "ACT", face: "curious", color: "#00ffff" },
  { id: "links", label: "ITEM", face: "smile", color: "#00c000" },
  { id: "mercy", label: "MERCY", face: "smile", color: "#ffff00" },
];

const PROJECTS = [
  {
    name: "Soul Jump",
    icon: "/assets/icon-soul-jump.png",
    color: "#ff3030",
    tags: "GameMaker, 2022",
    desc: "A game made in GameMaker in 2022.",
  },
  {
    name: "Super Fun Game",
    icon: "/assets/icon-super-fun-game.png",
    color: "#ffff00",
    tags: "In progress",
    desc: "Still in the works.",
  },
  {
    name: "DeepSeek Harness",
    icon: "/assets/icon-harness.png",
    color: "#00ffff",
    tags: "Tool",
    desc: "A tool for working with AI coding agents.",
  },
];

const LINKS = [{ name: "GitHub", href: "https://github.com/ritanol" }];

const ABOUT = [
  "ritanol makes games and the tools to make them.",
  "Currently leveling up.",
];

/** Types out the lines one character at a time, Undertale style. */
function Dialogue({ lines, face }: { lines: string[]; face: Face }) {
  const full = lines.map((l) => `* ${l}`).join("\n");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setCount(full.length);
      return;
    }
    setCount(0);
    const id = window.setInterval(() => {
      setCount((c) => {
        if (c >= full.length) {
          window.clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, 32);
    return () => window.clearInterval(id);
  }, [full]);

  return (
    <div className="frame dialogue">
      <span
        className="face pix"
        aria-hidden="true"
        style={{ backgroundImage: `url(/assets/portrait-${face}.png)` }}
      />
      <div className="dialogue-text">
        <p className="sr-only" aria-live="polite">
          {full}
        </p>
        <p aria-hidden="true" className="typed">
          {full.slice(0, count)}
          <span className="cursor" />
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [tab, setTab] = useState<Tab>("projects");
  const [project, setProject] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (dir: 1 | -1) => {
    const i = TABS.findIndex((t) => t.id === tab);
    const next = (i + dir + TABS.length) % TABS.length;
    setTab(TABS[next]!.id);
    tabRefs.current[next]?.focus();
  };

  const selected = PROJECTS[project]!;
  const current = TABS.find((t) => t.id === tab)!;
  const accent = tab === "projects" ? selected.color : current.color;
  const lines =
    tab === "about"
      ? ABOUT
      : tab === "links"
        ? ["Want to talk? Find me here."]
        : tab === "mercy"
          ? ["You told ritanol you will be back.", "ritanol is happy to hear it."]
          : [`You inspect ${selected.name}.`];

  return (
    <>
      <Head>
        <title>ritanol</title>
        <meta name="description" content="ritanol's portfolio. Games and tools." />
      </Head>

      <section className="title">
        <p className="kicker">GAME DEV PORTFOLIO</p>
        <h1 aria-label="RITANOL">
          <span aria-hidden="true">RITAN</span>
          <Heart className="h1-heart" />
          <span aria-hidden="true">L</span>
        </h1>

        <div className="souls" aria-hidden="true">
          {SOULS.map((c, i) => (
            <Heart
              key={c}
              className="soul-dot"
              tint={c}
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </div>

        <div
          className="scene pix"
          role="img"
          aria-label="A kid and a small moth stand before a glowing stone doorway in a quiet ruined garden."
        />

        <a className="start" href="#menu">
          <Heart className="soul" />
          START
        </a>
      </section>

      <main className="screen" id="menu" style={{ "--accent": accent } as CSSProperties}>
        <header className="status">
          <h2>RITANOL</h2>
          <span>LV 1</span>
          <span className="hp">
            <span>HP</span>
            <span className="hp-bar" aria-hidden="true">
              <span className="hp-fill" />
            </span>
            <span>20 / 20</span>
          </span>
        </header>

        <Dialogue lines={lines} face={current.face} />

        <div
          className="menu"
          role="tablist"
          aria-label="Sections"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") move(1);
            if (e.key === "ArrowLeft") move(-1);
          }}
        >
          {TABS.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              aria-selected={tab === t.id}
              className="choice"
              style={{ "--c": t.color } as CSSProperties}
              onClick={() => setTab(t.id)}
            >
              <Heart className="soul" tint="#000" />
              {t.label}
            </button>
          ))}
        </div>

        {tab === "projects" && (
          <div className="inventory">
            <ul className="slots" aria-label="Projects">
              {PROJECTS.map((p, i) => (
                <li key={p.name}>
                  <button
                    className="slot"
                    aria-pressed={project === i}
                    aria-label={p.name}
                    style={{ "--c": p.color } as CSSProperties}
                    onClick={() => setProject(i)}
                  >
                    <span
                      className="slot-icon pix"
                      aria-hidden="true"
                      style={{ backgroundImage: `url(${p.icon})` }}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <div className="frame detail">
              <h3>{selected.name}</h3>
              <p className="tags">{selected.tags}</p>
              <p>{selected.desc}</p>
            </div>
          </div>
        )}

        {tab === "about" && (
          <div className="frame detail">
            <h3>ritanol</h3>
            <p className="tags">Class: Game developer</p>
            <p>Makes games and tools. Always working on the next one.</p>
          </div>
        )}

        {tab === "links" && (
          <ul className="frame list" aria-label="Links">
            {LINKS.map((l) => (
              <li key={l.name}>
                <a className="row" href={l.href} target="_blank" rel="noreferrer">
                  <Heart className="soul" />
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        {tab === "mercy" && (
          <div className="frame detail">
            <h3>You spared ritanol.</h3>
            <p className="tags">No fighting required</p>
            <p>Thanks for stopping by. Come back when the next game is out.</p>
          </div>
        )}

        <footer className="save">
          <a className="save-point" href="https://github.com/ritanol" target="_blank" rel="noreferrer">
            <span className="save-star pix" aria-hidden="true" />
            <span>* The SAVE point shimmers. You feel determined.</span>
          </a>
          <div className="parade pix" aria-hidden="true" />
        </footer>
        <span className="peek pix" aria-hidden="true" />
      </main>
    </>
  );
}
