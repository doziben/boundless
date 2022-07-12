import styled from "@emotion/styled";
import tw from "twin.macro";

type _cardSize = "xl" | "full";

interface _props {
  children: React.ReactNode;
  type: _cardSize;
}

interface _styled {
  type: _cardSize;
}

const CardHeading = tw.h2`text-xl lg:(text-2xl)`;

const Card = (props: _props) => {
  const StyledDiv = styled.div(({ type }: _styled) => [
    tw`bg-white p-6 md:(p-12) rounded-lg mt-4 shadow-xl`,
    type === "full" && tw`w-full`,
    type === "xl" && tw`max-w-[558px]`,
  ]);

  return <StyledDiv type={props.type}>{props.children}</StyledDiv>;
};

export { Card, CardHeading };
