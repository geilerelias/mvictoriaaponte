<template>
    <app-layout>
        <div>
            <section>
                <v-img
                    src="/src/images/header/programas_para_editar_videos.jpg"
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
                    <v-text-field
                        v-model="search"
                        rounded
                        append-icon="mdi-magnify"
                        class="mx-4 mb-4"
                        flat
                        hide-details
                        label="Buscar"
                        solo
                        outlined
                        dense
                    ></v-text-field>
                    <v-row class="justify-center">
                        <v-col
                            v-for="(item, i) in listaVideos"
                            :key="i"
                            class="d-flex child-flex"
                            cols="4"
                        >
                            <v-hover v-slot:default="{ hover }" open-delay="200">
                                <div class="justify-center text-center">
                                    <v-card
                                        style="border-radius: 0"
                                        :color="hover ? 'primary' : 'grey lighten-1'"
                                        :elevation="hover ? 16 : 2"
                                        class="mx-auto"
                                    >
                                        <v-img
                                            :src="item.thumbnail"
                                            :lazy-src="`https://picsum.photos/10/6?image=${i *5 +10}`"
                                            :aspect-ratio="16 / 9"
                                            :gradient="hover? 'to right top, rgba(101, 50, 77, 0.71), rgba(158, 67, 115, 0.83)': ''"
                                        >
                                            <transition name="fade">

                                                <div v-if="hover"
                                                     class="d-flex flex-column justify-center align-center fill-height">
                                                    <v-btn
                                                        fab
                                                        color="white"
                                                        v-if="hover"
                                                        @click="visualizar(item)"
                                                    >
                                                        <v-icon
                                                            color="primary"
                                                            size="48"
                                                        >
                                                            mdi-play
                                                        </v-icon>
                                                    </v-btn>

                                                    <p class="body-1 white--text text-uppercase font-weight-black mt-1">
                                                        {{ item.name }}
                                                    </p>
                                                </div>
                                            </transition>
                                        </v-img>
                                    </v-card>
                                    <p class="title primary--text"> {{ item.name }}</p>
                                </div>
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
                            <v-row>
                                <v-col cols="12" md="9">
                                    <v-card style="border-radius: 0">
                                        <v-responsive>
                                            <v-carousel
                                                height="auto"
                                                @change="cambioCarousel"
                                                v-model="model"
                                                hide-delimiters
                                            >
                                                <v-carousel-item
                                                    v-for="(item, n) in gallery"
                                                    :key="n"
                                                >
                                                    <v-sheet tile class="mb-0 pb-0 mx-auto">
                                                        <v-row
                                                            align="center"
                                                            justify="center"
                                                        >
                                                            <video
                                                                :poster="item.thumbnail"
                                                                :id='"player-"+n'
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
                                        </v-responsive>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-card style="border-radius: 0" class="grey lighten-3">
                                        <v-toolbar
                                            color="primary"
                                            dark
                                            dense
                                            flat
                                        >
                                            <v-toolbar-title>Lista de videos</v-toolbar-title>

                                        </v-toolbar>
                                        <v-responsive
                                            class="overflow-y-auto"
                                            max-height="450"
                                        >
                                            <v-responsive>
                                                <v-lazy
                                                    v-model="isActive"
                                                    :options="{threshold: .5 }"
                                                    min-height="200"
                                                    transition="fade-transition"
                                                >
                                                    <v-list>
                                                        <v-list-item-group color="primary" v-model="model">
                                                            <v-list-item v-for="(item, i) in gallery"
                                                                         :key="i"
                                                                         @click="cambioCarousel">
                                                                <v-list-item-content>
                                                                    <v-img
                                                                        max-height="100"
                                                                        max-width="100"
                                                                        :aspect-ratio="16 / 9"
                                                                        :src="item.thumbnail"
                                                                    ></v-img>
                                                                </v-list-item-content>
                                                                <v-list-item-content>
                                                                    <v-list-item-title
                                                                        v-text="item.name"></v-list-item-title>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </v-list-item-group>
                                                    </v-list>
                                                </v-lazy>
                                            </v-responsive>
                                        </v-responsive>
                                    </v-card>
                                </v-col>
                            </v-row>

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
    </app-layout>
