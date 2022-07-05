import type { NextPage } from "next";
import Head from "next/head";
import tw from "twin.macro";
import Image from "next/image";
import heroImg from "../public/Images/heroImg.png";
import Button from "../components/ui/button";
import { useRouter } from "next/router";
import Wrapper from "../components/ui/wrapper";
import AuthWatcher from "../utils/authWatcher";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home: NextPage = () => {
  const router = useRouter();
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(textRef.current!, {
      strings: ["Wider Reach", "Broader Audience", "Quality Hires"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });

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

      <Wrapper>
        <section tw="mt-10 mx-auto text-center max-h-[100vh] overflow-hidden">
          <h1 tw="text-4xl font-bold mb-8 md:(text-6xl)">
            Your Opening, <br />
            <span
              ref={textRef}
              tw="text-transparent bg-clip-text bg-gradient-to-r from-[#7A17C9] to-[#DD4C32]"
            ></span>
          </h1>
          <Button
            onClick={() => {
              AuthWatcher(
                () => {
                  router.push("/app");
                },
                () => {
                  router.push("/auth/register");
                }
              );
            }}
            style="secondary"
          >
            Get Started
          </Button>

          <div tw="mt-16 w-full flex justify-center">
            <div tw="md:(w-[72%])">
              <Image src={heroImg} alt="Boundless | a better way to hire" />
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

export default Home;
