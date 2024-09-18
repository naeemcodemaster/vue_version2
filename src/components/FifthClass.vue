<template>
    <div>
        <h2 class="heading">Classes</h2>
        <p v-bind:style="{ color: 'red' }">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tenetur voluptatum
            deserunt ipsam autem quas aliquam sed veritatis quaerat consequatur consequuntur, exercitationem at sunt iste ab
            nostrum dicta quasi eius.</p>

            <!-- <p v-bind:class="{active:true}">This is object example of Style</p> -->
            <!-- <p v-bind:class="{active:false}">This is object example of Style</p> -->

            <!-- multi classes -->
            <!-- <p v-bind:class="{active:true,display:true}">This is object example of Style</p> -->

            <!-- with Array -->
            <!-- <p v-bind:class="['heading']">This is object example of Style</p> -->
            <p v-bind:class="[show?'heading':'active']">This is object example of Style</p>
    </div>
</template>
<script>
export default {
    name: 'FifthClass',
    data(){
        return{
            // show:false
            show:true
        }
    }
}
</script>
<style scoped>
.heading {
    background-color: orangered;
}
.active{
    background-color: antiquewhite;
}
</style>