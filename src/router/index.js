import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import Artiste from '../views/Artiste.vue'
import Contact from '../views/Contact.vue'
import Festival from '../views/Festival.vue'
import Programmation from '../views/Programmation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/artiste', name: 'Artiste', component: Artiste },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/festival', name: 'Festival', component: Festival },
    { path: '/programmation', name: 'Programmation', component: Programmation },
    // ici les autre routes
  ]
})

export default router
