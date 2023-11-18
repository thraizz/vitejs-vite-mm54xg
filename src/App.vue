<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>Router view:</p>
    <RouterView />
    <ul>
      <li>
        <RouterLink to="/">Go to Home</RouterLink>
      </li>
      <li>
        <router-link to="/works">Go to Working Loader</router-link>
      </li>
      <li>
        <router-link to="/fails">Go to Failing Loader</router-link>
      </li>
    </ul>
  </div>
</template>
