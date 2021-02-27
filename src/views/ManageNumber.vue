<template>
  <div>
    <div class="bg-light vh-100">
      <Nbar />
      <div class="container">
        <div class="row py-5">
          <div class="col-3 d-none d-lg-block">
            <Sbar />
          </div>
          <div class="col">
            <!-- kalau nomernya ada, redirect kesini -->
            <ManageNumber v-if="number" :number="number" />
            <!-- kalo nomernya gaada, maka nambah nomer telepon dulu -->
            <AddNumber v-else />
          </div>
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
import AddNumber from '../components/AddNumber'
import ManageNumber from '../components/ManageNumber'
import Footer from "../components/Footer";
export default {
  data: () => {
    return {
      // kalo nomernya gaada
      number: false
      // kalo nomernya ada 
      // number: '+62 899123123123'
    }
  },
  components: { Nbar, Sbar, AddNumber, ManageNumber, Footer },
};
</script>
