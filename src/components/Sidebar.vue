<template>
  <div class="card border-0 shadow h-100">
    <div class="card-body p-0">
      <div class="h-100">
        <div class="h-100 d-flex align-items-start flex-column">
          <div>
            <div
              class="container mt-5 text-muted"
              :class="$route.path === '/dashboard' ? 'active' : ''"
            >
              <h4 @click="dasboard()" class="m-0 mx-3 pointer">
                <b-icon icon="grid"></b-icon>
                Dashboard
              </h4>
            </div>
            <div class="container mt-5 text-muted">
              <h4 @click="transfer()" class="m-0 mx-3 pointer">
                <b-icon icon="arrow-up"></b-icon>
                Transfer
              </h4>
            </div>
            <div class="container mt-5 text-muted">
              <h4 @click="topup()" class="m-0 mx-3 pointer">
                <b-icon icon="plus"></b-icon>
                Top Up
              </h4>
            </div>
            <div class="container mt-5 text-muted">
              <h4 @click="profile()" class="m-0 mx-3 pointer">
                <b-icon icon="person"></b-icon>
                Profile
              </h4>
            </div>
          </div>
          <div class="container pb-4 mt-auto text-muted">
            <h4 @click="logout()" class="align-items-end mx-3 pointer">
              <b-icon icon="box-arrow-right"></b-icon>
              Logout
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      actionLogout: 'auth/actionLogout'
    }),
    dasboard () {
      alert('Dasboard')
    },
    transfer () {
      alert('Transfer')
    },
    topup () {
      alert('Topup')
    },
    profile () {
      alert('Profile')
    },
    logout () {
      this.actionLogout().then((res) => {
        if (res) {
          alert('Logout Success!')
          this.$router.push('/')
        }
      })
    }
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.active {
  border-left: solid #6379f4;
  color: #6379f4 !important;
}
div.card {
  border-radius: 15px;
}
/* pointer boleh dihapus ram ini kugunain biar kelihatan mana yang ku klik */
.pointer {
  cursor: pointer;
}
</style>