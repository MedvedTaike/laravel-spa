<template>
  <v-app>
    <v-snackbar
        :timeout="3000"
        v-model="snackbar.show"
        class="snackbar"
        absolute
        top
        color="success"
        right
        >
        {{ snackbar.text }}
    </v-snackbar>
    <v-dialog
      v-model="modal"
      max-width="600px"
      min-width="300px"
    >
      <ModalCheckout v-if="modal" @closeCheckoutModal="closeCheckoutModal"/>
    </v-dialog>
    <v-btn v-if="getCart.length && getAuth == false"
      rounded
      color="red"
      dark
      class="special-button"
      normal
      @click="openCheckoutModal"
    >
      Оформить заказ
    </v-btn>
    <NavigationBar />
    <v-main>
        <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavigationBar from './parts/NavigationBar'
import Footer from './parts/Footer'
import {mapGetters} from 'vuex'
import ModalCheckout from './components/ModalCheckout'

export default {
  data: () => ({
    modal: false
  }),
  components: {
    NavigationBar,
    Footer,
    ModalCheckout
  },
  computed: {
    ...mapGetters(['getCart', 'snackbar','getAuth']),
  },
  methods: {
    openCheckoutModal(){
      this.modal = true
    },
    closeCheckoutModal(){
      this.modal = false
    }
  }
}
</script>
<style>
.theme--light.v-application{
    background: url('/banners/banner.jpg') fixed center;
}
.special-button{
  position: fixed;
  top: 75px;
  right: 1px;
  z-index: 5;
}
.snackbar{
  z-index: 1000;
}
</style>