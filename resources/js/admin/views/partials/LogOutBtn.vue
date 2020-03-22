<template>
  <div>
    <router-link to="/login" class="btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">
        <span class="logout" @click="clearLogin()">Logout</span>
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
    clearLogin() {
      localStorage.clear();
    }
  }
}
</script>

<style>

.btn.m-btn--custom{
  padding:0
}
.btn.m-btn--custom{
  padding: .75rem 0rem;
}

.btn.m-btn--custom .logout {
  padding: .75rem 4rem;
}


</style>