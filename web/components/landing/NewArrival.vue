<template>
  <section class="bg-light my-4">
    <h2 align="center" class="font-cursive pt-3">New Arrival</h2>
    <hr class="w-100 bg-success">
    <div class="mx-3">
      <div class="book-slider d-flex justify-content-center gap-3">
        <!-- Book Item Start -->
        <carousel :settings="settings" :breakpoints="breakpoints" :itemsToShow="3.95" :wrapAround="true"
          :autoplay="5000">
          <slide v-for="i, slide in 10" :key="i">
            <!-- Book Item Start -->
            <div class="d-flex flex-column align-items-center carousel__item">
              <a href="#">
                <img src="https://i.ebayimg.com/images/g/6h0AAOSwF~JisMhj/s-l400.jpg" height="180" width="130">
              </a>
              <a href="#">
                <p class="m-0 font-cursive" style="width: 85%;" align="center">Rich Dad Poor Dad</p>
              </a>
              <p class="m-0 text-success" align="center">
                <small>
                  Donated by:
                  <a href="#"> Sajib</a>
                </small>
              </p>
            </div>
            <!-- Book Item End -->
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
    <!-- <div class="container d-flex justify-content-center my-3">
      <a href="#" class="btn bg-success text-light">View More</a>
    </div> -->
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
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  }
}
</script>

<style>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>
