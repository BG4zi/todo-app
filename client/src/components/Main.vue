<template>
    <div class="container">
        <h1>Todo List App</h1>
        
        <div class="form">
            <label for=""></label>
            <input type="text" class="input" id="placeholder"/>
            <input type="submit" class="add" value="Add Task" @click="add()"/>
        </div>
        <div class="tasks">
            <p v-for="task in tasks" :key="task.id" class="task">
                <input type="checkbox" v-if="task.is_done == 1" checked @click="change(task)">
                <input type="checkbox" v-else unchecked @click="change(task)">
                {{ task.title }}
                <input type="submit" class="add" value="delete" @click="remove(task.id)">
            </p>
        </div>
        <div class="delete-all" @click="remove_all()">Delete all</div>
    </div>
</template>

<script>

import { onMounted, ref } from "vue"
import axios from 'axios'

const API_URL = 'http://localhost:3000/tasks'




export default {
    methods: {
        change(task) {
            task.is_done = Number(!task.is_done)
            this.update(task)
        },
        remove(id) {
            axios.delete(`${API_URL}/${id}`) 
                .then((res)=>{
                    console.log(res.data)
                })
                .catch((error) => {
                // handle error
                    console.log(error)
                })
                .finally(() => {
                // always executedMoesif Origin & CORS Changer
                })
                window.location.reload()
        },
        remove_all() {
            axios.delete(`${API_URL}`)
                .then((res)=>{
                    console.log(res.data)
                })
                .catch((error) => {
                // handle error
                    console.log(error)
                })
                .finally(() => {
                // always executedMoesif Origin & CORS Changer
                })
                window.location.reload()
        },
        update(task) {
            axios.put(`${API_URL}/${task.id}`, {
                title: task.title,
                is_done: task.is_done
            }) 
                .then((res) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {

                })
        },
        add() {
            axios.post(API_URL, {
                title: document.getElementById('placeholder').value,
                is_done: 0
            })
                .then((res)=> {
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {

                })  
            window.location.reload()
        }
    },
    setup() {
        const tasks = ref([])


        onMounted(() => {
            get_tasks()
        })


        function get_tasks() {
            axios.get(API_URL)
                .then((res) => {
                    console.log(res.data)
                    tasks.value = res.data
                })
                .catch(function (error) {
                // handle error
                    console.log(error);
                })
                .finally(function () {
                // always executedMoesif Origin & CORS Changer
                });       
            }
        
        
        
        return {
            tasks,
        }
    }
}

</script>

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
}

h1 {
    margin: 25px;
}

.container {
    width: 500px;
    margin: 20px auto;
}

.form {
    background-color: #eee;
    border-radius: 6px;
    padding: 20px;
    display: flex;
    align-items: center;
}
.input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    flex: 1;
}
.input:focus , .add:focus{
    outline: none;
}
.add {
    border: none;
    background-color: #f44336;
    color: white;
    padding: 10px;
    border-radius: 6px;
    margin-left: 10px;
    cursor: pointer;
}
.tasks {
    background-color: #eee;
    margin-top: 20px;
    border-radius: 6px;
    padding: 20px;
}
.tasks .task {
    background-color: gray;
    color: white;
    padding: 10px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;
    cursor: pointer;
    border: 1px solid #ccc;
}
.tasks .task:not(:last-child) {
    margin-bottom: 15px;
}
.tasks .task:hover {
    background-color: #f7f7f7;
}
.tasks .task.done {
    opacity: 0.5;
    position: relative;
}
.task.done::after {
    position: absolute;
    content: "";
}
.tasks .task span { 
    font-weight: bold;
    font-size: 10px;
    background-color: red;
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    cursor: pointer;
}
.delete-all {
    width: calc(100% - 25px);
    margin: auto;
    padding: 12px;
    text-align: center;
    font-size: 14px;
    color: white;
    background-color: #f44336;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 4px;
}
</style>