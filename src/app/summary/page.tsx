import { InfoPage } from "@/components/info-page";
import { StepNextBack } from "@/components/step-next-back";
import { SummaryDetails } from "@/components/summary-details";

export default function Summary() {
  return (
    <>
      <InfoPage
        description="Double-check everything looks OK before confirming."
        title="Finishing up"
      />

      <div className="flex flex-col justify-between h-full">
        <SummaryDetails />

        <StepNextBack
          next="/complete"
          back="/add-ons"
          textNextButton="Confirm"
        />
      </div>
    </>
  );
}
