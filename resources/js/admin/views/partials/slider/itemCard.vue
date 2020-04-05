<template>
  <div class="mt-5">
    <div class="item-card">
      <!-- https://www.npmjs.com/package/vue-slick-carousel -->
     <VueSlickCarousel v-bind="settings" ref="carousel">
      <div class="item">
        
          <div class="item-img">
          <img src="assets/demo/demo10/media/slider-images/item-img6.png">
          <span class="discount">-30%</span>
        </div>
        <h4 class="text-uppercase mt-2">this item title</h4>
        <rate :length="5" :value="2" :showcount="true" v-model="itemRate"/>
        <p class="price">100$</p>
        <div class="progress-bar"><span class="fill-color"></span></div>
        <span class="sold">sold:10</span>
        
      </div>

      <div class="item">
        <div class="item-img">
          <img src="assets/demo/demo10/media/slider-images/item-img5.png">
          <span class="discount">-20%</span>
        </div>
        <h4 class="text-uppercase mt-2">this item title</h4> 
        <rate :length="5" :value="2" :showcount="true" />
        <p class="price">100$</p>
        <div class="progress-bar"><span class="fill-color"></span></div>
        <span class="sold">sold:10</span>
      </div>

      <div class="item">
        <div class="item-img">
          <img src="assets/demo/demo10/media/slider-images/item-img4.png">
          <span class="discount">-40%</span>
        </div>
        <h4 class="text-uppercase mt-2">this item title</h4>
        <rate :length="5" :value="2" :showcount="true" />
        <p class="price">80$</p>
        <div class="progress-bar"><span class="fill-color"></span></div>
        <span class="sold">sold:10</span>
      </div>

      <div class="item">
        <div class="item-img">
          <img src="assets/demo/demo10/media/slider-images/item-img8.png">
          <span class="discount">-30%</span>
        </div>
        <h4 class="text-uppercase mt-2">this item title</h4>
        <rate :length="5" :value="2" :showcount="true" />
        <p class="price">300$</p>
        <div class="progress-bar"><span class="fill-color"></span></div>
        <span class="sold">sold:10</span>
      </div>

      <div class="item">
        <div class="item-img">
          <img src="assets/demo/demo10/media/slider-images/item-img5.png">
          <span class="discount">-10%</span>
        </div>
        <h4 class="text-uppercase mt-2">this item title</h4>
        <rate :length="5" :value="2" :showcount="true" />
        <p class="price">170$</p>
        <div class="progress-bar"><span class="fill-color"></span></div>
        <span class="sold">sold:10</span>
      </div>

      <div class="item">
        <div class="item-img">
          <img src="assets/demo/demo10/media/slider-images/item-img7.png">
          <span class="discount">-50%</span>
        </div>
        <h4 class="text-uppercase mt-2">this item title</h4>
        <rate :length="5" :value="2" :showcount="true" />
        <p class="price">50$</p>
        <div class="progress-bar"><span class="fill-color"></span></div>
        <span class="sold">sold:10</span>
      </div>
    </VueSlickCarousel>
    
    <div class="arrow angle-left" @click="showPrev"><i class="fas fa-angle-left fa-2x"></i></div>
    <div class="arrow angle-right" @click="showNext"><i class="fas fa-angle-right fa-2x"></i></div>
    </div>
    
    <item-info v-bind='message'></item-info>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      message: {
        firstName: 'nserallah',
        lastName: 'motawea'
      },
      itemRate: 0,
     settings: {
       "autoplay": true,
        "dots": false,
        "infinite": true,
        "initialSlide": 2,
        "speed": 500,
        "slidesToShow": 5,
        "slidesToScroll": 1,
        "swipeToSlide": true,
        "arrows": true,
        // "rtl": true,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 4,
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 3,
              
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              
            }
          }
        ]
      }  
    }
  },
   methods: {
      showNext() {
        this.$refs.carousel.next()
      },
      showPrev() {
        this.$refs.carousel.prev()
      },
    },
}
</script>

<style>
.item-card{
  position:relative
}

.item-card a:hover {
  text-decoration: none;
}
.item-card .item{
  padding: 0 10px
}

.item-card .item .item-img{
  width:100%;
  height: 200px;
  border-bottom: 1px solid #ddd;
  position:relative;
}
.item-card .item .item-img img {
  width:100%;
  height:100%
}
/* Start Discount Number */
.item-card .item .discount{
  position: absolute;
  padding: 5px 10px;
  display: block;
  background-color: #ff712d;
  color: #fff;
  border-radius: 10px;
  top:10px;
  left: 10px;
  font-weight:bold;
}
/* End Discount Number */
/* Start price */
.item-card .item .price{
  font-weight: bold;
  font-size:20px;
  color: #f00
}
/* End price */
/* Start progress bar */
.item-card .item .progress-bar{
  width:90%;
  height:10px;
  background-color: #ddd;
}
.item-card .item .progress-bar .fill-color{
  background: #f00;
  display: block;
  width:80%;
  height:100%
}
.item-card .item .sold {
  font-size: 18px;
}
/* End progress bar */
/* Start items Evaluations */
.Rate__star{
  padding:0 !important;
}
.Rate__view {
  display: inline-block;
}
.Rate .icon{
  margin: 0 3px !important
} 
/* End items Evaluations */

/* Start Arrow style */
.item-card .arrow {
  display: inline-block;
  background-color: #2c3e50;
  color: #fff;
  padding: 10px 15px;
  position: absolute;
  top:50%;
  cursor: pointer;
  transform: translateY(-50%);
}
.item-card .angle-left {
  left:-15px
}
.item-card .angle-right {
  right:-15px
}
/* Start Arrow style */



</style>