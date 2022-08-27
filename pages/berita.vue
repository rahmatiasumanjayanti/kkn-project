<template>
   <div class="flex justify-start items-center px-10 py-10 w-full flex-col gap-8">
        <Navbar
        name="Berita"
        />

        <div class="w-full grid grid-cols-3 grid-rows-3 justify-center items-center gap-8">
            <Berita
            judul="Diduga halaman rumah warga diakuisisi menjadi kolam ikan"
            dusun="Dusun Citran"
            tanggal="12 Agustus 2022"
            />
            
            <Berita
            judul="Dusun Tumut adalah Dusun dengan Pria Terganteng"
            dusun="Dusun Tumut"
            tanggal="2 Agustus 2022"
            />

            <Berita
            judul="Warga Tosari Berbondong-bondong Masuk Islam"
            dusun="Dusun Tosari"
            tanggal="22 Agustus 2022"
            />

            <Berita
            judul="Cerdaskan Anak Bangsa, Mahasiswa KKN Raih Keberkahan"
            dusun="Dusun Tempel"
            tanggal="5 Agustus 2022"
            />

              <Berita
            judul="Cerdaskan Anak Bangsa, Mahasiswa KKN Raih Keberkahan"
            dusun="Dusun Tempel"
            tanggal="5 Agustus 2022"
            />

              <Berita
            judul="Cerdaskan Anak Bangsa, Mahasiswa KKN Raih Keberkahan"
            dusun="Dusun Tempel"
            tanggal="5 Agustus 2022"
            />
        </div>
        
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