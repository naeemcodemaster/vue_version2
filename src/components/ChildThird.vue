<template>
    <div>
        <p>Child Component</p>
        <ChildThirdChild/>
    </div>
</template>
<script>
import ChildThirdChild from './ChildThirdChild.vue';

export default {
    name: 'ChildThird',
    components: { ChildThirdChild }
}
</script>
<style scoped>
p {
    background-color: greenyellow;
}
</style>

