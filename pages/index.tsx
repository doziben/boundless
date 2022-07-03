import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/ui/header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Boundless | a new way to hire </title>
        <meta
          name="description"
          content="Manage and monitor your jobs posted to a wider reach"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header>{}</Header>
      </main>
    </div>
  );
};

export default Home;
