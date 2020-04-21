<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app temporary>
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left dense class="primary white--text">
            <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"/>
            <v-toolbar-title>
                Soy Maria Victoria Aponte
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn
                    dark
                    class="white--text"
                    text
                    v-for="link in links"
                    :key="link.name"
                    :to="link.path"
                >
                    {{ link.name }}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>


        <!-- Footer -->
        <v-sheet elevation="12">
            <v-footer class="font-small mdb-color">

                <!-- Footer Links -->
                <v-container fluid class="text-center text-md-left ">

                    <!-- Footer links -->
                    <v-row class="text-center text-md-left mt-3 pb-3 " color="#1c2331">

                        <!-- Grid column -->
                        <v-col class="col-md-5 col-lg-5 col-xl-3 mx-auto mt-3">
                            <h3 class="text-uppercase subtitle-1 font-weight-bold mb-1 text-left primary--text">
                                Soy Maria Victoria Aponte
                            </h3>
                            <v-divider class="primary mr-auto mb-6" style="max-width: 70px;"></v-divider>
                            <p class="text-justify">
                                Me inspira el saber de las mujeres,
                                estoy comprometida con su auto-valoración. Confiero pasión en el empoderamiento de cada
                                mujer, con
                                objetividad y claridad. Mi travesía personal refleja una combinación de saberes
                                cotidianos,
                                profesionales y sociales, inspirados en la necesidad de despertar conciencias de
                                mujeres.
                            </p>
                        </v-col>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <v-col class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h3 class="text-uppercase subtitle-1 font-weight-bold mb-1 text-left primary--text">
                                Servicios
                            </h3>
                            <v-divider class="primary mr-auto mb-2" style="max-width: 28px;"></v-divider>
                            <div v-for="(item, i) in servicios">
                                <v-btn small class="mx-auto text-uppercase subtitle-2 mb-1 text-left black--text"
                                       rounded
                                       text :href="item.path">{{item.name}}
                                </v-btn>
                            </div>
                        </v-col>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h3 class="text-uppercase subtitle-1 font-weight-bold mb-1 text-left primary--text">
                                ENLACES ÚTILES
                            </h3>
                            <v-divider class="primary mr-auto mb-2" style="max-width: 28px;"></v-divider>

                            <div v-for="(item, i) in links">
                                <v-btn small class="mx-auto text-uppercase subtitle-2 mb-1 text-left black--text"
                                       rounded
                                       text :to="item.path">{{item.name}}
                                </v-btn>
                            </div>
                        </div>

                        <!-- Grid column -->

                        <!-- Grid column -->
                        <v-col class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h3 class="text-uppercase subtitle-1 font-weight-bold mb-1 text-left primary--text">
                                Contáctame
                            </h3>
                            <v-divider class="primary mr-auto mb-2" style="max-width: 28px;"></v-divider>
                            <div
                                v-for="item in contact"
                                :key="item.name"
                                class="pt-2 mb-0 d-flex justify-start align-content-start align-start"
                            >
                                <div
                                    class="base-avatar d-inline-flex mb-3 "
                                    style="margin-left:-10"
                                >
                                    <v-icon
                                        color="grey"
                                        size="32"
                                        class="mt-6"
                                        v-text="item.icon"
                                    />
                                </div>
                                <div class="ml-3">
                                    <h3
                                        class="text-uppercase font-weight-bold subtitle-2 mb-1 text-left black--text"
                                    >
                                        {{ item.name }}
                                    </h3>
                                    <div
                                        class="base-body body-1 mx-auto  text--lighten-1 text-left mb-0"
                                    >
                                        <div v-html="item.content"></div>
                                    </div>
                                </div>
                            </div>

                        </v-col>
                        <!-- Grid column -->

                    </v-row>
                    <!-- Footer links -->

                    <v-divider></v-divider>
                    <!-- Grid row -->
                    <v-row class="d-flex align-items-center">

                        <!-- Grid column -->
                        <v-col class="col-md-7 col-lg-8">

                            <!--Copyright-->
                            <p class="text-center text-md-left">© 2020 Copyright:
                                <a href="">
                                    <strong> mvictoriaaponte.com</strong>
                                </a>
                            </p>

                        </v-col>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <v-col class="col-md-5 col-lg-4 ml-lg-0">
                            <!-- Social buttons -->
                            <v-btn
                                v-for="item in icons"
                                :key="item.icon"
                                class="mx-4"
                                :color="item.color"
                                icon
                            >
                                <v-icon size="32px" dark>{{ item.icon }}</v-icon>
                            </v-btn>
                        </v-col>
                        <!-- Grid column -->

                    </v-row>
                    <!-- Grid row -->

                </v-container>
            </v-footer>
        </v-sheet>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            links: [
                {
                    path: "/",
                    name: "Inicio"
                },
                {
                    path: "/about-me",
                    name: "¿Quíen soy?"
                },
                {
                    path: "/events",
                    name: "Eventos"
                },
                {
                    path: "/publications",
                    name: "Publicaciones"
                },
                {
                    path: "/services",
                    name: "Servicios"
                },
                {
                    path: "/gallery",
                    name: "Galería"
                },
                {
                    path: "/contact",
                    name: "Contacto"
                }
            ],
            icons: [
                {icon: "mdi-facebook", color: '#3b5998'},
                {icon: "mdi-twitter", color: '#55acee'},
                {icon: "mdi-google-plus", color: '#dd4b39'},
                {icon: "mdi-linkedin", color: '#0082ca'},
                {icon: "mdi-instagram", color: '#ec4a89'},
            ],
            contact: [
                {
                    icon: "mdi-map-marker-outline",
                    name: "Dirección",
                    content: `Cra 4-A # 54-52<br />Chapinero Alto, Bogotá, Colombia`
                },
                {
                    icon: "mdi-cellphone",
                    name: "Teléfonos",
                    content: `+57 315 734 0385 `
                },
                {
                    icon: "mdi-email",
                    name: "Correos",
                    content: `contacto@mvictoriaaponte.com <br/> contacto@soecolombia.com `
                }
            ],
            servicios: [
                {name: "Investigación", path: '/services#Investigación'},
                {name: "Capacitación", path: '/services#Capacitación'},
                {name: "Asesorías", path: '/services#Asesorías'},
                {name: "Círculos de poder", path: '/services#Círculos de poder'},
                {name: "Coaching", path: '/services#Coaching'},
            ]
        }),
        created() {
            this.$vuetify.theme.dark = false;
        }
    };
</script>
<style>
    /* .v-btn--active {
         background-color: white;
        border-bottom: none !important;
    }
    .v-btn--active.v-btn--router > span {
        transition: all 0.2s ease;
        border-bottom: 2px solid white;
        padding-bottom: 4px;
        padding: 10px 0;
        font-weight: bold;
    }

    .v-btn--router > span:hover {
        transition: all 0.2s ease;
        color: #7a0049;
        padding: 10px 0;
        font-weight: bold;
    } */
</style>
