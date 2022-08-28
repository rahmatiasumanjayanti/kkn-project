<template>
    <div class="flex prose prose-2xl mx-auto  px-10 py-10 w-full flex-col gap-8">
        <Navbar
        name="Dusun Tempel"
        />

        <div class="w-full flex justify-center items-center h-96 rounded-lg overflow-hidden">
            <img src="../static/tempel/tempel4.jpg" class="h-96 w-full rounded-lg object-cover" alt="">
        </div>
        
        <article class=" w-full mx-auto">
            <div class="flex flex-col ">
                <h3 class="font-bold text-4xl">Tentang Dusun Tempel</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <p>
                        Warga Dusun Tempel mayoritas agamanya adalah agama Islam dan untuk profesi warganya adalah 
                        petani. Jumlah Penduduk yang berada di Dusun Tempel sekitar <b>140 jiwa</b>. <br>
                    </p>
                    <p>
                        Dusun Tempel dinamakan 'Tempel' dikarenakan dusun ini menempel pada tebing-tebing maka dinamakan dukuh tempel yang sesuai dengan lokasi 
                        maupun tempat dusun itu berada. Dusun Tempel juga berada di sebelah dusun bentrokan namun, 
                        untuk dusun bentrokan sendiri masuk pada kabupaten magelang dan untuk dusun Tempel masuk pada 
                        kabupaten Boyolali. <br>
                    </p>
                </span>
            </div>

            <!-- Kebudayaan -->
            <div class="flex flex-col ">
                <h3 class="font-bold text-4xl">Kebudayaan dan Kesenian</h3>
                <div class="flex-col gap-4 text-xl text-justify">
                    <ul>
                        <li>Dusun Tempel biasanya menampilkan <b>kesenian Reog</b>.</li> 
                    </ul>
                </div>
            </div>

            <!-- Hasil Bumi -->
            <div class="flex flex-col ">
                <h3 class="font-bold">Hasil Bumi</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <p>
                        Hasil Bumi yang biasanya di panen di dusun Tempel adalah:<br>
                        <ul>
                            <li>Daun Bawang</li>
                            <li>Brokoli</li>
                            <li>Kembang Kol</li>
                            <li>dll</li>
                        </ul>
                    </p>
                </span>
            </div>

            <!-- potensi -->
            <div class="flex flex-col ">
                <h3 class="font-bold">Potensi Wisata Tempel</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <ul>
                        <li>Potensi Wisata di Dusun Tempel adalah jalur pendakian menuju gunung Merbabu.</li> 
                    </ul>
                </span>
            </div>

            <!-- Galeri kotak -->
            <div class="flex flex-col pt-12 ">
                <span class="font-bold text-4xl text-[#353855]">Galeri</span>
                <section class="overflow-hidden text-gray-700 ">
                    <div class="container px-5 py-2 mx-auto lg:pt-2 lg:px-2">
                        <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="../static/tempel/tempel9.jpg">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="../static/tempel/tempel2.jpeg">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="/../static/tempel/tempel3.jpg">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="../static/tempel/tempel4.jpg">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="../static/tempel/tempel6.jpg">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="../static/tempel/tempel5.jpg">
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <!-- <nuxt-link to="/galeri">
                <div class="w-full flex justify-end gap-2 items-center py-5 cursor-pointer hover:text-slate-500">
                    <span class="text-sm font-semibold ">Lihat Lebih banyak</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </div>
                </nuxt-link> -->
            </div>

        </article>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
    components: { Navbar }
}
</script>

<style>

</style>