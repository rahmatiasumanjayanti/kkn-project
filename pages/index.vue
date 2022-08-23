<template>
  <div class="hero flex justify-start px-10 py-10 items-start w-full flex-col gap-8">

    <div class="w-full flex flex-col">
      <Navbar
      name="Website Resmi Desa Jrakah"
      />
      <span class="text-lg font-semibold">Kecamatan Selo, Kabupaten Boyolali, Provinsi Jawa Tengah</span>
    </div>
    
    
    <div class="w-full h-96 px-10 py-10 text-white bg-[#353855] rounded-lg mt-10">
      
    </div>

    <div class="flex justify-center items-center w-full">
      <nuxt-link to="/jrakah-detail" class="rounded-lg px-7 py-3 border border-1 border-[#72777B]">
        <p class="font-semibold text-xl">Lihat lebih lanjut</p> 
      </nuxt-link>
    </div>

    <div class="pt-8">
      <p class="text-4xl py-10 text-[#353855] font-bold">Dukuh di Desa Jrakah</p>

      <!-- Carousel -->
      <div class="carousel carousel-center w-full space-x-7 rounded-box">

        <!-- Citran -->
        <div class="flex flex-col carousel-item gap-4 w-1/4 bg-[#353855] rounded-box">
          <img src="https://placeimg.com/350/350/arch" class="rounded-box" />

          <div class="flex flex-col gap-2 px-5 text-white">
            <h3 class="text-xl font-semibold">Dukuh Citran</h3>
            <p class="text-sm">Boyolali, Jawa Tengah, Indonesia</p>
            <p class="font-light py-2 text-sm">tempora explicabo iusto laboriosam eos pariatur. 
              Quae in expedita consequatur atque. Error vel beatae ducimus ipsa nesciunt laborum, minus quam.</p>
            <nuxt-link to="/dusun-citran" class="text-md pb-5 text-white cursor-pointer">Baca lebih lanjut!</nuxt-link>
          </div>
        </div> 

        <!-- Tumut -->
        <div class="flex flex-col carousel-item gap-4 w-1/4 bg-[#353855] rounded-box">
          <img src="https://placeimg.com/350/350/arch" class="rounded-box" />

          <div class="flex flex-col gap-2 px-5 text-white">
            <h3 class="text-xl font-semibold">Dukuh Tumut</h3>
            <p class="text-sm">Boyolali, Jawa Tengah, Indonesia</p>
            <p class="font-light py-2 text-sm">tempora explicabo iusto laboriosam eos pariatur. 
              Quae in expedita consequatur atque. Error vel beatae ducimus ipsa nesciunt laborum, minus quam.</p>
            <span class="text-md pb-5 text-white cursor-pointer">Baca lebih lanjut!</span>
          </div>
        </div> 

        <!-- Tempel -->
        <div class="flex flex-col carousel-item gap-4 w-1/4 bg-[#353855] rounded-box">
          <img src="https://placeimg.com/350/350/arch" class="rounded-box" />

          <div class="flex flex-col gap-2 px-5 text-white">
            <h3 class="text-xl font-semibold">Dukuh Tempel</h3>
            <p class="text-sm">Boyolali, Jawa Tengah, Indonesia</p>
            <p class="font-light py-2 text-sm">tempora explicabo iusto laboriosam eos pariatur. 
              Quae in expedita consequatur atque. Error vel beatae ducimus ipsa nesciunt laborum, minus quam.</p>
            <span class="text-md pb-5 text-white cursor-pointer">Baca lebih lanjut!</span>
          </div>
        </div> 

        <!-- Jrakah -->
        <div class="flex flex-col carousel-item gap-4 w-1/4 bg-[#353855] rounded-box">
          <img src="https://placeimg.com/350/350/arch" class="rounded-box" />

          <div class="flex flex-col gap-2 px-5 text-white">
            <h3 class="text-xl font-semibold">Dukuh Jrakah</h3>
            <p class="text-sm">Boyolali, Jawa Tengah, Indonesia</p>
            <p class="font-light py-2 text-sm">tempora explicabo iusto laboriosam eos pariatur. 
              Quae in expedita consequatur atque. Error vel beatae ducimus ipsa nesciunt laborum, minus quam.</p>
            <span class="text-md pb-5 text-white cursor-pointer">Baca lebih lanjut!</span>
          </div>
        </div> 

        <!-- Tosari -->
        <div class="flex flex-col carousel-item gap-4 w-1/4 bg-[#353855] rounded-box">
          <img src="https://placeimg.com/350/350/arch" class="rounded-box" />

          <div class="flex flex-col gap-2 px-5 text-white">
            <h3 class="text-xl font-semibold">Dukuh Tosari</h3>
            <p class="text-sm">Boyolali, Jawa Tengah, Indonesia</p>
            <p class="font-light py-2 text-sm">tempora explicabo iusto laboriosam eos pariatur. 
              Quae in expedita consequatur atque. Error vel beatae ducimus ipsa nesciunt laborum, minus quam.</p>
            <span class="text-md pb-5 text-white cursor-pointer">Baca lebih lanjut!</span>
          </div>
        </div> 
       
      </div>

    </div>

      <!-- Kekuatan Kami -->
      <div class="pt-8 w-full">
        <p class="text-4xl py-10 text-[#353855] font-bold">Kekuatan Kami</p>
        <div class="grid grid-cols-2 gap-2 justify-center items-center">

          <div class="bg-[#353855] text-white rounded-xl px-10 py-10 h-96">
            <p class="font-bold text-[1.875rem]">Kami memiliki <br> semangat gotong <br> royong yang sangat <br> tinggi</p> 
          </div>
          
          <div class="bg-[#353855] text-white rounded-xl px-10 py-10 h-96 flex flex-col justify-end">
            <p class="flex justify-end font-bold text-[1.875rem]">Sumber daya alam yang <br> melimpah menjadi <br> keunggulan desa kami</p> 
          </div>
          
          <div class="bg-[#353855] text-white rounded-xl px-10 py-10 h-96 flex flex-col">
            <p class="font-bold text-[1.875rem] flex justify-end">Sumber daya alam yang <br> melimpah menjadi <br> keunggulan desa kami</p> 
          </div>

          <div class="bg-[#353855] text-white rounded-xl px-10 py-10 h-96 flex flex-col justify-end">
            <p class="font-bold text-[1.875rem]">Kami memiliki <br> semangat gotong royong <br> yang sangat tinggi</p> 
          </div>
        </div>
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

  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  name: 'IndexPage',
  components: { 
    Navbar
  }
}
</script>
