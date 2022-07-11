import JobTag from "../job/jobTag";
import tw from "twin.macro";

interface _props {
  values: string[];
}

//STYLES
const StatTitle = tw.h3`text-lg font-bold`;
const StyledDiv = tw.div`mt-4`;
const StatWrapper = tw(StyledDiv)`flex gap-2 flex-wrap`;

const TagStats = (props: _props) => {
  const tags = props.values.map((value) => (
    <JobTag key={value} title={value} />
  ));

  return (
    <>
      <StatTitle>Tags</StatTitle>
      <StatWrapper>{tags}</StatWrapper>
    </>
  );
};

export default TagStats;
