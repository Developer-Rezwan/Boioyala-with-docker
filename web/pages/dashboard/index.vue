<template>
  <div class="bg-light">
    <UtilitiesPreloader />
    <NuxtLayout name="user-dashboard">
      <!-------------------Profile------------------------>
      <!-----Profile Head Section Start ---->
      <DashboardUserProfile />
      <!-----------------Menu-------------------->

      <div class="container">
        <div class="row-sm-2 d-flex justify-content-around">
          <div class="col-auto">
            <button class="btn btn-outline-success my-2" style="height: 100px; width: 150px;" id="mybookbtn"
              @click="showBlogFn">
              <strong>+<br>My<br>Blog</strong>
            </button>
          </div>
          <div class="col-auto">
            <button class="btn btn-outline-success my-2" style="height: 100px; width: 150px;" id="mymessagebtn"
              @click="showConversionFn">
              <strong>+<br>My<br>Massage</strong>
            </button>
          </div>
          <div class="col-auto">
            <button class="btn btn-outline-success my-2" style="height: 100px; width: 150px;" id="requestlistbtn"
              @click="howRequestedBooksFn">
              <strong>+<br>My<br>Request</strong>
            </button>
          </div>
          <div class="col-auto">
            <button class="btn btn-outline-success my-2" style="height: 100px; width: 150px;" id="myaccountbtn"
              @click="showAccountDetailsFn">
              <strong>+<br>My<br>Account</strong>
            </button>
          </div>
        </div>
      </div>

      <!-- Start::Book Lists -->
      <div class="container my-5" id="mybook" v-if="showBlog">
        <DashboardPostedBook />
        <DashboardDonatedBook />
      </div>
      <!-- End::Book Lists -->

      <!-- Start::Conversion -->
      <DashboardConversation v-if="showConversion" />
      <!-- End::Conversion -->

      <DashboardRequestedBooks v-if="showRequestedBooks" />
      <!-- Account Section -->
      <DashboardMyAccount v-if="showAccountDetails" />
      <!-- Account Section -->

      <!--================Modal: Donation Start==============-->
      <utilities-modal modal_id="donate-book" modal_title="Donate New Book">
        <form action="#" method="post" enctype="multipart/form-data">
          <div class="form-group">
            <input type="text" class="form-control" name="name" placeholder="Book Title" required>
          </div>
          <div class="row">
            <div class="form-group col-8">
              <input type="text" class="form-control" name="author" placeholder="Author Name" required>
            </div>
            <div class="form-group col-4">
              <input type="number" class="form-control" name="quantity" placeholder="Copies" required>
            </div>
          </div>

          <div class="row">
            <div class="form-group col-6">
              <select name="categories" class="custom-select form-control" required>
                <option selected disabled>Select Categories</option>)
                <option>Finance Management</option>
                <option>Self Development</option>
              </select>
            </div>
            <br>
            <div class="form-group custom-file col-6">
              <input type="file" class="custom-file-input form-control" name="cover" required>
              <!-- <label class="custom-file-label" for="files">Select Cover</label> -->
            </div>
          </div>
          <div class="form-group">
            <textarea class="form-control" name="description" rows="3" placeholder="Say Something about this Book"
              required></textarea>
          </div>
          <div class="col-12 d-flex justify-content-center mt-3">
            <button type="submit" class="btn btn-success btn-sm" name="donate_book">Submit</button>
          </div>
        </form>
      </utilities-modal>
      <!--================Modal: Donation End==============-->
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "user-dashboard",
});

const showBlog = ref(true);
const showConversion = ref(false);
const showRequestedBooks = ref(false)
const showAccountDetails = ref(false)

const showBlogFn = () => {
  showBlog.value = true;
  showConversion.value = false;
  showRequestedBooks.value = false;
  showAccountDetails.value = false;
}

const showConversionFn = () => {
  showConversion.value = true;
  showBlog.value = false;
  showRequestedBooks.value = false;
  showAccountDetails.value = false;
}

const howRequestedBooksFn = () => {
  showRequestedBooks.value = true;
  showConversion.value = false;
  showBlog.value = false;
  showAccountDetails.value = false;
}

const showAccountDetailsFn = () => {
  showAccountDetails.value = true;
  showRequestedBooks.value = false;
  showConversion.value = false;
  showBlog.value = false;
}
</script>