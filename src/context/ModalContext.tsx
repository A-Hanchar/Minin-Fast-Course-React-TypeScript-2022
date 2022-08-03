import React, { createContext, useState } from "react";

interface IModalContext {
  isModalVisible: boolean;
  open: () => void;
  close: () => void;
}

export const ModalContext = createContext<IModalContext>({
  isModalVisible: false,
  open: () => false,
  close: () => false,
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const open = () => setIsModalVisible(true);

  const close = () => setIsModalVisible(false);

  return (
    <ModalContext.Provider value={{ isModalVisible, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
