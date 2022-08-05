<template>
  <div class="Center">
    <div class="center_box_class">
      <div class="box_paddinggs">
        <div class="leftBox_class">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col>
              <div class="fundoo_logo_class">
                <!-- <span>Fundoo Notes</span> -->
                <span class="f">F</span>
                <span class="u">u</span>
                <span class="n">n</span>
                <span class="d">d</span>
                <span class="o">o</span>
                <span class="oo">o</span>
              </div>
              <div class="heading_tag">
                
                  <h3>Enter New Password</h3>
                
              </div>

              <div class="password_class">
                <v-text-field
                  v-model="email"
                  :rules="passwordRules"
                  label="Enter New Password"
                  type="password"
                  required
                  outlined
                >
                </v-text-field>
              </div>
              <div class="Confirm_password_class">
                <v-text-field
                  v-model="Password"
                  :rules="passwordRules"
                  label="Confirm Password"
                  type="password"
                  required
                  outlined
                >
                </v-text-field>
              </div>
              <div class="paragraph_class">
                <p>Not your computer? Use Guest mode to sign in privately.</p>
             
              <div>
                <a
                  href="http://localhost:8080/forget"
                  class="Forget_password"
                  width="368"
                  height="20"
                  >Forget password</a
                >
              </div>
              </div>
             <div class="Next_button_class">
                <v-btn
                  :disabled="!valid"
                  color="solid"
                  class="mr-4"
                  @click="validate"
                >
                  Next
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
import userService from '@/services/userservice/userservice';
export default {
  name: "ResetPasswordComponent",
  data: () => ({
    valid: true,

    Password: "",
    ConfirmPassword: "",

    passwordRules: [
      (v) => !!v || "password is required",
      (v) => (v && v.length <= 10) || "password must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.Password);
      console.log(this.ConfirmPassword);
      let reqData= {
        new_password : this.Password,
        password_confirmation : this.ConfirmPassword,

      }
      userService.prototype
        .resetPasswordService(reqData)
        .then((data) => {
          console.log("Response from resetpassword", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
.Center {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 70px;
}

.center_box_class {
  width: 320px;
  height: 380px;
  padding: 48px 40px 36px 40px;
  margin: 0;
  border-style: solid;
  border-width: 1px;
  border-color: #9a9a9c;
  border-radius: 5px;
  box-sizing: content-box;
}

.box_paddinggs {
  display: flex;
}

.leftBox_class {
  width: 300px;
  height: 400px;
}
.create_tag {
  font-family: "sans-serif";
  font-size: 24px;
  align-content: center;
}

.password_class{
  width: 270px;
}

.Confirm_password_class {
  width: 270px;
  display: flex;
}

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
  font-weight: bol;
}

.Next_button_class {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-top: -30px;
  margin-left: 200px;
}
.fundoo_logo_class {
  padding-bottom: -30px;
  padding-left: 120px;
  padding-top: 10px;
  /* height: 100px; */
  /* height: 10px; */
  width: 10px;
}
.heading_tag {
  width: 368px;
  height: 50px;
  padding-top: 5px;
  padding-left: 60px;
  padding-right: 10px;
  box-sizing: border-box;
}
.paragraph_class {
  padding-left: 1px;
}
</style>