<template>
    <div>
        <section>
            <v-img
                class="white--text"
                height="95vh"
                :src="$vuetify.breakpoint.smAndUp?'images/imagen principal maria victoria.jpg':'images/imagen principal maria victoria movil.jpg'"
                :gradient="$vuetify.breakpoint.smAndUp?'to right, rgba(0, 0, 0, 0.7) 40%, rgba(68, 12, 64, 0) 70%':'to top right, rgba(0, 0, 0, 0.7) 10%, rgba(68, 12, 64, 0) 70%'"
            >
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular indeterminate color="grey lighten-5" size="64"></v-progress-circular>
                    </v-row>
                </template>
                <v-container class="fill-height px-4 py-12">
                    <v-flex
                        class="d-flex align-end"
                        style="height: 100%; max-width: 700px; width: 100%;"
                    >

                        <v-content>
                            <h1
                                class="font-weight-black mb-4 text-left white--text text-uppercase"
                                :class="$vuetify.breakpoint.smAndUp?'display-2':'display-1'"
                            >
                                Soy
                            </h1>
                            <h1
                                class=" font-weight-black mb-4 text-left white--text text-uppercase"
                                :class="$vuetify.breakpoint.smAndUp?'display-2':'display-1'"
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
            <v-container class="base-section-heading text-center mb-12">
                <h1
                    class="text-uppercase headline font-weight-bold mb-2 text-center">
                    Mi motivación
                </h1>
                <v-divider class=" primary mx-auto mb-6" style="max-width: 28px;"></v-divider>
                <p class="body-1 mx-auto grey--text text--darken-1 mb-10 text-left"
                   style="max-width: 700px;">
                    Me inspira el saber de las mujeres,
                    estoy comprometida con su autovaloración. Confiero pasión en el empoderamiento de cada mujer, con
                    objetividad y claridad. Mi travesía personal refleja una combinación de saberes cotidianos,
                    profesionales y sociales, inspirados en la necesidad de despertar conciencias de mujeres.
                </p>
            </v-container>
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
                <v-divider class="primary mx-auto mb-6" style="max-width: 28px;">

                </v-divider>

                <p class="base-body body-1 mx-auto grey--text text--darken-1 text-center mb-10"
                   style="max-width: 700px;">
                    Estos son algunos de los eventos academico internacionales y nacionales de los que he participado,
                    como docente investigadora
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
        <!--<section>
            <v-container>
                <v-row>
                    <v-col v-for="(item,i) in services" :key="i">
                        <div class="pt-2 mb-0 d-flex justify-center align-content-center align-center">
                            <div
                                class="base-avatar d-inline-flex mb-3 "
                                style="margin-left:-10"
                            >
                                <v-avatar tile class="mt-6" color="grey" size="64" :aspect-ratio="16/9">
                                    <v-img :src="item.image" :aspect-ratio="16/9"/>
                                </v-avatar>
                                <v-img :src="item.image" :aspect-ratio="16/9"/>
                            </div>
                            <div class="ml-3">
                                <h3
                                    class="text-uppercase font-weight-bold subtitle-2 mb-1 text-left black&#45;&#45;text"
                                >
                                    {{ item.title }}
                                </h3>
                            </div>
                        </div>
                    </v-col>


                </v-row>

            </v-container>
        </section>-->

        <section class="mt-12">
            <div class="text-center ">
                <h1 class="text-uppercase headline font-weight-bold mb-2 text-center">
                    Nuestros Servicios
                </h1>
                <v-divider class="primary mx-auto " style="max-width: 28px;">
                </v-divider>
            </div>
            <div class="d-flex justify-center align-center">
                <v-slide-group
                    v-model="model"
                    class="py-4"
                    :show-arrows="showArrows"
                >
                    <v-slide-item
                        v-for="(item, h) in services"
                        :key="h"
                        v-slot:default="{ active, toggle }"
                    >
                        <div class="text-center">
                            <v-avatar size="100" class="mx-6">
                                <v-card flat
                                        height="100"
                                        width="100"
                                        @click="toggle"
                                        href="/services"
                                >

                                    <v-row
                                        class="fill-height"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-img @click="" :src="item.image"
                                               :gradient="active?'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)':''"/>

                                    </v-row>

                                </v-card>

                            </v-avatar>
                            <div class="font-weight-light subtitle-2 text-uppercase d-block">
                                {{item.title}}
                            </div>
                        </div>
                    </v-slide-item>
                </v-slide-group>
            </div>
        </section>
        <template>
            <div class="text-center">
                <v-dialog
                    v-model="dialog"
                    hide-overlay
                    persistent
                    width="300"
                >
                    <v-card
                        color="primary"
                        dark
                    >
                        <v-card-text>
                            Please stand by
                            <v-progress-linear
                                indeterminate
                                color="white"
                                class="mb-0"
                            ></v-progress-linear>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </div>
        </template>


    </div>
