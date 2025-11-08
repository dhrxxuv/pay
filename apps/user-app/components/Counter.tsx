"use client";

import {
  useAppDispatch,
  useAppSelector,
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "@repo/store";
import { useState } from "react";

export default function Counter() {
  // Select state from Redux store
  const count = useAppSelector((state) => state.counter.value);
  const status = useAppSelector((state) => state.counter.status);
  
  // Get dispatch function
  const dispatch = useAppDispatch();
  
  // Local state for input
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="p-8 max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Counter Example</h2>
        
        {/* Display Count */}
        <div className="text-center mb-6">
          <p className="text-6xl font-bold text-blue-600">{count}</p>
          <p className="text-sm text-gray-500 mt-2">Status: {status}</p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(increment())}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Decrement
            </button>
          </div>

          <div className="flex gap-2">
            <input
              type="number"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
              className="flex-1 border rounded px-4 py-2"
            />
            <button
              onClick={() =>
                dispatch(incrementByAmount(Number(incrementAmount) || 0))
              }
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add Amount
            </button>
          </div>

          <button
            onClick={() => dispatch(reset())}
            className="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}