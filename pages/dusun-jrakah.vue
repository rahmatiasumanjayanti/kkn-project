<template>
    <div class="flex prose prose-2xl mx-auto  px-10 py-10 w-full flex-col gap-8">
        <Navbar
        name="Dusun Jrakah"
        />

        <div class="w-full flex justify-center items-center h-96 rounded-lg overflow-hidden">
            <img src="https://ik.imagekit.io/azv7d8ojn/static/ds-jrakah/jrakah3_V-p5MNqK8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838183788" class="h-96 w-full rounded-lg object-cover" alt="">
        </div>
        
        <article class=" w-full mx-auto">
            <div class="flex flex-col ">
                <h3 class="font-bold text-4xl">Tentang Dusun Jrakah</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <p>
                        Asal usul nama <i>Jrakah</i> berasal dari kata jangkah/menjangkah yang artinya melangkah. 
                        Di Dusun ini terdapat balai desa jrakah. Di dusun ini pula terdapat sekolah dasar yaitu SDN 2 Jrakah. Di dusun ini pula terdapat pasar jrakah yang beroperasi setiap Wage dan Legi. Lokasi Dusun Jrakah cukup stategis karena terbelah oleh jalan raya Magelang - Boyolali. Letak geografis Dusun Jrakah diapit oleh dua gunung yaitu merapi dan merbabu. Selain itu dari dusun ini dapat terlihat gunung Sindoro dan gunung Sumbing di sebelah barat. <br>
                    </p>
                </span>
            </div>

            <!-- potensi -->
            <div class="flex flex-col ">
                <h3 class="font-bold">Hasil Bumi</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <p>
                        Hasil Bumi yang biasanya di panen di dusun Jrakah adalah:<br>
                        <ul>
                            <li>Tomat</li>
                            <li>Sawi</li>
                            <li>Brokoli</li>
                            <li>Cabai</li>
                            <li>dll</li>
                        </ul>
                    </p>
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
                                src="https://ik.imagekit.io/azv7d8ojn/static/ds-jrakah/jrakah1_KIm-gPE0s.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838177937">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://ik.imagekit.io/azv7d8ojn/static/ds-jrakah/jrakah2_bWKhIYh35.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838187287">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://ik.imagekit.io/azv7d8ojn/static/ds-jrakah/jrakah-landing_A1NGUmoA3h.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838159374">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://ik.imagekit.io/azv7d8ojn/static/ds-jrakah/jrakah4_m6Yz5n6Nq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838179023">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://ik.imagekit.io/azv7d8ojn/static/ds-jrakah/jrakah3_V-p5MNqK8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838183788">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://ik.imagekit.io/azv7d8ojn/static/ds-jrakah/jrakah5_DCOn19H_6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838177114">
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