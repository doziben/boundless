import tw from "twin.macro";
import ScheduleItem, { _scheduleProps } from "../schedule/scheduleItem";

const StatTitle = tw.h3`text-lg font-bold`;
const StyledDiv = tw.div`mt-4`;

interface _props {
  values: _scheduleProps[];
}

const UpcomingStats = (props: _props) => {
  return (
    <>
      <StatTitle>Upcoming</StatTitle>
      <StyledDiv>
        {props.values.map((value) => (
          <ScheduleItem
            key={value.title}
            date={value.date}
            invite={value.invite}
            title={value.title}
          />
        ))}
      </StyledDiv>
    </>
  );
};

export default UpcomingStats;
