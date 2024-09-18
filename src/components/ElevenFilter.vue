<template>
    <div>
        <h1>Filter in Vue.js</h1>
        <p>{{ name | Ucase }}</p>
        <p>Amount is {{ amount | currencyConvertor }}</p>
    </div>
</template>
<script>
export default{
    name:'ElevenFilter',
    data(){
        return{
            name:"khan",
            amount:100

        }
    }
}

</script>