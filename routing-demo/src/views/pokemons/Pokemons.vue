<template>
    <div>
        <div>Pokemons</div>
        <div>
            <input type="text" v-model="search"/>
            <div v-for="pokemon in filteredPokemons" :key="pokemon.name">
                <h2> {{ pokemon.name }}</h2>
                <a :href="pokemon.url" target="_blank">
                    <h2> {{ pokemon.name }}</h2>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { getPokemons } from '../../composables/getPokemons'
type TPokemon = {
    name: string;
    url: string
}
let pokemons = ref<TPokemon[]>([])
let error = ref(null)
let search = ref('')

const fetchPokemons = async() => {
    const { pokemons: loadedPokemons, error: loadError } = await getPokemons()
    pokemons.value = loadedPokemons.value
    error.value = loadError.value
}

fetchPokemons()
// const fetchPokemons = async () => {
//     try {
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon')
//         // if (!response.ok){
//         //     throw new Error("Response wasnt ok...No data available")
//         // }  
//         const data = await response.json()
//         pokemons.value = data.results
//     } catch (err) {
//         error.value = err.message
//         console.error("Error fetching pokemons:", err);
//     }
// }
// fetchPokemons()
console.log(pokemons.value)
const filteredPokemons = computed(() => pokemons.value.filter((itm) => itm.name.includes(search.value)))

// onMounted(() => {
//     const fetchPokemons = async() => {
//         try {
//             const response = await fetch('https://pokeapi.co/api/v2/pokemon')
//             // if (!response.ok){
//             //     throw new Error("Response wasnt ok...No data available")
//             // }  
//             const data = await response.json()
//             pokemons.value = data.results
//         } catch (err) {
//             error.value = err.message 
//             console.error("Error fetching pokemons:", err);
//         }
//     }
//     fetchPokemons()
//     console.log(pokemons.value)
// })
</script>