import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../utils/store"

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
