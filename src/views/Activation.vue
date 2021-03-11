<template>
  <div class="container min-vh-100">
    <!-- Loading Activation -->
    <div v-if="status == 'loading'">
      <div class="d-flex justify-content-center min-vh-100">
        <div class="align-self-center text-center">
          <div class="spinner-border mb-3 text-blue" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <h3 class="m-0">
            Please Wait
          </h3>
          <p class="m-0">Activating Account</p>
        </div>
      </div>
    </div>
    <!-- Success Activation -->
    <div
      v-else-if="status == 'ok'"
      class="min-vh-100 d-flex justify-content-center"
    >
      <div class="align-self-center">
        <h1 class=" text-muted">
          <i class="fa fa-thumbs-up" aria-hidden="true"></i>
        </h1>
        <h4>OK!</h4>
        <p>
          Your activation success!
        </p>
        <button
          type="button"
          class="btn btn-primary text-center"
          @click="$router.push('/login').catch(() => {})"
        >
          Take me to login page
        </button>
      </div>
    </div>
    <!-- Failed Activation -->
    <div
      v-if="status == 'failed'"
      class="min-vh-100 d-flex justify-content-center"
    >
      <div class="align-self-center">
        <h1 class="text-muted">
          <i class="fa fa-frown" aria-hidden="true"></i>
        </h1>
        <h4>Something not good</h4>
        <p>
          Maybe, your token was expired or typo. Dont make any unique for token
          that requested for activation
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data: () => {
    return {
      status: "loading",
    };
  },
  mounted() {
    setTimeout(() => {
      Axios.get(
        `${process.env.VUE_APP_BACKEND}/api/activate/${this.$route.params.token}/${this.$route.params.email}`
      )
        .then(() => {
          this.status = "ok";
        })
        .catch((err) => {
          console.log(err);
          this.status = "failed";
        });
    }, 3000);
  },
};
</script>

<style scoped src="../assets/css/style.css"></style>
<style scoped></style>
