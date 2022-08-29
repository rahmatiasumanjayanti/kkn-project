<template>
    <div class="flex prose prose-2xl mx-auto  px-10 py-10 w-full flex-col gap-8">
        <Navbar
        name="Dusun Citran"
        />

        <div class="w-full flex justify-center items-center h-96 rounded-lg overflow-hidden">
            <img src="../static/citran/citran.jpg" class="h-96 w-full rounded-lg object-cover" alt="">
        </div>

        
        <article class=" w-full mx-auto">
            <div class="flex flex-col ">

                <!-- Status -->
                <div class="stats stats-vertical lg:stats-horizontal shadow">
                    <div class="stat">
                        <div class="stat-title">RT 01</div>
                        <div class="stat-value">46 KK</div>
                    </div>
                    
                    <div class="stat">
                        <div class="stat-title">RT 02</div>
                        <div class="stat-value">44 KK</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Agama Islam</div>
                        <div class="stat-value">100%</div>
                    </div>
                </div>
                
                <div>
                <h3 class="font-bold text-4xl">Tentang Dusun Citran</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <p>
                        Dahulunya Dusun Citran hanya berisikan perkebunan sayuran dan kebun teh yang bernama 
                        Sidodadi dan dikelola oleh Kolonial Belanda. Kemudian ada seseorang yang bernama <b>Citro</b> 
                        (leluhurnya orang Citran) yang menetap dan tinggal di pemukiman tersebut, singkat cerita Beliau meninggal 
                        dan pemukiman tersebut dinamakan Citran. 
                        <br>
                    </p>
                    <p> Dalam segi bahasa, <b>Citra</b> menurut warga sekitar itu bermakna (bagus) artinya bagus untuk membentuk sebuah Dusun,
                        yang telah di pelopori oleh mbah Citro dan mbah Gemi. Gemi berarti <b>suatu hal yang ditentukan</b>. <br>
                    <p>
                        Dikarenakan Citran sendiri terletak di kaki gunung Merbabu membuat suhu disini tentunya menjadi dingin 
                        dan sejuk, dengan suhu rata-rata itu bisa mencapai 16 derajat C, dan untuk suhu terdingin yang pernah 
                        tercatat di Citran pernah mencapai 9 derajat C. Untuk curah hujan di Citran sendiri cukup 
                        sering terjadi di akhir tahun. <br>
                    </p>
                </span>
                </div>
            </div>

            <div class="flex flex-col">
                <h3 class="font-bold text-4xl">Sumber Daya Alam</h3>
                <div class="flex-col gap-4 text-xl text-justify">

                    <div class="flex-col gap-1">
                        <span class="font-semibold text-2xl">Hasil Bumi</span>
                        <ul>
                            <li>Wortel, Kentang, Lombok, Cabai, dan sayur lainnya. Hasil bumi unggulan milik Dusun Citran yaitu <b>Tanaman Tembakau</b>.</li> 
                            
                        </ul>
                    </div>

                    <div class="flex-col">  
                        <span class="font-semibold text-2xl">Potensi Desa</span>
                        <ul>
                            <li>Menurut informasi yang diberikan oleh pak Bayan, kedepannya Citran akan membuka 
                                <b>jalur pendakian resmi</b> untuk sampai ke puncak Merbabu. Tujuan pembukaan jalur 
                                pendakian ini juga sebagai pengenalan Merbabu sebagai taman nasional yang ada di Desa Jrakah.</li> 
                        </ul>
                    </div>

                    <div>
                        <span class="font-semibold text-2xl">Pendidikan</span>
                        <ul>
                            <li>
                                Tingkat pendidikan rata-rata warga Citran sendiri itu sangat beragam, beberapa 
                                warga ada yang lulusan SMP, SMA dan untuk anak-anak dan remaja sendiri sekarang 
                                sudah terjadi peningkatan, dari SD hingga menyambung ke Perguruan tinggi.
                            </li> 
                        </ul>   
                    </div>

                    <div>
                        <span class="font-semibold text-2xl">Mata Pencaharian</span>
                        <ul>
                            <li>
                                Dusun Citran sendiri itu sebagian besar warga nya bekerja di ladang, pertanian dan 
                                perkebunan, dengan persentase sebanyak <b>70% Petani</b>, <b>20% Pedagang</b>,
                                <b>10% Kuli bangunan</b>, dan lain-lain.
                            </li> 
                        </ul>   
                    </div>
                    
                </div>
            </div>

            <div class="flex flex-col ">
                <h3 class="font-bold">Kesenian dan Kebudayaan</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <p>
                        Kesenian khas Dusun Citran adalah:<br>
                        <ul>
                            <li><b>Jandelan Bawur</b>, sebuah pentas yang diikuti 40 orang dengan menampilkan gambaran karakter orang atau tokoh,kemudian juga menggambarkan karakter hewan</li>
                            <li><b>Kesenian Kethek</b>, yang isinya adalah pertunjukan tari yang pemain nya mengimitasi gerakan dari monyet,dan diiringi oleh gamelan ataupun gending gencaran pancer.</li>
                            <li><b>Birowo</b>, sebagai hiburan masyarakat baik di acara 17 an ataupun hajatan</li>
                            <li><b>Shalawatan Jawa</b>, yang isinya adalah kesenian bernuansa islam yang telah berkulturasi dengen kesenian tradisional jawa</li>
                            <li><b>Jandelan Kreasi Baru, Jedrok, dan Serong.</b></li>
                            <li><b>Wayang</b>, yang menceritakan tentang kisah-kisah orang terdahulu</li>
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
                                    src="../static/citran/citran8.jpg">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="../static/citran/citran10.jpg">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="/../static/citran/citran7.jpg">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="../static/citran/citran4.jpg">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="../static/citran/citran6.jpg">
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="../static/citran/citran5.jpg">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
                <!-- <div class="w-full flex justify-end gap-2 items-center py-5 cursor-pointer ">
                    <nuxt-link to="/galeri" class="flex gap-2 items-center hover:text-slate-500 no-underline">
                        <span class="text-md font-semibold ">Lihat Lebih banyak</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </nuxt-link>
                </div>
                 -->
            </div>
        <!-- Slogan Desa -->
        <div class="w-full flex pt-8">
            <div class="w-1/4 h-96 px-10 py-10 text-white bg-[#353855] rounded-lg">

            </div>

            <div class="flex flex-col gap-6 justify-center w-full px-5">
            <span class="text-9xl">
                <svg width="54" height="38" viewBox="0 0 78 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.24 0.439992L21.36 43.64L17.4 27.44C22.56 27.44 26.76 28.94 30 31.94C33.24 34.94 34.86 39.08 34.86 44.36C34.86 49.52 33.18 53.72 29.82 56.96C26.58 60.08 22.5 61.64 17.58 61.64C12.54 61.64 8.34 60.08 4.98 56.96C1.74 53.72 0.12 49.52 0.12 44.36C0.12 42.8 0.24 41.3 0.48 39.86C0.72 38.3 1.2 36.5 1.92 34.46C2.64 32.42 3.66 29.72 4.98 26.36L15.42 0.439992H33.24ZM75.72 0.439992L63.84 43.64L59.88 27.44C65.04 27.44 69.24 28.94 72.48 31.94C75.72 34.94 77.34 39.08 77.34 44.36C77.34 49.52 75.66 53.72 72.3 56.96C69.06 60.08 64.98 61.64 60.06 61.64C55.02 61.64 50.82 60.08 47.46 56.96C44.22 53.72 42.6 49.52 42.6 44.36C42.6 42.8 42.72 41.3 42.96 39.86C43.2 38.3 43.68 36.5 44.4 34.46C45.12 32.42 46.14 29.72 47.46 26.36L57.9 0.439992H75.72Z" fill="black"/>
                </svg>
            </span>
            <span class="text-3xl font-bold">Dusun Mandiri, Dusun Berdirkari</span>

            <div class="flex flex-col justify-end">
                <p class="flex justify-end text-2xl font-bold">Pak Tumari</p>
                <p class="flex justify-end font-semibold text-xl">Pak Bayan - Kepala Dusun Jrakah</p>
            </div>
            </div>
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