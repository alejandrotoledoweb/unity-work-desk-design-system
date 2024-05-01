import React from "react";
import classNames from "classnames";

interface ButtonProps {
  type: "primary" | "secondary";
  size: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  disable?: boolean;
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
  ...props
}: ButtonProps) => {
  const sizeClasses = classNames({
    "text-sm py-2.5 px-4": size === "small",
    "text-base py-2.5 px-5": size === "medium",
    "text-lg py-3 px-6": size === "large",
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

  return (
    <button type="button" className={buttonClass} disabled={disable} {...props}>
      {label}
    </button>
  );
};
