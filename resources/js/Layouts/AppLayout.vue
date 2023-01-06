<template>
    <v-app>
        <base-drawer></base-drawer>
        <base-header></base-header>
        <v-main style="min-height: 100vh">
            <transition name="fade"
                        mode="out-in" duration="400">
                <slot></slot>
            </transition>
        </v-main>
        <base-footer></base-footer>
    </v-app>
</template>

<script>

import Header from "@/base/Header.vue";
import Footer from "@/base/Footer.vue";
import Drawer from "@/base/Drawer.vue";

export default {
    name: "AppLayout",
    components: {
        "base-header": Header,
        "base-drawer": Drawer,
        "base-footer": Footer,

    }
}
</script>

<style scoped>

</style>
