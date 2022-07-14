//Portal modals to a main div after successfully
//creating the job and route the user to app/jobs

import { NextPage } from "next";
import { _tabState } from ".";
import PageTitle from "../../../components/dashboard/pageTitle";
import AppWrapper from "../../../components/ui/appWrapper";
import { Card } from "../../../components/ui/card";
import useTabs from "../../../hooks/useTabs";

const CreateJob: NextPage = () => {
  const extraHandlers = { setA: () => {}, setB: () => {}, setC: () => {} };
  const { tabState, stateFunction } = useTabs();
  const [{ id, state }] = tabState;

  return (
    <>
      <PageTitle title="Create Job" />
      <AppWrapper>
        <Card type="xl">
          {
            // Render forms
          }
        </Card>
      </AppWrapper>
    </>
  );
};

export default CreateJob;
