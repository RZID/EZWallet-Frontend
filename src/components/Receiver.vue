<template>
  <div class="card border-0 shadow h-100">
    <div class="card-body">
      <h5 class="font-weight-bold">Search Receiver</h5>
      <div class="py-4 input-group">
        <div class="input-group-prepend">
          <span class="input-group-text rounding border-0">
            <b-icon icon="search"></b-icon>
          </span>
        </div>
        <input
          v-model="search"
          type="text"
          placeholder="Search receiver here"
          class="form-control border-0 bg-gray rounding"
        />
      </div>
      <!-- Item -->
      <b-link
        @click="toDetail('samsul@samsul.com')"
        class="text-decoration-none text-dark"
      >
        <div class="container">
          <div class="row item">
            <div
              class="col-4 col-md-3 col-lg-2 img-people"
              style="background: url('/assets/people/samsul.jpg')"
            ></div>
            <div class="col d-flex">
              <div class="align-self-center">
                <h5 class="font-weight-bold">Samsul</h5>
                <p class="text-muted m-0">+62 813-8492-9994</p>
              </div>
            </div>
          </div>
        </div>
      </b-link>
      <!-- End Of Item -->

      <!-- Item -->
      <!-- <b-link
        @click="toDetail('samsul@samsul.com')"
        class="text-decoration-none text-dark"
      >
        <div class="container">
          <div class="row item">
            <div
              class="col-4 col-md-3 col-lg-2 img-people"
              style="background: url('/assets/people/samsul.jpg')"
            ></div>
            <div class="col d-flex">
              <div class="align-self-center">
                <h5 class="font-weight-bold">Samsul</h5>
                <p class="text-muted m-0">+62 813-8492-9994</p>
              </div>
            </div>
          </div>
        </div>
      </b-link> -->
      <!-- End Of Item -->

      <!-- Item -->
      <!-- <b-link
        @click="toDetail('samsul@samsul.com')"
        class="text-decoration-none text-dark"
      >
        <div class="container">
          <div class="row item">
            <div
              class="col-4 col-md-3 col-lg-2 img-people"
              style="background: url('/assets/people/samsul.jpg')"
            ></div>
            <div class="col d-flex">
              <div class="align-self-center">
                <h5 class="font-weight-bold">Samsul</h5>
                <p class="text-muted m-0">+62 813-8492-9994</p>
              </div>
            </div>
          </div>
        </div>
      </b-link> -->
      <!-- End Of Item -->

      <!-- Item -->
      <!-- <b-link
        @click="toDetail('samsul@samsul.com')"
        class="text-decoration-none text-dark"
      >
        <div class="container">
          <div class="row item">
            <div
              class="col-4 col-md-3 col-lg-2 img-people"
              style="background: url('/assets/people/samsul.jpg')"
            ></div>
            <div class="col d-flex">
              <div class="align-self-center">
                <h5 class="font-weight-bold">Samsul</h5>
                <p class="text-muted m-0">+62 813-8492-9994</p>
              </div>
            </div>
          </div>
        </div>
      </b-link> -->
      <!-- End Of Item -->
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data: () => {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters({
      getID: 'auth/getID',
      getToken: 'auth/getToken'
    })
  },
  methods: {
    ...mapActions({
      actionGetAllUser: 'users/actionGetAllUser'
    }),
    toDetail(receiver) {
      this.$router.push(`?role=amount_and_note&receiver=${receiver}`);
    },
  },
  mounted () {
    const data = {
      id: this.getID,
      token: this.getToken
    }
    this.actionGetAllUser(data)
  }
};
</script>


<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.img-people {
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  border-radius: 12px;
}
.item {
  min-height: 80px;
  margin-bottom: 0.75rem;
}
.rounding {
  border-radius: 12px;
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
