// A hook for managing tabs states and contents with react

import { useState } from "react";
import { _tabState } from "../pages/app/jobs";

//How it Works
//I have the different state A,B,C

interface useTabProps {
  extraHandlers?: { A: () => void; B: () => void; C: () => void };
}

const useTabs = ({ extraHandlers }: useTabProps) => {
  const initialState: _tabState[] = [{ id: "A", state: true }];

  const [tabState, setTabState] = useState<_tabState[]>(initialState);
  const falseStates: _tabState[] = [
    { id: "A", state: false },
    { id: "B", state: false },
    { id: "C", state: false },
  ];

  //Extrahandlers destructuring
  const { A, B, C } = extraHandlers!;

  //Optional setter function for when any of these states are
  //active (optional)
  extraHandlers &&
    tabState.map(
      (tab) => (
        tab.id === "A" && tab.state && A(),
        tab.id === "B" && tab.state && B(),
        tab.id === "C" && tab.state && C()
      )
    );

  //State setter function definition
  const sampleState = tabState[0];
  const stateFunction = (id: typeof sampleState.id) => {
    return setTabState(() => {
      return [...falseStates, { id: id, state: true }];
    });
  };

  //Pass in ids into StateSetter function for export
  const SetA = stateFunction("A");
  const SetB = stateFunction("B");
  const SetC = stateFunction("C");

  const stateSetters = { SetA, SetB, SetC };
  return [tabState, stateSetters];
};

export default useTabs;
