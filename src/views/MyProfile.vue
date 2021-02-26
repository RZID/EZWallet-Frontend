<template>
  <div class="bg-light vh-100">
    <Nbar />
    <div class="container">
      <div class="row py-5">
        <div class="col-3 d-none d-lg-block">
          <Sbar />
        </div>
        <div class="col">
          <Profile class="mb-3" />
          <div class="row">
            <div class="col">
              <Menu />
            </div>
            <div class="col">
              <Contacts />
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
import Profile from "../components/Profile";
import Menu from "../components/MenuProfile";
import Contacts from "../components/ContactInfo";
import Footer from "../components/Footer";
export default {
  components: { Nbar, Sbar, Profile, Menu, Contacts, Footer },
};
</script>
