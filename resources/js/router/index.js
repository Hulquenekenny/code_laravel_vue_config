import { createRouter, createWebHistory } from "vue-router";

//admin
import homeAdminIndex from '../components/admin/home/index.vue'

//pages
import homePageIndex from '../components/pages/home/index.vue'

//NotFound
import notFound from '../components/notFound.vue'

const routes = [
     //pages
     {
        path: '/',
        component: homePageIndex
    },
    //admin
    {
        path: '/admin/home',
        component: homeAdminIndex
    },   
    //notFound
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router