import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ReceitasView from '../views/ReceitasView.vue';
import DespesasView from '../views/DespesasView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  { path: '/', component: LoginView },
  { path: '/home', component: HomeView },
  { path: '/receitas', component: ReceitasView },
  { path: '/despesas', component: DespesasView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
