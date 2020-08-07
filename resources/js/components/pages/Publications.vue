<template>
    <div>
        <section>
            <v-img
                src="images/header/web_publicaciones.jpg"
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
                            Publicaciones
                        </h1>
                        <v-divider class="primary mx-auto mb-6 " style="max-width:28px"></v-divider>

                        <v-breadcrumbs class=" justify-center pa-0" dark :items="links"></v-breadcrumbs>
                    </v-col>
                </v-row>
            </v-img>

        </section>
        <section>
            <v-container>
                <v-row class="mb-2">
                    <v-col sm="6">
                        <v-card height="300">
                            <v-row class="ma-0">
                                <v-col class="ma-0 ">
                                    <strong class="d-inline-block mb-2 text-primary">World</strong>
                                    <h3 class="mb-0">Featured post</h3>
                                    <div class="mb-1 text-muted">Nov 12</div>
                                    <p class="card-text mb-auto">This is a wider card with supporting text below as a
                                        natural
                                        lead-in to additional content.</p>
                                    <a href="#" class="stretched-link">Continue reading</a>
                                </v-col>

                                <v-col cols="4" class="ma-0 pa-0">
                                   <v-img :aspect-ratio="5/10" height="300" src="https://biblioteca.ulpgc.es/files/repositorio_de_docum152/noticias/esto-es-lo-que-cuestan-las-revistas-cientificas-espana-se-ha-pulido-213-millones-desde-2012.jpg"></v-img>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col sm="6">
                        <v-card height="300">
                            <v-row class="ma-0">
                                <v-col class="ma-0 ">
                                    <strong class="d-inline-block mb-2 text-primary">World</strong>
                                    <h3 class="mb-0">Featured post</h3>
                                    <div class="mb-1 text-muted">Nov 12</div>
                                    <p class="card-text mb-auto">This is a wider card with supporting text below as a
                                        natural
                                        lead-in to additional content.</p>
                                    <a href="#" class="stretched-link">Continue reading</a>
                                </v-col>

                                <v-col cols="4" class="ma-0 pa-0">
                                    <v-img :aspect-ratio="5/10" height="300" src="https://www.tuexperto.com/wp-content/uploads/2019/06/5-formas-de-guardar-un-documento-word-como-un-documento-pdf.jpg"></v-img>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section>
            <div class="text-center my-12">
                <v-avatar class="primary mb-4">
                    <v-icon size="28" dark>
                        mdi-calendar-multiple-check
                    </v-icon>
                </v-avatar>
                <h1 class="text-uppercase headline font-weight-bold mb-2 text-center">
                    Publicaciones científicas
                </h1>
                <v-divider class="primary mx-auto mb-6" style="max-width: 28px;"></v-divider>
            </div>

            <v-container>
                <div class="col col-9">
                    <h3 class="text-uppercase title font-weight-bold mb-1 text-left">Textos y capítulos de libros</h3>
                    <v-divider class="primary mr-auto mb-6" style="max-width: 28px;"></v-divider>
                </div>
                <v-row>
                    <v-col cols="12" sm="6" md="4" lg="3">
                        <v-card
                            max-width="343"
                            class="mx-auto"
                        >
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class="headline">
                                        Memorias
                                    </v-list-item-title>
                                    <v-list-item-subtitle>Congreso Psicología- salud mental</v-list-item-subtitle>
                                    <v-list-item-subtitle>Argentina- 2016</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-img src="images/publicaciones/memorias-congreso.png" contain/>


                            <v-card-actions>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="3">
                        <v-card
                            max-width="343"
                            class="mx-auto"
                        >
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class="headline">
                                        Reflexiones
                                    </v-list-item-title>
                                    <v-list-item-subtitle>Humanidades- capítulo libro</v-list-item-subtitle>
                                    <v-list-item-subtitle>Bogotá - 2018</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-img src="images/publicaciones/reflexiones.jpg" contain/>
                            <v-card-actions>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <div class="col col-9">
                    <div class="body-2 font-weight-regular mb-1 text-left grey--text">Facultad de Humanidades</div>
                    <h3 class="text-uppercase title font-weight-bold mb-1 text-left">Publicaciones- Capítulo de libro -
                        Téxticas</h3>
                    <v-divider class="primary mr-auto mb-6" style="max-width: 28px;"></v-divider>
                    <div class="row">
                        <v-col class="col-12">
                            <div class="d-flex align-center">
                                <v-icon class="primary--text mr-3" size="28">mdi-check-circle-outline</v-icon>
                                <div class="subtitle-1">1° puesto concurso de crónica</div>
                            </div>
                        </v-col>
                        <v-col class="col-12">
                            <div class="d-flex align-center">
                                <v-icon class="primary--text mr-3" size="28">mdi-check-circle-outline</v-icon>
                                <div class="subtitle-1">2015: <span class="font-weight-bold"> Reflexiones, del primer día de clases en el curso de investigación</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col class="col-12">
                            <div class="d-flex align-center">
                                <v-icon class="primary--text mr-3" size="28">mdi-check-circle-outline</v-icon>
                                <div class="subtitle-1">Publicado junio 25-2019</div>
                            </div>
                        </v-col>
                    </div>
                </div>
                <div>
                    <v-card>
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    v-for="n in 3"
                                    :key="n"
                                    class="d-flex child-flex"
                                    cols="4"
                                >
                                    <v-card flat tile class="d-flex">
                                        <v-img
                                            :src="'images/publicaciones/Imagen'+n+'.jpg'"
                                            :aspect-ratio="4/5"
                                            class="grey lighten-2"
                                        >
                                        </v-img>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </div>
                <div class="mt-12">
                    <div class="body-2 font-weight-regular mb-1 text-left grey--text">Asociacion de salud
                        mental-Argentina
                    </div>
                    <h3 class="text-uppercase title font-weight-bold mb-1 text-left">Publicaciones- Capítulo de
                        libro</h3>
                    <v-divider class="primary mr-auto mb-6" style="max-width: 28px;"></v-divider>

                    <v-row>
                        <v-col class="col-12 col-sm-4">
                            <v-img src="images/publicaciones/los-limites-de-la-clinica.png" height="250" contain/>
                        </v-col>
                        <v-col class="col-12 col-sm-8">
                            <p class="base-body body-1  text--darken-1 text-left mb-6">
                                Los Límites de la Clínica.
                            </p>
                            <v-col class="col-12">
                                <div class="d-flex align-start">
                                    <v-icon class="primary--text mr-3" size="28">mdi-check-circle-outline</v-icon>
                                    <div class="subtitle-1">
                                        Memorias de violencia de género de enfermeras y enfermeros en el ámbito
                                        laboral
                                        de la salud en Bogotá en el año 2016. -3.500 profesionales inscritos y 2.000
                                        ponencias. Se seleccionaron 270 ponencias, para el libro Los Límites de la
                                        Clínica, entre los cuales se registra la ponencia del grupo Género e
                                        Interculturalidad. <br>
                                        <span class="font-weight-bold">Ponente: </span>María Victoria Aponte
                                        Valverde
                                    </div>
                                </div>
                            </v-col>
                        </v-col>
                    </v-row>
                </div>

                <div class="mt-12">
                    <div class="body-2 font-weight-regular mb-1 text-left grey--text">Publicación libro-2013</div>
                    <h3 class="text-uppercase title font-weight-bold mb-1 text-left">Informe final proyecto de
                        investigación</h3>
                    <v-divider class="primary mr-auto mb-6" style="max-width: 28px;"></v-divider>
                    <v-img src="images/publicaciones/Informe final proyecto.png" height="499"
                           width="764" contain/>
                </div>

                <div class="mt-12">
                    <div class="body-2 font-weight-regular mb-1 text-left grey--text">Revista indexada- 2019</div>
                    <h3 class="text-uppercase title font-weight-bold mb-1 text-left">Publicación de artículos
                        científicos</h3>
                    <v-divider class="primary mr-auto mb-6" style="max-width: 28px;"></v-divider>
                    <v-row>
                        <v-col>
                            <p class="base-body body-1 text--darken-1 text-left mb-6">
                                Revista International Journal of Scientific and Research Publications, Volume 9, Issue
                                12, December 2019 824 ISSN 2250-3153
                                Artículo: Social control: between theoretical analyzes of the past and future
                                perspectives. The contribution of the theoretical criminological approach to the
                                phenomenon. N. Malizia , M.V. Aponte Valverde
                            </p>
                            <p class="base-body body-1 grey--text text--darken-1 text-left">
                                http://dx.doi.org/10.29322/IJSRP.9.12.2019.p96106 www.ijsrp.org
                                * Associate Professor of Sociology of Law, Deviance and Social change - University of
                                Enna “Kore”, Faculty of Human and Society Sciences
                                ** Valverde, Social sciences Researcher, University Foundation of Andean Area, Bogotà,
                                Colombia, Faculty of Health Sciences
                                DOI: 10.29322/IJSRP.9.12.2019.p96106
                                http://dx.doi.org/10.29322/IJSRP.9.12.2019.p96106

                            </p>
                        </v-col>
                        <v-col cols="4">
                            <v-card flat outlined class="pa-4">
                                <v-img
                                    src="images/publicaciones/ijsrp-org.jpg" height="200" contain aspect-ratio="1"
                                ></v-img>

                                <v-card-text>
                                    International Journal of Scientific and Research Publications
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>

                <div class="mt-12">
                    <div class="body-2 font-weight-regular mb-1 text-left grey--text">Universidad de Antioquia- 2019
                    </div>
                    <h3 class="text-uppercase title font-weight-bold mb-1 text-left">Publicación artículos
                        científicos</h3>
                    <v-divider class="primary mr-auto mb-6" style="max-width: 28px;"></v-divider>
                    <v-row>
                        <v-col>
                            <v-row>
                                <v-col class="col-12">
                                    <div class="d-flex align-start">
                                        <v-icon class="primary--text mr-3" size="28">mdi-check-circle-outline</v-icon>
                                        <div class="subtitle-1">Universidad de Antioquia. Facultad de Salud Pública.
                                            <span class="font-weight-bold">Revista Facultad Nacional de Salud Pública Vol. 37 Suplemento N.º 1, 2019 </span>-
                                            Facultad Nacional de Salud Pública "Héctor Abad Gómez” p.143- 149. Texto
                                            presentado en el 10 Congreso Internacional de Salud Pública – Medellín,
                                            octubre 18 de 2017
                                        </div>
                                    </div>
                                </v-col>
                                <v-col class="col-12">
                                    <div class="d-flex align-start">
                                        <v-icon class="primary--text mr-3" size="28">mdi-check-circle-outline</v-icon>
                                        <div class="subtitle-1">
                                            <span class="font-weight-bold">Reseña N°1.</span> Una aproximación desde una
                                            experiencia piloto a los significados
                                            de memorias de violencia de género en mujeres adultas mayores de Bosa en la
                                            ciudad de Bogotá en el 2017

                                        </div>
                                    </div>
                                </v-col>
                                <v-col class="col-12">
                                    <div class="d-flex align-start">
                                        <v-icon class="primary--text mr-3" size="28">mdi-check-circle-outline</v-icon>
                                        <div class="subtitle-1">
                                            <span class="font-weight-bold">Reseña N°2.</span>
                                            Caracterización de la violencia contra las mujeres estudiantes de
                                            enfermería. Un primer acercamiento desde la percepción estudiantil de Bogotá
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="4">
                            <v-card flat outlined class="pa-4">
                                <v-img
                                    src="images/publicaciones/revista facultad de salud.png" height="300" contain
                                ></v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </section>
    </div>
</template>

<script>
    export default {
        data: () => ({
            links: [
                {
                    text: 'Inicio',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Publicaciones',
                    disabled: true,
                    href: '/publications',
                },
            ],
        }),
    };
</script>

<style lang="scss" scoped></style>
