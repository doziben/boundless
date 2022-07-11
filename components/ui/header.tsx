import React, { useEffect, useState } from "react";
import headerCtx from "../../utils/headerCtx";
import tw from "twin.macro";
import styled from "@emotion/styled";
import logo from "../../public/SVGs/Boundless.svg";
import Image from "next/image";
import MenuButton from "./menuButton";
import NavLink from "./navLink";
import Button from "./button";
import { useRouter } from "next/router";
import DashLink from "./dashLink";
import Notifications from "../dashboard/notifications";
import Help from "../dashboard/help";
import AccountWidget from "../dashboard/accountWidget";
import useAppSelector from "../../hooks/useAppSelector";
import AuthWatcher from "../../utils/authWatcher";
// import StateWatcher from "../../utils/stateWatcher";

type _props = {
  children: React.ReactNode;
};

const Header = (props: _props) => {
  const appStore = useAppSelector((store) => {
    return store.app;
  });

  const authState = appStore.auth;

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(authState);
  const [showNav, setShowNav] = useState<boolean>(false);
  const router = useRouter();

  const navHandler = (e: React.MouseEvent) => {
    setShowNav((prevState) => {
      return !prevState;
    });
  };

  //Controls nav behavior on mobile - navStateOpen && shownav -hiddem initially
  //show on mobile hidden md:show
  const ResponsiveDiv = tw.div`justify-between w-full hidden items-center md:flex`;

  interface ContainerProps {
    hasBg?: string;
  }

  const Container = styled.div(({ hasBg }: ContainerProps) => [
    tw`flex w-full`, // Add base styles first
    hasBg && tw`bg-black`, // Then add conditional styles
  ]);

  const logged: JSX.Element = (
    <>
      <div tw="md:hidden w-full flex justify-end">
        <MenuButton onClick={navHandler} />
      </div>
      <ResponsiveDiv>
        <div tw="flex gap-2">
          <DashLink href="/app">Dashboard</DashLink>
          <DashLink href="/app/jobs">Jobs</DashLink>
          <DashLink href="/app/settings">Settings</DashLink>
        </div>
        <div tw="flex gap-7">
          <div tw="flex gap-2 items-center">
            <Notifications />
            <Help />
          </div>
          <AccountWidget />
        </div>
      </ResponsiveDiv>
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
            router.push(authState ? "/app" : "/auth/register");
          }}
        >
          {authState ? "My Account" : "Try it out"}
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
