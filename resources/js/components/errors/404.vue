<template>
    <div>
        <head>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <title>Not Found</title>
            <!-- Fonts -->
            <link rel="dns-prefetch" href="//fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css?family=Nunito"
                rel="stylesheet"
            />
        </head>

        <body>
            <v-app>
                <header-app-component></header-app-component>
                <drawer-app-component></drawer-app-component>
                <v-content style="min-height:100vh">
                    <v-container>
                        <div class="flex-center position-ref full-height">
                            <div class="code">
                                404
                            </div>

                            <div class="message" style="padding: 10px;">
                                Not Found
                            </div>
                        </div>
                    </v-container>
                </v-content>
            </v-app>
        </body>
    </div>
</template>

<script>
export default {};
</script>

<style>
html,
body {
    background-color: #fff;
    color: #636b6f;
    font-family: "Nunito", sans-serif;
    font-weight: 100;
    height: 100vh;
    margin: 0;
}

.full-height {
    height: 100vh;
}

.flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
}

.position-ref {
    position: relative;
}

.code {
    border-right: 2px solid;
    font-size: 26px;
    padding: 0 15px 0 15px;
    text-align: center;
}

.message {
    font-size: 18px;
    text-align: center;
}
</style>
