import { NextPage } from "next";
import { useRouter } from "next/router";
import headerCtx from "../../utils/headerCtx";
import { useContext, useEffect } from "react";
import AuthWatcher from "../../utils/authWatcher";
import tw from "twin.macro";
import useAppSelector from "../../hooks/useAppSelector";
import AppWrapper from "../../components/ui/appWrapper";
import PageTitle from "../../components/dashboard/pageTitle";
import JobStats from "../../components/dashboard/jobStats";
import UpcomingStats from "../../components/dashboard/upcomingStats";
import { _scheduleProps } from "../../components/schedule/scheduleItem";
import HiresStats from "../../components/dashboard/hiresStats";
import OpenJobStats from "../../components/dashboard/openJobsStats";
import TagStats from "../../components/dashboard/tagStats";

//STYLES
const CardDiv = tw.div`bg-white shadow-xl rounded-xl p-6`;
const JobStatDiv = tw(CardDiv)`flex-[1]`;
const ScheduleDiv = tw(CardDiv)`flex-[2]`;

const HiresDiv = tw(CardDiv)`flex-[3]`;
const TagsDiv = tw(CardDiv)`flex-[1]`;

const Flex = tw.div`flex flex-col gap-4 md:(flex-row justify-between)`;

const schedules: _scheduleProps[] = [
  {
    date: new Date("7/10/2022, 1:18:03 PM"),
    invite: "Carl Max",
    title: "React Native Developer",
  },
];
const App: NextPage = () => {
  const router = useRouter();
  const hCtx = useContext(headerCtx);
  const appStore = useAppSelector((store) => {
    return store.app;
  });

  AuthWatcher(
    () => {
      hCtx.setIsLoggedIn(true);

      // Callfunction to get userdata, set userauth to true
      //set loading to false
      // ...
    },
    () => {
      hCtx.setIsLoggedIn(false);
      router.push("/");
    }
  );

  return (
    <>
      {/* if auth from appSlice isn't true, showloading state */}
      <PageTitle title="Dashboard" button="Create +" />
      <AppWrapper>
        <div tw="flex w-full flex-col gap-4">
          <Flex>
            <JobStatDiv>
              <JobStats jobsPosted={28} hires={14} openings={3} />
            </JobStatDiv>
            <ScheduleDiv>
              <UpcomingStats values={schedules} />
            </ScheduleDiv>
          </Flex>

          <Flex>
            <HiresDiv>
              <HiresStats />
            </HiresDiv>
            <TagsDiv>
              <TagStats values={[]} />
            </TagsDiv>
          </Flex>

          <CardDiv>
            <OpenJobStats />
          </CardDiv>
        </div>
      </AppWrapper>
    </>
  );
};

export default App;
