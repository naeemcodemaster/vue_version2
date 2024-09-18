<template>
    <div>
        <h2>Third Class Component</h2>
        <ChildThird/>
        <ChildThirdChild/>
    </div>
</template>
<script>
import ChildThird from './ChildThird.vue';
import ChildThirdChild from './ChildThirdChild.vue';

export default{
    name: "ThirdClass",
    components: { ChildThird, ChildThirdChild }
}
</script>

<style scoped>
    h2{
        background-color: orangered;
        color: white;
    }
</style>