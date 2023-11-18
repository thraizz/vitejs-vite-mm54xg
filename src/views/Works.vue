<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
const fetcher = async (): Promise<Post[]> =>
  await fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json()
  );
const { isPending, isError, isFetching, data, error, refetch } = useQuery({
  queryKey: ['posts'],
  queryFn: fetcher,
});
</script>
<template>
  <h2>Should work</h2>
  <div v-if="isPending">Loading...</div>
  <div v-else-if="isError">An error has occurred: {{ error }}</div>
  <div v-else-if="data">
    <p>Received {{ data.length }} items.</p>
  </div>
</template>
