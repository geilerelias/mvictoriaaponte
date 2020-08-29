(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Events.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Events.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      eventos: [{
        image: 'images/eventos/X CONGRESO ARGENTINO DE SALUD MENTAL.jpg',
        title: 'X CONGRESO ARGENTINO DE\n' + 'SALUD MENTAL',
        location: 'Buenos Aires, agosto\n' + '2016',
        content: '“Memorias de violencia de género de\n' + 'enfermeras y enfermeros en el ámbito\n' + 'laboral de la salud”.'
      }, {
        image: 'images/eventos/VII Simposio Internacional de Investigaciones.jpg',
        title: 'VII Simposio Internacional de Investigaciones, VIII Nacional Y XIII Premio a la Investigación',
        location: 'Valledupar, Octubre 2017.',
        content: '“Significado de memorias de\n' + 'violencia de género de mujeres adultas mayores\n' + 'de Bosa en Bogotá”.'
      }, {
        image: 'images/eventos/Una mirada al posconflicto desde lo jurídico, enfocada a la salud.jpg',
        title: 'Encuentro de semilleros de investigación',
        location: 'Universidad\n' + 'de Santander- UDES. Abril\n' + '2017',
        content: 'Una mirada al\n' + 'posconflicto desde lo\n' + 'jurídico, enfocada a la salud.'
      }, {
        image: 'images/eventos/10 Congreso Internacional de Salud Pública.png',
        title: '10 Congreso Internacional de Salud\n' + 'Pública',
        location: 'Universidad de Antioquia-Bogotá 2017.',
        content: 'Significados de memorias de violencia de género\n' + 'en mujeres adultas mayores de Bosa en la Ciudad\n' + 'de Bogotá'
      }, {
        image: 'images/eventos/Eventos internacionales Veracruz- México.jpg',
        title: 'VIII Congreso Internacional',
        location: 'Veracruz- México. 2018',
        content: '“Transversalidad y\n' + 'multidisciplinariedad en la\n' + 'Complejidad de los Problemas\n' + 'de Salud para el Desarrollo\n' + 'Humano Sustentable”'
      }],
      talleres: [{}],
      links: [{
        text: 'Inicio',
        disabled: false,
        href: '/'
      }, {
        text: 'Eventos',
        disabled: true,
        href: '/events'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Events.vue?vue&type=template&id=5f8650a2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Events.vue?vue&type=template&id=5f8650a2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      [
        _c(
          "v-img",
          {
            attrs: {
              src: "images/header/capacitacion 2.jpg",
              gradient: "to top, rgba(5, 11, 31, 0.8), rgba(5, 11, 31, 0.8)",
              color: "#45516b",
              flat: "",
              tile: "",
              height: "350",
              "max-width": "100%"
            }
          },
          [
            _c(
              "v-row",
              {
                staticClass:
                  "ma-0 fill-height text-center align-center justify-center"
              },
              [
                _c(
                  "v-col",
                  { staticClass: "col col-12" },
                  [
                    _c(
                      "h1",
                      {
                        staticClass:
                          "display-2 font-weight-500 mb-2 text-center white--text"
                      },
                      [
                        _vm._v(
                          "\n                        Eventos\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "primary mx-auto mb-6 ",
                      staticStyle: { "max-width": "28px" }
                    }),
                    _vm._v(" "),
                    _c("v-breadcrumbs", {
                      staticClass: " justify-center pa-0",
                      attrs: { dark: "", items: _vm.links }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "py-9 secondary lighten-4" }, [
      _c(
        "div",
        { staticClass: "text-center mb-12" },
        [
          _c(
            "v-avatar",
            { staticClass: "primary mb-4" },
            [
              _c("v-icon", { attrs: { size: "28", dark: "" } }, [
                _vm._v(
                  "\n                    mdi-calendar-multiple-check\n                "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "h1",
            {
              staticClass:
                "text-uppercase headline font-weight-bold mb-2 text-center"
            },
            [_vm._v("\n                Eventos académicos\n            ")]
          ),
          _vm._v(" "),
          _c("v-divider", {
            staticClass: "primary mx-auto mb-6",
            staticStyle: { "max-width": "28px" }
          }),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass:
                "base-body body-1 mx-auto grey--text text--darken-1 text-center mb-10",
              staticStyle: { "max-width": "700px" }
            },
            [
              _vm._v(
                "\n                Estos son algunos de los eventos internacionales y nacionales de los que he sido participe.\n            "
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "v-row",
            _vm._l(_vm.eventos, function(item) {
              return _c(
                "v-col",
                { key: item.title, staticClass: "col-md-6 col-12" },
                [
                  _c(
                    "div",
                    { staticClass: "pt-2 mb-8 d-flex" },
                    [
                      _c(
                        "v-avatar",
                        {
                          staticClass: "grey lighten-3 mb-3",
                          attrs: { size: "84" }
                        },
                        [_c("v-img", { attrs: { src: item.image } })],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-6" }, [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "text-uppercase title font-weight-bold mb-3 text-left"
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(item.title) +
                                "\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "base-body body-1 mx-auto grey--text text--darken-1 text-left mb-0",
                            staticStyle: { "max-width": "700px" }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(item.content) +
                                "\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "subtitle-2 mx-auto grey--text text--darken-1 text-left"
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(item.location) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
                    ],
                    1
                  )
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "py-9" }, [
      _c(
        "div",
        { staticClass: "text-center mb-12" },
        [
          _c(
            "v-avatar",
            { staticClass: "primary mb-4" },
            [
              _c("v-icon", { attrs: { size: "28", dark: "" } }, [
                _vm._v(
                  "\n                    mdi-calendar-multiple-check\n                "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "h1",
            {
              staticClass:
                "text-uppercase headline font-weight-bold mb-2 text-center"
            },
            [_vm._v("\n                Talleres y Conferencias\n            ")]
          ),
          _vm._v(" "),
          _c("v-divider", {
            staticClass: "primary mx-auto mb-6",
            staticStyle: { "max-width": "28px" }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Events.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/pages/Events.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Events_vue_vue_type_template_id_5f8650a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events.vue?vue&type=template&id=5f8650a2&scoped=true& */ "./resources/js/components/pages/Events.vue?vue&type=template&id=5f8650a2&scoped=true&");
/* harmony import */ var _Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Events.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Events_vue_vue_type_template_id_5f8650a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Events_vue_vue_type_template_id_5f8650a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f8650a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Events.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Events.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/pages/Events.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Events.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Events.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Events.vue?vue&type=template&id=5f8650a2&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pages/Events.vue?vue&type=template&id=5f8650a2&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_5f8650a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Events.vue?vue&type=template&id=5f8650a2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Events.vue?vue&type=template&id=5f8650a2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_5f8650a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_5f8650a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);