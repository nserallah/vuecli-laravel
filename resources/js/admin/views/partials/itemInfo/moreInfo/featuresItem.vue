<template>
  <div>
    <div class="color-row">
        <span class="color-title">Color</span>
        <span class="color-name">Red</span>
    </div>
            
    <div class="color-row">
        <span class="color-title">Size</span>
        <span class="color-name">Large</span>
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* Start Features */
.item-info .color-row {
    border:1px solid #e6e6e6;
    overflow: hidden;
    width: 300px
}

.item-info .color-row:first-child {
    border-bottom:none
}
.item-info .color-row span{
    display: block;
    float: left;
    padding: 10px 15px;
}

.item-info .color-row span.color-title{
    width: 30%;
    border-right:1px solid #e6e6e6;
    background-color: #f4f4f4
}

.item-info .color-row span.color-name{
    width: 70%
}

/* End Features */
</style>