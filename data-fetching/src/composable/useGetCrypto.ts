import { ref } from 'vue'
export const useGetCryptos = async () => {
    const cryptos = ref(null)
    const error = ref("")
    try {
        const response = await fetch('http://localhost:3001/cryptocurrency/listings/latest'
        )
        if (!response.ok) {
            throw new Error("unable to fetch cryptos")
        }
        const data = await response.json()
        cryptos.value = data.results
    } catch (err) {
        error.value = err.message
        console.error("Error fetching pokemons:", err);
    }

    return { error, cryptos }
}