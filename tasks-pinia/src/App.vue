<script setup lang="js">
  import {ref } from 'vue'
  import { useTaskStore } from './stores/Tasks'
  import TaskDetails from './components/TaskDetails.vue'
  import TaskForm from './components/TaskForm.vue'
import { storeToRefs } from 'pinia';

  const taskStore = useTaskStore()
  const { tasks, isLoading , favs, favCount, totalCount} = storeToRefs(taskStore)
  const filter = ref("all")
  taskStore.getTasks()
</script>

<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>{{ taskStore.name }}</h1>
    </header>

    <div class="new-task-form">
      <TaskForm/>
    </div>

    <div >
      <div v-if="taskStore.isLoading"> <h1>Load.......</h1></div>
      <div v-if="!taskStore.tasks">
        <h1>No Task</h1>
      </div>
      <div v-else>
          <div class="filter">
            <button @click="filter = 'all'">All Task</button>
            <button @click="filter='fav'">Favorite Task</button>
          </div>
          <div class="task-list" v-if="filter.trim() === 'all'">
            <p> All Tasks {{ totalCount }} tasks left to do</p>
            <div v-for="task in tasks" :key="task.id">
                <TaskDetails :task="task"/>
            </div>
          </div>
          <div class="task-list" v-if="filter==='fav'">
            <p> Favorite Tasks {{  favCount }} Favorite left to do</p>
              <div v-for="task in favs" :key="task.id">
                  <TaskDetails :task="task"/>
              </div>
          </div>
          <button @click="taskStore.$reset"> Reset Tasks</button>
      </div>
    </div>
  </main>
</template>

<style >



</style>
