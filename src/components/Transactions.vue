<template>
  <div class="card h-100 border-0 shadow">
    <div class="card-body">
      <div class="container">
        <h5 class="font-weight-bold">Transaction History</h5>
        <h6 class="font-weight-bold text-muted">This Week</h6>
        <div>
          <!-- Item -->
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
                        <h6 class="font-weight-bold m-0">Samsul Soebekti</h6>
                        <p class="text-muted m-0">Transfer</p>
                      </div>
                      <div>
                        <h5 class="font-weight-bold text-success">
                          +Rp100.000
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-link>
          <!-- End Of Item -->

          <!-- Item -->
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
                        <h6 class="font-weight-bold m-0">Samsul Singapur</h6>
                        <p class="text-muted m-0">Transfer</p>
                      </div>
                      <div>
                        <h5 class="font-weight-bold text-danger">
                          -Rp1.000.000
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
        <h6 class="font-weight-bold text-muted">This Month</h6>
        <!-- Item -->
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
        <!-- End Of Item -->
        <!-- Item -->
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
        </b-link>
        <!-- End Of Item -->
      </div>
    </div>
    <modalHistory />
  </div>
</template>

<script>
import modalHistory from "./ModalHistory";
export default {
  components: {
    modalHistory,
  },
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
