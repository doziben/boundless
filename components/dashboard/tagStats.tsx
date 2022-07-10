import JobTag from "../job/jobTag";
import tw from "twin.macro";

interface _props {
  values: string[];
}

//STYLES
const StatTitle = tw.h3`text-lg font-bold`;
const StyledDiv = tw.div`mt-4`;
const StatWrapper = tw(StyledDiv)``;

const TagStats = (props: _props) => {
  return (
    <>
      <StatTitle>Tags</StatTitle>
      <StatWrapper>{/* Map values into jobtag items */}</StatWrapper>
    </>
  );
};

export default TagStats;
