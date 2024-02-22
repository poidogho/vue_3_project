import { ref } from 'vue'

type TPokemon = {
    name: string;
    url: string
}
let pokemons = ref<TPokemon[]>([])
let error = ref(null)

export const getPokemons = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        if (!response.ok) {
            throw new Error("Response wasnt ok...No data available")
        }
        const data = await response.json()
        pokemons.value = data.results
    } catch (err) {
        error.value = err.message
        console.error("Error fetching pokemons:", err);
    }

    return { pokemons, error }
}
