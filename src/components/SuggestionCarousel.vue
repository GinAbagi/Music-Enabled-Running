<template>
  <div class="flex">
    <div class="font-run mx-auto -mb-2 mt-4">Song suggestions</div>
  </div>
  <Carousel>
    <Slide v-for="slide in 5" :key="slide" class="p-4">
      <div class="carousel_item">
        <div class="rounded-xl inline-block bg-white shadow-lg p-4 mt-0 mb-2">
          <div class="flex">
            <div
              class="overflow-hidden rounded-xl mr-4 object-contain h-24 w-24"
            >
              <img
                src="https://i.scdn.co/image/ab67616d00001e02ae373174b14e3eac81554402"
                class="object-cover h-24 w-auto"
              />
            </div>
            <div class="flex flex-col items-start text-left">
              <p class="text-2xl -mb-3">Artist name</p>
              <p class="font-run text-3xl">Song title test</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "SuggestionCarousel",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>

<style>
.carousel__item {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__pagination-button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #3d3d3d;
}

.carousel__pagination-button--active {
  background-color: #a7e000;
}

.carousel__pagination {
  background-color: transparent;
}
</style>