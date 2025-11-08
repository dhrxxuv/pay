"use client";

interface TextInputProps {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const TextInput = ({ label, placeholder, onChange }: TextInputProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 transition-all"
      />
    </div>
  );
};
