<template>
 <nav class="navbar navbar-expand-md navbar-light bg-light shadow-sm sticky-top">
  <div class="container contain" id="margin-left">
   <NuxtLink class="navbar-brand" to="/">
    Boioyala
   </NuxtLink>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
    <span class="navbar-toggler-icon"></span>
   </button>

   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <!-- Left Side Of Navbar -->
    <ul class="navbar-nav mr-auto" id="searchBox">
     <li class="nav-item w-100 d-flex justify-content-center my-sm-3 my-md-0">
      <div class="form-inline w-75">
       <div class="input-group rounded w-100 my-sm-3 my-md-0">
        <input type="search" class="form-control border border-success" placeholder="Search Here ..." />
        <div class="input-group-append bg-success">
         <button class="btn bg-success text-light border border-success">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
         </button>
        </div>
       </div>
      </div>
     </li>
    </ul>

    <!-- Right Side Of Navbar -->
    <ul class="navbar-nav ml-auto">
     <!-- Authentication Links -->
     <li class="nav-item dropdown">
      <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
       aria-expanded="false">
       <img src="/img/user-1.png" height="30" width="30"
        class="rounded-circle border border-success overflow-hidden mr-3" alt="p" />
       Developer <span class="caret"></span>
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
       <a class="dropdown-item" href="#">Dashboard</a>
       <a href="#" class="dropdown-item" name="button" data-bs-toggle="modal" data-bs-target="#donate-book">Donate
        Book</a>
       <a href="#" class="dropdown-item">Profile</a>
       <a href="#" class="dropdown-item">Invite Friend</a>
       <NuxtLink to="/" class="dropdown-item" href="#">
        Logout
       </NuxtLink>
      </div>
     </li>
    </ul>
   </div>
  </div>
 </nav>
</template>

<style scoped>
#searchBox {
 width: 86%;
}

.cont {
 width: 60% !important;
}

.contain {
 width: 60% !important;
}
</style>