<template>

<div>

    <h2>Second Class Work</h2>
    <table border="2">
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
        <tr v-for="user in users" :key="user.id">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
        </tr>
    </table>
</div>

</template>
<script>
export default{
    name:"SecondClass",
    data(){
        return{
            users:[
                {id:1,name:"khan"},
                {id:2,name:"Majid"},
                {id:3,name:"Abbas"},
                {id:4,name:"Babar"},
            ]
        }
    }
}
</script>