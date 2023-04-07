"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

type Props = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

const Input = ({
  errors,
  id,
  label,
  register,
  disabled,
  formatPrice,
  required,
  type = "text",
}: Props) => {
  return (
    <form className="relative w-full">
      {formatPrice && (
        <BiDollar
          size={24}
          className="absolute left-2 top-5 text-neutral-700"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        className={`peer w-full rounded-md border-2 bg-white p-4 pt-6 font-light transition focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 ${
          formatPrice ? "pl-9" : "pl-4"
        } ${
          errors[id]
            ? "border-rose-500 focus:border-rose-500"
            : "border-neutral-300 focus:border-black"
        }`}
        placeholder=" "
        type={type}
      />
      <label
        className={`text-md -transalte-y-3 peer-focus:sacle-75 absolute top-5 z-10 origin-[0] transform duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 ${
          formatPrice ? "left-9" : "left-4"
        } ${errors[id] ? "text-rose-500" : "text-zinc-400"}`}
      >
        {label}
      </label>
    </form>
  );
};

export default Input;
