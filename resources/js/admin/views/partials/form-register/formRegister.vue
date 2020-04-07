<template>
  <div class="form-register">
      <div class="form-title text-center">
        <h3>Register as dealer</h3>
        <p>You are just steps away from creating your account</p>
      </div>
      <div class="tab-title text-center">
       <div class="row">
         <div class="col">
           <div class="section-title" @click="activSection = '1'" :class="[activSection === '1' ? 'active' : '']">
              <span class="num">1</span>
              <p class="mb-0">Basic Information</p>
           </div>
         </div>
         <div class="col">
           <div class="section-title" @click="activSection = '2'" :class="[activSection === '2' ? 'active' : '']">
              <span class="num">2</span>
              <p class="mb-0">Acount Information</p>
           </div>
         </div>
       </div>
      </div>

      <div class="section-container mt-5">
          <form action="" class="form-group">
            <div class="basic-info" v-if="activSection === '1'">
              <div class="row mb-3">
                <div class="col">
                  <label for="storeName" class="text-capitalize">store name *</label>
                  <input id="storeName" type="text" class="form-control" v-model="registerData.storeName" required>
                </div>
                <div class="col">
                  <label class="text-capitalize" for="countrySelection">Country *</label>
                  <select @change="countrySelected($event)" class="custom-select mr-sm-2" id="countrySelection" v-model="registerData.country">
                    <option disabled selected value="">Choose Country</option>
                    <option v-for="(countries, index) in countriesData.resources" :key="index" :value="countries.id" >{{countries.title}}</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label class="text-capitalize" for="stateSelection">City *</label>
                  <select class="custom-select mr-sm-2" id="stateSelection" :disabled="citiesFilterd.length == 0" v-model="registerData.city">
                    <option disabled selected value="">Choose City</option>
                    <option v-for="(cities, index) in citiesFilterd" :key="index" :value="cities.id" >{{cities.name}}</option> 
                  </select>
                </div>
                <div class="col">
                   <label for="commercialNum1" class="text-capitalize">Commercial Registration No *</label>
                  <input id="commercialNum1" type="text" class="form-control" v-model="registerData.commercialNumber">
                </div>
                <div class="col-md-12 mt-3">
                  <label for="mobileNum2" class="text-capitalize">Mobile phone number *</label>
                  <input id="mobileNum2" type="text" class="form-control" v-model="registerData.mobileNumber">
                </div>
                <div class="col-6 mt-3">
                  <label for="commercialNum" class="text-capitalize">Type of activity</label><br>
                  <div class="custom-control custom-radio d-inline mr-3">
                    <input @change="activitySelected()" type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="products" v-model="registerData.checkActivity" checked>
                    <label class="custom-control-label" for="customRadio1">Products</label>
                  </div>
                  <div class="custom-control custom-radio d-inline">
                    <input @change="activitySelected()" type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value="services" v-model="registerData.checkActivity">
                    <label class="custom-control-label" for="customRadio2">Services</label>
                  </div>
                </div>
                <div class="col-6 mt-3">
                  <label class="text-capitalize" for="serviceSelection">service type</label>
                  <select :disabled="registerData.checkActivity.length == 0" class="custom-select mr-sm-2" id="serviceSelection" v-model="registerData.serviceType">
                    <option selected disabled value="">Choose Activity Type</option>
                    <option v-for="( activity , index) in activityType.data.children[selectionType].children" :key="index">
                      {{activity.name}}
                    </option>
                    
                  </select>
                </div>
                <div class="col-12 text-center mt-3">
                  <div class="error-container">
                    <transition name="fade">
                      <div v-if="errorsOne.length">
                        <p v-for="(error, i) in errorsOne" :key="i">{{error}} <i class="fas fa-exclamation-circle"></i></p>
                      </div>
                    </transition>
                </div>
                  
                  <button class="btn btn-success text-uppercase my-padding-button mt-3" @click.prevent="checkValidation()">continue</button>
                </div>
              </div>
              <p>Do you have an account, <a href="">log in here</a></p>
            </div>
            <div class="acount-info" v-if="activSection === '2'">
              <div class="mb-3">
                <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" required v-model="registerData.email">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1">Password</label>
                <div class="passContainer">
                  <input :type="fieldType" class="form-control" id="exampleInputPassword1" placeholder="************" v-model="registerData.password">
                  <i @click="switchField(), showPassword = !showPassword" v-bind:class="{ slash: showPassword }" class="fas fa-eye fa-lg showpass-icon"></i>
                </div>
                
              </div>
              <div class="mb-5">
                <label for="confirmPassword">Confirm Password</label>
                <div class="passContainer">
                  <input :type="fieldType" class="form-control" id="confirmPassword" placeholder="************" v-model="registerData.rePassword">
                  <i @click="switchField(), showPassword = !showPassword" v-bind:class="{ slash: showPassword }" class="fas fa-eye fa-lg showpass-icon"></i>
                </div>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mb-2">
                <input type="checkbox" class="custom-control-input" id="check1" v-model="registerData.confirmInfo">
                <label class="custom-control-label" for="check1">I confirm that all the above information is correct.</label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mb-3">
                <input type="checkbox" class="custom-control-input" id="check2" v-model="registerData.confirmAgree">
                <label class="custom-control-label" for="check2">I agree to all platform policies</label>
                <a class="d-block" href="#"> Terms and Policies </a>
              </div>
              <div class="text-center">
                <div class="error-container">
                    <transition name="fade">
                      <div v-if="errorsTow.length">
                        <p v-for="(errorTow, i) in errorsTow" :key="i">{{errorTow}} <i class="fas fa-exclamation-circle"></i></p>
                      </div>
                    </transition>
                </div>
                <button @click.prevent="submitValidation()" type="submit" class="btn btn-success text-uppercase mt-3 my-padding-button">Submit</button>
              </div>
            </div>
          </form>
      </div> 
  </div>
