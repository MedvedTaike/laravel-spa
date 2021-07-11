<template>
    <v-container>
        <v-dialog
            v-model="modal"
            max-width="600px"
            min-width="300px"
        >
            <ModalCart :id="id_product" @closeModal="closeModal" v-if="modal"/>
        </v-dialog>
        <v-card>
            <v-card-title>
                <v-breadcrumbs :items="breadcramps"></v-breadcrumbs>
            </v-card-title>
            <v-simple-table v-if="getCart.length">
                <thead>
                    <tr>
                    <th class="text-left">
                        Название
                    </th>
                    <th class="text-left">
                        Сумма
                    </th>
                    <th>Изменить</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in getCart"
                    :key="item.id"
                    >
                    <td><p><strong>{{ item.name }}</strong></p><p>{{ item.description }}</p></td>
                    <td><strong>{{ item.quantity * item.price * item.convert_price | price}}</strong></td>
                    <td>
                        <v-btn
                        class="mx-2"
                        fab
                        dark
                        color="teal"
                        small
                        @click="openModal(item.id)"
                        >
                        <v-icon dark>
                            mdi-format-list-bulleted-square
                        </v-icon>
                        </v-btn>
                    </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td class="text-right">Итого на сумму</td>
                        <td><strong>{{ getTotal | price }}</strong></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="text-center">
                            <v-btn
                            color="red darken-4"
                            class="ma-2 white--text"
                            rounded
                            outlined
                            @click="deleteCart"
                            >
                                Очистить корзину
                                <v-icon
                                    right
                                    dark
                                >
                                    mdi-delete
                                </v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tfoot>
            </v-simple-table>
            <v-card-text v-else>
                <v-alert
                outlined
                type="warning"
                prominent
                border="left"
                small
                >
                В вашей корзине нет товаров!!!
                </v-alert>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
import ModalCart from '../components/ModalCart'

export default {
    data: () => ({
      breadcramps: [
        {
          text: 'Главная',
          disabled: false,
          to: '/',
        },
        {
          text: 'Корзина',
          disabled: false,
        }
      ],
      id_product: null,
      modal: false
    }),
    components:{
        ModalCart
    },
    computed: {
        ...mapGetters(['getCart','getTotal'])
    },
    methods: {
        ...mapActions(['clearCart']),
        deleteCart(){
            this.clearCart()
        },
        openModal(id){
            this.id_product = id
            this.modal = true
        },
        closeModal(){
            this.modal = false
            this.id_product = null
        }
    }
}
</script>
<style scoped>
p{
    margin: 0;
}
</style>