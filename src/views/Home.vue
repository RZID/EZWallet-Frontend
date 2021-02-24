<template>
  <div class="home">
    <div class="container-fluid bg-blue bg-accent vh-100">
      <div class="container h-100">
        <div class="d-md-flex justify-content-between position-static pt-5">
          <h4 class="text-white font-weight-bold">EZWallet</h4>
          <div class="d-none d-md-block">
            <button
              @click="login()"
              class="btn btn-outline-light font-weight-bold mr-4"
              style="border-radius: 12px"
            >
              Login
            </button>
            <button
              @click="signUp()"
              class="btn btn-light font-weight-bold text-blue"
              style="border-radius: 12px"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div class="d-flex h-100 justify-content-center text-center">
          <div class="align-self-center">
            <h1 class="font-weight-bold display-5 text-white">
              Awesome App<br />For Saving Time.
            </h1>
            <p class="text-light pt-4">
              We bring you a mobile app for banking problems that<br />
              oftenly wasting much of your times.
            </p>
            <button class="btn btn-light text-blue" style="border-radius: 12px">
              Try It Free
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-lighter">
      <div class="container py-5">
        <div class="pt-5">
          <h1 class="text-center font-weight-bold">
            <span class="text-blue">Why</span> Choose EZwallet?
          </h1>
          <p class="pt-3 text-center">
            We have some great features from the application and it’s totally
            free<br />
            to use by all users around the world.
          </p>
          <div class="pt-3">
            <div class="row">
              <div class="col-md text-center">
                <div
                  class="card border-0 bg-transparent"
                  style="border-radius: 25px"
                >
                  <div class="card-body p-4">
                    <h4
                      class="text-blue fas fa-phone p-2 rounded-circle"
                      style="background: rgba(71, 58, 209, 0.1)"
                    ></h4>
                    <h5 class="font-weight-bold pt-3">24/7 Support</h5>
                    <p class="pt-4">
                      We have 24/7 contact support so you can contact us
                      whenever you want and we will respond it.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md text-center">
                <div class="card border-0" style="border-radius: 25px">
                  <div class="card-body p-4">
                    <h4
                      class="text-blue fas fa-lock p-2 rounded-circle"
                      style="background: rgba(71, 58, 209, 0.1)"
                    ></h4>
                    <h5 class="font-weight-bold pt-3">Data Privacy</h5>
                    <p class="pt-4">
                      We make sure your data is safe in our database and we will
                      encrypt any data you submitted to us.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md text-center">
                <div
                  class="card border-0 bg-transparent"
                  style="border-radius: 25px"
                >
                  <div class="card-body p-4">
                    <h4
                      class="text-blue fas fa-download p-2 rounded-circle"
                      style="background: rgba(71, 58, 209, 0.1)"
                    ></h4>
                    <h5 class="font-weight-bold pt-3">Easy Download</h5>
                    <p class="pt-4">
                      EZwallet is 100% totally free to use it’s now available on
                      Google Play Store and App Store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="background: rgba(71, 58, 209, 0.06)"
      class="d-flex justify-content-center p-4"
    >
      <div class="container">
        <div class="row">
          <div class="col-6 col-lg-2 col-md-4 text-center">
            <img class="img-fluid" src="/assets/brands/microsoft.svg" alt="" />
          </div>
          <div class="col-6 col-lg-2 col-md-4 text-center">
            <img class="img-fluid" src="/assets/brands/dropbox.svg" alt="" />
          </div>
          <div class="col-6 col-lg-2 col-md-4 text-center">
            <img class="img-fluid" src="/assets/brands/hnm.svg" alt="" />
          </div>
          <div class="col-6 col-lg-2 col-md-4 text-center">
            <img class="img-fluid" src="/assets/brands/airbnb.svg" alt="" />
          </div>
          <div class="col-6 col-lg-2 col-md-4 text-center">
            <img class="img-fluid" src="/assets/brands/canon.svg" alt="" />
          </div>
          <div class="col-6 col-lg-2 col-md-4 text-center">
            <img class="img-fluid" src="/assets/brands/dell.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-white py-5">
      <div class="container d-flex py-5 justify-content-center">
        <h1
          style="background: rgba(71, 58, 209, 0.06); border-radius: 85px"
          class="font-weight-bold p-md-4 m-0 text-blue"
        >
          Rp. 390.736.500
        </h1>
      </div>
      <h1 class="font-weight-bold text-center">
        <span class="text-blue">Money</span> has Been Transfered.
      </h1>
      <p class="text-center pt-3">
        That amount of money has been transfered from all users. We still<br />
        counting and going strong!
      </p>
    </div>
    <div style="background: rgba(71, 58, 209, 0.06)" class="vh-100">
      <div class="row h-100 w-100 no-gutters">
        <div
          class="col d-lg-block d-none"
          style="
            background: url(/assets/phone2.svg);
            background-repeat: no-repeat;
            background-size: contain;
          "
        ></div>
        <div class="col d-flex justify-content-center text-center text-md-left">
          <div class="align-self-center">
            <h1 class="font-weight-bold">
              All The <span class="text-blue">Great</span> <br />EZwallet
              Features.
            </h1>
            <div class="card" style="border-radius: 25px">
              <div class="card-body">
                <p class="font-weight-bold">
                  <span class="text-blue">1.</span> Small Fee
                </p>
                <span>
                  We only charge 5% of every success transaction done in
                  EZwallet app.
                </span>
              </div>
            </div>
            <div class="card my-3" style="border-radius: 25px">
              <div class="card-body">
                <p class="font-weight-bold">
                  <span class="text-blue">2.</span> Data Secured
                </p>
                <span>
                  All your data is secured properly in our system and it’s
                  encrypted.
                </span>
              </div>
            </div>
            <div class="card" style="border-radius: 25px">
              <div class="card-body">
                <p class="font-weight-bold">
                  <span class="text-blue">3.</span> User Friendly
                </p>
                <span>
                  EZwallet come up with modern and sleek design and not
                  complicated.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" style="background: #fafcff">
      <div class="container py-5 text-center">
        <h1 class="font-weight-bold">
          What Users are <span class="text-blue">Saying.</span>
        </h1>
        <p>
          We have some great features from the application and it’s totally
          free<br />
          to use by all users around the world.
        </p>
        <div class="row">
          <div class="col-2 d-none d-md-flex">
            <button
              class="btn align-self-center"
              style="background-color: white; border-radius: 20px"
            >
              <h3 class="m-0 fas fa-arrow-left"></h3>
            </button>
          </div>
          <div class="col">
            <div class="card border-0" style="border-radius: 30px">
              <div class="card-body">
                <div class="py-5">
                  <img src="/assets/1.svg" alt="" />
                  <h4 class="pt-3">Alex Hansinburg</h4>
                  <p>Designer</p>
                  <p class="text-center">
                    “This is the most outstanding app that I’ve ever try in my
                    live, this app is such an amazing masterpiece and it’s
                    suitable for you who is bussy with their bussiness and must
                    transfer money to another person aut there. Just try this
                    app and see the power!”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-2 d-none d-md-flex justify-content-end">
            <button
              class="btn align-self-center"
              style="background-color: white; border-radius: 20px"
            >
              <h3 class="m-0 fas fa-arrow-right"></h3>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-blue">
      <div class="container py-5">
        <div class="pb-3">
          <h3 class="font-weight-bold text-white">EZwallet</h3>
          <p class="text-white">
            Simplify financial needs and saving <br />much time in banking needs
            with <br />one single app.
          </p>
        </div>
        <hr style="border-color: rgba(255, 255, 255, 0.6)" />
        <div class="row">
          <div class="col-md">
            <p class="text-white">2020 EZwallet. All right reserved.</p>
          </div>
          <div class="col-md">
            <div class="row text-white">
              <div class="col-sm">
                <p>+62 5637 8882 9901</p>
              </div>
              <div class="col-sm">
                <p>contact@ezwallet.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    login () {
      this.$router.push('/login');
    },
    signUp () {
      this.$router.push('/register');
    }
  }
};
</script>
<style scoped src="../assets/css/style.css">
</style>
<style scoped>
.bg-accent {
  background-image: url("/assets/Vector2.svg");
  background-repeat: no-repeat;
  background-size: auto;
}
.text-blue {
  color: #6379f4;
}
.bg-lighter {
  background: #fafcff;
}
</style>
