<template>
  <div class="py-lg-5 h-100">
    <div class="container d-flex d-lg-none py-4">
      <b-link
        class="text-dark mr-3"
        @click="$router.push('/dashboard').catch(() => {})"
      >
        <h5 class="m-0 font-weight-bold align-self-center">
          <b-icon icon="arrow-left"></b-icon>
        </h5>
      </b-link>
      <h5 class="m-0 align-self-center font-weight-bold">Find Receiver</h5>
    </div>
    <div class="card border-0 shadow">
      <div class="card-body">
        <h5 class="d-none d-lg-block font-weight-bold">Search Receiver</h5>
        <div class="d-flex align-items-start flex-column">
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
          <div v-if="isLoading" class="py-auto text-center w-100 h-100">
            <div class="align-self-center h-100">
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
                    <div class="col-4 col-md-3 col-lg-2">
                      <img
                        :src="getImage(itm.image)"
                        :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
                        @error="defaultImage"
                        class="h-100 w-100 img-people"
                        alt=""
                      />
                    </div>
                    <div class="col d-flex">
                      <div class="align-self-center">
                        <h5 class="font-weight-bold" v-line-clamp="1">
                          {{ itm.name }}
                        </h5>
                        <p class="text-muted m-0" v-line-clamp="1">
                          {{ itm.phone }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </b-link>
            </div>
            <div v-else>
              <div class="container">
                <div class="text-center mt-5">
                  <img
                    class="imageNodata mb-3"
                    src="/assets/nodata.svg"
                    alt=""
                  />
                  <h3 class="font-weight-bold">Oops...</h3>
                  <p class="text-muted">
                    the recipient you are looking for wasn't found
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => {
    return {
      search: "",
      msg: [],
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
    defaultImage (e) {
      e.target.src = `${this.getURL}/images/default.png`
    },
    getImage (image) {
      return `${this.getURL}/images/${image}`
    },
    toDetail (receiver) {
      this.$router.push(
        `?role=amount_and_note&receiver=${receiver.email}&id=${receiver.id}`
      );
    },
    searching () {
      this.msg = ''
      this.isLoading = true;
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
@media screen and (max-width: 992px) {
  .shadow {
    box-shadow: none !important;
  }
  .h-100 .card-body {
    padding: 0% !important;
  }
}
.imageNodata {
  object-fit: cover;
  height: 100px;
  width: 100px;
}
.h-content {
  height: calc(100vh - 12rem);
}
.img-people {
  height: 100px;
  width: 100px;
  object-fit: cover;
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
