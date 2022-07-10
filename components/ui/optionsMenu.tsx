import { useState } from "react";
import OptionsIcon from "../icons/optionsIcon";
import tw from "twin.macro";

interface _props {
  children: React.ReactNode;
}

const OptionsMenu = (props: _props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div tw="relative">
      <button
        onClick={() => {
          setMenuOpen((prevState) => {
            return !prevState;
          });
        }}
      >
        <OptionsIcon />
      </button>
      {menuOpen && (
        <div tw="absolute flex flex-col p-3 bg-white rounded-xl">
          {props.children}
        </div>
      )}
    </div>
  );
};

export default OptionsMenu;
