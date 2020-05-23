<template>
    <v-app id="inspire">

        <base-header></base-header>
        <base-drawer></base-drawer>

        <v-content style="min-height: 100vh">
            <router-view></router-view>
        </v-content>

        <base-footer></base-footer>
    </v-app>
</template>

<script>

    require('vue2-animate/dist/vue2-animate.min.css');
    import Header from "./base/Header";
    import Footer from "./base/Footer";
    import Drawer from "./base/Drawer";

    export default {
        components: {
            "base-header": Header,
            "base-drawer": Drawer,
            "base-footer": Footer,

        }
    };
</script>

