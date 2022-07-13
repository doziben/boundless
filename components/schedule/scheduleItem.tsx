import tw from "twin.macro";
import UserIcon from "../icons/userIcon";
import OptionsMenu from "../ui/optionsMenu";

const StyledDiv = tw.div`flex w-full py-3 rounded-xl border`;
const ParentDiv = tw.div`border w-full border-l-pry border-b-0 border-r-0 border-t-0  border-l-2 px-3 flex justify-between items-center`;
const Flex = tw.div`flex gap-2 items-center`;
export interface _scheduleProps {
  title: string;
  invite: string;
  date: Date;
}

const ScheduleItem = (props: _scheduleProps) => {
  const today = props.date.toDateString() === new Date().toDateString();
  const time = props.date.toLocaleTimeString();
  const date = today ? "Today" : props.date.toDateString();

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

export default ScheduleItem;
