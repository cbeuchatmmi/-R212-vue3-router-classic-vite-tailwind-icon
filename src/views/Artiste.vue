<template>
  <main>
    <div>
      <TriD />
      <TriG />

      <p class="p-6 text-center text-[38px] text-rose-600">Les Artistes</p>
    </div>

    <h2 class="p-6 text-[29px] text-rose-600">Les Artistes</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600">Zero 7</h2>
        <img class="m-auto" src="../assets/image/zero7.jpg" alt="image tournoi de volley" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600">Groove Armada</h2>
        <img class="m-auto" src="../assets/image/groove.jpg" alt="image tournoi de volley" />
      </div>
      <div class="text-center">
        <h2 class="p-4 text-[29px] text-rose-600">Thievery Corporation</h2>
        <img class="m-auto" src="../assets/image/thievery.jpg" alt="image tournoi de volley" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600">Röyksopp</h2>
        <img class="m-auto" src="../assets/image/röyksopp.jpg" alt="image tournoi de volley" />
      </div>
      <div class="text-center">
        <h2 class="p-4 text-[29px] text-rose-600">Bonobo</h2>
        <img class="m-auto" src="../assets/image/bonobo.jpg" alt="image tournoi de volley" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600">Air</h2>
        <img class="m-auto" src="../assets/image/air.jpg" alt="image tournoi de volley" />
      </div>
      <div class="text-center">
        <h2 class="p-4 text-[29px] text-rose-600">Nightmares on Wax</h2>
        <img class="m-auto" src="../assets/image/wax.jpg" alt="image tournoi de volley" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600">Enigma</h2>
        <img class="m-auto" src="../assets/image/enigma.jpg" alt="image tournoi de volley" />
      </div>
      <div class="text-center">
        <h2 class="p-4 text-[29px] text-rose-600">Moby</h2>
        <img class="m-auto" src="../assets/image/moby.jpg" alt="image tournoi de volley" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600">Massive Attack</h2>
        <img class="m-auto" src="../assets/image/massive.jpg" alt="image tournoi de volley" />
      </div>
      <div class="text-center">
        <h2 class="p-4 text-[29px] text-rose-600">Boards of Canada</h2>
        <img class="m-auto" src="../assets/image/boards.jpg" alt="image tournoi de volley" />
      </div>
      <div class="mb-10 text-center">
        <h2 class="p-4 text-[29px] text-rose-600">Chicane Musicien</h2>
        <img class="m-auto" src="../assets/image/chicane.jpg" alt="image tournoi de volley" />
      </div>
    </div>
  </main>
</template>
<script>
import TriD from "../components/icons/triangleD.vue";
import TriG from "../components/icons/triangleG.vue";
export default {
  components: { TriD, TriG },
};
</script>
