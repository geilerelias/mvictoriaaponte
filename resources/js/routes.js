import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const withPrefix = (prefix, routes) =>
    routes.map(route => {
        route.path = prefix + route.path;
        return route;
    });

let routes = [

    {
        path: '/',
        component: () => import ('./components/Layout.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import ('./components/pages/Home.vue')
            },
            {
                path: '/about-me',
                name: 'AboutMe',
                component: () => import ('./components/pages/AboutMe.vue')
            },

            {
                path: '/events',
                name: 'Events',
                component: () => import ('./components/pages/Events.vue')
            },
            {
                path: '/publications',
                name: 'Publications',
                component: () => import ('./components/pages/Publications.vue')
            },
            {
                path: '/services',
                name: 'Services',
                component: () => import ('./components/pages/Services.vue')
            },
            {
                path: '/gallery',
                name: 'Gallery',
                component: () => import ('./components/pages/Gallery.vue')
            },
            {
                path: '/contact',
                name: 'Contact',
                component: () => import ('./components/pages/Contact.vue')
            },
        ]
    },
    {
        path: "*",
        name: "404",
        component: () =>
            import ('./components/errors/404.vue'),
    }
]


const router = new VueRouter({
    routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.middlewareAuth)) {
        if (!auth.check()) {
            next({
                path: "/login",
                query: {
                    redirect: to.fullPath
                }
            });

            return;
        }
    } else if (to.matched.some(record => record.meta.withAuth)) {
        if (auth.check()) {
            next({
                path: "/dashboard",
                query: {
                    redirect: to.fullPath
                }
            });

            return;
        }
    }

    next();
});

export default router;
