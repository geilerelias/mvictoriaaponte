(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/AboutMe.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/AboutMe.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      links: [{
        text: 'Inicio',
        disabled: false,
        href: '/'
      }, {
        text: 'Quien soy',
        disabled: true,
        href: '/about-me'
      }]
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
  return _c("div", [
    _c(
      "section",
      [
        _c(
          "v-img",
          {
            attrs: {
              src:
                "https://daedal-free.zeroskillz.now.sh/img/about.3946684e.jpg",
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
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticStyle: { padding: "96px 0px" },
        attrs: { id: "about-our-product" }
      },
      [
        _c("div", { staticClass: "base-section-heading text-center mb-12" }, [
          _c("div", { staticClass: "base-avatar d-inline-flex mb-4" }, [
            _c(
              "div",
              {
                staticClass: "v-avatar base-avatar__avatar primary",
                staticStyle: {
                  height: "56px",
                  "min-width": "56px",
                  width: "56px"
                }
              },
              [
                _c("i", {
                  staticClass: "v-icon notranslate mdi mdi-vuetify theme--dark",
                  staticStyle: { "font-size": "28px" },
                  attrs: { "aria-hidden": "true", dark: "true" }
                })
              ]
            )
          ]),
          _c(
            "h1",
            {
              staticClass:
                "text-uppercase headline font-weight-bold mb-2 text-center"
            },
            [_vm._v(" About our\n            Product ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "v-responsive base-divider grey lighten-2 mx-auto mb-6",
              staticStyle: { "max-width": "28px" }
            },
            [
              _c("div", { staticClass: "v-responsive__content" }, [
                _c("hr", {
                  staticClass: "v-divider theme--light",
                  attrs: { role: "separator", "aria-orientation": "horizontal" }
                })
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4 col-12" }, [
              _c("div", { staticClass: "container pa-0" }, [
                _c("div", { staticClass: "row no-gutters justify-start" }, [
                  _c("div", { staticClass: "col col-9" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "body-2 font-weight-regular mb-1 text-left grey--text"
                      },
                      [
                        _vm._v(
                          " Best\n                                    Productivity\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass:
                          "text-uppercase title font-weight-bold mb-1 text-left"
                      },
                      [
                        _vm._v(
                          " Grow your\n                                    Revenue "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "v-responsive base-divider primary mr-auto mb-6",
                        staticStyle: { "max-width": "28px" }
                      },
                      [
                        _c("div", { staticClass: "v-responsive__content" }, [
                          _c("hr", {
                            staticClass: "v-divider theme--light",
                            attrs: {
                              role: "separator",
                              "aria-orientation": "horizontal"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", {
                      staticClass:
                        "base-body body-1 grey--text text--darken-1 text-left mb-6"
                    }),
                    _c("div", [
                      _vm._v(
                        "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut\n                                    dolorum fuga.harum quidem rerum facilis estexpedita distinctio.\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col col-2" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "display-3 grey--text text--lighten-4 font-weight-bold pr-8"
                      },
                      [_vm._v("01")]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12" }, [
              _c("div", { staticClass: "container pa-0" }, [
                _c("div", { staticClass: "row no-gutters justify-start" }, [
                  _c("div", { staticClass: "col col-9" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "body-2 font-weight-regular mb-1 text-left grey--text"
                      },
                      [
                        _vm._v(
                          " Special Offers\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass:
                          "text-uppercase title font-weight-bold mb-1 text-left"
                      },
                      [
                        _vm._v(
                          " Affordable\n                                    Prices "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "v-responsive base-divider primary mr-auto mb-6",
                        staticStyle: { "max-width": "28px" }
                      },
                      [
                        _c("div", { staticClass: "v-responsive__content" }, [
                          _c("hr", {
                            staticClass: "v-divider theme--light",
                            attrs: {
                              role: "separator",
                              "aria-orientation": "horizontal"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "base-body body-1 grey--text text--darken-1 text-left mb-6"
                      },
                      [
                        _vm._v(
                          "\n                                    Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut\n                                    dolorum fuga.harum quidem rerum facilis estexpedita distinctio.\n\n                                "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col col-2" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "display-3 grey--text text--lighten-4 font-weight-bold pr-8"
                      },
                      [_vm._v("02")]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-12" }, [
              _c("div", { staticClass: "container pa-0" }, [
                _c("div", { staticClass: "row no-gutters justify-start" }, [
                  _c("div", { staticClass: "col col-9" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "body-2 font-weight-regular mb-1 text-left grey--text"
                      },
                      [_vm._v(" Income Flow")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass:
                          "text-uppercase title font-weight-bold mb-1 text-left"
                      },
                      [
                        _vm._v(
                          " Target\n                                    Setting "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "v-responsive base-divider primary mr-auto mb-6",
                        staticStyle: { "max-width": "28px" }
                      },
                      [
                        _c("div", { staticClass: "v-responsive__content" }, [
                          _c("hr", {
                            staticClass: "v-divider theme--light",
                            attrs: {
                              role: "separator",
                              "aria-orientation": "horizontal"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "base-body body-1 grey--text text--darken-1 text-left mb-6"
                      },
                      [
                        _vm._v(
                          "\n                                    Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut\n                                    dolorum fuga.harum quidem rerum facilis estexpedita distinctio.\n                                "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col col-2" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "display-3 grey--text text--lighten-4 font-weight-bold pr-8"
                      },
                      [_vm._v("03")]
                    )
                  ])
                ])
              ])
            ])
          ])
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



/***/ })

}]);