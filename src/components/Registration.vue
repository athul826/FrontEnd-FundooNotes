<template>
  <div class="to_Center_Div">
    <div class="central_box">
      <div class="box_with_padding">
        <div class="Left_box">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col>
              <div class="Fundoo_logo">
                <!-- <span>Fundoo Notes</span> -->
                <span class="f">F</span>
                <span class="u">u</span>
                <span class="n">n</span>
                <span class="d">d</span>
                <span class="o">o</span>
                <span class="oo">o</span>
              </div>
              <div class="create_tags">
                <div>
                  <span>Create your Fundoo Account</span>
                </div>
              </div>
              <div class="first_last_name">
                <v-text-field
                  v-model="Firstname"
                  :rules="nameRules"
                  label="firstname"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="Lastname"
                  :rules="nameRules"
                  label="lastname"
                  required
                  outlined
                ></v-text-field>
              </div>
              <div class="Email">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                ></v-text-field>
              </div>
              <div class="password">
                <v-text-field
                  v-model="Password"
                  label="password"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="Confirm"
                  label="confirm"
                  required
                  outlined
                ></v-text-field>
              </div>

              <v-checkbox
                v-model="checkboxButton"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>
              <div class="button_signin">
                <div>
                  <a href="http://localhost:8080/login">Sign in instead</a>
                </div>
              </div>
              <div class="Validate">
                <v-btn
                  :disabled="!valid"
                  color=#4285F4
                  class="mr-4"
                  @click="validate"
                >
                  Next
                </v-btn>
              </div>
            </v-col>
          </v-form>
        </div>
        <div class="Right_box">
          <img
            src="../assets/account.svg"
            alt="Image"
            width="244"
            height="244"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userService from '@/services/userservice/userservice';
export default {
  name: "RegistrationComponent",
  data: () => ({
    valid: true,
    Firstname: "",
    Lastname: "",
    Password: "",
    Confirm: "",
    Next: "",
    checkboxButton : "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],

    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.Firstname);
      console.log(this.Lastname);
      console.log(this.email);
      console.log(this.Password);
      console.log(this.Confirm);
      let reqData= {
        firstname:this.Firstname,
        lastname:this.Lastname,
        email:this.email,
        password:this.Password,
        password_confirmation:this.Confirm
      }

   userService.prototype.registrationService(reqData).then((data)=>{
        console.log("Response from Registration",data);
    }).catch((error)=>{
        console.log(error);
  
    })
    },
  },
};
</script>
<style>
.to_Center_Div {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 100px;
}
.central_box {
  width: 550px;
  height: 500px;
  padding: 48px 40px 36px 40px;
  margin: 0;
  border-style: solid;
  border-width: 1px;
  border-color: #9a9a9c;
  border-radius: 5px;
  box-sizing: content-box;
}
.box_with_padding {
  display: flex;
}
.Left_box {
  width: 354px;
  height: 425px;
}
.first_last_name {
  width: 85%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  
}
.Email {
  width: 280px;
}
.password {
  width: 85%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  /* padding: 6px 8px; */
}
.f {
  color: blue;
  font-weight: bold;
  font-family: sans-serif;
  text-align: left;
}

.u {
  color: red;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
}

.n {
  color: yellow;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
}

.d {
  color: blue;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
}

.o {
  color: green;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
}

.oo {
  color: red;
  font-weight: bol;
}
.Right_box {
  width: 90px;
  height: 300px;
  padding-left: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* left:40px; */
}
.Validate {
  left: 10px;
  right: 15px;
  padding-left: 205px;
  margin-top: -75px;
}
.create_tags {
  text-align:left;

}
</style>