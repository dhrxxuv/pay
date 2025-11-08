import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CounterState {
  value: number;
  status: "idle" | "loading";
}


const initialState: CounterState = {
  value: 0,
  status: "idle",
};


const counterSlice = createSlice({
  name: "counter", 
  initialState,
  reducers: {
    // Synchronous actions
    increment: (state) => {
      state.value += 1; // Redux Toolkit uses Immer, so we can "mutate" state
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    setStatus: (state, action: PayloadAction<"idle" | "loading">) => {
      state.status = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset, setStatus } =
  counterSlice.actions;


export default counterSlice.reducer;
