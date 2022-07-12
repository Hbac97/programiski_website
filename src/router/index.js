import { createRouter, createWebHistory} from 'vue-router'
import home from '../views/home.vue'
import news from '../views/news.vue'
import project from '../views/project.vue'
import contact from '../views/contact.vue'
import about from '../views/about.vue'
import government from '../views/government.vue'
import statute from '../views/statute.vue'
import join from '../views/join.vue'
import current_projects from '../views/current_projects.vue'
import realized_projects from '../views/realized_projects.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/news',
            component: news
        },
        {
            path: '/project',
            component: project
        },
        {
            path: '/contact',
            component: contact
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/government',
            component: government
        },
        {
            path: '/statute',
            component: statute
        },
        {
            path: '/join',
            component: join
        },
        {
            path: '/current_projects',
            component: current_projects
        },
        {
            path: '/realized_projects',
            component: realized_projects
        },




    ]
})


export default router