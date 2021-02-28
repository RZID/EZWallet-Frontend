<template>
  <div class="card border-0 shadow text-white bg-blue">
    <div class="card-body">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div>
            <p>Balance</p>
            <h2 class="font-weight-bold" v-if="detailUser.balance">
              Rp. {{ toRupiah(detailUser.balance) }}
            </h2>
            <p class="m-0">{{ detailUser.phone }}</p>
          </div>
          <div class="d-flex">
            <div class="align-self-center">
              <button
                @click="transfer()"
                class="btn btn-block btn-outline-light"
              >
                <b-icon icon="arrow-up"></b-icon> Transfer
              </button>
              <button @click="topup()" class="btn btn-block btn-outline-light">
                <b-icon icon="plus"></b-icon>
                Top Up
              </button>
            </div>
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
          <button
            type="submit"
            class="btn btn-block bt-blue radius-12 f-white mt-3"
          >
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
import currency from "../helper/currency";
import alert from '../helper/alert'
import { mapGetters, mapActions } from "vuex";
export default {
  mixins: [currency, alert],
  data () {
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
      getAllHistoryUser: "history/getAllHistoryUser",
      sendMsg: "history/sendMsg"
    }),
    getDetailUser () {
      this.detailUser;
      const data = {
        id: this.idUser,
        token: this.token,
      };
      this.dataUser(data);
    },
    transfer () {
      this.$router.push("/transfer");
    },
    topup () {
      this.$refs["my-modal"].show();
    },
    btnTopUp () {
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
          this.ToastSuccess(res)
          this.getHistory(postData); // send data
          this.getDetailUser(); // get ulang data
          this.allHistoryUser(); //get ulang history
          this.form.nominal = "";
          this.$refs["my-modal"].hide();
        })
        .catch((err) => {
          this.ToastError(err)
        });
    },
    hideModal () {
      this.form.nominal = "";
      this.$refs["my-modal"].hide();
    },
    allHistoryUser () {
      const data = {
        id: this.idUser,
        token: this.token,
        sort: 'DESC',
        page: 1,
        limit: 4
      };
      this.getAllHistoryUser(data).then((res) => {
        const data = {
          msg: res
        }
        this.sendMsg(data) //send msg untuk awal transaksi
      }).catch((err) => {
        const data = {
          msg: err
        }
        this.sendMsg(data) //send msg untuk awal transaksi
      })
    },
  },
  mounted () {
    // this.allHistoryUser()
  },
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
div.card {
  border-radius: 15px;
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
</style>
