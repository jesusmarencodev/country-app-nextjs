import { useContext } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";


import { ThemeSwitch } from "@/components/shared/theme-switch";
import ThemeContext from "@/context/themeContext";


export const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className={`shadow theme-${theme}-own shadow-${theme}-own` }>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <strong>
          <p>Where in the world?</p>
        </strong>
      </NavbarContent>

      <NavbarContent
        className="sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
