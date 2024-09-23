import React from "react";

import { PlanIconAdvanced } from "@/components/plan-icon-advanced";
import { PlanIconArcade } from "@/components/plan-icon-arcade";
import { PlanIconPro } from "@/components/plan-icon-pro";
import { TDuration, TPlan } from "./plan-form";
import { useAppSelector } from "@/hooks";

interface PlanCardProps extends TDuration, TPlan {
  handleSelectedOfPlan: ({ rank, price }: TPlan) => void;
}

export function PlanCard({
  rank,
  price,
  duration,
  handleSelectedOfPlan,
}: PlanCardProps) {
  const selector = useAppSelector((state) => state.planReducer);

  return (
    <div
      onClick={() => handleSelectedOfPlan({ rank, price })}
      className={`relative flex-1 p-4 flex flex-col gap-10 outline outline-1 rounded-lg ${
        selector.rank === rank ? "outline-blue-900" : "outline-zinc-300"
      }`}>
      {rank === "Arcade" && <PlanIconArcade />}
      {rank === "Advanced" && <PlanIconAdvanced />}
      {rank === "Pro" && <PlanIconPro />}

      <div>
        <h2 className="text-blue-950 text-sm text-left font-[family-name:var(--font-Ubuntu-Bold)] capitalize">
          {rank}
        </h2>
        <span className="text-xs text-zinc-400 font-[family-name:var(--font-Ubuntu-Medium)]">
          ${price}/{duration}
        </span>
      </div>
      <input type="checkbox" name="plan" className="edite-select" />
    </div>
  );
}
