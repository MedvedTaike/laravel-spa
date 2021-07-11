<template>
<div>
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
          <v-list-item-icon>
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
            color="indigo"
            small
            @click="rightDrawer = !rightDrawer"
        >
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>

        <v-list-item-title>Account managing</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          to="/login"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Login to the site</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          to="/dashboard"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Getting orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar 
      dark
      color="orange darken-3"
      app>
      <v-app-bar-nav-icon @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
        <v-btn
            rounded
            outlined
            to="/cart-view"
            link
        >
        <span class="cart-text mr-2"> {{ getTotal | price}} </span>
        <v-icon>mdi-cart-variant</v-icon>
        </v-btn>
        <v-btn
            class="ml-2"
            fab
            outlined
            small
            @click="rightDrawer = !rightDrawer"
        >
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
    </v-app-bar>
</div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data: () => ({ 
      drawer: null,
      cart_summ: '0.00',
      items: [], 
      rightDrawer: false
    }),
    methods: {
      getMenu(){
          this.$http.get('/api/menu', {}).then(function(response){
            this.items = response.data.data
          })
        }
    },
    created(){
        this.getMenu()
    },
    computed: {
      ...mapGetters(['getTotal'])
    }
}
</script>