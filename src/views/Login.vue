<template>
  <div>
    <div class="row vh-100 no-gutters">
      <div
        class="col-7 bg-blue h-100 bg-accent overflow-auto d-none d-lg-flex px-5"
      >
        <div class="container align-self-center">
          <h3 class="font-weight-bold text-white">EZWallet</h3>
          <div class="text-center">
            <img style="height: 400px" src="/assets/phone.svg" />
          </div>
          <h5 class="font-weight-bold text-white">
            App that Covering Banking Needs.
          </h5>
          <div class="pr-5">
            <p class="text-light">
              EZwallet is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in EZwallet everyday with worldwide
              users coverage.
            </p>
          </div>
        </div>
      </div>
      <div class="col h-100 overflow-auto d-flex px-4">
        <div class="container align-self-center">
          <div class="py-5 px-2 pr-5">
            <h4 class="font-weight-bold">
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </h4>
            <p class="text-muted">
              Transfering money is eassier than ever, you can access EZwallet
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
          </div>
          <div>
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
</template>

<script>
import { mapActions } from 'vuex'
export default {
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
      loginUser: 'auth/loginUser'
    }),
    toForgotPass() {
      alert("Forgot pass");
    },
    login() {
      const data = {
        email: this.form.email,
        password: this.form.pw
      }
      this.loginUser(data).then((res) => {
        alert(res);
        this.$router.push('/setPin');
      }).catch((err) => {
        if (err === 'Email not found') {
          alert('Email tidak terdaftar');
        } else if (err === 'Login failed, please check your password') {
          alert('Password Salah');
        } else {
          console.log(err);
        }
      })
    },
  },
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.bg-accent {
  background-image: url("/assets/Vector1.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 50px;
}
input:focus {
  border-color: blue !important;
  box-shadow: none !important;
  outline: 0 none !important;
}
</style>
