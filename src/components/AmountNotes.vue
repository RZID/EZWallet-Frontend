<template>
  <div class="card border-0 shadow">
    <div class="card-body">
      <h5 class="font-weight-bold">Transfer Money</h5>
      <div class="card border-0 shadow mb-4">
        <div class="card-body d-flex">
          <img
            v-if="!image"
            class="img-people mr-4"
            :src="`${getURL}/images/default.png`"
            alt=""
          />
          <img
            v-else
            class="img-people mr-4"
            :src="`${getURL}/images/${image}`"
            alt=""
          />
          <div class="align-self-center">
            <h5 class="font-weight-bold">{{ name }}</h5>
            <p class="text-muted m-0">{{ phone }}</p>
          </div>
        </div>
      </div>
      <div>
        <p class="text-muted">
          Type the amount you want to transfer and then<br />
          press continue to the next steps.
        </p>
        <currency-input
          class="form-control form-control-lg text-center font-weight-bold border-0 mb-3"
          currency="IDR"
          locale="id"
          :precision="0"
          v-model="form.amount"
          :valueRange="{ min: 0, max: form.balanceLeft }"
        />
        <p class="font-weight-bold text-center mb-5">
          Rp{{ toRupiah(form.balanceLeft) }} Available
        </p>
        <div class="d-flex justify-content-center">
          <div class="w-50">
            <div class="input-group">
              <div class="input-group-prepend">
                <span
                  class="input-group-text border-top-0 border-left-0 bg-white rounded-0"
                >
                  <b-icon icon="pencil"></b-icon>
                </span>
              </div>
              <input
                v-model="form.notes"
                type="text"
                class="form-control border-top-0 border-left-0 border-right-0 bg-white rounded-0"
                placeholder="Add some notes"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5 d-flex justify-content-end">
        <button class="btn btn-lg btn-blue radius-12" @click="btContinue()">
          <!-- @click="$router.push('/transfer?role=detail')" -->
          <small class="p-3">Continue</small>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import currency from "../helper/currency";
import { mapGetters, mapActions } from "vuex"
import alert from '../helper/alert'
export default {
  mixins: [currency, alert],
  data: () => {
    return {
      form: {
        amount: 0,
        balanceLeft: 0,
        notes: "",
      },
      name: '',
      phone: '',
      image: ''
    };
  },
  computed: {
    ...mapGetters({
      getID: 'auth/getID',
      token: 'auth/getToken',
      getURL: 'history/getURL'
    })
  },
  methods: {
    ...mapActions({
      actionGetUser: 'users/actionGetUser',
      detailTransfer: 'history/detailTransfer'
    }),
    btContinue () {
      // console.log(this.form)
      this.detailTransfer(this.form)
      this.$router.push(`/transfer?role=detail&id=${this.$route.query.id.toString()}`)
    }
  },
  mounted () {
    // tagert
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
      if (err.response) {
        this.ToastError(err.response.message)
      }
    })
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
input.font-weight-bold.border-0 {
  font-size: 32px;
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
