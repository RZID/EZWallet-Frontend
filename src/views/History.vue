<template>
  <div class="bg-light">
    <div class="d-none d-lg-block">
      <Nbar />
    </div>
    <div class="container d-flex d-lg-none py-4">
      <b-link
        class="text-dark mr-3"
        @click="$router.push('/dashboard').catch(() => {})"
      >
        <h5 class="m-0 font-weight-bold align-self-center">
          <b-icon icon="arrow-left"></b-icon>
        </h5>
      </b-link>
      <h5 class="m-0 align-self-center font-weight-bold">History</h5>
    </div>
    <div class="container">
      <div class="row pb-5 py-lg-5">
        <div class="col-3 d-none d-lg-block">
          <Sbar />
        </div>
        <div class="col">
          <Transactions />
        </div>
      </div>
    </div>
    <div class="d-none d-lg-block">
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
