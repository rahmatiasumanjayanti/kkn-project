<template>
    <div class="flex prose prose-2xl mx-auto  px-10 py-10 w-full flex-col gap-8">
        <Navbar
        name="Dusun Jrakah"
        />

        <div class="w-full flex justify-center items-center h-96 rounded-lg overflow-hidden">
            <img src="../assets/citran/citran.jpg" class="h-96 w-full rounded-lg object-cover" alt="">
        </div>
        
        <article class=" w-full mx-auto">
            <div class="flex flex-col ">
                <h3 class="font-bold text-4xl">Tentang Dusun Jrakah</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <p>
                        Warga Dusun Jrakah mayoritas agamanya adalah agama Islam dan untuk profesi warganya adalah 
                        petani. Jumlah Penduduk yang berada di Dusun Jrakah sekitar 140an orang. <br>
                    </p>
                    <p>
                        Dusun Jrakah dinamakan 'Jrakah' dikarenakan dusun ini menempel pada tebing-tebing maka dinamakan dukuh Jrakah yang sesuai dengan lokasi 
                        maupun tempat dusun itu berada. Dusun Jrakah juga berada di sebelah dusun bentrokan namun, 
                        untuk dusun bentrokan sendiri masuk pada kabupaten magelang dan untuk dusun Jrakah masuk pada 
                        kabupaten Boyolali. <br>
                    </p>
                </span>
            </div>

            <div class="flex flex-col ">
                <h3 class="font-bold text-4xl">Kebudayaan dan Kesenian</h3>
                <div class="flex-col gap-4 text-xl text-justify">
                    <ul>
                        <li>Dusun Jrakah biasanya menampilkan kesenian Reog</li> 
                    </ul>
                </div>
            </div>

            <div class="flex flex-col ">
                <h3 class="font-bold">Hasil Bumi</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <p>
                        Hasil Bumi yang biasanya di panen di dusun Jrakah adalah:<br>
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
                <h3 class="font-bold">Potensi Wisata Jrakah</h3>
                <span class="flex-col gap-4 text-xl text-justify">
                    <ul>
                        <li>Potensi Wisata di Dusun Jrakah adalah jalur pendakian menuju gunung Merbabu.</li> 
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