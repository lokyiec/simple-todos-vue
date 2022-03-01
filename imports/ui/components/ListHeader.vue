<template>
  <header class="text-center">
    <h1
        class="mt-2 mb-3 md:mt-20 md:mb-4 uppercase text-center text-4xl md:text-5xl md:transform md:scale-105 font-bold"
    >
      {{ title }}
    </h1>
    <p class="text-xl font-semibold mb-8">You have {{ subtitle }} tasks.</p>
  </header>
</template>

<script>
export default {
  props: ["title", "subtitle"],
};
</script>
