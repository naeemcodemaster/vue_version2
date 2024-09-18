<template>
    <div>
        <h1>{{ title }}</h1>
        <EightChild v-on:changeTitle1="updateTitle($event)"/>
    </div>
</template>
<script>
import EightChild from './EightChild.vue'
export default{
    name:'EightClass',
    components:{
        EightChild
    },
    data(){
        return{
            title:"Title changed Text"
        }
    },
    methods:{
        updateTitle(title){
            this.title = title
        }
    }
}

</script>