import { createContext, FC, useState } from "react";
import { User } from "./types";

interface Contextinterface {
    user: User | null;
}

export const Context = createContext<Contextinterface>({
    user: null
});

export const AppContext: FC<{ children: any }> = ({ children }) => {
    const [user, setUser] = useState<User>({
        name: "Wladislaw Zubchenko",
        yearsOld: 18,
        citizensheep: "Ukraine",
        city: "Kyiv",
        aboutme: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta",
        rockGenres: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
        ],
    });

    return (
        <Context.Provider value={{
            user,
        }}>
            {children}
        </Context.Provider>
    )
}       