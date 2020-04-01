<template>
  <div class="item-card mt-5">
    <!-- https://www.npmjs.com/package/vue-slick-carousel -->
     <VueSlickCarousel v-bind="settings" ref="carousel">
      <div class="item">
        <div class="item-img">
          <img src="assets/demo/demo10/media/slider-images/item-img6.png">
          <span class="discount">-30%</span>
        </div>
        <h4 class="text-uppercase mt-2">this item title</h4>
        <ul class="list-unstyled slider-eval">
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li>3</li>
        </ul>
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
        <ul class="list-unstyled slider-eval">
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li>0</li>
        </ul>
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
        <ul class="list-unstyled slider-eval">
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li>3</li>
        </ul>
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
        <ul class="list-unstyled slider-eval">
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li>0</li>
        </ul>
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
        <ul class="list-unstyled slider-eval">
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li>0</li>
        </ul>
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
        <ul class="list-unstyled slider-eval">
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li class="active"><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li><i class="fas fa-star" style="font-size: 48px;"></i></li>
          <li>0</li>
        </ul>
        <p class="price">50$</p>
        <div class="progress-bar"><span class="fill-color"></span></div>
        <span class="sold">sold:10</span>
      </div>
    </VueSlickCarousel>
    <!-- <button @click="showPrev">show me the prev</button> -->
    <div class="arrow angle-left" @click="showPrev"><i class="fas fa-angle-left fa-2x"></i></div>
    <!-- <button @click="showNext">show me the next</button> -->
    <div class="arrow angle-right" @click="showNext"><i class="fas fa-angle-right fa-2x"></i></div>
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
      isActive: false,
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
.item-card .item{
  padding: 0 10px
}
.item-card .item .item-img{
  width:100%;
  height: 200px;
  border-bottom: 1px solid #ddd;
  position:relative;
}
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
.item-card .item .item-img img {
  width:100%;
  height:100%
}
.item-card .item .slider-eval li{
  display: inline-block;
}
.item-card .item .slider-eval li i{
   cursor: pointer;
}
.item-card .item .slider-eval li.active i{
  color:#f2c00c;
 
}
.item-card .item .price{
  font-weight: bold;
  font-size:20px;
  color: #f00
}
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