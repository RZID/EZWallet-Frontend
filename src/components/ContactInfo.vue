<template>
  <div class="card shadow border-0 radius-12">
    <div class="card-body">
      <div class="d-flex justify-content-between mb-3">
        <h5 class="font-weight-bold">Contacts Info</h5>
        <b-link class="text-blue text-decoration-none">
          <h6 @click="seeAllContact()" class="font-weight-bold">See all</h6>
        </b-link>
      </div>
      <div class="h-content overflow-auto">
        <div v-for="(itm, idx) in getAllUser" :key="idx" class="d-flex mb-2">
          <img
            class="img-people radius-12 mr-2"
            :src="
              itm.image
                ? `${getURL}/images/${itm.image}`
                : `${getURL}/images/default.png`
            "
            alt=""
          />
          <div class="align-self-center">
            <h6 class="font-weight-bold">{{ itm.name }}</h6>
            <p class="text-muted m-0">{{ itm.phone }}</p>
          </div>
        </div>

        <!-- <div class="d-flex mb-2">
          <img
            class="img-people radius-12 mr-2"
            src="/assets/people/samsul.jpg"
            alt=""
          />
          <div class="align-self-center">
            <h6 class="font-weight-bold">Samsul Bahri</h6>
            <p class="text-muted m-0">+62 8371-1010-2737</p>
          </div>
        </div>
        
        <div class="d-flex mb-2">
          <img
            class="img-people radius-12 mr-2"
            src="/assets/people/samsul.jpg"
            alt=""
          />
          <div class="align-self-center">
            <h6 class="font-weight-bold">Samsul Bahri</h6>
            <p class="text-muted m-0">+62 8371-1010-2737</p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import alert from '../helper/alert'
export default {
  mixins: [alert],
  computed: {
    ...mapGetters({
      getID: "auth/getID",
      getToken: "auth/getToken",
      getURL: "history/getURL",
      getAllUser: "users/getAllUser"
    }),
  },
  methods: {
    ...mapActions({
      actionGetAllUser: "users/actionGetAllUser"
    }),
    getAll () {
      const data = {
        id: this.getID,
        token: this.getToken,
        search: ''
      };
      this.actionGetAllUser(data)
    },
    seeAllContact () {
      this.ToastDanger('This feature is not yet available')
    }
  },
  mounted () {
    this.getAll()
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.h-content {
  height: 30vh;
}
.img-people {
  width: 75px;
  height: 75px;
  object-fit: cover;
}
</style>