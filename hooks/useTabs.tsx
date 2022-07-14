// A hook for managing tabs states and contents with react

import { useState } from "react";
import { _tabState } from "../pages/app/jobs";

//How it Works
//I have the different state A,B,C

interface useTabProps {
  extraHandlers?: { A: () => void; B: () => void; C: () => void };
}

const useTabs = (extras?: useTabProps) => {
  const initialState: _tabState[] = [{ id: "A", state: true }];

  const [tabState, setTabState] = useState<_tabState[]>(initialState);

  //Extrahandlers
  const extraFn = extras && extras.extraHandlers;
  const A = extraFn?.A;
  const B = extraFn?.B;
  const C = extraFn?.C;

  //Optional setter function for when any of these states are
  //active (optional)
  extraFn &&
    tabState.map(
      (tab) => (
        tab.id === "A" && tab.state && A && A(),
        tab.id === "B" && tab.state && B && B(),
        tab.id === "C" && tab.state && C && C()
      )
    );

  //State setter function definition
  const sampleState = tabState[0];
  const stateFunction = (id: typeof sampleState.id) => {
    setTabState(() => {
      return [{ id: id, state: true }];
    });
  };

  return { tabState, stateFunction };
};

export default useTabs;
