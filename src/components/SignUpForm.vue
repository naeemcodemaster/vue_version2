<template>
    <div>
        <h1>Form</h1>
        <input type="text" placeholder="Enter username" v-model="signup.username"/><br/>
        <input type="text" placeholder="Enter password" v-model="signup.password"/><br/>
        <input type="checkbox" id="cricket" value="cricket" v-model="signup.hobbies"/>
        <label for="cricket">
            Cricket
        </label>
        <br/>
        <input type="checkbox" id="fooball" value="fooball" v-model="signup.hobbies"/>
        <label for="fooball">
            Football
        </label>
        <br/>
        <input type="radio" id="male" value="male" v-model="signup.gender"/>
        <label for="male">
            Male
        </label>
        <br/>
        <input type="radio" id="female" value="female" v-model="signup.gender"/>
        <label for="female">
            Female
        </label>
        <br/>
        <button v-on:click="signupUser">Sign Up</button>
    </div>
</template>
<script>
export default {
    name:'SignUpForm',
    data(){
        return{
            signup:{
                username:null,
                password:null,
                hobbies:[],
                gender:null
            }
        }
    },
    methods:{
        signupUser(){
            console.log("sign up button",this.signup)
            console.log("sign up button",this.signup.username)
        }
    }
}
</script>