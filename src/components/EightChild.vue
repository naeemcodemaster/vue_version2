<template>
    <div>
        <button v-on:click="updateTitle">Update Parent Title</button>
    </div>
</template>
<script>

export default {
    name: 'EightChild',
    methods: {
        updateTitle() {
            // console.log("Eight Child Function")
            // first param is function, and second param is data
            this.$emit('changeTitle1','Parent Com Updated')
        }
    }
}

</script>