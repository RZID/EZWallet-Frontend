<template>
  <div class="card shadow border-0 h-100">
    <div class="card-body d-flex align-items-start flex-column">
      <button
        @click="btnPersonal()"
        class="btn btn-gray btn-block btn-lg radius-12 h-50 mb-auto"
      >
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
      <button
        @click="$router.push('/my-profile/change-pin').catch(() => {})"
        class="btn btn-gray btn-block btn-lg radius-12 h-50 mb-auto"
      >
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
import alert from '../helper/alert'
export default {
  mixins: [alert],
  methods: {
    ...mapActions({
      actionLogout: "auth/actionLogout",
    }),
    btnPersonal () {
      this.$router.push('/my-profile/personal-info')
    },
    logout () {
      this.actionLogout().then((res) => {
        if (res) {
          this.ToastSuccess('See you later!')
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
