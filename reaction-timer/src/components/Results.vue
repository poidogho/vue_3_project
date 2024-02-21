<template>
    <div>
      <p> Reaction Time :  {{ rxnTime }} ms</p>
      <p class="rank"> {{ rank }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps, onMounted } from 'vue'

const props = defineProps({
    rxnTime: {
        type: Number,
        required: true
    }
});

const rank = ref("")

onMounted(() => {
    if( props.rxnTime < 250){
        rank.value = "God Tier"
    }else if (props.rxnTime < 400){
        rank.value = "Good reflexes"
    }else {
        rank.value = "snail pace ...."
    }
})
</script>

<style>
.rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
}
</style>