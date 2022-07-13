import tw from "twin.macro";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import SelectMenu from "../ui/selectMenu";

const data = [
  {
    name: "J",
    hires: 4000,
    amt: 2400,
  },
  {
    name: "F",
    hires: 3000,
    amt: 2210,
  },
  {
    name: "M",
    hires: 2000,
    amt: 2290,
  },
  {
    name: "A",
    hires: 2780,
    amt: 2000,
  },
  {
    name: "M",
    hires: 1890,
    amt: 2181,
  },
  {
    name: "J",
    hires: 2390,
    amt: 2500,
  },
  {
    name: "J",
    hires: 3490,
    amt: 2100,
  },

  {
    name: "A",
    hires: 3490,
    amt: 4000,
  },
  {
    name: "S",
    hires: 2390,
    amt: 2500,
  },
  {
    name: "O",
    hires: 1890,
    amt: 2181,
  },
  {
    name: "N",
    hires: 2000,
    amt: 2290,
  },
  {
    name: "D",
    hires: 2780,
    amt: 2000,
  },
];

//STYLES
const StatTitle = tw.h3`text-lg font-bold`;
const StyledDiv = tw.div`mt-4 w-full h-[240px]`;
const StatHeader = tw.div`flex w-full justify-between items-center`;

const HiresStats = () => {
  return (
    <>
      <StatHeader>
        <StatTitle>Hires per Month</StatTitle>
        <SelectMenu title="This year" />
      </StatHeader>

      <StyledDiv>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="hires" fill="#F1B980" radius={[100, 100, 0, 0]} />
            <XAxis dataKey="name" />
            {/* <YAxis dataKey="amt" /> */}
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </StyledDiv>
    </>
  );
};

export default HiresStats;
