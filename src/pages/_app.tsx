import type { AppProps } from "next/app";
import Head from "next/head";
import { Press_Start_2P } from "next/font/google";

import "@/styles/globals.css";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <style jsx global>{`
        :root {
          --font-pixel: ${pixel.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
