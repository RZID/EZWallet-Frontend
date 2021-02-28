<template>
  <div class="bg-light">
    <!-- for desktop -->
    <Nbar class="d-none d-lg-block" />
    <!-- end of for desktop -->

    <div class="container py-3 d-flex d-lg-none">
      <!-- for mobile -->
      <div class="align-self-center">
        <img
          v-if="!image"
          class="img-user bg-dark mr-3 align-self-center radius-12"
          :src="`${getURL}/images/default.png`"
          alt=""
        />
        <img
          v-else-if="ImgProfile.img"
          class="img-user bg-dark mr-3 align-self-center radius-12"
          :src="`${getURL}/images/${ImgProfile.img}`"
          alt=""
        /><img
          v-else
          class="img-user bg-dark mr-3 align-self-center radius-12"
          :src="`${getURL}/images/${image}`"
          alt=""
        />
      </div>
      <div class="align-self-center">
        <p class="text-muted m-0">Hello,</p>
        <h5 class="font-weight-bold m-0">
          {{ name }}
        </h5>
      </div>
    </div>
    <!-- end of for mobile -->
    <div class="container">
      <div class="row pb-5 py-lg-5">
        <div class="col-3 d-none d-lg-block">
          <Sbar />
        </div>
        <div class="col">
          <Balance />
          <div class="row py-3">
            <div class="col-lg mb-3 mb-md-0">
              <GraphIncome class="h-100 d-none d-lg-block" />
            </div>
            <div class="col">
              <TransactionHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-none d-lg-block">
      <Footer />
    </div>
  </div>
</template>

<script>
import Nbar from "../components/Navbar";
import Sbar from "../components/Sidebar";
import Balance from "../components/Balance";
import GraphIncome from "../components/GraphIncome";
import TransactionHistory from "../components/TransactionHistory";
import Footer from "../components/Footer";
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { Nbar, Sbar, Balance, GraphIncome, TransactionHistory, Footer },
  data () {
    return {
      name: '',
      phone: '',
      image: '',
      Profile: ''
    }
  },
  computed: {
    ...mapGetters({
      idUser: 'auth/getID',
      token: 'auth/getToken',
      getURL: 'history/getURL',
      ImgProfile: 'users/getImgProfile'
    })
  },
  methods: {
    ...mapActions({
      dataUser: 'users/actionGetUser'
    }),
    getDetailUser () {
      const data = {
        id: this.idUser,
        token: this.token
      }
      this.dataUser(data).then((res) => {
        this.name = res.name
        this.phone = res.phone
        this.image = res.image
      })
    }
  },
  mounted () {
    this.ImgProfile.img = null //set default awal
    this.getDetailUser()
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>

<style scoped>
@media screen and (max-width: 992px) {
  .bg-light {
    background-color: ghostwhite !important;
  }
}
.img-user {
  object-fit: cover;
  height: 75px !important;
  width: 75px !important;
}
</style>