import { useState } from 'react';

export default function useDrawer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const providerDrawer = { isOpen, setIsOpen };

  return { providerDrawer };
}
