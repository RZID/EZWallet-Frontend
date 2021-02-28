<template>
  <div>
    <div class="row vh-100 no-gutters">
      <div
        class="col-7 bg-blue h-100 bg-accent overflow-auto d-none d-lg-flex px-5"
      >
        <LeftTemplate />
      </div>
      <div class="col w-100 h-100 overflow-auto d-flex px-lg-5 phone-brand">
        <div class="w-100 align-self-lg-center">
          <div class="d-flex d-lg-none h-brand">
            <h3
              class="font-weight-bold w-100 align-self-center m-0 text-center text-blue"
            >
              EZwallet
            </h3>
          </div>
          <div class="align-self-center w-100">
            <!-- Desktop view -->
            <div class="d-none d-lg-block">
              <div class="py-5 px-2 pr-5">
                <h4 class="font-weight-bold">
                  Start Accessing Banking Needs With All Devices and All
                  Platforms With 30.000+ Users
                </h4>
                <p class="text-muted">
                  Transfering money is easier than ever, you can access EZwallet
                  wherever you are. Desktop, laptop, mobile phone? we cover all
                  of that for you!
                </p>
              </div>
            </div>
            <!-- End Of Desktop View -->

            <!-- <= MD view -->
            <div class="d-flex d-lg-block">
              <div class="align-self-center w-100">
                <div class="bg-white round h-content">
                  <div class="py-5 d-block d-lg-none">
                    <h4 class="font-weight-bold text-center">Login</h4>
                    <p class="text-muted text-center">
                      Login to your existing account to access <br />
                      all the features in EZwallet
                    </p>
                    <!-- <= End Of MD view -->
                  </div>
                  <div class="container">
                    <div class="my-2 m-lg-0 p-lg-0 px-4">
                      <form @submit.prevent="login()">
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span
                              class="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                              id="basic-addon1"
                            >
                              <i class="far fa-envelope"></i>
                            </span>
                          </div>
                          <input
                            type="email"
                            class="form-control border-top-0 border-left-0 border-right-0 rounded-0"
                            placeholder="Enter your e-mail"
                            v-model="form.email"
                            required
                          />
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span
                              class="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                              id="basic-addon1"
                            >
                              <i class="fas fa-lock"></i>
                            </span>
                          </div>
                          <input
                            :type="revealPass ? 'text' : 'password'"
                            class="form-control border-top-0 border-left-0 border-right-0 rounded-0"
                            placeholder="Enter your password"
                            v-model="form.pw"
                            required
                          />
                          <div class="input-group-append">
                            <span
                              class="input-group-text bg-white border-top-0 border-left-0 border-right-0"
                              id="basic-addon1"
                            >
                              <b-link
                                class="text-decoration-none text-dark"
                                @click="revealPass = !revealPass"
                              >
                                <i class="fas fa-eye" v-if="!revealPass"></i>
                                <i class="fas fa-eye-slash" v-else></i>
                              </b-link>
                            </span>
                          </div>
                        </div>
                        <h6 class="font-weight-bold text-right">
                          <b-link
                            @click="toForgotPass()"
                            class="text-decoration-none text-muted"
                          >
                            Forgot password?
                          </b-link>
                        </h6>
                        <button
                          type="submit"
                          class="btn btn-secondary btn-block"
                          style="border-radius: 12px"
                        >
                          Login
                        </button>
                      </form>
                      <p class="text-center pt-4">
                        Don’t have an account? Let’s
                        <b-link
                          class="text-decoration-none"
                          @click="$router.push('/register').catch(() => {})"
                        >
                          Sign Up
                        </b-link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LeftTemplate from '../components/LeftTemplate'
import alert from '../helper/alert'
export default {
  components: { LeftTemplate },
  mixins: [alert],
  data: () => {
    return {
      revealPass: false,
      form: {
        email: "",
        pw: "",
      },
    };
  },
  methods: {
    ...mapActions({
      loginUser: "auth/loginUser",
    }),
    toForgotPass () {
      this.ToastError(`Sorry, this feature currently doesn't available (forgot password)`)
    },
    login () {
      const data = {
        email: this.form.email,
        password: this.form.pw,
      };
      this.loginUser(data)
        .then((res) => {
          if (res.pin === false) {
            this.$router.push("/setPin");
          } else {
            this.ToastSuccess('Welcome back!')
            this.$router.push("/dashboard");
          }
        })
        .catch((err) => {
          if (err === "Email not found") {
            this.ToastError(`Sorry, email that you entered is'nt registered in our system`)
          } else if (err === "Login failed, please check your password") {
            this.ToastError(`Oops, you've entered wrong password`)
          } else {
            console.log(err);
          }
        })
    }
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
@media screen and (max-width: 992px) {
  .phone-brand {
    background-color: ghostwhite;
  }
  .h-content {
    height: calc(100vh - 75px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
}
.round {
  border-radius: 25px 25px 0px 0px;
}
.h-brand {
  height: 100px;
}
input:focus {
  border-color: blue !important;
  box-shadow: none !important;
  outline: 0 none !important;
}
</style>
