<template>
        <div class="card w-96 h-[30rem] bg-base-100 shadow-sm rounded-md scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow">
        <figure><img :src="Gambar" alt="" class="w-96 h-[17rem]" /></figure>
            <div class="card-body">
                <h2 class="card-title">{{Judul}}</h2>
                <div class="flex items-center gap-2">
                    <span>{{Dusun}}</span>
                    <span>|</span>
                    <span>{{Tanggal}}</span>
                </div>
                <!-- <div class="card-actions pt-5 justify-center">
                <button class="btn btn-primary">Baca Selengkapnya</button>
                </div> -->
            </div>
        </div>
</template>

<script>
export default {
    props:{
    Judul: String,
    Dusun: String,
    Tanggal: String,
    Gambar: String
  }
}
</script>

<style>

</style>