<template>
    <v-navigation-drawer v-model="localDrawer" app
                         temporary>

        <v-img
            src="src/images/fotos/bcbc1336-d827-4047-9804-13db455d6467.JPG"
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


        <v-list
            nav
        >
            <v-list-item-group
                color="primary"
            >
                <inertia-link v-for="(item, i) in links" :key="i" :href="route(item.path)">
                    <!--                    :class="$route().current(item.path)?'active primary  white&#45;&#45;text':''"-->
                    <v-list-item link :class="route().current(item.path)?'v-list-item--active':''">
                        <v-list-item-icon>
                            <v-icon color="primary">{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-avatar>
                            <img :src="`src/${item.image}`" :alt="item.name">
                        </v-list-item-avatar>
                    </v-list-item>

                </inertia-link>
            </v-list-item-group>
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
    },
    data() {
        return {
            selectedItem: null
        }
    }
}
</script>

<style scoped>
.v-btn--active {
    border-bottom: 1px solid white !important;
}
</style>
