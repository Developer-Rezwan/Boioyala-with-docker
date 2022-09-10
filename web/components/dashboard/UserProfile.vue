<template>
  <div>
    <div class="container bg-white my-5 p-4 rounded">
      <div class="row">
        <div class="col-xl-6 col-md-6 col-sm-12 ">
          <div class="media">
            <div class="flex-column d-flex">
              <form id="avatar-form" enctype="multipart/form-data">
                <input type="file" id="profile-img-input" name="profile-img-input" class="d-none">
                <label for="profile-img-input">
                  <img id="profile-img-input-img" style="cursor: pointer"
                    class="align-self-center border border-success overflow-hidden shadow shadow-lg rounded-circle"
                    height="100" width="100" src="/img/user-1.png">
                </label>
              </form>
              <small class="text-muted">Change Your Avatar</small>
            </div>
            <div class="media-body ml-3 mt-4">
              <h4>Developer</h4>
              <p>DUET</p>
            </div>
          </div>
        </div>

        <div class="col-xl-6 col-md-6 col-sm-12">
          <div
            class="row d-flex justify-content-lg-end justify-content-md-end justify-content-sm-between justify-content-between">
            <div class="col-auto">
              <p>Book Posted</p>
              <span class="badge bg-danger p-3"><strong class="h4">32</strong></span>
            </div>
            <div class="col-auto">
              <p>Book Donate</p>
              <span class="badge bg-primary p-3"><strong class="h4">32</strong></span>
            </div>
            <div class="col-auto">
              <p>Notification</p>
              <span class="badge bg-success p-3"><strong class="h4">32</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>