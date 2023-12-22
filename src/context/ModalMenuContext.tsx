import { createContext, useContext, useState } from 'react';

interface MenuContextType {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const ModalMenuContext = createContext<MenuContextType>({
  openMenu: false,
  setOpenMenu: () => {},
} as MenuContextType);

export function ModalMenuProvider({ children }: ChildrenProps) {
  const [openMenu, setOpenMenu] = useState(false);

  return <ModalMenuContext.Provider value={{ openMenu, setOpenMenu }}>{children}</ModalMenuContext.Provider>;
}

export const useModalMenuContext = () => useContext(ModalMenuContext);
