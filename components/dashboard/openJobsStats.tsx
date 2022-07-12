import tw from "twin.macro";
import { jobs } from "../../utils/dummy-data";
import JobItem, { _jobProps } from "../job/jobItem";
interface _props {
  values: _jobProps[];
}

//STYLES
const StatTitle = tw.h3`text-lg font-bold`;
const StyledDiv = tw.div`mt-4`;
const StatHeader = tw.div`flex w-full justify-between items-center`;
const StatWrapper = tw(StyledDiv)`flex flex-col gap-3 w-full`;

const OpenJobStats = (props: _props) => {
  let values = props.values.filter((job) => {
    return job.status === "Open";
  });
  let OpenJobs = values.map((job) => (
    <JobItem
      applicants={job.applicants}
      dateCreated={job.dateCreated}
      status={job.status}
      tags={job.tags}
      title={job.title}
      id={job.id}
      key={job.id}
    />
  ));

  return (
    <>
      <StatHeader>
        <StatTitle>Open Jobs</StatTitle>
      </StatHeader>
      <StatWrapper>{OpenJobs}</StatWrapper>
    </>
  );
};

export default OpenJobStats;
