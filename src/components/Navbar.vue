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
              v-if="!image"
              class="img-user bg-dark mr-3 align-self-center"
              :src="`${getURL}/images/default.png`"
              :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
              alt=""
            />
            <img
              v-else-if="ImgProfile.img"
              class="img-user bg-dark mr-3 align-self-center"
              :src="`${getURL}/images/${ImgProfile.img}`"
              :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
              alt=""
            />
            <img
              v-else
              class="img-user bg-dark mr-3 align-self-center"
              :src="`${getURL}/images/${image}`"
              :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
              alt=""
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
.img-user {
  max-height: 50px;
  border-radius: 12px;
}
.h-navbar {
  height: 100px;
  border-radius: 0px 0px 20px 20px;
}
</style>
