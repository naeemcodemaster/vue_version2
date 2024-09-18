<template>
    <div>
        <h1>Life Cycle BeforeCreate and Before in Vue.js</h1>
        <p id="username">{{ name }}</p>
       
    </div>
</template>
<script>
export default{
    name:'TwelveLifeCycle',
    data(){
        return{
            name:"khan",
          

        }
    },
    beforeCreate(){
        console.log("Before Create",this.name)
    },
    created(){
        console.log("Create call",this.name)
    },
    beforeMount(){
        // $el ap ko html jo hoti hai wo deta hai.
        console.log("Before Mount",this.$el);
        console.log("Before Mount ", document.getElementById('username'));
    },
    mounted(){
        console.log("Mounted",this.$el)
        console.log("Mount ", document.getElementById('username'));
    }
}

</script>