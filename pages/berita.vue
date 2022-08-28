<template>
   <div class="flex justify-start prose-md items-center px-10 py-10 w-full flex-col gap-8">
        <Navbar
        name="Berita"
        />

        <ul class="w-full h-1/2 grid grid-cols-3 grid-rows-2 justify-center items-center gap-10">

        
          <li class="block h-full">
            <nuxt-link to="/berita-yatiman">
            <Berita
            :Gambar="'https://ik.imagekit.io/azv7d8ojn/yatiman_OvyUef0mY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661675123346'"
            judul="Tradisi Santunan Anak Yatim Desa Jrakah, Boyolali dalam rangka Memperingati 10 Muharram"
            dusun="Dusun Citran"
            tanggal="12 Agustus 2022"
            />
          </nuxt-link>
          </li>

        
          <li class="block h-full">
            <nuxt-link to="/berita-karnaval">
            <Berita
            :Gambar="'https://ik.imagekit.io/azv7d8ojn/17an_dUEvH-Zeq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661675122207'"
            judul="Semarak Karnaval Tahunan Desa Jrakah  Untuk memperingati HUT RI-77"
            dusun="Dusun Tumut"
            tanggal="2 Agustus 2022"
            />
            </nuxt-link>
          </li>
        
            
        
          <li class="block h-full">
            <nuxt-link to="/berita-17an">
            <Berita
            :Gambar="'https://ik.imagekit.io/azv7d8ojn/karnaval-landing_43d2BYNJeX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661675122473'"
            judul="Antusias Warga dalam Perlombaan  17 Agustusan Desa  Jrakah"
            dusun="Dusun Tosari"
            tanggal="22 Agustus 2022"
            />
            </nuxt-link>
          </li>
        

            <!-- <li class="w-full h-full">

            <Berita
            judul="Tradisi Santunan Anak Yatim Desa Jrakah, Boyolali dalam rangka Memperingati 10 Muharram"
            dusun="Dusun Citran"
            tanggal="12 Agustus 2022"
            />
          </li>

          <li class="w-full h-full">

            <Berita
            judul="Semarak Karnaval Tahunan Desa Jrakah  Untuk memperingati HUT RI-77"
            dusun="Dusun Tumut"
            tanggal="2 Agustus 2022"
            />
          </li>
            
          <li class="w-full h-full">
            <Berita
            judul="Antusias Warga dalam Perlombaan  17 Agustusan Desa  Jrakah"
            dusun="Dusun Tosari"
            tanggal="22 Agustus 2022"
            />
          </li> -->
        </ul>
        
    </div>
</template>

<script>
import Berita from '~/components/Berita.vue'

export default {
    components: { Berita },
}
</script>

<style>

</style>