<template>
    <div>
        <v-app-bar app clipped-left dense class="primary white--text">
            <v-toolbar-title>
                Soy Maria Victoria Aponte

            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">

                <inertia-link
                    class="white--text v-btn v-btn--text theme--dark v-size--default"
                    v-for="link in links"
                    :key="link.name"
                    :href="route(link.path)"
                    active-class="primary"
                    :class="route().current(link.path)?'v-btn--active':''"
                >
                    <span class=" white--text font-weight-bold">{{ link.name }}</span>
                </inertia-link>
            </v-toolbar-items>
            <v-app-bar-nav-icon class="hidden-md-and-up" color="white"
                                @click="drawer ? setDrawer(false) : setDrawer(true)"/>
        </v-app-bar>
        <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            color="primary"
            fixed
            bottom
            right
            @click="toTop"
        >
            <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
    </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
import {Link} from '@inertiajs/inertia-vue'

export default {
    data: () => ({
        fab: false,
    }),
    computed: {
        ...mapState(["drawer", "page", "color", "flat", "links"]),

    },
    methods: {
        ...mapMutations([
            "setDrawer",
            "setPage",
            "setColor",
            "setFlat",
            "setPagePrincipal"
        ]),
        toTop() {
            this.$vuetify.goTo(0);
        },
        onScroll(e) {
            console.log("ejecuto onScroll");

            if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            if (top > 50) {
                this.fab = true;
                this.setFlat(false);
            } else {
                this.fab = false;
                this.setFlat(true);
            }
        }
    }
}
</script>

<style scoped>

.v-btn--active {
    border-bottom: 1px solid white !important;
}

.v-btn--routes > span:hover {
    transition: all 0.2s ease;
    color: #7a0049;
    padding: 10px 0;
    font-weight: bold;
}
</style>
