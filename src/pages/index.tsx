import Head from "next/head";
import { useEffect, useRef, useState } from "react";

import { Heart, ICONS, PixelArt, Skyline, Sparkle } from "@/components/Pixel";

type Tab = "projects" | "about" | "links";

const TABS: { id: Tab; label: string }[] = [
  { id: "projects", label: "PROJECTS" },
  { id: "about", label: "ABOUT" },
  { id: "links", label: "LINKS" },
];

const PROJECTS = [
  {
    name: "Soul Jump",
    icon: ICONS.soul,
    tags: "GameMaker, 2022",
    desc: "A game made in GameMaker in 2022.",
  },
  {
    name: "Super Fun Game",
    icon: ICONS.star,
    tags: "In progress",
    desc: "Still in the works.",
  },
  {
    name: "DeepSeek Harness",
    icon: ICONS.terminal,
    tags: "Tool",
    desc: "A tool for working with AI coding agents.",
  },
];

const LINKS = [{ name: "GitHub", href: "https://github.com/ritanol" }];

const INTRO = ["ritanol appears!", "Smells like freshly compiled code."];
const ABOUT = [
  "ritanol makes games and the tools to make them.",
  "Currently leveling up.",
];

/** Types out the lines one character at a time, Undertale style. */
function Dialogue({ lines }: { lines: string[] }) {
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
    }, 28);
    return () => window.clearInterval(id);
  }, [full]);

  return (
    <div className="frame dialogue">
      <p className="sr-only" aria-live="polite">
        {full}
      </p>
      <p aria-hidden="true" className="typed">
        {full.slice(0, count)}
        <span className="cursor" />
      </p>
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
  const lines =
    tab === "about"
      ? ABOUT
      : tab === "links"
        ? ["Want to talk? Find me here."]
        : [`You inspect ${selected.name}.`];

  return (
    <>
      <Head>
        <title>ritanol</title>
        <meta name="description" content="ritanol's portfolio. Games and tools." />
      </Head>

      <section className="title">
        <div className="hp" aria-hidden="true">
          <Heart className="hp-heart" />
          <div className="hp-bar">
            <div className="hp-fill" />
          </div>
        </div>

        <Sparkle style={{ top: "18%", left: "22%", width: 28 }} />
        <Sparkle style={{ top: "12%", left: "40%", width: 20 }} delay={1.1} />
        <Sparkle style={{ top: "30%", right: "14%", width: 24 }} delay={0.6} />
        <Sparkle style={{ top: "52%", right: "26%", width: 16 }} delay={1.7} />

        <div className="title-text">
          <p className="kicker">GAME DEV PORTFOLIO</p>
          <h1>RITANOL</h1>
          <a className="start" href="#menu">
            START
          </a>
        </div>
        <Skyline />
      </section>

      <main className="screen" id="menu">
        <header className="status">
          <h2>RITANOL</h2>
          <span>LV 1</span>
          <span>HP 20/20</span>
        </header>

        <Dialogue lines={lines} />

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
              onClick={() => setTab(t.id)}
            >
              <Heart className="soul" />
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
                    onClick={() => setProject(i)}
                  >
                    <PixelArt grid={p.icon} className="slot-icon" />
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
      </main>
    </>
  );
}
