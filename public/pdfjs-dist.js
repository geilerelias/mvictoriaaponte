(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pdfjs-dist"],{

/***/ "./node_modules/pdfjs-dist/webpack.js":
/*!********************************************!*\
  !*** ./node_modules/pdfjs-dist/webpack.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var pdfjs = __webpack_require__(/*! ./build/pdf.js */ "./node_modules/pdfjs-dist/build/pdf.js");
var PdfjsWorker = __webpack_require__(/*! worker-loader!./build/pdf.worker.js */ "./node_modules/worker-loader/dist/cjs.js!./node_modules/pdfjs-dist/build/pdf.worker.js");

if (typeof window !== 'undefined' && 'Worker' in window) {
  pdfjs.GlobalWorkerOptions.workerPort = new PdfjsWorker();
}

module.exports = pdfjs;


/***/ })

}]);