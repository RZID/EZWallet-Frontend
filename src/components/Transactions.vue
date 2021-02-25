<template>
  <div class="card h-100 border-0 shadow">
    <div class="card-body">
      <div class="container">
        <h5 class="font-weight-bold">Transaction History</h5>
        <h6 class="font-weight-bold text-muted">This Week</h6>
        <div>
          <!-- Item -->
          <b-link
            v-for="(itm, idx) in allHistory"
            :key="idx"
            class="text-decoration-none text-dark"
            v-b-modal.modalHistory
          >
            <div class="item">
              <div class="row">
                <div class="col-4 col-md-3 col-lg-2">
                  <img
                    class="imgTransaction"
                    :src="`http://localhost:4001/images/${itm.image}`"
                  />
                </div>
                <div class="col d-flex">
                  <div class="align-self-center w-100">
                    <div class="d-flex justify-content-between">
                      <div>
                        <h6 class="font-weight-bold m-0">{{ itm.name }}</h6>
                        <p class="text-muted m-0">{{ itm.notes }}</p>
                      </div>
                      <div>
                        <h5 class="font-weight-bold text-success">
                          +Rp{{ itm.amount }}
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
import modalHistory from "./ModalHistory";
import { mapGetters, mapActions } from 'vuex'
export default {
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
      getAllHistoryUser: 'history/getAllHistoryUser'
    }),
    allHistoryUser () {
      const data = {
        id: this.idUser,
        token: this.token
      }
      this.getAllHistoryUser(data)
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
</style>
