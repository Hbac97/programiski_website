import { createRouter, createWebHistory} from 'vue-router'
import home from '../views/home.vue'
import news from '../views/news.vue'
import project from '../views/project.vue'
import contact from '../views/contact.vue'

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


    ]
})


export default router