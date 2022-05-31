<template>
  <main class="bg-yellow-50 dark:bg-black">
    <div>
      <TriD />
      <TriG />

      <p class="p-6 text-center text-[38px] text-rose-600 dark:text-white">Programmation</p>
    </div>

    <p class="m-8 dark:text-white">Nous vous accueillons le 20 et 21 août 2022 de 19h à 01h sur les rives du Lac du Malsaucy.</p>
    <h2 class="p-6 text-[29px] text-rose-600 dark:text-white">Les Artistes</h2>

    <table class="m-auto w-[70%] table-auto bg-yellow-200 text-xl">
      <thead>
        <tr>
          <th>Horaires</th>
          <th>Artiste</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>19h00</td>
          <td>Zero 7</td>
        </tr>
        <tr>
          <td>19h30</td>
          <td>Groove Armada</td>
        </tr>
        <tr>
          <td>20h00</td>
          <td>Thievery Corporation</td>
        </tr>
        <tr>
          <td>20h30</td>
          <td>Röyksopp</td>
        </tr>
        <tr>
          <td>21h00</td>
          <td>Bonobo</td>
        </tr>
        <tr>
          <td>21h30</td>
          <td>Air</td>
        </tr>
        <tr>
          <td>22h00</td>
          <td>Nightmares on Wax</td>
        </tr>
        <tr>
          <td>22h30</td>
          <td>Enigma</td>
        </tr>
        <tr>
          <td>23h00</td>
          <td>Moby</td>
        </tr>
        <tr>
          <td>23h30</td>
          <td>Massive Attack</td>
        </tr>
        <tr>
          <td>00h00</td>
          <td>Boards of Canada</td>
        </tr>
        <tr>
          <td>00h30</td>
          <td>Chicane Musicien</td>
        </tr>
      </tbody>
    </table>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] dark:text-white">
      <div class="text-center">
        <h2 class="p-6 text-[29px] text-rose-600 dark:text-white">Tournoi de Beach Volley</h2>
        <img class="m-auto" src="../assets/image/volley.jpg" alt="image tournoi de volley" />
        <p>Samedi 20 août de 20h à 00h ( Inscription ici )</p>
      </div>
      <div class="mb-4 text-center">
        <h2 class="p-6 text-[29px] text-rose-600 dark:text-white">Tournoi de Pétanque</h2>
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
