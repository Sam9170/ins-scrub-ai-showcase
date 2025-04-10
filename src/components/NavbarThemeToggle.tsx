
import React from 'react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarThemeToggleProps {
  className?: string;
}

const NavbarThemeToggle: React.FC<NavbarThemeToggleProps> = ({ className }) => {
  return (
    <div className={className}>
      <ThemeToggle />
    </div>
  );
};

export default NavbarThemeToggle;
