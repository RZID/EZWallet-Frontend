<template>
  <div class="py-lg-5">
    <div class="container d-flex d-lg-none py-4">
      <b-link
        class="text-dark mr-3"
        @click="$router.push('/transfer').catch(() => {})"
      >
        <h5 class="m-0 font-weight-bold align-self-center">
          <b-icon icon="arrow-left"></b-icon>
        </h5>
      </b-link>
      <h5 class="m-0 align-self-center font-weight-bold">Confirmation</h5>
    </div>
    <div class="card border-0 card-lg shadow py-3">
      <div class="card-body bodycard">
        <h5 class="font-weight-bold">Transfer To</h5>
        <div class="card border-0 shadow mb-4">
          <div class="card-body d-flex">
            <img
              v-if="!image"
              class="img-people mr-4"
              :src="`${getURL}/images/default.png`"
              :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
              alt=""
            />
            <img
              v-else
              class="img-people mr-4"
              :src="`${getURL}/images/${image}`"
              :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
              alt=""
            />
            <div class="align-self-center">
              <h5 class="font-weight-bold">{{ name }}</h5>
              <p class="text-muted m-0">{{ phone }}</p>
            </div>
          </div>
        </div>
        <h5 class="font-weight-bold">Details</h5>
        <!-- Amount -->
        <div class="card card-body border-0 shadow mb-3">
          <p>Amount</p>
          <h5 class="m-0 font-weight-bold">
            Rp{{ toRupiah(detailTreansfer.amount) }}
          </h5>
        </div>
        <!-- End Of Amount -->

        <!-- Balance left -->
        <div class="card card-body border-0 mb-3 shadow">
          <p>Balance Left</p>
          <h5 class="m-0 font-weight-bold">
            Rp{{ toRupiah(form.balanceLeft) }}
          </h5>
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
            <h5 class="m-0 font-weight-bold">{{ detailTreansfer.notes }}</h5>
          </div>
        </div>
        <!-- End Of Note -->
        <div class="d-flex justify-content-end">
          <button
            class="btn btn-blue btn-lg radius-12 d-none d-lg-block"
            @click="getPin()"
          >
            <small class="p-3 font-weight-bold"> Continue </small>
          </button>
          <button
            class="btn btn-blue btn-lg radius-12 btn-block d-lg-none d-block"
            @click="getPin()"
          >
            <small class="p-3 font-weight-bold"> Continue </small>
          </button>
        </div>
      </div>
      <ModalPin />
    </div>
  </div>
</template>

<script>
import Moment from "moment";
import currency from "../helper/currency";
import ModalPin from "../components/PinModal";
import { mapGetters, mapActions } from 'vuex'
export default {
  mixins: [currency],
  components: {
    ModalPin,
  },
  data: () => {
    return {
      form: {
        amount: 25000,
        balanceLeft: 0,
        date: "",
      },
      name: '',
      phone: '',
      image: ''
    };
  },
  computed: {
    ...mapGetters({
      detailTreansfer: 'history/getDetailTreansfer',
      token: 'auth/getToken',
      getURL: 'history/getURL',
      getID: 'auth/getID'
    })
  },
  methods: {
    ...mapActions({
      actionGetUser: 'users/actionGetUser'
    }),
    getPin () {
      this.$bvModal.show("getPin");
    },
    nowTime () {
      this.form.date = Moment().format("MMMM DD, YYYY - HH.mm");
    },
    getDetail () {
      // target
      const data = {
        id: this.$route.query.id.toString(),
        token: this.token
      }
      this.actionGetUser(data).then((res) => {
        this.name = res.name
        this.phone = res.phone
        this.image = res.image
      }).catch((err) => {
        console.log(err)
      })
      // user
      const newData = {
        id: this.getID,
        token: this.token
      }
      this.actionGetUser(newData).then((res) => {
        this.form.balanceLeft = res.balance
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.nowTime();
    setInterval(this.nowTime(), 30000);
    this.getDetail()

    if (Object.keys(this.detailTreansfer).length < 1) {
      return this.$router.push('/transfer').catch(() => { })
    }
  },
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
@media screen and (max-width: 992px) {
  .card-lg {
    box-shadow: none !important;
  }
  .card-lg .bodycard {
    padding: 0 !important;
  }
}
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