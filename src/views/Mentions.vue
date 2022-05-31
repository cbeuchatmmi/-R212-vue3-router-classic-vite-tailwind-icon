<template>
  <main class="bg-yellow-50 dark:bg-black">
    <div>
      <TriD />
      <TriG />

      <p class="p-6 text-center text-[38px] text-rose-600 dark:text-white">Mentions Légales</p>
    </div>
    <div class="ml-8 mr-8 mt-8 text-left text-[23px] text-black dark:text-white">
      <p class="m-2">
        Dénomination ou raison sociale : Université de Franche Comté Nom du responsable de la rédaction pour les sites publiant des contenus
        éditoriaux : Corentin BEUCHAT Coordonnées téléphoniques : 03 81 66 66 66
      </p>
      <p class="m-2">
        Nom du directeur : Corentin BEUCHAT Adresse du siège social : 10 avenue Jean Jaurès, 90000, Belfort Nom du codirecteur de la
        publication : Corentin BEUCHAT
      </p>
      <p class="m-2">
        Renseignements concernant l’hébergeur du site (nom, dénomination ou raison sociale, adresse et numéro de téléphone) : Infomaniak,
        dénomination sociale : INFOMANIAK NETWORK SA, Rue Eugène-Marziano 25, 1227 Les Acacias, Suisse, téléphone : +41 22 820 35 44
      </p>
      <p class="m-2">
        Éditeur du site Le site est édité et suivi par l’Université de Franche-Comté dans un but pédagogique. Tel : 03 81 66 66 66 Adresse :
        10 avenue Jean Jaurès, 90000, Belfort
      </p>
      <p class="m-2">
        Directeur de publication Le directeur de publication est Corentin BEUCHAT. Mail : corentin.beuchat@edu.univ-fcomte.fr
      </p>
      <p class="m-2">
        class="m-2"Co-directeur de publication Le codirecteur de publication est Corentin BEUCHAT. Mail :
        corentin.beuchat@edu.univ-fcomte.fr
      </p>
      <p class="m-2">
        Responsable de rédaction Le responsable de rédaction est Corentin BEUCHAT. Mail : corentin.beuchat@edu.univ-fomcte.fr
      </p>
      <p class="ml-2 mt-2 mr-2">
        Hébergeur Le site est hébergé par INFOMANIAK NETWORK SA Adresse :Rue Eugène-Marziano 25, 1227 Les Acacias, Suisse tel : +41 22 820
        35 44
      </p>
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