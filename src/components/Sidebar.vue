<template>
  <div class="card border-0 shadow h-100">
    <div class="card-body p-0">
      <div class="h-100">
        <div class="h-100 d-flex align-items-start flex-column">
          <div class="h-side">
            <div
              class="container mt-5 text-muted"
              :class="
                $route.path === '/dashboard'
                  ? 'active'
                  : $route.path === '/history'
                  ? 'active'
                  : ''
              "
            >
              <h5
                @click="$router.push('/dashboard').catch(() => {})"
                class="m-0 mx-3 pointer"
              >
                <b-icon icon="grid"></b-icon>
                Dashboard
              </h5>
            </div>
            <div
              class="container mt-5 text-muted"
              :class="$route.path === '/transfer' ? 'active' : ''"
            >
              <h5
                @click="$router.push('/transfer').catch(() => {})"
                class="m-0 mx-3 pointer"
              >
                <b-icon icon="arrow-up"></b-icon>
                Transfer
              </h5>
            </div>
            <div
              class="container mt-5 text-muted"
              :class="$route.path === '/topup' ? 'active' : ''"
            >
              <h5 @click="topup()" class="m-0 mx-3 pointer">
                <b-icon icon="plus"></b-icon>
                Top Up
              </h5>
            </div>
            <div
              class="container mt-5 text-muted"
              :class="
                $route.path === '/my-profile'
                  ? 'active'
                  : $route.path === '/my-profile/personal-info'
                  ? 'active'
                  : $route.path === '/my-profile/change-pass'
                  ? 'active'
                  : $route.path === '/my-profile/change-pin'
                  ? 'active'
                  : $route.path === '/my-profile/manage-number'
                  ? 'active'
                  : ''
              "
            >
              <h5 @click="profile()" class="m-0 mx-3 pointer">
                <b-icon icon="person"></b-icon>
                Profile
              </h5>
            </div>
          </div>
          <div class="container pb-4 mt-auto text-muted">
            <h5 @click="logout()" class="align-items-end mx-3 pointer">
              <b-icon icon="box-arrow-right"></b-icon>
              Logout
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import alert from '../helper/alert'
export default {
  mixins: [alert],
  data () {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions({
      actionLogout: "auth/actionLogout",
    }),
    topup () {
      this.$router.push("/topup").catch(() => { });
    },
    profile () {
      this.$router.push("/my-profile").catch(() => { });
    },
    logout () {
      this.actionLogout().then((res) => {
        if (res) {
          this.ToastSuccess('See you later!')
          this.$router.push("/");
        }
      });
    },
  },
  mounted () { },
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

.font-title {
  font-size: 24px;
}
.bt-blue {
  background: #6379f4;
}

.bt-blue:hover {
  color: #fff;
  background: #425be7;
}

.f-white {
  color: #fff;
}
.h-side {
  height: 400px;
}
</style>