"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./button";

interface StepNextBackProps {
  next: string;
  back?: string;
}

export function StepNextBack({ next, back = "" }: StepNextBackProps) {
  const path = usePathname();
  const router = useRouter();

  function handleNextStep() {
    router.push(next);
  }

  function handleBackStep() {
    router.push(back);
  }

  return (
    <div className=" font-[family-name:var(--font-Ubuntu-Bold)] capitalize flex items-center justify-between place-items-end">
      {path !== "/" && (
        <Button
          onClick={handleBackStep}
          type="button"
          className="text-zinc-400">
          Go Back
        </Button>
      )}

      <Button
        onClick={handleNextStep}
        type="submit"
        className="ml-auto bg-blue-950 text-zinc-50">
        Next Step
      </Button>
    </div>
  );
}
