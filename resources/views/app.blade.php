<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport"
              content="width=device-width, initial-scale=1">

        <title>Soy Maria Victoria Aponte</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600"
              rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
        <!-- Styles -->
        <link href="{{ mix('css/app.css') }}"
              rel="stylesheet">


    </head>

    <body>
        <div id="app">
            <vue-app></vue-app>
        </div>
        <script src="{{ mix('js/app.js') }}"></script>

    </body>

</html>
