import { createContext, FC, useState } from "react";

enum RockGenres {
    goticrock,
    hardrock,
    punkrock,
    hardcore,
    deathcore,
    metalcore,
    heavymetal,
    glammetal,
    goticmetal,
    blackmetal,
    paganmetal,
    symphonicblackmetal,
    deathmetal,
    symphonicdeathmetal,
}

type User = {
    name: string;
    yearsOld: number;
    citizensheep: string;
    city: string;
    aboutme: string;
    rockGenres: RockGenres[];
}

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
        rockGenres: [0, 2, 4, 6, 8, 10, 12, 14],
    });

    return (
        <Context.Provider value={{
            user,
        }}>
            {children}
        </Context.Provider>
    )
}       