<template>
 <span>
    <!-- <i
    @click="edit(vprops.row)"
    data-toggle="modal"
    data-target="#m_modal_5"
    class="fa fa-pen ml-15"
    ></i> -->
    
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