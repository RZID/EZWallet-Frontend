<template>
  <div class="card border-0 shadow">
    <div class="card-body">
      <h5 class="font-weight-bold">Transfer To</h5>
      <div class="card border-0 shadow mb-4">
        <div class="card-body d-flex">
          <img class="img-people mr-4" src="/assets/people/samsul.jpg" alt="" />
          <div class="align-self-center">
            <h5 class="font-weight-bold">Samsul Bahri</h5>
            <p class="text-muted m-0">+62 813-8492-9994</p>
          </div>
        </div>
      </div>
      <h5 class="font-weight-bold">Details</h5>
      <!-- Amount -->
      <div class="card card-body border-0 shadow mb-3">
        <p>Amount</p>
        <h5 class="m-0 font-weight-bold">Rp{{ toRupiah(form.amount) }}</h5>
      </div>
      <!-- End Of Amount -->

      <!-- Balance left -->
      <div class="card card-body border-0 mb-3 shadow">
        <p>Balance Left</p>
        <h5 class="m-0 font-weight-bold">Rp{{ toRupiah(form.balanceLeft) }}</h5>
      </div>
      <!-- End Of Balance Left -->

      <!-- Date -->
      <div class="card card-body mb-3 border-0 shadow">
        <p>Date & Time</p>
        <div class="input-group">
          <h5 class="m-0 font-weight-bold">{{ form.date }}</h5>
        </div>
      </div>
      <!-- End Of Date -->

      <!-- Note -->
      <div class="card card-body mb-5 border-0 shadow">
        <p>Notes</p>
        <div class="input-group">
          <h5 class="m-0 font-weight-bold">Buat jajan sebulan</h5>
        </div>
      </div>
      <!-- End Of Note -->
      <div class="d-flex justify-content-end">
        <button class="btn btn-blue btn-lg radius-12" @click="getPin()">
          <small class="p-3 font-weight-bold"> Continue </small>
        </button>
      </div>
    </div>
    <ModalPin />
  </div>
</template>

<script>
import Moment from "moment";
import currency from "../helper/currency";
import ModalPin from "../components/PinModal";
export default {
  mixins: [currency],
  components: {
    ModalPin,
  },
  data: () => {
    return {
      form: {
        amount: 25000,
        balanceLeft: 50000,
        date: "",
      },
    };
  },
  methods: {
    getPin() {
      this.$bvModal.show("getPin");
    },
    nowTime() {
      this.form.date = Moment().format("MMMM DD, YYYY - HH.mm");
    },
  },
  mounted() {
    this.nowTime();
    setInterval(this.nowTime(), 30000);
  },
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.img-people {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
}
div.card {
  border-radius: 15px;
}
.bg-gray {
  background-color: #ebecec;
}
.bg-gray:focus {
  background-color: #ebecec;
}
input:focus {
  box-shadow: none;
}
</style>