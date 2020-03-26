<template>
    <div>
        <h4>Select Date and Time:</h4>
        <ejs-datetimepicker :placeholder="waterMark" ></ejs-datetimepicker>
    </div>
</template>

<script>

export default {
    data() {
        return {
             waterMark : 'Select a datetime'
        }
    },
    
}
</script>

<style>

</style>