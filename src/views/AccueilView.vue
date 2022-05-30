<template>
  <div>
    <img src="src/assets/image/accueil2.jpg" alt="Image d'une scène avec foule" />
    <!--<h1 class="text-[81px] text-rose-600"> 
        <span class="h-[638px] w-[375px] text-center">SUN</span><br /> 
        <span class="h-[638px] w-[375px] text-center">&#x26;</span><br /> 
        <span class="h-[638px] w-[375px] text-center">CHILL</span> 
      </h1> -->
  </div>
  <div class="relative flex items-center justify-center gap-2.5 rounded-[52px] bg-amber-700 px-2.5 py-[42px]">
    <p class="flex-grow text-center text-[38px] font-bold text-white">
      <span class="">Bienvenu au Sun &#x26; Chill festival</span>
      <br />
      <br />
      <span class="">Ce nouveau festival de musique chill out de l’est de la France.</span>
    </p>
  </div>
  <div class="text-left text-[23px] text-black">
    <p class="left-[19px] top-[1083px] m-4">Nous vous accueillons le 20 et 21 août 2022 de 19h à 01h sur les rives du Lac du Malsaucy.</p>
    <p class="left-[19px] top-[1183px] m-4">
      Pour de belles soirées d’été au bord de la plage avec un concert, des activités sur la plage et des buvettes.
    </p>
  </div>

  <div>
    <!--<BgY class="" />-->
    <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      <div class="mt-4 mb-4 flex flex-col items-center justify-center">
        <Router-link to="/Festival">
          <IconFest />
          <span class="sr-only">Page Festival</span>
        </Router-link>
        <p class="h-[34px] w-[375px] text-center text-[29px] text-rose-600">Le Festival</p>
      </div>
      <div class="mt-4 mb-4 flex flex-col items-center justify-center">
        <Router-link to="Programmation">
          <IconProg />
          <span class="sr-only">Page Programmation</span>
        </Router-link>

        <p class="h-9 w-[375px] text-center text-[29px] text-rose-600">La Programmation</p>
      </div>
      <div class="mt-4 mb-4 flex flex-col items-center justify-center">
        <Router-link to="Artiste">
          <IconArt />
          <span class="sr-only">Page Artistes</span>
        </Router-link>
        <p class="h-[41px] w-[375px] text-center text-[29px] text-rose-600">Les Artistes</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconFest from "../components/icons/IconFest.vue";
import IconProg from "../components/icons/IconProg.vue";
import IconArt from "../components/icons/IconArt.vue";
import BgY from "../components/bg-jaune.vue";
export default {
  components: { IconFest, IconProg, IconArt, BgY },
};
</script>