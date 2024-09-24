"use client";

// Next Component
import Image from "next/image";

/// Image
import checkout from "@assets/images/icon-checkmark.svg";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { ActionType } from "@/redux/add-ons/action.type";

interface AddOnCardProps {
  title: string;
  description: string;
  price: number;
  duration: "mo" | "yr";
}

export function AddOnCard({
  title,
  description,
  price,
  duration,
}: AddOnCardProps) {
  const dispatch = useAppDispatch();
  const listOns = useAppSelector(state=> state.AddOnsReducer);
  const storageContainOns = listOns.findIndex(ons => ons.title === title) >= 0; 

  function handleClickToggleOns() {
    if (storageContainOns) {
      handleRemoveOn();
      return;
    }
    handleAddOns();
  }

  function handleAddOns() {
    dispatch({
      type: ActionType.REGISTER_ONS,
      payload: {
        title,
        price,
        duration,
        description,
      },
    });
  }

  function handleRemoveOn() {
    dispatch({
      type: ActionType.REMOVE_ONS,
      payload: {
        title,
      },
    });
  }

  return (
    <div
      onClick={handleClickToggleOns}
      className={`relative rounded-lg flex items-center gap-4 p-4 outline outline-1 ${
        storageContainOns ? "outline-blue-900 bg-slate-50" : "outline-zinc-300"
      }`}>
      <div
        className={`size-5 rounded-sm outline outline-1 flex justify-center items-center ${
          storageContainOns
            ? "outline-blue-950 bg-blue-900"
            : "outline-zinc-300"
        }`}>
        {storageContainOns && <Image src={checkout} alt="checkout icon" />}
      </div>

      <div className="">
        <h3 className="font-[family-name:var(--font-Ubuntu-Bold)]">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>

      <span className="ml-auto text-xs text-blue-900 font-[family-name:var(--font-Ubuntu-Regular)]">
        +${price}/{duration}
      </span>
    </div>
  );
}
