<template>
    <RouterLink to="/">
        <div id="return">Retour à la home</div>
    </RouterLink>

    <div class="restaurant">
        <div>
            <img :src="restaurant.image" alt="">
        </div>
        <p>{{ restaurant.name }}</p>
        <p>Note du restaurant {{ restaurant.note }}</p>
        <p>Temps de livraison : {{ restaurant.drive_time }}</p>
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

<style lang="scss" scoped>
  #return{
      margin: 25px 45px;
      font-weight: 400;
      cursor: pointer;
      pointer-events: none!important;
      text-decoration: none;
      color: black;

      &:hover{
        font-weight: 900;
      }
  }
</style>