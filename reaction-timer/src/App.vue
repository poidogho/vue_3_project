<script setup lang="ts">

import {ref, defineProps } from 'vue'
import Block from './components/Block.vue'
import Results from './components/Results.vue'

let isPlaying = ref(false)
let showResult = ref(false)
let delay = ref(0);
let reactionTime = ref(0)

const props = defineProps<{
  delay: Number
}>()

const handleBtnClick = () => {
  isPlaying.value = true
  delay.value = 2000 + Math.random() * 5000
  showResult.value = false
};

const endGame = (rxnTime: number) =>{
  reactionTime.value = rxnTime
  isPlaying.value = false
  showResult.value = true
}


</script>

<template>
  <div>
    <h1> Reaction timer </h1>
    <button @click="handleBtnClick" :disabled="isPlaying">Play</button>
    <Block :delay="delay" v-if="isPlaying" @stopped="endGame"/>
    <Results :rxnTime="reactionTime" v-if="showResult"/>
    <!-- <p v-if="showResult"> Reaction Time :  {{ reactionTime }}</p> -->
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

button{
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
