<template>
  <div class="astro-page">
    <h2 class="astro-page__title title">
      {{ selectedAstro.firstName }} {{ selectedAstro.lastName }}
    </h2>
    <div class="astro-page__descr descr">
      <p>Date of birth: {{ selectedAstro.birthDate }}</p>
      <p>Superpower: {{ selectedAstro.superpower }}</p>
      <p>Description:</p>
      <p>{{ selectedAstro.descr }}</p>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  props: ['id'],
  setup(props) {
    const store = useStore();
    const selectedAstro = store.getters.getAstros.find(
      astro => astro.id === props.id
    );
    return {
      selectedAstro
    };
  }
};
</script>
