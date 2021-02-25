<template>
  <div class="bg-light vh-100">
    <Nbar />
    <div class="container">
      <div class="row py-5">
        <div class="col-3 d-none d-lg-block">
          <Sbar />
        </div>
        <div class="col">
          <Balance />
          <div class="row py-3">
            <div class="col">
              <GraphIncome class="h-100" />
            </div>
            <div class="col">
              <TransactionHistory />
            </div>
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
import Balance from "../components/Balance";
import GraphIncome from "../components/GraphIncome";
import TransactionHistory from "../components/TransactionHistory";
import Footer from "../components/Footer";
export default {
  components: { Nbar, Sbar, Balance, GraphIncome, TransactionHistory, Footer },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
};
</script>

<style>
</style>