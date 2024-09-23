"use client";

import { PlanCard } from "./plan-card";
import { StepNextBack } from "./step-next-back";
import { plans } from "@/data";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { ActionType } from "@/redux/plan/action-type";

export interface TDuration {
  duration: "mo" | "yr";
}

export interface TPlan {
  rank: "Arcade" | "Advanced" | "Pro";
  price: number;
}

export function PlanForm() {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(state => state.planReducer);

  function handleToggleDuration() {
    const ToggleDuration: unknown = selector.duration === "mo" ? "yr" : "mo";

    dispatch({
      type: ActionType.TOGGLE,
      payload: { duration: ToggleDuration } as TDuration,
    });
  }

  function handleSelectedOfPlan({ rank, price }: TPlan) {
    dispatch({
      type: ActionType.REGISTER,
      payload: { rank, price },
    });
  }

  return (
    <form
      className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          {plans.map((plan) => {
            return (
              <PlanCard
                key={plan.rank}
                handleSelectedOfPlan={handleSelectedOfPlan}
                rank={plan.rank}
                price={plan.price[selector.duration]}
                duration={selector.duration}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-5 w-max mx-auto">
          <span
            className={`text-xs text-blue-950 font-[family-name:var(--font-Ubuntu-Bold)] capitalize ${
              selector.duration === "yr" ? "text-zinc-400" : "text-blue-950"
            }`}>
            Monthly
          </span>
          <div
            onClick={handleToggleDuration}
            className="p-0.5 flex items-center w-8 h-4 border border-zinc-900 rounded-full bg-blue-950">
            <div
              className={`size-3 rounded-full bg-zinc-50 ${
                selector.duration === "mo" ? "" : "ml-auto"
              }`}></div>
          </div>
          <span
            className={`text-xs  font-[family-name:var(--font-Ubuntu-Bold)] capitalize ${
              selector.duration === "mo" ? "text-zinc-400" : "text-blue-950"
            }`}>
            Yearly
          </span>
        </div>
      </div>

      <StepNextBack next="/add-ons" back="/" />
    </form>
  );
}
