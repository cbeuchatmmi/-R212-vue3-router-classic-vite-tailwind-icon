<template>
  <div>
    <TriD />
    <TriG />

    <p class="p-6 text-center text-[38px] text-rose-600">Contact</p>
  </div>
  <div class="mt-4 mb-4 bg-yellow-300 text-center">
    <input class="m-4 border-2 bg-slate-100 pr-12 pt-2 pb-2" type="text" placeholder="E-Mail" />
    <br />
    <input class="bord m-4 bg-slate-100 pr-12 pt-2 pb-2" type="text" placeholder="Message" />
  </div>
</template>
<script>
import TriD from "../components/icons/triangleD.vue";
import TriG from "../components/icons/triangleG.vue";
export default {
  components: { TriD, TriG },
};
</script>
