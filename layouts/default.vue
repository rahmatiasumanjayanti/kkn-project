<template>
  <div class="flex font-montserrat justify-start items-start w-full flex-col bg-[#E6E0DD] ">

    <Nuxt />
    <Footer/>
  </div>
</template>

<script>
 import Footer from '~/components/Footer.vue'
 export default { components: { Footer } }
</script>

<style></style>
