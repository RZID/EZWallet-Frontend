<template>
  <div class="bg-light min-vh-100">
    <div class="d-none d-lg-block">
      <Nbar />
    </div>
    <div class="d-block d-lg-none">
      <div class="container d-flex d-lg-none py-4">
        <b-link
          class="text-dark mr-3"
          @click="$router.push('/dashboard').catch(() => {})"
        >
          <h5 class="m-0 font-weight-bold align-self-center">
            <b-icon icon="arrow-left"></b-icon>
          </h5>
        </b-link>
        <h5 class="m-0 align-self-center font-weight-bold">My Profile</h5>
      </div>
    </div>
    <div class="container">
      <div class="row py-lg-5">
        <div class="col-3 d-none d-lg-block">
          <Sbar />
        </div>
        <div class="col">
          <Profile class="mb-3" />
          <div class="row">
            <div class="col">
              <Menu />
            </div>
            <div class="col d-none d-lg-block">
              <Contacts />
            </div>
          </div>
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
import Profile from "../components/Profile";
import Menu from "../components/MenuProfile";
import Contacts from "../components/ContactInfo";
import Footer from "../components/Footer";
export default {
  components: { Nbar, Sbar, Profile, Menu, Contacts, Footer },
};
</script>
