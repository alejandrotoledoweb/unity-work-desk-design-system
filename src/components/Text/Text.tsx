import React from "react";

type TextProps = {
  variant?: "p" | "h1" | "h2" | "h3" | "h4";
  className?: string;
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ variant = "p", className, children }) => {
  // Default classes for each variant
  const baseClasses = {
    p: "text-base leading-6",
    h1: "text-3xl font-medium leading-tight",
    h2: "text-2xl font-medium leading-tight",
    h3: "text-xl font-medium leading-snug",
    h4: "text-lg font-medium leading-snug",
  };

  // Combine base classes with any additional custom classes
  const combinedClasses = `${baseClasses[variant]} ${className || ""} font-sans`;

  return React.createElement(variant, { className: combinedClasses }, children);
};

export default Text;
