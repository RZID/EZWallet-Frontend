<template>
  <div class="card shadow bg-0 border-0">
    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between pb-0 mb-3">
        <h5 class="font-weight-bold">Transaction History</h5>
        <b-link @click="seeAll()" class="text-blue text-decoration-none"
          >See All</b-link
        >
      </div>
      <!-- Item -->
      <div
        v-if="
          msgErr !== 'Data unavailable' ||
          getMsg.msg === 'Get all history success'
        "
        class="container py-2"
      >
        <b-link
          v-for="(itm, idx) in allHistory"
          :key="idx"
          class="text-dark text-decoration-none"
          v-b-modal.modalHistory
          @click="test(itm)"
        >
          <!-- For mobile! -->
          <div class="d-flex d-lg-none row">
            <div class="card w-100 mb-2 shadow border-0 h-content">
              <div class="card-body">
                <div class="row no-gutters">
                  <div
                    class="col-4 col-sm-3 col-md-2 imgCenter d-flex justify-content-center"
                  >
                    <div class="align-self-center">
                      <img
                        class="imgCenter"
                        v-if="!itm.to_image || !itm.from_image"
                        :src="`${getURL}/images/default.png`"
                        :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
                        alt=""
                      /><img
                        class="imgCenter"
                        v-else-if="itm.to_id !== idUser"
                        :src="`${getURL}/images/${itm.to_image}`"
                        :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
                        alt=""
                      /><img
                        v-else
                        class="imgCenter"
                        :src="`${getURL}/images/${itm.from_image}`"
                        :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col d-flex ml-2 justify-content-between">
                    <div class="align-self-center">
                      <h5
                        v-if="itm.to_id !== idUser"
                        class="font-weight-bold m-0"
                        v-line-clamp="1"
                      >
                        {{ itm.to_name }}
                      </h5>
                      <h5 v-else class="font-weight-bold m-0" v-line-clamp="1">
                        {{ itm.from_name }}
                      </h5>
                      <p v-if="itm.status === 1" class="text-muted m-0">
                        Pending
                      </p>
                      <p v-else-if="itm.status === 2" class="text-muted m-0">
                        Transfer
                      </p>
                      <p v-else-if="itm.status === 3" class="text-muted m-0">
                        Cancel
                      </p>
                      <p v-else class="text-muted m-0">Top UP</p>
                    </div>
                    <div class="align-self-center">
                      <h6
                        v-if="itm.status === 1"
                        class="font-weight-bold c-pending"
                        v-line-clamp="1"
                      >
                        Rp{{ toRupiah(itm.amount) }}
                      </h6>
                      <h6
                        v-else-if="itm.status === 2 && itm.to_id !== idUser"
                        class="font-weight-bold c-transfer"
                        v-line-clamp="1"
                      >
                        -Rp{{ toRupiah(itm.amount) }}
                      </h6>
                      <h6
                        v-else-if="itm.status === 2"
                        class="font-weight-bold text-success"
                        v-line-clamp="1"
                      >
                        +Rp{{ toRupiah(itm.amount) }}
                      </h6>
                      <h6
                        v-else-if="itm.status === 3"
                        class="font-weight-bold c-cancel"
                        v-line-clamp="1"
                      >
                        Rp{{ toRupiah(itm.amount) }}
                      </h6>
                      <h6
                        v-else
                        class="font-weight-bold c-topup"
                        v-line-clamp="1"
                      >
                        +Rp{{ toRupiah(itm.amount) }}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of for mobile -->

          <!-- for desktop -->
          <div class="d-none d-lg-flex row no-gutters min-item mb-2 py-auto">
            <div
              class="col-4 col-sm-3 col-md-2 imgCenter d-flex justify-content-center"
            >
              <div class="align-self-center">
                <img
                  class="imgCenter"
                  v-if="!itm.to_image || !itm.from_image"
                  :src="`${getURL}/images/default.png`"
                  :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
                  alt=""
                /><img
                  class="imgCenter"
                  v-else-if="itm.to_id !== idUser"
                  :src="`${getURL}/images/${itm.to_image}`"
                  :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
                  alt=""
                /><img
                  v-else
                  class="imgCenter"
                  :src="`${getURL}/images/${itm.from_image}`"
                  :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
                  alt=""
                />
              </div>
            </div>
            <div class="col d-flex ml-2 justify-content-between">
              <div class="align-self-center">
                <h5
                  v-if="itm.to_id !== idUser"
                  class="font-weight-bold m-0"
                  v-line-clamp="1"
                >
                  {{ itm.to_name }}
                </h5>
                <h5 v-else class="font-weight-bold m-0" v-line-clamp="1">
                  {{ itm.from_name }}
                </h5>
                <p v-if="itm.status === 1" class="text-muted m-0">Pending</p>
                <p v-else-if="itm.status === 2" class="text-muted m-0">
                  Transfer
                </p>
                <p v-else-if="itm.status === 3" class="text-muted m-0">
                  Cancel
                </p>
                <p v-else class="text-muted m-0">Top Up</p>
                <!-- SHOW BUTTON -->
                <!-- show target -->
              </div>
              <div class="align-self-center">
                <h6
                  v-if="itm.status === 1"
                  class="font-weight-bold c-pending"
                  v-line-clamp="1"
                >
                  Rp{{ toRupiah(itm.amount) }}
                </h6>
                <h6
                  v-else-if="itm.status === 2 && itm.to_id !== idUser"
                  class="font-weight-bold c-transfer"
                  v-line-clamp="1"
                >
                  -Rp{{ toRupiah(itm.amount) }}
                </h6>
                <h6
                  v-else-if="itm.status === 2"
                  class="font-weight-bold text-success"
                  v-line-clamp="1"
                >
                  +Rp{{ toRupiah(itm.amount) }}
                </h6>
                <h6
                  v-else-if="itm.status === 3"
                  class="font-weight-bold c-cancel"
                  v-line-clamp="1"
                >
                  Rp{{ toRupiah(itm.amount) }}
                </h6>
                <h6 v-else class="font-weight-bold c-topup" v-line-clamp="1">
                  +Rp{{ toRupiah(itm.amount) }}
                </h6>
              </div>
            </div>
          </div>
          <!-- End of for desktop -->
        </b-link>
      </div>
      <div v-else class="text-center py-2 d-flex h-100">
        <div class="align-self-center w-100">
          <div class="">
            <img src="/assets/notransaction.png" alt="" />
            <h4 class="font-weight-bold my-3">It's Clear!</h4>
            <p class="text-muted">You've never done a transaction so far</p>
          </div>
        </div>
      </div>
      <!-- End Of Item -->
    </div>
    <modalHistory />
  </div>
