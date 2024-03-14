"use client";
import React, { useId } from "react";
import { ContactSchemaType, contactSchema } from "@/lib/validations";
import { cn } from "@/lib/utils";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<ContactSchemaType>;
  errors: FieldErrors<ContactSchemaType>;
  name: keyof ContactSchemaType;
  type?: string;
  placeholder?: string;
  className?: string;
};

export const InputForm = ({
  register,
  errors,
  name,
  className,
  type = "input",
  placeholder,
}: Props) => {
  const id = useId();
  return (
    <div className={cn(`mb-4`, className)}>
      <label>
        {(type === "input" || type === "email") && (
          <input
            {...register(name)}
            id={id}
            autoComplete="on"
            type={type}
            aria-invalid={errors.message ? "true" : "false"}
            placeholder={placeholder}
            className={cn(
              `  w-full rounded-xl border border-[#ffffff29] bg-[#1f1f1f] px-4 py-4 text-sm placeholder:opacity-50 focus:outline-none `,
            )}
          />
        )}
        {type === "textarea" && (
          <textarea
            {...register(name)}
            id={id}
            aria-invalid={errors.message ? "true" : "false"}
            placeholder={placeholder}
            rows={10}
            className={cn(
              `  w-full rounded-xl border border-[#ffffff29] bg-[#1f1f1f] px-4 py-4 text-sm placeholder:opacity-50 focus:outline-none `,
            )}
          />
        )}
        {errors[name] && (
          <div className="text-primary pt-[2px] text-right text-xs">
            {errors[name]!.message}
          </div>
        )}
      </label>
    </div>
  );
};
