<script>
export default {
  props: {
    nom: String,
    image: String,
    description: String,
  },
};
</script>
<template>
  <figure>
    <div class="mb-4 text-center">
      <h2 class="p-6 font-PerMarker text-[29px] text-rose-600 dark:text-white">{{ nom }}</h2>
      <img class="m-auto" :src="image" alt="image tournoi de pétanque" />
      <p class="dark:text-white lg:text-[28px]">{{ descritpion }}</p>
    </div>
  </figure>
</template>