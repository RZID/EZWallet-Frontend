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
          <h4 class="font-weight-bold">Samsul Bahri</h4>
          <p class="text-muted m-0">+62 813-9387-7946</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      imageUrl: "",
      imageRaw: "",
      id: localStorage.getItem('id')
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
    }),
    setDetailUser () {
      const data = {
        id: this.idUser.toString(),
        token: this.token
      }
      this.getDataUser(data).then((response) => {
        this.imageUrl = response.image
      })
    },
    editImageUser (e) {
      const image = e.target.files[0];
      this.imageUrl = "";
      this.imageRaw = "";
      if (image["type"] !== "image/jpeg" && image["type"] !== "image/png") {
        alert("Masukkan foto bertipe jpg/jpeg/png");
      } else {
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
          alert(response)
          this.setDetailUser()
        }).catch((err) => {
          alert(err)
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