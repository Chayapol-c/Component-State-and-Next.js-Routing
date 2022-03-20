import type { AppProps } from "next/app";
import GlobalStyle from "./globalStyle";
import Navigation from "../components/Navigation/Navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
