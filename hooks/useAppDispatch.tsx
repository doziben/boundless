import { useDispatch } from "react-redux";
import { AppDispatch } from "../utils/store";

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
