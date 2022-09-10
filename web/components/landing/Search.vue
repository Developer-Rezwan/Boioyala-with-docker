<template>
 <div class="jumbotron jumbotron-fluid justify-content-center align-content-center m-0 bg-img">
  <div class="container" align="center">
   <h2 class="font-cursive">If you want to get used book</h2>
   <div>
    <button class="btn btn-outline-light m-3 px-4">
     <i class="fa fa-city"></i> City
    </button>
    <button class="btn btn-light m-3">
     <i class="fas fa-university"></i> Institute
    </button>
   </div>
   <p class="font-cursive"><em>Book in popular city : Mirpur, Uttra, Gazipur, Gulsian</em></p>
   <p class="font-cursive"><strong>--OR--</strong></p>

   <div class="input-group md-form form-sm form-2 pl-0 w-50 w-sm-75">
    <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search">
    <div class="input-group-append bg-success">
     <button class="btn bg-success text-light border border-success">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
     </button>
    </div>
   </div>
   <p class="font-cursive">Books | Text Books | Study Books | Note | Magazine</p>
   <button type="button" class="btn btn-outline-light btn-lg py-2 mb-2">
    <i class="fab fa-google-play"></i>
    Google Play
   </button>
  </div>
 </div>
</template>

<style>
.bg-img {
 background-size: cover;
 background-attachment: fixed;
 color: white;
 background-image: url('/img/bg.png');
}
</style>