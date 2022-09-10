<template>
 <div v-if="start" class="vh-100 vw-100 position-fixed bg-light z_index">
  <div class="positioning">
   <div class="spinner-border text-success hw"></div>
  </div>
 </div>
</template>

<script setup lang="ts">
const start = ref(true);
onMounted(() => {
 setTimeout(() => {
  start.value = false;
 }, 1000);
});
</script>

<style>
.z_index {
 z-index: 9999;
}

.positioning {
 position: absolute;
 top: 50%;
 right: 50%;
 transform: translate(50%, -50%);
}

.hw {
 height: 100px;
 width: 100px;
}
</style>