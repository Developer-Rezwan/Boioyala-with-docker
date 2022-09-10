<template>
 <div class="modal fade" :id="props.modal_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
   <div class="modal-content">
    <div class="modal-header bg-success">
     <h5 class="modal-title text-light" id="exampleModalLabel">{{ modal_title }}</h5>
     <button type="button" class="btn-close text-light" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
     <slot />
    </div>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
const props = defineProps({
 modal_id: [String],
 modal_title: [String],
});
</script>