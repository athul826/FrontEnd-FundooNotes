<template>
  <div class="MainCenter">
    <div class="CentralBox">
      <div class="ClassPadding">
        <div class="CenterFirstThree">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col>
              <div class="FundooLogos">
                <!-- <span>Fundoo Notes</span> -->
                <span class="f">F</span>
                <span class="u">u</span>
                <span class="n">n</span>
                <span class="d">d</span>
                <span class="o">o</span>
                <span class="oo">o</span>
              </div>
              <div class="toptextfill">
                <h4>ForgetPassword</h4>
              </div>
              <div class="CreateTags">
                <div>
                  <span
                    >Enter your Email or Phone number or Recovery Email</span
                  >
                </div>
              </div>
              <div class="E_mail">
                <v-text-field
                  v-model="email"
                  label="Email or phone"
                  hint="you can use letters& numbers and perid"
                  required
                  outlined
                ></v-text-field>
              </div>
              <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>
              <div class="NextButton">
                <v-btn
                  :disabled="!valid"
                  color="solid"
                  class="mr-4"
                  @click="validate"
                >
                  next
                </v-btn>
              </div>
            </v-col>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userService from "@/services/userservice/userservice";
export default {
  name: "ForgetPasswordComponent",
  data: () => ({
    valid: true,
    // email: "",
    password: "",
    checkbox: "",

    passwordRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      //   this.$refs.form.validate();
      console.log(this.email);
      let reqData = {
        email: this.email,
      };
      userService.prototype
        .forgetPasswordService(reqData)
        .then((data) => {
          console.log("Response from forgotPassword", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
.f {
  color: blue;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
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
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
}

.FundooLogos {
  padding-bottom: -30px;
  padding-left: 100px;
  padding-top: 5px;
  /* height: 100px; */
  /* height: 10px; */
  width: 10px;
}

body {
  background: #fff;
  direction: ltr;
  margin: 0;
  padding: 0;
  color: #212124;
}

.MainCenter {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10%;
}

.CentralBox {
  width: 400px;
  height: 400px;
  padding: 48px 40px 36px 40px;
  margin: 0;
  border-style: solid;
  border-width: 1px;
  border-color: #c2c2ca;
  border-radius: 8px;
  box-sizing: border-box;
}

.toptextfill {
  width: 368px;
  height: 50px;
  padding-top: 1px;
  padding-bottom: 1px;
  box-sizing: border-box;
  text-align: center;
  padding-right: 110px;
}
/* 
.Adjustment {
  width: 366px !important;
  height: 22px !important;
  margin: 20px 0 20px 0 !important;
} */

/* .Forgetpassword {
  font-size: 14px;
  font-weight: 500;
  padding: 9px 0 3px 12px;
} */

.center_first_three {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
}
/* .button {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  margin-top: 26px;
  margin-left: -8px;
}  */

/* .button a {
  padding-left: 20px;
  font-weight: 500;
} */
/* 
.passwords {
  width: 400px;
} */

.E_mail {
  width: 300px;
}

.NextButton {
  padding-bottom: 0%;
  padding-left: 78%;
  padding-top: -10px;
}
.CreateTags {
  padding-right: 20px;
  padding-left: 15%;
  padding-top: 1px;
}
</style>
