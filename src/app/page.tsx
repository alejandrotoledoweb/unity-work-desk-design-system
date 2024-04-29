import Image from "next/image";
import { Button } from "../components/Button/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-atoll-100">
      {/* <Button label="Primary Button" type="primary" size="large" />
      <Button label="Secondary Button" type="secondary" size="large" /> */}
      <Button type="primary" size="medium" label="Primary Button" />
    </main>
  );
}
