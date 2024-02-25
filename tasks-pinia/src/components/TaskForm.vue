<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to ...." v-model="newTask">
    <button>Add Task</button>
  </form>
</template>

<script setup lang="js">
import { useTaskStore } from '@/stores/Tasks';
import { ref } from 'vue';

    const taskStore = useTaskStore()
    const newTask=ref("")

    const handleSubmit = () => {
        if(newTask.value.length){
            taskStore.addTask({
                title: newTask.value,
                isFav: false,
                id: Math.floor(Math.random() * 100000)
            })
            newTask.value = ""
        }
    }
</script>

<style>

</style>