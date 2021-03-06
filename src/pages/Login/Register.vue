<template>
  <v-app>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img src="@/assets/logo.svg" contain></v-img>
            <p>Vue Material Admin</p>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="5"
          class="login-part d-flex align-center justify-center"
        >
          <v-row no-gutters class="align-start">
            <v-col
              cols="12"
              class="login-part d-flex align-center justify-center flex-column"
            >
              <v-card class="login-wrapper">
                <v-form>
                  <v-container>
                    <v-row class="flex-column">
                      <v-col>
                        <p
                          class="login-slogan display-2 text-center font-weight-medium my-10"
                        >
                          Wellcome User
                        </p>
                      </v-col>
                      <v-form>
                        <v-col>
                          <v-text-field
                            v-model="name"
                            label="Name"
                            required
                          ></v-text-field>

                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            value="admin@flatlogic.com"
                            label="Email Address"
                            required
                          ></v-text-field>
                          <v-text-field
                            v-model="password"
                            :rules="passRules"
                            type="password"
                            label="Password"
                            hint="At least 6 characters"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col class="d-flex justify-space-between">
                          <v-btn
                            class="text-capitalize"
                            large
                            :disabled="
                              password.length === 0 || email.length === 0
                            "
                            color="primary"
                            @click="Register"
                          >
                            Signup</v-btn
                          >
                           <v-btn large   to="/login" text class="text-capitalize primary--text">Login</v-btn>
                         
                        </v-col>
                      </v-form>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-footer>
                <div class="primary--text">
                  © 2014-2020 LLC. All rights reserved.
                </div>
              </v-footer>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],

      passRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 6 || "Min 6 characters",
      ],
    };
  },
  methods: {
    Register() {
      let data = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      this.$store.dispatch("auth/Register", data).then(() => {
           this.$router.push({ path: '/login' })
         });
    },
  },
  
};
</script>

<style src="./Login.scss" lang="scss" />
