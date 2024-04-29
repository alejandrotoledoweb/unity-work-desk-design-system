import Image from "next/image";
import { Button } from "../components/Button/Button";
// import { Tooltip } from "../components/Tooltip/Tooltip";
import { Tooltip } from "flowbite-react";
import { StyledCard } from "@/components/Card/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-200">
      {/* <Button label="Primary Button" type="primary" size="large" />
      <Button label="Secondary Button" type="secondary" size="large" /> */}
      <Button type="primary" size="medium" label="Primary Button" />
      {/* <Tooltip content="secret">Show Tooltip</Tooltip> */}
      <StyledCard
        imageUrl="https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D&quot"
        title="Title"
        highlightText="highlightText"
      />
    </main>
  );
}
