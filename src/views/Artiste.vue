<template>
  <main class="bg-white dark:bg-black">
    <div>
      <TriD />
      <TriG />

      <h2 class="p-6 text-center font-PerMarker text-[38px] font-bold text-rose-600 dark:text-white lg:text-[64px]">Les Artistes</h2>
    </div>

    <h2 class="p-6 text-[29px] text-rose-600 dark:text-white">Les Artistes</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <card nom="Zero 7" :image="zero7" />

      <div class="mb-10 text-center">
        <h2 class="p-4 font-PerMarker text-[29px] text-rose-600 dark:text-white">Groove Armada</h2>
        <img class="m-auto" src="../assets/image/groove.jpg" alt="Photo du groupe Groove Armada" />
      </div>
      <div class="text-center">
        <h2 class="p-4 font-PerMarker text-[29px] text-rose-600 dark:text-white">Thievery Corporation</h2>
        <img class="m-auto" src="../assets/image/thievery.jpg" alt="Photo du groupe Thievery Corporation" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 font-PerMarker text-[29px] text-rose-600 dark:text-white">Röyksopp</h2>
        <img class="m-auto" src="../assets/image/röyksopp.jpg" alt="Photo du groupe Röyksopp" />
      </div>
      <div class="text-center">
        <h2 class="p-4 font-PerMarker text-[29px] text-rose-600 dark:text-white">Bonobo</h2>
        <img class="m-auto" src="../assets/image/bonobo.jpg" alt="Photo du groupe Bonobo" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 font-PerMarker text-[29px] text-rose-600 dark:text-white">Air</h2>
        <img class="m-auto" src="../assets/image/air.jpg" alt="Photo du groupe Air" />
      </div>
      <div class="text-center">
        <h2 class="p-4 font-PerMarker text-[29px] text-rose-600 dark:text-white">Nightmares on Wax</h2>
        <img class="m-auto" src="../assets/image/wax.jpg" alt="Photo du groupe Nightmares on Wax" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 font-PerMarker text-[29px] text-rose-600 dark:text-white">Enigma</h2>
        <img class="m-auto" src="../assets/image/enigma.jpg" alt="Photo du groupe Enigma" />
      </div>
      <div class="text-center">
        <h2 class="p-4 font-PerMarker text-[29px] text-rose-600 dark:text-white">Moby</h2>
        <img class="m-auto" src="../assets/image/moby.jpg" alt="Photo du groupe Moby" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 font-PerMarker text-[29px] text-rose-600 dark:text-white">Massive Attack</h2>
        <img class="m-auto" src="../assets/image/massive.jpg" alt="Photo du groupe Massive Attack" />
      </div>
      <div class="text-center">
        <h2 class="p-4 font-PerMarker text-[29px] text-rose-600 dark:text-white">Boards of Canada</h2>
        <img class="m-auto" src="../assets/image/boards.jpg" alt="Photo du groupe Boards of Canada" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 font-PerMarker text-[29px] text-rose-600 dark:text-white">Chicane Musicien</h2>
        <img class="m-auto" src="../assets/image/chicane.jpg" alt="Photo du groupe Chicane Musicien" />
      </div>
    </div>
  </main>
</template>
<script>
import TriD from "../components/icons/triangleD.vue";
import TriG from "../components/icons/triangleG.vue";
import card from "../components/card.vue";
import zero7 from "../assets/image/zero7.jpg";
export default {
  data: () => ({
    zero7,
  }),
  components: { TriD, TriG, card },
};
</script>
