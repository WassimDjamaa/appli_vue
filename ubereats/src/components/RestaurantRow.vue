<template>
    <div class="restaurant--row">
        <div class="wrapper--card">
            <Router-link class="restaurant--wrapper" v-for="(restaurant, index) in three_restaurant" :key="index" :to="{name: 'myRestaurant', params: { name: restaurant.name }}">
                <RestaurantCard  :info_restaurant="restaurant" />
            </Router-link>

        </div>
    </div>
</template>

<script>
import RestaurantCard from "@/components/RestaurantCard.vue";

export default {
    name: 'RestaurantRow',
    components: {
        RestaurantCard
    },
    props: {
        three_restaurant: Array,
    },
}
</script>

<style lang="scss">
.restaurant--row {
    .title{
        font-size: 1.5rem;
    }

    .restaurant--wrapper{
        width:32%;
        text-decoration: none;
    }

    .wrapper--card {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
