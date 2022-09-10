<template>
  <div>
    <div class="row-cols-1 mt-5">
      <h2 align="center" class="mt-4">Request a book for you</h2>
      <hr class="w-100 bg-success">
      <p align="center">
        No Person request for book here
      </p>
      <div class="container  bg-white border rounded">
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
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td><img src="#" height="40" width="30"></td>
                  <td>Rich Dad Poor Dad</td>
                  <td>Robat T. Kiyosaki</td>
                  <td>Finance Management</td>
                  <td>Sakib</td>
                  <td>
                    <a class="btn btn-dark btn-sm disabled">Accepted</a>
                    <a href="#" class="btn btn-success btn-sm">Accept</a>
                    <a class="btn btn-success btn-sm disabled">Accept</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


    <div class="row-cols-1">
      <h2 align="center" class="mt-4">Request a book for you</h2>
      <hr class="w-100 bg-success" style="height:1.2px;">
      <p align="center">
        You May request any book form Home page
      </p>

      <div class="container  bg-white border rounded">
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
                  <th scope="col">Serial</th>
                  <th scope="col">Timer/Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td><img src="#" height="40" width="30"></td>
                  <td>Rich Dad Poor Dad</td>
                  <td>Robart T. Kiyosaki</td>
                  <td>Finance Management</td>
                  <td>Test</td>
                  <td>1 day ago </td>
                  <td><a href="#" class="btn btn-success btn-sm disabled">Requested</a></td>
                  <td>Dhaka City</td>
                  <td>
                    <a class="btn btn-success btn-sm disabled">Accepted</a>
                    <a href="{{route('user.confirm_request', ['id'=>$request_out->id])}}" class="btn btn-danger btn-sm"
                      onclick="return confirm('Are you sure? It is mentioned that after confirm you must be responsible for this book.')">Confirm
                      Receive</a>
                  </td>
                  <td>Dhaka City</td>
                  <td>
                    <a class="btn btn-outline-dark btn-sm">Received</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>