<template>
  <div>
    <b-modal id="modalHistory" hide-footer>
      <template #modal-title> Transaction History </template>
      <div class="row">
        <div class="col-4">
          <img
            v-if="detailHistory.to_id !== idUser"
            class="imageHistory"
            :src="`http://localhost:4001/images/${detailHistory.to_image}`"
          />
          <img
            v-else
            class="imageHistory"
            :src="`http://localhost:4001/images/${detailHistory.from_image}`"
          />
        </div>
        <div class="col d-flex">
          <div class="align-self-center">
            <h5 v-if="detailHistory.to_id !== idUser" class="font-weight-bold">
              {{ detailHistory.to_name }}
            </h5>
            <h5 v-else class="font-weight-bold">
              {{ detailHistory.from_name }}
            </h5>
            <p v-if="detailHistory.to_id !== idUser" class="text-muted m-0">
              {{ detailHistory.to_phone }}
            </p>
            <p v-else class="text-muted m-0">
              {{ detailHistory.from_phone }}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <div class="d-flex justify-content-between mb-2">
          <h5 class="m-0">Amount</h5>
          <h5
            v-if="detailHistory.status === 1"
            class="m-0 c-pending font-weight-bold"
          >
            +Rp{{ toRupiah(detailHistory.amount) }}
          </h5>
          <h5
            v-else-if="
              detailHistory.status === 2 && detailHistory.to_id !== idUser
            "
            class="m-0 c-transfer font-weight-bold"
          >
            -Rp{{ toRupiah(detailHistory.amount) }}
          </h5>
          <h5
            v-else-if="detailHistory.status === 2"
            class="m-0 text-success font-weight-bold"
          >
            +Rp{{ toRupiah(detailHistory.amount) }}
          </h5>
          <h5
            v-else-if="detailHistory.status === 3"
            class="m-0 c-cancel font-weight-bold"
          >
            +Rp{{ toRupiah(detailHistory.amount) }}
          </h5>
          <h5 v-else class="m-0 c-topup font-weight-bold">
            +Rp{{ toRupiah(detailHistory.amount) }}
          </h5>
        </div>
        <hr />
        <div class="d-flex justify-content-between mb-2">
          <h5 class="m-0">Date & Time</h5>
          <h5 class="m-0">{{ detailHistory.created_at }}</h5>
        </div>
        <hr />
        <div class="mb-4">
          <h6 class="m font-weight-bold">Notes :</h6>
          <h6 class="m-0">{{ detailHistory.notes }}</h6>
        </div>
        <div class="mb-2">
          <h6 v-if="detailHistory.status === 1" class="m font-weight-bold">
            Selection
          </h6>
          <button
            @click="btcancelTarget()"
            v-if="detailHistory.status === 1 && detailHistory.to_id === idUser"
            class="btn btn-danger mr-2"
          >
            Reject
          </button>
          <button
            @click="btaccept()"
            v-if="detailHistory.status === 1 && detailHistory.to_id === idUser"
            class="btn btn-success"
          >
            Accept
          </button>
          <!-- show user -->
          <button
            @click="btcancelUser()"
            v-if="detailHistory.status === 1 && detailHistory.to_id !== idUser"
            class="btn btn-warning"
          >
            Cancel
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import currency from "../helper/currency";
import { mapGetters, mapActions } from 'vuex'
import alert from '../helper/alert'
export default {
  mixins: [alert, currency],
  computed: {
    ...mapGetters({
      idUser: 'auth/getID',
      token: "auth/getToken",
      detailHistory: 'history/getDetailHistory'
    })
  },
  methods: {
    ...mapActions({
      getAllHistoryUser: "history/getAllHistoryUser",
      actionSuccess: "transfer/actionSuccess",
      actionCancelReceiver: "transfer/actionCancelReceiver",
      actionCancelSender: "transfer/actionCancelSender",
    }),
    allHistoryUser () {
      const data = {
        id: this.idUser,
        token: this.token,
        sort: 'DESC',
        page: 1,
        limit: 4
      };
      this.getAllHistoryUser(data)
    },
    btaccept () {
      const data = {
        id: this.idUser,
        token: this.token,
      }
      this.actionSuccess(data).then((res) => {
        this.ToastSuccess(res)
        this.allHistoryUser() //get data histori ulang 
        // this.getDetailUser() //get data balance ulang
        this.$bvModal.hide('modalHistory') //untuk hide modal
      }).catch((err) => {
        this.ToastError(err)
      })
    },
    btcancelTarget () {
      const data = {
        id: this.idUser,
        token: this.token,
      }
      this.actionCancelReceiver(data).then((res) => {
        this.ToastSuccess(res)
        this.allHistoryUser() //get data histori ulang 
        // this.getDetailUser() //get data balance ulang
        this.$bvModal.hide('modalHistory') //untuk hide modal
      }).catch((err) => {
        this.ToastError(err)
      })
    },
    btcancelUser () {
      const data = {
        id: this.idUser,
        token: this.token,
      }
      this.actionCancelSender(data).then((res) => {
        this.ToastSuccess(res)
        this.allHistoryUser() //get data histori ulang 
        // this.getDetailUser() //get data balance ulang
        this.$bvModal.hide('modalHistory') //untuk hide modal
      }).catch((err) => {
        this.ToastError(err)
      })
    }
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.imageHistory {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
}
.c-transfer,
.c-cancel {
  color: red;
}
.c-pending {
  color: orange;
}
.c-topup {
  color: #6379f4;
}
</style>