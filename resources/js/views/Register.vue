<template>
    <v-container>
        <v-row class="justify-center">
            <v-col
            cols="12"
            md="6"
            >
                <v-card>
                    <v-app-bar
                        color="orange darken-4"
                        dark
                    >
                        <v-card-title
                            class="text-h7"
                        >Регистрация</v-card-title>
                    </v-app-bar>
                    <v-card-text>
                    <div v-if="errors">
                        <v-alert
                        outlined
                        type="warning"
                        prominent
                        border="left"
                        >
                        {{ getErrors() }}
                        </v-alert>
                    </div>
                    <div class="text-center" v-if="loading">
                        <v-progress-circular
                        :size="50"
                        :width="7"
                        color="purple"
                        indeterminate
                        ></v-progress-circular>
                    </div>
                    <form v-else-if="!loading">
                        <v-text-field
                            v-model="name"
                            :error-messages="nameErrors"
                            :counter="15"
                            label="Ваше имя."
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                        ></v-text-field>
                        <v-text-field
                            v-model="address"
                            :error-messages="addressErrors"
                            label="Введите ваш адрес."
                            required
                            @input="$v.address.$touch()"
                            @blur="$v.address.$touch()"
                        ></v-text-field>
                        <v-text-field
                            v-model="phone"
                            :error-messages="phoneErrors"
                            :counter="10"
                            label="Введите рабочий телефон."
                            required
                            @input="$v.phone.$touch()"
                            @blur="$v.phone.$touch()"
                        ></v-text-field>
                        <v-text-field
                            v-model="password"
                            :error-messages="passwordErrors"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            :counter="12"
                            label="Введите желаемый пароль."
                            required
                            @input="$v.password.$touch()"
                            @blur="$v.password.$touch()"
                            @click:append="show = !show"
                        ></v-text-field>
                        <v-card-actions class="justify-center">
                        <v-btn
                        depressed
                        color="error"
                        rounded
                        @click="register"
                        >
                        Регистрация
                        </v-btn>
                    </v-card-actions>
                    </form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, numeric} from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],

    validations: {
      phone: { required, numeric, maxLength: maxLength(10),minLength: minLength(10) },
      name: { required, maxLength: maxLength(15),minLength: minLength(4) },
      password: { required, maxLength: maxLength(12),minLength: minLength(6) },
      address: { required }
    },
    data: () => ({
        name: '',
        address: '',
        password: '',
        phone: '',
        loading: false,
        errors: null,
        show: false
    }),
    computed: {
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Имя не должен превышать 15 символов!')
            !this.$v.name.minLength && errors.push('Слишком короткое имя!')
            !this.$v.name.required && errors.push('Заполните поле пожалуйста!')
            return errors
        },
        addressErrors () {
            const errors = []
            if (!this.$v.address.$dirty) return errors            
            !this.$v.address.required && errors.push('Заполните поле пожалуйста!')
            return errors
        },
        phoneErrors () {
            const errors = []
            if (!this.$v.phone.$dirty) return errors
            !this.$v.phone.maxLength && errors.push('Номер не должен превышать 10 символов!')
            !this.$v.phone.minLength && errors.push('Слишком короткий номер!')
            !this.$v.phone.required && errors.push('Заполните поле пожалуйста!')
            !this.$v.phone.numeric && errors.push('Нужно вводить только цифры!')
            return errors
        },
        passwordErrors () {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.maxLength && errors.push('Пароль не должен превышать 12 символов!')
            !this.$v.password.minLength && errors.push('Слишком короткий password!')
            !this.$v.password.required && errors.push('Заполните поле пожалуйста!')
            return errors
        }
    },
    methods: {
        ...mapActions(['setSnackbar']),
        register() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            this.errors = null
            this.loading = true

            this.$http.post('/api/register', {phone: this.phone,name: this.name, address: this.address, password: this.password}).then(function(response){
                if(response.status == 201){
                    this.loading = false
                    this.setSnackbar({show: true, text: "Вы успешно зарегистрировались!!!"})
                    this.$router.push('/login')
                } 
            }, function (response){
                this.errors = Object.values(response.data)
                this.loading = false
            })
        },
        getErrors(){
            if(this.errors.length > 0){
                return this.errors.toString()
            }
        }
    }
}
</script>
