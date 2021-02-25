<template>
  <div class="vh-100">
    <Nbar class="mb-5" />
    <div class="container h-100">
      <div class="row">
        <div class="col-3 d-none d-lg-block">
          <Sbar />
        </div>
        <div class="col">
          <Receiver />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nbar from "../components/Navbar";
import Sbar from "../components/Sidebar";
import Receiver from "../components/Receiver";
import Footer from "../components/Footer";
export default {
  components: {
    Sbar,
    Nbar,
    Receiver,
    Footer,
  },
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
</style>
