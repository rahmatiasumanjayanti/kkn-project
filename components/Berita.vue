<template>
    <div class="">
        <div class="card w-96 bg-base-100 shadow-sm rounded-md">
        <figure><img src="../assets/citran.jpg" alt="Shoes" /></figure>
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
    </div>

</template>

<script>
export default {
    props:{
    Judul: String,
    Dusun: String,
    Tanggal: String
  }
}
</script>

<style>

</style>