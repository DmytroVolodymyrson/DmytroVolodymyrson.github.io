<template>
  <section class="new-astro">
    <h2 class="nt__title title">Create New Astro</h2>
    <astro-form @save-data="saveData"></astro-form>
  </section>
</template>

<script>
import AstroForm from '../components/astros/AstroForm.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  components: {
    AstroForm
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    function saveData(data) {
      store.dispatch('registerAstro', data);
      router.replace('/astros');
    }
    return {
      saveData
    };
  }
};
</script>