</template>

<script>
    export default {
        mounted() {
            this.dialog = false;
        },
        data: function () {
            return {
                dialog: true,
                model: null,
                showArrows: true,
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
                    }],
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
                services: [
                    {
                        image: 'images/servicios/capacitacion.jpg',
                        title: 'CAPACITACIÓN',
                        content: 'Son acciones educativas de carácter no formal, que incluye mensajes inspiradores que tienen un alto contenido de motivación para favorecer el empoderamiento de las mujeres, buscando el recorrido de un camino que genera enseñanzas plenas de ambiciones para mujeres mostrando el manejo de emociones y saberes que conduzcan al conocimiento de si mismas, y fortalezcan su autoestima y autovaloración para el logro de sueños.<br>' +
                            '<br>' +
                            'Ejes temáticos: <br>' +
                            '<br>' +
                            '•\tEstereotipos culturales e identidad femenina<br>' +
                            '•\tPrácticas sexistas y violencia de género<br>' +
                            '•\tEmprendimiento y necesidad de cambio de la mujer<br>' +
                            '•\tManejo de los miedos y las emociones<br>' +
                            '•\tAutovaloración femenina <br>' +
                            '•\tSentido de vida femenino<br>' +
                            '•\tSororidad, y círculos de poder<br>' +
                            '•\tPromoción de la salud<br>' +
                            '•\tDerechos de la mujer<br>' +
                            '•\tActividad física y ejercicios<br>' +
                            '•\tLiderazgo y motivación<br>' +
                            '•\tPersonalidad, imagen y autoimagen<br>' +
                            '•\tAdecuación de indumentaria y maquillaje básico<br>' +
                            '•\tElaboración de adornos con material Reciclable.<br>'
                    },
                    {
                        image: 'images/servicios/accesorias.jpg',
                        title: 'ASESORÍAS',
                        content: 'Con el fin de que las mujeres vean la vida de otra manera, es necesario que obtengan un marco empírico, dado desde la revisión de estudios sobre el maltrato contra las mujeres y testimonios de mujeres que experimentan la problemática de la violencia de género, para que ellas aprendan a tomar decisiones, que propicien el entendimiento de su propósito existencial, con temas que empoderen a las mujeres, como el manejo de los miedos, y la lucha por lograr sus sueños, desde el recorrido de sus emociones, y la autovaloración. <br>' +
                            '<br>' +
                            'Estas acciones, serán desarrolladas desde la mediación de la estrategia metodológica virtual, consolidada a través del diseño y desarrollo de la página Web de SOE, con productos encaminados al empoderamiento femenino.<br>' +
                            '<br>' +
                            'Ejes temáticos:<br>' +
                            '<br>' +
                            '•\tEmpoderamiento femenino: motivación, liderazgo, estereotipos culturales, manejo de prácticas sexistas, elaboración de propuestas para creación de redes, o círculos de poder, etc..<br>' +
                            '•\tEmprendimiento de la mujer: iniciativas de negocios, propuestas creativas micro empresariales, manejo contable y de finanzas.<br>' +
                            '•\tAsesorías legales de la mujer: ejercicio y legitimación de derechos, políticas estatales, cuota alimentaria, protección de bienes. <br>' +
                            '•\tAsesorías psicológicas: personalidad, autoestima, autovaloración y armonía.<br>' +
                            '•\tPromoción de la salud y prevención de enfermedades: estilos de vida saludables, bienestar del cuerpo, de la mente y salud colectiva.<br>' +
                            '•\tAcondicionamiento físico: guías de ejercicios básicos, planes de entrenamiento físico, relajación y orientación nutricional.<br>' +
                            '•\tAsesoría de imagen: orientación en maquillaje básico, modas y peinados<br>' +
                            '•\tOrientación espiritual: crecimiento en el discernimiento de la palabra de Dios.<br>'
                    },
                    {
                        image: 'images/servicios/investigacion.jpg',
                        title: 'INVESTIGACIÓN',
                        content: 'Se refiere a la actividad productora de nuevas ideas de las mujeres, teniendo como punto de partida, las indagaciones y exploraciones sobre la trayectoria de sus vivencias en todas las dimensiones de su ser, desde la infancia, la adolescencia, la juventud y la adultez. <br>' +
                            '<br>' +
                            'De igual manera para intervenir esta realidad, se requiere de estrategias valiosas, tales como:  los testimonios y las historias de vida de mujeres, que conjuntamente con la teoría, permiten la comprensión de sus problemas, para ahondar la vida cotidiana, sus miedos, sus sueños, las relaciones de pareja, las pautas de crianza de los hijos, los estereotipos culturales, las acciones comunitarias, y la diversidad cultural. <br>' +
                            '<br>' +
                            'Lo anterior, con el fin de conocer todo acerca de las relaciones entre los seres que hacen parte de la sociedad, para hacerle comprender a las mujeres que deben evitar desbordar sus pasiones, y saber manejar sus emociones. <br>'
                    },
                    {
                        image: 'images/servicios/circulo-de-poder.jpg',
                        title: 'CÍRCULOS DE PODER',
                        content: 'Implica la incorporación de vínculos entre mujeres, buscando la sororidad y el manejo de la escucha, así como el valor de la interacción entre las mujeres, la búsqueda de la autovaloración y el reconocimiento entre ellas, es un disparador de intercambio de conocimientos y vivencias que genera aprendizaje. <br>' +
                            '<br>' +
                            'La interacción entre mujeres, incorpora la mirada que le devuelven las otras mujeres, porque el poder femenino le permite a la mujer mirarse a sí misma de otra manera, porque son afines en la misión existencial que como mujeres van incorporando a su esencia femenina y la autovaloración que van ganando conjuntamente, le permite reconocerse en la diferencia y valorarse. Además es importante ver en otras mujeres el modelo de valentía, de superación, de mujeres empoderadas. <br>'
                    },
                    {
                        image: 'images/servicios/cohaching.jpg',
                        title: 'COACHING',
                        content: 'Importa, la búsqueda de un estilo de vida saludable, la trascendencia de una vida que deje huellas fuera del hogar de la mujer, para buscar la transformación de la subordinación al protagonismo, permitiendo que sus actuaciones le den paso a la lógica, a lo razonable, donde articulen el pensar, el sentir y el actuar, con el fin de hacer aportes valiosos para la autovaloración femenina. <br>' +
                            'Es claro que podemos reinventarnos, y establecer nuevas rutas, que nos permita preguntarnos, <br>' +
                            '    <br>' +
                            'Implica preguntarse:<br>' +
                            '¿Cómo se hace una mujer? ¿Más aún cómo se hace una mujer para el mundo de hoy? ¿cómo podríamos generar en nuestras mentes la objetividad? ¿Cómo socializar, las notas inspiradoras que existen para aprender a conocernos?<br>' +
                            '¿Será que les puedo sugerir a las mujeres, acciones desde mis propias experiencias? ¿funcionará si les expreso que existen mil formas de aprender a entender los llamados de su feminidad?  será más práctico utilizar el arte de hablar con sutileza, para que ellas cuenten sus vivencias, interpretando su significado y dándole sentido a lo que han vivido?<br>'
                    }]
            }
        }
    };
</script>

<style lang="scss" scoped>


</style>
