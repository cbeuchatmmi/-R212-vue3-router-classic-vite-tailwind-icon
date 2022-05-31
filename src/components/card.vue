<script>
export default {
  props: {
    nom: String,
    image: String,
  },
};
</script>
<template>
  <figure>
    <div class="mb-10 text-center">
      <h2 class="p-4 text-[29px] text-rose-600 dark:text-white">{{ nom }}</h2>
      <img class="m-auto" :src="image" alt="Photo du groupe" />
    </div>
  </figure>
</template>
