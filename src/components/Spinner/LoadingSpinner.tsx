// components/LoadingSpinner.tsx
import React from "react";

interface LoadingSpinnerProps {
  size?: number; // Optional size prop to control the size of the spinner
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 24,
}) => {
  return (
    <main className="flex items-center justify-center">
      <section
        style={{ width: size, height: size }}
        className="border-4 border-atoll-500 border-t-transparent rounded-full animate-spin"
      ></section>
    </main>
  );
};
