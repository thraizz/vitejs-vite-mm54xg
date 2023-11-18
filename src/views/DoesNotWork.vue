<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';

const fetcher = async (): Promise<[]> =>
  await fetch('https://jsonplaceholder.typicode.com/posts2').then((response) =>
    response.json()
  );
const { isPending, isError, data, error } = useQuery({
  queryKey: ['posts2'],
  queryFn: fetcher,
});
</script>
<template>
  <h2>This does not work</h2>
  <div v-if="isPending">Loading...</div>
  <div v-else-if="isError">An error has occurred: {{ error }}</div>
  <div v-else-if="data">
    <p>Received {{ data.length }} items.</p>
  </div>
</template>
