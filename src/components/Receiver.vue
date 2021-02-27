<template>
  <div class="card border-0 shadow">
    <div class="card-body">
      <h5 class="font-weight-bold">Search Receiver</h5>
      <div class="d-flex align-items-start flex-column h-100">
        <div class="py-4 input-group">
          <div class="input-group-prepend">
            <span class="input-group-text rounding border-0">
              <b-icon icon="search"></b-icon>
            </span>
          </div>
          <input
            @input="searching()"
            v-model="search"
            type="text"
            placeholder="Search receiver here"
            class="form-control border-0 bg-gray rounding"
          />
        </div>
        <!-- Item -->
        <div v-if="isLoading" class="my-auto text-center w-100">
          <div class="align-self-center">
            <div class="spinner-grow text-blue" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <h3 class="font-weight-bold">Wait a moment...</h3>
            <p class="text-muted m-0">We're still igniting process</p>
          </div>
        </div>
        <div v-else class="w-100 h-content overflow-auto">
          <div v-if="msg !== 'Data unavailable'">
            <b-link
              v-for="(itm, idx) in getAllUser"
              :key="idx"
              @click="toDetail(itm)"
              class="text-decoration-none text-dark"
            >
              <div class="container">
                <div class="row item">
                  <div
                    class="col-4 col-md-3 col-lg-2 img-people"
                    :style="`background: url(${getURL}/images/${itm.image})`"
                  ></div>
                  <div class="col d-flex">
                    <div class="align-self-center">
                      <h5 class="font-weight-bold">{{ itm.name }}</h5>
                      <p class="text-muted m-0">{{ itm.phone }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-link>
          </div>
          <div v-else>
            <div class="container">
              <div class="row text-center mt-5">
                <div class="col-12 f-normal">
                  <b-icon icon="search"></b-icon>
                </div>
                <div class="col-12">
                  <h3 class="font-weight-bold">Data Not Found!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Of Item -->
      </div>

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
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => {
    return {
      search: "",
      msg: "",
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters({
      getID: "auth/getID",
      getToken: "auth/getToken",
      getAllUser: "users/getAllUser",
      getURL: "history/getURL",
    }),
  },
  methods: {
    ...mapActions({
      actionGetAllUser: "users/actionGetAllUser",
    }),
    toDetail (receiver) {
      // console.log(receiver.email)
      // console.log(receiver.id)
      this.$router.push(
        `?role=amount_and_note&receiver=${receiver.email}&id=${receiver.id}`
      );
    },
    searching () {
      this.isLoading = true;
      this.msg = "";
      const data = {
        id: this.getID,
        token: this.getToken,
        search: this.search,
      };
      this.actionGetAllUser(data)
        .then((res) => {
          this.msg = res;
        })
        .catch((err) => {
          this.msg = err;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  mounted () {
    this.searching();
  },
};
</script>


<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.h-content {
  height: calc(100vh - 150px - 12rem);
}
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
.f-normal {
  font-size: 25px;
}
</style>
