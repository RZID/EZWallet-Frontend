<template>
  <div class="bg-light">
    <Nbar />
    <div class="container">
      <div class="row py-5">
        <div class="col-3 d-none d-lg-block">
          <Sbar />
        </div>
        <div class="col">
          <ChangePass />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nbar from '../components/Navbar'
import Sbar from '../components/Sidebar'
import ChangePass from '../components/ChangePass'
import Footer from '../components/Footer.vue'
export default {
  components: { Nbar, Sbar, ChangePass, Footer }

}
</script>

<style>
</style>