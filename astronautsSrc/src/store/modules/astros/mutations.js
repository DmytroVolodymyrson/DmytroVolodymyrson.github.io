export default {
  registerAstro(state, payload) {
    state.astros.unshift(payload);
  },
  setAstros(state, payload) {
    state.astros = payload;
  },

  deleteAstro(state, id) {
    const index = state.astros.findIndex(astro => astro.id === id);
    state.astros.slice(index, 1);
  }
};
