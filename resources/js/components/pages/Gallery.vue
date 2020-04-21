<template>
    <div>
        <section>
            <v-img
                src="https://imagenes.universia.net/gc/net/images/educacion/p/pr/pro/programas_para_editar_videos.jpg"
                gradient="to top, rgba(5, 11, 31, 0.8), rgba(5, 11, 31, 0.8)"
                color="#45516b"
                flat
                tile
                height="350"
                max-width="100%"
            >
                <v-row
                    class="ma-0 fill-height text-center align-center justify-center"
                >
                    <v-col class="col col-12">
                        <h1
                            class="display-2 font-weight-500 mb-2 text-center white--text"
                        >
                            Galería
                        </h1>
                        <v-divider
                            class="primary mx-auto mb-6 "
                            style="max-width:28px"
                        ></v-divider>
                        <v-breadcrumbs
                            class=" justify-center pa-0"
                            dark
                            :items="links"
                        ></v-breadcrumbs>
                    </v-col>
                </v-row>
            </v-img>
        </section>
        <section>
            <div class="base-section-heading text-center my-12">
                <v-avatar size="56" class="primary mb-4">
                    <v-icon dark size="28">
                        mdi-animation-play
                    </v-icon>
                </v-avatar>
                <h1
                    class="text-uppercase headline font-weight-bold mb-2 text-center"
                >
                    Galería de videos
                </h1>
                <v-divider
                    class="primary mx-auto mb-6 "
                    style="max-width:28px"
                ></v-divider>
            </div>
            <v-container>
                <v-row>
                    <v-col
                        v-for="(item, i) in gallery"
                        :key="i"
                        cols="12"
                        md="4"
                    >
                        <v-hover v-slot:default="{ hover }" open-delay="200">
                            <v-card
                                :color="hover ? 'primary' : 'grey lighten-1'"
                                :elevation="hover ? 16 : 2"
                                class="mx-auto"
                            >
                                <v-img
                                    :src="item.thumbnail"
                                    :lazy-src="
                                        `https://picsum.photos/10/6?image=${i *
                                            5 +
                                            10}`
                                    "
                                    :aspect-ratio="16 / 9"
                                    :gradient="
                                        hover
                                            ? 'to right top, rgba(101, 50, 77, 0.71), rgba(158, 67, 115, 0.83)'
                                            : ''
                                    "
                                >
                                    <v-scale-transition>
                                        <v-row
                                            v-if="hover"
                                            class="fill-height"
                                            align="center"
                                            justify="center"
                                        >
                                            <v-col>
                                                <v-row>
                                                    <v-col
                                                        cols="12"
                                                        class="text-center"
                                                    >
                                                        <v-btn
                                                            fab
                                                            color="white"
                                                            v-if="hover"
                                                            @click="
                                                                visualizar(item)
                                                            "
                                                        >
                                                            <v-icon
                                                                color="primary"
                                                                size="48"
                                                            >
                                                                mdi-play
                                                            </v-icon>
                                                        </v-btn>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        class="text-center lightbox white--text px-2 pb-2 fill-height"
                                                    >
                                                        <div
                                                            class="body-1 text-uppercase font-weight-black"
                                                        >
                                                            {{ item.name }}
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-scale-transition>
                                </v-img>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!--dialog-->
        <v-row justify="center">
            <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
            >
                <v-card>
                    <v-toolbar dark color="primary" dense>
                        <v-btn @click="close" dark icon>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Galería de videos</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark text @click="close">
                                cerrar
                            </v-btn
                            >
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-container>
                        <v-carousel
                            v-model="model"
                            hide-delimiters
                            style="max-width: 100%;max-height:600px;height: auto;"
                        >
                            <v-carousel-item
                                v-for="(item, n) in gallery"
                                :key="n"
                                :aspect-ratio="16 / 9"
                            >
                                <v-sheet tile class="mb-0 pb-0 mx-auto">
                                    <v-row
                                        class="fill-height"
                                        align="center"
                                        justify="center"
                                        :aspect-ratio="16 / 9"
                                    >
                                        <video
                                            :id='item.name'
                                            :aspect-ratio="16 / 9"
                                            ref="videoPlayer"
                                            autoplay
                                            controls
                                            class="mb-0 pb-0 mx-auto"
                                            style="max-width: 100%;max-height:500px;height: auto;"
                                        >
                                            <source
                                                :src="item.src"
                                                type="video/mp4"
                                            />
                                        </video>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                        <v-card-actions class="justify-space-between">
                            <v-sheet class="hidden-sm-and-down">
                                <v-slide-group
                                    v-model="model"
                                    class="pa-4 text-center mx-auto"
                                    :show-arrows="false"
                                    sle
                                >
                                    <v-slide-item
                                        v-for="(item, n) in gallery"
                                        :key="n"
                                        v-slot:default="{ active, toggle }"
                                    >
                                        <v-avatar
                                            :color="
                                                active
                                                    ? 'primary'
                                                    : 'grey lighten-1'
                                            "
                                            class="mx-1"
                                            width="100"
                                            @click="toggle"
                                            tile
                                        >
                                            <v-scale-transition>
                                                <v-img
                                                    contain
                                                    :src="item.thumbnail"
                                                    alt="image"
                                                    :gradient="
                                                        active
                                                            ? 'to bottom, rgba(158, 67, 115, 0.48), rgba(158, 67, 115, 0.58)'
                                                            : ''
                                                    "
                                                />
                                            </v-scale-transition>
                                        </v-avatar>
                                    </v-slide-item>
                                </v-slide-group>
                            </v-sheet>
                        </v-card-actions>
                    </v-container>
                </v-card>
            </v-dialog>
        </v-row>

    </div>
