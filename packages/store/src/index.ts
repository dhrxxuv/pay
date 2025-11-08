// Store
export { makeStore } from "./store";
export type { AppStore, RootState, AppDispatch } from "./store";

// Hooks
export { useAppDispatch, useAppSelector, useAppStore } from "./hooks";

// Counter Slice
export { default as counterReducer } from "./slices/counterSlice";
export {
  increment,
  decrement,
  incrementByAmount,
  reset,
  setStatus,
} from "./slices/counterSlice";

// Re-export Provider
export { Provider } from "react-redux";