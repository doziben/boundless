import Wrapper from "../ui/wrapper";
import tw from "twin.macro";
import Button from "../ui/button";
import { MouseEventHandler } from "react";

type _props = {
  title: string;
  children?: React.ReactNode;
  button?: string;
  buttonHandler?: React.MouseEventHandler;
};

const StyledDiv = tw.div`flex justify-between items-center`;

const PageTitle = (props: _props) => {
  return (
    <div tw="bg-white w-full py-8">
      <Wrapper>
        <StyledDiv>
          <h1 tw="text-2xl lg:(text-4xl)">{props.title}</h1>
          {props.button && (
            <Button onClick={props.buttonHandler!} style="primary">
              {props.button}
            </Button>
          )}
        </StyledDiv>
        {props.children && props.children}
      </Wrapper>
    </div>
  );
};

export default PageTitle;
