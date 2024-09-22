import React from "react";
import { twMerge } from "tailwind-merge";

interface RowProps {
  pass: string;
  description: string;
  active?: boolean;
}

export function Row({ pass, description, active = false }: RowProps) {
  return (
    <li className="flex items-center gap-4 w-[200px]">
      <div
        className={twMerge(
          " w-8 h-8 rounded-full flex justify-center items-center font-[family-name:var(--font-Ubuntu-Bold)] leading-none  border border-spacing-1",
          `${
            active
              ? "border-cyan-100 bg-cyan-100 text-blue-950"
              : "text-zinc-50 border-zinc-50"
          }`
        )}>
        {pass}
      </div>
      <div className="uppercase flex flex-col leading-none">
        <span className="text-zinc-400 text-xs font-[family-name:var(--font-Ubuntu-Medium)] leading-none">
          Step {pass}
        </span>
        <p className="text-zinc-100 font-[family-name:var(--font-Ubuntu-Bold)] text-sm">
          {description}
        </p>
      </div>
    </li>
  );
}
