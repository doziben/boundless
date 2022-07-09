//job state will be queried from the link
//e.g jobs/[jobId]/?state=A

import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const JobId: NextPage = () => {
  const router = useRouter();

  const { jobId } = router.query;

  useEffect(() => {
    //Get Job data with react Query
    console.log(jobId);
  }, [jobId]);

  return <div></div>;
};
