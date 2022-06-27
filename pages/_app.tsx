import GlobalStyles from "./../styles/GlobalStyles";
import type { AppProps } from "next/app";
import router from "next/router";
const NProgress = require("nprogress");

router.events.on("routeChangeStart", () => {
  NProgress.start();
});

router.events.on("routeChangeStart", () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
