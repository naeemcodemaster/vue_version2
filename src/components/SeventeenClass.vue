<template>
    <div>
        <h2>User List and user id is {{id}}</h2>
    </div>
</template>
<script>


export default {
    name: "SeventeenClass",
    data(){
        return {id:this.$route.params.id}
    }

}
</script>

