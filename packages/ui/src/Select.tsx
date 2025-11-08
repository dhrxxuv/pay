"use client";

export const Select = ({
  options,
  onSelect,
}: {
  onSelect: (value: string) => void;
  options: {
    key: string;
    value: string;
  }[];
}) => {
  return (
    <select
      onChange={(e) => {
        onSelect(e.target.value);
      }}
      className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 transition-all"
    >
      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  );
};