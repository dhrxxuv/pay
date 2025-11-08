"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="relative group px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 rounded-lg overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
      <span className="relative">{children}</span>
    </button>
  );
};