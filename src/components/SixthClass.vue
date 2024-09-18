<template>
    <div>
        <h2>Data Binding Class</h2>
        <p style="white-space:pre-line">{{ value }}</p>
        <!-- <input type="text" v-model="value"/> -->
        <textarea type="text" v-model="value"/>
    </div>
</template>
<script>
export default{
    name:'SixthClass',
    data(){
        return{
            value:"khan"
        }
    }
}
</script>