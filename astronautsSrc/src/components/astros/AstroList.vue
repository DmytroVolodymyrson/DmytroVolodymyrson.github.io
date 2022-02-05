<template>
  <div class="astro-list__btns btns-list ">
    <button class="btn" @click="loadAstros()">Reload</button>
    <router-link class="btn" to="/new-astro">Create new astro</router-link>
  </div>
  <ul class="astro-list">
    <the-astro
      v-for="astro in astros.list"
      :key="astro.id"
      class="astro"
      :firstName="astro.firstName"
      :lastName="astro.lastName"
      :birthDate="astro.birthDate"
      :id="astro.id"
      @deleteAstro="deleteAstro"
    ></the-astro>
  </ul>
</template>

<script>
import TheAstro from '../astros/TheAstro.vue';
import { reactive } from 'vue';
import { useStore } from 'vuex';
export default {
  components: {
    TheAstro
  },
  setup() {
    const store = useStore();
    let astros = reactive({
      list: []
    });
    loadAstros();

    astros.list = store.getters.getAstros;

    function deleteAstro(id) {
      astros.list = astros.list.filter(astro => astro.id != id);
      store.dispatch('deleteAstro', id);
    }

    async function loadAstros() {
      await store.dispatch('loadAstros');
      astros.list = store.getters.getAstros;
    }

    return {
      astros,
      deleteAstro,
      store,
      loadAstros
    };
  },

  beforeUnmount() {
    this.store.dispatch('setAstros', this.astros.list);
  }
};
</script>
