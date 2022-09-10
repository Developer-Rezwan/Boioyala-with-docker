<template>
  <section class=" py-5 bg-white" style="background-color: #e9ecef;">
    <h2 align="center" class="font-cursive mt-4">Recent Book Reviews</h2>
    <hr class="w-100 bg-success" style="height:1.2px;">
    <div class="review-slider container" align="center">
      <carousel :settings="settings" :breakpoints="breakpoints" :wrapAround="true" :autoplay="10000">
        <slide v-for="i, slide in 10" :key="i">
          <!-- Start::Item-1 -->
          <div class=" m-2 pb-1 w-75 rounded shadow-lg carousel__item"
            style="background-color: {{'rgba('.rand(0,255).', '.rand(0,255).', '.rand(0,255).', 0.7)'}};">
            <div class="justify-content-center d-flex pt-1">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nG8OgXmMOXXiwbNOc-PPXUcilcIhCkS9BQ&usqp=CAU"
                height="40" width="40" class="align-self-center overflow-hidden border rounded-circle">
              <div class="d-flex flex-column align-items-center" align="left">
                <a href="#">
                  <strong>Sajib</strong></a>
                <a href="#">
                  <small>Rich Dad Poor Dad</small></a>
              </div>
            </div>
            <div class="bg-white m-2 d-block overflow-hidden" style="border-radius: 15px; height: 200px;">
              <p class="m-1" align="justify"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                  quo expedita officia autem temporibus! Deserunt vero iusto veniam ex quis porro consectetur minima
                  labore, enim, consequatur, inventore vel quaerat suscipit.</small></p>
            </div>
          </div>
          <!-- End::Item-1 -->
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </section>
</template>


<script lang="ts" setup>
const settings = {
  itemsToShow: 3,
  snapAlign: 'center',
}

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: 'start',
  }
}
</script>

<style scoped>
.carousel__slide>.carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}

.carousel__slide--visible>.carousel__item {
  opacity: 1;
  transform: rotateY(0);
}

.carousel__slide--next>.carousel__item {
  transform: scale(0.9) translate(-10px);
}

.carousel__slide--prev>.carousel__item {
  transform: scale(0.9) translate(10px);
}

.carousel__slide--active>.carousel__item {
  transform: scale(1.1);
}
</style>
