<template>
  <div class="min-h-screen flex justify-center items-center w-full flex-col">
    <Welcome />
    <Nuxt />
    <Toast />
  </div>
</template>

<script>
import Toast from '~/components/Toast.vue'
export default { components: { Toast } }
</script>

<style></style>
