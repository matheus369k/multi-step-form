import { InfoPage } from "@/components/info-page";
import { PlanCard } from "@/components/plan-card";
import { StepNextBack } from "@/components/step-next-back";

export default function SelectPlan() {
  return (
    <>
      <InfoPage
        description=" You have the option of monthly or yearly billing."
        title="Select your plan"
      />

      <form className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <PlanCard plan="Arcade" price="9" time="mo" />

            <PlanCard plan="Advanced" price="12" time="mo" />

            <PlanCard plan="Pro" price="15" time="mo" />
          </div>

          <div className="flex items-center gap-5 w-max mx-auto">
            <span className="text-xs text-blue-950 font-[family-name:var(--font-Ubuntu-Bold)] capitalize">
              Monthly
            </span>
            <div className="p-0.5 flex items-center w-8 h-4 border border-zinc-900 rounded-full bg-blue-950">
              <div className="size-3 rounded-full bg-zinc-50"></div>
            </div>
            <span className="text-xs text-zinc-400 font-[family-name:var(--font-Ubuntu-Bold)] capitalize">
              Yearly
            </span>
          </div>
        </div>

        <StepNextBack next="/add-ons" back="/" />
      </form>
    </>
  );
}
