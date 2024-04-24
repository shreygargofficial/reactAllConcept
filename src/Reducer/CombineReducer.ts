import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";

export const myCombineReducers  = combineReducers({counterReducer : CounterReducer});
export type RootState = ReturnType<typeof myCombineReducers>;