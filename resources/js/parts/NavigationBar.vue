<template>
<div>
    <v-system-bar
        color="red"
        dark
        app
    >
      <v-icon>mdi-clock-outline</v-icon>
      <span>c 11.00 до 20.00</span>
      <v-spacer></v-spacer>
      <router-link to="/delivery" class="system-text mr-1">Доставка</router-link>
    </v-system-bar>
    <v-navigation-drawer 
        temporary 
        v-model="drawer"
        dark
        class="deep-orange darken-3"
        app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            ARZAN
          </v-list-item-title>
          <v-list-item-subtitle>
            Лучшие цены в городе!!!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.id"
          :to="item.to"
          link
        >
          <v-list-item-icon class="mr-1">
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer 
        temporary 
        v-model="rightDrawer"
        right
        app>
      <v-list-item class="px-2">
        <v-btn
            class="ma-2"
            fab
            color="red"
            small
            dark
            @click="rightDrawer = !rightDrawer"
        >
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>

        <v-list-item-title>{{ greetingText }}</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        v-if="!getAuth"
      >
        <v-list-item
          to="/register"
          link
        >
          <v-list-item-icon>
            <v-icon color="red">mdi-account-plus</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Регистрация</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          to="/login"
          link
        >
          <v-list-item-icon>
            <v-icon color="red">mdi-login-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Войти на сайт</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list
        dense
        nav
        v-else
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="red">mdi-map-marker-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ getUser.address }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="red">mdi-cart</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Обработанных заказов {{ getUser.orders }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          @click="logoutUser"
        >
          <v-list-item-icon>
            <v-icon color="red">mdi-account-arrow-right-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Выйти из сайта</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="getUser.active != null">
          <v-list-item-content>
              <v-alert
              dense
              outlined
              color="red"
              >
              В данное время у вас имеются необработанные заказы и вы не можете делать новый заказ!
            </v-alert>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="getCart.length && getUser.active == null">
          <v-list-item-content>
            <v-btn
              rounded
              color="red"
              dark
              normal
              @click="checkoutOrder"
            >
              Оформить заказ
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar 
      dark
      color="orange darken-3"
      height="50px"
      app>
      <v-btn class="pl-0"
        text 
        @click="drawer = !drawer">
        <v-icon class="mr-1">mdi-menu</v-icon>
        Каталог
      </v-btn>
      <v-divider vertical dark></v-divider>
      <v-spacer></v-spacer>
      <v-divider vertical dark></v-divider>
        <v-btn text
            to="/cart-view"
            link
        >
        <span class="cart-text mr-2"> {{ getTotal | price}} </span>
        <v-icon>mdi-cart-variant</v-icon>
        </v-btn>
        <v-divider vertical dark></v-divider>
        <v-btn text class="px-0"
            @click="rightDrawer = !rightDrawer"
        >
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
    </v-app-bar>
</div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex';

export default {
    data: () => ({ 
      drawer: null,
      cart_summ: 0,
      items: [], 
      rightDrawer: false
    }),
    methods: {
      ...mapActions(['clearCart','setSnackbar','userLogout','userRefresh']),

      getMenu(){
          this.$http.get('/api/menu', {}).then(function(response){
            this.items = response.data.data
          })
        },
        checkoutOrder(){
          this.$http.post('/api/auth/makeOrder',{order: this.getCartCheckout}, {headers: { Authorization: 'Bearer ' + this.getToken }}).then(function(response){
             if(response.status == 201){
               this.rightDrawer = false
               this.clearCart()
               this.updateUser()
               alert(response.data)
             }
          })
        },
        logoutUser(){
          this.$http.post('/api/logout',{},{headers: { Authorization: 'Bearer ' + this.getToken }}).then(function(response){
            if(response.status == 200){
              this.userLogout()
              this.$router.push('/login')
              this.setSnackbar({show: true, text: response.data})
            }
          })
        },
        updateUser(){
          this.$http.post('/api/refreshUser',{},{headers: { Authorization: 'Bearer ' + this.getToken }}).then(function(response){
            if(response.status == 200){
              this.userRefresh(response.data)
            }
          })
        }
    },
    created(){
        this.getMenu()
    },
    computed: {
      ...mapGetters(['getTotal','getUser','getAuth','getCart','getCartCheckout','getToken']),
      greetingText(){
        return this.getUser != null ? 'Привет ' + this.getUser.name : 'Управление аккаунтом'
      }
    }
}
</script>
<style>
.system-text{
  text-decoration: none;
  color: hsla(0,0%,100%,.7) !important;
}
</style>