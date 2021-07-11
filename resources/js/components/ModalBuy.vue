<template>
      <v-card>
          <v-app-bar
            color="orange darken-4"
            dark
          >
              <v-card-title
                  class="text-h7"
                  v-text="getProduct.name"
              ></v-card-title>
          </v-app-bar>
          <div class="d-flex justify-space-between">
              <div>
                <v-card-subtitle 
                    class="text-h7"
                    v-text="getProduct.description">
                </v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>
                  <p class="font-weight-normal">Цена : <strong>{{ getProduct.price }}</strong> за ед.</p>
                  <p v-if="(product.convert_price > 1)">Цена за <strong>{{product.convert_price}}</strong> (<strong class="red--text">{{ product.convert_price * product.price | price}} </strong> ) сом.</p>
                  <p class="font-weight-normal">В корзине: <strong>{{ getProduct.quantity }}</strong></p>
                  <p class="font-weight-normal">На сумму: <strong>{{ getProduct.quantity * getProduct.price * getProduct.convert_price | price}}</strong> сом.</p>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn
                    class="mx-1"
                    small
                    fab
                    dark
                    color="teal darken-2"
                    @click="decrementCart"
                  >
                    <v-icon dark>
                      mdi-minus
                    </v-icon>
                  </v-btn>
                  <v-btn
                    class="mx-1"
                    small
                    fab
                    dark
                    color="red darken-3"
                    @click="deleteProductInCart"
                  >
                    <v-icon dark>
                      mdi-delete
                    </v-icon>
                  </v-btn>
                  <v-btn
                    class="mx-1"
                    small
                    fab
                    dark
                    color="teal darken-2"
                    @click="incrementCart"
                  >
                    <v-icon dark>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="getImage"></v-img>
              </v-avatar>
          </div>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              text
              color="teal accent-4"
              @click="closeModal"
            >
              Закрыть окно
            </v-btn>
          </v-card-actions>
          </v-card>
</template>
<script>
import {mapActions} from 'vuex'

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
      ...mapActions(['increment','decrement','deleteFromCart']),
        closeModal(){
            this.$emit('closeModal')
        },
        incrementCart(){
          this.increment(this.product.id)
        },
        decrementCart(){
          this.decrement(this.product.id)
        },
        deleteProductInCart(){
          this.deleteFromCart(this.product.id)
          this.closeModal()
        }
    }
}
</script>
