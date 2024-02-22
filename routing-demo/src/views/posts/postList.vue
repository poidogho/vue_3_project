<template>
    <div>
        <h1>Post list</h1>
        <div v-for="post in posts" :key="post.id"> {{ post.body }}</div>
    </div>
  
</template>

<script>
export default {
    props: ['posts']
}
</script>

<style>

</style>