<template>
  <div class="card shadow border-0 radius-12 h-100">
    <div class="card-body">
      <h5 class="font-weight-bold mb-3">Change Password</h5>
      <p class="text-muted mb-5">
        You must enter your current password and then <br />
        type your new password twice
      </p>
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-8">
            <form @submit.prevent="changePass()">
              <div class="input-group input-group-lg mb-5">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text text-muted bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                  >
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
                <input
                  :type="!revealOld ? 'password' : 'text'"
                  class="form-control text-muted border-top-0 border-left-0 border-right-0 rounded-0"
                  placeholder="Current password"
                  autocomplete="new-password"
                  v-model="form.old"
                  required
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                  >
                    <b-link class="text-muted" @click="revealOld = !revealOld"
                      ><i class="fas fa-eye-slash" v-if="revealOld"></i>
                      <i v-else class="fas fa-eye"></i
                    ></b-link>
                  </span>
                </div>
              </div>

              <div class="input-group input-group-lg mb-5">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text text-muted bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                  >
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
                <input
                  :type="!revealNew ? 'password' : 'text'"
                  class="form-control text-muted border-top-0 border-left-0 border-right-0 rounded-0"
                  placeholder="New password"
                  autocomplete="new-password"
                  v-model="form.new"
                  required
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                  >
                    <b-link class="text-muted" @click="revealNew = !revealNew">
                      <i class="fas fa-eye-slash" v-if="revealNew"></i>
                      <i v-else class="fas fa-eye"></i>
                    </b-link>
                  </span>
                </div>
              </div>

              <div class="input-group input-group-lg">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text text-muted bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                  >
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
                <input
                  :type="!revealRepeat ? 'password' : 'text'"
                  class="text-muted form-control border-top-0 border-left-0 border-right-0 rounded-0"
                  placeholder="Repeat new password"
                  autocomplete="new-password"
                  v-model="form.repeat"
                  required
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                  >
                    <b-link
                      class="text-muted"
                      @click="revealRepeat = !revealRepeat"
                      ><i class="fas fa-eye-slash" v-if="revealRepeat"></i>
                      <i v-else class="fas fa-eye"></i>
                    </b-link>
                  </span>
                </div>
              </div>
              <div class="py-5">
                <button
                  type="submit"
                  class="btn btn-block font-weight-bold radius-12 btn-lg"
                  :class="
                    form.old && form.new && form.repeat
                      ? 'btn-blue'
                      : 'btn-gray text-dark'
                  "
                  :disabled="form.old && form.new && form.repeat ? false : true"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import alert from '../helper/alert'
import { mapGetters, mapActions } from 'vuex'
export default {
  mixins: [alert],
  data: () => {
    return {
      revealOld: false,
      revealNew: false,
      revealRepeat: false,
      form: {
        old: '',
        new: '',
        repeat: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      idUser: "auth/getID",
      token: "auth/getToken"
    })
  },
  methods: {
    ...mapActions({
      changePassword: 'users/changePassword'
    }),
    changePass () {
      if (this.form.repeat != this.form.new) {
        this.ToastError('Try to recheck the password')
      } else {
        const data = {
          id: this.idUser,
          token: this.token,
          data: {
            oldpassword: this.form.old,
            password: this.form.repeat
          }
        }
        this.changePassword(data).then((response) => {
          this.ToastSuccess(response)
          this.form.old = ''
          this.form.new = ''
          this.form.repeat = ''
        }).catch((err) => {
          this.ToastError(err)
        })
      }
    }
  }
}
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
input:focus {
  border: 1px solid #ced4da;
  box-shadow: none;
}
</style>