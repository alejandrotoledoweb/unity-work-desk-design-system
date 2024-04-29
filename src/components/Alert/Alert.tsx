// components/Alert.tsx
import React from "react";

type AlertProps = {
  type: "success" | "error" | "warning" | "info";
  message: string;
};

export const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const baseClass = "p-4 mb-4 rounded font-sans";
  const typeClasses = {
    success: "bg-green-100 text-green-700",
    error: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-700",
    info: "bg-blue-100 text-blue-700",
  };

  return <div className={`${baseClass} ${typeClasses[type]}`}>{message}</div>;
};
