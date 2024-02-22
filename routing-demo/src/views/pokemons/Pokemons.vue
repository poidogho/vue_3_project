<template>
    <div>
        <div>Pokemons</div>
        <div>
            <div v-for="pokemon in pokemons" :key="pokemon.name">
                <h2> {{ pokemon.name }}</h2>
                <a :href="pokemon.url" target="_blank">
                    <h2> {{ pokemon.name }}</h2>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
type TPokemon = {
    name: string;
    url: string
}
let pokemons = ref<TPokemon[]>([])

onMounted(() => {
    const fetchPokemons = async() => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon')
            // if (!response.ok){
            //     throw new Error("Response wasnt ok")
            // }  
            const data = await response.json()
            pokemons.value = data.results
        } catch (error) {
            console.error("Error fetching pokemons:", error);
        }
    }
    fetchPokemons()
    console.log(pokemons.value)
})
</script>