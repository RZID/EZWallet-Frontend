<template>
  <div class="h-100">
    <Nbar />
    <div class="container h-100 py-5">
      <div class="row">
        <div class="col-3 d-none d-lg-block">
          <Sbar />
        </div>
        <div class="col">
          <Amount v-if="$route.query.role === 'amount_and_note'" />
          <DetailTrf v-else-if="$route.query.role === 'detail'" />
          <HistoryTrf v-else-if="$route.query.role === 'history'" />
          <Receiver v-else />
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
import Amount from "../components/AmountNotes";
import DetailTrf from "../components/DetailTrf";
import HistoryTrf from "../components/HistoryDetailTransfer";
import Footer from "../components/Footer";
export default {
  components: {
    Sbar,
    Nbar,
    Receiver,
    Amount,
    DetailTrf,
    HistoryTrf,
    Footer,
  },
};
</script>

<style scoped src="../assets/css/style.css">
</style>
<style scoped>
</style>
