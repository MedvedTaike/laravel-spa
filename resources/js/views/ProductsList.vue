<template>
<v-container>
    <v-dialog
        v-model="modal"
        max-width="600px"
        min-width="300px"
    >
        <ModalBuy :product="singleProduct" @closeModal="closeModal" v-if="modal"/>
    </v-dialog>
    <v-row>
        <v-col md="3" sm="4"
          v-for="product in products"
          :key="product.id"
        >
        <ProductCard :product="product" @openModal="openModal" @openModalWithCart="openModalWithCart" />
        </v-col>
    </v-row>
</v-container>
</template>
<script>
import ProductCard from '../components/ProductCard'
import ModalBuy from '../components/ModalBuy'
import { mapActions,mapGetters } from 'vuex'

export default {
    name: 'products-list',
    components: {
        ProductCard,
        ModalBuy
    },
    data: () => ({ 
        products: [],
        singleProduct: null,
        modal: false
    }),
    methods: {
        ...mapActions(['addToCart']),
        getProducts(){
            this.$http.get('/api/products/' + this.$route.params.id , {}).then(function(response){
                this.products = Object.values(response.data.data)
            })
        },
        openModal(id){
            let product = this.products.find(item => item.id == id)
            product.quantity++
            this.addToCart(product)
            this.singleProduct = product
            this.modal = true
        },
        openModalWithCart(id){
            this.singleProduct = this.products.find(item => item.id == id)
            this.modal = true
        },
        closeModal(){
            this.modal = false
            this.singleProduct = null
        }
    },
    created(){
        this.getProducts()
    },
    watch: {
        '$route' : 'getProducts'
    },
    computed: {
        ...mapGetters(['getTotal'])
    }
}
</script>