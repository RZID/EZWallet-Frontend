<template>
  <div class="h-navbar bg-white shadow">
    <div class="container d-flex h-100">
      <div class="row w-100 d-flex">
        <div class="col align-self-center">
          <h3 class="text-blue font-weight-bold m-0">EZWallet</h3>
        </div>
        <div class="col align-self-center d-none d-md-block">
          <div class="d-flex justify-content-end">
            <img
              class="img-user bg-dark mr-3 align-self-center"
              :src="`http://localhost:4001/images/${image}`"
              alt=""
              @onerror="'this.onerror=null; this.src=' + image('default.png')"
            />
            <!-- src="/assets/default-user.svg" -->
            <div class="align-self-center">
              <h5 class="font-weight-bold m-0">{{ name }}</h5>
              <small class="text-muted">{{ phone }}</small>
            </div>
            <h3 class="far fa-bell ml-3 align-self-center text-muted m-0"></h3>
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
      name: '',
      phone: '',
      image: ''
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
        this.name = res.name
        this.phone = res.phone
        this.image = res.image
      })
    }
  },
  mounted () {
    this.getDetailUser()
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>

<style>
.img-user {
  max-height: 50px;
  border-radius: 12px;
}
.h-navbar {
  height: 100px;
  border-radius: 0px 0px 20px 20px;
}
</style>
