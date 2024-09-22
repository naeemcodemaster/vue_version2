<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HomePage data="Usman" :age="21"/> -->
    <!-- <HomePage data="Khan"/> -->
    <!-- <SecondClass/> -->
    <!-- <ThirdClass/> -->
    <!-- <FourthClass/> -->
    <!-- <FifthClass/> -->
    <!-- <SixthClass/> -->
    <!-- <SeventhClass name="khan"/> -->
    <!-- <SeventhClass v-bind:users="users"/> -->
    <!-- <EightClass/> -->
    <!-- <NinethClass/> -->
    <!-- <SignUpForm/> -->
    <!-- <TenForm/> -->
    <!-- <ElevenFilter/> -->
    <!-- <TwelveLifeCycle/> -->

    <!-- <div v-if="display">
      <ThirteenClass/>
    </div>
    
    <button v-on:click="toggleFun">Toggle</button> -->

    <!-- <FourteenClass/> -->
    <!-- <FifteenClass/> -->
    <!-- <SixteenClass/> -->
    <nav>
      <ul>
        <router-link to="/">Sixteen Class</router-link>
        <router-link to="/fifteen">Fifteen Class</router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import SixteenClass from './components/SixteenClass.vue';

// import ElevenFilter from './components/ElevenFilter.vue';
// import FifteenClass from './components/FifteenClass.vue';
// import FourteenClass from './components/FourteenClass.vue';
// import ThirteenClass from './components/ThirteenClass.vue';
// import TwelveLifeCycle from './components/TwelveLifeCycle.vue';

// import TenForm from './components/TenForm.vue';

// import SignUpForm from './components/SignUpForm.vue';

// import FifthClass from './components/FifthClass.vue';
// import EightClass from './components/EightClass.vue';
// import NinethClass from './components/NinethClass.vue';
// import SeventhClass from './components/SeventhClass.vue';
// import SixthClass from './components/SixthClass.vue';
// import FourthClass from './components/FourthClass.vue';

// import HelloWorld from './components/HelloWorld.vue'
// import HomePage from './components/HomePage.vue';
// import SecondClass from './components/SecondClass.vue';
// import ThirdClass from './components/ThirdClass.vue';
export default {
  name: 'App',
  components: {
    // SixteenClass
},
// for class seventh
data(){
  return {
    // username:"majid",
    // users:{users:[{id:1,name:"ali"},{id:2,name:"babar"}]}
    display:true,
  }
},
methods:{
  toggleFun(){
    this.display =! this.display
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
