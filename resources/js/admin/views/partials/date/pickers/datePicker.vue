<template>
  <div>
      <h4>Select Date</h4>
      <datepicker placeholder="Select Date" :value="value" name="uniquename" :bootstrap-styling="true"></datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
    data() {
        return {
            value:null
           
        }
    },
    components: {
    Datepicker
  }
}
</script>

<style>

</style>