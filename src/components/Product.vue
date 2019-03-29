<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="!loading">
          <v-img
            :src="product.imageSrc"
            height="300px"
          ></v-img>
          <v-card-text>
            <h1 class="text--primary">{{ product.title }}</h1>
            <p>{{ product.description }}</p>
            <h2 class="mt-2">{{ product.price }}</h2>
          </v-card-text>
          <v-card-actions>
            <app-buy-modal :product="product"></app-buy-modal>
          </v-card-actions>
        </v-card>
        <div v-else class="text-xs-center">
          <v-progress-circular
            :size="100"
            :width="4"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      product() {
        const id = this.id;
        return this.$store.getters.productById(id);
      },
      loading() {
        return this.$store.getters.loading;
      }
    }
  }
</script>

<style scoped>

</style>