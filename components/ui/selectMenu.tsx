import CaretIcon from "../icons/caretIcon";
import tw from "twin.macro";

interface _props {
  title: string;
}

const SelectMenu = (props: _props) => {
  return (
    <div tw="flex gap-2 items-center rounded-2xl px-3 py-2 border">
      <p tw="text-sm">{props.title}</p> <CaretIcon />
    </div>
  );
};

export default SelectMenu;
