"use client";

import { usePathname } from "next/navigation";
import { Row } from "./row-of-step";

export function ListOfSteps() {
  const pathName = usePathname();

  return (
    <ul className="bg-[url('../assets/images/bg-sidebar-mobile.svg')] lg:bg-[url('../assets/images/bg-sidebar-desktop.svg')] bg-cover bg-no-repeat bg-center lg:rounded-2xl p-8 flex flex-row lg:flex-col justify-center lg:justify-start gap-8 h-1/3 lg:h-auto">
      <Row
        description="Your Info"
        pass="1"
        {...(pathName === "/" && { active: true })}
      />
      <Row
        description="Select plan"
        pass="2"
        {...(pathName === "/select-plan" && { active: true })}
      />
      <Row
        description="Add-ons"
        pass="3"
        {...(pathName === "/add-ons" && { active: true })}
      />
      <Row
        description="Summary"
        pass="4"
        {...((pathName === "/summary" || pathName === "/complete") && {
          active: true,
        })}
      />
    </ul>
  );
}
