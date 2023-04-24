<template>
  <div id="home">
    <RestaurantRow />
  </div>
</template>

<script>
//import BDD from "../BDD";
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

      const resto = new Restaurant("Le petit resto", 4, "https://www.lesfoodies.com/wp-content/uploads/2019/03/restaurant-italien-1.jpg", 15);
      console.log(resto);
  },
}

</script>

<style lang="scss">

</style>