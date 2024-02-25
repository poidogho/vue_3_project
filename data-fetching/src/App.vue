<script setup lang="ts">
  import { onMounted, ref, watch, onUpdated, computed } from 'vue'
  import {getPokemons, getPokemon} from './composable/useGetPokemons' 
  import type { TPokemon } from "./types/tpokemons"
  import Search from './components/Search.vue'


  let pokemons = ref<TPokemon>()
  let error = ref("")
  let count = ref(0)
  let currentPage = ref(1)
  let searchTerm = ref("")
  let search = ref("")

  // Computed property to filter pokemons based on the search term
  const filteredPokemons = computed(() => {
    return pokemons.value?.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });

  const fetchPokemons = async()=> {
      const { pokemons: loadedPokemons, error: loadedError } = await getPokemons()
      pokemons.value = loadedPokemons?.value.results
      error.value = loadedError?.value
      count.value = Math.ceil(loadedPokemons.value.count / 20)
  }

  fetchPokemons()

  // onMounted(async () => {
  //   const { pokemons: loadedPokemons, error: loadedError } = await getPokemons()
  //   pokemons.value = loadedPokemons?.value.results
  //   error.value = loadedError?.value
  //   count.value = Math.ceil(loadedPokemons.value.count / 20)
  // })

  // onMounted(fetchPokemons)

  // onUpdated(() => {
  //   console.log("component updated")
  // })

  watch(currentPage, async(newPage) => {
    currentPage.value = newPage
    const offset =(currentPage.value - 1) * 20
    const { pokemons: loadedPokemons, error: loadedError } = await getPokemons(offset, 20)
    pokemons.value = loadedPokemons?.value.results
    error.value = loadedError?.value
  })

  function handleSearchTermUpdate(newTerm: string) {
    searchTerm.value = newTerm;
  }

  const handleSearchPokemon = async(searchValue: string) => {
    console.log(searchValue)
    search.value = searchValue;
    if (search.value.length){
      const { pokemon: loadedPokemon, error: loadedError } = await getPokemon(search.value)
      pokemons.value = [{
        name: loadedPokemon.value.name,
        url: loadedPokemon.value.location_area_encounters
      }]
      count.value = 1
      error.value = loadedError?.value
    }else{
        fetchPokemons()
    }
  }

</script>

<template>
  <div class="home">
    <h1> home </h1>
    <div>
      <Search @updateSearchTerm="handleSearchTermUpdate" @searchPokemon="handleSearchPokemon"/>
      <div>{{ search }}</div>
      <div v-if="error">{{ error }}</div>
      <v-container v-else>
        <v-data-table 
          :items="filteredPokemons"           
          :items-per-page="20"
          class="elevation-1"  
        >
        </v-data-table>
        <v-pagination 
          :rounded="true"
          :length="count"
          :total-visible="6"
          v-model="currentPage"
          prev-icon="mdi-chevron-left"
          next-icon="mdi-chevron-right"
        >
        </v-pagination>
      </v-container>
  </div>
  </div>
  
</template>

<style>


</style>
