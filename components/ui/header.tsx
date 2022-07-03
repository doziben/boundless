import Link from "next/link";
import { useState } from "react";
import headerCtx from "../../utils/headerCtx";
import tw from "twin.macro";

type _props = {
  children: React.ReactNode;
};

const logged: JSX.Element = (
  <>
    <div>
      <Link href="/app/">Dashboard</Link>
      <Link href="/app/jobs">Jobs</Link>
      <Link href="/app/settings">Settings</Link>
    </div>
    <div>icons usercard</div>
  </>
);

const notLogged: JSX.Element = (
  <>
    <div>
      <Link href="/">Be Boundless</Link>
      <Link href="/explore">Explore</Link>
    </div>
    <button>Try it out</button>
  </>
);

const Header = (props: _props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <headerCtx.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
      }}
    >
      <header tw="w-full p-4">
        <div tw="max-w-7xl mx-[6%]">
          <div>Logo</div>
          <nav>{isLoggedIn ? logged : notLogged}</nav>
        </div>
      </header>
      {props.children}
    </headerCtx.Provider>
  );
};

export default Header;
