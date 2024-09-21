import { InfoPage } from "@/components/info-page";
import { UserForm } from "@/components/personal-form";

export default function YourInfo() {
  return (
    <>
      <InfoPage
        description="Please provide your name, email address, and phone number."
        title="Personal info"
      />
      <UserForm />
    </>
  );
}
