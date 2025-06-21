import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import BiddingPage from '../components/BiddingPage.vue';
import BiddingDetail from '../components/BiddingDetail.vue';

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
  },
  {
    path: '/bidding/:id',
    name: 'BiddingDetail',
    component: BiddingDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 