import tw from "twin.macro";
interface _props {
  jobsPosted: number;
  openings: number;
  hires: number;
}

const CardTitle = tw.h3`text-lg font-bold`;
const Value = tw.h2`text-xl font-bold`;
const ValueTitle = tw.p`text-sm text-sec`;
const StyledDiv = tw.div`flex w-full justify-between mt-4 items-center p-3 rounded-xl border border-[#d5d5d5]`;

const JobStats = (props: _props) => {
  let values = [
    { title: "Jobs", value: props.jobsPosted },
    { title: "Openings", value: props.openings },
    { title: "Hires", value: props.hires },
  ];

  const stats = values.map((value) => (
    <div key={value.title}>
      <Value>{value.value}</Value>
      <ValueTitle>{value.title}</ValueTitle>
    </div>
  ));

  return (
    <>
      <CardTitle>Job Stats</CardTitle>
      <StyledDiv>{stats}</StyledDiv>
    </>
  );
};

export default JobStats;
