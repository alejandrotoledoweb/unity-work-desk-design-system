// components/Modal.tsx
import React from "react";
import { Button } from "../Button/Button";
import Text from "../Text/Text";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <main className="fixed inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center font-sans">
      <section className="bg-white py-5 px-5 rounded text-center gap-y-4 flex flex-col max-w-96">
        <Text variant="h2">{title}</Text>
        <Text variant="p">{children}</Text>

        <section className="flex justify-center mt-4 gap-x-2">
          <Button
            // className="mt-4 py-2 px-4 bg-red-500 text-white rounded"
            onClick={onClose}
            label="Close"
            type="secondary"
            size="medium"
          ></Button>
          <Button
            // className="mt-4 py-2 px-4 bg-red-500 text-white rounded"
            onClick={onClose}
            label="Acept"
            type="primary"
            size="medium"
          ></Button>
        </section>
      </section>
    </main>
  );
};
