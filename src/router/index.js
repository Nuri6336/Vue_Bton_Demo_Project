import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../views/UserLogin.vue'; 
import WorkSpaceUI from '@/views/WorkSpaceUI.vue';

const routes = [
  {
    path: '/',
    name: 'UserLogin',
    component: UserLogin
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;