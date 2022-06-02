<template>
  <div>
    <form enctype="multipart/form-data" @submit.prevent="updateArtiste">
      <div class="card bg-dark">
        <div class="card-header">
          <h2 class="p-6 text-center font-PerMarker text-[38px] font-bold text-rose-600 dark:text-white lg:text-[64px]">
            Modifier un participant
          </h2>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div class="text-center">
                <img class="preview img-fluid" :src="imageData" />
              </div>
            </div>

            <div>
              <div class="text-center">
                <div class="input-group-prepend">
                  <span class="p-6 text-[29px] font-extrabold text-black dark:text-white">Nom</span>
                </div>
                <input
                  class="form-control border-2 bg-slate-100 pr-12 pt-2 pb-2"
                  placeholder="Nom de la personne"
                  v-model="artiste.nom"
                  required
                />
              </div>
              <br />
              <div class="text-center">
                <div>
                  <span class="p-6 text-[29px] font-extrabold text-black dark:text-white">Photo</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
                  <label class="custom-file-label" for="file">Sélectionner l'image</label>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>

        <div>
          <button type="submit" class="p-8 font-bold text-red-600">Modifier</button>
          <button class="float-right p-8 font-bold text-black">
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
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Storage
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "UpdateView",
  data() {
    return {
      imageData: null, // Image prévisualisée

      artiste: {
        // Le participant à créer
        nom: null, // son nom
        image: null, // sa photo (nom du fichier)
      },

      refArtiste: null, // Référence du participant à modifier
      imgModifiee: false, // Indique si l'image du participant a été modifiée, par défaut : non
      photoActuelle: null, // Photo actuelle du participant
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
    // Appel de la liste des pays
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
        this.photoActuelle = this.artiste.image;
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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.artiste.image = this.file.name;
      // Si cette fonction s'exécute, c'est que l'image est modifiée
      this.imgModifiee = true;
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async updateArtiste() {
      // Si l'image a été modifiée
      if (this.imgModifiee) {
        // On supprime l'ancienne
        const storage = getStorage();
        // Référence du fichier
        let docRef = ref(storage, "artiste/" + this.photoActuelle);
        // Suppression photo actuelle
        deleteObject(docRef);
        // création nouvelle photo
        // Référence de l'image à uploader
        docRef = ref(storage, "artiste/" + this.artiste.image);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.artiste.image);
        });
      }
      // Dans tous les cas on met à jour le participant dans Firestore
      const firestore = getFirestore();
      // Modification du participant à partir de son id
      await updateDoc(doc(firestore, "artiste", this.$route.params.id), this.artiste);
      // redirection sur la liste des participants
      this.$router.push("/artiste");
    },
  },
};
</script>




