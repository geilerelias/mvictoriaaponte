<template>
    <v-app id="inspire">

        <base-header></base-header>
        <base-drawer></base-drawer>

        <v-main style="min-height: 100vh">
            <transition name="fade"
                        mode="out-in" duration="400">
                <router-view></router-view>
            </transition>
        </v-main>

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

<style>
#nprogress .bar {
    background: #29d;

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
}
</style>
