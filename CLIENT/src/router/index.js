import {createRouter, createWebHashHistory} from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0};
        }
    },
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        // 不存在的路由地址
        next('/404')
    } else {
        window.document.title =  (to.query.title ? to.query.title : to.meta.title)+'-ZY’Client'
        next()
    }

})

router.afterEach((to, from) => {
    // util.title(to.meta.title)
})

export default router
