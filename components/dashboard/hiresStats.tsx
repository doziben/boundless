import tw from "twin.macro";

//STYLES
const StatTitle = tw.h3`text-lg font-bold`;
const StyledDiv = tw.div`mt-4`;
const StatHeader = tw.div`flex w-full justify-between items-center`;

const HiresStats = () => {
  return (
    <>
      <StatHeader>
        <StatTitle>Hires per Month</StatTitle>
        {/* dropdown component */}
      </StatHeader>

      <StyledDiv>{/* Will contain chart */}</StyledDiv>
    </>
  );
};

export default HiresStats;
