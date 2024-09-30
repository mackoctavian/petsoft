"use client";
import { Pet } from "@/lib/types";
import React, { createContext, ReactNode, useState } from "react";

type PetContextProviderProps = {
  children: ReactNode;
  data: Pet[];
};

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  handleChangeSelectedPetId: (id: string) => void;
  handleCheckoutPet: (id: string) => void;
  handleEditPet: (newPet: Omit<Pet, "id">) => void;
  handleAddPet: (newPet: Omit<Pet, "id">) => void;
  selectedPet: Pet | undefined;
  totalPets: number;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  children,
  data,
}: PetContextProviderProps) {
  //state
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState<null | string>(null);

  //derived state
  const selectedPet = pets.find((pet) => pet.id === selectedPetId);

  const totalPets = pets.length;

  //event handlers /actions
  const handleChangeSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  };

  const handleCheckoutPet = (id: string) => {
    setPets((prev) => prev.filter((pet) => pet.id !== id));
  };

  const handleAddPet = (newPet: Omit<Pet, "id">) => {
    setPets((prev) => [
      ...prev,
      {
        ...newPet,
        id: Date.now().toString(),
      },
    ]);
  };

  const handleEditPet = (newPetData: Omit<Pet, "id">) => {
    setPets((prev) =>
      prev.map((pet) => {
        if (pet.id === selectedPetId) {
          return {
            id: selectedPetId,
            ...newPetData,
          };
        }
        return pet;
      })
    );
  };

  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
        handleChangeSelectedPetId,
        handleCheckoutPet,
        handleEditPet,
        handleAddPet,
        selectedPet,
        totalPets,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
