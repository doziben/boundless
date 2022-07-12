import { useRef, useState } from "react";
import SearchIcon from "../icons/searchIcon";
import tw from "twin.macro";
import styled from "@emotion/styled";

interface _props {
  placeholder: string;
  onSearch: (value: string) => void;
}

interface styles {
  active: boolean;
}

//STYLES
const StyledForm = styled.form(({ active }: styles) => [
  tw`flex rounded-2xl border px-3 py-2 max-w-[18rem] border-[#d5d5d5] `,
  active && tw`border-blue-500`,
]);
const SearchBar = (props: _props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const value = inputRef.current?.value && inputRef.current?.value;

  return (
    <StyledForm
      active={isActive}
      onSubmit={() => {
        props.onSearch(value!);
      }}
    >
      <input
        tw="outline-none"
        onChange={() => {}}
        type="text"
        placeholder={props.placeholder}
        ref={inputRef}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </StyledForm>
  );
};

export default SearchBar;
