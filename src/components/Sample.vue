<script setup lang="ts">
import { store } from '../state-management/store';
const changeFirstName = () => {
  store.dispatch('updateFirstName', 'Harish');
};
</script>

<template>
  <h4>Sample {{ $store.state.person.firstName }}</h4>
  <button class="btn btn-primary" @click="changeFirstName">
    Change First Name
  </button>
</template>
