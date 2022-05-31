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
        z-40
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
  <main>
    <routerView />
  </main>
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
          <p class="h-auto w-auto text-center text-lg font-bold text-white">Nous Contacter</p>
          <span class="sr-only">Page Contact</span>
        </Router-link>
        <Router-link to="Mentions">
          <p class="mb-8 h-6 w-auto text-center text-lg font-bold text-white">Mentions Légales</p>
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

import AccueilView from "./views/AccueilView.vue";

export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: { IconLogo, IconMenu, IconInsta, IconFacebook, IconTwitter, AccueilView, IconFest, IconProg, IconArt },
};
</script>