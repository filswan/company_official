import {
    createRouter,
    createWebHistory,
    createWebHashHistory
} from 'vue-router'
import writer from '@/utils/router'
const home = () =>
    import ("@/components/Home");
const dashboard = () =>
    import ("@/views/dashboard/index");
const main = () =>
    import ("@/views/dashboard/main/index");
const swan = () =>
    import ("@/views/dashboard/product/swan");
const fogmeta = () =>
    import ("@/views/dashboard/product/fogmeta");
const nebulablock = () =>
    import ("@/views/dashboard/product/nebulablock");
const ourWorkplace = () =>
    import ("@/views/dashboard/ourWorkplace/index");
const partners = () =>
    import ("@/views/dashboard/partners/index");
const contact = () =>
    import ("@/views/dashboard/contact/index");
const privacy = () =>
    import ("@/views/dashboard/privacy/index");

const routes = [{
        path: '/',
        component: home,
        children: [{
            path: '/',
            name: 'dashboard',
            component: main,
            meta: {
                keepAlive: true,
                title: 'Nebula AI'
            }
        }, {
            path: '/decentralized-computing',
            name: 'swan',
            component: swan,
            meta: {
                keepAlive: true,
                title: 'Decentralized Computing'
            }
        }, {
            path: '/web3-os',
            name: 'fogmeta',
            component: fogmeta,
            meta: {
                keepAlive: true,
                title: 'Web3 OS'
            }
        }, {
            path: '/data-center-solutions',
            name: 'nebulablock',
            component: nebulablock,
            meta: {
                keepAlive: true,
                title: 'Data Center Solutions'
            }
        }, {
            path: '/our-workplace',
            name: 'ourWorkplace',
            component: ourWorkplace,
            meta: {
                keepAlive: true,
                title: 'Our Workplace'
            }
        }, {
            path: '/partners',
            name: 'partners',
            component: partners,
            meta: {
                keepAlive: true,
                title: 'Partners'
            }
        }, {
            path: '/contact',
            name: 'contact',
            component: contact,
            meta: {
                keepAlive: true,
                title: 'Contact Us'
            }
        }, {
            path: '/privacy',
            name: 'privacy',
            component: privacy,
            meta: {
                keepAlive: true,
                title: 'Privacy'
            }
        }]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: process.env.NODE_ENV === 'testnet' ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
    // history: createWebHistory(process.env.BASE_URL),
    // history: createWebHashHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    writer(to);
    next();
})

export default router