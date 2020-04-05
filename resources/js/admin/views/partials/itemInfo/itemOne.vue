<template>
    <div class="mt-5 item-info">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Overvieow</a>
                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Features</a>
                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Evaluation ({{myRate}})</a>
                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-comments" role="tab" aria-controls="nav-contact" aria-selected="false">Comments</a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <overview-item></overview-item>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                
                <features-item></features-item>  
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <div class="row">
      <div class="col-6 mt-3">
        <div class="send-text">
          <h5>Send Evaluation</h5>
          <form action>
            <div class="eva-stars">
              <!-- https://www.npmjs.com/package/vue-rate -->
              <rate :length="5" :value="0" :showcount="true" v-model="myRate" />
            </div>
            <textarea class="form-control" cols="30" rows="10"></textarea>
            <button class="btn-style mt-3" type="submit">Send Evaluation</button>
          </form>
          <div class="load-more mt-3 text-center">
            <button class="btn-style" type="submit">
              Load More
              <i class="fas fa-spinner ml-2"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="eva-with-progress">
          <!-- https://www.npmjs.com/package/vue-rate                                                              -->
          <rate :length="5" :value="0" :showcount="true" v-model="myRate" :readonly="true" />
        </div>
        <div class="row mt-3">
          <div class="col-2 text-right">
            <span>5 Stars</span>
          </div>
          <div class="col-6">
            <div class="progess-eval"></div>
          </div>
          <div class="col-2">100%</div>
          <div class="col-3"></div>
        </div>
        <div class="row mt-3">
          <div class="col-2 text-right">
            <span>4 Stars</span>
          </div>
          <div class="col-6">
            <div class="progess-eval"></div>
          </div>
          <div class="col-2">0%</div>
          <div class="col-3"></div>
        </div>
        <div class="row mt-3">
          <div class="col-2 text-right">
            <span>3 Stars</span>
          </div>
          <div class="col-6">
            <div class="progess-eval"></div>
          </div>
          <div class="col-2">0%</div>
          <div class="col-3"></div>
        </div>
        <div class="row mt-3">
          <div class="col-2 text-right">
            <span>2 Stars</span>
          </div>
          <div class="col-6">
            <div class="progess-eval"></div>
          </div>
          <div class="col-2">0%</div>
          <div class="col-3"></div>
        </div>
        <div class="row mt-3">
          <div class="col-2 text-right">
            <span>1 Stars</span>
          </div>
          <div class="col-6">
            <div class="progess-eval"></div>
          </div>
          <div class="col-2">0%</div>
          <div class="col-3"></div>
        </div>
      </div>
    </div>
            </div>
            <div class="tab-pane fade" id="nav-comments" role="tabpanel" aria-labelledby="nav-contact-tab">                
                <comments-item></comments-item> 
            </div>
        </div>
      <!-- Hello I am info item one + {{this.firstName + ' ' + this.lastName}} -->
    </div>
</template>

<script>
export default {
    props: {
        firstName: String,
        lastName: String
    },
    data() {
        return {
           myRate: 0 
        }
    }
}
</script>

<style>
/* Start Evaluation */
.send-text {
    border-radius: 20px;
    box-shadow: 0px 0px 16px 4px #f4f4f4;
    border: 2px solid #f4f4f4;
    padding: 20px;
    padding-bottom:0
}
.send-text form textarea{
    border-radius: 15px;
    border:1px solid #e6e6e6;
}
.send-text .btn-style {
    background-color: #ff712d;
    color: #fff;
    padding: 10px 25px;
    border-radius: 10px;
    outline: none;
    border: 1px solid #dd774f;

} 
 
.send-text .load-more{
    border-top:2px solid #e6e6e6;
    padding: 20px;
    margin-left: -20px;
    margin-right: -20px;
}
 /* End Evaluation */
 /* Start eva-with-progress */
.eva-with-progress {
    position: relative;
    padding-top: 66px;
}
 .eva-with-progress .Rate__star{
  padding: 0px !important;
}
.eva-with-progress .Rate__view {
  display: block;
  position: absolute;
  top:0;
  left: 0
}

.eva-with-progress .Rate__view .count{
    font-size: 40px;
    
    color: #6e970d
}
.eva-with-progress .Rate .icon{
  margin: 0 5px !important;
  width:30px;
  height:30px
} 

.progess-eval{
    height: 10px;
    background: #f3f3f3;
    margin-top:6px
} 
 /* End eva-with-progress */

</style>