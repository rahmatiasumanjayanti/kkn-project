<template>
    <div class="flex prose prose-2xl mx-auto  px-10 py-10 w-full flex-col gap-8">
        <Navbar
        name="Dusun Tumut"
        />

        <div class="w-full flex justify-center items-center h-96 rounded-lg overflow-hidden">
            <img src="../assets/citran/citran.jpg" class="h-96 w-full rounded-lg object-cover" alt="">
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
                        Warga Dusun Tempel mayoritas agamanya adalah agama Islam dan untuk profesi warganya adalah 
                        petani. Jumlah Penduduk yang berada di Dusun Tempel sekitar 140an orang. <br>
                    </p>
                    <p>
                        Dusun Tempel dinamakan 'Tempel' dikarenakan dusun ini menempel pada tebing-tebing maka dinamakan dukuh tempel yang sesuai dengan lokasi 
                        maupun tempat dusun itu berada. Dusun Tempel juga berada di sebelah dusun bentrokan namun, 
                        untuk dusun bentrokan sendiri masuk pada kabupaten magelang dan untuk dusun Tempel masuk pada 
                        kabupaten Boyolali. <br>
                    </p>
                </span>
            </div>

            <div class="flex flex-col ">
                <h3 class="font-bold text-4xl">Kebudayaan dan Kesenian</h3>
                <div class="flex-col gap-4 text-xl text-justify">
                    <ul>
                        <li>Dusun Tempel biasanya menampilkan kesenian Reog</li> 
                    </ul>
                </div>
            </div>

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

            <div class="flex flex-col ">
                <h3 class="font-bold">Potensi Wisata Tempel</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <ul>
                        <li>Potensi Wisata di Dusun Tempel adalah jalur pendakian menuju gunung Merbabu.</li> 
                    </ul>
                </span>
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