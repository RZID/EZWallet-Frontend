<template>
  <div class="bg-light">
    <Nbar />
    <div class="my-5">
      <div class="container">
        <div class="row">
          <div class="col-3 d-none d-lg-block">
            <Sbar />
          </div>
          <div class="col">
            <changePin />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nbar from '../components/Navbar'
import Sbar from '../components/Sidebar'
import changePin from '../components/ChangePin'
import Footer from '../components/Footer'
export default {
  components: { Nbar, Sbar, changePin, Footer }
}
</script>

<style>
</style>