import tw from "twin.macro";
interface _props {
  //values : _jobProp []
}

//STYLES
const StatTitle = tw.h3`text-lg font-bold`;
const StyledDiv = tw.div`mt-4`;
const StatHeader = tw.div`flex w-full justify-between items-center`;
const StatWrapper = tw(StyledDiv)`flex flex-col gap-2 w-full`;

const OpenJobStats = (props: _props) => {
  return (
    <>
      <StatHeader>
        <StatTitle>Open Jobs</StatTitle>
      </StatHeader>
      <StatWrapper>
        {/* Map prop values into here as job elements */}
      </StatWrapper>
    </>
  );
};

export default OpenJobStats
