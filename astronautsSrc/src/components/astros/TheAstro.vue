<template>
  <li class="astro">
    <div class="astro__title title">{{ firstName }} {{ lastName }}</div>
    <div class="astro__btns btns-list">
      <router-link class="btn" :to="astroDetailLink">See more</router-link>
      <button class="btn btn_red" @click="deleteAstro()">Delete</button>
    </div>
  </li>
</template>
<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
  props: ['firstName', 'lastName', 'birthDate', 'superpower', 'id'],
  setup(props, context) {
    const route = useRoute();
    function deleteAstro() {
      context.emit('deleteAstro', props.id);
    }

    const astroDetailLink = computed(() => {
      return route.path + '/' + props.id;
    });
    return {
      deleteAstro,
      astroDetailLink
    };
  }
};
</script>
