<template>
 <utilities-modal modal_id="LoginFormModal" modal_title="Login now">
  <div class="row">
   <div class="col-md-10 col-sm-10 col-10 offset-1 offset-sm-1 offset-md-1 justify-content-center">
    <form method="post" enctype="multipart/form-data">
     <div class="form-group">
      <input placeholder="Enter Email" id="email" type="text" class="form-control @error('email') is-invalid @enderror"
       name="email" required autocomplete="email" autofocus>
      <span class="invalid-feedback" role="alert">
       <strong>Error Message</strong>
      </span>
     </div>

     <div class="login_P_txt form-group">
      <input type="password" class="form-control" name="password" placeholder="Password" required>
      <a href="#">
       Forgot Password
      </a>
      <p
       style=" color: red; font-size: 16px; font-family: 'Gill Sans', 'Gill Sans MT', 'Myriad Pro', 'DejaVu Sans Condensed', Helvetica, Arial, 'sans-serif'">
       Error Message
      </p>

     </div>
     <div class="d-flex justify-content-center form-group">
      <button type="submit" class=" btn btn-success btn-sm" name="login">Submit</button>
     </div>
    </form>
    <div class="create_here_txt text-center">
     <p>Don't have an account?
      <a type="button" class="text-info" data-bs-toggle="modal" data-bs-target="#SignUpModal">
       Create One Here
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