<template>
  <div>{{ counter }}</div>
</template>

<script lang="ts">
import {ref} from 'vue'
import { useGetCounter } from '../composables/useGetCounter'
export default {
    setup(){
        const {counter} = useGetCounter() 
        return {counter}
    }
}
</script>
