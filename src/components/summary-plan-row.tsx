interface SummaryPlanRowProps {
  title: string;
  price: number;
  duration: "mo" | "yr";
}

export function SummaryPlanRow({ title, price, duration }: SummaryPlanRowProps) {
  return (
    <li className="flex justify-between">
      <h3 className="text-xs font-[family-name:var(--font-Ubuntu-Medium)] text-zinc-500">
        {title}
      </h3>
      <span className="text-xs font-[family-name:var(--font-Ubuntu-Medium)] text-blue-950">
        +${price}/{duration}
      </span>
    </li>
  );
}
