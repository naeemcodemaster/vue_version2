<template>
    <div>
        <h1>Employee List</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            <tr v-for="li in list" :key="li.id">
                <td>{{ li.id }}</td>
                <td>{{ li.title }}</td>
                <td>{{ li.body }}</td>
            </tr>
        </table>

    </div>
</template>
<script>

import Vue from 'vue';
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios,axios);


export default {
    name: 'FourteenClass',
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        Vue.axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            return res;
        }).then((output)=>{
            // console.log(output.data);
            this.list = output.data;
        })
    }

}

</script>