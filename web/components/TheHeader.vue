<template>
  <div>
    <!-- Start::Preloader -->
    <UtilitiesPreloader />
    <!-- End::Preloader -->
    <nav class="navbar navbar-expand-xl navbar-expand-md navbar-light bg-white sticky-top shadow-sm">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand font-cursive">
          <img src="https://via.placeholder.com/25x25" height="25" class="d-inline-block align-top mr-2">
          <strong>Boioyola</strong>
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav mr-auto" style="width: 70%;">
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

          <div class="navbar-nav" style="margin-left:9%">
            <div class="nav-item mr-3">
              <button class="btn btn-success btn-block mt-2 mt-xl-0" type="button" data-toggle="modal"
                data-target="#DonationModal">Donate
              </button>
            </div>
            <div class="nav-item mx-2">
              <NuxtLink to="/dashboard" class="btn btn-success btn-block mt-2 mt-xl-0">Dashboard</NuxtLink>
            </div>
            <div class="nav-item mr-3">
              <button class="btn btn-success btn-block mt-2 mt-xl-0" type="button">
                Logout</button>
            </div>

            <div class="nav-item mx-2">
              <button class="btn btn-success btn-block mt-2 mt-xl-0" type="button" data-bs-toggle="modal"
                data-bs-target="#LoginFormModal">Login</button>
            </div>
            <div class="nav-item">
              <button class="btn btn-success btn-block mt-2 mt-xl-0" type="button" data-bs-toggle="modal"
                data-bs-target="#SignUpModal">Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <AuthSignUp />
    <AuthLogin />
  </div>
</template>