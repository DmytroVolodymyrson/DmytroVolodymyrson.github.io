<template>
  <form action="#" class="astro-form" @submit.prevent="emmitSubmit">
    <input
      type="text"
      class="input"
      placeholder="First Name"
      v-model="firstName"
    />
    <input
      type="text"
      class="input"
      placeholder="Last Name"
      v-model="lastName"
    />
    <input
      type="date"
      class="input"
      placeholder="Date of birth"
      v-model="birthDate"
    />
    <input
      type="text"
      class="input"
      placeholder="Superpower"
      v-model="superpower"
    />
    <textarea
      cols="1"
      rows="5"
      class="input"
      placeholder="Description"
      v-model="descr"
    ></textarea>

    <button class="btn">Submit</button>
  </form>
</template>
<script>
import { ref } from 'vue';
export default {
  emits: ['save-data'],
  setup(_, context) {
    const firstName = ref(''),
      descr = ref(''),
      lastName = ref(''),
      birthDate = ref(''),
      superpower = ref('');

    function emmitSubmit() {
      const data = {
        firstName: firstName.value,
        descr: descr.value,
        lastName: lastName.value,
        superpower: superpower.value,
        birthDate: birthDate.value
      };
      context.emit('save-data', data);
    }
    return {
      firstName,
      descr,
      emmitSubmit,
      lastName,
      birthDate,
      superpower
    };
  }
};
</script>
