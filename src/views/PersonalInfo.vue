<template>
  <div class="bg-light vh-100">
    <Nbar />
    <div class="container">
      <div class="row py-5">
        <div class="col-3 d-none d-lg-block">
          <Sbar />
        </div>
        <div class="col">
          <PersonalInfo />
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Nbar from "../components/Navbar";
import Sbar from "../components/Sidebar";
import Footer from "../components/Footer";
import PersonalInfo from '../components/PersonalInfo'
export default {
  components: { Nbar, Sbar, PersonalInfo, Footer },
};
</script>
