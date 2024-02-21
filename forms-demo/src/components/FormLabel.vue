<template>
  <label> {{ name }}</label>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
    name: {
        type: String,
        required: true
    }
});
</script>

<style>

</style>