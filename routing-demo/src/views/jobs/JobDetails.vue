<template>
    <div>
        <h1> Job Details</h1>
        <p> The job id if {{ props.id }}</p>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
 const props = defineProps({
    id: Number,
    required: true
 })

//  const id = ref($route.params.id)

</script>

<style>

</style>