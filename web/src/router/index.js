import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import BiddingPage from '../components/BiddingPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/bidding',
    name: 'Bidding',
    component: BiddingPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 