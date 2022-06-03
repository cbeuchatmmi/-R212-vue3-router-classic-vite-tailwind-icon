import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import Artiste from '../views/artiste/Artiste.vue'
import Contact from '../views/Contact.vue'
import Festival from '../views/Festival.vue'
import Programmation from '../views/Programmation.vue'
import Mentions from '../views/Mentions.vue'
import DeleteArtiste from '../views/artiste/DeleteView.vue'
import CreateArtiste from '../views/artiste/CreateView.vue'
import UpdateArtiste from '../views/artiste/UpdateView.vue'
import Page404 from '../views/Page404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/artiste', name: 'Artiste', component: Artiste },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/festival', name: 'Festival', component: Festival },
    { path: '/programmation', name: 'Programmation', component: Programmation },
    { path: '/mentions', name: 'Mentions', component: Mentions },
    { path: '/deleteArtiste/:id', name: 'DeleteArtiste', component: DeleteArtiste },
    { path: '/createArtiste/', name: 'CreateArtiste', component: CreateArtiste },
    { path: '/updateArtiste/:id', name: 'UpdateArtiste', component: UpdateArtiste },
    { path: '/:pathMatch(.*)*', name: 'Page404', component: Page404 },
    // ici les autre routes
  ]
})






export default router
