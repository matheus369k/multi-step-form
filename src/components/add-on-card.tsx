"use client";

import Image from "next/image";
import { useState } from "react";
import checkout from "@assets/images/icon-checkmark.svg";

interface AddOnCardProps {
  title: string;
  description: string;
  price: number;
  time: string;
}

export function AddOnCard({ title, description, price, time }: AddOnCardProps) {
  const [active, setActive] = useState(false);

  function handleClickToggle() {
    setActive((active) => !active);
  }

  return (
    <div
      onClick={handleClickToggle}
      className={`relative rounded-lg flex items-center gap-4 p-4 outline outline-1 ${
        active ? "outline-blue-900 bg-slate-50" : "outline-zinc-300"
      }`}>
      <div
        className={`size-5 rounded-sm outline outline-1 flex justify-center items-center ${
          active ? "outline-blue-950 bg-blue-900" : "outline-zinc-300"
        }`}>
        {active && <Image src={checkout} alt="checkout icon" />}
      </div>

      <div className="">
        <h3 className="font-[family-name:var(--font-Ubuntu-Bold)]">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>

      <span className="ml-auto text-xs text-blue-900 font-[family-name:var(--font-Ubuntu-Regular)]">
        +${price}/{time}
      </span>
    </div>
  );
}
