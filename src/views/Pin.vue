<template>
  <div>
    <div class="row min-vh-100 no-gutters">
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
      <div class="col h-100 overflow-auto d-flex">
        <div class="container align-self-center" v-if="role === 'fill'">
          <div class="px-5">
            <h4 class="font-weight-bold">
              Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
              That You Created Yourself.
            </h4>
            <p class="text-muted">
              Create 6 digits pin to secure all your money and your data in
              EZwallet app. Keep it secret and don’t tell anyone about your
              EZwallet account password and the PIN.
            </p>
            <form @submit.prevent="toConfirm()">
              <div class="px-5">
                <div class="pt-4">
                  <PincodeInput
                    v-model="form.code"
                    required
                    placeholder="_"
                    :length="6"
                  />
                </div>
                <div class="pt-5">
                  <button
                    class="btn btn-block btn-blue radius-12"
                    :disabled="form.code.length < 6"
                    type="submit"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="container align-self-center" v-else-if="role === 'success'">
          <div class="px-5 mx-3">
            <h1 class="font-weight-bold display-4 text-success">
              <i class="fas fa-check-circle"></i>
            </h1>
            <h4 class="font-weight-bold pt-3">
              Your PIN Was Successfully Created
            </h4>
            <p class="text-muted pt-3">
              Your PIN was successfully created and you can now access all the
              features in EZwallet. Login to your new account and start
              exploring!
            </p>
            <button
              type="button"
              class="btn btn-block btn-blue radius-12 font-weight-bold mt-5"
              @click="$router.push('/dashboard').catch(() => {})"
            >
              Login Now
            </button>
          </div>
        </div>
        <div
          class="container align-self-center text-center"
          v-else-if="role === 'loading'"
        >
          <div class="spinner-grow text-blue" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <h4 class="font-weight-bold pt-2">Please wait</h4>
          <p class="text-muted">We're verifying your PIN for safety reason</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PincodeInput from "vue-pincode-input";
import { mapActions } from "vuex";
import alert from '../helper/alert'
export default {
  mixins: [alert],
  components: { PincodeInput },
  data: () => {
    return {
      form: {
        code: "",
      },
      role: "fill",
    };
  },
  methods: {
    ...mapActions({
      actionSetPin: "auth/actionSetPin",
    }),
    toConfirm () {
      this.role = "loading";
      const data = { pin: this.form.code };
      this.actionSetPin(data)
        .then((res) => {
          this.role = "success";
          this.ToastSuccess(res)
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          this.ToastError(err)
        });
    },
  },
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.btn-blue {
  background-color: #6379f4;
  color: white;
}
.btn-blue:hover {
  background-color: #5265cf;
  color: white;
}
.btn-blue:disabled {
  background-color: #dadada;
  color: #88888f;
}
.btn-blue:disabled:hover {
  background-color: #dadada;
  color: #88888f;
}
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
<style >
div.vue-pincode-input-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
input.vue-pincode-input:invalid {
  border-radius: 10px;
  box-shadow: none;
  border: 1px solid #a9a9a9;
  padding: 12px;
}
input.vue-pincode-input:valid {
  border-radius: 10px;
  box-shadow: none;
  border: 1px solid #6379f4;
  padding: 12px;
}
</style>
