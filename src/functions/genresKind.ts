import { RockGenres } from "../types"

export const genresKind = (kind: number) => {
    switch (typeof kind == "number") {
        case (kind == RockGenres.blackmetal): {
            return "Black Metal"
        }
        
        case (kind == RockGenres.deathcore): {
            return "deathcore"
        }

        case (kind == RockGenres.deathmetal): {
            return "deathmetal"
        }

        case (kind == RockGenres.glammetal): {
            return "glam-metal"
        }

        case (kind == RockGenres.goticmetal): {
            return "gotic-metal"
        }

        case (kind == RockGenres.goticrock): {
            return "gotic-rock"
        }

        case (kind == RockGenres.hardcore): {
            return "hardcore"
        }

        case (kind == RockGenres.hardrock): {
            return "hard-rock"
        }

        case (kind == RockGenres.heavymetal): {
            return "heavy metal"
        }

        case (kind == RockGenres.metalcore): {
            return "metalcore"
        }

        case (kind == RockGenres.punkrock): {
            return "punk-rock"
        }

        case (kind == RockGenres.symphonicblackmetal): {
            return "symphonic black metal"
        }

        case (kind == RockGenres.symphonicdeathmetal): {
            return "symphonic death metal"
        }

        case (kind == RockGenres.paganmetal): {
            return "pagan metal"
        }
    }
}