<template>
  <div class="card shadow border-0 radius-12 h-100">
    <div class="card-body">
      <h5 class="font-weight-bold">Manage Phone Number</h5>
      <p class="text-muted">
        You can only delete the phone number and then<br />
        you must add another phone number.
      </p>
      <div class="card shadow border-0">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="text-muted">Primary</p>
              <h5 class="m-0 font-weight-bold">
                {{ number }}
              </h5>
            </div>
            <div class="align-self-center">
              <b-link class="text-decoration-none" @click="deleteNumber()">
                <h2 class="m-0 text-muted">
                  <b-icon icon="trash"></b-icon>
                </h2>
              </b-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import alert from '../helper/alert'
export default {
  mixins: [alert],
  props: ['number'],
  methods: {
    deleteNumber () {
      this.AlertConfirm('Are you sure?', 'Want to delete this number?').then(() => {
        // Buat hapus nomer telepon
      })
    }
  }
}
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
</style>
