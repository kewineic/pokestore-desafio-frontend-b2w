import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export default function ModalProvider({ children }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <ModalContext.Provider
            value={{
                isModalVisible,
                setIsModalVisible
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    const { isModalVisible, setIsModalVisible } = context;

    return { isModalVisible, setIsModalVisible };
}