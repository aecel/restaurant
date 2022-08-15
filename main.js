/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bread-bg.jpg */ "./src/images/bread-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  font-family: \"Nunito\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  --gap: 24px;\r\n  --light-color: rgba(255, 255, 255, 0.748);\r\n  --shadow: 5px 5px rgba(0, 0, 0, 0.27);\r\n  --main-color: rgb(6, 31, 70);\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\r\n  background-size: cover;\r\n  /* overflow: hidden;\r\n  background-position: center;\r\n  background-repeat: no-repeat; */\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: auto;\r\n}\r\n\r\nheader {\r\n  padding: 15px;\r\n  padding-left: 36px;\r\n  padding-right: 36px;\r\n  background-color: #fff8ebe1;\r\n  /* color: white; */\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  box-shadow: var(--shadow);\r\n  z-index: 8;\r\n}\r\n\r\n.header-left {\r\n  display: flex;\r\n  gap: 16px;\r\n  align-items: center;\r\n}\r\n\r\n.header-right {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n\r\n  font-size: small;\r\n}\r\n\r\n.header-tab {\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  background-color: #fff;\r\n  font-weight: bold;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.header-tab:hover {\r\n  background-color: rgb(235, 206, 164);\r\n}\r\n\r\n.header-tab:active {\r\n  background-color: rgb(211, 148, 53);\r\n}\r\n\r\n.chosen-tab {\r\n  background-color: rgb(65, 47, 20);\r\n  color: white;\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* background-color: rgba(0, 0, 0, 0.832); */\r\n  border-radius: 50%;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.logo {\r\n  height: 50px;\r\n  width: auto;\r\n}\r\n\r\n.menu-bg-mask {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(24, 15, 5, 0.573);\r\n  \r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.menu-cards {\r\n  /* height: 100%;\r\n  width: 100%; */\r\n  flex: 1;\r\n  margin: 48px;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 36px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.menu-card {\r\n  background-color: rgba(0, 0, 0, 0.589);\r\n  border-radius: 20px;\r\n  height: 200px;\r\n  width: 300px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  position: relative;\r\n}\r\n\r\n/* .menu-price {\r\n  background-color: #000000a1;\r\n  font-weight: bold;\r\n  border-radius: 50%;\r\n  height: 50px;\r\n  width: 50px;\r\n\r\n  position: absolute;\r\n  bottom: 15px;\r\n  right: 15px;\r\n} */\r\n\r\n.menu-img-container {\r\n  background-color: #ffffffc6;\r\n  border-radius: 50%;\r\n  height: 200px;\r\n  width: 200px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  position: absolute;\r\n  top: -50px;\r\n  left: 50px;\r\n}\r\n\r\n.menu-img {\r\n  height: 180px;\r\n  width: 180px;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.menu-text {\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 145px;\r\n}\r\n\r\n.contact-box {\r\n  height: 70%;\r\n  width: 400px;\r\n  background-color: #0e0e0ea0;\r\n  color: white;\r\n  margin-left: 40px;\r\n  border-radius: 30px;\r\n  padding: 48px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.contact-div {\r\n  display: flex;\r\n  gap: 24px;\r\n  align-items: center;\r\n}\r\n\r\n.contact-img {\r\n  height: 50px;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.welcome-box {\r\n  height: 80%;\r\n  width: 50%;\r\n  background-color: #1a1a1aa0;\r\n  color: white;\r\n  margin-left: 40px;\r\n  border-radius: 30px;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.welcome-1 {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  gap: 48px;\r\n  font-size: 60px;\r\n}\r\n\r\n.welcome-logo {\r\n  height: 200px;\r\n  width: auto;\r\n}\r\n\r\n.welcome-2 {\r\n  text-align: center;\r\n}\r\n\r\n#welcome-button {\r\n  padding: 16px;\r\n  padding-left: 26px;\r\n  padding-right: 26px;\r\n  background-color: rgb(161, 59, 59);\r\n  border-radius: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n#welcome-button:hover {\r\n  background-color: rgb(207, 122, 122);\r\n}\r\n\r\n#welcome-button:active {\r\n  background-color: rgb(252, 218, 218);\r\n  color: rgb(83, 22, 22);\r\n}\r\n\r\nfooter {\r\n  font-size: 10px;\r\n  text-align: center;\r\n  background-color: #1a1a1ac9;\r\n  color: white;\r\n  padding-left: var(--gap);\r\n  padding-right: var(--gap);\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n#content {\r\n  flex: 1;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap\");\r\n\r\n:root {\r\n  font-family: \"Nunito\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  --gap: 24px;\r\n  --light-color: rgba(255, 255, 255, 0.748);\r\n  --shadow: 5px 5px rgba(0, 0, 0, 0.27);\r\n  --main-color: rgb(6, 31, 70);\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  background: url(./images/bread-bg.jpg) no-repeat center center fixed;\r\n  background-size: cover;\r\n  /* overflow: hidden;\r\n  background-position: center;\r\n  background-repeat: no-repeat; */\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: auto;\r\n}\r\n\r\nheader {\r\n  padding: 15px;\r\n  padding-left: 36px;\r\n  padding-right: 36px;\r\n  background-color: #fff8ebe1;\r\n  /* color: white; */\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  box-shadow: var(--shadow);\r\n  z-index: 8;\r\n}\r\n\r\n.header-left {\r\n  display: flex;\r\n  gap: 16px;\r\n  align-items: center;\r\n}\r\n\r\n.header-right {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n\r\n  font-size: small;\r\n}\r\n\r\n.header-tab {\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  background-color: #fff;\r\n  font-weight: bold;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.header-tab:hover {\r\n  background-color: rgb(235, 206, 164);\r\n}\r\n\r\n.header-tab:active {\r\n  background-color: rgb(211, 148, 53);\r\n}\r\n\r\n.chosen-tab {\r\n  background-color: rgb(65, 47, 20);\r\n  color: white;\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* background-color: rgba(0, 0, 0, 0.832); */\r\n  border-radius: 50%;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.logo {\r\n  height: 50px;\r\n  width: auto;\r\n}\r\n\r\n.menu-bg-mask {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(24, 15, 5, 0.573);\r\n  \r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.menu-cards {\r\n  /* height: 100%;\r\n  width: 100%; */\r\n  flex: 1;\r\n  margin: 48px;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 36px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.menu-card {\r\n  background-color: rgba(0, 0, 0, 0.589);\r\n  border-radius: 20px;\r\n  height: 200px;\r\n  width: 300px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  position: relative;\r\n}\r\n\r\n/* .menu-price {\r\n  background-color: #000000a1;\r\n  font-weight: bold;\r\n  border-radius: 50%;\r\n  height: 50px;\r\n  width: 50px;\r\n\r\n  position: absolute;\r\n  bottom: 15px;\r\n  right: 15px;\r\n} */\r\n\r\n.menu-img-container {\r\n  background-color: #ffffffc6;\r\n  border-radius: 50%;\r\n  height: 200px;\r\n  width: 200px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  position: absolute;\r\n  top: -50px;\r\n  left: 50px;\r\n}\r\n\r\n.menu-img {\r\n  height: 180px;\r\n  width: 180px;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.menu-text {\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 145px;\r\n}\r\n\r\n.contact-box {\r\n  height: 70%;\r\n  width: 400px;\r\n  background-color: #0e0e0ea0;\r\n  color: white;\r\n  margin-left: 40px;\r\n  border-radius: 30px;\r\n  padding: 48px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.contact-div {\r\n  display: flex;\r\n  gap: 24px;\r\n  align-items: center;\r\n}\r\n\r\n.contact-img {\r\n  height: 50px;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.welcome-box {\r\n  height: 80%;\r\n  width: 50%;\r\n  background-color: #1a1a1aa0;\r\n  color: white;\r\n  margin-left: 40px;\r\n  border-radius: 30px;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.welcome-1 {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  gap: 48px;\r\n  font-size: 60px;\r\n}\r\n\r\n.welcome-logo {\r\n  height: 200px;\r\n  width: auto;\r\n}\r\n\r\n.welcome-2 {\r\n  text-align: center;\r\n}\r\n\r\n#welcome-button {\r\n  padding: 16px;\r\n  padding-left: 26px;\r\n  padding-right: 26px;\r\n  background-color: rgb(161, 59, 59);\r\n  border-radius: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n#welcome-button:hover {\r\n  background-color: rgb(207, 122, 122);\r\n}\r\n\r\n#welcome-button:active {\r\n  background-color: rgb(252, 218, 218);\r\n  color: rgb(83, 22, 22);\r\n}\r\n\r\nfooter {\r\n  font-size: 10px;\r\n  text-align: center;\r\n  background-color: #1a1a1ac9;\r\n  color: white;\r\n  padding-left: var(--gap);\r\n  padding-right: var(--gap);\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n#content {\r\n  flex: 1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/bagels.jpg":
/*!*******************************!*\
  !*** ./src/images/bagels.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6f134b98984f7157879.jpg";

/***/ }),

