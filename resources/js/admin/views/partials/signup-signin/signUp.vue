<template>
  <div class="m-login__signup">
    <div class="m-login__head">
      <h3 class="m-login__title">Sign Up</h3>
      <div class="m-login__desc">Enter your details to create your account:</div>
    </div>
    <form class="m-login__form m-form" action>
      <div class="form-group m-form__group">
        <input class="form-control m-input" type="text" placeholder="Fullname" name="fullname" />
      </div>
      <div class="form-group m-form__group">
        <input
          class="form-control m-input"
          type="text"
          placeholder="Email"
          name="email"
          autocomplete="off"
          v-model="input.regEmail"
        />
      </div>
      <div class="form-group m-form__group">
        <input
          class="form-control m-input"
          type="password"
          placeholder="Password"
          name="password"
          v-model="input.regPassword"
        />
      </div>
      <div class="form-group m-form__group">
        <input
          class="form-control m-input m-login__form-input--last"
          type="password"
          placeholder="Confirm Password"
          name="rpassword"
          v-model="input.conPassword"
        />
      </div>
      <div class="row form-group m-form__group m-login__form-sub">
        <div class="col m--align-left">
          <label class="m-checkbox m-checkbox--focus">
            <input type="checkbox" name="agree" /> I Agree the
            <a href="#" class="m-link m-link--focus">terms and conditions</a>.
            <span></span>
          </label>
          <span class="m-form__help"></span>
        </div>
      </div>
      <div class="m-login__form-action">
        <button
          id="m_login_signup_submit"
          class="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
          @click.prevent="register()"
        >Sign Up</button>
        <button
          id="m_login_signup_cancel"
          class="btn btn-outline-focus m-btn m-btn--pill m-btn--custom"
        >Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      input: {
        fullName: '',
        regEmail: '',
        regPassword: '',
        conPassword: ''
      }
    };
  },
  methods: {
    register() {
      axios
        .post("https://reqres.in/api/register", {
          email: this.input.regEmail,
          password: this.input.regPassword
        })
        .then(response => {
          console.log(response.status);
          // if(response.status == 200){

          // } else if(this.input.username == "" || this.input.password == "") {
          //     this.validation = "Username or password can't be empty!";
          // }
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>