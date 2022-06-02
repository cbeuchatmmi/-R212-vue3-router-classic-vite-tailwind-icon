<template>
  <div>
    <form enctype="multipart/form-data" @submit.prevent="createArtiste">
      <div class="card bg-dark">
        <h2 class="p-6 text-center font-PerMarker text-[38px] font-bold text-rose-600 dark:text-white lg:text-[64px]">
          Suppression d'un participant
        </h2>

        <div>
          <div>
            <div>
              <img class="preview img-fluid" :src="imageData" />
            </div>

            <div>
              <div class="text-center">
                <div>
                  <span class="p-6 text-[29px] font-extrabold text-black dark:text-white">Nom</span>
                </div>
                <input
                  class="form-control border-2 bg-slate-100 pr-12 pt-2 pb-2"
                  placeholder="Nom de la personne"
                  v-model="artiste.image"
                  required
                />
              </div>
              <br />
              <div class="text-center">
                <div class="input-group-prepend">
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

        <div class="card-footer">
          <button type="submit" class="p-8 font-bold text-red-600">Créer</button>
          <button class="float-right p-8 font-bold text-black">
            <router-link to="/artiste">Cancel</router-link>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateView",
  data() {
    return {
      imageData: null, // Image prévisualisée
      artiste: {
        // Le artiste à créer
        nom: null, // son nom
      },
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des pays
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtiste = collection(firestore, "artiste");
      // Liste des participants triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom du pays par ordre croissant (asc)
      const q = query(dbArtiste, orderBy("nom", "asc"));
      // Récupération de la liste des pays à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeArtiste = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("artiste", this.listeArtiste);
      });
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.artiste.image = this.file.name;
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

    async createArtiste() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "artiste/" + this.artiste.image);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");

        // Création du participant sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "artiste"), this.artiste);
      });
      // redirection sur la liste des participants
      this.$router.push("/artiste");
    },
  },
};
</script>




