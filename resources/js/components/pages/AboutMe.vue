<template>
    <div>
        <section>
            <v-img
                src="images/quien-soy/creciendo-juntas.jpg"
                gradient="to top, rgba(5, 11, 31, 0.8), rgba(5, 11, 31, 0.8)"
                color="#45516b"
                flat
                tile
                height="350"
                max-width="100%"
            >
                <v-row class="ma-0 fill-height text-center align-center justify-center">
                    <v-col class="col col-12">
                        <h1 class="display-2 font-weight-500 mb-2 text-center white--text">
                            ¿Quíen Soy?
                        </h1>
                        <v-divider class="primary mx-auto mb-6 " style="max-width:28px"></v-divider>

                        <v-breadcrumbs class=" justify-center pa-0" dark :items="links"></v-breadcrumbs>
                    </v-col>
                </v-row>
            </v-img>
        </section>

        <div class="container">
            <v-row>
                <v-col class="col-md-6 col-12">
                    <h2 class="display-1 ">
                        Mi nombre es Maria Victoria Aponte.
                    </h2>
                    <h2 class="headline mb-4 ">
                        Soy Magister en Investigación Social,
                        Especialista en Administración y docencia universitaria.
                    </h2>
                    <p class="subtitle-1 text-justify">
                        Me he desempeñado, desde lo social como profesional universitario,
                        en oficinas de la mujer a nivel municipal y como personal directivo en el orden departamental.
                        De igual manera, me desempeñé, cómo directora de Bienestar Universitario. Así mismo, fui
                        directora de
                        la Asociación de Trabajadores Sociales del Cesar y directora de una Fundación sin ánimo de lucro
                        que
                        trabajaba por los jóvenes. Actualmente soy Docente universitaria.
                    </p>
                    <p class="mb-5 text-justify"> Mi trayectoria profesional, se ha
                        caracterizado por investigar problemáticas de la mujer, y la violencia de género,
                        la recuperación de la memoria entre otros, con el ánimo de ser referente de
                        cambio para las mujeres a través de un diálogo de saberes que permita
                        transformarla de la subordinación al protagonismo en el contexto
                        socio-cultural.
                    </p>
                    <v-btn outlined text to="/contact"
                           class="px-5  primary--text">
                        Contáctame
                    </v-btn>
                </v-col>
                <v-col class="col-md-5 offset-md-1 col-12">
                    <v-card>
                        <v-img src="images/quien-soy/quien-soy.jpg">
                        </v-img>
                    </v-card>

                </v-col>
            </v-row>
        </div>
        <section>
            <div class="base-section-heading text-center mb-12">
                <v-avatar class="d-inline-flex mb-4 primary" size="56">
                    <v-icon size="28" dark>
                        mdi-vuetify
                    </v-icon>
                </v-avatar>
                <h1 class="text-uppercase headline font-weight-bold mb-2 text-center">
                    TRAVESÍA PERSONAL DESDE MI CONCIENCIA
                    <br>
                    <span class="text-lowercase caption">Autobiografía</span>
                </h1>
                <v-divider class="grey lighten-2 mx-auto mb-6" style="max-width: 28px;"></v-divider>
                <p class="mb-10 grey--text text--darken-1 base-body body-1 mx-auto text-center ">
                    Este es un escrito en el que hablo acerca de mis travesías personales y mi experiencia como mujer
                    empoderada
                </p>
                <v-btn @click="dialog=!dialog">
                    ver documento
                </v-btn>
            </div>

        </section>
        <v-row justify="center">
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>TRAVESÍA PERSONAL DESDE MI CONCIENCIA</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark text @click="dialog = false">Cerrar</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <section>
                            <v-container>
                                <v-card v-for="i in numPages"
                                        :key="i" class="my-2">
                                    <pdf
                                        :src="src"
                                        :page="i"
                                        style="display: inline-block; width: 100%;"
                                    ></pdf>
                                </v-card>
                            </v-container>
                        </section>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
    import pdf from 'vue-pdf'

    var loadingTask = pdf.createLoadingTask('/document/AUTOBIOGRAFÍA-TRAVESÍA%20PERSONAL%20DESDE%20MI%20CONCIENCIA.pdf');
    export default {
        components: {
            pdf
        },
        mounted() {
            this.src.then(pdf => {
                this.numPages = pdf.numPages;
            });
        },
        data: () => ({
            src: loadingTask,
            numPages: undefined,
            links: [
                {
                    text: 'Inicio',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Quien soy',
                    disabled: true,
                    href: '/about-me',
                },
            ],
            dialog: false
        }),

    };
</script>

<style lang="scss" scoped></style>
