<template>
    <div>
        <h1>Form</h1>
        <p v-if="error.length">
            Please correct the following errors
            <ul>
                <li v-for="e in error" v-bind:key="e.id">{{ e }}</li>
            </ul>
        </p>
        <form @submit="signupUser">
            <input type="text" placeholder="Enter username" v-model="signup.username" /><br />
            <input type="text" placeholder="Enter password" v-model="signup.password" /><br />
            <input type="checkbox" id="cricket" value="cricket" v-model="signup.hobbies" />
            <label for="cricket">
                Cricket
            </label>
            <br />
            <input type="checkbox" id="fooball" value="fooball" v-model="signup.hobbies"/>
            <label for="fooball">
                Football
            </label>
            <br />
            <input type="radio" id="male" value="male" v-model="signup.gender" />
            <label for="male">
                Male
            </label>
            <br />
            <input type="radio" id="female" value="female" v-model="signup.gender" />
            <label for="female">
                Female
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'TenForm',
    data() {
        return {
            error:[],
            signup: {
                username: null,
                password: null,
                hobbies: [],
                gender: null
            }
        }
    },
    methods: {
        signupUser(e) {
            e.preventDefault();
            this.error=[];
            if(this.signup.username && this.signup.password){
                console.log(this.signup.username, this.signup.password)
                return true;
            }

            if(!this.signup.username){
                this.error.push("Username is required");
            }
            if(!this.signup.password){
                this.error.push("Password is required");
            }
            // console.log("sign up button", this.signup)
            console.log("Error are ", this.error);
            // console.log("sign up button", this.signup.username)

            
        }
    }
}
</script>