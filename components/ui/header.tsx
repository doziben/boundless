import Link from "next/link";
import React, { useState } from "react";
import headerCtx from "../../utils/headerCtx";
import tw from "twin.macro";
import logo from "../../public/SVGs/Boundless.svg";
import Image from "next/image";
import MenuButton from "./menuButton";
import NavLink from "./navLink";
import styled from "twin.macro";
import Button from "./button";
import { useRouter } from "next/router";

type _props = {
  children: React.ReactNode;
};

const Header = (props: _props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const router = useRouter();

  const navHandler = (e: React.MouseEvent) => {
    setShowNav((prevState) => {
      return !prevState;
    });
  };

  //Controls nav behavior on mobile - navStateOpen && shownav -hiddem initially
  //show on mobile hidden md:show
  const ResponsiveDiv = tw.div`justify-between w-full hidden  md:flex`;

  // const test = styled.div(()=> [
  //   (showNav) && tw``
  // ]);

  const logged: JSX.Element = (
    <>
      <div>
        <NavLink href="/app/">Dashboard</NavLink>
        <Link href="/app/jobs">Jobs</Link>
        <Link href="/app/settings">Settings</Link>
      </div>
      <div>icons usercard</div>
    </>
  );

  const notLogged: JSX.Element = (
    <>
      <div tw="md:hidden w-full flex justify-end">
        <MenuButton onClick={navHandler} />
      </div>
      <ResponsiveDiv>
        <div tw="flex gap-3 items-center">
          <NavLink href="/">Be Boundless</NavLink>
          <NavLink href="/explore">Explore</NavLink>
        </div>
        <Button
          style="primary"
          onClick={() => {
            router.push("/auth/register");
          }}
        >
          Try it out
        </Button>
      </ResponsiveDiv>
    </>
  );

  let loginState =
    router.pathname === "/auth/register" || router.pathname === "/auth/login";

  return (
    <headerCtx.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
      }}
    >
      {!loginState && (
        <header tw="w-full py-4 backdrop-blur-md border border-b-[#d5d5d5]">
          <div tw="max-w-7xl px-[6%] mx-auto flex justify-between">
            <div tw="flex-[2]">
              <Image src={logo} alt="Boundless Logo" />
            </div>

            <nav tw="flex items-center flex-[3]">
              {isLoggedIn ? logged : notLogged}
            </nav>
          </div>
        </header>
      )}
      {props.children}
    </headerCtx.Provider>
  );
};

export default Header;
