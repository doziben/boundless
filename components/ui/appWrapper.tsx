//Wraps the app elements
import Wrapper from "./wrapper";
import React from "react";
import tw from "twin.macro";

interface _props {
  children: React.ReactNode;
  ignoreMargin?: boolean;
}
const AppWrapper = (props: _props) => {
  return (
    <div tw="bg-[#fafafa] min-h-[100vh] w-full">
      <Wrapper ignoreMargin={props.ignoreMargin}>
        <div tw="py-6">{props.children}</div>
      </Wrapper>
    </div>
  );
};

export default AppWrapper;
