<template>
  <div>
    <form enctype="multipart/form-data" @submit.prevent="deleteArtiste">
      <div>
        <div>
          <h2 class="p-6 text-center font-PerMarker text-[38px] font-bold text-rose-600 dark:text-white lg:text-[64px]">
            Suppression d'un participant
          </h2>
        </div>

        <div>
          <div>
            <div>
              <div>
                <img class="preview img-fluid" :src="imageArtiste" />
              </div>
            </div>

            <div>
              <div class="text-center">
                <div>
                  <span class="p-6 text-[29px] font-extrabold text-black dark:text-white">Nom</span>
                </div>
                <input
                  class="form-control border-2 bg-slate-100 pr-12 pt-2 pb-2"
                  placeholder="Nom de l'Artiste"
                  v-model="artiste.nom"
                  disabled
                />
              </div>
              <br />
            </div>
          </div>
          <br />
          <div class="m-full bg-red-600">
            <h5 class="p-2 text-center text-[29px] font-bold text-white" role="alert">
              Attention vous allez supprimer ce artiste, cette action est irréversible !!
            </h5>
          </div>
        </div>

        <div class="fle flex">
          <button type="submit" class="p-8 font-bold text-red-600">Supprimer</button>
          <button class="p-8 font-bold text-black">
            <RouterLink to="/artiste">Cancel</RouterLink>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Storage
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "deleteView",
  data() {
    return {
      artiste: {
        // Le participant à créer
        nom: null, // son nom
        image: null, // sa photo (nom du fichier)
      },

      refartiste: null, // Référence du participant à modifier
      imageArtiste: null, // Photo actuelle du participant
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id artiste", this.$route.params.id);
    // Recherche participant concerné
    this.getArtiste(this.$route.params.id);
  },

  methods: {
    async getArtiste(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      // Récupération sur Firestore du participant via son id
      const docRef = doc(firestore, "artiste", id);
      // Référence du participant concerné
      this.refArtiste = await getDoc(docRef);
      // Test si le participant demandé existe
      if (this.refArtiste.exists()) {
        // Si oui on récupère ses données
        this.artiste = this.refArtiste.data();
        // Mémorisation photoActuelle
        this.imageArtiste = this.artiste.image;
      } else {
        // Sinon simple message d'erreur
        this.console.log("Artiste inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du participant
      const spaceRef = ref(storage, "artiste/" + this.artiste.image);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.imageArtiste = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteArtiste() {
      const firestore = getFirestore();
      // Suppresion du participant
      await deleteDoc(doc(firestore, "artiste", this.$route.params.id));

      // Suppresson de l'image
      const storage = getStorage();
      // Référence du fichier de la photo
      let docRef = ref(storage, "artiste/" + this.artiste.image);
      // Suppression du fichier
      deleteObject(docRef);

      // redirection sur la liste des participants
      this.$router.push("/artiste");
    },
  },
};
</script>

