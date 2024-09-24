"use client";

import { useAppSelector } from "@/hooks";
import { SummaryPlanRow } from "./summary-plan-row";
import { useEffect, useState } from "react";

export function SummaryDetails() {
  const [total, setTotal] = useState(0);
  const { rank, duration, price } = useAppSelector(
    (state) => state.planReducer
  );
  const listOfAddOns = useAppSelector((state) => state.AddOnsReducer);
  const durationFormatted =
    duration === "mo" ? ["Monthly", "month"] : ["Yearly", "year"];

  useEffect(() => {
    calcTotal();
  });

  function calcTotal() {
    const totalPrice = listOfAddOns.reduce(
      (pre, cur) => pre + cur.price,
      price
    );

    setTotal(totalPrice);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 bg-slate-100 rounded-lg p-4">
        <div className="flex justify-between leading-none">
          <div>
            <h3 className="text-blue-950 font-[family-name:var(--font-Ubuntu-Bold)]">
              {rank} ({durationFormatted[0]})
            </h3>
            <span className="text-xs font-[family-name:var(--font-Ubuntu-Medium)] text-zinc-500 underline">
              Change
            </span>
          </div>
          <span className="text-blue-950 font-[family-name:var(--font-Ubuntu-Bold)]">
            ${price}/{duration}
          </span>
        </div>

        <div className="bg-zinc-200 h-px w-full" />

        <ul className="flex flex-col gap-2.5">
          {listOfAddOns.map((addOns) => {
            return (
              <SummaryPlanRow
                key={addOns.title}
                title={addOns.title}
                price={addOns.price}
                duration={addOns.duration}
              />
            );
          })}
        </ul>
      </div>

      <div className="flex justify-between p-4">
        <h3 className="text-xs font-[family-name:var(--font-Ubuntu-Medium)] text-zinc-500">
          Total (per {durationFormatted[1]})
        </h3>
        <span className="text-blue-900 font-[family-name:var(--font-Ubuntu-Bold)]">
          +${total}/{duration}
        </span>
      </div>
    </div>
  );
}
