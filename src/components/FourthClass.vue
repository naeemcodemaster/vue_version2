<template>
    <div>
        <h2>Fourth Class</h2>
        <p>{{ name }}</p>
        <p v-once>{{ name }}</p>
        <p>{{ yes ? " Yes true hai " : "No True hai" }}</p>
        <h2 v-html="htmlhai"></h2>
        
        <button v-bind:disabled="disableBtn" v-on:click="clickme">Click here</button>
    </div>
</template>
<script>
export default {
    name: 'FourthClass',
    data() {
        return {
            name: "khan",
            yes:true,
            htmlhai:'<p>Vue say html</p>',
            disableBtn:true
        }
    },
    methods:{
        clickme(){
            this.name="majid",
            this.yes =! this.yes
        }
    }
}
</script>