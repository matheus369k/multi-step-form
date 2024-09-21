import { AddOnCard } from "@/components/add-on-card";
import { InfoPage } from "@/components/info-page";
import { StepNextBack } from "@/components/step-next-back";

export default function AddOns() {
  return (
    <>
      <InfoPage
        description="Add-ons help enhance your gaming experience."
        title="Pick add-ons"
      />
      <form className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <AddOnCard
            description="Access to multiplayer games"
            title="Online service"
            price={1}
            time="mo"
          />

          <AddOnCard
            description="Extra 1TB of cloud save"
            title="Larger storage"
            price={2}
            time="mo"
          />

          <AddOnCard
            description="Custom theme on your profile"
            title="Customizable Profile"
            price={2}
            time="mo"
          />
        </div>

        <StepNextBack next="/summary" back="/select-plan" />
      </form>
    </>
  );
}
