// components/Alert.tsx
import React from "react";
import Text from "../Text/Text";

type AlertProps = {
  type: "success" | "error" | "warning" | "info";
  children: React.ReactNode;
};

export const Alert: React.FC<AlertProps> = ({ type, children }) => {
  const baseClass = "p-4 mb-4 rounded font-sans";
  const typeClasses = {
    success: "bg-green-100 text-green-700",
    error: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-700",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <Text variant="p" className={`${baseClass} ${typeClasses[type]}`}>
      {children}
    </Text>
  );
};
