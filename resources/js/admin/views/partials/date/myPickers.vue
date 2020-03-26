<template>
  <div class="pickers">
      <form>
        <div class="row">
          <div class="col-12 mb-3">
            <date-picker></date-picker>
          </div>
          <div class="col-12 mb-3">
            <date-time-picker></date-time-picker>
          </div>
          <div class="col-12 mb-3">
            <color-picker></color-picker>
          </div>
        </div>
        <input type="submit" value="save" class="btn btn-primary mt-3">
      </form>
  </div>
</template>

<script>

export default {
   
  
  
  
}
</script>

<style>

.pickers{
  width:400px;
  margin: auto;
}

@media only screen and (max-width : 768px) {
  .pickers{
      width:300px;
      
    }
}

.vdp-datepicker__calendar{width:100% !important; border-radius: 5px;}

</style>