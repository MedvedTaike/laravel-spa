export default {
  actions: {
    addToCart({commit}, product){
      commit('setCart', product)
    },
    increment({commit}, index){
      commit('increment', index)
    },
    decrement({commit}, index){
      commit('decrement', index)
    },
    deleteFromCart({commit}, index){
      commit('removeFromCart', index)
    },
    clearCart({commit}){
      commit('clearCart')
    }
  },
  mutations: {
    setCart(state, product) {
      state.cart.push(product)
    },
    removeFromCart(state, id) {
      let index = state.cart.findIndex(product => product.id === id)
      state.cart.splice(index, 1)
    },
    increment(state, index){
      state.cart.map(function(item){
        if(item.id === index){
          item.quantity++
        }
      })
    },
    decrement(state, index){
      state.cart.map(function(item){
        if(item.id === index && item.quantity > 1){
          item.quantity--
        }
      })
    },
    clearCart(state){
      state.cart = []
    }
  },
  state: {
    cart: []
  },
  getters: {
    getTotal(state) {
        return state.cart.reduce(function(sum, current) {
          return sum + parseFloat(current.price) * current.quantity * current.convert_price
        },0)
    },
    getProductInCart: state => id => {
      return state.cart.find(product => product.id === id)
    },
    getCart(state){
      return state.cart
    },
    getCartCheckout(state){
      const result = {}
      state.cart.map(item => {
        result[item.id] = item.quantity
      })
      return result
    }
  }
}
