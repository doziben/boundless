import styled from "@emotion/styled";
import { SetStateAction } from "react";
import tw from "twin.macro";
import { _tabState } from "../../pages/app/jobs";

export interface _tabProps {
  stateFn: React.Dispatch<SetStateAction<_tabState[]>>;
  id: "A" | "B" | "C";
  title: string;
  active: () => boolean;
}

type _styled = { active?: boolean };

//STYLES
const StyledBtn = styled.button(({ active }: _styled) => [
  tw`p-2 border font-bold border-l-0 border-t-0 border-r-0 border-b-2 hover:(text-pry)`,
  active ? tw`text-pry border-b-blue-500` : tw`text-sec border-b-0`,
]);

const falseStates: _tabState[] = [
  { id: "A", state: false },
  { id: "B", state: false },
  { id: "C", state: false },
];

const TabItem = (props: _tabProps) => {
  return (
    <StyledBtn
      active={props.active()}
      onClick={() => {
        props.stateFn(() => {
          return [...falseStates, { id: props.id, state: true }];
        });
      }}
    >
      {props.title}
    </StyledBtn>
  );
};

export default TabItem;
