import { NextPage } from "next";
import { useRouter } from "next/router";
import headerCtx from "../../utils/headerCtx";
import { useContext } from "react";
import AuthWatcher from "../../utils/authWatcher";
import tw from "twin.macro";
import useAppSelector from "../../hooks/useAppSelector";
import AppWrapper from "../../components/ui/appWrapper";
import PageTitle from "../../components/dashboard/pageTitle";
import JobStats from "../../components/dashboard/jobStats";
import UpcomingStats from "../../components/dashboard/upcomingStats";
import HiresStats from "../../components/dashboard/hiresStats";
import OpenJobStats from "../../components/dashboard/openJobsStats";
import TagStats from "../../components/dashboard/tagStats";
import { jobs, schedules, tagStats } from "../../utils/dummy-data";

//STYLES
const CardDiv = tw.div`bg-white rounded-xl p-6 border`;
const JobStatDiv = tw(CardDiv)`flex-[1]`;
const ScheduleDiv = tw(CardDiv)`flex-[2]`;

const HiresDiv = tw(CardDiv)`flex-[3] flex flex-col justify-between`;
const TagsDiv = tw(CardDiv)`flex-[1]`;

const Flex = tw.div`flex flex-col gap-4 md:(flex-row justify-between)`;

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

  const createJobHandler: React.MouseEventHandler = () => {
    router.push("/app/jobs/create");
  };

  return (
    <>
      {/* if auth from appSlice isn't true, showloading state with reach suspense <React.Suspense fallback={<Spinner size="large" />}>
  <ArtistDetails id={this.props.id}/>
  <ArtistTopTracks />
  <ArtistAlbums id={this.props.id}/>
</React.Suspense> */}
      <PageTitle
        title="Dashboard"
        button="Create +"
        buttonHandler={createJobHandler}
      />
      <AppWrapper ignoreMargin>
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
              <TagStats values={tagStats} />
            </TagsDiv>
          </Flex>

          <CardDiv>
            <OpenJobStats values={jobs} />
          </CardDiv>
        </div>
      </AppWrapper>
    </>
  );
};

export default App;
