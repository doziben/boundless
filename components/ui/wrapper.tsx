import styled from "@emotion/styled";
import tw from "twin.macro";

type _props = {
  children: React.ReactNode;
  ignoreMargin?: boolean;
};

interface _styled {
  ignoreMargin?: boolean;
}

const StyledSection = styled.section(({ ignoreMargin }: _styled) => [
  tw`max-w-7xl mx-auto`,
  ignoreMargin ? tw`px-0 md:(px-[6%])` : tw`px-[6%]`,
]);

const Wrapper = (props: _props) => {
  return (
    <main>
      <StyledSection ignoreMargin={props.ignoreMargin}>
        {props.children}
      </StyledSection>
    </main>
  );
};

export default Wrapper;
