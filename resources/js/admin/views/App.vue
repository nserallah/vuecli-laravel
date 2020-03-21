<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      
    }
  },
  created:function(){
  	this.checkLogin()
  },
   methods:{
  	checkLogin(){
      
  		if(!localStorage.getItem("login"))
      {
        this.$router.push('/login').catch(err => {});
        return;
      } 

      if(localStorage.getItem('login'))
      {
         //this.$router.replace({ name: "layout" }).catch(err => {});
        this.$router.push('/').catch(err => {});
        return;
      }

  	}
  }
}
</script>

<style>

</style>