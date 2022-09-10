<template>
    <div class="container mt-5" id="myaccount">
        <div class="row justify-content-start">
            <div class="col-xl-6 col-md-6 col-12 mt-2 shadow-lg">
                <div class="alert bg-white rounded-0 px-3 py-2.5" style="border-top: 4px #4ca746 solid; ">
                    <h5>About me</h5>
                </div>
                <div class="row-cols-1 bg-white p-3">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control " name="name" autofocus>
                        <label>Occupation</label>
                        <input type="text" class="form-control" name="occupation"
                            placeholder="eg. Student/Employee/Entreprenur" autofocus />

                        <label>Email</label>
                        <input type="email" class="form-control" name="email" disabled>

                        <label>Gender</label>
                        <select name="gender" class="custom-select mb-2 form-control">
                            <option selected>Male</option>
                            <option>Female</option>
                        </select>
                        <label>District</label>
                        <select name="district" id="district" class="form-control mb-2">
                            <option selected>Nilphamari</option>
                        </select>
                        <label>Upazila</label>
                        <select name="upazila" id="upazila" class="custom-select form-control mb-2">
                            <option selected>Dimla</option>
                        </select>
                        <label>Address</label>
                        <input type="text" class="form-control" name="address" autofocus
                            placeholder="House Name, Appartment No, Village Name, Post Code">
                        <br>
                        <button type="submit" class="btn btn-success my-1">Save</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-md-6 col-12 mt-2 shadow-lg">
                <div class="alert bg-white rounded-0 px-3 py-2.5" style="border-top: 4px #4ca746 solid; ">
                    <h5>Interest</h5>
                </div>
                <div class="row-cols-1 bg-white p-3">
                    <div class="form-group">
                        <input type="hidden" hidden value="interest" name="action" />
                        <label>Interests</label>
                        <select name="interest" class="custom-select mb-2 form-control">
                            <option selected>Profile Interest</option>
                        </select>
                        <button class="btn btn-success my-1">Save</button>
                    </div>
                </div>
                <div class="alert bg-white rounded-0 px-3 mt-3">
                    <h5>Change Password</h5>
                </div>
                <div class="row-cols-1 bg-white px-3">
                    <form class="form-group">
                        <label>Old Password</label>
                        <input type="text" class="form-control" name="old_password" placeholder="Enter Old Password">
                        <label>New Password</label>
                        <input type="text" class="form-control" name="new_password" placeholder="Enter New Password">
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