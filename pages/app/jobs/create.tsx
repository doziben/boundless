//Portal modals to a main div after successfully
//creating the job and route the user to app/jobs

import styled from "@emotion/styled";
import { NextPage } from "next";
import { _tabState } from ".";
import PageTitle from "../../../components/dashboard/pageTitle";
import AppWrapper from "../../../components/ui/appWrapper";
import { Card } from "../../../components/ui/card";
import useTabs from "../../../hooks/useTabs";
import tw from "twin.macro";

const CreateJob: NextPage = () => {
  const extraHandlers = { setA: () => {}, setB: () => {}, setC: () => {} };
  const { tabState, stateFunction } = useTabs();
  const [{ id, state }] = tabState;

  const Center = tw.section`flex flex-col w-full items-center justify-center`;

  return (
    <>
      <PageTitle title="Create Job" />
      <AppWrapper tw="">
        <Center>
          <Card type="xl">
            {
              // Render forms
            }
          </Card>
        </Center>
      </AppWrapper>
    </>
  );
};

export default CreateJob;
