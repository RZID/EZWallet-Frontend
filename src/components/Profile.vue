<template>
  <div class="card border-0 shadow">
    <div class="card-body">
      <div class="py-3">
        <div class="container d-flex justify-content-center mb-2">
          <img
            class="img-people"
            :src="imageUrl ? imageUrl : '/assets/people/samsul.jpg'"
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
export default {
  data: () => {
    return {
      imageUrl: "",
      imageRaw: "",
    };
  },
  methods: {
    editImageUser (e) {
      const image = e.target.files[0];
      this.imageUrl = "";
      this.imageRaw = "";
      if (image["type"] !== "image/jpeg" && image["type"] !== "image/png") {
        alert("Masukkan foto bertipe jpg/jpeg/png");
      } else {
        this.imageUrl = URL.createObjectURL(image);
        this.imageRaw = image;
      }
    },
  },
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