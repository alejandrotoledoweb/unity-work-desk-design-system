// components/LoadingSpinner.tsx
import React from "react";

interface LoadingSpinnerProps {
  size?: number; // Optional size prop to control the size of the spinner
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 24,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        style={{ width: size, height: size }}
        className="border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
      ></div>
    </div>
  );
};