</template>

<script>

    export default {

        data: () => ({
            dialog: false,
            colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
            model: 0,
            links: [
                {
                    text: "Inicio",
                    disabled: false,
                    href: "/"
                },
                {
                    text: "Galería",
                    disabled: true,
                    href: "/gallery"
                }
            ],
            index: null,
            gallery: [
                {
                    src: "videos/Video 1. Presentación.mp4",
                    thumbnail: "videos/Video 1. Presentación.jpg",
                    name: "Presentación"
                },
                {
                    src: "videos/Video 2. Miedos.mp4",
                    thumbnail: "videos/Video 2. Miedos.jpg",
                    name: "Miedos"
                },
                {
                    src: "videos/Video 3. Mujer holistica.mp4",
                    thumbnail: "videos/Video 3. Mujer holistica.jpg",
                    name: "Mujer holistica"
                },
                {
                    src: "videos/Video 4. Miedos Vs empoderamiento.mp4",
                    thumbnail: "videos/Video 4. Miedos Vs empoderamiento.jpg",
                    name: "Miedos Vs empoderamiento"
                },
                {
                    src: "videos/Video 5. Cambiar paradigmas.mp4",
                    thumbnail: "videos/Video 5. Cambiar paradigmas.jpg",
                    name: "Cambiar paradigmas"
                },
                {
                    src: "videos/Video 6. Estereotipos culturales.mp4",
                    thumbnail: "videos/Video 6. Estereotipos culturales.jpg",
                    name: "Estereotipos culturales"
                },
                {
                    src: "videos/Video 7. Prácticas sexistas.mp4",
                    thumbnail: "videos/Video 7. Prácticas sexistas.jpg",
                    name: "Prácticas sexistas"
                },
                {
                    src: "videos/Video 8. Quien soy.mp4",
                    thumbnail: "videos/Video 8. Quien soy.jpg",
                    name: "Quien soy"
                },
                {
                    src: "videos/Video 9. Papel de la mujer en la sociedad.mp4",
                    thumbnail:
                        "videos/Video 9. Papel de la mujer en la sociedad.jpg",
                    name: "Papel de la mujer en la sociedad"
                },
                {
                    src: "videos/Video 10. Conciencia y sueños.mp4",
                    thumbnail: "videos/Video 10. Conciencia y sueños.jpg",
                    name: "Conciencia y sueños"
                }
            ]
        }),
        mounted() {

        },
        methods: {
            visualizar(item) {
                this.dialog = !this.dialog;
                this.model = this.gallery.indexOf(item);
            },
            close() {
                this.dialog = false;
                var reproductor = document.getElementById("player-" + this.model);
                reproductor.pause();
            }
        }
    };
</script>

<style lang="scss" scoped></style>
