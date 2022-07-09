import { NextPage } from "next";
import Head from "next/head";

//query jobId from route and portal a jobModal to screen
//onClick => createportal(<jobmodal id={router.query.jobId}/>)

const Explore: NextPage = () => {
  return (
    <>
      <Head>
        <title>Boundless | a new way to hire </title>
      </Head>
      <div>Explore</div>
    </>
  );
};

export default Explore;
