<template>
  <div class="home">
      <div class="header">
          <img src="../assets/logo_uber_eats.svg" alt="" srcset="">
          <div class="wrapper--input">
              <input v-model="user_search_restaurant" type="text" placeholder="De quoi avez-vous envie ?">
              <div class="search">
                  <router-link v-for="(restaurant, i) in search_restaurant" :key="i" :to="{name: 'myRestaurant', params: { name: restaurant.name }}">
                      <div class="container--restaurant--search">
                          <div class="wrapper--img">
                              <img :src="restaurant.image" alt="" srcset="">
                          </div>
                          <p>{{ restaurant.name }}</p>
                      </div>
                  </router-link>
              </div>
          </div>
      </div>

      <div class="banner">
      </div>

      <h2 class="title">
          Nos restaurants
      </h2>

      <RestaurantRow v-for="(data, i) in data_restaurant" :key="i" :three_restaurant="data"/>
  </div>
</template>

<script>
import BDD from "../BDD";
import { onMounted, ref, watch } from "vue";
import RestaurantRow from "@/components/RestaurantRow.vue";
import myRestaurant from "@/pages/MyRestaurant.vue";
export default {
  name: 'HomePage',
    computed: {
        myRestaurant() {
            return myRestaurant
        }
    },
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
      let all_restaurant = [];
      const makeDataRestaurant = () => {
          let three_restaurant = [];
          for (const restaurant of BDD) {
              const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time);
              // make all restaurant array
              all_restaurant.push(new_restaurant);


              if (three_restaurant.length === 2) {
                  three_restaurant.push(new_restaurant);
                  data_restaurant.value.push(three_restaurant);
                  three_restaurant = [];
              } else {
                  three_restaurant.push(new_restaurant);
              }
          }
      }

      // User search restaurant
      let user_search_restaurant = ref('');
      let search_restaurant = ref([]);

      watch(user_search_restaurant, newValue => {
          let regex = RegExp(newValue.toLowerCase());

          let new_search_restaurant  = all_restaurant.filter(restaurant => regex.test(restaurant.name.toLowerCase()));

          (newValue == 0 ? search_restaurant.value = [] :  search_restaurant.value = new_search_restaurant);
      })

      onMounted(() => {
          makeDataRestaurant();
      })

      return {
          data_restaurant,
          user_search_restaurant,
          search_restaurant
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

      .wrapper--input{
        position: relative;
        input{
          background-color: #f6f6f6;
          border: none;
          height: 60px;
          width: 400px;
          outline: none;
          padding-left: 20px;
        }

        .search{
          position: absolute;
          top: 100%;
          width: 100%;
          background-color: #ffffff;

          .container--restaurant--search{
            display: flex;
            align-items: center;
            padding: 10px;

            &:hover{
              background: #f6f6f6;
            }

            .wrapper--img{
              height: 60px;
              width: 60px;
              margin-right: 25px;
              border-radius: 50%;
              overflow: hidden;

              img{
                height: 100%;
                width: auto;
              }
            }
          }
        }
      }
    }

    .banner{
      height: 200px;
      width: 100%;
      background-image: url("../assets/VinylBanner-V1-Chinese_2048x.jpg.webp");
      background-size: cover;
      background-position: center;
    }
  }
</style>