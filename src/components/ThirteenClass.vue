<template>
    <div>
        <h2>Destroye Component Topic</h2>
    </div>
</template>
<script>

export default {
    name:'ThirteenClass',
    data(){
        return{
            name:"Home Component"
        }
    },
    beforeDestroy(){
        alert("destroye before")
        console.log("Before Distroye")
    },
    destroyed(){
        console.log("Destroyed")
    }
}


</script>