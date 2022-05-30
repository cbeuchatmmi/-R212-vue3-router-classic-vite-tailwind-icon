<template>
  <header class="bg-yellow-300">
    <a href="#content" class="sr-only focus:not-sr-only"> Passez au contenu </a>
    <nav class="flex">
      <h1 class="m-1 flex-auto text-xl xl:flex-initial">
        <Router-link to="/">
          <IconLogo class="ml-4" />
          <span class="sr-only">Site Estatery</span>
        </Router-link>
      </h1>
      <!-- Menu xl-->
      <div class="ml-8 hidden w-[556px] items-center justify-start gap-12 overflow-hidden xl:flex">
        <Router-link to="Programmation"><p class="text-left text-xl font-medium text-gray-900">Programmation</p></Router-link>

        <Router-link to="Artiste"><p class="text-left text-xl font-medium text-gray-900">Artistes</p></Router-link>

        <Router-link to="Festival"><p class="text-left text-xl font-medium text-gray-900">Festival</p></Router-link>

        <Router-link to="Contact"><p class="text-left text-xl font-medium text-gray-900">Contact</p></Router-link>

        <div class="flex h-6 w-[63px] items-center justify-start gap-2.5"></div>
        <div class="flex h-6 w-[113px] items-center justify-start gap-2.5"></div>
        <div class="flex h-6 w-[31px] items-center justify-start gap-2.5"></div>
      </div>
      <div class="ml-auto mr-4 flex items-center justify-end gap-4">
        <login class="hidden flex-auto xl:flex" />
        <signup class="hidden flex-auto xl:flex" />
      </div>

      <button
        class="relative z-50 text-xl xl:hidden"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
        <IconMenu class="mr-8 h-8 w-8" />
        <span class="sr-only">Menu</span>
      </button>
    </nav>
    <div
      id="menu"
      class="
        fixed
        top-0
        left-0
        z-10
        h-screen
        w-screen
        translate-x-full
        bg-yellow-100
        motion-safe:transition-transform motion-safe:duration-1000
      "
      :class="{ 'translate-x-0': menuOuvert }"
    >
      <ul class="mt-12 flex flex-col gap-3 text-center text-3xl">
        <!-- Autre menu -->
        <li class="mt-8"><Router-link to="Programmation">Programmation</Router-link></li>
        <li class="mt-8"><Router-link to="Artiste">Artistes</Router-link></li>
        <li class="mt-8"><Router-link to="Festival">Festival</Router-link></li>
        <li class="mt-8"><Router-link to="Contact">Contact</Router-link></li>
      </ul>
    </div>
  </header>
  <body class="bg-yellow-50">
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
      <div class="] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        <div class="mt-4 mb-4 flex flex-shrink-0 flex-grow-0 flex-col items-center justify-center">
          <Router-link to="Festival">
            <IconFest />
            <span class="sr-only">Page Festival</span>
          </Router-link>
          <p class="h-[34px] w-[375px] flex-shrink-0 flex-grow-0 text-center text-[29px] text-rose-600">Le Festival</p>
        </div>
        <div class="mt-4 mb-4 flex flex-shrink-0 flex-grow-0 flex-col items-center justify-center">
          <Router-link to="Programmation">
            <IconProg />
            <span class="sr-only">Page Programmation</span>
          </Router-link>

          <p class="h-9 w-[375px] flex-shrink-0 flex-grow-0 text-center text-[29px] text-rose-600">La Programmation</p>
        </div>
        <div class="mt-4 mb-4 flex flex-shrink-0 flex-grow-0 flex-col items-center justify-center">
          <Router-link to="Artiste">
            <IconArt />
            <span class="sr-only">Page Artistes</span>
          </Router-link>
          <p class="h-[41px] w-[375px] flex-shrink-0 flex-grow-0 text-center text-[29px] text-rose-600">Les Artistes</p>
        </div>
      </div>
    </div>
  </body>
  <footer class="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] bg-amber-900">
    <div>
      <Router-link to="/">
        <IconLogo class="mt-4 ml-4 h-[141px] w-[133px]" />
        <span class="sr-only">Site Estatery</span>
      </Router-link>
    </div>
    <div>
      <div class="flex h-[117px] items-center justify-center">
        <Router-link to="/">
          <IconInsta class="flex w-[104px] items-center justify-between pl-[25px] pr-[15px]" />
          <span class="sr-only">Suivre sur Instagram</span>
        </Router-link>
        <Router-link to="/">
          <IconFacebook class="flex w-[104px] items-center justify-between pl-[25px] pr-[15px]" />
          <span class="sr-only">Suivre sur Facebook</span>
        </Router-link>
        <Router-link to="/">
          <IconTwitter class="flex w-[104px] items-center justify-between pl-[25px] pr-[15px]" />
          <span class="sr-only">Suivre sur Twitter</span>
        </Router-link>
      </div>
      <div class="flex h-[62px] flex-grow flex-col items-center justify-center">
        <Router-link to="Contact">
          <p class="h-[37.45px] w-[172px] text-center text-lg font-bold text-white">Nous Contacter</p>
          <span class="sr-only">Page Contact</span>
        </Router-link>
        <Router-link to="Mentions">
          <p class="h-6 w-[151px] text-center text-lg font-bold text-white">Mentions Légales</p>
          <span class="sr-only">Page Mentions Légales</span>
        </Router-link>
      </div>
    </div>
  </footer>
</template>

<script>
import IconMenu from "./components/icons/IconMenu.vue";
import IconLogo from "./components/icons/IconLogo.vue";
import IconInsta from "./components/icons/IconInsta.vue";
import IconFacebook from "./components/icons/IconFacebook.vue";
import IconTwitter from "./components/icons/IconTwitter.vue";
import IconFest from "./components/icons/IconFest.vue";
import IconProg from "./components/icons/IconProg.vue";
import IconArt from "./components/icons/IconArt.vue";
import BgY from "./components/bg-jaune.vue";

import AccueilView from "./views/AccueilView.vue";

export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: { IconLogo, IconMenu, IconInsta, IconFacebook, IconTwitter, AccueilView, IconFest, IconProg, IconArt, BgY },
};
</script>