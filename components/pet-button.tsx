import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
type PetButtonProps = {
  actionType: "add" | "edit" | "checkout";
  children?: ReactNode;
};
export default function PetButton({ actionType, children }: PetButtonProps) {
  if (actionType === "add") {
    return (
      <Button size="icon">
        <PlusIcon className="h-6 w-6" />
      </Button>
    );
  }
  return <Button variant="secondary">{children}</Button>;
}
