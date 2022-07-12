import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PageTitle from "../../../components/dashboard/pageTitle";
import JobItem, { _jobProps } from "../../../components/job/jobItem";
import AppWrapper from "../../../components/ui/appWrapper";
import { jobs } from "../../../utils/dummy-data";
import { Card, CardHeading } from "../../../components/ui/card";
import tw from "twin.macro";
import styled from "@emotion/styled";
import TabItem, { _tabProps } from "../../../components/ui/tabItem";
import SearchBar from "../../../components/dashboard/searchBar";
import SelectMenu from "../../../components/ui/selectMenu";

export interface _tabState {
  id: "A" | "B" | "C";
  state: boolean;
}

interface _styled {
  spaceBetween?: boolean;
  gap?: boolean;
  margin?: boolean;
  colMobile?: boolean;
}
//STYLES
const Flex = styled.div(({ spaceBetween, gap, margin, colMobile }: _styled) => [
  tw`flex items-center`,
  spaceBetween && tw`justify-between`,
  margin && tw`mb-8`,
  gap && tw`gap-2`,
  colMobile && tw`flex flex-col gap-4 `,
]);

const TabsDiv = tw.div`flex justify-between w-full md:(gap-4 justify-start)`;

const Jobs: NextPage = () => {
  const router = useRouter();
  const createJobHandler: React.MouseEventHandler = () => {
    router.push("/app/jobs/create");
  };

  const initialState: _tabState[] = [
    {
      id: "A",
      state: true,
    },
  ];

  const [tabState, setTabState] = useState<_tabState[]>(initialState);
  let jobTabs: _jobProps[] = jobs;
  let tabTitle: string = "All Jobs";

  let currentTab = tabState.find((tab) => {
    return tab.state === true;
  });

  const tabs: _tabProps[] = [
    {
      id: "A",
      active: function () {
        return currentTab?.id === this.id;
      },
      stateFn: setTabState,
      title: "All Jobs",
    },
    {
      id: "B",
      active: function () {
        return currentTab?.id === this.id;
      },
      stateFn: setTabState,
      title: "Open Jobs",
    },
    {
      id: "C",
      active: function () {
        return currentTab?.id === this.id;
      },
      stateFn: setTabState,
      title: "Closed Jobs",
    },
  ];

  //Could revamp into a hook later for using tabs

  tabState.map(
    (tabState) => (
      tabState.id === "B" && tabState.state
        ? ((jobTabs = jobs.filter((job) => {
            return job.status === "Open";
          })),
          (tabTitle = "Open Jobs"))
        : null,
      tabState.id === "C" && tabState.state
        ? ((jobTabs = jobs.filter((job) => {
            return job.status === "Closed";
          })),
          (tabTitle = "Closed Jobs"))
        : null
    )
  );

  return (
    <>
      <PageTitle
        title="Jobs"
        button="Create +"
        buttonHandler={createJobHandler}
      >
        <TabsDiv>
          {tabs.map((tab) => (
            <TabItem
              active={tab.active}
              id={tab.id}
              stateFn={tab.stateFn}
              title={tab.title}
              key={tab.id}
            />
          ))}
        </TabsDiv>
      </PageTitle>
      <AppWrapper ignoreMargin>
        <Card type="full">
          <Flex spaceBetween margin colMobile>
            <CardHeading>{tabTitle}</CardHeading>
            <Flex gap>
              <SelectMenu title="2022" />
              <SearchBar
                onSearch={(e) => {
                  console.log(e);
                }}
                placeholder="Search in jobs..."
              />
            </Flex>
          </Flex>

          <div tw="flex flex-col gap-5 w-full">
            {jobTabs.map((job) => (
              <JobItem
                applicants={job.applicants}
                key={job.id}
                dateCreated={job.dateCreated}
                id={job.id}
                status={job.status}
                tags={job.tags}
                title={job.title}
              />
            ))}
          </div>
        </Card>
      </AppWrapper>
    </>
  );
};

export default Jobs;
