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
                        >Войти на сайт</v-card-title>
                    </v-app-bar>
                    <v-card-text>
                    <div v-if="errors">
                        <v-alert
                        outlined
                        type="warning"
                        prominent
                        border="left"
                        >
                        <p>Неправильный пароль или телефон!</p>
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
                            v-model="phone"
                            :error-messages="phoneErrors"
                            :counter="10"
                            label="Введите телефон указанный при регистрации"
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
                            label="Введите пароль указанный при регистрации"
                            required
                            @input="$v.password.$touch()"
                            @blur="$v.password.$touch()"
                            @click:append="show = !show"
                        ></v-text-field>
                    </form>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn
                        depressed
                        color="error"
                        rounded
                        @click="login"
                        >
                        Войти на сайт
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, numeric } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],

    validations: {
      phone: { required, numeric, maxLength: maxLength(10),minLength: minLength(10) },
      password: { required, maxLength: maxLength(12),minLength: minLength(6) }
    },
    data: () => ({
        phone: '',
        password: '',
        loading: false,
        errors: null,
        show: false
    }),
    computed: {
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
        ...mapActions(['setSnackbar','userLogin']),
        login() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            this.loading = true

            this.$http.post('/api/login', {phone: this.phone, password: this.password}).then(function(response){
                if(response.status == 200){
                    this.setSnackbar({show: true, text: "Вы успешно залогинились!!!"})
                    this.loading = false
                    this.userLogin(response.data)
                    this.$router.push('/')
                } 
            }, function (response){
                this.errors = response.data
                this.loading = false
            })
        }
    }
}
</script>
