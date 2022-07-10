import tw from "twin.macro";

const StatTitle = tw.h3`text-lg font-bold`;
const Invite = tw.p`text-sm text-sec`;
const StyledDiv = tw.div`flex w-full justify-between mt-4 items-center p-3 rounded-xl border border-[#d5d5d5]`;

type _schedule = {
  title: string;
  invite: string;
  time: string;
  date: Date;
};

interface _props {
  values: _schedule[];
}

const UpcomingStats = (props: _props) => {
  return (
    <>
      <StatTitle>Upcoming</StatTitle>
      {/* map data to this place using a scheduleItem component */}
    </>
  );
};

export default UpcomingStats;
