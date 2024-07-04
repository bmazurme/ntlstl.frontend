import React, { createContext } from 'react';

type DrawerType = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
};

// @ts-ignore
const DrawerContext = createContext<DrawerType>({ isOpen: false, setIsOpen: 'drawer' });

export default DrawerContext;
