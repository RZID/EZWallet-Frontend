<template>
  <div class="card border-0 shadow text-white bg-blue">
    <div class="card-body">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div>
            <p>Balance</p>
            <h2 class="font-weight-bold">Rp. {{ balance }}</h2>
            <p class="m-0">{{ phone }}</p>
          </div>
          <div class="d-flex">
            <div class="align-self-center">
              <button
                @click="transfer()"
                class="btn btn-block btn-outline-light"
              >
                <b-icon icon="arrow-up"></b-icon> Transfer
              </button>
              <button @click="topup()" class="btn btn-block btn-outline-light">
                <b-icon icon="plus"></b-icon>
                Top Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      balance: '',
      phone: ''
    }
  },
  computed: {
    ...mapGetters({
      idUser: 'auth/getID',
      token: 'auth/getToken'
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
        this.balance = res.balance
        this.phone = res.phone
      })
    },
    transfer () {
      alert('Transfer')
    },
    topup () {
      alert('Topup')
    }
  },
  mounted () {
    this.getDetailUser()
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
div.card {
  border-radius: 15px;
}
</style>
