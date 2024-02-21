<template>
    <div>
        <form @submit="handleSubmit">
            <FormLabel name="Email : "/>
            <input type="email" required v-model="email"/>
            <FormLabel name="Password : "/>
            <input type="password" required v-model="password"/> 
            <div v-if="passwordError" class="error">{{ passwordError }}</div>
            <label> Role : </label>
            <select v-model="role">
                <option value="developer"> Software Developer</option>
                <option value="data engineer"> Data Engineer</option>
            </select>
            <label>Skills</label>
            <input type="text" v-model="skill" @keyup="addSkill"/>

            <div v-for="(sk, index) in skills" :key="`sk-${index}`" class="pill">
                <span @click="deleteSkill(sk.toString())">{{ sk }}</span>
            </div>
            <div>
                <input type="checkbox" required v-model="terms"/>
                <label>Accept Terms and Conditons</label>
            </div>
            <div>
                <input type="checkbox" v-model="frameworks" value="react"/>
                <label>React</label>
            </div>
            <div>
                <input type="checkbox" v-model="frameworks" value="vue"/>
                <label>Vue</label>
            </div>
            <div>
                <input type="checkbox" v-model="frameworks" value="angular"/>
                <label>Angular</label>
            </div>
            <div class="submit">
                <button>Create an Account</button>
            </div>
        </form>
        <p>{{ email }}</p>
        <p>{{ password }}</p>
        <p>{{ role }}</p>
        <p>{{ terms }}</p>
        <p>{{ frameworks }}</p>
        <p>{{ skills }}</p>
    </div>
</template>

<script setup lang="ts">
import FormLabel from './FormLabel.vue';
import { ref } from 'vue'

const email = ref("")
const password = ref("")
const passwordError = ref("")
const role = ref("")
const terms = ref(false)
const frameworks = ref<String[]>([])
const skill = ref<String>('')
const skills = ref<String[]>([])

const addSkill = (e: KeyboardEvent) => {
    if(e.key === ',' && skill.value){
        if(!skills.value.includes(skill.value)){
            skills.value.push(skill.value.trim().slice(0, -1))
        }
        skill.value = ""
    }
}

const deleteSkill = (skl: string) => {
    skills.value = skills.value.filter((sk => sk !== skl))
}

const handleSubmit = (e: FormDataEvent) => {
    e.preventDefault()
    console.log("form submitted")
    passwordError.value = password.value.length > 5  ? "" : 'Password must be at least 6 characters'
    if(!passwordError.value){
        console.log({
            email: email.value,
            password: password.value,
            skills: skills.value,
            role: role.value
        })
    }
}

</script>

<style>
form{
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: center;
    padding: 40px;
    border-radius: 10px;
}
label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type='checkbox']{
    display: inline-block;
    width: 16px;
    margin: 0 16px 0 0;
    position: relative;
    top: 2px;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit{
    text-align: center;
}
.error{
    color: red;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>