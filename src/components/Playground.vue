<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { http } from '../services/axios.service';
import { TodoViewModel } from '../models/app.models';

const state = reactive({
  todos: [] as TodoViewModel[],
});

onMounted(async () => {
  const dataFromServer = (await http.get<TodoViewModel[]>('todos')).data;
  state.todos = dataFromServer;
});
</script>
<template>
  <table class="table table-sm table-striped table-bordered">
    <thead>
      <tr>
        <th>Id</th>
        <th>User Id</th>
        <th>Title</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in state.todos" :key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.userId }}</td>
        <td>{{ todo.title }}</td>
        <td>{{ todo.completed ? 'Completed' : 'Pending' }}</td>
      </tr>
    </tbody>
  </table>
</template>
