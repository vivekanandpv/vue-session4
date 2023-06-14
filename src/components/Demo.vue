<script setup lang="ts">
import { ref } from 'vue';
import { http } from '../services/axios.service';

const getStatus = ref('Not started');
const postStatus = ref('Not started');
const putStatus = ref('Not started');
const patchStatus = ref('Not started');
const deleteStatus = ref('Not started');

const getHandler = () => {
  getStatus.value = 'Pending...';
  http
    .get('todos')
    .then((_) => (getStatus.value = 'OK'))
    .catch((_) => (getStatus.value = 'Failed'));
};

const postHandler = () => {
  postStatus.value = 'Pending...';
  http
    .post('todos', { message: 'Hello' })
    .then((_) => (postStatus.value = 'OK'))
    .catch((_) => (postStatus.value = 'Failed'));
};

const putHandler = () => {
  putStatus.value = 'Pending...';
  http
    .put('todos/3', { message: 'Hello' })
    .then((_) => (putStatus.value = 'OK'))
    .catch((_) => (putStatus.value = 'Failed'));
};

const patchHandler = () => {
  patchStatus.value = 'Pending...';
  http
    .patch('todos/3', { message: 'Hello' })
    .then((_) => (patchStatus.value = 'OK'))
    .catch((_) => (patchStatus.value = 'Failed'));
};

const deleteHandler = () => {
  deleteStatus.value = 'Pending...';
  http
    .delete('todos/3')
    .then((_) => (deleteStatus.value = 'OK'))
    .catch((_) => (deleteStatus.value = 'Failed'));
};
</script>
<template>
  <h2>HTTP Demo</h2>
  <div class="my-3">
    <button class="btn btn-primary me-3" @click="getHandler">GET</button>
    <span>{{ getStatus }}</span>
  </div>
  <div class="my-3">
    <button class="btn btn-warning me-3" @click="postHandler">POST</button>
    <span>{{ postStatus }}</span>
  </div>
  <div class="my-3">
    <button class="btn btn-info me-3" @click="putHandler">PUT</button>
    <span>{{ putStatus }}</span>
  </div>
  <div class="my-3">
    <button class="btn btn-secondary me-3" @click="patchHandler">PATCH</button>
    <span>{{ patchStatus }}</span>
  </div>
  <div class="my-3">
    <button class="btn btn-danger me-3" @click="deleteHandler">DELETE</button>
    <span>{{ deleteStatus }}</span>
  </div>
</template>
