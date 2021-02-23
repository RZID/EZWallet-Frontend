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
              Zwallet is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in Zwallet everyday with worldwide
              users coverage.
            </p>
          </div>
        </div>
      </div>
      <div class="col h-100 overflow-auto d-flex">
        <div class="container align-self-center">
          <div class="px-4">
            <h4 class="font-weight-bold">
              Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
              That You Created Yourself.
            </h4>
            <p class="text-muted">
              Create 6 digits pin to secure all your money and your data in
              Zwallet app. Keep it secret and don’t tell anyone about your
              Zwallet account password and the PIN.
            </p>
            <div>
              <PincodeInput v-model="form.code" placeholder="_" length="6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PincodeInput from "vue-pincode-input";
export default {
  components: { PincodeInput },
  data: () => {
    return {
      revealPass: false,
      form: {
        code: "",
      },
    };
  },
  methods: {
    toForgotPass() {
      alert("Forgot pass");
    },
    signUp() {
      alert("signUp");
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
<style>
div.vue-pincode-input-wrapper {
  width: 53px;
}

/* input.vue-pincode-input { */
/* // any styles you want for each cell */
/* } */
</style>
