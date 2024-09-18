<template>
    <div>
        <h2>Life Cycle Method</h2>
    </div>
</template>
<script>
export default{
    name:'NinethClass',
    created:function(){
        console.log("Created function called");
    },
    beforeCreate:function(){
        console.log("Before Create function has been called");
    },
    beforeMount:function(){
        console.log("Before mount function called");
    },
    mounted:function(){
        console.log("Mounted function has been called")
    }
}
</script>