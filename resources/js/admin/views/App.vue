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
/* Start color and dateTime picker style */
  @import '../../../../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../../../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../../../../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import '../../../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../../../../node_modules/@syncfusion/ej2-lists/styles/material.css';
  @import "../../../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
/* End color and dateTime picker style */
</style>