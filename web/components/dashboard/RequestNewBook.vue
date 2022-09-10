<template>
 <div class="container" id="myaccount">
  <div class="row justify-content-start">
   <div class="col-xl-6 col-md-6 col-12 mt-2">
    <div class="alert bg-white rounded-0 px-3 py-2.5"
     style="border-top: 4px #4ca746 solid; box-shadow: #CCC 2px 8px 10px;">
     <h5>About me</h5>
    </div>
    <div class="row-cols-1 bg-white p-3" style="box-shadow: #CCC 2px 8px 10px;">
     <form class="form-group" method="post" action="{{route('profile.update')}}">
      <input type="hidden" hidden value="about" name="action" />
      <label>Name</label>
      <input type="text" class="form-control @error('name') invalid-feedback @enderror" name="name" autofocus>
      <br>
      <label>Occupation</label>
      <input type="text" class="form-control" name="occupation" placeholder="eg. Student/Employee/Entreprenur"
       autofocus />
      <br>
      <label>Email</label>
      <input type="email" class="form-control" name="email" disabled>
      <br>
      <label>Gender</label>
      <select name="gender" class="custom-select mb-2   @error('gender') form-text @enderror">
       <option selected>Male</option>
       <option>Female</option>
       <option>Male</option>
       <option selected>Female</option>
       <option selected disabled></option>
       <option>Male</option>
       <option>Female</option>
      </select>
      <br>
      <br>
      <label>District</label>
      <select name="district" id="district" class="custom-select mb-2">
       <option selected>Nilphamari</option>
      </select>
      <br>
      <br>
      <label>Upazila</label>
      <select name="upazila" id="upazila" class="custom-select mb-2">
       <option selected>Dimla</option>
      </select>
      <br>
      <br>
      <label>House Name, Appartment No, Village Name, Post Code</label>
      <input type="text" class="form-control   @error('address') form-text @enderror" name="address" autofocus>
      <br>
      <button type="submit" class="btn btn-success my-1">Save</button>
     </form>
    </div>
   </div>
   <div class="col-xl-6 col-md-6 col-12 mt-2">

    <!--<div class="alert bg-white rounded-0 px-3 py-2.5"
                     style="border-top: 4px #4ca746 solid; box-shadow: #CCC 2px 8px 10px;">
                    <h5>Phone Number</h5>
                </div>
                <div class="row-cols-1 bg-white p-3" style="box-shadow: #CCC 2px 8px 10px;">
                    <form class="form-group">
                        <label>Phone Number</label>
                        <input type="number" class="form-control" name="phone">
                        <br>
                        <button class="btn btn-success my-1">Save</button>
                    </form>
                </div>-->

    <div class="alert bg-white rounded-0 px-3 py-2.5"
     style="border-top: 4px #4ca746 solid; box-shadow: #CCC 2px 8px 10px;">
     <h5>Interest</h5>
    </div>
    <div class="row-cols-1 bg-white p-3" style="box-shadow: #CCC 2px 8px 10px;">
     <form class="form-group" method="post" action="{{route('profile.update')}}">
      <input type="hidden" hidden value="interest" name="action" />
      <label>Interests</label>
      <select name="interest" class="custom-select mb-2">
       <option selected>Profile Interest</option>
      </select>
      <br>
      <button class="btn btn-success my-1">Save</button>
     </form>
    </div>
    <div class="alert bg-white rounded-0 px-3 py-2.5 mt-3"
     style="border-top: 4px #4ca746 solid; box-shadow: #CCC 2px 8px 10px;">
     <h5>Change Password</h5>
    </div>
    <div class="row-cols-1 bg-white p-3" style="box-shadow: #CCC 2px 8px 10px;">
     <form class="form-group" method="post" action="{{route('profile.update')}}">
      <input type="hidden" hidden value="password" name="action" />
      <label>Old Password</label>
      <input type="text" class="form-control" name="old_password" placeholder="Enter Old Password">

      <label>New Password</label>
      <input type="text" class="form-control" name="new_password" PLACEHOLDER="Enter New Password">
      <label>Confirm Password</label>
      <input type="text" class="form-control" name="confirm_password" placeholder="Retype Password">
      <br>
      <button type="submit" class="btn btn-success my-1">Save</button>
     </form>
    </div>
   </div>
  </div>
 </div>
</template>