<template>
  <div class="bg-light vh-100">
    <div class="d-none d-lg-block">
      <Nbar />
    </div>
    <div class="d-block d-lg-none">
      <h4 class="font-weight bold">
        <b-link @click="$router.push('/dashboard').catch(() => {})">
          <i class="fas fa-arrow-left"></i>
        </b-link>
        History
      </h4>
    </div>
    <div class="container">
      <div class="row py-5">
        <div class="col-3 d-none d-lg-block">
          <Sbar />
        </div>
        <div class="col">
          <Transactions />
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
import Transactions from "../components/Transactions";
import Footer from "../components/Footer";
export default {
  components: { Nbar, Sbar, Transactions, Footer },
};
</script>
