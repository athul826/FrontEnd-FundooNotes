<template>
  <div class="main_center_div">
    <div class="central_box">
      <div class="class_with_padding">
        <div class="center_first_three">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col>
              <div class="Fundoologo">
                <!-- <span>Fundoo Notes</span> -->
                <span class="f">F</span>
                <span class="u">u</span>
                <span class="n">n</span>
                <span class="d">d</span>
                <span class="o">o</span>
                <span class="oo">o</span>
              </div>
              <div class="top_text_fill">
                <h4>LOGIN</h4>
              </div>
              <div class="create_tag">
                <div>
                  <span>Login your Fundoo Account</span>
                </div>
              </div>
              <div class="email">
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  hint="you can use letters& numbers and perid"
                  required
                  outlined
                ></v-text-field>
              </div>

              <div class="passwords">
                <v-text-field
                  v-model="password"
                  label="password"
                  required
                  outlined
                >
                </v-text-field>
              </div>
              <div class="paragraph">
                <p>Not your computer? Use Guest mode to sign in privately.</p>
              </div>
              <div>
                <a
                  href="http://localhost:8080/forget"
                  class="Forgetpassword"
                  width="368"
                  height="20"
                  >Forget password</a
                >
              </div>
              <div class="justify-center">
                <v-btn
                  :disabled="!valid"
                  color="#4285F4"
                  class="mr-4"
                  @click="validate"
                >
                  login
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
  name: "LoginComponent",
  data: () => ({
    valid: true,
    // email: "",
    password: "",
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
      console.log(this.password);
      let reqData = {
        email: this.email,
        password: this.password,
      };
      userService.prototype
        .loginservice(reqData)
        .then((data) => {
          console.log("response from login", data);
          localStorage.setItem("token",data.data.token);
          this.$router.push ({path:'/dashboard'})
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

.Fundoologo {
  padding-bottom: -30px;
  padding-left: 155px;
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

.main_center_div {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10%;
}

.central_box {
  width: 368px + 80px;
  height: 500px + 48px + 36px;
  padding: 48px 40px 36px 40px;
  margin: 0;
  border-style: solid;
  border-width: 1px;
  border-color: #c2c2ca;
  border-radius: 8px;
  box-sizing: border-box;
}

.top_text_fill {
  width: 368px;
  height: 50px;
  padding-top: 20px;
  box-sizing: border-box;
}

.Adjustment {
  width: 366px !important;
  height: 22px !important;
  margin: 20px 0 20px 0 !important;
}

.Forgetpassword {
  font-size: 14px;
  font-weight: 500;
  padding: 9px 0 3px 12px;
}

.center_first_three {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
}

.button {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  margin-top: 26px;
  margin-left: -8px;
}

.button a {
  padding-left: 20px;
  font-weight: 500;
}

.passwords {
  width: 400px;
}

.email {
  width: 400px;
}

.justify-center {
  padding-bottom: 0%;
  padding-left: 70%;
  padding-top: -20%;
}
.create_tag {
  padding-right: 18%;
  
}
.paragraph {
   padding-right: 10%
}
</style>
