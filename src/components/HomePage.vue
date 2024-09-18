<template>
    <div>
        <h2>Hello From Home Component</h2>
        <!-- <h3>{{ data }} and age is {{age}}</h3> -->
        <!-- <button v-on:click="hello">Call Hello Function</button> -->
        <!-- <button v-on:click="hello('hi from hello function')">Call Hello Function</button> -->
        <!-- <button v-on:mouseenter="hello('hi from hello function')">Call Hello Function</button> -->

        <!-- <h2 v-if="show">Use of Conditional directive</h2> -->



        <h2 v-if="show">If Use of Conditional directive</h2>
        <h2 v-else>Else Use of Conditional directive</h2>

        <button v-on:click="display">Toggle Data</button>
    </div>
</template>

<script>
export default {
    name:'HomePage',
    props:{
        data:String,
        age:Number
    },
    methods:{
        hello(data){
            console.log("Hi from home component",data)
        },
        display(){
            // this.show=true
            this.show=!this.show
        }
    },
    data(){
        return {
            // show:true
            show:false
        }
    }
}
</script>