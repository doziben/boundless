import Wrapper from "../ui/wrapper";
import tw from "twin.macro";
import Button from "../ui/button";
import styled from "@emotion/styled";

type _props = {
  title: string;
  children?: React.ReactNode;
  button?: string;
  buttonHandler?: React.MouseEventHandler;
};

interface style {
  haveChild?: boolean;
}

const StyledDiv = tw.div`flex justify-between items-center`;
const ParentDiv = styled.section(({ haveChild }: style) => [
  tw`bg-white w-full `,
  haveChild ? tw`pt-8` : tw`py-8`,
]);

const PageTitle = (props: _props) => {
  return (
    <ParentDiv haveChild={props.children !== undefined}>
      <Wrapper>
        <StyledDiv>
          <h1 tw="text-2xl lg:(text-4xl)">{props.title}</h1>
          {props.button && (
            <Button onClick={props.buttonHandler!} style="primary">
              {props.button}
            </Button>
          )}
        </StyledDiv>
        {props.children && <div tw="mt-6"> {props.children}</div>}
      </Wrapper>
    </ParentDiv>
  );
};

export default PageTitle;
