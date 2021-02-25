<template>
  <div class="card shadow border-0">
    <div class="card-body d-flex justify-content-between pb-0">
      <h5 class="font-weight-bold">Transaction History</h5>
      <b-link @click="seeAll()" class="text-blue text-decoration-none"
        >See All</b-link
      >
    </div>
    <!-- Item -->
    <div v-if="allHistory.length > 0" class="container py-2">
      <div
        v-for="(itm, idx) in allHistory"
        :key="idx"
        class="row no-gutters min-item mb-2"
      >
        <div
          v-if="itm.to_id !== idUser"
          class="col-3 imgCenter"
          :style="`background: url(${getURL}/images/${itm.to_image})`"
        ></div>
        <div
          v-else
          class="col-3 imgCenter"
          :style="`background: url(${getURL}/images/${itm.from_image})`"
        ></div>
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
            <p v-if="itm.status === 1" class="text-muted m-0">pending</p>
            <p v-else-if="itm.status === 2" class="text-muted m-0">Transfer</p>
            <p v-else-if="itm.status === 3" class="text-muted m-0">Cancel</p>
            <p v-else class="text-muted m-0">Top UP</p>
          </div>
          <div class="align-self-center">
            <h6 v-if="itm.status === 1" class="font-weight-bold c-pending">
              +Rp{{ itm.amount }}
            </h6>
            <h6
              v-else-if="itm.status === 2 && itm.to_id !== idUser"
              class="font-weight-bold c-transfer"
            >
              -Rp{{ itm.amount }}
            </h6>
            <h6
              v-else-if="itm.status === 2"
              class="font-weight-bold text-success"
            >
              +Rp{{ itm.amount }}
            </h6>
            <h6 v-else-if="itm.status === 3" class="font-weight-bold c-cancel">
              +Rp{{ itm.amount }}
            </h6>
            <h6 v-else class="font-weight-bold c-topup">+Rp{{ itm.amount }}</h6>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container py-2">
      <div class="row no-gutters min-item mb-2 text-center">
        <!-- <div class="col-12"><b-icon icon=""></b-icon></div> -->
        <div class="col-12"><h4>-- No transactions --</h4></div>
      </div>
    </div>
    <!-- End Of Item -->

    <!-- <div class="container py-2">
      <div class="row no-gutters min-item">
        <div
          class="col-3 imgCenter"
          style="background: url('/assets/people/samsul.jpg')"
        ></div>
        <div class="col d-flex ml-2 justify-content-between">
          <div class="align-self-center">
            <h5 class="font-weight-bold m-0" v-line-clamp="1">Samsul Biarin</h5>
            <p class="text-muted m-0">Transfer</p>
          </div>
          <div class="align-self-center">
            <h6 class="font-weight-bold text-success">+Rp150.000</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-2">
      <div class="row no-gutters min-item">
        <div
          class="col-3 imgCenter"
          style="background: url('/assets/people/samsul.jpg')"
        ></div>
        <div class="col d-flex ml-2 justify-content-between">
          <div class="align-self-center">
            <h5 class="font-weight-bold m-0">Samsul Mintana</h5>
            <p class="text-muted m-0">Transfer</p>
          </div>
          <div class="align-self-center">
            <h6 class="font-weight-bold text-danger">-Rp500.000</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-2">
      <div class="row no-gutters min-item">
        <div
          class="col-3 imgCenter"
          style="background: url('/assets/people/samsul.jpg')"
        ></div>
        <div class="col d-flex ml-2 justify-content-between">
          <div class="align-self-center">
            <h5 class="font-weight-bold m-0" v-line-clamp="1">
              Samsul Bin Mi'un Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Necessitatibus ut enim dicta aspernatur
              consectetur, molestias assumenda accusantium odio nihil maiores
              fugit dolore debitis nostrum libero totam accusamus, rerum id
              dolor.
            </h5>
            <p class="text-muted m-0">Transfer</p>
          </div>
          <div class="align-self-center">
            <h6 class="font-weight-bold text-danger">-Rp1.250.000</h6>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      idUser: "auth/getID",
      token: "auth/getToken",
      allHistory: "history/getDataAllUser",
      getURL: "history/getURL",
    }),
  },
  methods: {
    ...mapActions({
      getAllHistoryUser: "history/getAllHistoryUser",
    }),
    allHistoryUser() {
      const data = {
        id: this.idUser,
        token: this.token,
      };
      this.getAllHistoryUser(data)
    },
    seeAll() {
      this.$router.push("/history");
    },
  },
  mounted () {
    this.allHistoryUser()
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.imgCenter {
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  border-radius: 15px;
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
</style>