</template>

<script>
import swal from 'sweetalert'
import country from "../../../../../json/country.json"
import city from "../../../../../json/city.json"
import activityType from "../../../../../json/activity-type-category.json"
export default {
  data() {
    return {
      activSection: '1',
      registerData: {
        storeName: '',
        country: '',
        city: '',
        commercialNumber: '',
        mobileNumber: '',
        checkActivity: '',
        serviceType:'',
        email: '',
        password: '',
        rePassword: '',
        confirmInfo: '',
        confirmAgree: '',
        checkFirstInfo: false
      },
      errorsOne: [],
      errorsTow: [],
      countriesData: country,
      citiesData: city,
      activityType: activityType,
      citiesFilterd: [],
      selectionType: 0,
      showPassword: false,
      fieldType: 'password'
    }
  },
  methods:{
    countrySelected(e){
      // console.log(e.target.value);
       //console.log(this.citiesData)
      console.log(this.activityType.data.children[0].children.name)
      this.dataType = '0'
      this.citiesFilterd = [];

      this.citiesData.data.forEach( c => {
        if(c.country_id == e.target.value){
          this.citiesFilterd.push(c)  
        }
      });  
    },
    activitySelected() {
      if(this.registerData.checkActivity == 'products'){
        this.selectionType = 0
      } else  if(this.registerData.checkActivity == 'services') {
        this.selectionType = 1
      }
    }, 
    checkValidation() {
      this.errorsOne = []
       if (!this.registerData.storeName) {
        this.errorsOne.push('store Name required.');
      } else if(!this.registerData.storeName.match(/^[a-z]*$/i)) {
          this.errorsOne.push('store Name text only.');
      }else if (!this.registerData.country) {
        this.errorsOne.push('Please select your country.');
      } else if (!this.registerData.city) {
        this.errorsOne.push('Please select your City.');
      } else if(!this.registerData.commercialNumber) {
          this.errorsOne.push('Commercial Number required.');
      } else if(isNaN(this.registerData.commercialNumber)) {
          this.errorsOne.push('Commercial Number just number.');
      } else if(!this.registerData.mobileNumber) {
          this.errorsOne.push('Mobile Number required.');
      } else if(isNaN(this.registerData.mobileNumber)) {
          this.errorsOne.push('Mobile Number just number.');
      } else if (!this.registerData.serviceType) {
        this.errorsOne.push('Please select your Service Type.');
      } else {
        this.activSection = '2'
        this.registerData.checkFirstInfo = true
      }
       
    },
    submitValidation() {
      
      this.errorsTow = []
      if (!this.registerData.email) {
        this.errorsTow.push('Email required.');
      } else if (!this.validEmail(this.registerData.email)) {
        this.errorsTow.push('Valid email required.');
      } else if (!this.registerData.password) {
        this.errorsTow.push('Password required.');
      } else if (this.registerData.password.length < 8) {
        this.errorsTow.push('Password should more than 8 character.');
      } else if (!this.registerData.rePassword) {
        this.errorsTow.push('Confirm Password required.');
      } else if (this.registerData.password !== this.registerData.rePassword) {
        this.errorsTow.push('Confirm Password incorrect.');
      } else if (this.registerData.confirmInfo !== true) {
        this.errorsTow.push('Confirm information by checkbox.');
      } else if (this.registerData.confirmAgree !== true) {
        this.errorsTow.push('Confirm agree by checkbox.');
      }else if (this.registerData.checkFirstInfo === false) {
        this.errorsTow.push('Please register basic information.');
      } else {
        swal("You are welcome!", "register is success!", "success")
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    switchField() {
      this.fieldType = this.fieldType === 'password' ? 'text' : 'password'
    }
  },
 
 
}
</script>

<style>
.form-register {
  width: 600px;
  margin:auto;
}
.form-register .custom-calss{
  margin-top:30px !important
}

.tab-title .section-title{
  display: inline-block;
  font-weight: bold;
  font-size: 20px;
  margin: auto;
  cursor: pointer;
}

.tab-title .section-title.active {
  color: #ff712e
}

.tab-title .section-title .num {
  border: 1px solid #333;
  border-radius:50%;
  display: block;
  width:40px;
  height:40px;
  margin:auto;
  line-height: 36px; 
}

.section-container label{
  font-size: 20px;
}

/* Start input type radio */
.custom-radio .custom-control-label::after, .custom-radio .custom-control-label::before{top:10px}
/* End input type radio */
/* Start show password*/
.passContainer {
  position:relative;
}

.passContainer .showpass-icon{
  position: absolute;
  right: 13px;
  top: 8px;
  cursor: pointer;
}

.passContainer .slash:before{
  content: "\f070";
}
/* End show password*/

/* Start check box */
.custom-checkbox .custom-control-label{
  font-size:16px;
}

.custom-checkbox .custom-control-label::before, .custom-checkbox .custom-control-label::after{top:6px}

/* End check box */

.my-padding-button {
  padding: 10px 30px;
  background-color: #777
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Add height to container error message*/
.error-container{
  height: 19px;
  padding: 20px
}
.error-container p{color:#f00}
</style>