/***/ "./src/images/bakery-bg.jpg":
/*!**********************************!*\
  !*** ./src/images/bakery-bg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "359e45642e4d0f57f5c7.jpg";

/***/ }),

/***/ "./src/images/bread-bg.jpg":
/*!*********************************!*\
  !*** ./src/images/bread-bg.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cec674ced1d1751a500.jpg";

/***/ }),

/***/ "./src/images/contact-bg.jpg":
/*!***********************************!*\
  !*** ./src/images/contact-bg.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d504cd865061d1170e7.jpg";

/***/ }),

/***/ "./src/images/crosandwich.jpg":
/*!************************************!*\
  !*** ./src/images/crosandwich.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efd66bb6a6f4083943a5.jpg";

/***/ }),

/***/ "./src/images/email.svg":
/*!******************************!*\
  !*** ./src/images/email.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f32e508ab9875e3497a4.svg";

/***/ }),

/***/ "./src/images/kurowa-san-white.svg":
/*!*****************************************!*\
  !*** ./src/images/kurowa-san-white.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ff5133d8d8eb0626d74.svg";

/***/ }),

/***/ "./src/images/kurowasan.jpg":
/*!**********************************!*\
  !*** ./src/images/kurowasan.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e0c8f0188102a4982b9.jpg";

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eeefd3b709113e3be943.svg";

/***/ }),

/***/ "./src/images/store.svg":
/*!******************************!*\
  !*** ./src/images/store.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16efa15da2d62fa099e3.svg";

/***/ }),

