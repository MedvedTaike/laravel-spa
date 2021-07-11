<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card
                    class="ma-auto"
                >
                    <v-img
                        :src="getBanner"
                    >
                    </v-img>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                    class="ma-auto"
                >
                    <v-img
                        :src="getDelivery"
                    >
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    computed: {
        getBanner(){
            return window.innerWidth > 480 ? '/banners/horizontal-banner.png' : '/banners/vertical-banner.png'
        },
        getDelivery(){
            return window.innerWidth > 480 ? '/banners/horizontal-delivery.png' : '/banners/vertical-delivery.png'
        }
    }
}
</script>