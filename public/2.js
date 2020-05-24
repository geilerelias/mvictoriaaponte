(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/AboutMe.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/AboutMe.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_pdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-pdf */ "./node_modules/vue-pdf/src/vuePdfNoSss.vue");
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

var loadingTask = vue_pdf__WEBPACK_IMPORTED_MODULE_0__["default"].createLoadingTask('/document/AUTOBIOGRAFÍA-TRAVESÍA%20PERSONAL%20DESDE%20MI%20CONCIENCIA.pdf');
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pdf: vue_pdf__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    this.src.then(function (pdf) {
      _this.numPages = pdf.numPages;
    });
  },
  data: function data() {
    return {
      src: loadingTask,
      numPages: undefined,
      links: [{
        text: 'Inicio',
        disabled: false,
        href: '/'
      }, {
        text: 'Quien soy',
        disabled: true,
        href: '/about-me'
      }],
      dialog: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/AboutMe.vue?vue&type=template&id=31f13d5f&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/AboutMe.vue?vue&type=template&id=31f13d5f&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "section",
        [
          _c(
            "v-img",
            {
              attrs: {
                src: "images/header/creciendo-juntas.jpg",
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
                            "\n                        ¿Quíen Soy?\n                    "
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
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { staticClass: "col-md-6 col-12" },
                [
                  _c("h2", { staticClass: "display-1 " }, [
                    _vm._v(
                      "\n                    Mi nombre es Maria Victoria Aponte.\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("h2", { staticClass: "headline mb-4 " }, [
                    _vm._v(
                      "\n                    Soy Magister en Investigación Social,\n                    Especialista en Administración y docencia universitaria.\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "subtitle-1 text-justify" }, [
                    _vm._v(
                      "\n                    Me he desempeñado, desde lo social como profesional universitario,\n                    en oficinas de la mujer a nivel municipal y como personal directivo en el orden departamental.\n                    De igual manera, me desempeñé, cómo directora de Bienestar Universitario. Así mismo, fui\n                    directora de\n                    la Asociación de Trabajadores Sociales del Cesar y directora de una Fundación sin ánimo de lucro\n                    que\n                    trabajaba por los jóvenes. Actualmente soy Docente universitaria.\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-5 text-justify" }, [
                    _vm._v(
                      " Mi trayectoria profesional, se ha\n                    caracterizado por investigar problemáticas de la mujer, y la violencia de género,\n                    la recuperación de la memoria entre otros, con el ánimo de ser referente de\n                    cambio para las mujeres a través de un diálogo de saberes que permita\n                    transformarla de la subordinación al protagonismo en el contexto\n                    socio-cultural.\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "px-5  primary--text",
                      attrs: { outlined: "", text: "", to: "/contact" }
                    },
                    [
                      _vm._v(
                        "\n                    Contáctame\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "col-md-5 offset-md-1 col-12" },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-img", {
                        attrs: { src: "images/quien-soy/quien-soy.jpg" }
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
      _c("section", [
        _c(
          "div",
          { staticClass: "base-section-heading text-center mb-12" },
          [
            _c(
              "v-avatar",
              {
                staticClass: "d-inline-flex mb-4 primary",
                attrs: { size: "56" }
              },
              [
                _c("v-icon", { attrs: { size: "28", dark: "" } }, [
                  _vm._v("\n                    mdi-vuetify\n                ")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("v-divider", {
              staticClass: "grey lighten-2 mx-auto mb-6",
              staticStyle: { "max-width": "28px" }
            }),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass:
                  "mb-10 grey--text text--darken-1 base-body body-1 mx-auto text-center "
              },
              [
                _vm._v(
                  "\n                Este es un escrito en el que hablo acerca de mis travesías personales y mi experiencia como mujer\n                empoderada\n            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                on: {
                  click: function($event) {
                    _vm.dialog = !_vm.dialog
                  }
                }
              },
              [_vm._v("\n                ver documento\n            ")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition"
              },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "primary" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("mdi-close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [
                        _vm._v("TRAVESÍA PERSONAL DESDE MI CONCIENCIA")
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-toolbar-items",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { dark: "", text: "" },
                              on: {
                                click: function($event) {
                                  _vm.dialog = false
                                }
                              }
                            },
                            [_vm._v("Cerrar")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c(
                      "section",
                      [
                        _c(
                          "v-container",
                          _vm._l(_vm.numPages, function(i) {
                            return _c(
                              "v-card",
                              { key: i, staticClass: "my-2" },
                              [
                                _c("pdf", {
                                  staticStyle: {
                                    display: "inline-block",
                                    width: "100%"
                                  },
                                  attrs: { src: _vm.src, page: i }
                                })
                              ],
                              1
                            )
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ])
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
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h1",
      {
        staticClass: "text-uppercase headline font-weight-bold mb-2 text-center"
      },
      [
        _vm._v(
          "\n                TRAVESÍA PERSONAL DESDE MI CONCIENCIA\n                "
        ),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "text-lowercase caption" }, [
          _vm._v("Autobiografía")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/AboutMe.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/pages/AboutMe.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutMe_vue_vue_type_template_id_31f13d5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutMe.vue?vue&type=template&id=31f13d5f&scoped=true& */ "./resources/js/components/pages/AboutMe.vue?vue&type=template&id=31f13d5f&scoped=true&");
/* harmony import */ var _AboutMe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutMe.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/AboutMe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AboutMe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutMe_vue_vue_type_template_id_31f13d5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutMe_vue_vue_type_template_id_31f13d5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31f13d5f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/AboutMe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/AboutMe.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pages/AboutMe.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutMe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/AboutMe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/AboutMe.vue?vue&type=template&id=31f13d5f&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/AboutMe.vue?vue&type=template&id=31f13d5f&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_template_id_31f13d5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutMe.vue?vue&type=template&id=31f13d5f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/AboutMe.vue?vue&type=template&id=31f13d5f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_template_id_31f13d5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_template_id_31f13d5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);