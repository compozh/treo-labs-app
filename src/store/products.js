import * as fb from 'firebase'

class Product {
  constructor(title, description, price, imageSrc = '', viewed = false, id = null) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageSrc = imageSrc;
    this.viewed = viewed;
    this.id = id;
  }
}

export default {
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    loadProducts(state, payload) {
      state.products = payload;
    },
    addToCart(state, payload) {
      state.cart.push(payload);
    }
  },
  actions: {
    async fetchProducts({commit}) {
      commit('clearError');
      commit('setLoading', false);
      
      const resultProducts = [];
      
      try {
        const fbVal = await fb.database().ref('ads').once('value');
        const products = fbVal.val();
        
        Object.keys(products).forEach(key => {
          const product = products[key];
          resultProducts.push(new Product(
            product.title,
            product.description,
            product.price,
            product.imageSrc,
            product.viewed,
            key
          ))
        });
        commit('loadProducts', resultProducts);
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
      }
      
    },
    async addToCart({commit}, {name, phone}) {
      commit('addToCart', {name, phone});
    }
  },
  getters: {
    products(state) {
      return state.products;
    },
    viewedProducts(state) {
      return state.products.filter(product => product.viewed);
    },
    productById(state) {
      return productId => {
        return state.products.find(product => product.id === productId);
      }
    }
  }
}