<template>
  <div>
    <label>Search</label>
    <input type="text" v-model="searchTerm" @input="onInputChange"/>
    <div class="submit">
        <button @click="handleClick">Searh Pokemon</button>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { ref, defineEmits } from 'vue';

    const emits = defineEmits(['updateSearchTerm', "searchPokemon"]);
    const searchTerm = ref('');

    // Function to call when input changes
    const onInputChange = (event: KeyboardEvent) => {
        // Emit the current value to the parent
        emits('updateSearchTerm', event.target?.value);
    }

    const handleClick = () => {
        emits("searchPokemon", searchTerm.value)
    }

</script>

<style scoped>
input{
   border: 1px solid black !important;
   margin: 10px;
}

button{
    background: #0b6dff !important;
    border: 0;
    color: white;
    border-radius: 10px;
}
.submit{
    text-align: center;
}

</style>