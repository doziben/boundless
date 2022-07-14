import styled from "@emotion/styled";
import tw from "twin.macro";

interface _props {
  title: string;
  description: string;
  icon: JSX.Element;
  current: boolean;
  done: boolean;
}

//STYLES
interface styles {
  done: boolean;
  current: boolean;
}

const IconWrapper = styled.div(({ current, done }: styles) => [
  tw``,
  done && tw``,
  current && tw``,
]);

const StyledDiv = tw.div``;
const TitleText = tw.h2``;
const DescText = tw.p``;

const BreadCrumbItem = (props: _props) => {
  return (
    <StyledDiv>
      <IconWrapper current={props.current} done={props.done}>
        {props.icon}
      </IconWrapper>
      <TitleText>{props.title}</TitleText>
      <DescText>{props.title}</DescText>
    </StyledDiv>
  );
};

export default BreadCrumbItem;
