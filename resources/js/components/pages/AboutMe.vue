<template>
    <div>
        <section>
            <v-img
                src="https://daedal-free.zeroskillz.now.sh/img/about.3946684e.jpg"
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
        <section id="about-our-product" style="padding: 96px 0px;">
            <div class="base-section-heading text-center mb-12">
                <div class="base-avatar d-inline-flex mb-4"><!---->
                    <div class="v-avatar base-avatar__avatar primary"
                         style="height: 56px; min-width: 56px; width: 56px;"><i aria-hidden="true"
                                                                                class="v-icon notranslate mdi mdi-vuetify theme--dark"
                                                                                dark="true"
                                                                                style="font-size: 28px;"></i></div>
                </div><!----><h1 class="text-uppercase headline font-weight-bold mb-2 text-center"> About our
                Product </h1>
                <div class="v-responsive base-divider grey lighten-2 mx-auto mb-6" style="max-width: 28px;">
                    <div class="v-responsive__content">
                        <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light">
                    </div>
                </div><!----></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-12">
                        <div class="container pa-0">
                            <div class="row no-gutters justify-start"><!---->
                                <div class="col col-9">
                                    <div class="body-2 font-weight-regular mb-1 text-left grey--text"> Best
                                        Productivity
                                    </div>
                                    <h3 class="text-uppercase title font-weight-bold mb-1 text-left"> Grow your
                                        Revenue </h3>
                                    <div class="v-responsive base-divider primary mr-auto mb-6"
                                         style="max-width: 28px;">
                                        <div class="v-responsive__content">
                                            <hr role="separator" aria-orientation="horizontal"
                                                class="v-divider theme--light">
                                        </div>
                                    </div>
                                    <p class="base-body body-1 grey--text text--darken-1 text-left mb-6">
                                    <div>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut
                                        dolorum fuga.harum quidem rerum facilis estexpedita distinctio.
                                    </div>
                                    </p></div>
                                <div class="col col-2">
                                    <div class="display-3 grey--text text--lighten-4 font-weight-bold pr-8">01</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="container pa-0">
                            <div class="row no-gutters justify-start"><!---->
                                <div class="col col-9">
                                    <div class="body-2 font-weight-regular mb-1 text-left grey--text"> Special Offers
                                    </div>
                                    <h3 class="text-uppercase title font-weight-bold mb-1 text-left"> Affordable
                                        Prices </h3>
                                    <div class="v-responsive base-divider primary mr-auto mb-6"
                                         style="max-width: 28px;">
                                        <div class="v-responsive__content">
                                            <hr role="separator" aria-orientation="horizontal"
                                                class="v-divider theme--light">
                                        </div>
                                    </div>
                                    <p class="base-body body-1 grey--text text--darken-1 text-left mb-6">
                                        Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut
                                        dolorum fuga.harum quidem rerum facilis estexpedita distinctio.

                                    </p>
                                 </div>
                                <div class="col col-2">
                                    <div class="display-3 grey--text text--lighten-4 font-weight-bold pr-8">02</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="container pa-0">
                            <div class="row no-gutters justify-start"><!---->
                                <div class="col col-9">
                                    <div class="body-2 font-weight-regular mb-1 text-left grey--text"> Income Flow</div>
                                    <h3 class="text-uppercase title font-weight-bold mb-1 text-left"> Target
                                        Setting </h3>
                                    <div class="v-responsive base-divider primary mr-auto mb-6"
                                         style="max-width: 28px;">
                                        <div class="v-responsive__content">
                                            <hr role="separator" aria-orientation="horizontal"
                                                class="v-divider theme--light">
                                        </div>
                                    </div>
                                    <p class="base-body body-1 grey--text text--darken-1 text-left mb-6">
                                        Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut
                                        dolorum fuga.harum quidem rerum facilis estexpedita distinctio.
                                    </p>
                                </div>

                                <div class="col col-2">
                                    <div class="display-3 grey--text text--lighten-4 font-weight-bold pr-8">03</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                    text: 'Quien soy',
                    disabled: true,
                    href: '/about-me',
                },
            ],
        }),
    };
</script>

<style lang="scss" scoped></style>
