<template>
    <div class="flex prose prose-2xl mx-auto  px-10 py-10 w-full flex-col gap-8">
        <Navbar
        name="Dusun Tumut"
        />

        <div class="w-full flex justify-center items-center h-96 rounded-lg overflow-hidden">
            <img src="https://ik.imagekit.io/azv7d8ojn/static/tumut/tumut-landing_SCdIL12wRo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838160355" class="h-96 w-full rounded-lg object-cover" alt="">
        </div>

        
        <article class=" w-full mx-auto">
            <div class="flex flex-col ">

                <!-- Status -->
                <div class="stats stats-vertical lg:stats-horizontal shadow">
                    <div class="stat">
                        <div class="stat-title">Populasi Penduduk</div>
                        <div class="stat-value flex gap-4 items-center">
                             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-plus-slash-minus" viewBox="0 0 16 16">
                                <path d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z"/>
                            </svg>
                             260 Jiwa</div>
                    </div>
                    
                    <div class="stat">
                        <div class="stat-title">Kartu Keluarga</div>
                        <div class="stat-value">67 KK</div>
                    </div>
                    
                    
                </div>

                <h3 class="font-bold text-4xl">Tentang Dusun Tumut</h3>


                <span class="flex-col gap-4 text-xl text-justify">
                    <p>
                        Terletak di lereng gunung Merbabu dengan luas kurang lebih 55Ha yang bertepatan di Desa 
                        Jrakah kecamatan Selo, Kabupaten Boyolali, Provinsi Jawa Tengah. Dusun ini kaya akan Sumber Daya Alamnya. 
                        Di dukuh ini juga mempunyai kelembagaan seperti Karang Taruna dan lain-lain. Memiliki satu Masjid, satu Gereja 
                        dan satu pemakaman umum. Masyarakat Dusun Tumut mayoritasnya bekerja sebagai petani.
                    </p>
                </span>
            </div>

            <div class="flex flex-col">
                <h3 class="font-bold text-4xl">Sumber Daya Alam</h3>
                <div class="flex-col gap-4 text-xl text-justify">

                    <div class="flex-col gap-1">
                        <span class="font-semibold text-2xl">Pertanian</span>
                        <ul>
                            <li>Warga Tumut menanam sayuran seperti sawi, wortel, adas, daun bawang, tembakau dll</li> 
                            <li><i>Highlight</i> dari pertanian di Dusun ini ialah <b>tembakau</b></li>
                        </ul>
                    </div>

                    <div class="flex-col">  
                        <span class="font-semibold text-2xl">Peternakan</span>
                        <ul>
                            <li>tiap di rumah warga tumut memiliki setidaknya 1 Sapi, juga Ayam atau Kambing</li> 
                        </ul>
                    </div>

                    <div>
                        <span class="font-semibold text-2xl">Kualitas Lingkungan</span>
                        <ul>
                            <li>Masih asri hanya saja di berapa titik menjadi tempat pembuangan sampah hasil penjualan yang tidak laku</li> 
                        </ul>   
                    </div>
                    
                </div>
            </div>

            <div class="flex flex-col ">
                <h3 class="font-bold">Kesenian dan Kebudayaan</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <p>
                        Kesenian khas Dusun Tumut adalah:<br>
                        <ul>
                            <li>Topeng Ireng</li>
                            <li>Reog</li>
                            <li>Jaran</li>
                            <li>Ketoprak</li>
                            <li>Wayang Orang (tapi sudah lama mati atau sudah tidak dimainkan lagi)</li>
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
                                    src="https://ik.imagekit.io/azv7d8ojn/static/tumut/tumut8_EbvehPtF7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838158857">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://ik.imagekit.io/azv7d8ojn/static/tumut/tumut3_UzOiqQoOMS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838110279">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://ik.imagekit.io/azv7d8ojn/static/tumut/tumut7_7XjzIcNdm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838173091">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://ik.imagekit.io/azv7d8ojn/static/tumut/tumut4_UqGeGEw6a.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838199985">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://ik.imagekit.io/azv7d8ojn/static/tumut/tumut2_8t2u4ChF7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838121175">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://ik.imagekit.io/azv7d8ojn/static/tumut/tumut5_k9wS-cmGhz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838177381">
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