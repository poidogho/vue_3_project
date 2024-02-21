<template>
  <div class="block" v-if="showBlock" @click="stopTimer"> Click Me</div>
</template>

<script setup lang="ts">
import { onMounted , onUpdated, ref, defineEmits, defineProps} from 'vue'

const props = defineProps({
    delay: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['stopped']); // Define the events your component can emit

const showBlock = ref(false)
let timer = ref(0)
let rxnTime = ref(0)
const startTimer = () => {
    timer.value = setInterval(() => {
        rxnTime.value += 10
    }, 10)
}

const stopTimer = () => {
    clearInterval(timer.value)
    console.log(rxnTime.value)
    emit("stopped", rxnTime.value)
}

onMounted(() => {
    console.log("Block component mounted")
    setTimeout(() => {
        showBlock.value = true
        startTimer()
    }, props.delay)
})
</script>

<style>
.block{
    width: 400px;
    border-radius: 20px;
    background: green;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>