/***/ "./src/images/website.svg":
/*!********************************!*\
  !*** ./src/images/website.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a18ec4f4fc5809389869.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_kurowa_san_white_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/kurowa-san-white.svg */ "./src/images/kurowa-san-white.svg");
/* harmony import */ var _images_bread_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/bread-bg.jpg */ "./src/images/bread-bg.jpg");
/* harmony import */ var _images_bakery_bg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bakery-bg.jpg */ "./src/images/bakery-bg.jpg");
/* harmony import */ var _images_contact_bg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/contact-bg.jpg */ "./src/images/contact-bg.jpg");
/* harmony import */ var _images_email_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/email.svg */ "./src/images/email.svg");
/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/phone.svg */ "./src/images/phone.svg");
/* harmony import */ var _images_store_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/store.svg */ "./src/images/store.svg");
/* harmony import */ var _images_website_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/website.svg */ "./src/images/website.svg");
/* harmony import */ var _images_crosandwich_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/crosandwich.jpg */ "./src/images/crosandwich.jpg");
/* harmony import */ var _images_kurowasan_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/kurowasan.jpg */ "./src/images/kurowasan.jpg");
/* harmony import */ var _images_bagels_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/bagels.jpg */ "./src/images/bagels.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.css */ "./src/style.css");














const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

// Clear the main body of the page
// Remove all children of div with id="content"
const clearPage = () => {
  removeAllChildNodes(content)

  // Remove background image of html
  const html = document.querySelector("html")
  html.style.background = "none"
}

const addElement = ({
  parent,
  type = "div",
  classList = [],
  id,
  text,
  children,
  src,
}) => {
  const element = document.createElement(type)

  if (typeof classList == "string") classList = [classList]
  for (const className of classList) {
    element.classList.add(className)
  }

  if (id) element.id = id
  if (src) element.src = src
  if (text) element.textContent = text
  if (parent) parent.appendChild(element)
  if (children) {
    if (!Array.isArray(children)) children = [children]
    for (const child of children) {
      element.appendChild(child)
    }
  }
  return element
}

// Recreate Home Page
// <div class="welcome-box">
//   <div class="welcome-1">
//     <img class="welcome-logo" src="./images/kurowa-san-white.svg" />
//     Kurowa-san
//   </div>
//   <div class="welcome-2">
//     <p>Welcome to Kurowa-san Japanese Bakery!</p>
//     <p>This is not a real bakery, sorry. The pictures look good though.</p>
//   </div>
//   <div class="welcome-3">
//     <div id="welcome-button" class="menu-button header-tab">
//       Look at the menu anyway
//     </div>
//   </div>
// </div>

const getHomePageDiv = () => {
  const welcomeBox = addElement({
    type: "div",
    classList: "welcome-box",
  })

  // Create logo part on the welcome box
  const welcome1 = addElement({
    type: "div",
    parent: welcomeBox,
    classList: "welcome-1",
    children: [
      addElement({
        type: "img",
        classList: "welcome-logo",
        src: _images_kurowa_san_white_svg__WEBPACK_IMPORTED_MODULE_0__,
      }),
      addElement({
        type: "div",
        text: "Kurowa-san",
      }),
    ],
  })

  // Create text part on the welcome box
  const welcome2 = addElement({
    type: "div",
    parent: welcomeBox,
    classList: "welcome-2",
    children: [
      addElement({
        type: "p",
        text: "Welcome to Kurowa-san Japanese Bakery!",
      }),
      addElement({
        type: "p",
        text: "This is not a real bakery, sorry. The pictures look good though.",
      }),
    ],
  })

  // Create button part on the welcome box
  const welcome3 = addElement({
    type: "div",
    parent: welcomeBox,
    classList: "welcome-3",
    children: addElement({
      id: "welcome-button",
      classList: "header-tab",
      text: "Look at the menu anyway",
    }),
  })

  return welcomeBox
}

