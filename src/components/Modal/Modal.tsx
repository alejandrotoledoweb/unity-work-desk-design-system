// components/Modal.tsx
import React from "react";
import { Button } from "../Button/Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <main className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center font-sans">
      <section className="bg-white py-5 px-5 rounded">
        {children}

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
