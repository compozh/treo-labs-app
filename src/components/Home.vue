<template>
  <div v-if="!loading">
    <div v-if="isUserLoggedIn">
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex
            xs12
            sm6
            md4
            v-for="product in products"
            :key="product.id"
          >
            <v-card>
              <v-img
                :src="product.imageSrc"
                height="200px"
              ></v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ product.title }}</h3>
                  <div> {{ product.description }}</div>
                  <h3 class="mt-2">{{ product.price }}</h3>
                </div>
              </v-card-title>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn flat :to="'/product/' + product.id">Details</v-btn>
                <app-buy-modal :product="product"></app-buy-modal>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div v-else>
      <v-container>
        <v-layout row>
          <v-flex xs12 class="text-xs-center pt-5">
            <h1 class="display-3">Sign in or register</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-xs-center pt-5">
          <v-progress-circular
            :size="100"
            :width="4"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    computed: {
      isUserLoggedIn() {
        return this.$store.getters.isUserLoggedIn
      },
      viewedProducts() {
        return this.$store.getters.viewedProducts
      },
      products() {
        return this.$store.getters.products
      },
      loading() {
        return this.$store.getters.loading
      }
    }
  }
</script>

<style scoped>
  .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>