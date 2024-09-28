import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PetForm from "./pet-form";
type PetButtonProps = {
  actionType: "add" | "edit" | "checkout";
  children?: ReactNode;
  clickAction?: React.MouseEventHandler<HTMLButtonElement>;
};
export default function PetButton({
  actionType,
  children,
  clickAction,
}: PetButtonProps) {
  if (actionType === "add" || actionType === "edit") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {actionType === "add" ? (
            <Button size="icon">
              <PlusIcon className="h-6 w-6" />
            </Button>
          ) : (
            <Button variant="secondary">{children}</Button>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actionType === "add" ? "Add a new pet" : "Edit Pet"}
            </DialogTitle>
          </DialogHeader>
          <PetForm actionType={actionType} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Button variant="secondary" onClick={clickAction}>
      {children}
    </Button>
  );
}
