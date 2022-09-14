// import Vue from 'vue'

// export const state = {
//   products: [],
//   cart: [],
// }

export const state = () => ({
  products: [],
  cart: [],
})

export const actions = {
  addProductToCart({ commit }, { product, quantity }) {
    commit('ADD_TO_CART', { product, quantity })
  },
}

export const mutations = {
  ADD_TO_CART(state, { product, quantity }) {
    const productInCart = state.cart.find((item) => {
      return item.product.id === product.id
    })
    if (productInCart) {
      productInCart.quantity += quantity
      return
    }

    state.cart.push({ product, quantity })
  },
}

export const getters = {
  cartItemCount(state) {
    return state.cart.length
  },
  cartTotalPrice(state) {
    let total = 0
    state.cart.forEach((element) => {
      total += element.product.price * element.quantity
    })
    return total
  },

  //   products() {
  //     return state.products
  //   },
}
