"use client";
import Image from "next/image";
import { Button } from "../components/Button/Button";
import { Tooltip } from "../components/Tooltip/Tooltip";
import { StyledCard } from "@/components/Card/Card";
import { Header } from "@/components/Head/Header";
import Text from "@/components/Text/Text";
import { Alert } from "../components/Alert/Alert";
import { Modal } from "@/components/Modal/Modal";
import { useState } from "react";
import { LoadingSpinner } from "@/components/Spinner/LoadingSpinner";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-200">
        <Button
          label="Open Modal"
          type="primary"
          size="medium"
          onClick={() => setIsOpen(true)}
        />

        <Tooltip content="this is the content" position="top">
          This is top content
        </Tooltip>
        <Tooltip content="this is the content" position="right">
          This is right
        </Tooltip>
        <Tooltip content="this is the content" position="left">
          This is left
        </Tooltip>
        <Tooltip content="this is the content" position="bottom">
          This is bottom
        </Tooltip>
        <section className="my-10">
          <Button label="Primary Button" type="primary" size="small" />
          <Button label="Primary Button" type="primary" size="medium" />
          <Button label="Primary Button" type="primary" size="large" />
          <Button label="Secondary Button" type="secondary" size="small" />
          <Button label="Secondary Button" type="secondary" size="medium" />
          <Button label="Secondary Button" type="secondary" size="large" />
        </section>
        <section>
          <Text variant="p">Paragraph</Text>
          <Text variant="h1">Heading 1</Text>
          <Text variant="h2">Heading 2</Text>
          <Text variant="h3">Heading 3</Text>
          <Text variant="h4">Heading 4</Text>
        </section>

        <section>
          {/* "success" | "error" | "warning" | "info"; */}
          <Alert type="success"> Succes message</Alert>
          <Alert type="error"> Error message</Alert>
          <Alert type="warning"> Warning message</Alert>
          <Alert type="info"> Info message</Alert>
        </section>

        <section>
          <Modal
            isOpen={isOpen}
            title="This is the title"
            onClose={() => setIsOpen(false)}
          >
            this is the content
          </Modal>
        </section>
        <section className="my-4">
          <LoadingSpinner size={24} />
        </section>

        <StyledCard
          imageUrl="https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D&quot"
          title="Title"
          highlightText="highlightText"
        />
      </main>
    </>
  );
}
