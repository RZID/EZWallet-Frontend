<template>
  <div class="card border-0 shadow">
    <div class="card-body">
      <div class="py-3">
        <div class="container d-flex justify-content-center mb-2">
          <img
            class="img-people"
            :src="
              imageUrl
                ? `${getURL}/images/${imageUrl}`
                : `${getURL}/images/default.png`
            "
            :onerror="`this.onerror=null;this.src='${getURL}/images/default.png'`"
            alt=""
          />
        </div>
        <p class="text-center">
          <input
            type="file"
            accept="image/png/jpg"
            id="fileUpload"
            class="d-none"
            @input="editImageUser"
          />
          <b-link
            class="text-muted text-decoration-none"
            onclick="document.getElementById('fileUpload').click()"
          >
            <b-icon icon="pencil"></b-icon> Edit
          </b-link>
        </p>
        <div class="container text-center">
          <h4 class="font-weight-bold">{{ name }}</h4>
          <p class="text-muted m-0">{{ phone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import alert from '../helper/alert'
export default {
  mixins: [alert],
  data: () => {
    return {
      imageUrl: "",
      imageRaw: "",
      id: localStorage.getItem('id'),
      name: "",
      phone: ""
    };
  },
  computed: {
    ...mapGetters({
      idUser: "auth/getID",
      token: "auth/getToken",
      getDetailUser: "users/getDetailUser",
      getURL: 'history/getURL'
    })
  },
  methods: {
    ...mapActions({
      getDataUser: 'users/actionGetUser',
      changePhotoProfile: 'users/changeProfilePhoto',
      imageNavbar: 'users/imageNavbar'
    }),
    setDetailUser () {
      const data = {
        id: this.idUser,
        token: this.token
      }
      this.getDataUser(data).then((response) => {
        this.imageUrl = response.image
        this.name = response.name
        this.phone = response.phone
        const data = {
          img: response.image
        }
        this.imageNavbar(data)
      })
    },
    editImageUser (e) {
      const image = e.target.files[0];
      if (image["type"] !== "image/jpeg" && image["type"] !== "image/png") {
        this.ToastError('Please enter a jpg/jpeg/png image format!')
      } else {
        this.imageUrl = '';
        this.imageRaw = '';
        this.imageUrl = URL.createObjectURL(image);
        this.imageRaw = image;
        const fd = new FormData()
        fd.append('image', this.imageRaw)
        const result = {
          id: this.idUser,
          token: this.token,
          data: {
            image: fd
          }
        }
        this.changePhotoProfile(result).then((response) => {
          this.ToastSuccess(response)
          this.setDetailUser()
        }).catch((err) => {
          this.ToastError(err)
        })
      }
    },
  },
  mounted () {
    this.setDetailUser()
  }
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.img-people {
  width: 75px;
  height: 75px;
  border-radius: 12px;
  object-fit: cover;
}
div.card {
  border-radius: 15px;
}
</style>