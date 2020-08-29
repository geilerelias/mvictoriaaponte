(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Publications.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Publications.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_pdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-pdf */ "./node_modules/vue-pdf/src/vuePdfNoSss.vue");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dialog: false,
      links: [{
        text: 'Inicio',
        disabled: false,
        href: '/'
      }, {
        text: 'Publicaciones',
        disabled: true,
        href: '/publications'
      }],
      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [{
        text: 'Nature',
        icon: 'mdi-nature'
      }, {
        text: 'Nightlife',
        icon: 'mdi-glass-wine'
      }, {
        text: 'November',
        icon: 'mdi-calendar-range'
      }, {
        text: 'Portland',
        icon: 'mdi-map-marker'
      }, {
        text: 'Biking',
        icon: 'mdi-bike'
      }],
      loading: false,
      search: '',
      selected: [],
      publications: [{
        header: "TEXTOS Y CAPÍTULOS DE LIBROS"
      }, {
        title: "Memorias",
        content: "Congreso Psicología- salud mental",
        location: 'Argentina',
        date: "2016",
        image: 'images/publicaciones/memorias-congreso.png'
      }, {
        title: "Reflexiones",
        content: "Humanidades- capítulo libro",
        location: 'Bogotá',
        date: "2018",
        image: 'images/publicaciones/reflexiones.jpg'
      }, {
        subheader: "Facultad de Humanidades"
      }, {
        header: "PUBLICACIONES- CAPÍTULO DE LIBRO - TÉXTICAS"
      }]
    };
  },
  computed: {
    allSelected: function allSelected() {
      return this.selected.length === this.items.length;
    },
    categories: function categories() {
      var search = this.search.toLowerCase();
      if (!search) return this.items;
      return this.items.filter(function (item) {
        var text = item.text.toLowerCase();
        return text.indexOf(search) > -1;
      });
    },
    selections: function selections() {
      var selections = [];

      var _iterator = _createForOfIteratorHelper(this.selected),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var selection = _step.value;
          selections.push(selection);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return selections;
    }
  },
  watch: {
    selected: function selected() {
      this.search = '';
    }
  },
  methods: {
    next: function next() {
      var _this2 = this;

      this.loading = true;
      setTimeout(function () {
        _this2.search = '';
        _this2.selected = [];
        _this2.loading = false;
      }, 2000);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Publications.vue?vue&type=template&id=3e308646&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Publications.vue?vue&type=template&id=3e308646&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                src: __webpack_require__(/*! ../../../images/header-publicaciones-revistas.jpg */ "./resources/images/header-publicaciones-revistas.jpg"),
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
                            "\n                        Publicaciones\n                    "
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
      [
        _c(
          "v-card",
          { staticClass: "mx-auto", attrs: { "max-width": "500" } },
          [
            _c(
              "v-toolbar",
              { attrs: { flat: "", color: "transparent" } },
              [
                _c("v-app-bar-nav-icon"),
                _vm._v(" "),
                _c("v-toolbar-title", [_vm._v("Photo Info")]),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        return _vm.$refs.search.focus()
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("mdi-magnify")])],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-container",
              { staticClass: "py-0" },
              [
                _c(
                  "v-row",
                  { attrs: { align: "center", justify: "start" } },
                  [
                    _vm._l(_vm.selections, function(selection, i) {
                      return _c(
                        "v-col",
                        { key: selection.text, staticClass: "shrink" },
                        [
                          _c(
                            "v-chip",
                            {
                              attrs: { disabled: _vm.loading, close: "" },
                              on: {
                                "click:close": function($event) {
                                  return _vm.selected.splice(i, 1)
                                }
                              }
                            },
                            [
                              _c("v-icon", {
                                attrs: { left: "" },
                                domProps: {
                                  textContent: _vm._s(selection.icon)
                                }
                              }),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(selection.text) +
                                  "\n                        "
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    !_vm.allSelected
                      ? _c(
                          "v-col",
                          { attrs: { cols: "12" } },
                          [
                            _c("v-text-field", {
                              ref: "search",
                              attrs: {
                                "full-width": "",
                                "hide-details": "",
                                label: "Search",
                                "single-line": ""
                              },
                              model: {
                                value: _vm.search,
                                callback: function($$v) {
                                  _vm.search = $$v
                                },
                                expression: "search"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            !_vm.allSelected ? _c("v-divider") : _vm._e(),
            _vm._v(" "),
            _c(
              "v-list",
              [
                _vm._l(_vm.categories, function(item) {
                  return [
                    !_vm.selected.includes(item)
                      ? _c(
                          "v-list-item",
                          {
                            key: item.text,
                            attrs: { disabled: _vm.loading },
                            on: {
                              click: function($event) {
                                return _vm.selected.push(item)
                              }
                            }
                          },
                          [
                            _c(
                              "v-list-item-avatar",
                              [
                                _c("v-icon", {
                                  attrs: { disabled: _vm.loading },
                                  domProps: { textContent: _vm._s(item.icon) }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-list-item-title", {
                              domProps: { textContent: _vm._s(item.text) }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("v-divider"),
            _vm._v(" "),
            _c(
              "v-card-actions",
              [
                _c("v-spacer"),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: {
                      disabled: !_vm.selected.length,
                      loading: _vm.loading,
                      color: "purple",
                      text: ""
                    },
                    on: { click: _vm.next }
                  },
                  [_vm._v("Next\n                ")]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      _vm._v(" "),
      _c(
        "section",
        [
          _c(
            "div",
            { staticClass: "text-center my-12" },
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
                [
                  _vm._v(
                    "\n                Publicaciones científicas\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-divider", {
                staticClass: "primary mx-auto mb-6",
                staticStyle: { "max-width": "28px" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-tabs",
                    {
                      attrs: {
                        "background-color": "white",
                        color: "deep-purple accent-4",
                        right: ""
                      }
                    },
                    [
                      _c("v-tab", [
                        _vm._v(
                          "\n                        Todos\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-tab", [_vm._v("Publicados")]),
                      _vm._v(" "),
                      _c("v-tab", [_vm._v("Otros")]),
                      _vm._v(" "),
                      _vm._l(3, function(n) {
                        return _c(
                          "v-tab-item",
                          { key: n },
                          [
                            _c(
                              "v-container",
                              { attrs: { fluid: "" } },
                              [
                                _c(
                                  "v-row",
                                  _vm._l(6, function(i) {
                                    return _c(
                                      "v-col",
                                      {
                                        key: i,
                                        attrs: { cols: "12", md: "4" }
                                      },
                                      [
                                        _c("v-img", {
                                          attrs: {
                                            src:
                                              "https://picsum.photos/500/300?image=" +
                                              (i * n * 5 + 10),
                                            "lazy-src":
                                              "https://picsum.photos/10/6?image=" +
                                              (i * n * 5 + 10),
                                            "aspect-ratio": "1"
                                          }
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
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mb-2" },
                [
                  _c(
                    "v-col",
                    { attrs: { sm: "6" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-img",
                            {
                              staticClass: "white--text align-end",
                              attrs: {
                                src:
                                  "https://www.spanishged365.com/wp-content/uploads/2018/03/colash.jpg",
                                gradient:
                                  "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                              }
                            },
                            [
                              _c("v-card-title", [
                                _vm._v("PUBLICACIONES CIENTÍFICAS")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-heart")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-bookmark")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-share-variant")])],
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
                    "v-col",
                    { attrs: { sm: "6" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-img",
                            {
                              staticClass: "white--text align-end",
                              attrs: {
                                src:
                                  "https://live.mrf.io/statics/i/ps/img-aws.ehowcdn.com/600x375/photos.demandstudios.com/getty/article/184/23/86539497.jpg",
                                gradient:
                                  "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                height: "300px"
                              }
                            },
                            [
                              _c("v-card-title", [_vm._v("Articulos Escritos")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-heart")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-bookmark")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-share-variant")])],
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
                    "v-col",
                    { attrs: { sm: "6" } },
                    [
                      _c(
                        "v-card",
                        { attrs: { height: "300" } },
                        [
                          _c(
                            "v-row",
                            { staticClass: "ma-0" },
                            [
                              _c("v-col", { staticClass: "ma-0 " }, [
                                _c(
                                  "strong",
                                  {
                                    staticClass:
                                      "d-inline-block mb-2 text-primary"
                                  },
                                  [_vm._v("World")]
                                ),
                                _vm._v(" "),
                                _c("h3", { staticClass: "mb-0" }, [
                                  _vm._v("Featured post")
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "mb-1 text-muted" }, [
                                  _vm._v("Nov 12")
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "card-text mb-auto" }, [
                                  _vm._v(
                                    "This is a wider card with supporting text below as a\n                                    natural\n                                    lead-in to additional content."
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "stretched-link",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Continue reading")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "ma-0 pa-0",
                                  attrs: { cols: "4" }
                                },
                                [
                                  _c("v-img", {
                                    attrs: {
                                      "aspect-ratio": 5 / 10,
                                      height: "300",
                                      src:
                                        "https://biblioteca.ulpgc.es/files/repositorio_de_docum152/noticias/esto-es-lo-que-cuestan-las-revistas-cientificas-espana-se-ha-pulido-213-millones-desde-2012.jpg"
                                    }
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
                    "v-col",
                    { attrs: { sm: "6" } },
                    [
                      _c(
                        "v-card",
                        { attrs: { height: "300" } },
                        [
                          _c(
                            "v-row",
                            { staticClass: "ma-0" },
                            [
                              _c("v-col", { staticClass: "ma-0 " }, [
                                _c(
                                  "strong",
                                  {
                                    staticClass:
                                      "d-inline-block mb-2 text-primary"
                                  },
                                  [_vm._v("World")]
                                ),
                                _vm._v(" "),
                                _c("h3", { staticClass: "mb-0" }, [
                                  _vm._v("Featured post")
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "mb-1 text-muted" }, [
                                  _vm._v("Nov 12")
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "card-text mb-auto" }, [
                                  _vm._v(
                                    "This is a wider card with supporting text below as a\n                                    natural\n                                    lead-in to additional content."
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "stretched-link",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Continue reading")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "ma-0 pa-0",
                                  attrs: { cols: "4" }
                                },
                                [
                                  _c("v-img", {
                                    attrs: {
                                      "aspect-ratio": 5 / 10,
                                      height: "300",
                                      src:
                                        "https://www.tuexperto.com/wp-content/uploads/2019/06/5-formas-de-guardar-un-documento-word-como-un-documento-pdf.jpg"
                                    }
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
        "section",
        [
          _c(
            "div",
            { staticClass: "text-center my-12" },
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
                [
                  _vm._v(
                    "\n                Publicaciones científicas\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-divider", {
                staticClass: "primary mx-auto mb-6",
                staticStyle: { "max-width": "28px" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c(
                "div",
                { staticClass: "col col-9" },
                [
                  _c(
                    "h3",
                    {
                      staticClass:
                        "text-uppercase title font-weight-bold mb-1 text-left"
                    },
                    [_vm._v("Textos y capítulos de libros")]
                  ),
                  _vm._v(" "),
                  _c("v-divider", {
                    staticClass: "primary mr-auto mb-6",
                    staticStyle: { "max-width": "28px" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6", md: "4", lg: "3" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "343" }
                        },
                        [
                          _c(
                            "v-list-item",
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c(
                                    "v-list-item-title",
                                    { staticClass: "headline" },
                                    [
                                      _vm._v(
                                        "\n                                    Memorias\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", [
                                    _vm._v("Congreso Psicología- salud mental")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", [
                                    _vm._v("Argentina- 2016")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-img", {
                            attrs: {
                              src: "images/publicaciones/memorias-congreso.png",
                              contain: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("v-card-actions")
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "6", md: "4", lg: "3" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "343" }
                        },
                        [
                          _c(
                            "v-list-item",
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c(
                                    "v-list-item-title",
                                    { staticClass: "headline" },
                                    [
                                      _vm._v(
                                        "\n                                    Reflexiones\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", [
                                    _vm._v("Humanidades- capítulo libro")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", [
                                    _vm._v("Bogotá - 2018")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-img", {
                            attrs: {
                              src: "images/publicaciones/reflexiones.jpg",
                              contain: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("v-card-actions")
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
          _c("v-container", [
            _c(
              "div",
              { staticClass: "col col-9" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "body-2 font-weight-regular mb-1 text-left grey--text"
                  },
                  [_vm._v("Facultad de Humanidades")]
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
                      "Publicaciones- Capítulo de libro -\n                    Téxticas"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("v-divider", {
                  staticClass: "primary mr-auto mb-6",
                  staticStyle: { "max-width": "28px" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c("v-col", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        { staticClass: "d-flex align-center" },
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "primary--text mr-3",
                              attrs: { size: "28" }
                            },
                            [_vm._v("mdi-check-circle-outline")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "subtitle-1" }, [
                            _vm._v("1° puesto concurso de crónica")
                          ])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-col", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        { staticClass: "d-flex align-center" },
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "primary--text mr-3",
                              attrs: { size: "28" }
                            },
                            [_vm._v("mdi-check-circle-outline")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "subtitle-1" }, [
                            _vm._v("2015: "),
                            _c("span", { staticClass: "font-weight-bold" }, [
                              _vm._v(
                                " Reflexiones, del primer día de clases en el curso de investigación"
                              )
                            ])
                          ])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-col", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        { staticClass: "d-flex align-center" },
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "primary--text mr-3",
                              attrs: { size: "28" }
                            },
                            [_vm._v("mdi-check-circle-outline")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "subtitle-1" }, [
                            _vm._v("Publicado junio 25-2019")
                          ])
                        ],
                        1
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "v-card",
                  [
                    _c(
                      "v-container",
                      { attrs: { fluid: "" } },
                      [
                        _c(
                          "v-row",
                          _vm._l(3, function(n) {
                            return _c(
                              "v-col",
                              {
                                key: n,
                                staticClass: "d-flex child-flex",
                                attrs: { cols: "4" }
                              },
                              [
                                _c(
                                  "v-card",
                                  {
                                    staticClass: "d-flex",
                                    attrs: { flat: "", tile: "" }
                                  },
                                  [
                                    _c("v-img", {
                                      staticClass: "grey lighten-2",
                                      attrs: {
                                        src:
                                          "images/publicaciones/Imagen" +
                                          n +
                                          ".jpg",
                                        "aspect-ratio": 4 / 5
                                      }
                                    })
                                  ],
                                  1
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
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-12" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "body-2 font-weight-regular mb-1 text-left grey--text"
                  },
                  [
                    _vm._v(
                      "Asociacion de salud\n                    mental-Argentina\n                "
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
                      "Publicaciones- Capítulo de\n                    libro"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("v-divider", {
                  staticClass: "primary mr-auto mb-6",
                  staticStyle: { "max-width": "28px" }
                }),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      { staticClass: "col-12 col-sm-4" },
                      [
                        _c("v-img", {
                          attrs: {
                            src:
                              "images/publicaciones/los-limites-de-la-clinica.png",
                            height: "250",
                            contain: ""
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { staticClass: "col-12 col-sm-8" },
                      [
                        _c(
                          "p",
                          {
                            staticClass:
                              "base-body body-1  text--darken-1 text-left mb-6"
                          },
                          [
                            _vm._v(
                              "\n                            Los Límites de la Clínica.\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("v-col", { staticClass: "col-12" }, [
                          _c(
                            "div",
                            { staticClass: "d-flex align-start" },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "primary--text mr-3",
                                  attrs: { size: "28" }
                                },
                                [_vm._v("mdi-check-circle-outline")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "subtitle-1" }, [
                                _vm._v(
                                  "\n                                    Memorias de violencia de género de enfermeras y enfermeros en el ámbito\n                                    laboral\n                                    de la salud en Bogotá en el año 2016. -3.500 profesionales inscritos y 2.000\n                                    ponencias. Se seleccionaron 270 ponencias, para el libro Los Límites de la\n                                    Clínica, entre los cuales se registra la ponencia del grupo Género e\n                                    Interculturalidad. "
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "font-weight-bold" },
                                  [_vm._v("Ponente: ")]
                                ),
                                _vm._v(
                                  "María Victoria Aponte\n                                    Valverde\n                                "
                                )
                              ])
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
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-12" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "body-2 font-weight-regular mb-1 text-left grey--text"
                  },
                  [_vm._v("Publicación libro-2013")]
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
                      "Informe final proyecto de\n                    investigación"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("v-divider", {
                  staticClass: "primary mr-auto mb-6",
                  staticStyle: { "max-width": "28px" }
                }),
                _vm._v(" "),
                _c("v-img", {
                  attrs: {
                    src: "images/publicaciones/Informe final proyecto.png",
                    height: "499",
                    width: "764",
                    contain: ""
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-12" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "body-2 font-weight-regular mb-1 text-left grey--text"
                  },
                  [_vm._v("Revista indexada- 2019")]
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
                      "Publicación de artículos\n                    científicos"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("v-divider", {
                  staticClass: "primary mr-auto mb-6",
                  staticStyle: { "max-width": "28px" }
                }),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    _c("v-col", [
                      _c(
                        "p",
                        {
                          staticClass:
                            "base-body body-1 text--darken-1 text-left mb-6"
                        },
                        [
                          _vm._v(
                            "\n                            Revista International Journal of Scientific and Research Publications, Volume 9, Issue\n                            12, December 2019 824 ISSN 2250-3153\n                            Artículo: Social control: between theoretical analyzes of the past and future\n                            perspectives. The contribution of the theoretical criminological approach to the\n                            phenomenon. N. Malizia , M.V. Aponte Valverde\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "base-body body-1 grey--text text--darken-1 text-left"
                        },
                        [
                          _vm._v(
                            "\n                            http://dx.doi.org/10.29322/IJSRP.9.12.2019.p96106 www.ijsrp.org\n                            * Associate Professor of Sociology of Law, Deviance and Social change - University of\n                            Enna “Kore”, Faculty of Human and Society Sciences\n                            ** Valverde, Social sciences Researcher, University Foundation of Andean Area, Bogotà,\n                            Colombia, Faculty of Health Sciences\n                            DOI: 10.29322/IJSRP.9.12.2019.p96106\n                            http://dx.doi.org/10.29322/IJSRP.9.12.2019.p96106\n\n                        "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "4" } },
                      [
                        _c(
                          "v-card",
                          {
                            staticClass: "pa-4",
                            attrs: { flat: "", outlined: "" }
                          },
                          [
                            _c("v-img", {
                              attrs: {
                                src: "images/publicaciones/ijsrp-org.jpg",
                                height: "200",
                                contain: "",
                                "aspect-ratio": "1"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-card-text", [
                              _vm._v(
                                "\n                                International Journal of Scientific and Research Publications\n                            "
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
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-12" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "body-2 font-weight-regular mb-1 text-left grey--text"
                  },
                  [_vm._v("Universidad de Antioquia- 2019\n                ")]
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
                      "Publicación artículos\n                    científicos"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("v-divider", {
                  staticClass: "primary mr-auto mb-6",
                  staticStyle: { "max-width": "28px" }
                }),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      [
                        _c(
                          "v-row",
                          [
                            _c("v-col", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                { staticClass: "d-flex align-start" },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      staticClass: "primary--text mr-3",
                                      attrs: { size: "28" }
                                    },
                                    [_vm._v("mdi-check-circle-outline")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "subtitle-1" }, [
                                    _vm._v(
                                      "Universidad de Antioquia. Facultad de Salud Pública.\n                                        "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [
                                        _vm._v(
                                          "Revista Facultad Nacional de Salud Pública Vol. 37 Suplemento N.º 1, 2019 "
                                        )
                                      ]
                                    ),
                                    _vm._v(
                                      '-\n                                        Facultad Nacional de Salud Pública "Héctor Abad Gómez” p.143- 149. Texto\n                                        presentado en el 10 Congreso Internacional de Salud Pública – Medellín,\n                                        octubre 18 de 2017\n                                    '
                                    )
                                  ])
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("v-col", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                { staticClass: "d-flex align-start" },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      staticClass: "primary--text mr-3",
                                      attrs: { size: "28" }
                                    },
                                    [_vm._v("mdi-check-circle-outline")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "subtitle-1" }, [
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [_vm._v("Reseña N°1.")]
                                    ),
                                    _vm._v(
                                      " Una aproximación desde una\n                                        experiencia piloto a los significados\n                                        de memorias de violencia de género en mujeres adultas mayores de Bosa en la\n                                        ciudad de Bogotá en el 2017\n\n                                    "
                                    )
                                  ])
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("v-col", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                { staticClass: "d-flex align-start" },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      staticClass: "primary--text mr-3",
                                      attrs: { size: "28" }
                                    },
                                    [_vm._v("mdi-check-circle-outline")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "subtitle-1" }, [
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [_vm._v("Reseña N°2.")]
                                    ),
                                    _vm._v(
                                      "\n                                        Caracterización de la violencia contra las mujeres estudiantes de\n                                        enfermería. Un primer acercamiento desde la percepción estudiantil de Bogotá\n                                    "
                                    )
                                  ])
                                ],
                                1
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "4" } },
                      [
                        _c(
                          "v-card",
                          {
                            staticClass: "pa-4",
                            attrs: { flat: "", outlined: "" }
                          },
                          [
                            _c("v-img", {
                              attrs: {
                                src:
                                  "images/publicaciones/revista facultad de salud.png",
                                height: "300",
                                contain: ""
                              }
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
            )
          ])
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
                  "\n                Esta es una autobiografía de mis vivencias en búsqueda del empoderamiento\n            "
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
    2
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

/***/ "./resources/images/header-publicaciones-revistas.jpg":
/*!************************************************************!*\
  !*** ./resources/images/header-publicaciones-revistas.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/header-publicaciones-revistas.jpg?02121e823285403e433ad0997756514e";

/***/ }),

/***/ "./resources/js/components/pages/Publications.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/pages/Publications.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Publications_vue_vue_type_template_id_3e308646_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Publications.vue?vue&type=template&id=3e308646&scoped=true& */ "./resources/js/components/pages/Publications.vue?vue&type=template&id=3e308646&scoped=true&");
/* harmony import */ var _Publications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Publications.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Publications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Publications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Publications_vue_vue_type_template_id_3e308646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Publications_vue_vue_type_template_id_3e308646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e308646",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Publications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Publications.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pages/Publications.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Publications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Publications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Publications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Publications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Publications.vue?vue&type=template&id=3e308646&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/pages/Publications.vue?vue&type=template&id=3e308646&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Publications_vue_vue_type_template_id_3e308646_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Publications.vue?vue&type=template&id=3e308646&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Publications.vue?vue&type=template&id=3e308646&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Publications_vue_vue_type_template_id_3e308646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Publications_vue_vue_type_template_id_3e308646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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