<template>
 <div>
  <AdminTheHeader />
  <AdminTheSidebar />
  <main class="container py-5">
   <slot />
  </main>
  <AdminTheFooter />
 </div>
</template>

<style src="/assets/admin/main.scss">
</style>