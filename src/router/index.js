import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WatchView from '../views/WatchView.vue';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/watch/:id',
            name: 'watch',
            component: WatchView,
            props: true
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
    ]
});

export default router;
