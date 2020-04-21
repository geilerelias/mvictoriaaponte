<template>
    <div>
        <section>
            <v-img
                class="white--text"
                height="95vh"
                src="images/imagen principal maria victoria.jpg"
                gradient="to right, rgba(0, 0, 0, 0.54), rgba(68, 12, 64, 0) 70%"
            >
                <v-container class="fill-height px-4 py-12">
                    <v-flex
                        class="d-flex align-center"
                        style="height: 100%; max-width: 700px; width: 100%;"
                    >

                        <v-content>
                            <h1
                                class="display-2 font-weight-black mb-4 text-left white--text text-uppercase"
                            >
                                Soy
                            </h1>
                            <h1
                                class="display-2 font-weight-black mb-4 text-left white--text text-uppercase"
                            >
                                Maria Victoria Aponte
                            </h1>
                            <p
                                class="base-body body-1 white--text text--lighten-1 text-left mb-10"
                            >
                                Trabajadora Social, con maestría en
                                Investigación Social Interdisciplinaria, docente
                                universitaria, e investigadora en problemáticas
                                sobre violencia de género.
                            </p>
                            <v-btn rounded @click="$router.push('/about-me')" color="primary" dark>¿Quién soy?</v-btn>
                        </v-content>
                    </v-flex>
                </v-container>
            </v-img>
        </section>

        <section class="mt-12">
            <div class="base-section-heading text-center mb-12">
                <h1
                    class="text-uppercase headline font-weight-bold mb-2 text-center">
                    Mi motivación
                </h1>
                <v-divider class=" primary mx-auto mb-6" style="max-width: 28px;"></v-divider>
                <p class="body-1 mx-auto grey--text text--darken-1 mb-10 text-left"
                   style="max-width: 700px;">
                    Me inspira el saber de las mujeres,
                    estoy comprometida con su auto-valoración. Confiero pasión en el empoderamiento de cada mujer, con
                    objetividad y claridad. Mi travesía personal refleja una combinación de saberes cotidianos,
                    profesionales y sociales, inspirados en la necesidad de despertar conciencias de mujeres.
                </p>
            </div>
        </section>

    <!--    <section class="mt-12">
            <div class="base-section-heading text-center mb-12">
                <h1
                    class="text-uppercase headline font-weight-bold mb-2 text-center">
                    Mi motivación
                </h1>
                <v-divider class=" primary mx-auto mb-6" style="max-width: 28px;"></v-divider>
            </div>
            <v-container>
                <v-row>
                    <v-col class="col-md-4 col-12" v-for="item in items" :key="item.title">
                        <v-container class="pa-0">
                            <v-row class="no-gutters justify-start">
                                <v-col class="col-9">
                                    <h3 class="text-uppercase title font-weight-bold mb-1 text-left">
                                        {{item.title}}
                                    </h3>
                                    <v-divider class="primary mr-auto mb-6" style="max-width: 28px;"></v-divider>

                                    <p class="base-body body-1 grey&#45;&#45;text text&#45;&#45;darken-1 text-left mb-6">
                                        {{item.content}}
                                    </p>
                                </v-col>
                                <v-col class="col-2">
                                    <div class="display-3 grey&#45;&#45;text text&#45;&#45;lighten-4 font-weight-bold pr-8">
                                        {{item.number}}
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </section>-->
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                items: [
                    {
                        title: "el saber",
                        content: "Me inspira el saber de las mujeres, estoy comprometida con su auto-valoración.",
                        number: "01"
                    },
                    {
                        title: " el empoderamiento",
                        content: "Confiero pasión en el empoderamiento de cada mujer, con objetividad y claridad.",
                        number: "02"
                    },
                    {
                        title: "despertar conciencias",
                        content: " Mi travesía personal refleja una combinación de saberes cotidianos, profesionales y sociales, inspirados en la necesidad de despertar conciencias de mujeres.",
                        number: "03"
                    }]
            }
        }
    };
</script>

<style lang="scss" scoped></style>
