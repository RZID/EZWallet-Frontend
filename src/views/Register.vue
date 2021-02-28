<template>
  <div>
    <div class="row vh-100 no-gutters">
      <div
        class="col-lg-7 bg-blue h-100 bg-accent overflow-auto d-none d-lg-flex px-5"
      >
        <LeftTemplate />
      </div>
      <div class="col h-100 overflow-auto d-lg-flex px-lg-5 phone-brand">
        <div>
          <div class="d-flex d-lg-none h-brand">
            <h3
              class="font-weight-bold w-100 align-self-center m-0 text-center text-blue"
            >
              EZwallet
            </h3>
          </div>
        </div>
        <div class="align-self-center bg-white h-content round py-5 py-lg-0">
          <div class="container">
            <div class="px-4">
              <!-- For desktop -->
              <div class="d-none d-lg-block">
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
              <!-- End of for desktop -->

              <!-- For mobile < md -->
              <div class="d-block d-lg-none text-center mb-5">
                <h4 class="font-weight-bold">Sign Up</h4>
                <p class="text-muted">
                  Create your account to access EZwallet.
                </p>
              </div>
              <!-- End Of for mobile < md -->
              <div>
                <form @submit.prevent="signUp()">
                  <div class="input-group mb-4">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                        id="basic-addon1"
                      >
                        <i class="far fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control border-top-0 border-left-0 border-right-0 rounded-0"
                      placeholder="Enter your username"
                      v-model="form.username"
                      required
                    />
                  </div>
                  <div class="input-group mb-4">
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
                  <div class="input-group mb-4">
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
                        class="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
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
                  <div class="pt-4">
                    <button
                      type="submit"
                      class="btn btn-secondary btn-block"
                      style="border-radius: 12px"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <p class="text-center pt-4">
                  Already have an account? Let's
                  <b-link
                    class="text-decoration-none"
                    @click="$router.push('/login').catch(() => {})"
                  >
                    Login
                  </b-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
        username: "",
      },
    };
  },
  methods: {
    ...mapActions({
      registerUser: 'auth/registerUser'
    }),
    signUp () {
      const data = {
        name: this.form.username,
        email: this.form.email,
        password: this.form.pw
      }
      this.registerUser(data)
        .then((res) => {
          this.ToastSuccess(res)
          this.$router.push('/login');
        }).catch((err) => {
          this.ToastError(err)
        })
    },
  },
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
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
}
input:focus {
  border-color: blue !important;
  box-shadow: none !important;
  outline: 0 none !important;
}
.h-brand {
  height: 100px;
}
.round {
  border-radius: 25px 25px 0px 0px;
}
</style>
