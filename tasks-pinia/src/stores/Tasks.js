import { defineStore } from "pinia"

export const useTaskStore = defineStore('tasks', {
    state: () => ({
        tasks: [],
        name: 'Tasks Using Pinia',
        isLoading: false
    }),
    getters:{
        favs(){
            return this.tasks.filter(task => task.isFav)
        },
        favCount(){
            return this.tasks.reduce((acc, item) => item.isFav ? acc + 1 : acc, 0)
        },
        // trying out arrow functions here
        totalCount: (state) => state.tasks.length
    },
    actions:{
        async getTasks(){
            this.isLoading = true
            const response = await fetch('http://localhost:3000/tasks')
            const data = await response.json()
            this.tasks = data
            this.isLoading = false
        },
        async addTask(task) {
            this.tasks.push(task)

            const response = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {'Content-Type': 'application/json'}
            })

            if(response.error){
                console.error(response.error)
            }
        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter((task) => task.id !== id)
            const response = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'DELETE',

            })

            if(response.error){
                console.error(response.error)
            }
        },
        async toggleFav(id) {
            // this.tasks.map((task) => {
            //     if(task.id === id){
            //         task.isFav = !task.isFav
            //     }
            // })
            const task = this.tasks.find((task) => task.id === id)
            task.isFav = !task.isFav

            const response = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({isFav: task.isFav}),
                headers: {'Content-Type': 'application/json'}
            })

            if(response.error){
                console.error(response.error)
            }
        }
    }
})
