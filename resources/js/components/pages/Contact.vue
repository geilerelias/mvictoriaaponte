<template>
    <div>
        <section>
            <v-img
                src="images/header/contact-us.jpg"
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
                            Contacto
                        </h1>
                        <v-divider class="primary mx-auto mb-6 " style="max-width:28px"></v-divider>

                        <v-breadcrumbs class=" justify-center pa-0" dark :items="links"></v-breadcrumbs>
                    </v-col>
                </v-row>
            </v-img>

        </section>
        <section class="mt-12">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <h3
                            class="text-uppercase primary--text title font-weight-bold mb-1 text-left mb-4"
                        >
                            MANTENTE EN CONTACTO CON NOSOTROS
                        </h3>
                        <p
                            class="base-body body-1 grey--text text--darken-1 text-left mb-6 text-justify"
                        >
                            Si quieres saber mas de lo que hacemos y como podemos
                            ayudarte, no dudes en escribirnos a nuestros correos
                            electrónicos o llamar a cualquiera de los números
                            telefónicos que tenemos disponibles para ti. Para
                            nosotros es un placer poder servirte.
                        </p>

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
                                    color="primary"
                                    size="32"
                                    class="mt-6"
                                    v-text="item.icon"
                                />
                            </div>
                            <div class="ml-3">
                                <h3
                                    class="text-uppercase font-weight-black subtitle-2 mb-1 text-left primary--text"
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
                    <v-col cols="12" md="6">
                        <h3
                            class="text-uppercase title primary--text  font-weight-bold mb-1 text-left mb-4"
                        >
                            Envíanos un correo electrónico
                        </h3>

                        <v-form>
                            <div>
                                <div>
                                    <v-text-field
                                        v-model="message.name"
                                        label="Nombre"
                                        outlined
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="message.email"
                                        small
                                        label="Correo"
                                        outlined
                                        type="email"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="message.subject"
                                        outlined
                                        label="Tema"
                                    ></v-text-field>
                                    <v-textarea
                                        v-model="message.content"
                                        outlined
                                        label="Descripción o Mensaje"
                                    ></v-textarea>

                                    <v-btn
                                        :disabled="dialog"
                                        :loading="dialog"
                                        class="white--text"
                                        @click="enviar()"
                                        color="primary" outlined dark>
                                        Enviar
                                    </v-btn>
                                </div>
                            </div>
                        </v-form>
                    </v-col>
                </v-row>
            </v-container>
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
                    <v-card-text class="pa-4">
                        <p class="mb-2">Por favor espere</p>
                        <v-progress-linear
                            indeterminate
                            color="white"
                            class="mb-0"
                        ></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </section>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data: () => ({
            dialog: false,
            message: {
                name: '',
                email: '',
                subject: '',
                content: ''
            },
            links: [
                {
                    text: 'Inicio',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Contacto',
                    disabled: true,
                    href: '/contact',
                },
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
                    content: `+57 315 734 0385`
                },
                {
                    icon: "mdi-email",
                    name: "Correos",
                    content: `contacto@mvictoriaaponte.com<br/>contacto@soecolombia.com`
                }


            ]
        }),
        methods: {
            enviar() {
                this.dialog = true;

                if (this.message.name.trim() === '' || this.message.content.trim() === '') {
                    alert('Debes completar todos los campos antes de guardar');
                    return;
                }
                const messageNuevo = this.message;
                axios.post('/message', messageNuevo)
                    .then(response => {
                        if (response.status == 200) {
                            console.log(response)
                            console.log(response.data);
                            this.dialog = false;
                            this.message = {
                                name: '',
                                email: '',
                                subject: '',
                                content: ''
                            }
                            Swal.fire(
                                'Buen trabajo',
                                'Mensaje enviado con éxito!',
                                'success'
                            )
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!',
                                footer: '<a href>Why do I have this issue?</a>'
                            })
                            console.log(response.data);
                            this.dialog = false;
                        }

                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href>Why do I have this issue?</a>'
                        })
                        console.log(error);
                        this.dialog = false;
                    })
            }
        }
    };
</script>

<style lang="scss" scoped></style>
