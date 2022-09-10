<template>
 <div class="row-cols-1">
  <h2 align="center" class="mt-4">Books Posted</h2>
  <hr class="w-100 bg-success" style="height:1.2px;">
  <p align="center">
   No book listed in your account. Waiting for accept your request.
   <a href="#" class="btn btn-success btn-sm">Post Now</a>
  </p>
  <div class="bg-white border rounded p-3">
   <div class="row">
    <div class="col d-flex">
     <div class="mr-auto w-25 my-3">
      <div class="input-group">
       <input class="form-control" placeholder="Name">
      </div>
     </div>
     <div class="ml-auto w-25 my-3">
      <div class="input-group">
       <input class="form-control" placeholder="Search Book">
      </div>
     </div>
    </div>
   </div>
   <div class="row-cols-1">
    <div class="table-responsive">
     <table class="table table-striped table-bordered">
      <thead class="thead-light">
       <tr>
        <th scope="col">#</th>
        <th scope="col">Cover</th>
        <th scope="col">Book Title</th>
        <th scope="col">Author</th>
        <th scope="col">Categories</th>
        <th scope="col">Timer</th>
        <th scope="col">Action</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <th scope="row">1</th>
        <td><img src="#" height="40" width="30"></td>
        <td>Rich Dad Poor Dad</td>
        <td>Robart T. Kiyusaki</td>
        <td>Finance Management</td>
        <td>Interval</td>
        <td>
         <a class="btn btn-success btn-sm disabled">POSTED</a>
         <a href="#" class="btn btn-success btn-sm">POST NOW</a>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 </div>
</template>