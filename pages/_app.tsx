import { GlobalStyles } from "twin.macro";
import type { AppProps } from "next/app";
import router from "next/router";
import Header from "../components/ui/header";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../utils/store";
import StateWatcher from "../utils/stateWatcher";

const NProgress = require("nprogress");

router.events.on("routeChangeStart", () => {
  NProgress.start();
});

router.events.on("routeChangeStart", () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header>
        <Head>
          <meta
            name="description"
            content="Manage and monitor your jobs posted to a wider reach"
          />
          <link rel="icon" href="/favicon.svg" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
        </Head>
        <GlobalStyles />
        <StateWatcher>
          <Component {...pageProps} />
        </StateWatcher>
      </Header>
    </Provider>
  );
}

export default MyApp;
