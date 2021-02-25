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
              <h4
                @click="$router.push('/dashboard').catch(() => {})"
                class="m-0 mx-3 pointer"
              >
                <b-icon icon="grid"></b-icon>
                Dashboard
              </h4>
            </div>
            <div
              class="container mt-5 text-muted"
              :class="$route.path === '/transfer' ? 'active' : ''"
            >
              <h4
                @click="$router.push('/transfer').catch(() => {})"
                class="m-0 mx-3 pointer"
              >
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
    <!-- modal topup -->
    <b-modal ref="my-modal" hide-footer title="Top Up">
      <div class="d-block text-left">
        <label for="form-balance" class="font-weight-bold font-title"
          >Nominal</label
        >
        <form action="" @submit.prevent="btnTopUp()">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text font-weight-bold">Rp.</span>
            </div>
            <input
              v-model="form.nominal"
              class="form-control"
              id="form-balance"
              type="text"
              :placeholder="detailUser.balance"
              required
            />
          </div>
          <button type="submit" class="btn btn-block bt-blue f-white mt-3">
            <b-icon icon="plus"></b-icon>
            Top Up
          </button>
        </form>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
        >Cancel</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        nominal: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      idUser: "auth/getID",
      token: "auth/getToken",
      detailUser: "users/getDetailUser",
    }),
  },
  methods: {
    ...mapActions({
      dataUser: "users/actionGetUser",
      getTopUp: "users/actionTopUp",
      getHistory: "history/postHistory",
      actionLogout: "auth/actionLogout",
    }),
    getDetailUser() {
      this.detailUser;
      const data = {
        id: this.idUser,
        token: this.token,
      };
      this.dataUser(data);
    },
    dasboard() {
      alert("Dasboard");
    },
    topup() {
      this.$refs["my-modal"].show();
    },
    btnTopUp() {
      // data to tb user
      const sum = Number(this.detailUser.balance) + Number(this.form.nominal);
      const newData = {
        id: this.idUser,
        token: this.token,
        data: {
          balance: sum,
        },
      };
      // data to tb history
      const postData = {
        from_id: 1,
        to_id: this.idUser,
        amount: Number(this.form.nominal),
        status: 4,
        notes: "topup",
      };
      this.getTopUp(newData)
        .then((res) => {
          alert(res);
          this.getHistory(postData); // send data
          this.getDetailUser();
          this.form.nominal = "";
          this.$refs["my-modal"].hide();
        })
        .catch((err) => {
          alert(err);
        });
    },
    hideModal() {
      this.form.nominal = "";
      this.$refs["my-modal"].hide();
    },
    profile() {
      alert("Profile");
    },
    logout() {
      this.actionLogout().then((res) => {
        if (res) {
          alert("Logout Success!");
          this.$router.push("/");
        }
      });
    },
  },
  mounted() {
    this.getDetailUser();
  },
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