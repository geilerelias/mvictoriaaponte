(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      drawer: false,
      links: [{
        path: "/",
        name: "Inicio"
      }, {
        path: "/about-me",
        name: "¿Quíen soy?"
      }, {
        path: "/events",
        name: "Eventos"
      }, {
        path: "/publications",
        name: "Publicaciones"
      }, {
        path: "/services",
        name: "Servicios"
      }, {
        path: "/gallery",
        name: "Galería"
      }, {
        path: "/contact",
        name: "Contacto"
      }],
      icons: [{
        icon: "mdi-facebook",
        color: '#3b5998'
      }, {
        icon: "mdi-twitter",
        color: '#55acee'
      }, {
        icon: "mdi-google-plus",
        color: '#dd4b39'
      }, {
        icon: "mdi-linkedin",
        color: '#0082ca'
      }, {
        icon: "mdi-instagram",
        color: '#ec4a89'
      }],
      contact: [{
        icon: "mdi-map-marker-outline",
        name: "Dirección",
        content: "Cra 4-A # 54-52<br />Chapinero Alto, Bogot\xE1, Colombia"
      }, {
        icon: "mdi-cellphone",
        name: "Teléfonos",
        content: "+57 315 734 0385 "
      }, {
        icon: "mdi-email",
        name: "Correos",
        content: "contacto@mvictoriaaponte.com <br/> contacto@soecolombia.com "
      }],
      servicios: [{
        name: "Investigación",
        path: '/services#Investigación'
      }, {
        name: "Capacitación",
        path: '/services#Capacitación'
      }, {
        name: "Asesorías",
        path: '/services#Asesorías'
      }, {
        name: "Círculos de poder",
        path: '/services#Círculos de poder'
      }, {
        name: "Coaching",
        path: '/services#Coaching'
      }]
    };
  },
  created: function created() {
    this.$vuetify.theme.dark = false;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .v-btn--active {\n     background-color: white;\n    border-bottom: none !important;\n}\n.v-btn--active.v-btn--router > span {\n    transition: all 0.2s ease;\n    border-bottom: 2px solid white;\n    padding-bottom: 4px;\n    padding: 10px 0;\n    font-weight: bold;\n}\n\n.v-btn--router > span:hover {\n    transition: all 0.2s ease;\n    color: #7a0049;\n    padding: 10px 0;\n    font-weight: bold;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=template&id=e245f756&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout.vue?vue&type=template&id=e245f756& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { app: "", temporary: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-item",
                { attrs: { link: "" } },
                [
                  _c(
                    "v-list-item-action",
                    [_c("v-icon", [_vm._v("mdi-view-dashboard")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v("Dashboard")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { attrs: { link: "" } },
                [
                  _c(
                    "v-list-item-action",
                    [_c("v-icon", [_vm._v("mdi-settings")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v("Settings")])],
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
        "v-app-bar",
        {
          staticClass: "primary white--text",
          attrs: { app: "", "clipped-left": "", dense: "" }
        },
        [
          _c("v-app-bar-nav-icon", {
            attrs: { color: "white" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c("v-toolbar-title", [
            _vm._v("\n            Soy Maria Victoria Aponte\n        ")
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-toolbar-items",
            _vm._l(_vm.links, function(link) {
              return _c(
                "v-btn",
                {
                  key: link.name,
                  staticClass: "white--text",
                  attrs: { dark: "", text: "", to: link.path }
                },
                [
                  _vm._v(
                    "\n                " + _vm._s(link.name) + "\n            "
                  )
                ]
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-content", [_c("router-view")], 1),
      _vm._v(" "),
      _c(
        "v-sheet",
        { attrs: { elevation: "12" } },
        [
          _c(
            "v-footer",
            { staticClass: "font-small mdb-color" },
            [
              _c(
                "v-container",
                {
                  staticClass: "text-center text-md-left ",
                  attrs: { fluid: "" }
                },
                [
                  _c(
                    "v-row",
                    {
                      staticClass: "text-center text-md-left mt-3 pb-3 ",
                      attrs: { color: "#1c2331" }
                    },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "col-md-5 col-lg-5 col-xl-3 mx-auto mt-3"
                        },
                        [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "text-uppercase subtitle-1 font-weight-bold mb-1 text-left primary--text"
                            },
                            [
                              _vm._v(
                                "\n                            Soy Maria Victoria Aponte\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-divider", {
                            staticClass: "primary mr-auto mb-6",
                            staticStyle: { "max-width": "70px" }
                          }),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                            Me inspira el saber de las mujeres,\n                            estoy comprometida con su auto-valoración. Confiero pasión en el empoderamiento de cada\n                            mujer, con\n                            objetividad y claridad. Mi travesía personal refleja una combinación de saberes\n                            cotidianos,\n                            profesionales y sociales, inspirados en la necesidad de despertar conciencias de\n                            mujeres.\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"
                        },
                        [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "text-uppercase subtitle-1 font-weight-bold mb-1 text-left primary--text"
                            },
                            [
                              _vm._v(
                                "\n                            Servicios\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-divider", {
                            staticClass: "primary mr-auto mb-2",
                            staticStyle: { "max-width": "28px" }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.servicios, function(item, i) {
                            return _c(
                              "div",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass:
                                      "mx-auto text-uppercase subtitle-2 mb-1 text-left black--text",
                                    attrs: {
                                      small: "",
                                      rounded: "",
                                      text: "",
                                      href: item.path
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(item.name) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"
                        },
                        [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "text-uppercase subtitle-1 font-weight-bold mb-1 text-left primary--text"
                            },
                            [
                              _vm._v(
                                "\n                            ENLACES ÚTILES\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-divider", {
                            staticClass: "primary mr-auto mb-2",
                            staticStyle: { "max-width": "28px" }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.links, function(item, i) {
                            return _c(
                              "div",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass:
                                      "mx-auto text-uppercase subtitle-2 mb-1 text-left black--text",
                                    attrs: {
                                      small: "",
                                      rounded: "",
                                      text: "",
                                      to: item.path
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(item.name) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"
                        },
                        [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "text-uppercase subtitle-1 font-weight-bold mb-1 text-left primary--text"
                            },
                            [
                              _vm._v(
                                "\n                            Contáctame\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-divider", {
                            staticClass: "primary mr-auto mb-2",
                            staticStyle: { "max-width": "28px" }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.contact, function(item) {
                            return _c(
                              "div",
                              {
                                key: item.name,
                                staticClass:
                                  "pt-2 mb-0 d-flex justify-start align-content-start align-start"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "base-avatar d-inline-flex mb-3 ",
                                    staticStyle: { "margin-left": "-10" }
                                  },
                                  [
                                    _c("v-icon", {
                                      staticClass: "mt-6",
                                      attrs: { color: "grey", size: "32" },
                                      domProps: {
                                        textContent: _vm._s(item.icon)
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "ml-3" }, [
                                  _c(
                                    "h3",
                                    {
                                      staticClass:
                                        "text-uppercase font-weight-bold subtitle-2 mb-1 text-left black--text"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(item.name) +
                                          "\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "base-body body-1 mx-auto  text--lighten-1 text-left mb-0"
                                    },
                                    [
                                      _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(item.content)
                                        }
                                      })
                                    ]
                                  )
                                ])
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "d-flex align-items-center" },
                    [
                      _c("v-col", { staticClass: "col-md-7 col-lg-8" }, [
                        _c("p", { staticClass: "text-center text-md-left" }, [
                          _vm._v(
                            "© 2020 Copyright:\n                            "
                          ),
                          _c("a", { attrs: { href: "" } }, [
                            _c("strong", [_vm._v(" mvictoriaaponte.com")])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "col-md-5 col-lg-4 ml-lg-0" },
                        _vm._l(_vm.icons, function(item) {
                          return _c(
                            "v-btn",
                            {
                              key: item.icon,
                              staticClass: "mx-4",
                              attrs: { color: item.color, icon: "" }
                            },
                            [
                              _c(
                                "v-icon",
                                { attrs: { size: "32px", dark: "" } },
                                [_vm._v(_vm._s(item.icon))]
                              )
                            ],
                            1
                          )
                        }),
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
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Layout.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Layout.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=e245f756& */ "./resources/js/components/Layout.vue?vue&type=template&id=e245f756&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Layout.vue?vue&type=template&id=e245f756&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=template&id=e245f756& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=e245f756& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=template&id=e245f756&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);