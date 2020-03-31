<template>
 <span>
    
     <button @click="del(vprops.row)" class="btn btn-primary">Delete</button>
     <button @click="info(vprops.row)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Info</button>
</span>
</template>

<script>
export default {
    props:["vprops"],
    methods:{
        del(row){
            this.$emit('del',row)
        },
        info(row){
            this.$emit('info',row)
        }
    },
}
</script>

<style>
</style>