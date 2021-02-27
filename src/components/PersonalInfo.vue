<template>
  <div class="card border-0 shadow radius-12">
    <div class="card-body">
      <h5 class="font-weight-bold mb-4">Personal Information</h5>
      <p class="text-muted">
        We got your personal information from the sign <br />
        up process. If you want to make changes on <br />
        your information, contact our support.
      </p>
      <div class="py-3">
        <div class="card border-0 shadow mb-3">
          <div class="card-body">
            <p class="text-muted">Username</p>
            <h5 class="font-weight-bold m-0">{{ data.name }}</h5>
          </div>
        </div>
        <div class="card border-0 shadow mb-3">
          <div class="card-body">
            <p class="text-muted">Verified E-mail</p>
            <h5 class="font-weight-bold m-0">{{ data.email }}</h5>
          </div>
        </div>
        <div class="card border-0 shadow mb-3">
          <div class="card-body">
            <p class="text-muted">Phone Number</p>
            <div class="d-flex justify-content-between">
              <h5 class="font-weight-bold m-0">{{ data.phone }}</h5>
              <b-link
                class="text-blue text-decoration-none font-weight-bold"
                @click="
                  $router.push('/my-profile/manage-number').catch(() => {})
                "
              >
                Manage
              </b-link>
            </div>
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
      data: {
        name: 'Samsul Bahri',
        email: 'samsul@bahri.com',
        phone: '+62 813-9387-7946'
      }
    }
  }
}
</script>

<style scoped src="../assets/css/style.css">
</style>