import React from "react";

type _ctx = {
  isLoggedIn: boolean;
  setIsLoggedIn: (state: boolean) => void;
};

const headerCtx = React.createContext<_ctx>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export default headerCtx;
