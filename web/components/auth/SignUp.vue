<template>
 <utilities-modal modal_id="SignUpModal" modal_title="Sign Up">
  <div class="row">
   <div class="col-md-10 col-sm-10 col-10 0ffset-1 offset-sm-1 offset-md-1 justify-content-center">
    <form action="#" method="post" enctype="multipart/form-data">
     <div class="form-group">
      <input placeholder="Enter Full Name" id="full_name" type="text" class="form-control is-invalid" name="full_name"
       required autocomplete="full_name" autofocus>
      <span class="invalid-feedback" role="alert">
       <strong>Error message</strong>
      </span>
     </div>

     <div class="form-group">
      <input placeholder="Username" id="username" type="text" class="form-control" name="username" required
       autocomplete="username" autofocus minlength="5">
      <span class="invalid-feedback" role="alert">
       <strong>Error message</strong>
      </span>
     </div>

     <div class="form-group">
      <input placeholder="Enter Email" type="email" class="form-control" name="email" required autocomplete="email"
       autofocus>
      <span class="invalid-feedback" role="alert">
       <strong>Error message</strong>
      </span>
     </div>

     <div class="form-group">
      <input placeholder="Enter Password" id="password" type="password" class="form-control" name="password" required
       autofocus>
      <span class="invalid-feedback" role="alert">
       <strong>Error message</strong>
      </span>
     </div>

     <div class="form-group">
      <input placeholder="Confirm Password" id="confirm-password" type="password" class="form-control"
       name="password_confirmation" required autofocus>
      <span class="invalid-feedback" role="alert">
       <strong>Error message</strong>
      </span>
     </div>

     <div class="col-12 d-flex justify-content-center">
      <button type="submit" class=" btn btn-success">Submit</button>
     </div>
    </form>
    <div class="create_here_txt text-center">
     <p>Already have and account?
      <a type="button" class="text-info" data-bs-toggle="modal" data-bs-target="#LoginFormModal">
       Login Here
      </a>
     </p>
    </div>
   </div>
  </div>
  <!--Footer-->
  <div class="modal-footer justify-content-center">
   <div class="row">
    <div class="col-md-6 col-sm-6 col-6 text-left">
     <button type="button" class="btn btn-outline-danger">Facebook</button>
    </div>
    <div class="col-md-6 col-sm-6 col-6 text-right">
     <button type="button" class="btn btn-danger">Google</button>
    </div>
   </div>
  </div>
 </utilities-modal>
</template>