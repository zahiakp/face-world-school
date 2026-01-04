"use client";

interface Option {
  label: string;
  value: string;
}

interface FilterSelectProps {
  placeHolder: string;
  options: Option[];
  value: string | null;
  onchange: (value: string) => void;
}

export const FilterSelect = ({
  placeHolder,
  options,
  value,
  onchange,
}: FilterSelectProps) => {
  return (
    <div className="relative w-full">
      <select
        value={value || ""}
        onChange={(e) => onchange(e.target.value)}
        className="w-full p-2.5 px-4 bg-white border border-zinc-200 rounded-lg outline-none focus:border-green transition-all text-zinc-900 appearance-none"
      >
        <option value="" disabled>
          {placeHolder}
        </option>
        <option value="">All</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </div>
    </div>
  );
};
