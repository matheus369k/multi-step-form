// Components
import { AddOnsForm } from "@/components/add-ons-form";
import { InfoPage } from "@/components/info-page";

export default function AddOns() {
  return (
    <>
      <InfoPage
        description="Add-ons help enhance your gaming experience."
        title="Pick add-ons"
      />

      <AddOnsForm />
    </>
  );
}
