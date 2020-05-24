<template>
    <div>
        <section>
            <v-img
                src="images/header/capacitacion 2.jpg"
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
                            Eventos
                        </h1>
                        <v-divider class="primary mx-auto mb-6 " style="max-width:28px"></v-divider>

                        <v-breadcrumbs class=" justify-center pa-0" dark :items="links"></v-breadcrumbs>
                    </v-col>
                </v-row>
            </v-img>

        </section>

        <section class="py-9 secondary lighten-4">
            <div class="text-center mb-12">

                <v-avatar class="primary mb-4">
                    <v-icon size="28" dark>
                        mdi-calendar-multiple-check
                    </v-icon>
                </v-avatar>
                <h1 class="text-uppercase headline font-weight-bold mb-2 text-center">
                    Eventos académicos
                </h1>
                <v-divider class="primary mx-auto mb-6" style="max-width: 28px;"></v-divider>

                <p class="base-body body-1 mx-auto grey--text text--darken-1 text-center mb-10"
                   style="max-width: 700px;">
                    Estos son algunos de los eventos internacionales y nacionales de los que he sido participe.
                </p>
            </div>
            <div class="container">
                <v-row>
                    <v-col class="col-md-6 col-12" v-for="item in eventos " :key="item.title">
                        <div class="pt-2 mb-8 d-flex">
                            <v-avatar class="grey lighten-3 mb-3" size="84">
                                <v-img :src="item.image"></v-img>
                            </v-avatar>
                            <div class="ml-6">
                                <h3 class="text-uppercase title font-weight-bold mb-3 text-left">
                                    {{item.title}}
                                </h3>
                                <p class="base-body body-1 mx-auto grey--text text--darken-1 text-left mb-0"
                                   style="max-width: 700px;">
                                    {{item.content}}
                                </p>
                                <div class="subtitle-2 mx-auto grey--text text--darken-1 text-left">
                                    {{item.location}}
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </section>

        <section class="py-9">
            <div class="text-center mb-12">

                <v-avatar class="primary mb-4">
                    <v-icon size="28" dark>
                        mdi-calendar-multiple-check
                    </v-icon>
                </v-avatar>
                <h1 class="text-uppercase headline font-weight-bold mb-2 text-center">
                    Talleres y Conferencias
                </h1>
                <v-divider class="primary mx-auto mb-6" style="max-width: 28px;"></v-divider>

            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data: () => ({
            eventos: [
                {

                    image: 'images/eventos/X CONGRESO ARGENTINO DE SALUD MENTAL.jpg',
                    title: 'X CONGRESO ARGENTINO DE\n' +
                        'SALUD MENTAL',
                    location: 'Buenos Aires, agosto\n' +
                        '2016',
                    content: '“Memorias de violencia de género de\n' +
                        'enfermeras y enfermeros en el ámbito\n' +
                        'laboral de la salud”.'
                },
                {
                    image: 'images/eventos/VII Simposio Internacional de Investigaciones.jpg',
                    title: 'VII Simposio Internacional de Investigaciones, VIII Nacional Y XIII Premio a la Investigación',
                    location: 'Valledupar, Octubre 2017.',
                    content: '“Significado de memorias de\n' +
                        'violencia de género de mujeres adultas mayores\n' +
                        'de Bosa en Bogotá”.'
                },
                {
                    image: 'images/eventos/Una mirada al posconflicto desde lo jurídico, enfocada a la salud.jpg',
                    title: 'Encuentro de semilleros de investigación',
                    location: 'Universidad\n' +
                        'de Santander- UDES. Abril\n' +
                        '2017',
                    content: 'Una mirada al\n' +
                        'posconflicto desde lo\n' +
                        'jurídico, enfocada a la salud.'
                },
                {
                    image: 'images/eventos/10 Congreso Internacional de Salud Pública.png',
                    title: '10 Congreso Internacional de Salud\n' +
                        'Pública',
                    location: 'Universidad de Antioquia-Bogotá 2017.',
                    content: 'Significados de memorias de violencia de género\n' +
                        'en mujeres adultas mayores de Bosa en la Ciudad\n' +
                        'de Bogotá'
                },
                {
                    image: 'images/eventos/Eventos internacionales Veracruz- México.jpg',
                    title: 'VIII Congreso Internacional',
                    location: 'Veracruz- México. 2018',
                    content: '“Transversalidad y\n' +
                        'multidisciplinariedad en la\n' +
                        'Complejidad de los Problemas\n' +
                        'de Salud para el Desarrollo\n' +
                        'Humano Sustentable”'
                },
            ],
            links: [
                {
                    text: 'Inicio',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Eventos',
                    disabled: true,
                    href: '/events',
                },
            ],
        }),
    };
</script>

<style lang="scss" scoped></style>
