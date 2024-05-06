import React from "react";
import Text from "../Text/Text";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const LogIn: React.FC = () => {
  return (
    <article className="flex w-full h-screen justify-center items-center" >
      <div className="flex flex-col w-600 gap-4">
        <Text variant="h2" className="font-extrabold">
          Log In
        </Text>
        <Input size="medium" placeholder="Enter your email address" label="Email" />
        <Input size="medium" placeholder="Enter password" label="Password"/>
        <Button size="medium" label="Log In" type="primary" />
        <Button size="medium" className="text-left" label="Forgot your password?" type="primary" isTextOnlyButton={true} />
        <Button size="medium" className="text-left" label="Sign up instead" type="secondary" isTextOnlyButton={true} />
      </div>
    </article>
  );
}