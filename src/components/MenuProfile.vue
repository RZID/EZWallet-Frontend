<template>
  <div class="card shadow border-0 h-100">
    <div class="card-body d-flex align-items-start flex-column">
      <button class="btn btn-gray btn-block btn-lg radius-12 h-50 mb-auto">
        <span class="d-flex justify-content-between font-weight-bold">
          <small class="font-weight-bold align-self-center">
            Personal Information
          </small>
          <i class="fas fa-arrow-right"></i>
        </span>
      </button>
      <button
        class="btn btn-gray btn-block btn-lg radius-12 h-50 mb-auto"
        @click="$router.push('/my-profile/change-pass').catch(() => {})"
      >
        <span class="d-flex justify-content-between font-weight-bold">
          <small class="font-weight-bold align-self-center">
            Change Password
          </small>
          <i class="fas fa-arrow-right"></i>
        </span>
      </button>
      <button class="btn btn-gray btn-block btn-lg radius-12 h-50 mb-auto">
        <span class="d-flex justify-content-between font-weight-bold">
          <small class="font-weight-bold align-self-center"> Change PIN </small>
          <i class="fas fa-arrow-right"></i>
        </span>
      </button>
      <button
        @click="logout()"
        class="btn btn-gray btn-block btn-lg h-50 radius-12"
      >
        <span class="d-flex justify-content-start font-weight-bold">
          <small class="font-weight-bold align-self-center"> Logout </small>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      actionLogout: "auth/actionLogout",
    }),
    logout () {
      this.actionLogout().then((res) => {
        if (res) {
          alert("Logout Success!");
          this.$router.push("/");
        }
      })
    }
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
div.card {
  border-radius: 15px;
}
</style>
