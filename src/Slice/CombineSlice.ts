import { combineSlices } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";

export const mySlice = combineSlices(counterSlice);
export type RootStateToolKit = ReturnType<typeof mySlice>;