<template>
  <div class="card h-100 border-0 shadow">
    <div class="card-body">
      <div class="container">
        <h5 class="font-weight-bold">Transaction History</h5>
        <h6 class="font-weight-bold text-muted">This Week</h6>
        <div v-if="allHistory.length > 0">
          <!-- Item -->
          <b-link
            v-for="(itm, idx) in allHistory"
            :key="idx"
            class="text-decoration-none text-dark"
            v-b-modal.modalHistory
            @click="test(itm)"
          >
            <div class="item">
              <div class="row">
                <div class="col-4 col-md-3 col-lg-2">
                  <img
                    v-if="itm.to_id !== idUser"
                    class="imgTransaction"
                    :src="`http://localhost:4001/images/${itm.to_image}`"
                  />
                  <img
                    v-else
                    class="imgTransaction"
                    :src="`http://localhost:4001/images/${itm.from_image}`"
                  />
                </div>
                <div class="col d-flex">
                  <div class="align-self-center w-100">
                    <div class="d-flex justify-content-between">
                      <div>
                        <h5
                          v-if="itm.to_id !== idUser"
                          class="font-weight-bold m-0"
                        >
                          {{ itm.to_name }}
                        </h5>
                        <h5 v-else class="font-weight-bold m-0">
                          {{ itm.from_name }}
                        </h5>
                        <!-- <p class="text-muted m-0">{{ itm.notes }}</p> -->
                        <p v-if="itm.status === 1" class="text-muted m-0">
                          pending
                        </p>
                        <p v-else-if="itm.status === 2" class="text-muted m-0">
                          Transfer
                        </p>
                        <p v-else-if="itm.status === 3" class="text-muted m-0">
                          Cancel
                        </p>
                        <p v-else class="text-muted m-0">Top UP</p>
                      </div>
                      <div>
                        <h5
                          v-if="itm.status === 1"
                          class="font-weight-bold c-pending"
                        >
                          +Rp{{ toRupiah(itm.amount) }}
                        </h5>
                        <h5
                          v-else-if="itm.status === 2 && itm.to_id !== idUser"
                          class="font-weight-bold c-transfer"
                        >
                          -Rp{{ toRupiah(itm.amount) }}
                        </h5>
                        <h5
                          v-else-if="itm.status === 2"
                          class="font-weight-bold text-success"
                        >
                          +Rp{{ toRupiah(itm.amount) }}
                        </h5>
                        <h5
                          v-else-if="itm.status === 3"
                          class="font-weight-bold c-cancel"
                        >
                          +Rp{{ toRupiah(itm.amount) }}
                        </h5>
                        <h5 v-else class="font-weight-bold c-topup">
                          +Rp{{ toRupiah(itm.amount) }}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-link>
          <!-- End Of Item -->
        </div>
        <div v-else>
          <div class="row text-center">
            <!-- <div class="col-12"><b-icon icon=""></b-icon></div> -->
            <div class="col-12"><h4>-- No transactions --</h4></div>
          </div>
        </div>

        <!-- <h6 class="font-weight-bold text-muted">This Month</h6>

        <b-link class="text-decoration-none text-dark" v-b-modal.modalHistory>
          <div class="item">
            <div class="row">
              <div class="col-4 col-md-3 col-lg-2">
                <img class="imgTransaction" src="/assets/people/samsul.jpg" />
              </div>
              <div class="col d-flex">
                <div class="align-self-center w-100">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h6 class="font-weight-bold m-0">Samsul Supriatna</h6>
                      <p class="text-muted m-0">Transfer</p>
                    </div>
                    <div>
                      <h5 class="font-weight-bold text-danger">-Rp1.000.000</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-link>

        <b-link class="text-decoration-none text-dark" v-b-modal.modalHistory>
          <div class="item">
            <div class="row">
              <div class="col-4 col-md-3 col-lg-2">
                <img class="imgTransaction" src="/assets/people/samsul.jpg" />
              </div>
              <div class="col d-flex">
                <div class="align-self-center w-100">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h6 class="font-weight-bold m-0">Tatang</h6>
                      <p class="text-muted m-0">Transfer</p>
                    </div>
                    <div>
                      <h5 class="font-weight-bold text-success">
                        +Rp1.500.000
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-link> -->
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
  components: {
    modalHistory,
  },
  computed: {
    ...mapGetters({
      idUser: 'auth/getID',
      token: 'auth/getToken',
      allHistory: 'history/getDataAllUser',
      getURL: 'history/getURL'
    })
  },
  methods: {
    ...mapActions({
      getAllHistoryUser: 'history/getAllHistoryUser',
      detailHistory: 'history/detailHistory'
    }),
    allHistoryUser () {
      const data = {
        id: this.idUser,
        token: this.token
      }
      this.getAllHistoryUser(data)
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
.item {
  min-height: 80px;
  margin-bottom: 20px;
}
.imgTransaction {
  max-height: 100px;
  max-width: 100px;
  border-radius: 12px;
  object-fit: cover;
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
