<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="deleteTask(task.id)">delete</i>
      <i 
        class="material-icons"
        :class="{active: task.isFav}"
        @click="toggleIsFav(task.id)">favorite</i>
    </div>
  </div>
</template>

<script setup lang="js">
    import { defineProps } from 'vue';
    import { useTaskStore } from '@/stores/Tasks';

    const props = defineProps({
        task: Object
    })
     const taskStore = useTaskStore()

     const deleteTask = (id) => {
      taskStore.deleteTask(id)
     }

     const toggleIsFav = (id) => {
      taskStore.toggleFav(id)
     }

</script>

<style>

</style>