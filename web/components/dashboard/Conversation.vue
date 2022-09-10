<template>
   <div class="container mt-5">
      <div class="row">
         <div class="col-12">
            <h2 align="center" class="mt-4">Your Conversation</h2>
            <hr class="w-100 bg-success" style="height:1.2px;">
         </div>
      </div>
      <div class="row bg-white border mb-5">
         <div class="col-2 border-right">
            <h5 class="mt-3" align="center">People</h5>
            <hr>
            <div class="row row-cols-1" style="height: 400px; overflow-y: scroll;" id="people-section" data-url="#">
               <a href="#">
                  <div class="col d-flex justify-content-center">
                     <div class="card border-0">
                        <img src="http://placehold.it/295x295.jpg" height="60" width="60"
                           class="rounded-circle shadow-sm border border-success">
                        <p class="card-text" align="center">Loading ... </p>
                     </div>
                  </div>
               </a>
            </div>
         </div>

         <div class="col-10 d-flex flex-column">
            <div class="row my-2 mb-auto">
               <div class="col-12 d-flex justify-content-center">
                  <a href="#" class="btn btn-light">More ...</a>
               </div>
            </div>
            <section id="message-body" style="height:400px; overflow-y: scroll;">
            </section>

            <div class="row">
               <div class="col-12 py-3" style="background-color:#dce3e8; ">

                  <div class="row" id="msg-send">
                     <div class="offset-xl-1 col-xl-10 offset-md-1 col-md-9 offset-sm-0 col-sm-9 col-9 pr-0">
                        <input class="form-control border-success rounded-0" autofocus name="message_send"
                           style="background-color:#dce3e8;  border: 0px; border-bottom: 2px #ccc solid;"
                           placeholder="Type Massage here">
                        <!-- <style>
           #msg-send div input:focus {
            -webkit-box-shadow: none;
            box-shadow: none;
           }
          </style> -->
                     </div>
                     <div class="col-xl-1 col-md-2 col-sm-3 col-3 pl-0">
                        <button type="button" class="btn btn-success btn">Send</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>