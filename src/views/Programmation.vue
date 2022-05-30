<template>
  <main>
    <div>
      <TriD />
      <TriG />

      <p class="p-6 text-center text-[38px] text-rose-600">Programmation</p>
    </div>

    <p class="left-[19px] top-[1183px] m-4">Nous vous accueillons le 20 et 21 août 2022 de 19h à 01h sur les rives du Lac du Malsaucy.</p>
    <h2 class="p-6 text-[29px] text-rose-600">Les Artistes</h2>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      <div class="text-center">
        <h2 class="p-6 text-[29px] text-rose-600">Tournoi de Beach Volley</h2>
        <img class="m-auto" src="../assets/image/volley.jpg" alt="image tournoi de volley" />
        <p>Samedi 20 août de 20h à 00h ( Inscription ici )</p>
      </div>
      <div class="mb-4 text-center">
        <h2 class="p-6 text-[29px] text-rose-600">Tournoi de Pétanque</h2>
        <img class="m-auto" src="../assets/image/petanque.jpg" alt="image tournoi de volley" />
        <p>Dimanche 21 août de 20h à 00h ( Inscription ici )</p>
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
