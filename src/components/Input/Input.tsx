import React from "react";
import classNames from "classnames";

interface InputProps {
  size: "small" | "medium" | "large";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label?: string;
}

export const Input = ({
  size = "medium",
  placeholder = "",
  value,
  onChange,
  disabled = false,
  label,
}: InputProps) => {
  const sizeClasses = classNames({
    "text-sm px-4 py-2.5": size === "small",
    "text-base px-5 py-2.5": size === "medium",
    "text-lg px-6 py-2.5": size === "large",
  });

  const commonClasses = classNames(
    "font-sans",
    "font-normal",
    "cursor-text",
    "block",
    "w-full",
    "leading-tight",
    "rounded-lg",
    "border",
    "border-atoll-300",
    "focus:border-atoll-500 focus:ring focus:ring-atoll-500 focus:ring-opacity-50",
    "disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-300 disabled:cursor-not-allowed"
  );

  return (
    <>
      {label ? <label className="font-sans font-normal">{label}</label> : null}
      <input
        type="text"
        className={`${commonClasses} ${sizeClasses}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
};
