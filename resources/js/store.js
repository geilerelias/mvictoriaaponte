import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        numero: 10,
        drawer: false,
        links: [
            {
                path: "/",
                name: "Inicio",
                icon: 'mdi-home',
                image: 'images/caricaturas/inicio.jpeg'
            },
            {
                path: "/about-me",
                name: "Acerca de",
                icon: 'mdi-account-question',
                image: 'images/caricaturas/quien soy.jpeg'
            },
            {
                path: "/events",
                name: "Eventos",
                icon: 'mdi-calendar-multiple-check',
                image: 'images/caricaturas/quien soy.jpeg'
            },
            {
                path: "/publications",
                name: "Publicaciones",
                icon: 'mdi-newspaper-variant',
                image: 'images/caricaturas/quien soy.jpeg'
            },
            {
                path: "/services",
                name: "Servicios",
                icon: 'mdi-face-agent',
                image: 'images/caricaturas/quien soy.jpeg'
            },
            {
                path: "/gallery",
                name: "Galería",
                icon: 'mdi-animation-play',
                image: 'images/caricaturas/quien soy.jpeg'
            },
            {
                path: "/contact",
                name: "Contacto",
                icon: 'mdi-card-account-mail',
                image: 'images/caricaturas/quien soy.jpeg'
            }
        ],
        search: "",
        page: "",
        flat: "",
    },
    getters: {
        getDrawer(state) {
            return state.drawer;
        },
        getSearch(state) {
            return state.search;
        },
        getPage(state) {
            return state.page;
        },
        getFlat(state) {
            return state.flat;
        }
    },
    mutations: {
        setDrawer(state, v) {
            state.drawer = v;
        },
        setSearch(state, v) {
            state.search = v;
        },
        setPage(state, v) {
            state.page = v;
        },
        setFlat(state, v) {
            state.flat = v;
        },
        aumentar(state) {
            state.numero++;
        }

    },
    actions: {}
});

export default store;
