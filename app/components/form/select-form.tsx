"use client";
import React, { useId } from "react";
import { ContactSchemaType, contactSchema } from "@/lib/validations";
import { cn } from "@/lib/utils";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<ContactSchemaType>;
  errors: FieldErrors<ContactSchemaType>;
  name: keyof ContactSchemaType;
  defaultValue?: string;
  optionsArray: any[];
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
};

export const SelectForm = ({
  register,
  errors,
  name,
  optionsArray,
  className,
  placeholder,
  defaultValue,
  children,
}: Props) => {
  const id = useId();
  return (
    <div className={cn(`mb-4`, className)}>
      <select
        {...register(name)}
        defaultValue={defaultValue}
        aria-invalid={errors.message ? "true" : "false"}
        className={cn(
          `  w-full rounded-xl  border border-[#ffffff29] bg-[#1f1f1f] px-4 py-4 text-sm  focus:outline-none `,
          //   errors[name] && "border-red-500",
        )}
      >
        {/* {children} */}
        {optionsArray.map((option, index) => (
          <option
            key={`index:${index} ${option.value}`}
            value={option.value}
            disabled={option.disabled}
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
