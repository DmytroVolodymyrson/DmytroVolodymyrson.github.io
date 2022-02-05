<template>
  <the-header></the-header>
  <section class="section-1 section-padding">
    <div class="fixed">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
};
</script>
