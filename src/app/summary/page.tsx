import { InfoPage } from "@/components/info-page";
import { StepNextBack } from "@/components/step-next-back";
import { SummaryPlanRow } from "@/components/summary-plan-row";

export default function Summary() {
  return (
    <>
      <InfoPage
        description="Double-check everything looks OK before confirming."
        title="Finishing up"
      />

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 bg-slate-100 rounded-lg p-4">
            <div className="flex justify-between leading-none">
              <div>
                <h3 className="text-blue-950 font-[family-name:var(--font-Ubuntu-Bold)]">
                  Arcade (Monthly)
                </h3>
                <span className="text-xs font-[family-name:var(--font-Ubuntu-Medium)] text-zinc-500 underline">
                  Change
                </span>
              </div>
              <span className="text-blue-950 font-[family-name:var(--font-Ubuntu-Bold)]">
                $9/mo
              </span>
            </div>

            <div className="bg-zinc-200 h-px w-full" />

            <ul className="flex flex-col gap-2.5">
              <SummaryPlanRow plan="Online service" price={1} time="mo" />

              <SummaryPlanRow plan="Larger storage" price={2} time="mo" />
            </ul>
          </div>

          <div className="flex justify-between p-4">
            <h3 className="text-xs font-[family-name:var(--font-Ubuntu-Medium)] text-zinc-500">
              Total (per month)
            </h3>
            <span className="text-blue-900 font-[family-name:var(--font-Ubuntu-Bold)]">
              +$12/mo
            </span>
          </div>
        </div>
        <StepNextBack
          next="/complete"
          back="/add-ons"
          textNextButton="Confirm"
        />
      </div>
    </>
  );
}
