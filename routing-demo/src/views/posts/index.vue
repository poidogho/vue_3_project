<template>
    <div>
        <h1>Posts</h1>
        <PostList :posts="posts"/>
    </div>
</template>

<script lang="=js">
    import { ref } from 'vue'
    import PostList from './postList.vue'
    export default {
        components: {PostList},
        setup(){
            const posts = ref([
                {id: 1, title:"first blog", body: "lorem dfp"},
                {id: 2, title: "2nd blog", body: "lorem dfp bafbfabasdfb dafbfbfbfbdfbdfbffbfb" }
            ])

            return {posts}
        }
    }
</script>

<style>

</style>