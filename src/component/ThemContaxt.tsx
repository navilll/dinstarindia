"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";


interface AppContextValue {
  leftSidebar: boolean
  setleftSidebar: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;

}

const defaultState: AppContextValue = {
  // show: false,
  // setShow: () => {},
  // modabox: false,
  // setModabox: () => {},
  // searchbox: false,
  // setSearchbox: () => {},
  // sidebar: false,
  // setSidebar: () => {},
  // switcheData: {},
  // setSwitcheData: () => {},
  // headerLogo: "",
  leftSidebar: false,
  setleftSidebar: () => { },
  isDarkMode: false,
  setIsDarkMode: () => { },

};

export const Context = createContext(defaultState);

interface AppContextProvider {
  children: ReactNode;
}

export const ThemContaxt: React.FC<AppContextProvider> = ({
  children,
}) => {
  const [leftSidebar, setleftSidebar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const searchParams = window.location.search;
    if (searchParams) {
      localStorage.setItem("Mode", searchParams);
    }
    const themeMode = localStorage.getItem("Mode");
    if (themeMode === "?light") {
      document.body.classList.add("layout-light");
      document.body.classList.remove("layout-dark");
    } else if (themeMode === "?dark") {
      document.body.classList.add("layout-dark");
      document.body.classList.remove("layout-light");
    }
  }, [])

  const contextValue: AppContextValue = {
    leftSidebar,
    setleftSidebar,
    isDarkMode,
    setIsDarkMode
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};



type MenuItem = {
  menu: string;
  to?: string;
  className?: string;
  child?: { children: string; to: string }[];
};

export const MenuList: MenuItem[] = [
  { menu: "Home", to: "/" },
  { menu: "About Us", to: "/about-us" },
  { menu: "Services", to: "/services" },
];
export const MenuList2: MenuItem[] = [
  {
    menu: "Blog",
    to: "/blog-grid",
  },
  { menu: "Products", to: "/products" },
  { menu: "Contact Us", to: "/contact-us" },
];

