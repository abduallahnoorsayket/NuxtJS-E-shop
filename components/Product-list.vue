<template>
  <div class="mt-5">
    <v-menu offset-x align="right">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Iteams
          <span> ${{ ComputedCartTotalPrice }} </span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in ComputedCart" :key="index">
          <v-list-item-title>
            <strong> {{ item.product.name }}</strong> <br />{{
              item.quantity
            }}
            x ${{ item.product.price }}
            <v-btn
              x-small
              color="secondary"
              dark
              @click.prevent="RemoveProductFromCart(item.product)"
              >Remove
            </v-btn>
          </v-list-item-title>
          <!-- <hr> -->
        </v-list-item>
        <v-list-item
          ><span>Subtotal price: ${{ ComputedCartTotalPrice }} USD</span>
        </v-list-item>
      </v-list>
    </v-menu>

    <!--  -->
    <v-row align="center">
      <v-col v-for="(product, index) of products" :key="index" sm="4">
        <v-card>
          <v-card-title class="headline">
            {{ product.name }}
          </v-card-title>
          <!-- <img :src="product.image" /> -->
          <v-img
            max-height="130"
            max-width="180"
            :src="product.image"
            align="center"
          ></v-img>
          <v-card-text>
            <p>{{ product.price }} $</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="addToCart(product)">
              ADD TO CART
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import Allproducts from './Json/Allproducts'

export default {
  data() {
    return {
      products: [
        {
          id: '1',
          name: 'Apple MacBook Pro 16',
          description: 'Apple MacBook Pro 16 with Touch Bar,',
          price: '299',
          category: 'laptop',
          image:
            'https://diamu.com.bd/wp-content/uploads/2021/12/Apple-MacBook-Pro-2021-M1-14-and-16-inch-Colors.jpg',
        },

        {
          id: '2',
          name: 'Dell Inspiron',
          description: 'Dell Inspiron Pro 16 with Touch Bar,',
          price: '159',
          category: 'laptop',
          image:
            'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5490/pdp/laptops-inspiron-14-5490-pdp-mod1-silver.jpg?fmt=jpg',
        },
        {
          id: '3',
          name: 'HP Inspiron',
          description: 'HP Inspiron Pro 16 with Touch Bar,',
          price: '250',
          category: 'laptop',
          image:
            'https://my-media.apjonlinecdn.com/catalog/product/s/t/strelkafelicette_15_fogblue_cloudblue_nonodd_fpr_coreset_rearleft_9.png',
        },
      ],
    }
  },
  // async fetch() {
  //   this.products = await fetch(
  //     'https://fakestoreapi.com/products?limit=5'
  //   ).then((res) => res.json())
  // },
  computed: {
    ComputedCart() {
      return this.$store.state.cart
    },
    ComputedCartItemCount() {
      return this.$store.getters.cartItemCount
    },
    ComputedCartTotalPrice() {
      return this.$store.getters.cartTotalPrice
    },
  },
  methods: {
    addToCart(EachProduct) {
      console.log('81====', EachProduct)
      this.$store.dispatch('addProductToCart', {
        product: EachProduct,
        quantity: 1,
      })
    },
    RemoveProductFromCart(product) {
      this.$store.dispatch('removeProductFromCart', product)
    },
  },
}
</script>
