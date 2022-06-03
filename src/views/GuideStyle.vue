<template>
    <div>
        <TriangleD/> 
        <TriangleG/> 
        <h2 class="p-6 text-center font-PerMarker text-[38px] font-bold text-rose-600 dark:text-white lg:text-[64px]">Guide de style</h2>
    </div>
    <div class="m-8 ">
        <h3 class="font-PerMarker text-[18px] font-bold text-rose-600">Font</h3>
        <span class="font-PerMarker">Permanent Marker</span>
        <br>
        <span class="font-ASC">Amatic SC</span>
    </div>
    <div class="m-8">
        <h3 class="font-PerMarker text-[18px] font-bold text-rose-600">Couleur </h3>
        <span class="p-6 text-rose-600">text-rose-600</span>
        <span class="p-6 bg-amber-700">bg-amber-700</span>
        <span class="p-6 bg-amber-300">bg-amber-300</span>
        <span class="p-6 bg-slate-100">bg-slate-100</span>
        <span class="p-6 bg-yellow-50">bg-yellow-50</span>
    </div>
    <div class="m-8">
        <h3 class="font-PerMarker text-[18px] font-bold text-rose-600">Composants</h3>
        <IconFest/>
        <IconProg/>
        <IconArt/>
        <Insta/> 
        <Twitter/> 
        <Facebook/>
        <Prog/>
        <card nom="Zero 7" :image="zero7"/> 
        <tournoi nom="Tournoi de volley " :image="volley" description="Samedi 20 août de 20h à 00h ( Inscription ici )"/>
    </div>

</template>
<script>
import IconFest from "../components/icons/IconFest.vue";
import IconProg from "../components/icons/IconProg.vue";
import IconArt from "../components/icons/IconArt.vue";
import Insta from "../components/icons/IconInsta.vue";
import Twitter from "../components/icons/IconTwitter.vue";
import Facebook from "../components/icons/IconFacebook.vue";
import Prog from "../components/icons/IconProg.vue";
import TriangleD from "../components/icons/triangleD.vue";
import TriangleG from "../components/icons/triangleG.vue";
import card from "../components/card.vue";
import tournoi from "../components/tournoi.vue";
import volley from "../assets/image/volley.jpg";
import zero7 from "../assets/image/zero7.jpg";


export default {
    
  data: () => ({
    zero7,volley,
  }),

  components: { IconFest, IconProg, IconArt, Insta, Twitter,Facebook,Prog, TriangleD, TriangleG, card, tournoi, volley, },
};

</script>