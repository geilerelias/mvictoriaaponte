<template>
    <div>
        <v-app-bar app clipped-left dense class="primary white--text">
           <v-toolbar-title >
                Soy Maria Victoria Aponte
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                    dark
                    class="white--text"
                    text
                    v-for="link in links"
                    :key="link.name"
                    :to="link.path"
                >
                  <span class="font-weight-bold" >{{ link.name }}</span>
                </v-btn>
            </v-toolbar-items>
            <v-app-bar-nav-icon class="hidden-md-and-up" color="white" @click="drawer ? setDrawer(false) : setDrawer(true)"/>
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

    export default {
        data: () => ({
            fab: false,
        }),
        computed: {
            ...mapState(["drawer", "page", "color", "flat","links"]),
            pagePrincipal(){
                return this.$route.path =="/";
            }
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

<style>
    /* .v-btn--active {
         background-color: white;
        border-bottom: none !important;
    }
    .v-btn--active.v-btn--routes > span {
        transition: all 0.2s ease;
        border-bottom: 2px solid white;
        padding-bottom: 4px;
        padding: 10px 0;
        font-weight: bold;
    }

    .v-btn--routes > span:hover {
        transition: all 0.2s ease;
        color: #7a0049;
        padding: 10px 0;
        font-weight: bold;
    } */
</style>
