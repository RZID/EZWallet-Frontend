<template>
  <div class="card shadow border-0 radius-12 h-100">
    <div class="card-body d-flex align-items-start flex-column">
      <div>
        <h5 class="font-weight-bold">Add Phone Number</h5>
        <p class="text-muted">
          Add at least one phone number for the transfer <br />
          ID so you can start transferring your money to<br />
          another user
        </p>
      </div>
      <div class="my-auto w-100">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <form @submit.prevent="sendNumber()">
              <div class="input-group mb-5">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white border-left-0 border-right-0 border-top-0 rounded-0"
                  >
                    <b-icon class="mr-2 text-muted" icon="telephone"></b-icon>
                    +62
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  class="border-top-0 border-left-0 border-right-0 rounded-0 form-control"
                  v-model="number"
                  required
                />
              </div>
              <button
                type="submit"
                class="btn rounded-12 btn-lg btn-block"
                :class="number ? 'btn-blue' : 'btn-gray text-dark'"
                :disabled="number ? false : true"
              >
                Add Phone Number
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      number: ''
    }
  },
  methods: {
    sendNumber () {
      alert(this.number)
    }
  }
}
</script>

<style scoped src="../assets/css/style.css">
</style>

<style scoped>
input:focus {
  border-color: lightgray !important;
  box-shadow: none;
}
</style>
