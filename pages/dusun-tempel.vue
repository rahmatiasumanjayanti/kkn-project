<template>
    <div class="flex prose prose-2xl mx-auto  px-10 py-10 w-full flex-col gap-8">
        <Navbar
        name="Dusun Tempel"
        />

        <div class="w-full flex justify-center items-center h-96 rounded-lg overflow-hidden">
            <img src="../assets/citran.jpg" class="h-96 w-full rounded-lg object-cover" alt="">
        </div>
        
        <article class=" w-full mx-auto">
            <div class="flex flex-col ">
                <h3 class="font-bold text-4xl">Tentang Dusun Tempel</h3>
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