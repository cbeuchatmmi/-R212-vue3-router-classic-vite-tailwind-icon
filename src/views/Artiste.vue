<template>
  <main class="bg-white dark:bg-black">
    <div>
      <TriD />
      <TriG />

      <p class="p-6 text-center text-[38px] text-rose-600 dark:text-white">Les Artistes</p>
    </div>

    <h2 class="p-6 text-[29px] text-rose-600 dark:text-white">Les Artistes</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <card nom="Zero 7" :image="zero7" />

      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600 dark:text-white">Groove Armada</h2>
        <img class="m-auto" src="../assets/image/groove.jpg" alt="image tournoi de volley" />
      </div>
      <div class="text-center">
        <h2 class="p-4 text-[29px] text-rose-600 dark:text-white">Thievery Corporation</h2>
        <img class="m-auto" src="../assets/image/thievery.jpg" alt="image tournoi de volley" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600 dark:text-white">Röyksopp</h2>
        <img class="m-auto" src="../assets/image/röyksopp.jpg" alt="image tournoi de volley" />
      </div>
      <div class="text-center">
        <h2 class="p-4 text-[29px] text-rose-600 dark:text-white">Bonobo</h2>
        <img class="m-auto" src="../assets/image/bonobo.jpg" alt="image tournoi de volley" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600 dark:text-white">Air</h2>
        <img class="m-auto" src="../assets/image/air.jpg" alt="image tournoi de volley" />
      </div>
      <div class="text-center">
        <h2 class="p-4 text-[29px] text-rose-600 dark:text-white">Nightmares on Wax</h2>
        <img class="m-auto" src="../assets/image/wax.jpg" alt="image tournoi de volley" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600 dark:text-white">Enigma</h2>
        <img class="m-auto" src="../assets/image/enigma.jpg" alt="image tournoi de volley" />
      </div>
      <div class="text-center">
        <h2 class="p-4 text-[29px] text-rose-600 dark:text-white">Moby</h2>
        <img class="m-auto" src="../assets/image/moby.jpg" alt="image tournoi de volley" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600 dark:text-white">Massive Attack</h2>
        <img class="m-auto" src="../assets/image/massive.jpg" alt="image tournoi de volley" />
      </div>
      <div class="text-center">
        <h2 class="p-4 text-[29px] text-rose-600 dark:text-white">Boards of Canada</h2>
        <img class="m-auto" src="../assets/image/boards.jpg" alt="image tournoi de volley" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600 dark:text-white">Chicane Musicien</h2>
        <img class="m-auto" src="../assets/image/chicane.jpg" alt="image tournoi de volley" />
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
