<template>
    <v-navigation-drawer v-model="localDrawer" app temporary>

        <v-img
            src="images/imagen principal maria victoria.jpg"
            height="200px"
            dark
        >
            <v-row align="end" class="lightbox white--text pa-2 fill-height">
                <v-col>
                    <div class="subheading">Maria Victoria Aponte</div>
                    <div class="body-1">contacto@mvictoriaaponte.com</div>
                </v-col>
            </v-row>
        </v-img>

        <v-list>
            <v-list-item v-for="(item, i) in links" :key="i" :to="item.path">
                <v-list-item-icon>
                    <v-icon color="primary">{{item.icon}}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{item.name}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

        </v-list>

    </v-navigation-drawer>
</template>

<script>
    import {mapState, mapMutations} from "vuex";

    export default {
        computed: {
            ...mapState(["drawer", "page", "color", "flat", "links"]),
            localDrawer: {
                get() {
                    return this.drawer;
                },
                set(val) {
                    this.setDrawer(val);
                }
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
        }
    }
</script>

<style scoped>

</style>
