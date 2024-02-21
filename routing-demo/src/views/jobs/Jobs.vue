<template>
    <div>
        <h1>Jobs</h1>
        <div v-for="job in jobs" :key="job.id">
            <RouterLink :to="{name: 'JobDetails', params: {id:job.id}}">
                <h2> {{ job.title }}</h2>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import {RouterLink} from 'vue-router'

const jobs = [
        {id: 1, title:"Junior Dev", details: 'lorem'},
        {id: 2, title:"Senior Dev", details: 'lorem'},
        {id: 3, title: "Staff Dev", details: 'lorem'},
    ]
</script>

<style>

</style>