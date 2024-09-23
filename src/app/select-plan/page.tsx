import { InfoPage } from "@/components/info-page";
import { PlanForm } from "@/components/plan-form";

export default function SelectPlan() {
  return (
    <>
      <InfoPage
        description=" You have the option of monthly or yearly billing."
        title="Select your plan"
      />

      <PlanForm />      
    </>
  );
}
