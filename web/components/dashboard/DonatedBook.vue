<template>
  <div class="row-cols-1">
    <h2 align="center" class="mt-4">Books Donated</h2>
    <hr class="w-100 bg-success" style="height:1.2px;">
    <p align="center">
      No book listed in your account. Waiting for accept your request.
      <a role="button" data-bs-toggle="modal" data-bs-target="#donate-book" class="btn btn-success btn-sm">Donate
        Now</a>
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
                <th scope="col">Quantity</th>
                <th scope="col">Iteration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <img src="#" height="40" width="30">
                </td>
                <td>Rich Dad Poor Dad</td>
                <td>Robart T. Kiyosaki</td>
                <td>2</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>