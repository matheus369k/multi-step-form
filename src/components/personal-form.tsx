"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { StepNextBack } from "./step-next-back";
import { useAppDispatch } from "@/hooks";
import { ActionType } from "@/redux/user/action-type";

const schemaPersonalForm = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.coerce.string().min(7),
});

type PersonalForm = z.infer<typeof schemaPersonalForm>;

export function UserForm() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<PersonalForm>({
    resolver: zodResolver(schemaPersonalForm),
  });

  function handleSubmitPersonalForm(data: PersonalForm) {
    dispatch({ type: ActionType.REGISTER_USER, payload: data });
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitPersonalForm)}
      className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label
            className="font-[family-name:var(--font-Ubuntu-Medium)] text-sm"
            htmlFor="name">
            Name
          </label>
          <input
            {...register("name")}
            className="border border-zinc-300 rounded-lg px-4 py-2.5 leading-normal"
            type="text"
            name="name"
            id="name"
            placeholder=" e.g. Stephen King"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="font-[family-name:var(--font-Ubuntu-Medium)] text-sm"
            htmlFor="email">
            Email Address
          </label>
          <input
            {...register("email")}
            className="border border-zinc-300 rounded-lg px-4 py-2.5 leading-normal"
            type="email"
            name="email"
            id="email"
            placeholder=" e.g. stephenking@lorem.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="font-[family-name:var(--font-Ubuntu-Medium)] text-sm"
            htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            {...register("phoneNumber")}
            className="border border-zinc-300 rounded-lg px-4 py-2.5 leading-normal"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>

      <StepNextBack next="/select-plan" />
    </form>
  );
}
