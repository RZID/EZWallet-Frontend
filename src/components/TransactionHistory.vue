<template>
  <div class="card shadow border-0">
    <div class="card-body d-flex justify-content-between pb-0">
      <h5 class="font-weight-bold">Transaction History</h5>
      <b-link class="text-blue text-decoration-none">See All</b-link>
    </div>
    <!-- Item -->
    <div class="container py-2">
      <div class="row no-gutters min-item">
        <div
          class="col-3 imgCenter"
          style="background: url('/assets/people/samsul.jpg')"
        ></div>
        <div class="col d-flex ml-2 justify-content-between">
          <div class="align-self-center">
            <h5 class="font-weight-bold m-0" v-line-clamp="1">Samsul Bahri</h5>
            <p class="text-muted m-0">Transfer</p>
          </div>
          <div class="align-self-center">
            <h6 class="font-weight-bold text-success">+Rp50.000</h6>
          </div>
        </div>
      </div>
    </div>
    <!-- End Of Item -->

    <!-- Item -->
    <div class="container py-2">
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
    <!-- End Of Item -->

    <!-- Item -->
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
    <!-- End Of Item -->
    <!-- Item -->
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
    </div>
    <!-- End Of Item -->
  </div>
</template>

<script>
export default {};
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
</style>