/**
 * 在主框架内显示
 */
const frameIn = [
    {
        path: '/',
        redirect: {name: 'index'},
        component: () => import('@/layout/index.vue'),
        children: [
            // 首页
            {
                path: '/index',
                name: 'index',
                meta: {
                    auth: true,
                    title: '首页',
                },
                component: () => import('@/views/home/index.vue'),
            },
        ]
    }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
    // 登录
    // {
    //     path: '/login',
    //     name: 'login',
    //     meta: {
    //         title: '登录',
    //     },
    //     component: _import('system/login')
    // }
]

/**
 * 错误页面
 */
const errorPage = [
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/views/404/index.vue'),
        meta: {
            title: '404',
        },
    }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
    ...frameIn,
    ...frameOut,
    ...errorPage
]
