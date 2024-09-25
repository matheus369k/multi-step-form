"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./button";
import Link from "next/link";

interface StepNextBackProps {
  next: string;
  back?: string;
  textNextButton?: string;
}

export function StepNextBack({
  next,
  back = "",
  textNextButton = "Next Step",
}: StepNextBackProps) {
  const path = usePathname();
  const router = useRouter();

  function handleNext() {
    router.push(next);
  }

  return (
    <div className="w-full font-[family-name:var(--font-Ubuntu-Bold)] capitalize flex items-center justify-between place-items-end rounded-lg bg-zinc-50 py-4 px-4 sm:px-8 lg:p-0 absolute bottom-0
     left-1/2 -translate-x-1/2 lg:relative max-w-[620px] lg:max-w-none">
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
