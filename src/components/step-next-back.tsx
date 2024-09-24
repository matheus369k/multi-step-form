"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./button";
import Link from "next/link";

interface StepNextBackProps {
  next: string;
  back?: string;
  isSuccess?: boolean;
  textNextButton?: string;
}

export function StepNextBack({
  next,
  back = "",
  textNextButton = "Next Step",
  isSuccess = false,
}: StepNextBackProps) {
  const path = usePathname();
  const router = useRouter();

  function handleNext() {
    if (isSuccess) router.push(next);
  }

  return (
    <div className="w-full font-[family-name:var(--font-Ubuntu-Bold)] capitalize flex items-center justify-between place-items-end">
      {path !== "/" && (
        <Link href={back}>
          <Button type="button" className="text-zinc-400">
            Go Back
          </Button>
        </Link>
      )}

      <Button
        onClick={handleNext}
        type={path === "/" ? "submit" : "button"}
        className="ml-auto bg-blue-950 text-zinc-50 hover:opacity-50 transition-opacity">
        {textNextButton}
      </Button>
    </div>
  );
}
