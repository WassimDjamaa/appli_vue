<template>
  <div class="home">
      <div class="header">
          <img src="../assets/logo_uber_eats.svg" alt="" srcset="">
          <input type="text" name="" id="" placeholder="De quoi avez-vous envie ?">
      </div>

      <div class="banniere">

      </div>
    <RestaurantRow v-for="(data, i) in data_restaurant" :key="i" :three_restaurant="data"/>
  </div>
</template>

<script>
import BDD from "../BDD";
import { onMounted, ref } from "vue";
import RestaurantRow from "@/components/RestaurantRow.vue";
export default {
  name: 'HomePage',
  components: {
    RestaurantRow
  },

  setup() {
      class Restaurant {
          constructor(name, note, image, drive_time) {
              this.name = name;
              this.note = note;
              this.image = image;
              this.drive_time = drive_time;
          }
      }

      let data_restaurant = ref([]); // data_restaurant.value = []
      const makeDataRestaurant = () => {
          let three_restaurant = [];
          for (const restaurant of BDD) {
              const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time);

              if (three_restaurant.length === 2) {
                  three_restaurant.push(new_restaurant);
                  data_restaurant.value.push(three_restaurant);
                  three_restaurant = [];
              } else {
                  three_restaurant.push(new_restaurant);
              }
          }
      }

      onMounted(() => {
          makeDataRestaurant();
      })

      return {
          data_restaurant,
      }
  }
}

</script>

<style lang="scss">
  .home {
    .header{
      height: 120px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img{
        width: 200px;
      }

      input{
        background-color: #f6f6f6;
        border: none;
        height: 60px;
        width: 400px;
        outline: none;
        padding-left: 20px;
      }
    }

    .banniere{
      height: 200px;
      width: 100%;
      background-image: url("../assets/VinylBanner-V1-Chinese_2048x.jpg.webp");
      background-size: cover;
      background-position: center;
    }
  }
</style>