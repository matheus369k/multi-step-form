interface LabelProps {
  text: string;
  fieldName: string;
  errorMessage?: string;
  hasError?: boolean;
}

export function Label({ errorMessage, fieldName, hasError, text }: LabelProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <label
        className="font-[family-name:var(--font-Ubuntu-Medium)] text-sm capitalize"
        htmlFor={fieldName}>
        {text}
      </label>
      {hasError && (
        <p className="font-[family-name:var(--font-Ubuntu-Bold)] text-sm text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
}