</template>

<script>
import currency from "../helper/currency";
import { mapGetters, mapActions } from "vuex";
import modalHistory from "./ModalHistory";
import alert from '../helper/alert'
export default {
  components: {
    modalHistory,
  },
  mixins: [currency, alert],
  data () {
    return {
      msgErr: ''
    }
  },
  computed: {
    ...mapGetters({
      idUser: "auth/getID",
      token: "auth/getToken",
      allHistory: "history/getDataAllUser",
      getURL: "history/getURL",
      getMsg: "history/getMsg"
    }),
  },
  methods: {
    ...mapActions({
      getAllHistoryUser: "history/getAllHistoryUser",
      actionSuccess: "transfer/actionSuccess",
      actionCancelReceiver: "transfer/actionCancelReceiver",
      actionCancelSender: "transfer/actionCancelSender",
      dataUser: "users/actionGetUser",
      detailHistory: 'history/detailHistory'
    }),
    test (data) {
      this.detailHistory(data)
    },
    getDetailUser () {
      const data = {
        id: this.idUser,
        token: this.token,
      };
      this.dataUser(data);
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
        this.msgErr = res
      }).catch((err) => {
        this.msgErr = err
      })
    },
    seeAll () {
      this.$router.push("/history");
    },
    btaccept (id) {
      const data = {
        id,
        token: this.token
      }
      this.actionSuccess(data)
        .then((res) => {
          this.ToastSuccess(res)
          this.allHistoryUser() //get data histori ulang 
          this.getDetailUser() //get data balance ulang
        }).catch((err) => {
          this.ToastError(err)
        })
    },
    btcancelTarget (id) { // ini reject
      const data = {
        id,
        token: this.token,
      }
      this.actionCancelReceiver(data).then((res) => {
        this.ToastSuccess(res)
        this.allHistoryUser() //get data histori ulang 
        this.getDetailUser() //get data balance ulang
      }).catch((err) => {
        this.ToastError(err)
      })
    },
    btcancelUser (id) { // ini cancel
      const data = {
        id,
        token: this.token,
      }
      this.actionCancelReceiver(data).then((res) => {
        this.ToastSuccess(res)
        this.allHistoryUser() //get data histori ulang 
        this.getDetailUser() //get data balance ulang
      }).catch((err) => {
        this.ToastError(err)
      })
    }
  },
  mounted () {
    this.allHistoryUser()
    this.getMsg.msg = null
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
@media screen and (max-width: 992px) {
  .shadow {
    box-shadow: none !important;
  }
  div.bg-0.card {
    background-color: transparent;
  }
}
.imgCenter {
  object-fit: cover;
  border-radius: 15px;
  height: 60px;
}
.min-item {
  min-height: 75px;
}
div.card {
  border-radius: 15px;
}
.c-transfer,
.c-cancel {
  color: red;
}
.c-pending {
  color: orange;
}
.c-topup {
  color: #6379f4;
}
.h-content {
  height: 100px;
}
</style>