<template>
  <div>
    <b-modal id="getPin" hide-footer hide-header centered>
      <div v-if="isLoading" class="d-flex h-100 w-100 justify-content-center">
        <div class="p-5 text-center">
          <div class="spinner-grow mb-3 text-blue" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <h4 class="font-weight-bold">Processing...</h4>
          <p class="text-muted m-0">
            Please wait, we're processing<br />
            your transaction
          </p>
        </div>
      </div>
      <div v-else>
        <div class="p-3">
          <div class="d-flex justify-content-between">
            <h5 class="m-0 font-weight-bold">Enter PIN to Transfer</h5>
            <b-link
              class="text-decoration-none text-dark"
              @click="$bvModal.hide('getPin')"
              ><h5 class="m-0 font-weight-bold"><b-icon icon="x"></b-icon></h5
            ></b-link>
          </div>
          <p class="my-4 text-muted">
            Enter your 6 digits PIN for confirmation to<br />continue
            transferring money.
          </p>

          <form @submit.prevent="sendCode()">
            <div class="w-100 d-flex justify-content-center mb-3">
              <div class="row">
                <div class="col-8">
                  <PincodeInput
                    v-model="form.code"
                    required
                    placeholder="_"
                    :length="6"
                  />
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button
                type="submit"
                class="btn px-3 radius-12"
                :class="form.code.length < 6 ? 'btn-secondary' : ' btn-blue'"
                :disabled="form.code.length < 6"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import PincodeInput from "vue-pincode-input";
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => {
    return {
      form: {
        code: "",
      },
      isLoading: false,
      isError: false,
    };
  },
  computed: {
    ...mapGetters({
      getID: 'auth/getID',
      token: 'auth/getToken'
    }),
  },
  methods: {
    ...mapActions({
      checkPin: 'pin/checkPin'
    }),
    sendCode() {
      const data = {
        id: this.getID,
        token: this.token,
        data: {
          pin: this.form.code
        }
      }
      this.isLoading = true;
      setTimeout(() => {
        this.checkPin(data).then((res) => {
          this.isLoading = false;
          alert(res)
          this.form.code = "";
          this.$bvModal.hide("getPin");
          this.$router.push("/dashboard");
        }).catch((err) => {
          alert(err)
          this.form.code = "";
          this.$bvModal.hide("getPin");
          this.$router.push("/transfer?role=history");
        })
      }, 5000);
    },
  },
  components: { PincodeInput },
};
</script>

<style scoped src="../assets/css/style.css">
</style>
