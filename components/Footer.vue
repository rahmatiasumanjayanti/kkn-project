<template>
  <div class="w-full flex flex-col gap-6 ">
  <footer class="footer flex justify-evenly p-10 border-t-2 border-slate-500">

    <!-- Kontak -->
    <div class="flex flex-col">
      <span class="footer-title text-lg">Kontak</span> 
      
      <div class="flex items-center gap-2 rounded-full px-5 py-2 border border-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
        </svg>
        <a class="link link-hover text-md">+62 821-3363-1331</a> 
      </div>
    </div> 

    <!-- Jelajahi -->
    <div>
      <span class="footer-title text-lg">Jelajahi</span> 
      <nuxt-link to="/" class="link link-hover">Beranda</nuxt-link>
      <nuxt-link to="/berita" class="link link-hover">Berita</nuxt-link> 
    </div> 

    <!-- Copyright -->
    <div class="flex flex-col">
      <a class="">Copyright © 2022</a> 
      <a class="">All right reserved by KKN UII 2022</a> 
      <a class="">Universitas Islam Indonesia</a> 
    </div> 
  </footer> 


  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>