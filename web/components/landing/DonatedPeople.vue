<template>
  <section class="py-3" style="background-color: #e9ecef;">
    <h2 align="center" class="font-cursive mt-3">Highest donated People</h2>
    <hr class="w-100 bg-success" style="height:1.2px;">
    <div class="container">
      <div class="profile-slider d-flex justify-content-center">
        <carousel :settings="settings" :breakpoints="breakpoints" :itemsToShow="3.95" :wrapAround="true"
          :autoplay="5000">
          <slide v-for="i, slide in 10" :key="i">
            <!-- Start::Profile-Item -->
            <a href="#" class="carousel__item">
              <div class="d-flex flex-column align-items-center">
                <img class="border border-success rounded-circle shadow shadow-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nG8OgXmMOXXiwbNOc-PPXUcilcIhCkS9BQ&usqp=CAU"
                  height="130" width="130">
                <div class="bg-success rounded-circle d-flex justify-content-center align-items-center text-light"
                  style="height: 26px; width: 26px; z-index: 9; margin-top: -13px;">
                  <small><b>1</b></small>
                </div>
                <p class="font-cursive m-0 pt-2">Developer-1</p>
                <p class="m-0"><strong class="text-danger">5</strong> <small>Books
                    Donated</small></p>
              </div>
            </a>
            <!-- End::Profile-Item -->
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
    <!-- <div class="container-fluid d-flex justify-content-center py-3">
      <a href="{{url('/profile/')}}" class="btn bg-success text-light">View More</a>
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