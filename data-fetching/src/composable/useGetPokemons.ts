import { ref } from 'vue'
import type { TPokemon } from "../types/tpokemons"

type PokemonResponse = {
    count: number;
    results: TPokemon[]
}
export const getPokemons = async (offset: number = 0, limit: number = 20) => {
    let pokemons = ref<PokemonResponse | null>(null)
    let error = ref("")

    try {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Response wasnt ok...No data available")
        }
        const data: PokemonResponse = await response.json()
        pokemons.value = data
    } catch (err) {
        error.value = err.message
        console.error("Error fetching pokemons:", err);
    }

    return { pokemons, error }
}

export const getPokemon = async (poke: string) => {
    let pokemon = ref(null)
    let error = ref("")
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        if (!response.ok) {
            throw new Error("Response wasnt ok...No data available")
        }
        const data = await response.json()
        console.log({ data })
        pokemon.value = data
    } catch (err) {
        error.value = err.message
        console.error("Error fetching pokemons:", err);
    }

    return { pokemon, error }
}

// export const getPokemons = (offset: number = 0, limit: number = 20) => {
//     let pokemons = ref<TPokemon[]>([])
//     let error = ref("")
//     let count = ref(0)

//     const load = async () => {
//         try {
//             const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
//             console.log({ offset, limit, url })
//             const response = await fetch(url)
//             if (!response.ok) {
//                 throw new Error("Response wasnt ok...No data available")
//             }
//             const data = await response.json()
//             console.log({ data })
//             pokemons.value = data.results
//             count.value = data.count / limit
//         } catch (err) {
//             error.value = err.message
//             console.error("Error fetching pokemons:", err);
//         }
//     }

//     return { pokemons, error, count, load }
// }