<template>
    <div class="flex prose prose-2xl mx-auto  px-10 py-10 w-full flex-col gap-8">
        <Navbar
        name="Dusun Tosari"
        />

        <div class="w-full flex justify-center items-center h-96 rounded-lg overflow-hidden">
            <img src="https://ik.imagekit.io/azv7d8ojn/static/tosari/tosari_ozlligLV-g.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838159178" class="h-96 w-full rounded-lg object-cover" alt="">
        </div>
        
        <article class=" w-full mx-auto">
            <div class="flex flex-col ">
                <h3 class="font-bold text-4xl">Tentang Dusun Tosari</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <p>
                        Asal-usul nama Tosari yaitu <b>To</b> yang artinya mudah di toto, dan <b>Sari</b> berasal dari Patran. 
                        Hubungan Patran dan tosari ini berawal dari Dusun Genting yang mana dulunya masih memiliki 
                        dua Kartu Keluarga pindahan dari Dusun Patran.  Anak-anak yang dulunya yang berasal dari 
                        dukuh Patran sehingga bertambahnya Kartu Keluarga dan warganya bertambah sehingga jadilah 
                        <b>Tosari</b>. <br>
                    </p>
                </span>
            </div>

            <div class="flex flex-col ">
                <h3 class="font-bold text-4xl">Kebudayaan dan Kesenian</h3>
                <div class="flex-col gap-4 text-xl text-justify">
                    <ul>
                        <li>Kesenian yaitu <b>Tarian Kuda Laras</b> yang artinya jika ada kegiatan baru pentas yang seperti olahraga dengan gerakan yang selaras.</li> 
                        <li>Warga Tosari memiliki kebiasaan untuk tahlilan setiap minggunya pada malam Jum’at yang dibagi pada 3 bagian yaitu Tosari atas, tengah dan bawah.</li>
                    </ul>
                </div>
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
                                    src="https://ik.imagekit.io/azv7d8ojn/static/tosari/tosari_ozlligLV-g.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838159178">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://ik.imagekit.io/azv7d8ojn/static/tosari/tosari-landing_TKRyms7N1t.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838173190">
                                </div>
                            </div>
                            <!-- <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="/../static/ds-jrakah/jrakah-landing.jpg">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="../static/ds-jrakah/jrakah4.jpg">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="../static/ds-jrakah/jrakah3.jpg">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="../static/ds-jrakah/jrakah5.jpg">
                                </div>
                            </div> -->
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