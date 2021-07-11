<template>
    <v-card>
        <v-app-bar
            color="orange darken-4"
            dark
        >
        <v-card-title>
            Оформление заказа
        </v-card-title>
        <v-spacer></v-spacer>
        <v-btn
        icon
        color="white"
        outlined
        small
        class="mr-2"
        @click="closeCheckoutModal"
        >
            <v-icon>mdi-close</v-icon>
        </v-btn>
        </v-app-bar>
        <v-card-text class="mt-5">
          <div class="text-center" v-if="loading">
            <v-progress-circular
            :size="50"
            :width="7"
            color="purple"
            indeterminate
            ></v-progress-circular>
          </div>
        <div v-else-if="!loading && !user && !errors">
            <form>
                <v-text-field
                    v-model="phone"
                    :error-messages="phoneErrors"
                    :counter="10"
                    label="Введите телефон указанный при регистрации"
                    required
                    @input="$v.phone.$touch()"
                    @blur="$v.phone.$touch()"
                ></v-text-field>
            </form>
            <v-card-actions class="justify-center">
                <v-btn
                    color="error"
                    class="ma-2 white--text"
                    rounded
                    dark
                    @click="sendingPhone"
                >
                    Отправить телефон
                </v-btn>
            </v-card-actions>
        </div>
        <div v-else-if="user && !errors && !success_date">
            <v-card-title>Магазин: {{ user.magazin }}</v-card-title>
            <v-card-subtitle>Адрес: {{ user.address}}</v-card-subtitle>
            <v-card-text>У вас в корзине товаров на сумму:<strong> {{ getTotal | price}} </strong></v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-center">
                <v-btn
                    color="error"
                    class="ma-2 white--text"
                    rounded
                    dark
                    @click="checkoutOrder"
                >
                    Оформить заказ
                </v-btn>
            </v-card-actions>
        </div>
        <div v-else-if="errors">
            <v-alert
            outlined
            type="warning"
            prominent
            border="left"
            >
            {{ errors }}
            <p>Попробуйте связаться с нашим менеджером по WatsApp 0505 250 927</p>
            </v-alert>
        </div>
        <div v-else-if="success_date">
            <v-alert
            outlined
            type="success"
            text
            >
            Ваш заказ успешно оформлен и будет доставлен в воскресенье 
            {{ success_date }}
            </v-alert>
        </div>
        </v-card-text>
    </v-card>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, maxLength, numeric,minLength } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],

    validations: {
      phone: { required, numeric,maxLength: maxLength(10),minLength: minLength(10) }
    },
    data: () => ({
        phone: '',
        loading: false,
        user: null,
        errors: null,
        success_date: null
    }),
    computed: {
        ...mapGetters(['getCartCheckout','getTotal']),
        phoneErrors () {
            const errors = []
            if (!this.$v.phone.$dirty) return errors
            !this.$v.phone.maxLength && errors.push('Номер не должен превышать 10 символов!')
            !this.$v.phone.minLength && errors.push('Слишком короткий номер!')
            !this.$v.phone.required && errors.push('Заполните поле пожалуйста!')
            !this.$v.phone.numeric && errors.push('Нужно вводить только цифры!')
            return errors
        }
    },
    methods: {
        ...mapActions(['clearCart']),
        sendingPhone() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            this.loading = true

            this.$http.post('/api/getUser', {phone: this.phone}).then(function(response){
                if(response.status == 200){
                    this.user = response.data
                    this.loading = false
                } 
            }, function (response){
                this.errors = response.data
                this.loading = false
            })
        },
        checkoutOrder(){

            this.loading = true

            this.$http.post('/api/createOrder',{order: this.getCartCheckout, id_user: this.user.id}).then(function(response){
                if(response.status == 201){
                    this.success_date = response.data
                    this.loading = false
                    this.clearCart()
                }
            }, function (response){
                this.errors = response.data
                this.loading = false
            })
        },
        closeCheckoutModal(){
            this.$emit('closeCheckoutModal')
        }
    }
}
</script>