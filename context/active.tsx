"use client";

import React, { createContext, useContext, useState } from "react";
import {
  ActiveSectionContextProviderProps,
  ActiveSectionContextType,
  SectionName,
} from "@/lib/types";

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  // to prevent header backgound getting stuck in between when moving
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};

export default ActiveSectionContextProvider;
