const routes = [
    { path: '/', component: () => import('./pages/StronaGlowna.vue') },    // https://router.vuejs.org/guide/advanced/lazy-loading.html
    { path: '/ListaPytan', component: () => import('./pages/ListaPytan.vue') },    // https://router.vuejs.org/guide/advanced/lazy-loading.html
    { path: '/PrzedZakupem', component: () => import('./pages/PrzedZakupem.vue') },    // https://router.vuejs.org/guide/advanced/lazy-loading.html

]

export default routes;