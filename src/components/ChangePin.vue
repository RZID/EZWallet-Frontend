<template>
  <div class="card shadow border-0 radius-12 h-100">
    <div class="card-body">
      <!-- For Loading -->
      <div v-if="isLoading" class="d-flex justify-content-center h-100">
        <div class="align-self-center text-center">
          <div class="spinner-grow text-blue mb-3" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <h4 class="font-weight-bold text-muted">Please wait...</h4>
          <p class="text-muted">We're igniting the process</p>
        </div>
      </div>
      <!-- End of loading -->
      <div class="h-100" v-else>
        <!-- New PIN -->
        <div v-if="pinCorrect">
          <h5 class="font-weight-bold text-secondary mb-3">Change PIN</h5>
          <p class="text-muted">
            Type your 6 digits security PIN to use in <br />
            EZwallet.
          </p>
          <div class="row d-flex justify-content-center text-center">
            <div class="col-md-8 align-self-center">
              <form @submit.prevent="sendNewPIN()">
                <div class="px-5">
                  <div class="pt-4 input-wrapper">
                    <PincodeInput
                      v-model="code"
                      required
                      placeholder="_"
                      :length="6"
                    />
                  </div>
                  <div class="pt-5">
                    <button
                      class="btn btn-block btn-lg radius-12"
                      :class="
                        code.length < 6 ? 'btn-gray text-dark' : 'btn-blue'
                      "
                      :disabled="code.length < 6"
                      type="submit"
                    >
                      Change PIN
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- End of New PIN -->

        <!-- Confirmation of old PIN -->
        <div v-else class="h-100">
          <h5 class="font-weight-bold text-secondary mb-3">Change PIN</h5>
          <div class="alert alert-danger" role="alert" v-if="isError">
            {{ errorMsg }}
          </div>
          <p class="text-muted">
            Enter your current 6 digits EZwallet PIN below to <br />
            continue to the next steps.
          </p>
          <div class="my-auto">
            <div class="row d-flex justify-content-center text-center">
              <div class="col-md-8">
                <form @submit.prevent="toConfirmOldPIN()">
                  <div class="px-5">
                    <div class="pt-4 input-wrapper">
                      <PincodeInput
                        v-model="code"
                        required
                        placeholder="_"
                        :length="6"
                      />
                    </div>
                    <div class="pt-5">
                      <button
                        class="btn btn-block btn-lg radius-12"
                        :class="
                          code.length < 6 ? 'btn-gray text-dark' : 'btn-blue'
                        "
                        :disabled="code.length < 6"
                        type="submit"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- End Of Confirmation old pin -->
      </div>
    </div>
  </div>
</template>

<script>
import PincodeInput from "vue-pincode-input"
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => {
    return {
      code: '',
      pinCorrect: false,
      isLoading: false,
      isError: false,
      errorMsg: 'Incorrect PIN!'
    }
  },
  computed: {
    ...mapGetters({
      idUser: "auth/getID",
      token: "auth/getToken"
    }),
  },
  methods: {
    ...mapActions({
      checkPin: 'pin/checkPin',
      actionSetPin: "auth/actionSetPin"
    }),
    toConfirmOldPIN () {
      // Konfirmasi pin lama dulu yakan 
      this.isLoading = true // Set Loading
      this.isError = false // Set error false, jika tadinya ada error
      // setdata pin
      const data = {
        id: this.idUser,
        token: this.token,
        data: {
          pin: this.code
        }
      }
      setTimeout(() => {
        this.checkPin(data).then((res) => {
          alert(res)
          this.isLoading = false // Set loading false di finally
          this.pinCorrect = true // Buat pindah ke role new pin
          this.code = '' // ini codenya dibikin 0 biar ga nyimpen pin di data
        }).catch((err) => {
          alert(err)
          this.isLoading = false // Set loading false di finally
          this.pinCorrect = false // Buat stay ke role check pin
          this.code = '' // ini codenya dibikin 0 biar ga nyimpen pin di data
        })
      }, 5000)
    },
    sendNewPIN () {
      // Buat pin baru
      this.isLoading = true // Set Loading
      this.isError = false // Set error false, jika tadinya ada error
      const data = { pin: this.code };
      setTimeout(() => {
        this.actionSetPin(data).then((res) => {
          alert('Change pin Success!' || res);
          this.isLoading = false // Set loading false di finally
          this.pinCorrect = true // Buat pindah ke role new pin
          this.code = '' // ini codenya dibikin 0 biar ga nyimpen pin di data
          this.$router.push('/my-profile')
        })
        .catch((err) => {
          alert(err);
          this.isLoading = false // Set loading false di finally
          this.pinCorrect = false // Buat pindah ke role new pin
          this.code = '' // ini codenya dibikin 0 biar ga nyimpen pin di data
        });
      }, 5000)
    }
  },
  components: { PincodeInput },
  mounted () {
  }
}
</script>

<style scoped src="../assets/css/style.css">
</style>
<style>
input:focus {
  border-color: blue !important;
  box-shadow: none !important;
  outline: 0 none !important;
}
div.vue-pincode-input-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
input.vue-pincode-input {
  border-radius: 10px;
  width: 100%;
}
input.vue-pincode-input:invalid {
  box-shadow: none;
  border: 1px solid #a9a9a9;
}
input.vue-pincode-input:valid {
  box-shadow: none;
  border: 1px solid #6379f4;
}
</style>
