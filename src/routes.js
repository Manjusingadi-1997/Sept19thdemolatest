import { createWebHistory, createRouter } from 'vue-router'
import HomeRouting from './components/HomeRouting.vue';
import LoginRouting from './components/LoginRouting.vue';
import ProfileRouting from './components/ProfileRouting.vue';

const routes = [
    {
        name: 'HomeRouting',
        path: '/',
        component: HomeRouting
    },
    {
        name: 'LoginRouting',
        path: '/login',
        component: LoginRouting
    },
    {
        name: 'ProfileRouting',
        path: '/profile/john',
        component: ProfileRouting
    },
    {
        name: 'ProfileRouting',
        path: '/profile/mark',
        component: ProfileRouting
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes

});
export default router;