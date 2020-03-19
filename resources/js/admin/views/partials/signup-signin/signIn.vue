<template>
  <div class="m-login__signin">
        <div class="m-login__head">
            <h3 class="m-login__title">Sign In To Admin</h3>
        </div>
        <form class="m-login__form m-form" action="">
            <div class="form-group m-form__group">
                <input class="form-control m-input" type="text" placeholder="Email" name="email" autocomplete="off" v-model="input.username">
            </div>
            <div class="form-group m-form__group">
                <input class="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password" v-model="input.password">
            </div>
            <div class="row m-login__form-sub">
                <div class="col m--align-left">
                    <label class="m-checkbox m-checkbox--focus">
                        <input type="checkbox" name="remember"> Remember me
                        <span></span>
                    </label>
                    <p>{{validation}}</p>
                </div>
                <div class="col m--align-right">
                    <a href="javascript:;" id="m_login_forget_password" class="m-link">Forget Password ?</a>
                </div>
            </div>
            <div class="m-login__form-action">
                <button id="m_login_signin_submit" class="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air" @click.prevent="goHome()">Sign In</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'login',
	data: function() {
		return{
			res:false,
			input: {
				username: "",
				password: ""
			},
			validation: "",

		}
	},
	methods: {

		goHome() {
			axios.post('https://reqres.in/api/login',{
				email: this.input.username,
    			password: this.input.password
			})
            .then(response => {
                       
                if(response.status == 200){
                    this.$router.replace({ name: "layout" }).catch(err => {});
                } else if(this.input.username == "" || this.input.password == "") {
                    this.validation = "Username or password can't be empty!";
                }
               
            }).catch(error => console.log(error))
         
		}
	}
	
	
}
</script>

<style>

</style>