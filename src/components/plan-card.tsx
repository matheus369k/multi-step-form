import React from "react";

import { PlanIconAdvanced } from "@/components/plan-icon-advanced";
import { PlanIconArcade } from "@/components/plan-icon-arcade";
import { PlanIconPro } from "@/components/plan-icon-pro";

interface PlanCardProps {
  plan: "Arcade" | "Advanced" | "Pro";
  price: string;
  time: string;
}

export function PlanCard({plan, price, time}: PlanCardProps) {
    return (
      <div className="relative flex-1 p-4 flex flex-col gap-10 outline outline-1 outline-zinc-300 rounded-lg checked:outline-blue-900">
        {plan === "Arcade" && <PlanIconArcade />}
        {plan === "Advanced" && <PlanIconAdvanced />}
        {plan === "Pro" && <PlanIconPro />}

        <div>
          <h2 className="text-blue-950 text-sm text-left font-[family-name:var(--font-Ubuntu-Bold)] capitalize">
            {plan}
          </h2>
          <span className="text-xs text-zinc-400 font-[family-name:var(--font-Ubuntu-Medium)]">
            ${price}/{time}
          </span>
        </div>
        <input
          type="checkbox"
          name="plan"
          defaultChecked
          className="edite-select"
        />
      </div>
    );
}