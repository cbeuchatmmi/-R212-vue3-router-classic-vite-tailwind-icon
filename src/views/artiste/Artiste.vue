<template>
  <main class="bg-white dark:bg-black">
    <div>
      <TriD />
      <TriG />

      <h2 class="p-6 text-center font-PerMarker text-[38px] font-bold text-rose-600 dark:text-white lg:text-[64px]">Les Artistes</h2>
    </div>

    <h2 class="p-6 text-[29px] text-rose-600 dark:text-white">Les Artistes</h2>
    <div v-for="artiste in listeArtiste" :key="artiste.id">
      <div class="mb-10 text-center">
        <h2 class="p-4 font-PerMarker text-[29px] text-rose-600 dark:text-white">{{ artiste.nom }}</h2>
        <img class="m-auto" :src="artiste.photo" :alt="artiste.nom" />
      </div>
    </div>
  </main>
</template>

<script>
import TriD from "../../components/icons/triangleD.vue";
import TriG from "../../components/icons/triangleG.vue";

// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  addDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
  where,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default {
  name: "ListeView",
  data() {
    return {
      listeArtiste: [], // Liste des participants
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des participants
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbArtiste = collection(firestore, "artiste");
      // Liste des participants triés sur leur nom
      const q = query(dbArtiste, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtiste = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque participant
        // parcours de la liste
        this.listeArtiste.forEach(function (artiste) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "artiste/" + artiste.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              artiste.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },

    // Format date en français
    dateFr(d) {
      let date = d.split("-");
      return date[2] + "/" + date[1] + "/" + date[0];
    },
  },

  components: { TriD, TriG },
};
</script>