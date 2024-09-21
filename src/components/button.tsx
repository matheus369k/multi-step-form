import { ComponentProps } from "react";
import {twMerge} from 'tailwind-merge';

type ButtonProps = ComponentProps<"button">

export function Button({className, ...props}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "inline max-w-max py-2.5 px-5 rounded-lg",
        className
      )}
    />
  );
}
