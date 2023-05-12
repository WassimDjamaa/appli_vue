<template>
  <div class="restaurant">
      <p>{{ restaurant.name }}</p>
  </div>
</template>

<script>
import BDD from '../BDD'
import { useRoute } from "vue-router";

export default {
    name: 'MyRestaurant',

    setup(){
        const route = useRoute();
        const restaurant =  BDD.find((restaurant) => restaurant.name === route.params.name);

        return{
            restaurant,
        }
    }
}
</script>

<style>

</style>