import React from "react";
import classNames from "classnames";

interface ButtonProps {
  type: "primary" | "secondary";
  size: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  disable?: boolean;
  isTextOnlyButton?: boolean;
}

// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   variable: "--poppins-font",
//   weight: ["100", "300", "400", "500", "700", "900"],
//   display: "swap",
//   subsets: ["latin"],
// });

export const Button = ({
  type = "primary",
  size = "medium",
  label,
  disable,
  isTextOnlyButton = false,
  ...props
}: ButtonProps) => {
  const sizeClasses = classNames({
    "text-sm py-2.5 px-4": size === "small",
    "text-base py-2.5 px-5": size === "medium",
    "text-lg py-3 px-6": size === "large",
  });

  const sizeClassesTextOnly = classNames({
    "text-sm p-0": size === "small",
    "text-base p-0": size === "medium",
    "text-lg p-0": size === "large",
  });

  const typeClassesTextOnly = classNames({
    "text-atoll-600 hover:text-atoll-700 font-bold": type === "primary",
    "text-atoll-500 hover:text-atoll-600": type === "secondary",
    "text-atoll-400 hover:cursor-not-allowed":
      disable,
  });

  const typeClasses = classNames({
    "bg-atoll-500 text-white border-0 hover:bg-atoll-600": type === "primary",
    "bg-white text-atoll-500 border border-atoll-500 hover:border-atoll-600 hover:text-atoll-600":
      type === "secondary",
    "bg-atoll-100 text-atoll-400 hover:bg-atoll-100 hover:cursor-not-allowed":
      disable,
  });

  const commonClasses = classNames(
    "font-sans",
    "font-base",
    "cursor-pointer",
    "inline-block",
    "leading-none",
    "rounded-full" // or 'rounded-3xl' if you customize the config for a 3em equivalent
  );

  const buttonClass = classNames(
    // `${poppins.variable}`,
    commonClasses,
    sizeClasses,
    typeClasses
  );

  const buttonClassTextOnly = classNames(
    commonClasses,
    sizeClassesTextOnly,
    typeClassesTextOnly
  );

  return (
    <button
      type="button"
      className={isTextOnlyButton ? buttonClassTextOnly : buttonClass}
      disabled={disable}
      {...props}
    >
      {label}
    </button>
  );
};