const getMenuPageDiv = () => {
  const bgMask = addElement({
    type: "div",
    classList: "menu-bg-mask",
  })

  const menuCards = addElement({
    type: "div",
    classList: "menu-cards",
    parent: bgMask,
    children: [
      addElement({
        classList: "menu-card",
        children: [
          addElement({
            classList: "menu-img-container",
            children: addElement({
              type: "img",
              classList: "menu-img",
              src: _images_kurowasan_jpg__WEBPACK_IMPORTED_MODULE_9__,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Kurowa-san",
          }),
        ],
      }),
      addElement({
        classList: "menu-card",
        children: [
          addElement({
            classList: "menu-img-container",
            children: addElement({
              type: "img",
              classList: "menu-img",
              src: _images_crosandwich_jpg__WEBPACK_IMPORTED_MODULE_8__,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Kurowa-sandwich",
          }),
        ],
      }),
      addElement({
        classList: "menu-card",
        children: [
          addElement({
            classList: "menu-img-container",
            children: addElement({
              type: "img",
              classList: "menu-img",
              src: _images_bagels_jpg__WEBPACK_IMPORTED_MODULE_10__,
            }),
          }),
          addElement({
            classList: "menu-text",
            text: "Bagels",
          }),
        ],
      }),
    ],
  })

  return bgMask
}

const getContactPageDiv = () => {
  const bgMask = addElement({
    type: "div",
    classList: "menu-bg-mask",
  })

  const contactBox = addElement({
    type: "div",
    classList: "contact-box",
    parent: bgMask,
    children: [
      addElement({
        classList: "contact-div",
        children: [
          addElement({
            type: "img",
            classList: "contact-img",
            src: _images_email_svg__WEBPACK_IMPORTED_MODULE_4__,
          }),
          addElement({
            text: "Email: kurowa-san@croissant.com",
          }),
        ],
      }),
      addElement({
        classList: "contact-div",
        children: [
          addElement({
            type: "img",
            classList: "contact-img",
            src: _images_phone_svg__WEBPACK_IMPORTED_MODULE_5__,
          }),
          addElement({
            text: "Phone Number: 123 456 789",
          }),
        ],
      }),
      addElement({
        classList: "contact-div",
        children: [
          addElement({
            type: "img",
            classList: "contact-img",
            src: _images_store_svg__WEBPACK_IMPORTED_MODULE_6__,
          }),
          addElement({
            text: "Location: Kurowa City, Japan",
          }),
        ],
      }),
      addElement({
        classList: "contact-div",
        children: [
          addElement({
            type: "img",
            classList: "contact-img",
            src: _images_website_svg__WEBPACK_IMPORTED_MODULE_7__,
          }),
          addElement({
            text: "Website: aecel.github.io/restaurant",
          }),
        ],
      }),
    ],
  })
  return bgMask
}

// Change html background to the home page background
const changeBackgroundTo = (breadBG) => {
  html.style.background = `url(${breadBG}) no-repeat center center fixed`
  html.style.backgroundSize = "cover"
}

const displayTabPage = (tabName) => {
  if (tabName == "home") {
    console.log("Going to the home page")
    content.appendChild(getHomePageDiv())
    changeBackgroundTo(_images_bread_bg_jpg__WEBPACK_IMPORTED_MODULE_1__)
    addEventListeners()
  } else if (tabName == "menu") {
    console.log("Going to the menu page")
    content.appendChild(getMenuPageDiv())
    changeBackgroundTo(_images_bakery_bg_jpg__WEBPACK_IMPORTED_MODULE_2__)
  } else if (tabName == "contact") {
    console.log("Going to the contact page")
    content.appendChild(getContactPageDiv())
    changeBackgroundTo(_images_contact_bg_jpg__WEBPACK_IMPORTED_MODULE_3__)
  } else {
    console.log("This can't happen")
  }
}

// Event Listeners for Header Tabs (Home, Menu, Contact, Welcome Button)
const addEventListeners = () => {
  const headerTabs = document.getElementsByClassName("header-tab")
  for (const tab of headerTabs) {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("chosen-tab")) {
        // You are already on the page, do nothing
        console.log("You clicked the tab that you are already on lol")
      } else {
        document.querySelector(".chosen-tab").classList.remove("chosen-tab")
        let tabName = ""
        if (tab.id == "welcome-button") {
          tabName = "menu"
          document.getElementById("menu").classList.add("chosen-tab")
        } else {
          tabName = tab.id
          tab.classList.add("chosen-tab")
        }

        clearPage()
        displayTabPage(tabName)
      }
    })
  }
}

const html = document.querySelector("html")
const content = document.querySelector("#content")

clearPage()
displayTabPage("home")
addEventListeners()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxL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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFXO0FBQzVCLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBTztBQUM5QjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFRO0FBQy9CLElBQUk7QUFDSjtBQUNBO0FBQ0EsdUJBQXVCLG1EQUFTO0FBQ2hDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYnJlYWQtYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1nYXA6IDI0cHg7XFxyXFxuICAtLWxpZ2h0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQ4KTtcXHJcXG4gIC0tc2hhZG93OiA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XFxyXFxuICAtLW1haW4tY29sb3I6IHJnYig2LCAzMSwgNzApO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhlYmUxO1xcclxcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG4gIHotaW5kZXg6IDg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGVmdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yaWdodCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItdGFiIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10YWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjA2LCAxNjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXRhYjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMTQ4LCA1Myk7XFxyXFxufVxcclxcblxcclxcbi5jaG9zZW4tdGFiIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNDcsIDIwKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODMyKTsgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtYmctbWFzayB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQsIDE1LCA1LCAwLjU3Myk7XFxyXFxuICBcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmRzIHtcXHJcXG4gIC8qIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlOyAqL1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG1hcmdpbjogNDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzZweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTg5KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLm1lbnUtcHJpY2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGExO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTVweDtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbn0gKi9cXHJcXG5cXHJcXG4ubWVudS1pbWctY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjNjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtNTBweDtcXHJcXG4gIGxlZnQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWltZyB7XFxyXFxuICBoZWlnaHQ6IDE4MHB4O1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXRleHQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDE0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1ib3gge1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlYTA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tbGVmdDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiA0OHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbWcge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUtYm94IHtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWFhMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUtMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZ2FwOiA0OHB4O1xcclxcbiAgZm9udC1zaXplOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZS1sb2dvIHtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUtMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN3ZWxjb21lLWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDU5LCA1OSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VsY29tZS1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTIyLCAxMjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VsY29tZS1idXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIxOCwgMjE4KTtcXHJcXG4gIGNvbG9yOiByZ2IoODMsIDIyLCAyMik7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhYzk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdhcCk7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1nYXApO1xcclxcbiAgcGFkZGluZy10b3A6IDEycHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNFQUFzRTtFQUN0RSxXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLHFDQUFxQztFQUNyQyw0QkFBNEI7QUFDOUI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUZBQW9FO0VBQ3BFLHNCQUFzQjtFQUN0Qjs7aUNBRStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4Qjs7RUFFOUIseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7O0VBRW5CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0NBQXdDOztFQUV4QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO2dCQUNjO0VBQ2QsT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7Ozs7Ozs7R0FVRzs7QUFFSDtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7O0VBRVosYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7O0VBRXZCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLE9BQU87QUFDVFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWdhcDogMjRweDtcXHJcXG4gIC0tbGlnaHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NDgpO1xcclxcbiAgLS1zaGFkb3c6IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI3KTtcXHJcXG4gIC0tbWFpbi1jb2xvcjogcmdiKDYsIDMxLCA3MCk7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2JyZWFkLWJnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhlYmUxO1xcclxcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG4gIHotaW5kZXg6IDg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGVmdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yaWdodCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItdGFiIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10YWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjA2LCAxNjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXRhYjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMTQ4LCA1Myk7XFxyXFxufVxcclxcblxcclxcbi5jaG9zZW4tdGFiIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNDcsIDIwKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODMyKTsgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtYmctbWFzayB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQsIDE1LCA1LCAwLjU3Myk7XFxyXFxuICBcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmRzIHtcXHJcXG4gIC8qIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlOyAqL1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG1hcmdpbjogNDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzZweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTg5KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLm1lbnUtcHJpY2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGExO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTVweDtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbn0gKi9cXHJcXG5cXHJcXG4ubWVudS1pbWctY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjNjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtNTBweDtcXHJcXG4gIGxlZnQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWltZyB7XFxyXFxuICBoZWlnaHQ6IDE4MHB4O1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXRleHQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDE0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1ib3gge1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlYTA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tbGVmdDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiA0OHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbWcge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUtYm94IHtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWFhMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUtMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZ2FwOiA0OHB4O1xcclxcbiAgZm9udC1zaXplOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZS1sb2dvIHtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUtMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN3ZWxjb21lLWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDU5LCA1OSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VsY29tZS1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTIyLCAxMjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VsY29tZS1idXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIxOCwgMjE4KTtcXHJcXG4gIGNvbG9yOiByZ2IoODMsIDIyLCAyMik7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhYzk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdhcCk7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1nYXApO1xcclxcbiAgcGFkZGluZy10b3A6IDEycHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgd2hpdGVMb2dvIGZyb20gXCIuL2ltYWdlcy9rdXJvd2Etc2FuLXdoaXRlLnN2Z1wiXHJcbmltcG9ydCBicmVhZEJHIGZyb20gXCIuL2ltYWdlcy9icmVhZC1iZy5qcGdcIlxyXG5pbXBvcnQgYmFrZXJ5QkcgZnJvbSBcIi4vaW1hZ2VzL2Jha2VyeS1iZy5qcGdcIlxyXG5pbXBvcnQgY29udGFjdEJHIGZyb20gXCIuL2ltYWdlcy9jb250YWN0LWJnLmpwZ1wiXHJcbmltcG9ydCBlbWFpbEljb24gZnJvbSBcIi4vaW1hZ2VzL2VtYWlsLnN2Z1wiXHJcbmltcG9ydCBwaG9uZUljb24gZnJvbSBcIi4vaW1hZ2VzL3Bob25lLnN2Z1wiXHJcbmltcG9ydCBzdG9yZUljb24gZnJvbSBcIi4vaW1hZ2VzL3N0b3JlLnN2Z1wiXHJcbmltcG9ydCB3ZWJzaXRlSWNvbiBmcm9tIFwiLi9pbWFnZXMvd2Vic2l0ZS5zdmdcIlxyXG5pbXBvcnQgY3Jvc2FuZHdpY2ggZnJvbSBcIi4vaW1hZ2VzL2Nyb3NhbmR3aWNoLmpwZ1wiXHJcbmltcG9ydCBjcm9pc3NhbnQgZnJvbSBcIi4vaW1hZ2VzL2t1cm93YXNhbi5qcGdcIlxyXG5pbXBvcnQgYmFnZWxzIGZyb20gXCIuL2ltYWdlcy9iYWdlbHMuanBnXCJcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIlxyXG5cclxuY29uc3QgcmVtb3ZlQWxsQ2hpbGROb2RlcyA9IChwYXJlbnQpID0+IHtcclxuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZClcclxuICB9XHJcbn1cclxuXHJcbi8vIENsZWFyIHRoZSBtYWluIGJvZHkgb2YgdGhlIHBhZ2VcclxuLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBvZiBkaXYgd2l0aCBpZD1cImNvbnRlbnRcIlxyXG5jb25zdCBjbGVhclBhZ2UgPSAoKSA9PiB7XHJcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KVxyXG5cclxuICAvLyBSZW1vdmUgYmFja2dyb3VuZCBpbWFnZSBvZiBodG1sXHJcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpXHJcbiAgaHRtbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCJcclxufVxyXG5cclxuY29uc3QgYWRkRWxlbWVudCA9ICh7XHJcbiAgcGFyZW50LFxyXG4gIHR5cGUgPSBcImRpdlwiLFxyXG4gIGNsYXNzTGlzdCA9IFtdLFxyXG4gIGlkLFxyXG4gIHRleHQsXHJcbiAgY2hpbGRyZW4sXHJcbiAgc3JjLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcclxuXHJcbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT0gXCJzdHJpbmdcIikgY2xhc3NMaXN0ID0gW2NsYXNzTGlzdF1cclxuICBmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBjbGFzc0xpc3QpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgfVxyXG5cclxuICBpZiAoaWQpIGVsZW1lbnQuaWQgPSBpZFxyXG4gIGlmIChzcmMpIGVsZW1lbnQuc3JjID0gc3JjXHJcbiAgaWYgKHRleHQpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0XHJcbiAgaWYgKHBhcmVudCkgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpXHJcbiAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSBjaGlsZHJlbiA9IFtjaGlsZHJlbl1cclxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuLy8gUmVjcmVhdGUgSG9tZSBQYWdlXHJcbi8vIDxkaXYgY2xhc3M9XCJ3ZWxjb21lLWJveFwiPlxyXG4vLyAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lLTFcIj5cclxuLy8gICAgIDxpbWcgY2xhc3M9XCJ3ZWxjb21lLWxvZ29cIiBzcmM9XCIuL2ltYWdlcy9rdXJvd2Etc2FuLXdoaXRlLnN2Z1wiIC8+XHJcbi8vICAgICBLdXJvd2Etc2FuXHJcbi8vICAgPC9kaXY+XHJcbi8vICAgPGRpdiBjbGFzcz1cIndlbGNvbWUtMlwiPlxyXG4vLyAgICAgPHA+V2VsY29tZSB0byBLdXJvd2Etc2FuIEphcGFuZXNlIEJha2VyeSE8L3A+XHJcbi8vICAgICA8cD5UaGlzIGlzIG5vdCBhIHJlYWwgYmFrZXJ5LCBzb3JyeS4gVGhlIHBpY3R1cmVzIGxvb2sgZ29vZCB0aG91Z2guPC9wPlxyXG4vLyAgIDwvZGl2PlxyXG4vLyAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lLTNcIj5cclxuLy8gICAgIDxkaXYgaWQ9XCJ3ZWxjb21lLWJ1dHRvblwiIGNsYXNzPVwibWVudS1idXR0b24gaGVhZGVyLXRhYlwiPlxyXG4vLyAgICAgICBMb29rIGF0IHRoZSBtZW51IGFueXdheVxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgPC9kaXY+XHJcbi8vIDwvZGl2PlxyXG5cclxuY29uc3QgZ2V0SG9tZVBhZ2VEaXYgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2VsY29tZUJveCA9IGFkZEVsZW1lbnQoe1xyXG4gICAgdHlwZTogXCJkaXZcIixcclxuICAgIGNsYXNzTGlzdDogXCJ3ZWxjb21lLWJveFwiLFxyXG4gIH0pXHJcblxyXG4gIC8vIENyZWF0ZSBsb2dvIHBhcnQgb24gdGhlIHdlbGNvbWUgYm94XHJcbiAgY29uc3Qgd2VsY29tZTEgPSBhZGRFbGVtZW50KHtcclxuICAgIHR5cGU6IFwiZGl2XCIsXHJcbiAgICBwYXJlbnQ6IHdlbGNvbWVCb3gsXHJcbiAgICBjbGFzc0xpc3Q6IFwid2VsY29tZS0xXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICBhZGRFbGVtZW50KHtcclxuICAgICAgICB0eXBlOiBcImltZ1wiLFxyXG4gICAgICAgIGNsYXNzTGlzdDogXCJ3ZWxjb21lLWxvZ29cIixcclxuICAgICAgICBzcmM6IHdoaXRlTG9nbyxcclxuICAgICAgfSksXHJcbiAgICAgIGFkZEVsZW1lbnQoe1xyXG4gICAgICAgIHR5cGU6IFwiZGl2XCIsXHJcbiAgICAgICAgdGV4dDogXCJLdXJvd2Etc2FuXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICB9KVxyXG5cclxuICAvLyBDcmVhdGUgdGV4dCBwYXJ0IG9uIHRoZSB3ZWxjb21lIGJveFxyXG4gIGNvbnN0IHdlbGNvbWUyID0gYWRkRWxlbWVudCh7XHJcbiAgICB0eXBlOiBcImRpdlwiLFxyXG4gICAgcGFyZW50OiB3ZWxjb21lQm94LFxyXG4gICAgY2xhc3NMaXN0OiBcIndlbGNvbWUtMlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgYWRkRWxlbWVudCh7XHJcbiAgICAgICAgdHlwZTogXCJwXCIsXHJcbiAgICAgICAgdGV4dDogXCJXZWxjb21lIHRvIEt1cm93YS1zYW4gSmFwYW5lc2UgQmFrZXJ5IVwiLFxyXG4gICAgICB9KSxcclxuICAgICAgYWRkRWxlbWVudCh7XHJcbiAgICAgICAgdHlwZTogXCJwXCIsXHJcbiAgICAgICAgdGV4dDogXCJUaGlzIGlzIG5vdCBhIHJlYWwgYmFrZXJ5LCBzb3JyeS4gVGhlIHBpY3R1cmVzIGxvb2sgZ29vZCB0aG91Z2guXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICB9KVxyXG5cclxuICAvLyBDcmVhdGUgYnV0dG9uIHBhcnQgb24gdGhlIHdlbGNvbWUgYm94XHJcbiAgY29uc3Qgd2VsY29tZTMgPSBhZGRFbGVtZW50KHtcclxuICAgIHR5cGU6IFwiZGl2XCIsXHJcbiAgICBwYXJlbnQ6IHdlbGNvbWVCb3gsXHJcbiAgICBjbGFzc0xpc3Q6IFwid2VsY29tZS0zXCIsXHJcbiAgICBjaGlsZHJlbjogYWRkRWxlbWVudCh7XHJcbiAgICAgIGlkOiBcIndlbGNvbWUtYnV0dG9uXCIsXHJcbiAgICAgIGNsYXNzTGlzdDogXCJoZWFkZXItdGFiXCIsXHJcbiAgICAgIHRleHQ6IFwiTG9vayBhdCB0aGUgbWVudSBhbnl3YXlcIixcclxuICAgIH0pLFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB3ZWxjb21lQm94XHJcbn1cclxuXHJcbmNvbnN0IGdldE1lbnVQYWdlRGl2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJnTWFzayA9IGFkZEVsZW1lbnQoe1xyXG4gICAgdHlwZTogXCJkaXZcIixcclxuICAgIGNsYXNzTGlzdDogXCJtZW51LWJnLW1hc2tcIixcclxuICB9KVxyXG5cclxuICBjb25zdCBtZW51Q2FyZHMgPSBhZGRFbGVtZW50KHtcclxuICAgIHR5cGU6IFwiZGl2XCIsXHJcbiAgICBjbGFzc0xpc3Q6IFwibWVudS1jYXJkc1wiLFxyXG4gICAgcGFyZW50OiBiZ01hc2ssXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICBhZGRFbGVtZW50KHtcclxuICAgICAgICBjbGFzc0xpc3Q6IFwibWVudS1jYXJkXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIGFkZEVsZW1lbnQoe1xyXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFwibWVudS1pbWctY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBhZGRFbGVtZW50KHtcclxuICAgICAgICAgICAgICB0eXBlOiBcImltZ1wiLFxyXG4gICAgICAgICAgICAgIGNsYXNzTGlzdDogXCJtZW51LWltZ1wiLFxyXG4gICAgICAgICAgICAgIHNyYzogY3JvaXNzYW50LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgYWRkRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogXCJtZW51LXRleHRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJLdXJvd2Etc2FuXCIsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgICAgYWRkRWxlbWVudCh7XHJcbiAgICAgICAgY2xhc3NMaXN0OiBcIm1lbnUtY2FyZFwiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBhZGRFbGVtZW50KHtcclxuICAgICAgICAgICAgY2xhc3NMaXN0OiBcIm1lbnUtaW1nLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogYWRkRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWdcIixcclxuICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFwibWVudS1pbWdcIixcclxuICAgICAgICAgICAgICBzcmM6IGNyb3NhbmR3aWNoLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgYWRkRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogXCJtZW51LXRleHRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJLdXJvd2Etc2FuZHdpY2hcIixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBhZGRFbGVtZW50KHtcclxuICAgICAgICBjbGFzc0xpc3Q6IFwibWVudS1jYXJkXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIGFkZEVsZW1lbnQoe1xyXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFwibWVudS1pbWctY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBhZGRFbGVtZW50KHtcclxuICAgICAgICAgICAgICB0eXBlOiBcImltZ1wiLFxyXG4gICAgICAgICAgICAgIGNsYXNzTGlzdDogXCJtZW51LWltZ1wiLFxyXG4gICAgICAgICAgICAgIHNyYzogYmFnZWxzLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgYWRkRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogXCJtZW51LXRleHRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJCYWdlbHNcIixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICB9KVxyXG5cclxuICByZXR1cm4gYmdNYXNrXHJcbn1cclxuXHJcbmNvbnN0IGdldENvbnRhY3RQYWdlRGl2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJnTWFzayA9IGFkZEVsZW1lbnQoe1xyXG4gICAgdHlwZTogXCJkaXZcIixcclxuICAgIGNsYXNzTGlzdDogXCJtZW51LWJnLW1hc2tcIixcclxuICB9KVxyXG5cclxuICBjb25zdCBjb250YWN0Qm94ID0gYWRkRWxlbWVudCh7XHJcbiAgICB0eXBlOiBcImRpdlwiLFxyXG4gICAgY2xhc3NMaXN0OiBcImNvbnRhY3QtYm94XCIsXHJcbiAgICBwYXJlbnQ6IGJnTWFzayxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIGFkZEVsZW1lbnQoe1xyXG4gICAgICAgIGNsYXNzTGlzdDogXCJjb250YWN0LWRpdlwiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBhZGRFbGVtZW50KHtcclxuICAgICAgICAgICAgdHlwZTogXCJpbWdcIixcclxuICAgICAgICAgICAgY2xhc3NMaXN0OiBcImNvbnRhY3QtaW1nXCIsXHJcbiAgICAgICAgICAgIHNyYzogZW1haWxJY29uLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBhZGRFbGVtZW50KHtcclxuICAgICAgICAgICAgdGV4dDogXCJFbWFpbDoga3Vyb3dhLXNhbkBjcm9pc3NhbnQuY29tXCIsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgICAgYWRkRWxlbWVudCh7XHJcbiAgICAgICAgY2xhc3NMaXN0OiBcImNvbnRhY3QtZGl2XCIsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIGFkZEVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0eXBlOiBcImltZ1wiLFxyXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFwiY29udGFjdC1pbWdcIixcclxuICAgICAgICAgICAgc3JjOiBwaG9uZUljb24sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGFkZEVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlBob25lIE51bWJlcjogMTIzIDQ1NiA3ODlcIixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBhZGRFbGVtZW50KHtcclxuICAgICAgICBjbGFzc0xpc3Q6IFwiY29udGFjdC1kaXZcIixcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgYWRkRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1nXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogXCJjb250YWN0LWltZ1wiLFxyXG4gICAgICAgICAgICBzcmM6IHN0b3JlSWNvbixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgYWRkRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiTG9jYXRpb246IEt1cm93YSBDaXR5LCBKYXBhblwiLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgXSxcclxuICAgICAgfSksXHJcbiAgICAgIGFkZEVsZW1lbnQoe1xyXG4gICAgICAgIGNsYXNzTGlzdDogXCJjb250YWN0LWRpdlwiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICBhZGRFbGVtZW50KHtcclxuICAgICAgICAgICAgdHlwZTogXCJpbWdcIixcclxuICAgICAgICAgICAgY2xhc3NMaXN0OiBcImNvbnRhY3QtaW1nXCIsXHJcbiAgICAgICAgICAgIHNyYzogd2Vic2l0ZUljb24sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGFkZEVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0ZXh0OiBcIldlYnNpdGU6IGFlY2VsLmdpdGh1Yi5pby9yZXN0YXVyYW50XCIsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgfSlcclxuICByZXR1cm4gYmdNYXNrXHJcbn1cclxuXHJcbi8vIENoYW5nZSBodG1sIGJhY2tncm91bmQgdG8gdGhlIGhvbWUgcGFnZSBiYWNrZ3JvdW5kXHJcbmNvbnN0IGNoYW5nZUJhY2tncm91bmRUbyA9IChicmVhZEJHKSA9PiB7XHJcbiAgaHRtbC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2JyZWFkQkd9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZGBcclxuICBodG1sLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiXHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlUYWJQYWdlID0gKHRhYk5hbWUpID0+IHtcclxuICBpZiAodGFiTmFtZSA9PSBcImhvbWVcIikge1xyXG4gICAgY29uc29sZS5sb2coXCJHb2luZyB0byB0aGUgaG9tZSBwYWdlXCIpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdldEhvbWVQYWdlRGl2KCkpXHJcbiAgICBjaGFuZ2VCYWNrZ3JvdW5kVG8oYnJlYWRCRylcclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKClcclxuICB9IGVsc2UgaWYgKHRhYk5hbWUgPT0gXCJtZW51XCIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiR29pbmcgdG8gdGhlIG1lbnUgcGFnZVwiKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnZXRNZW51UGFnZURpdigpKVxyXG4gICAgY2hhbmdlQmFja2dyb3VuZFRvKGJha2VyeUJHKVxyXG4gIH0gZWxzZSBpZiAodGFiTmFtZSA9PSBcImNvbnRhY3RcIikge1xyXG4gICAgY29uc29sZS5sb2coXCJHb2luZyB0byB0aGUgY29udGFjdCBwYWdlXCIpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdldENvbnRhY3RQYWdlRGl2KCkpXHJcbiAgICBjaGFuZ2VCYWNrZ3JvdW5kVG8oY29udGFjdEJHKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgY2FuJ3QgaGFwcGVuXCIpXHJcbiAgfVxyXG59XHJcblxyXG4vLyBFdmVudCBMaXN0ZW5lcnMgZm9yIEhlYWRlciBUYWJzIChIb21lLCBNZW51LCBDb250YWN0LCBXZWxjb21lIEJ1dHRvbilcclxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyVGFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoZWFkZXItdGFiXCIpXHJcbiAgZm9yIChjb25zdCB0YWIgb2YgaGVhZGVyVGFicykge1xyXG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hvc2VuLXRhYlwiKSkge1xyXG4gICAgICAgIC8vIFlvdSBhcmUgYWxyZWFkeSBvbiB0aGUgcGFnZSwgZG8gbm90aGluZ1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGNsaWNrZWQgdGhlIHRhYiB0aGF0IHlvdSBhcmUgYWxyZWFkeSBvbiBsb2xcIilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob3Nlbi10YWJcIikuY2xhc3NMaXN0LnJlbW92ZShcImNob3Nlbi10YWJcIilcclxuICAgICAgICBsZXQgdGFiTmFtZSA9IFwiXCJcclxuICAgICAgICBpZiAodGFiLmlkID09IFwid2VsY29tZS1idXR0b25cIikge1xyXG4gICAgICAgICAgdGFiTmFtZSA9IFwibWVudVwiXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIikuY2xhc3NMaXN0LmFkZChcImNob3Nlbi10YWJcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGFiTmFtZSA9IHRhYi5pZFxyXG4gICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW4tdGFiXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclBhZ2UoKVxyXG4gICAgICAgIGRpc3BsYXlUYWJQYWdlKHRhYk5hbWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIilcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxyXG5cclxuY2xlYXJQYWdlKClcclxuZGlzcGxheVRhYlBhZ2UoXCJob21lXCIpXHJcbmFkZEV2ZW50TGlzdGVuZXJzKClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9