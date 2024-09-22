interface SummaryPlanRowProps {
  plan: string;
  price: number;
  time: "mo" | "yr";
}

export function SummaryPlanRow({ plan, price, time }: SummaryPlanRowProps) {
  return (
    <li className="flex justify-between">
      <h3 className="text-xs font-[family-name:var(--font-Ubuntu-Medium)] text-zinc-500">
        {plan}
      </h3>
      <span className="text-xs font-[family-name:var(--font-Ubuntu-Medium)] text-blue-950">
        +${price}/{time}
      </span>
    </li>
  );
}
