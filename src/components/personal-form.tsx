"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { StepNextBack } from "./step-next-back";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { ActionType } from "@/redux/user/action-type";
import { useEffect } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { useRouter } from "next/navigation";

const schemaPersonalForm = z.object({
  name: z.string().min(1, "This field is required"),
  email: z
    .string()
    .min(1, "This field is required")
    .email("This E-mail is invalid"),
  phoneNumber: z.coerce.string().min(7, "This field is required"),
});

type PersonalForm = z.infer<typeof schemaPersonalForm>;

export function UserForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userReducer);
  const hookUseForm = useForm<PersonalForm>({
    resolver: zodResolver(schemaPersonalForm),
  });
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = hookUseForm;

  function handleSubmitPersonalForm(data: PersonalForm) {
    dispatch({ type: ActionType.REGISTER_USER, payload: data });
    router.push("/select-plan");
  }

  useEffect(() => {
    if (!user) {
      return;
    }

    const datasUser = Object.entries(user);

    for (const list of datasUser) {
      const { userKey, userValue } = {
        userKey: list[0],
        userValue: list[1],
      };

      setValue(userKey as "name" | "email" | "phoneNumber", userValue);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(handleSubmitPersonalForm)}
      className="flex flex-col justify-between h-full mb-8 lg:m-0">
      <div className="flex flex-col gap-4">
        <FormProvider {...hookUseForm}>
          <div className="flex flex-col gap-1">
            <Label
              {...(errors.name && {
                hasError: true,
                errorMessage: errors.name.message,
              })}
              text="Name"
              fieldName="name"
            />
            <Input
              {...(errors.email && { hasError: true })}
              type="text"
              fieldName="name"
              placeholder=" e.g. Stephen King"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label
              {...(errors.email && {
                hasError: true,
                errorMessage: errors.email.message,
              })}
              text="Email Address"
              fieldName="email"
            />
            <Input
              {...(errors.email && { hasError: true })}
              type="email"
              fieldName="email"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label
              {...(errors.phoneNumber && {
                hasError: true,
                errorMessage: errors.phoneNumber.message,
              })}
              text="Phone Number"
              fieldName="phoneNumber"
            />
            <Input
              {...(errors.email && { hasError: true })}
              type="text"
              fieldName="phoneNumber"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </FormProvider>
      </div>

      <StepNextBack next="/" />
    </form>
  );
}
