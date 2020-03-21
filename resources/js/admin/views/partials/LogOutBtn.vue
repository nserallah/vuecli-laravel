<template>
  <div>
    <router-link to="/login" @click="clearlogin()" class="btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">
        Logout
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
      
    }
  },
  methods: {
    clearlogin() {
      localStorage.clear();
    }
  }
}
</script>

<style>

</style>