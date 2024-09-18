<template>
    <div>
        <h2>Props</h2>
        <!-- <p>This is {{ name }}</p> -->
        <h3 v-for="u in users.users" :key="u.id">{{ u.name }}</h3>
    </div>
</template>
<script>
export default {
    name: 'SeventhClass',
    // props: {
    //     name: String,


    // },
    props: ['users']
}

</script>

<style scoped>
h3 {
    color: black;
}
</style>