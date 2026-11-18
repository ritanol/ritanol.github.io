import type { AppProps } from "next/app";
import Head from "next/head";
import { DotGothic16, Pixelify_Sans } from "next/font/google";

import "@/styles/globals.css";

// Pixelify Sans for headings, DotGothic16 as the closest free match to
// Undertale's monospaced bitmap dialogue font.
const display = Pixelify_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const mono = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" type="image/png" />
      </Head>
      <style jsx global>{`
        :root {
          --font-display: ${display.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
