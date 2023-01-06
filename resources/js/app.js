import './bootstrap';
//material icons
import "@mdi/font/css/materialdesignicons.css";
import '../css/app.css';

import Vue from 'vue'
import {createInertiaApp, Head, Link} from '@inertiajs/inertia-vue'
import {InertiaProgress} from '@inertiajs/progress'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';

import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';
import {Ziggy} from './ziggy.js';


import vuetify from '../plugins/vuetify'
import store from '../plugins/store'

import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)


Vue.mixin({
    methods: {
        route: (name, params, absolute, config = Ziggy) => route(name, params, absolute, config),
    },
});
// ziggy end here
createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),

    setup({el, App, props, plugin, Ziggy}) {
        Vue.use(plugin)
        Vue.use(ZiggyVue, Ziggy)
        Vue.component('InertiaHead', Head)
        Vue.component('InertiaLink', Link)
        new Vue({
            vuetify,
            store,
            render: h => h(App, props),
        }).$mount(el)
    },
})

InertiaProgress.init();
