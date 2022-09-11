<template>
   <div class="flex justify-start prose-md items-center px-10 py-10 w-full flex-col gap-8">
        <Navbar
        name="Berita"
        />

        <ul class="w-full h-1/2 grid grid-cols-3 grid-rows-2 justify-center items-center gap-10">

        
          <li class="block h-full">
            <nuxt-link to="/berita-yatiman">
            <Berita
            :Gambar="'https://ik.imagekit.io/azv7d8ojn/static/berita/yatiman_qR6xm2M3_m.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838107796'"
            judul="Tradisi Santunan Anak Yatim Desa Jrakah, Boyolali dalam rangka Memperingati 10 Muharram"
            dusun="Dusun Tumut"
            tanggal="8 Agustus 2022"
            />
          </nuxt-link>
          </li>

        
          <li class="block h-full">
            <nuxt-link to="/berita-karnaval">
            <Berita
            :Gambar="'https://ik.imagekit.io/azv7d8ojn/static/berita/karnaval-landing_CjTX06Nh0m.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838116948'"
            judul="Semarak Karnaval Tahunan Desa Jrakah  Untuk memperingati HUT RI-77"
            dusun="Desa Jrakah"
            tanggal="24 Agustus 2022"
            />
            </nuxt-link>
          </li>
        
            
        
          <li class="block h-full">
            <nuxt-link to="/berita-17an">
            <Berita
            :Gambar="'https://ik.imagekit.io/azv7d8ojn/static/berita/17an_LIhZuTx-e.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661838108826'"
            judul="Antusias Warga dalam Perlombaan  17 Agustusan Desa  Jrakah"
            dusun="Dusun Jrakah"
            tanggal="20 Agustus 2022"
            />
            </nuxt-link>
          </li>
      
          <li class="block h-full">
            <nuxt-link to="/berita-sawi">
            <Berita
            :Gambar="'https://ik.imagekit.io/azv7d8ojn/static/berita/WhatsApp_Image_2022-08-31_at_19.13.50_Er_UGoFJ5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662901818471'"
            judul="Transformasi Sayur Sawi Hijau Menjadi Stick Sawi Aneka Rasa Khas Desa Jrakah"
            dusun="Desa Jrakah"
            tanggal="30 Agustus 2022"
            />
            </nuxt-link>
          </li>

          <li class="block h-full">
            <nuxt-link to="/berita-bawur">
            <Berita
            :Gambar="'https://ik.imagekit.io/azv7d8ojn/static/berita/FotoJet__1__uNAt7jZcu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662909960768'"
            judul="Kesenian Campur Bawur yang di Ikuti oleh Ibu-ibu Dusun Citran, Berhasil Meraih Kemenangan ..."
            dusun="Dusun Jrakah"
            tanggal="24 Agustus 2022"
            />
            </nuxt-link>
          </li>

          <li class="block h-full">
            <nuxt-link to="/berita-proker94">
            <Berita
            :Gambar="'https://ik.imagekit.io/azv7d8ojn/static/berita/WhatsApp_Image_2022-09-11_at_20.16.34_M_oPhQl7B.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662911296857'"
            judul="Sosialisasi Pengelolaan Sampah dan Demonstrasi Pembuatan Obat Komposter oleh KKN Unit 94 ..."
            dusun="Dusun Citran"
            tanggal="1 September 2022"
            />
            </nuxt-link>
          </li>
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