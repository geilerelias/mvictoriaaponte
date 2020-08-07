<template>
    <div>
        <!-- Footer -->
        <v-footer>
            <!-- Footer Links -->
            <v-container fluid class="text-md-left">
                <v-row class="text-center">
                    <v-col cols="12" md="6" class="text-md-left pt-1 my-0">
                        <strong class="subheading">¡Conéctate conmigo en mis redes sociales!</strong>
                    </v-col>
                    <v-col cols="12" md="6" class="text-md-right pt-1 my-0">
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
                </v-row>
                <v-divider></v-divider>
                <!-- Footer links -->
                <v-row class="text-md-left mt-3 pb-3 ">

                    <!-- Grid column -->
                    <v-col cols="12" class="col-md-5 col-lg-5 col-xl-3 mx-auto mt-3">
                        <h3 class="text-uppercase subtitle-1 font-weight-bold mb-1 text-left primary--text">
                            Soy Maria Victoria Aponte
                        </h3>
                        <v-divider class="primary mr-auto mb-6" style="max-width: 70px;"></v-divider>
                        <p class="text-justify">
                            Me inspira el saber de las mujeres,
                            estoy comprometida con su autovaloración. Confiero pasión en el empoderamiento de cada
                            mujer, con
                            objetividad y claridad. Mi travesía personal refleja una combinación de saberes
                            cotidianos,
                            profesionales y sociales, inspirados en la necesidad de despertar conciencias de
                            mujeres.
                        </p>
                    </v-col>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <v-col cols="12" class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
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
                    <div cols="12" class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
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
                    <v-col cols="12" class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
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

                <v-divider></v-divider>
                <!-- Grid row -->

                <!--Copyright-->
                <p class="text-center pa-2">© 2020 Copyright:
                    <a href="">
                        <strong> mvictoriaaponte.com</strong>
                    </a>
                </p>

            </v-container>
        </v-footer>

    </div>
</template>

<script>
    export default {
        data: () => ({
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

        })
    }
</script>

<style scoped>

</style>
