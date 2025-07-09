import { useState } from 'react';

export type DropdownType = 'players' | 'organizers' | null;

export const useDropdown = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);

  const toggleDropdown = (dropdown: DropdownType) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return {
    activeDropdown,
    toggleDropdown,
    closeDropdown
  };
};