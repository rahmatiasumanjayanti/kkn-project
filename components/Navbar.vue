<template>
    <div class="flex justify-between w-full border-b border-slate-900/10">
    <!-- Judul -->

        <h1 class="text-4xl text-[#353855] font-bold flex items-center">{{ Name }}</h1>

    <!-- Menu -->
      <div class="flex flex-col">
        <nuxt-link to="/" class="text-lg font-semibold cursor-pointer hover:text-slate-500">Beranda</nuxt-link>
        <nuxt-link to="/berita" class="text-lg font-semibold cursor-pointer hover:text-slate-500">Berita</nuxt-link>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    Name: String
  }
}
</script>

<style>

</style>