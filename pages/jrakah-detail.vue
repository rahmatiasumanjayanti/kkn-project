<template>
    <div class="flex prose prose-2xl mx-auto  px-10 py-10 w-full flex-col gap-8">
        <Navbar
        name="Desa Jrakah"
        />

        <!-- Image -->
        <div class="w-full flex justify-center items-center h-96 rounded-lg overflow-hidden">
            <img src="https://ik.imagekit.io/azv7d8ojn/static/ds-jrakah/jrakah1_KIm-gPE0s.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838177937" class="h-96 w-full rounded-lg object-cover" alt="">
        </div>
        
        <article class=" w-full mx-auto">

            <!-- Deskripsi -->
            <div class="flex flex-col ">
                <h3 class="font-bold text-4xl text-[#353855]">Deskripsi</h3>
                <span class="flex-col gap-2 text-xl text-justify">
                    <p>
                        Jrakah adalah <b>desa</b> di <b>kecamatan Selo</b>, <b>Boyolali</b>, <b>Jawa Tengah</b>, <b>Indonesia</b>.
                        <br><br>
                        Jrakah merupakan salah satu desa di lereng <b>gunung Merapi</b>, dan terletak di kaki <b>gunung Merbabu</b>. 
                        Dari desa tersebut terlihat pemandangan indah, dimana dikelilingi oleh banyak gunung. Terlihat 
                        di sebelah barat <b>gunung Sindoro</b> dan <b>gunung Sumbing</b>, di selatan <b>gunung Merapi</b>, dan di utara ada 
                        <b>gunung Merbabu</b>. Sehingga wajar udara di desa tersebut juga sangat segar, dan mempesona saat 
                        matahari terbenam. Jrakah masuk dalam taman nasional Merapi, merupakan bagian dari pariwisata 
                        jawa tengah Solo-Selo-Borobudur. Sehingga selalu ramai wisatawan saat akhir pekan.
                    </p>
                    <span class="text-sm">sumber: Wikipedia</span>
                </span>
            </div>


            <!-- Daftar Dusun -->
            <div class="flex flex-col ">
                <h3 class="font-bold text-4xl text-[#353855]">Daftar Dusun di Desa Jrakah</h3>

                <!-- Paragraph -->
                <div class="flex-col gap-4 text-xl text-justify">
                    <ul class="list-decimal">
                        <li><nuxt-link class="no-underline hover:underline font-semibold" to="/dusun-jrakah">Dusun Jrakah</nuxt-link> </li>
                        <li><nuxt-link class="no-underline hover:underline font-semibold" to="/dusun-citran">Dusun Citran</nuxt-link></li>
                        <li><nuxt-link class="no-underline hover:underline font-semibold" to="/dusun-tempel">Dusun Tempel</nuxt-link></li>
                        <li><nuxt-link class="no-underline hover:underline font-semibold" to="/dusun-tumut">Dusun Tumut</nuxt-link></li>
                        <li><nuxt-link class="no-underline hover:underline font-semibold" to="/dusun-tosari">Dusun Tosari</nuxt-link></li>
                        <li><nuxt-link class="no-underline hover:underline font-semibold" to="/dusun-tosari">Dusun Bangun Rejo</nuxt-link></li>
                        <li>Dusun Jurang Jero</li>
                        <li>Dusun Gesikan</li>
                        <li>Dusun Patran</li>
                        <li>Dusun Jarak Lor</li>
                        <li>Dusun Jarak Kidul</li>
                        <li>Dusun Sepi</li>
                        <li>Dusun Kajor</li>
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
                                src="https://ik.imagekit.io/azv7d8ojn/static/citran/citran-card_uV7hxpsNrk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838141995">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://ik.imagekit.io/azv7d8ojn/static/tumut/tumut-card_i9iDqjLKp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838187365">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="/../static/tosari/tosari-card.jpg">
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
                                src="https://ik.imagekit.io/azv7d8ojn/static/tempel/tempel4_uPz3Zxc-q.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838254042">
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://ik.imagekit.io/azv7d8ojn/static/bangunrejo/bangunrejo2_6iKN3Nyqr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838195439">
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
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
.line{
    text-decoration: none;
}
</style>