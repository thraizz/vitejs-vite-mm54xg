<script setup lang="ts">
import { useGetExperiments } from "../api/experiments/experiments";
const { data, isPending, isError, error } = useGetExperiments();
</script>
<template>
  <h2>This does not work</h2>
  <div v-if="isPending">Loading...</div>
  <div v-else-if="isError">An error has occurred: {{ error }}</div>
  <div v-else-if="data">
    <p>Received {{ data }} items.</p>
  </div>
</template>
