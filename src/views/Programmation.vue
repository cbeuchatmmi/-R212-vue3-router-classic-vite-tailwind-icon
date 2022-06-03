<template>
  <main class="bg-yellow-50 dark:bg-black">
    <div>
      <TriD />
      <TriG />

      <h2 class="p-6 text-center font-PerMarker text-[38px] font-bold text-rose-600 dark:text-white lg:text-[64px]">Programmation</h2>
    </div>

    <p class="m-8 dark:text-white lg:text-[28px]">
      Nous vous accueillons le 20 et 21 août 2022 de 19h à 01h sur les rives du Lac du Malsaucy.
    </p>
    <h2 class="p-6 font-PerMarker text-[29px] text-rose-600 dark:text-white">Les Artistes</h2>
    <div class="text-center">
      <div>
        <span class="p-6 text-[29px] font-extrabold text-black dark:text-white">Horaires</span>
      </div>
      <input type="text" v-model="date" class="bg-slate-100 pt-5 pb-5" placeholder="Date" required />
      <br />
      <input type="text" v-model="nom" class="bg-slate-100 pt-5 pb-5" placeholder="Nom de l'artiste" required />
      <br />
      <button class="bg-red-600 p-5" type="button" @click="createHoraires()" title="Création">
        <i class="text-white">Save</i>
      </button>
    </div>
    <table class="m-auto w-[70%] table-auto bg-yellow-200 text-xl">
      <thead>
        <tr>
          <th>Horaires</th>
          <th>Artiste</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="horaires in listeHoraires" :key="horaires.id">
          <td><input class="bg-yellow-300" type="text" v-model="horaires.date" /></td>
          <td><input class="bg-yellow-300" type="text" v-model="horaires.nom" /></td>
          <td>
            <button class="bg-yellow-500" @click.prevent="updateHoraires(horaires)">
              <i class="text-[16px] text-black">Modifier</i>
            </button>
            <button class="bg-yellow-500" @click.prevent="deleteHoraires(horaires)">
              <i class="text-[16px] text-black">Supprimer</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] dark:text-white">
      <div class="mb-4 text-center">
        <h2 class="p-6 font-PerMarker text-[29px] text-rose-600 dark:text-white">Tournoi de Beach Volley</h2>
        <img class="m-auto" src="../assets/image/volley.jpg" alt="image du tournoi" />
        <p class="dark:text-white lg:text-[28px]">Samedi 20 août de 20h à 00h ( Inscription ici )</p>
      </div>
      <div class="mb-4 text-center">
        <h2 class="p-6 font-PerMarker text-[29px] text-rose-600 dark:text-white">Tournoi de Pétanque</h2>
        <img class="m-auto" src="../assets/image/petanque.jpg" alt="image du tournoi" />
        <p class="dark:text-white lg:text-[28px]">Dimanche 21 août de 20h à 00h ( Inscription ici )</p>
      </div>
    </div>
  </main>
</template>
<script>
import TriD from "../components/icons/triangleD.vue";
import TriG from "../components/icons/triangleG.vue";
import tournoi from "../components/tournoi.vue";

// Bibliothèques Firebase  : import des fonctions
//  signInWithEmailAndPassword : Authentification avec email et mot de passe
//  getAuth : Fonction générale d'authentification
//  signOut : Se deconnecter
//  onAuthStateChanged : connaitre le statut de l'utilisateur (connecté ou non)
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

export default {
  data() {
    // Données de la vue
    return {
      listeHoraires: [], // Liste des pays - collection pays Firebase
      nom: null, // Pour la création d'un nouveau pays
      date: null, // Pour la création d'un nouveau pays
      listeHorairesSynchro: [], // Liste des pays synchronisée - collection pays de Firebase
    };
  },
  mounted() {
    // Appel de la liste des pays
    this.getHoraires();

    // Appel de la liste des pays synchronisée
    this.getHorairesSynchro();
  },

  methods: {
    // Async permet de qualifier cette fonction d'asynchrone
    // et oblige à l'attente de résultats de await
    async getHoraires() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbHoraires = collection(firestore, "horaires");
      // Obtenir tous les documents de la collection pays
      // await pour attendre l'obtention des résultats
      const query = await getDocs(dbHoraires);
      query.forEach((doc) => {
        let horaires = {
          id: doc.id,
          nom: doc.data().nom,
          date: doc.data().date,
        };
        this.listeHoraires.push(horaires);
      });
    },

    async getHorairesSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbHoraires = collection(firestore, "horaires");
      // Liste des pays synchronisée
      const q = query(dbHoraires, orderBy("date", "asc"));
      const query = await onSnapshot(dbHoraires, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeHorairesSynchro = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },

    async createHoraires() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbHoraires = collection(firestore, "horaires");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbHoraires, {
        nom: this.nom,
        date: this.date,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updateHoraires(horaires) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à modifier
      const docRef = doc(firestore, "horaires", horaires.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        nom: horaires.nom,
        date: horaires.date,
      });
    },

    async deleteHoraires(horaires) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à supprimer
      const docRef = doc(firestore, "horaires", horaires.id);
      // Suppression du pays référencé
      await deleteDoc(docRef);
    },
  },
  components: { TriD, TriG, tournoi },
};
</script>

 
