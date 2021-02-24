<template>
  <div>
    <b-modal id="modalHistory" hide-footer>
      <template #modal-title> Transaction History </template>
      <div class="row">
        <div class="col-4">
          <img class="imageHistory" src="/assets/people/samsul.jpg" alt="" />
        </div>
        <div class="col d-flex">
          <div class="align-self-center">
            <h5 class="font-weight-bold">Samsul Supriatna</h5>
            <p class="text-muted m-0">+62 123 1231 3211</p>
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <div class="d-flex justify-content-between mb-2">
          <h5 class="m-0">Amount</h5>
          <h5 class="m-0 text-success font-weight-bold">+Rp50.000</h5>
        </div>
        <hr />
        <div class="d-flex justify-content-between mb-2">
          <h5 class="m-0">Date & Time</h5>
          <h5 class="m-0">23 Jul 2020</h5>
        </div>
        <hr />
        <div class="mb-2">
          <h6 class="m font-weight-bold">Notes :</h6>
          <h6 class="m-0">Buat jajan</h6>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.imageHistory {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
}
</style>