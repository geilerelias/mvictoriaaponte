(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Gallery.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: '',
      selected: [],
      isActive: false,
      dialog: false,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      model: 0,
      modelAux: 0,
      links: [{
        text: "Inicio",
        disabled: false,
        href: "/"
      }, {
        text: "Galería",
        disabled: true,
        href: "/gallery"
      }],
      index: null,
      gallery: [{
        src: "videos/Video 1. Presentación.mp4",
        thumbnail: "videos/Video 1. Presentación.jpg",
        name: "Presentación"
      }, {
        src: "videos/Video 2. Miedos.mp4",
        thumbnail: "videos/Video 2. Miedos.jpg",
        name: "Miedos"
      }, {
        src: "videos/Video 3. Mujer holistica.mp4",
        thumbnail: "videos/Video 3. Mujer holistica.jpg",
        name: "Mujer holistica"
      }, {
        src: "videos/Video 4. Miedos Vs empoderamiento.mp4",
        thumbnail: "videos/Video 4. Miedos Vs empoderamiento.jpg",
        name: "Miedos Vs empoderamiento"
      }, {
        src: "videos/Video 5. Cambiar paradigmas.mp4",
        thumbnail: "videos/Video 5. Cambiar paradigmas.jpg",
        name: "Cambiar paradigmas"
      }, {
        src: "videos/Video 6. Estereotipos culturales.mp4",
        thumbnail: "videos/Video 6. Estereotipos culturales.jpg",
        name: "Estereotipos culturales"
      }, {
        src: "videos/Video 7. Prácticas sexistas.mp4",
        thumbnail: "videos/Video 7. Prácticas sexistas.jpg",
        name: "Prácticas sexistas"
      }, {
        src: "videos/Video 8. Quien soy.mp4",
        thumbnail: "videos/Video 8. Quien soy.jpg",
        name: "Quien soy"
      }, {
        src: "videos/Video 9. Papel de la mujer en la sociedad.mp4",
        thumbnail: "videos/Video 9. Papel de la mujer en la sociedad.jpg",
        name: "Papel de la mujer en la sociedad"
      }, {
        src: "videos/Video 10. Conciencia y sueños.mp4",
        thumbnail: "videos/Video 10. Conciencia y sueños.jpg",
        name: "Conciencia y sueños"
      }]
    };
  },
  computed: {
    listaVideos: function listaVideos() {
      var search = this.search.toLowerCase();
      if (!search) return this.gallery;
      return this.gallery.filter(function (item) {
        var text = item.name.toLowerCase();
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
          selections.push(this.items[selection]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return selections;
    }
  },
  mounted: function mounted() {},
  methods: {
    visualizar: function visualizar(item) {
      this.modelAux = this.dialog = !this.dialog;
      this.model = this.gallery.indexOf(item);
      this.modelAux = this.model;
    },
    cambioCarousel: function cambioCarousel() {
      console.log(this.model);
      this.pausarVideo(this.modelAux);
      this.modelAux = this.model;
    },
    pausarVideo: function pausarVideo(number) {
      var reproductor = document.getElementById("player-" + number);
      reproductor.pause();
    },
    close: function close() {
      this.dialog = false;
      this.pausarVideo(this.model);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slide-fade-enter-active[data-v-7e0bc82c] {\n  transition: all 0.3s ease;\n}\n.slide-fade-leave-active[data-v-7e0bc82c] {\n  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-fade-enter[data-v-7e0bc82c], .slide-fade-leave-to[data-v-7e0bc82c] {\n  transform: translateX(10px);\n  opacity: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=style&index=0&id=7e0bc82c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true& ***!
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
                src:
                  "https://imagenes.universia.net/gc/net/images/educacion/p/pr/pro/programas_para_editar_videos.jpg",
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
                            "\n                        Galería\n                    "
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
        "section",
        [
          _c(
            "div",
            { staticClass: "base-section-heading text-center my-12" },
            [
              _c(
                "v-avatar",
                { staticClass: "primary mb-4", attrs: { size: "56" } },
                [
                  _c("v-icon", { attrs: { dark: "", size: "28" } }, [
                    _vm._v(
                      "\n                    mdi-animation-play\n                "
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
                [_vm._v("\n                Galería de videos\n            ")]
              ),
              _vm._v(" "),
              _c("v-divider", {
                staticClass: "primary mx-auto mb-6 ",
                staticStyle: { "max-width": "28px" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c("v-text-field", {
                staticClass: "mx-4",
                attrs: {
                  rounded: "",
                  "append-icon": "mdi-magnify",
                  flat: "",
                  "hide-details": "",
                  label: "Buscar",
                  solo: "",
                  outlined: "",
                  dense: ""
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              }),
              _vm._v(" "),
              _c(
                "v-row",
                _vm._l(_vm.listaVideos, function(item, i) {
                  return _c(
                    "v-col",
                    { key: i, attrs: { cols: "12", sm: "6", md: "4" } },
                    [
                      _c("v-hover", {
                        attrs: { "open-delay": "200" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var hover = ref.hover
                                return [
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "v-card",
                                        {
                                          staticClass: "mx-auto",
                                          staticStyle: { "border-radius": "0" },
                                          attrs: {
                                            color: hover
                                              ? "primary"
                                              : "grey lighten-1",
                                            elevation: hover ? 16 : 2
                                          }
                                        },
                                        [
                                          _c(
                                            "v-img",
                                            {
                                              attrs: {
                                                src: item.thumbnail,
                                                "lazy-src":
                                                  "https://picsum.photos/10/6?image=" +
                                                  (i * 5 + 10),
                                                "aspect-ratio": 16 / 9,
                                                gradient: hover
                                                  ? "to right top, rgba(101, 50, 77, 0.71), rgba(158, 67, 115, 0.83)"
                                                  : ""
                                              }
                                            },
                                            [
                                              _c(
                                                "transition",
                                                { attrs: { name: "fade" } },
                                                [
                                                  hover
                                                    ? _c(
                                                        "v-row",
                                                        {
                                                          staticClass:
                                                            "fill-height",
                                                          attrs: {
                                                            align: "center",
                                                            justify: "center"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-col",
                                                            [
                                                              _c(
                                                                "v-row",
                                                                [
                                                                  _c(
                                                                    "v-col",
                                                                    {
                                                                      staticClass:
                                                                        "text-center",
                                                                      attrs: {
                                                                        cols:
                                                                          "12"
                                                                      }
                                                                    },
                                                                    [
                                                                      hover
                                                                        ? _c(
                                                                            "v-btn",
                                                                            {
                                                                              attrs: {
                                                                                fab:
                                                                                  "",
                                                                                color:
                                                                                  "white"
                                                                              },
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.visualizar(
                                                                                    item
                                                                                  )
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "v-icon",
                                                                                {
                                                                                  attrs: {
                                                                                    color:
                                                                                      "primary",
                                                                                    size:
                                                                                      "48"
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "\n                                                                mdi-play\n                                                            "
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ],
                                                                            1
                                                                          )
                                                                        : _vm._e()
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-col",
                                                                    {
                                                                      staticClass:
                                                                        "text-center lightbox white--text px-2 pb-2 fill-height",
                                                                      attrs: {
                                                                        cols:
                                                                          "12"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "body-1 text-uppercase font-weight-black"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "\n                                                            " +
                                                                              _vm._s(
                                                                                item.name
                                                                              ) +
                                                                              "\n                                                        "
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
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
                                                    : _vm._e()
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
                                        "p",
                                        { staticClass: "title primary--text" },
                                        [_vm._v(" " + _vm._s(item.name))]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
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
      ),
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
                    { attrs: { dark: "", color: "primary", dense: "" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { dark: "", icon: "" },
                          on: { click: _vm.close }
                        },
                        [_c("v-icon", [_vm._v("mdi-close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [_vm._v("Galería de videos")]),
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
                              on: { click: _vm.close }
                            },
                            [
                              _vm._v(
                                "\n                            cerrar\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "9" } },
                            [
                              _c(
                                "v-card",
                                { staticStyle: { "border-radius": "0" } },
                                [
                                  _c(
                                    "v-responsive",
                                    [
                                      _c(
                                        "v-carousel",
                                        {
                                          attrs: {
                                            height: "auto",
                                            "hide-delimiters": ""
                                          },
                                          on: { change: _vm.cambioCarousel },
                                          model: {
                                            value: _vm.model,
                                            callback: function($$v) {
                                              _vm.model = $$v
                                            },
                                            expression: "model"
                                          }
                                        },
                                        _vm._l(_vm.gallery, function(item, n) {
                                          return _c(
                                            "v-carousel-item",
                                            { key: n },
                                            [
                                              _c(
                                                "v-sheet",
                                                {
                                                  staticClass:
                                                    "mb-0 pb-0 mx-auto",
                                                  attrs: { tile: "" }
                                                },
                                                [
                                                  _c(
                                                    "v-row",
                                                    {
                                                      attrs: {
                                                        align: "center",
                                                        justify: "center"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "video",
                                                        {
                                                          ref: "videoPlayer",
                                                          refInFor: true,
                                                          staticClass:
                                                            "mb-0 pb-0 mx-auto",
                                                          staticStyle: {
                                                            "max-width": "100%",
                                                            "max-height":
                                                              "500px",
                                                            height: "auto"
                                                          },
                                                          attrs: {
                                                            poster:
                                                              item.thumbnail,
                                                            id: "player-" + n,
                                                            "aspect-ratio":
                                                              16 / 9,
                                                            autoplay: "",
                                                            controls: ""
                                                          }
                                                        },
                                                        [
                                                          _c("source", {
                                                            attrs: {
                                                              src: item.src,
                                                              type: "video/mp4"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
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
                            "v-col",
                            { attrs: { cols: "12", md: "3" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "grey lighten-3",
                                  staticStyle: { "border-radius": "0" }
                                },
                                [
                                  _c(
                                    "v-toolbar",
                                    {
                                      attrs: {
                                        color: "primary",
                                        dark: "",
                                        dense: "",
                                        flat: ""
                                      }
                                    },
                                    [
                                      _c("v-toolbar-title", [
                                        _vm._v("Lista de videos")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-responsive",
                                    {
                                      staticClass: "overflow-y-auto",
                                      attrs: { "max-height": "450" }
                                    },
                                    [
                                      _c(
                                        "v-responsive",
                                        [
                                          _c(
                                            "v-lazy",
                                            {
                                              attrs: {
                                                options: { threshold: 0.5 },
                                                "min-height": "200",
                                                transition: "fade-transition"
                                              },
                                              model: {
                                                value: _vm.isActive,
                                                callback: function($$v) {
                                                  _vm.isActive = $$v
                                                },
                                                expression: "isActive"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-list",
                                                [
                                                  _c(
                                                    "v-list-item-group",
                                                    {
                                                      attrs: {
                                                        color: "primary"
                                                      },
                                                      model: {
                                                        value: _vm.model,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.model = $$v
                                                        },
                                                        expression: "model"
                                                      }
                                                    },
                                                    _vm._l(
                                                      _vm.gallery,
                                                      function(item, i) {
                                                        return _c(
                                                          "v-list-item",
                                                          {
                                                            key: i,
                                                            on: {
                                                              click:
                                                                _vm.cambioCarousel
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item-content",
                                                              [
                                                                _c("v-img", {
                                                                  attrs: {
                                                                    "max-height":
                                                                      "100",
                                                                    "max-width":
                                                                      "100",
                                                                    "aspect-ratio":
                                                                      16 / 9,
                                                                    src:
                                                                      item.thumbnail
                                                                  }
                                                                })
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-list-item-content",
                                                              [
                                                                _c(
                                                                  "v-list-item-title",
                                                                  {
                                                                    domProps: {
                                                                      textContent: _vm._s(
                                                                        item.name
                                                                      )
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      }
                                                    ),
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
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        { staticClass: "justify-space-between" },
                        [
                          _c(
                            "v-sheet",
                            { staticClass: "hidden-sm-and-down" },
                            [
                              _c(
                                "v-slide-group",
                                {
                                  staticClass: "pa-4 text-center mx-auto",
                                  attrs: { "show-arrows": false, sle: "" },
                                  model: {
                                    value: _vm.model,
                                    callback: function($$v) {
                                      _vm.model = $$v
                                    },
                                    expression: "model"
                                  }
                                },
                                _vm._l(_vm.gallery, function(item, n) {
                                  return _c("v-slide-item", {
                                    key: n,
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var active = ref.active
                                            var toggle = ref.toggle
                                            return [
                                              _c(
                                                "v-avatar",
                                                {
                                                  staticClass: "mx-1",
                                                  attrs: {
                                                    color: active
                                                      ? "primary"
                                                      : "grey lighten-1",
                                                    width: "100",
                                                    tile: ""
                                                  },
                                                  on: { click: toggle }
                                                },
                                                [
                                                  _c(
                                                    "v-scale-transition",
                                                    [
                                                      _c("v-img", {
                                                        attrs: {
                                                          contain: "",
                                                          src: item.thumbnail,
                                                          alt: "image",
                                                          gradient: active
                                                            ? "to bottom, rgba(158, 67, 115, 0.48), rgba(158, 67, 115, 0.58)"
                                                            : ""
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  })
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

/***/ "./resources/js/components/pages/Gallery.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/pages/Gallery.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gallery_vue_vue_type_template_id_7e0bc82c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true& */ "./resources/js/components/pages/Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true&");
/* harmony import */ var _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Gallery_vue_vue_type_style_index_0_id_7e0bc82c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery.vue?vue&type=style&index=0&id=7e0bc82c&lang=scss&scoped=true& */ "./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gallery_vue_vue_type_template_id_7e0bc82c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gallery_vue_vue_type_template_id_7e0bc82c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e0bc82c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Gallery.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pages/Gallery.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_7e0bc82c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=style&index=0&id=7e0bc82c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=style&index=0&id=7e0bc82c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_7e0bc82c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_7e0bc82c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_7e0bc82c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_7e0bc82c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_7e0bc82c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pages/Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_7e0bc82c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Gallery.vue?vue&type=template&id=7e0bc82c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_7e0bc82c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_7e0bc82c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);