import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends ComponentProps<'input'>{
    hasError?: boolean;
    fieldName: string;
}

export function Input({ hasError, fieldName, ...props}: InputProps) {
    const {register} = useFormContext();

    return (
      <input
        {...props}
        {...register(fieldName)}
        className={`outline outline-1 rounded-lg px-4 py-2.5 leading-normal focus:outline-blue-900 ${
          hasError ? "outline-red-500" : "outline-zinc-300"
        }`}
        name={fieldName}
        id={fieldName}
      />
    );
}