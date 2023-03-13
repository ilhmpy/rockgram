import { createContext, FC } from "react";

interface Contextinterface {}

const Context = createContext<Contextinterface>({});

export const AppContext: FC<{ children: any }> = ({ children }) => {
    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}       