import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import Signup from '../components/login/signup'
import Forum from '../components/forum/Forum'
import Logout from '../components/login/Logout'
import Read from '../components/forum/read'
import Create from '../components/forum/create'
import CreateCategory from '../Components/category/CreateCategory'

const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/logout', component: Logout },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/question/:slug', component: Read, name: 'read' },
    { path: '/ask', component: Create },
    { path: '/category', component: CreateCategory },
]


const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history'
})

export default router
