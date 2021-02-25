<template>
  <div class="card border-0 shadow">
    <div class="card-body">
      <div class="d-flex justify-content-center" v-if="role === 'success'">
        <div>
          <h1 class="text-success text-center">
            <b-icon icon="check-circle-fill"></b-icon>
          </h1>
          <h5 class="font-weight-bold">Transfer Success</h5>
        </div>
      </div>
      <div class="d-flex justify-content-center" v-else-if="role === 'failed'">
        <div>
          <h1 class="text-danger text-center">
            <b-icon icon="x-circle-fill"></b-icon>
          </h1>
          <h5 class="font-weight-bold text-center">Transfer Failed</h5>
          <h5 class="font-weight-bold text-muted">
            {{ failed.reason }}
          </h5>
        </div>
      </div>
      <div class="card shadow border-0 mb-3">
        <div class="card-body">
          <p>Amount</p>
          <h5 class="font-weight-bold m-0">Rp{{ toRupiah(data.amount) }}</h5>
        </div>
      </div>
      <div class="card shadow border-0 mb-3">
        <div class="card-body">
          <p>Balance Left</p>
          <h5 class="font-weight-bold m-0">
            Rp{{ toRupiah(data.balanceLeft) }}
          </h5>
        </div>
      </div>
      <div class="card shadow border-0 mb-3">
        <div class="card-body">
          <p>Date & Time</p>
          <h5 class="font-weight-bold m-0">
            {{ data.date }}
          </h5>
        </div>
      </div>
      <div class="card shadow border-0 mb-4">
        <div class="card-body">
          <p>Notes</p>
          <h5 class="font-weight-bold m-0">Buat jajan sebulan</h5>
        </div>
      </div>
      <h5 class="font-weight-bold">Transfer to</h5>
      <div class="card shadow border-0">
        <div class="card-body d-flex">
          <img class="img-people mr-4" src="/assets/people/samsul.jpg" alt="" />
          <div class="align-self-center">
            <h5 class="font-weight-bold">Samsul Bahri</h5>
            <p class="text-muted m-0">+62 813-8492-9994</p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end pt-5">
        <button
          class="btn btn-gray mr-2 text-dark radius-12 px-3 py-2 font-weight-bold"
        >
          <b-icon icon="share"></b-icon>
        </button>
        <button
          class="btn btn-gray mr-2 text-blue radius-12 px-3 py-2 font-weight-bold"
        >
          <b-icon icon="download"></b-icon>
          Download PDF
        </button>
        <button
          class="btn btn-blue radius-12 px-3 py-2 font-weight-bold"
          @click="$router.push('/dashboard').catch(() => {})"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import currency from "../helper/currency";
export default {
  mixins: [currency],
  data: () => {
    return {
      data: {
        amount: 100000,
        balanceLeft: 20000,
        date: "May 11, 2020 - 11.20",
      },
      failed: {
        reason: "Your balance isn't enough!",
      },
      role: "failed",
    };
  },
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.card {
  border-radius: 12px;
}
.img-people {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
}
</style>
