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

        <section>
            <v-container fluid>
                <v-row justify="center">
                    <v-subheader>Today</v-subheader>

                    <v-expansion-panels popout>
                        <v-expansion-panel
                            v-for="(message, i) in messages"
                            :key="i"
                            hide-actions
                        >
                            <v-expansion-panel-header>
                                <v-row
                                    align="center"
                                    class="spacer"
                                    no-gutters
                                >
                                    <v-col
                                        cols="4"
                                        sm="2"
                                        md="1"
                                    >
                                        <v-avatar
                                            size="36px"
                                        >
                                            <img
                                                v-if="message.avatar"
                                                alt="Avatar"
                                                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                            >
                                            <v-icon
                                                v-else
                                                :color="message.color"
                                                v-text="message.icon"
                                            ></v-icon>
                                        </v-avatar>
                                    </v-col>

                                    <v-col
                                        class="hidden-xs-only"
                                        sm="5"
                                        md="3"
                                    >
                                        <strong v-html="message.name"></strong>
                                        <span
                                            v-if="message.total"
                                            class="grey--text"
                                        >
                  &nbsp;({{ message.total }})
                </span>
                                    </v-col>

                                    <v-col
                                        class="text-no-wrap"
                                        cols="5"
                                        sm="3"
                                    >
                                        <v-chip
                                            v-if="message.new"
                                            :color="`${message.color} lighten-4`"
                                            class="ml-0 mr-2 black--text"
                                            label
                                            small
                                        >
                                            {{ message.new }} new
                                        </v-chip>
                                        <strong v-html="message.title"></strong>
                                    </v-col>

                                    <v-col
                                        v-if="message.excerpt"
                                        class="grey--text text-truncate hidden-sm-and-down"
                                    >
                                        &mdash;
                                        {{ message.excerpt }}
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <v-divider></v-divider>
                                <v-card-text v-text="lorem"></v-card-text>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
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
                    text: 'Quien soy',
                    disabled: true,
                    href: '/about-me',
                },
            ],
            messages: [
                {
                    avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                    name: 'John Leider',
                    title: 'Welcome to Vuetify.js!',
                    excerpt: 'Thank you for joining our community...',
                },
                {
                    color: 'red',
                    icon: 'people',
                    name: 'Social',
                    new: 1,
                    total: 3,
                    title: 'Twitter',
                },
                {
                    color: 'teal',
                    icon: 'local_offer',
                    name: 'Promos',
                    new: 2,
                    total: 4,
                    title: 'Shop your way',
                    exceprt: 'New deals available, Join Today',
                },
            ],
            lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
        }),

    };
</script>

<style lang="scss" scoped></style>
