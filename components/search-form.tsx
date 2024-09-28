"use client";
import { useSearchContext } from "@/lib/hooks";
import React from "react";

export default function SearchForm() {
  const { searchTerm, handleChangeSearchTerm } = useSearchContext();
  return (
    <form className="w-full h-full">
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeSearchTerm(e.target.value)
        }
        placeholder="Search Pets"
        type="search"
        value={searchTerm}
        className="w-full h-full bg-white/20 rounded-md px-5 outline-none transition focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50"
      />
    </form>
  );
}
