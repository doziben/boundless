import tw from "twin.macro";
import OptionsMenu from "../ui/optionsMenu";

export interface _jobProps {}

const StyledDiv = tw.div`flex w-full py-3 rounded-xl border border-[#d5d5d5]`;
const ParentDiv = tw.div`border w-full border-l-pry border-b-0 border-r-0 border-t-0  border-l-2 px-3 flex justify-between items-center`;
const Flex = tw.div`flex gap-2 items-center`;

const JobItem = (props: _jobProps) => {
  return (
    <StyledDiv>
      <ParentDiv>
        <Flex>
          <UserIcon />
          <div>
            <p>{props.title}</p>
            <p tw="text-sm text-sec">{props.invite}</p>
          </div>
        </Flex>

        <Flex>
          <div tw="text-right">
            <p tw="text-sec">{time}</p>
            <p tw="text-sm text-blue-500">{date}</p>
          </div>
          <OptionsMenu>{}</OptionsMenu>
        </Flex>
      </ParentDiv>
    </StyledDiv>
  );
};

export default JobItem;
