import { createApp } from 'vue';
import App from './App.vue';
import Works from './views/Works.vue';
import Home from './views/Home.vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createRouter, createWebHistory } from 'vue-router';
async function enableMocking() {
  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

const routes = [
  { path: '/', component: Home },
  { path: '/works', component: Works },
  { path: '/fails', component: () => import('./views/DoesNotWork.vue') },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
enableMocking().then(() => {
  createApp(App).use(VueQueryPlugin).use(router).mount('#app');
});
