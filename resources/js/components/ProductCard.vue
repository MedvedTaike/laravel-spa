<template>
<v-card
    class="mx-auto"
> 

    <div class="pa-4 product-image">
      <div v-if="getProduct" class="cart-cover pa-4">
        <v-alert class="cart-notification"
          border="left"
          color="purple"
          dark
        >
          <p>В корзине {{ getProduct.quantity }} {{ product.measure}}</p>
          <p>На сумму {{ getProduct.price * getProduct.quantity * getProduct.convert_price | price}} сом.</p>
        </v-alert>
      </div>
        <v-img
            :src="getImage"
        ></v-img>
    </div>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="justify-center product-price">{{ product.price }}</v-card-title>
    <p class="text-center" v-if="(product.convert_price > 1)">Цена за <strong>{{product.convert_price}}</strong> (<strong class="red--text">{{ product.convert_price * product.price | price}} </strong> ) сом.</p>
    <v-card-title class="justify-center red--text">{{ product.name }}</v-card-title>
    <v-card-text>
      <div class="text-center">
        <p class="font-weight-medium text-justify">{{ product.description }}</p>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="pl-4 button-actions">
      <v-btn v-if="getProduct"
        color="teal accent-4"
        outlined
        rounded
        @click="openModalWithCart"
      >
        Добавить / Удалить
      </v-btn>
      <v-btn v-else
        color="teal accent-4"
        outlined
        rounded
        @click="openModal"
      >
        Купить
      </v-btn>
    </v-card-actions>
</v-card>
</template>
<script>

export default {
    props: ['product'],
    computed: {
        getImage(){
            return '/images/' + this.product.id + '.jpg'
        },
        getProduct(){
            return this.$store.getters.getProductInCart(this.product.id)
        }
    },
    methods: {
      openModal(){
        this.$emit('openModal', this.product.id)
      },
      openModalWithCart(){
        this.$emit('openModalWithCart', this.product.id)
      }
    }
}
</script>
<style scoped>
p{
  margin: 0;
}
.product-price{
  padding-bottom: 0;
}
.product-name{
  padding-top: 10px;
  padding-bottom: 10px;
}
.cart-cover{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(30, 136, 229, .4);
}
.product-image{
  position: relative;
}
.cart-notification{
  z-index: 3;
}
</style>