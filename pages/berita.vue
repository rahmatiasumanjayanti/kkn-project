<template>
   <div class="hero flex justify-start py-10 w-full flex-col gap-8">
        <Navbar
        name="Berita"
        />

        <div class="w-full flex flex-col static" >
            <img src="https://placeimg.com/850/450/arch" class="w-1/2 rounded-md items-center justify-center hover:opacity-100" />
            <div class="absolute px-10 py-10 w-1/2">
                <h1 class="text-3xl font-bold items-center text-white "> Diduga halaman rumah warga diakuisisi menjadi kolam ikan</h1>
                <div class="flex text-white py-3 items-center">
                   <p>Dusun Citran </p>
                   <span class="px-2">|</span> 
                   <span>12 Agustus 2022</span>
                </div>
            </div>
        </div>

        <!-- Card -->
        <div class="card w-1/2 bg-base-100 shadow-xl image-full">
        <figure><img src="https://placeimg.com/800/325/arch" alt="Shoes" /></figure>
            <div class="z-10 px-10 py-10 w-auto">
                <h1 class="text-3xl font-bold items-center text-white "> Diduga halaman rumah warga diakuisisi menjadi kolam ikan</h1>
                <div class="flex text-white py-3 items-center">
                   <p>Dusun Citran </p>
                   <span class="px-2">|</span> 
                   <span>12 Agustus 2022</span>
                </div>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Baca Selengkapnya</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    layout: 'blog',

}
</script>

<style>

</style>