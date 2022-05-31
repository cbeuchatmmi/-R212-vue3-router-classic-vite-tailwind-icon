<template>
  <main class="bg-yellow-50 dark:bg-black">
    <div>
      <TriD />
      <TriG />

      <h2 class="p-6 text-center font-PerMarker text-[38px] font-bold text-rose-600 dark:text-white lg:text-[64px]">Contact</h2>
    </div>
    <div class="mt-4 bg-yellow-300 text-center">
      <input class="m-4 border-2 bg-slate-100 pr-12 pt-2 pb-2" type="mail" placeholder="E-Mail" />
      <span class="sr-only">Champs où rentrer votre adresse mail</span>
      <br />
      <input class="bord m-4 bg-slate-100 pr-12 pt-2 pb-2" type="text" placeholder="Message" />
      <span class="sr-only">Champs où rentrer votre message</span>
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
