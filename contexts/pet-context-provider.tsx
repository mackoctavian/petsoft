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

  console.log(selectedPetId);

  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
        handleChangeSelectedPetId,
        selectedPet,
        totalPets,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
