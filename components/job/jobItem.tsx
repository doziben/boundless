import styled from "@emotion/styled";
import tw from "twin.macro";
import JobIcon from "../icons/jobIcon";
import OptionsMenu from "../ui/optionsMenu";
import JobTag from "./jobTag";

export interface _jobProps {
  id: string;
  title: string;
  applicants: number;
  status: "Open" | "Closed";
  tags: string[];
  dateCreated: Date;
}

//STYLES
const StyledDiv = tw.div`flex w-full py-3 rounded-xl border border-[#d5d5d5]`;
const Flex = tw.div`flex gap-2 items-center`;
const TagsFlex = tw.div`hidden md:(flex gap-2 items-center)`;
const ParentDiv = styled.div(({ jobOpen }: jobStatus) => [
  tw`border w-full border-b-0 border-r-0 border-t-0  border-l-2 px-3 flex justify-between items-center`,
  jobOpen ? tw`border-l-blue-500` : tw`border-l-pry`,
]);

interface jobStatus {
  jobOpen: boolean;
}

const JobItem = (props: _jobProps) => {
  const today = props.dateCreated.toDateString() === new Date().toDateString();
  const time = props.dateCreated.toLocaleTimeString();
  const date = today ? "Today" : props.dateCreated.toDateString();
  const jobStatus = props.status === "Open";
  let tags = props.tags.map((tag) => <JobTag key={tag} title={tag} />);

  return (
    <StyledDiv>
      <ParentDiv jobOpen={jobStatus}>
        <Flex>
          <JobIcon state={props.status} />
          <div>
            <p>{props.title}</p>
            <p tw="text-sm text-sec">{date}</p>
          </div>
        </Flex>

        <TagsFlex>{tags}</TagsFlex>

        <Flex>
          <p tw="text-sm text-blue-500">{props.applicants} Applicants</p>
          <OptionsMenu>{}</OptionsMenu>
        </Flex>
      </ParentDiv>
    </StyledDiv>
  );
};

export default JobItem;
