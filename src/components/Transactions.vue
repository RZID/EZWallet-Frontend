<template>
  <div class="card card-lg h-100 border-0 shadow">
    <div class="card-body p-0 p-lg-4">
      <div class="container">
        <div class="d-none d-lg-block">
          <h5 class="font-weight-bold">Transaction History</h5>
        </div>
        <h6 class="font-weight-bold text-muted mb-3">This Week</h6>
        <div v-if="msgErr !== 'Data unavailable'">
          <!-- Item -->
          <b-link
            v-for="(itm, idx) in allHistory"
            :key="idx"
            class="text-decoration-none text-dark"
            v-b-modal.modalHistory
            @click="test(itm)"
          >
            <div class="card shadow border-0 mb-3">
              <div class="card-body h-100">
                <div class="d-flex">
                  <div class="row align-self-center w-100">
                    <div
                      class="col-4 col-sm-3 col-md-2 imgCenter d-flex justify-content-center"
                    >
                      <img
                        v-if="itm.to_id !== idUser"
                        class="imgCenter"
                        :src="`${process.env.VUE_APP_BACKEND}/images/${itm.to_image}`"
                        :onerror="`this.onerror=null;this.src='${process.env.VUE_APP_BACKEND}/images/default.png'`"
                      />
                      <img
                        v-else
                        class="imgCenter"
                        :src="`${process.env.VUE_APP_BACKEND}/images/${itm.from_image}`"
                        :onerror="`this.onerror=null;this.src=${process.env.VUE_APP_BACKEND}/images/default.png`"
                      />
                    </div>
                    <div class="col d-flex">
                      <div class="align-self-center w-100">
                        <div class="d-flex justify-content-between">
                          <div>
                            <h5
                              v-if="itm.to_id !== idUser"
                              class="font-weight-bold m-0"
                              v-line-clamp="1"
                            >
                              {{ itm.to_name }}
                            </h5>
                            <h5
                              v-else
                              class="font-weight-bold m-0"
                              v-line-clamp="1"
                            >
                              {{ itm.from_name }}
                            </h5>
                            <!-- <p class="text-muted m-0">{{ itm.notes }}</p> -->
                            <p v-if="itm.status === 1" class="text-muted m-0">
                              Pending
                            </p>
                            <p
                              v-else-if="itm.status === 2"
                              class="text-muted m-0"
                            >
                              Transfer
                            </p>
                            <p
                              v-else-if="itm.status === 3"
                              class="text-muted m-0"
                            >
                              Cancel
                            </p>
                            <p v-else class="text-muted m-0">Top Up</p>
                          </div>
                          <div>
                            <h5
                              v-if="itm.status === 1"
                              class="font-weight-bold c-pending"
                              v-line-clamp="1"
                            >
                              Rp{{ toRupiah(itm.amount) }}
                            </h5>
                            <h5
                              v-else-if="
                                itm.status === 2 && itm.to_id !== idUser
                              "
                              class="font-weight-bold c-transfer"
                              v-line-clamp="1"
                            >
                              -Rp{{ toRupiah(itm.amount) }}
                            </h5>
                            <h5
                              v-else-if="itm.status === 2"
                              class="font-weight-bold text-success"
                              v-line-clamp="1"
                            >
                              +Rp{{ toRupiah(itm.amount) }}
                            </h5>
                            <h5
                              v-else-if="itm.status === 3"
                              class="font-weight-bold c-cancel"
                              v-line-clamp="1"
                            >
                              Rp{{ toRupiah(itm.amount) }}
                            </h5>
                            <h5
                              v-else
                              class="font-weight-bold c-topup"
                              v-line-clamp="1"
                            >
                              +Rp{{ toRupiah(itm.amount) }}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-link>
          <!-- pagination -->
          <div class="overflow-auto">
            <b-pagination
              @input="pagination('')"
              v-model="formPage.page"
              :total-rows="TotalData"
              :per-page="formPage.limit"
              pills
              size="sm"
              align="right"
              class="mt-2"
            ></b-pagination>
          </div>
          <!-- End Of Item -->
        </div>
        <div v-else>
          <div class="text-center">
            <img src="/assets/notransaction.png" alt="" />
            <h4 class="font-weight-bold">It's Clear!</h4>
            <p class="text-muted">You've never done a transaction so far</p>
          </div>
        </div>
      </div>
    </div>
    <modalHistory />
  </div>
</template>

<script>
import currency from "../helper/currency";
import modalHistory from "./ModalHistory";
import { mapGetters, mapActions } from 'vuex'
export default {
  mixins: [currency],
  data () {
    return {
      formPage: {
        sort: 'DESC',
        page: 1,
        limit: 4
      },
      msgErr: ''
    }
  },
  components: {
    modalHistory,
  },
  computed: {
    ...mapGetters({
      idUser: 'auth/getID',
      token: 'auth/getToken',
      allHistory: 'history/getDataAllUser',
      getURL: 'history/getURL',
      TotalData: 'history/getTotalData'
    })
  },
  methods: {
    ...mapActions({
      getAllHistoryUser: 'history/getAllHistoryUser',
      detailHistory: 'history/detailHistory'
    }),
    pagination () {
      this.allHistoryUser()
    },
    allHistoryUser () {
      const data = {
        id: this.idUser,
        token: this.token,
        sort: this.formPage.sort,
        page: this.formPage.page,
        limit: this.formPage.limit
      }
      this.getAllHistoryUser(data).then((res) => {
        this.msgErr = res
      }).catch((err) => {
        this.msgErr = err
      })
    },
    test (data) {
      this.detailHistory(data)
    },
    seeAll () {
      this.$router.push('/history')
    }
  },
  mounted () {
    this.allHistoryUser()
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
@media screen and (max-width: 992px) {
  .card-lg {
    background-color: transparent !important;
    box-shadow: none !important;
  }
}
.imgCenter {
  object-fit: cover;
  border-radius: 15px;
  height: 60px;
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
</style>
