"use client";

// Faker DataBase
import { addOns } from "@/data";

// Components
import { AddOnCard } from "./add-on-card";
import { StepNextBack } from "./step-next-back";
import { useAppSelector } from "@/hooks";

export function AddOnsForm() {
  const { duration } = useAppSelector((state) => state.planReducer);
  return (
    <form className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        {addOns.map((addOn) => {
          return (
            <AddOnCard
              key={addOn.title}
              description={addOn.description}
              title={addOn.title}
              price={addOn.price[duration]}
              duration={duration}
            />
          );
        })}
      </div>

      <StepNextBack next="/summary" back="/select-plan" />
    </form>
  );
}
