import "@/src/styles/colours.css";
import "@/src/styles/globals.css";
import "@/src/styles/grids.css";
import "@/src/styles/utils.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