</template>

<script>
import appLayout from "@/Layouts/AppLayout.vue";


export default {
    name: "Gallery",
    components: {
        appLayout
    },
    data: () => ({
        search: '',
        selected: [],
        isActive: false,
        dialog: false,
        colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
        model: 0,
        modelAux: 0,
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
                src: "thumbnail/Video 1. Presentación.mp4",
                thumbnail: "/src/videos/thumbnail/Video 1. Presentación.jpg",
                name: "Presentación"
            },
            {
                src: "thumbnail/Video 2. Miedos.mp4",
                thumbnail: "/src/videos/thumbnail/Video 2. Miedos.jpg",
                name: "Miedos"
            },
            {
                src: "thumbnail/Video 3. Mujer holistica.mp4",
                thumbnail: "/src/videos/thumbnail/Video 3. Mujer holistica.jpg",
                name: "Mujer holistica"
            },
            {
                src: "thumbnail/Video 4. Miedos Vs empoderamiento.mp4",
                thumbnail: "/src/videos/thumbnail/Video 4. Miedos Vs empoderamiento.jpg",
                name: "Miedos Vs empoderamiento"
            },
            {
                src: "thumbnail/Video 5. Cambiar paradigmas.mp4",
                thumbnail: "/src/videos/thumbnail/Video 5. Cambiar paradigmas.jpg",
                name: "Cambiar paradigmas"
            },
            {
                src: "thumbnail/Video 6. Estereotipos culturales.mp4",
                thumbnail: "/src/videos/thumbnail/Video 6. Estereotipos culturales.jpg",
                name: "Estereotipos culturales"
            },
            {
                src: "thumbnail/Video 7. Prácticas sexistas.mp4",
                thumbnail: "/src/videos/thumbnail/Video 7. Prácticas sexistas.jpg",
                name: "Prácticas sexistas"
            },
            {
                src: "thumbnail/Video 8. Quien soy.mp4",
                thumbnail: "/src/videos/thumbnail/Video 8. Quien soy.jpg",
                name: "Quien soy"
            },
            {
                src: "thumbnail/Video 9. Papel de la mujer en la sociedad.mp4",
                thumbnail:
                    "/src/videos/thumbnail/Video 9. Papel de la mujer en la sociedad.jpg",
                name: "Papel de la mujer en la sociedad"
            },
            {
                src: "thumbnail/Video 10. Conciencia y sueños.mp4",
                thumbnail: "/src/videos/thumbnail/Video 10. Conciencia y sueños.jpg",
                name: "Conciencia y sueños"
            }
        ]
    }),
    computed: {
        listaVideos() {
            const search = this.search.toLowerCase()

            if (!search) return this.gallery

            return this.gallery.filter(item => {
                const text = item.name.toLowerCase()

                return text.indexOf(search) > -1
            })
        },
        selections() {
            const selections = []

            for (const selection of this.selected) {
                selections.push(this.items[selection])
            }

            return selections
        },
    },
    mounted() {

    },
    methods: {
        visualizar(item) {
            this.modelAux =
                this.dialog = !this.dialog;
            this.model = this.gallery.indexOf(item);
            this.modelAux = this.model;
        },
        cambioCarousel() {
            console.log(this.model)
            this.pausarVideo(this.modelAux);
            this.modelAux = this.model;
        },
        pausarVideo(number) {
            const reproductor = document.getElementById("player-" + number);
            reproductor.pause();
        },
        close() {
            this.dialog = false;
            this.pausarVideo(this.model);
        }
    }
}
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
{
    transform: translateX(10px);
    opacity: 0;
}
</style>
