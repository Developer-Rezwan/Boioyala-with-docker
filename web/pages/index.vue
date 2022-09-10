<template>
  <div>
    <NuxtLayout>
      <!-----Search Area Start ---->
      <LandingSearch />
      <!-----Search Area End---->

      <!--jumbotron -->
      <div class="jumbotron m-0 mt-2">
        <div class="container">
          <p align="center">This is the bridge communication and connecting book reader of various institute. Reuse
            and Circulation of book will not only make accessing book commercial but also help in building a
            sustainable enviornment.</p>
        </div>
      </div>
      <!-- Start::New Arrival -->
      <LandingNewArrival />
      <!-- End::New Arrival -->

      <!-- Start::Highest donated People -->
      <LandingDonatedPeople />
      <!-- End::Highest donated People -->

      <!-- Start::Recent Book Reviews -->
      <LandingRecentBookReview />
      <!----- End::Boook Review Section End ----->

      <!---- How it Work -------------------->
      <section>
        <div class="pt-4 pb-5">
          <h2 align="center" class="font-cursive mt-4">How it Work</h2>
          <hr class="w-100 bg-success" style="height:1.2px;">
          <div class="container">
            <div class="row">
              <div class="col-12 justify-content-center align-self-center">
                <img src="/img/how.png" alt="how it work" class="p-2" style="width:90%">
              </div>
            </div>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

</script>