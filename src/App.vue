<template>
  <header class="bg-yellow-300">
    <a href="#content" class="sr-only focus:not-sr-only"> Passez au contenu </a>
    <nav class="flex">
      <h1 class="m-1 flex-auto text-xl xl:flex-initial">
        <router-link to="/">
          <IconLogo class="ml-4" />
          <span class="sr-only">Site Estatery</span>
        </router-link>
      </h1>
      <!-- Menu xl-->
      <div class="ml-8 hidden w-[556px] items-center justify-start gap-12 overflow-hidden xl:flex">
        <p class="text-left text-xl font-medium text-gray-900">Programmation</p>

        <p class="text-left text-xl font-medium text-gray-900">Artistes</p>

        <p class="text-left text-xl font-medium text-gray-900">Festival</p>

        <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-2">
          <p class="text-left text-xl font-medium text-gray-900">Contact</p>
          <chevron />
        </div>
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
      {{ menuOuvert }}
      <ul class="mt-12 flex flex-col gap-3 text-center text-3xl">
        <!-- Autre menu -->
        <li class="mt-8"><router-link to="/">Programmation</router-link></li>
        <li class="mt-8"><router-link to="/">Artistes</router-link></li>
        <li class="mt-8"><router-link to="/">Festival</router-link></li>
        <li class="mt-8"><router-link to="/">Contact</router-link></li>
      </ul>
    </div>
  </header>
  <body></body>
  <footer></footer>
</template>

<script>
import IconMenu from "./components/icons/IconMenu.vue";
import IconLogo from "./components/icons/IconLogo.vue";
import AccueilView from "./views/AccueilView.vue";

export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: { IconLogo, IconMenu, AccueilView },
};
</script>