"use client";
import React, { createContext, ReactNode, useState } from "react";

export const SearchContext = createContext<TSearchContext | null>(null);

type TSearchContext = {
  searchTerm: string;
  handleChangeSearchTerm: (value: string) => void;
};

type SearchContextProps = {
  children: ReactNode;
};

export default function SearchContextProvider({
  children,
}: SearchContextProps) {
  //state
  const [searchTerm, setSearchTerm] = useState("");

  //handlers
  const handleChangeSearchTerm = (value: string) => setSearchTerm(value);
  return (
    <SearchContext.Provider value={{ searchTerm, handleChangeSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
