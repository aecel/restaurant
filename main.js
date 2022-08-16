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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  font-family: \"Nunito\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  --gap: 24px;\r\n  --light-color: rgba(255, 255, 255, 0.748);\r\n  --shadow: 5px 5px rgba(0, 0, 0, 0.27);\r\n  --main-color: rgb(6, 31, 70);\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\r\n  background-size: cover;\r\n  /* overflow: hidden;\r\n  background-position: center;\r\n  background-repeat: no-repeat; */\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: auto;\r\n}\r\n\r\nheader {\r\n  padding: 15px;\r\n  padding-left: 36px;\r\n  padding-right: 36px;\r\n  background-color: #fff8ebe1;\r\n  /* color: white; */\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  box-shadow: var(--shadow);\r\n  z-index: 8;\r\n}\r\n\r\n.header-left {\r\n  display: flex;\r\n  gap: 16px;\r\n  align-items: center;\r\n}\r\n\r\n.header-right {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n\r\n  font-size: small;\r\n}\r\n\r\n.header-tab {\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  background-color: #fff;\r\n  font-weight: bold;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.header-tab:hover {\r\n  background-color: rgb(235, 206, 164);\r\n}\r\n\r\n.header-tab:active {\r\n  background-color: rgb(211, 148, 53);\r\n}\r\n\r\n.chosen-tab {\r\n  background-color: rgb(65, 47, 20);\r\n  color: white;\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* background-color: rgba(0, 0, 0, 0.832); */\r\n  border-radius: 50%;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.logo {\r\n  height: 50px;\r\n  width: auto;\r\n}\r\n\r\n.menu-bg-mask {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(24, 15, 5, 0.573);\r\n  \r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.menu-cards {\r\n  /* height: 100%;\r\n  width: 100%; */\r\n  flex: 1;\r\n  margin: 48px;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 36px;\r\n  flex-wrap: wrap;\r\n  \r\n}\r\n\r\n.menu-card {\r\n  margin-top: 48px;\r\n  background-color: rgba(0, 0, 0, 0.589);\r\n  border-radius: 20px;\r\n  height: 200px;\r\n  width: 300px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  position: relative;\r\n}\r\n\r\n/* .menu-price {\r\n  background-color: #000000a1;\r\n  font-weight: bold;\r\n  border-radius: 50%;\r\n  height: 50px;\r\n  width: 50px;\r\n\r\n  position: absolute;\r\n  bottom: 15px;\r\n  right: 15px;\r\n} */\r\n\r\n.menu-img-container {\r\n  background-color: #ffffffc6;\r\n  border-radius: 50%;\r\n  height: 200px;\r\n  width: 200px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  position: absolute;\r\n  top: -50px;\r\n  left: 50px;\r\n}\r\n\r\n.menu-img {\r\n  height: 180px;\r\n  width: 180px;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.menu-text {\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 145px;\r\n}\r\n\r\n.contact-box {\r\n  height: 70%;\r\n  width: 400px;\r\n  background-color: #0e0e0ea0;\r\n  color: white;\r\n  margin-left: 40px;\r\n  border-radius: 30px;\r\n  padding: 48px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.contact-div {\r\n  display: flex;\r\n  gap: 24px;\r\n  align-items: center;\r\n}\r\n\r\n.contact-img {\r\n  height: 50px;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.welcome-box {\r\n  height: 80%;\r\n  width: 50%;\r\n  background-color: #1a1a1aa0;\r\n  color: white;\r\n  margin-left: 40px;\r\n  border-radius: 30px;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.welcome-1 {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  gap: 48px;\r\n  font-size: 60px;\r\n}\r\n\r\n.welcome-logo {\r\n  height: 200px;\r\n  width: auto;\r\n}\r\n\r\n.welcome-2 {\r\n  text-align: center;\r\n}\r\n\r\n#welcome-button {\r\n  padding: 16px;\r\n  padding-left: 26px;\r\n  padding-right: 26px;\r\n  background-color: rgb(161, 59, 59);\r\n  border-radius: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n#welcome-button:hover {\r\n  background-color: rgb(207, 122, 122);\r\n}\r\n\r\n#welcome-button:active {\r\n  background-color: rgb(252, 218, 218);\r\n  color: rgb(83, 22, 22);\r\n}\r\n\r\nfooter {\r\n  font-size: 10px;\r\n  text-align: center;\r\n  background-color: #1a1a1ac9;\r\n  color: white;\r\n  padding-left: var(--gap);\r\n  padding-right: var(--gap);\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n#content {\r\n  flex: 1;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap\");\r\n\r\n:root {\r\n  font-family: \"Nunito\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  --gap: 24px;\r\n  --light-color: rgba(255, 255, 255, 0.748);\r\n  --shadow: 5px 5px rgba(0, 0, 0, 0.27);\r\n  --main-color: rgb(6, 31, 70);\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  background: url(./images/bread-bg.jpg) no-repeat center center fixed;\r\n  background-size: cover;\r\n  /* overflow: hidden;\r\n  background-position: center;\r\n  background-repeat: no-repeat; */\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: auto;\r\n}\r\n\r\nheader {\r\n  padding: 15px;\r\n  padding-left: 36px;\r\n  padding-right: 36px;\r\n  background-color: #fff8ebe1;\r\n  /* color: white; */\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  box-shadow: var(--shadow);\r\n  z-index: 8;\r\n}\r\n\r\n.header-left {\r\n  display: flex;\r\n  gap: 16px;\r\n  align-items: center;\r\n}\r\n\r\n.header-right {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n\r\n  font-size: small;\r\n}\r\n\r\n.header-tab {\r\n  padding: 10px;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  background-color: #fff;\r\n  font-weight: bold;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.header-tab:hover {\r\n  background-color: rgb(235, 206, 164);\r\n}\r\n\r\n.header-tab:active {\r\n  background-color: rgb(211, 148, 53);\r\n}\r\n\r\n.chosen-tab {\r\n  background-color: rgb(65, 47, 20);\r\n  color: white;\r\n}\r\n\r\n.logo-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* background-color: rgba(0, 0, 0, 0.832); */\r\n  border-radius: 50%;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.logo {\r\n  height: 50px;\r\n  width: auto;\r\n}\r\n\r\n.menu-bg-mask {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(24, 15, 5, 0.573);\r\n  \r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.menu-cards {\r\n  /* height: 100%;\r\n  width: 100%; */\r\n  flex: 1;\r\n  margin: 48px;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 36px;\r\n  flex-wrap: wrap;\r\n  \r\n}\r\n\r\n.menu-card {\r\n  margin-top: 48px;\r\n  background-color: rgba(0, 0, 0, 0.589);\r\n  border-radius: 20px;\r\n  height: 200px;\r\n  width: 300px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  position: relative;\r\n}\r\n\r\n/* .menu-price {\r\n  background-color: #000000a1;\r\n  font-weight: bold;\r\n  border-radius: 50%;\r\n  height: 50px;\r\n  width: 50px;\r\n\r\n  position: absolute;\r\n  bottom: 15px;\r\n  right: 15px;\r\n} */\r\n\r\n.menu-img-container {\r\n  background-color: #ffffffc6;\r\n  border-radius: 50%;\r\n  height: 200px;\r\n  width: 200px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  position: absolute;\r\n  top: -50px;\r\n  left: 50px;\r\n}\r\n\r\n.menu-img {\r\n  height: 180px;\r\n  width: 180px;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.menu-text {\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 145px;\r\n}\r\n\r\n.contact-box {\r\n  height: 70%;\r\n  width: 400px;\r\n  background-color: #0e0e0ea0;\r\n  color: white;\r\n  margin-left: 40px;\r\n  border-radius: 30px;\r\n  padding: 48px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.contact-div {\r\n  display: flex;\r\n  gap: 24px;\r\n  align-items: center;\r\n}\r\n\r\n.contact-img {\r\n  height: 50px;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.welcome-box {\r\n  height: 80%;\r\n  width: 50%;\r\n  background-color: #1a1a1aa0;\r\n  color: white;\r\n  margin-left: 40px;\r\n  border-radius: 30px;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.welcome-1 {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  gap: 48px;\r\n  font-size: 60px;\r\n}\r\n\r\n.welcome-logo {\r\n  height: 200px;\r\n  width: auto;\r\n}\r\n\r\n.welcome-2 {\r\n  text-align: center;\r\n}\r\n\r\n#welcome-button {\r\n  padding: 16px;\r\n  padding-left: 26px;\r\n  padding-right: 26px;\r\n  background-color: rgb(161, 59, 59);\r\n  border-radius: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n#welcome-button:hover {\r\n  background-color: rgb(207, 122, 122);\r\n}\r\n\r\n#welcome-button:active {\r\n  background-color: rgb(252, 218, 218);\r\n  color: rgb(83, 22, 22);\r\n}\r\n\r\nfooter {\r\n  font-size: 10px;\r\n  text-align: center;\r\n  background-color: #1a1a1ac9;\r\n  color: white;\r\n  padding-left: var(--gap);\r\n  padding-right: var(--gap);\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n#content {\r\n  flex: 1;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/addElement.js":
/*!***************************!*\
  !*** ./src/addElement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addElement);

/***/ }),

/***/ "./src/getContactPageDiv.js":
/*!**********************************!*\
  !*** ./src/getContactPageDiv.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_email_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/email.svg */ "./src/images/email.svg");
/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/phone.svg */ "./src/images/phone.svg");
/* harmony import */ var _images_store_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/store.svg */ "./src/images/store.svg");
/* harmony import */ var _images_website_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/website.svg */ "./src/images/website.svg");
/* harmony import */ var _addElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addElement.js */ "./src/addElement.js");






const contactDetailChild = (srcImg, contactText) => {
  return (0,_addElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
    classList: "contact-div",
    children: [
      (0,_addElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
        type: "img",
        classList: "contact-img",
        src: srcImg,
      }),
      (0,_addElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
        text: contactText,
      }),
    ],
  })
}

const getContactPageDiv = () => {
  const bgMask = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
    type: "div",
    classList: "menu-bg-mask",
  })

  const contactBox = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
    type: "div",
    classList: "contact-box",
    parent: bgMask,
    children: [
      contactDetailChild(_images_email_svg__WEBPACK_IMPORTED_MODULE_0__, "Email: kurowa-san@croissant.com"),
      contactDetailChild(_images_phone_svg__WEBPACK_IMPORTED_MODULE_1__, "Phone Number: 123 456 789"),
      contactDetailChild(_images_store_svg__WEBPACK_IMPORTED_MODULE_2__, "Location: Kurowa City, Japan"),
      contactDetailChild(_images_website_svg__WEBPACK_IMPORTED_MODULE_3__, "Website: aecel.github.io/restaurant"),
    ],
  })
  return bgMask
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getContactPageDiv);


/***/ }),

/***/ "./src/getHomePageDiv.js":
/*!*******************************!*\
  !*** ./src/getHomePageDiv.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_kurowa_san_white_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/kurowa-san-white.svg */ "./src/images/kurowa-san-white.svg");
/* harmony import */ var _addElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addElement.js */ "./src/addElement.js");



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
    const welcomeBox = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: "div",
      classList: "welcome-box",
    })
  
    // Create logo part on the welcome box
    const welcome1 = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: "div",
      parent: welcomeBox,
      classList: "welcome-1",
      children: [
        (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
          type: "img",
          classList: "welcome-logo",
          src: _images_kurowa_san_white_svg__WEBPACK_IMPORTED_MODULE_0__,
        }),
        (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
          type: "div",
          text: "Kurowa-san",
        }),
      ],
    })
  
    // Create text part on the welcome box
    const welcome2 = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: "div",
      parent: welcomeBox,
      classList: "welcome-2",
      children: [
        (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
          type: "p",
          text: "Welcome to Kurowa-san Japanese Bakery!",
        }),
        (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
          type: "p",
          text: "This is not a real bakery, sorry. The pictures look good though.",
        }),
      ],
    })
  
    // Create button part on the welcome box
    const welcome3 = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: "div",
      parent: welcomeBox,
      classList: "welcome-3",
      children: (0,_addElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
        id: "welcome-button",
        // classList: "header-tab",
        text: "Look at the menu anyway",
      }),
    })
  
    return welcomeBox
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHomePageDiv);

/***/ }),

/***/ "./src/getMenuPageDiv.js":
/*!*******************************!*\
  !*** ./src/getMenuPageDiv.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_crosandwich_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/crosandwich.png */ "./src/images/crosandwich.png");
/* harmony import */ var _images_kurowasan_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/kurowasan.jpg */ "./src/images/kurowasan.jpg");
/* harmony import */ var _images_bagels_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bagels.jpg */ "./src/images/bagels.jpg");
/* harmony import */ var _images_strawberry_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/strawberry.jpg */ "./src/images/strawberry.jpg");
/* harmony import */ var _images_tray_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/tray.jpg */ "./src/images/tray.jpg");
/* harmony import */ var _images_baguette_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/baguette.jpg */ "./src/images/baguette.jpg");
/* harmony import */ var _images_melonsan_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/melonsan.png */ "./src/images/melonsan.png");
/* harmony import */ var _images_pain_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/pain.png */ "./src/images/pain.png");
/* harmony import */ var _images_dorayaki_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/dorayaki.png */ "./src/images/dorayaki.png");
/* harmony import */ var _images_currybread_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/currybread.png */ "./src/images/currybread.png");
/* harmony import */ var _addElement_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addElement.js */ "./src/addElement.js");












const menuCardChild = (srcImg, menuText) => {
  return (0,_addElement_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
    classList: "menu-card",
    children: [
      (0,_addElement_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
        classList: "menu-img-container",
        children: (0,_addElement_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
          type: "img",
          classList: "menu-img",
          src: srcImg,
        }),
      }),
      (0,_addElement_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
        classList: "menu-text",
        text: menuText,
      }),
    ],
  })
}

const getMenuPageDiv = () => {
  const bgMask = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
    type: "div",
    classList: "menu-bg-mask",
  })

  const menuCards = (0,_addElement_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
    type: "div",
    classList: "menu-cards",
    parent: bgMask,
    children: [
      menuCardChild(_images_kurowasan_jpg__WEBPACK_IMPORTED_MODULE_1__, "Kurowa-san"),
      menuCardChild(_images_crosandwich_png__WEBPACK_IMPORTED_MODULE_0__, "Kurowa-sandwich"),
      menuCardChild(_images_strawberry_jpg__WEBPACK_IMPORTED_MODULE_3__, "Strawberry Kurowa-san"),
      menuCardChild(_images_pain_png__WEBPACK_IMPORTED_MODULE_7__, "Pain Au Chocolat"),
      menuCardChild(_images_tray_jpg__WEBPACK_IMPORTED_MODULE_4__, "Kurowa-san Party"),
      menuCardChild(_images_melonsan_png__WEBPACK_IMPORTED_MODULE_6__, "Melon-san"),
      menuCardChild(_images_dorayaki_png__WEBPACK_IMPORTED_MODULE_8__, "Dorayaki"),
      menuCardChild(_images_currybread_png__WEBPACK_IMPORTED_MODULE_9__, "Curry Bread"),
      menuCardChild(_images_baguette_jpg__WEBPACK_IMPORTED_MODULE_5__, "Baguette"),
      menuCardChild(_images_bagels_jpg__WEBPACK_IMPORTED_MODULE_2__, "Bagel"),
    ],
  })

  return bgMask
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMenuPageDiv);


/***/ }),

/***/ "./src/images/bagels.jpg":
/*!*******************************!*\
  !*** ./src/images/bagels.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6f134b98984f7157879.jpg";

/***/ }),

/***/ "./src/images/baguette.jpg":
/*!*********************************!*\
  !*** ./src/images/baguette.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c8d5049d61ac64fb53b.jpg";

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

/***/ "./src/images/crosandwich.png":
/*!************************************!*\
  !*** ./src/images/crosandwich.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "429defabed055af64524.png";

/***/ }),

/***/ "./src/images/currybread.png":
/*!***********************************!*\
  !*** ./src/images/currybread.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e224943d3e4a6f9f71a9.png";

/***/ }),

/***/ "./src/images/dorayaki.png":
/*!*********************************!*\
  !*** ./src/images/dorayaki.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f397dbe489a172385b86.png";

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

module.exports = __webpack_require__.p + "f374a5cd3a295500b98b.jpg";

/***/ }),

/***/ "./src/images/melonsan.png":
/*!*********************************!*\
  !*** ./src/images/melonsan.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8a3846a4cd5e9256554.png";

/***/ }),

/***/ "./src/images/pain.png":
/*!*****************************!*\
  !*** ./src/images/pain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd0fc106594b046fe02f.png";

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

/***/ "./src/images/strawberry.jpg":
/*!***********************************!*\
  !*** ./src/images/strawberry.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "373ca9ff71ba529d7675.jpg";

/***/ }),

/***/ "./src/images/tray.jpg":
/*!*****************************!*\
  !*** ./src/images/tray.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "baa568110165c7583626.jpg";

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_bread_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/bread-bg.jpg */ "./src/images/bread-bg.jpg");
/* harmony import */ var _images_bakery_bg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bakery-bg.jpg */ "./src/images/bakery-bg.jpg");
/* harmony import */ var _images_contact_bg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/contact-bg.jpg */ "./src/images/contact-bg.jpg");
/* harmony import */ var _getHomePageDiv_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getHomePageDiv.js */ "./src/getHomePageDiv.js");
/* harmony import */ var _getMenuPageDiv_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getMenuPageDiv.js */ "./src/getMenuPageDiv.js");
/* harmony import */ var _getContactPageDiv_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getContactPageDiv.js */ "./src/getContactPageDiv.js");










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

// Change html background to the home page background
const changeBackgroundTo = (breadBG) => {
  html.style.background = `url(${breadBG}) no-repeat center center fixed`
  html.style.backgroundSize = "cover"
}

const displayTabPage = (tabName) => {
  if (tabName == "home") {
    console.log("Going to the home page")
    content.appendChild((0,_getHomePageDiv_js__WEBPACK_IMPORTED_MODULE_4__["default"])())
    changeBackgroundTo(_images_bread_bg_jpg__WEBPACK_IMPORTED_MODULE_1__)
    addWelcomeButtonEvent()
  } else if (tabName == "menu") {
    console.log("Going to the menu page")
    content.appendChild((0,_getMenuPageDiv_js__WEBPACK_IMPORTED_MODULE_5__["default"])())
    changeBackgroundTo(_images_bakery_bg_jpg__WEBPACK_IMPORTED_MODULE_2__)
  } else if (tabName == "contact") {
    console.log("Going to the contact page")
    content.appendChild((0,_getContactPageDiv_js__WEBPACK_IMPORTED_MODULE_6__["default"])())
    changeBackgroundTo(_images_contact_bg_jpg__WEBPACK_IMPORTED_MODULE_3__)
  } else {
    console.log("This can't happen")
  }
}

// Add Event Listeners for Header Tabs (Home, Menu, Contact)
const addEventListeners = () => {
  const headerTabs = document.getElementsByClassName("header-tab")
  for (const tab of headerTabs) {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("chosen-tab")) {
        // You are already on the page, do nothing
        console.log("You clicked the tab that you are already on lol")
      } else {
        document.querySelector(".chosen-tab").classList.remove("chosen-tab")

        const tabName = tab.id
        tab.classList.add("chosen-tab")

        clearPage()
        displayTabPage(tabName)
      }
    })
  }
}

// Add event listener to red welcome button on the home page
const addWelcomeButtonEvent = () => {
  const welcomeButton = document.getElementById("welcome-button")
  welcomeButton.addEventListener("click", () => {
    document.querySelector(".chosen-tab").classList.remove("chosen-tab")
    document.getElementById("menu").classList.add("chosen-tab")
    clearPage()
    displayTabPage("menu")
  })
}

const html = document.querySelector("html")
const content = document.querySelector("#content")

clearPage()
displayTabPage("home")
addEventListeners()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxjQUFjLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFh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Olsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hZGRFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZ2V0Q29udGFjdFBhZ2VEaXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9nZXRIb21lUGFnZURpdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2dldE1lbnVQYWdlRGl2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYnJlYWQtYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1nYXA6IDI0cHg7XFxyXFxuICAtLWxpZ2h0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQ4KTtcXHJcXG4gIC0tc2hhZG93OiA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XFxyXFxuICAtLW1haW4tY29sb3I6IHJnYig2LCAzMSwgNzApO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhlYmUxO1xcclxcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG4gIHotaW5kZXg6IDg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbGVmdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yaWdodCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItdGFiIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10YWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjA2LCAxNjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXRhYjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMTQ4LCA1Myk7XFxyXFxufVxcclxcblxcclxcbi5jaG9zZW4tdGFiIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNDcsIDIwKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODMyKTsgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtYmctbWFzayB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQsIDE1LCA1LCAwLjU3Myk7XFxyXFxuICBcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmRzIHtcXHJcXG4gIC8qIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlOyAqL1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG1hcmdpbjogNDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzZweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkIHtcXHJcXG4gIG1hcmdpbi10b3A6IDQ4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTg5KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLm1lbnUtcHJpY2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGExO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTVweDtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbn0gKi9cXHJcXG5cXHJcXG4ubWVudS1pbWctY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjNjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtNTBweDtcXHJcXG4gIGxlZnQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWltZyB7XFxyXFxuICBoZWlnaHQ6IDE4MHB4O1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXRleHQge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDE0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1ib3gge1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZTBlYTA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tbGVmdDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiA0OHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbWcge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUtYm94IHtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWFhMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUtMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZ2FwOiA0OHB4O1xcclxcbiAgZm9udC1zaXplOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZS1sb2dvIHtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUtMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN3ZWxjb21lLWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDU5LCA1OSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VsY29tZS1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTIyLCAxMjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VsY29tZS1idXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIxOCwgMjE4KTtcXHJcXG4gIGNvbG9yOiByZ2IoODMsIDIyLCAyMik7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhYzk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdhcCk7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1nYXApO1xcclxcbiAgcGFkZGluZy10b3A6IDEycHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNFQUFzRTtFQUN0RSxXQUFX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YTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsT0FBTztBQUNUXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMDs0MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tZ2FwOiAyNHB4O1xcclxcbiAgLS1saWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc0OCk7XFxyXFxuICAtLXNoYWRvdzogNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xcclxcbiAgLS1tYWluLWNvbG9yOiByZ2IoNiwgMzEsIDcwKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvYnJlYWQtYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAvKiBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzZweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGViZTE7XFxyXFxuICAvKiBjb2xvcjogd2hpdGU7ICovXFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbiAgei1pbmRleDogODtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sZWZ0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJpZ2h0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10YWIge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXRhYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMDYsIDE2NCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItdGFiOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAxNDgsIDUzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNob3Nlbi10YWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA0NywgMjApO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MzIpOyAqL1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1iZy1tYXNrIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNCwgMTUsIDUsIDAuNTczKTtcXHJcXG4gIFxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZHMge1xcclxcbiAgLyogaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7ICovXFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWFyZ2luOiA0OHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzNnB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQge1xcclxcbiAgbWFyZ2luLXRvcDogNDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41ODkpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAubWVudS1wcmljZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTE7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcblxcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAxNXB4O1xcclxcbiAgcmlnaHQ6IDE1cHg7XFxyXFxufSAqL1xcclxcblxcclxcbi5tZW51LWltZy1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmM2O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC01MHB4O1xcclxcbiAgbGVmdDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaW1nIHtcXHJcXG4gIGhlaWdodDogMTgwcHg7XFxyXFxuICB3aWR0aDogMTgwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtdGV4dCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTQ1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWJveCB7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTBlMGVhMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDQ4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWltZyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZS1ib3gge1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYWEwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZS0xIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBnYXA6IDQ4cHg7XFxyXFxuICBmb250LXNpemU6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lLWxvZ28ge1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZS0yIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3dlbGNvbWUtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDI2cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgNTksIDU5KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN3ZWxjb21lLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAxMjIsIDEyMik7XFxyXFxufVxcclxcblxcclxcbiN3ZWxjb21lLWJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjE4LCAyMTgpO1xcclxcbiAgY29sb3I6IHJnYig4MywgMjIsIDIyKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWFjOTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tZ2FwKTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWdhcCk7XFxyXFxuICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYWRkRWxlbWVudCA9ICh7XHJcbiAgICBwYXJlbnQsXHJcbiAgICB0eXBlID0gXCJkaXZcIixcclxuICAgIGNsYXNzTGlzdCA9IFtdLFxyXG4gICAgaWQsXHJcbiAgICB0ZXh0LFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBzcmMsXHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcclxuICBcclxuICAgIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09IFwic3RyaW5nXCIpIGNsYXNzTGlzdCA9IFtjbGFzc0xpc3RdXHJcbiAgICBmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBjbGFzc0xpc3QpIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuICAgIH1cclxuICBcclxuICAgIGlmIChpZCkgZWxlbWVudC5pZCA9IGlkXHJcbiAgICBpZiAoc3JjKSBlbGVtZW50LnNyYyA9IHNyY1xyXG4gICAgaWYgKHRleHQpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0XHJcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudClcclxuICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSBjaGlsZHJlbiA9IFtjaGlsZHJlbl1cclxuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBhZGRFbGVtZW50IiwiaW1wb3J0IGVtYWlsSWNvbiBmcm9tIFwiLi9pbWFnZXMvZW1haWwuc3ZnXCJcclxuaW1wb3J0IHBob25lSWNvbiBmcm9tIFwiLi9pbWFnZXMvcGhvbmUuc3ZnXCJcclxuaW1wb3J0IHN0b3JlSWNvbiBmcm9tIFwiLi9pbWFnZXMvc3RvcmUuc3ZnXCJcclxuaW1wb3J0IHdlYnNpdGVJY29uIGZyb20gXCIuL2ltYWdlcy93ZWJzaXRlLnN2Z1wiXHJcbmltcG9ydCBhZGRFbGVtZW50IGZyb20gXCIuL2FkZEVsZW1lbnQuanNcIlxyXG5cclxuY29uc3QgY29udGFjdERldGFpbENoaWxkID0gKHNyY0ltZywgY29udGFjdFRleHQpID0+IHtcclxuICByZXR1cm4gYWRkRWxlbWVudCh7XHJcbiAgICBjbGFzc0xpc3Q6IFwiY29udGFjdC1kaXZcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIGFkZEVsZW1lbnQoe1xyXG4gICAgICAgIHR5cGU6IFwiaW1nXCIsXHJcbiAgICAgICAgY2xhc3NMaXN0OiBcImNvbnRhY3QtaW1nXCIsXHJcbiAgICAgICAgc3JjOiBzcmNJbWcsXHJcbiAgICAgIH0pLFxyXG4gICAgICBhZGRFbGVtZW50KHtcclxuICAgICAgICB0ZXh0OiBjb250YWN0VGV4dCxcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGdldENvbnRhY3RQYWdlRGl2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJnTWFzayA9IGFkZEVsZW1lbnQoe1xyXG4gICAgdHlwZTogXCJkaXZcIixcclxuICAgIGNsYXNzTGlzdDogXCJtZW51LWJnLW1hc2tcIixcclxuICB9KVxyXG5cclxuICBjb25zdCBjb250YWN0Qm94ID0gYWRkRWxlbWVudCh7XHJcbiAgICB0eXBlOiBcImRpdlwiLFxyXG4gICAgY2xhc3NMaXN0OiBcImNvbnRhY3QtYm94XCIsXHJcbiAgICBwYXJlbnQ6IGJnTWFzayxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIGNvbnRhY3REZXRhaWxDaGlsZChlbWFpbEljb24sIFwiRW1haWw6IGt1cm93YS1zYW5AY3JvaXNzYW50LmNvbVwiKSxcclxuICAgICAgY29udGFjdERldGFpbENoaWxkKHBob25lSWNvbiwgXCJQaG9uZSBOdW1iZXI6IDEyMyA0NTYgNzg5XCIpLFxyXG4gICAgICBjb250YWN0RGV0YWlsQ2hpbGQoc3RvcmVJY29uLCBcIkxvY2F0aW9uOiBLdXJvd2EgQ2l0eSwgSmFwYW5cIiksXHJcbiAgICAgIGNvbnRhY3REZXRhaWxDaGlsZCh3ZWJzaXRlSWNvbiwgXCJXZWJzaXRlOiBhZWNlbC5naXRodWIuaW8vcmVzdGF1cmFudFwiKSxcclxuICAgIF0sXHJcbiAgfSlcclxuICByZXR1cm4gYmdNYXNrXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldENvbnRhY3RQYWdlRGl2XHJcbiIsImltcG9ydCB3aGl0ZUxvZ28gZnJvbSBcIi4vaW1hZ2VzL2t1cm93YS1zYW4td2hpdGUuc3ZnXCJcclxuaW1wb3J0IGFkZEVsZW1lbnQgZnJvbSBcIi4vYWRkRWxlbWVudC5qc1wiXHJcblxyXG4vLyBSZWNyZWF0ZSBIb21lIFBhZ2VcclxuLy8gPGRpdiBjbGFzcz1cIndlbGNvbWUtYm94XCI+XHJcbi8vICAgPGRpdiBjbGFzcz1cIndlbGNvbWUtMVwiPlxyXG4vLyAgICAgPGltZyBjbGFzcz1cIndlbGNvbWUtbG9nb1wiIHNyYz1cIi4vaW1hZ2VzL2t1cm93YS1zYW4td2hpdGUuc3ZnXCIgLz5cclxuLy8gICAgIEt1cm93YS1zYW5cclxuLy8gICA8L2Rpdj5cclxuLy8gICA8ZGl2IGNsYXNzPVwid2VsY29tZS0yXCI+XHJcbi8vICAgICA8cD5XZWxjb21lIHRvIEt1cm93YS1zYW4gSmFwYW5lc2UgQmFrZXJ5ITwvcD5cclxuLy8gICAgIDxwPlRoaXMgaXMgbm90IGEgcmVhbCBiYWtlcnksIHNvcnJ5LiBUaGUgcGljdHVyZXMgbG9vayBnb29kIHRob3VnaC48L3A+XHJcbi8vICAgPC9kaXY+XHJcbi8vICAgPGRpdiBjbGFzcz1cIndlbGNvbWUtM1wiPlxyXG4vLyAgICAgPGRpdiBpZD1cIndlbGNvbWUtYnV0dG9uXCIgY2xhc3M9XCJtZW51LWJ1dHRvbiBoZWFkZXItdGFiXCI+XHJcbi8vICAgICAgIExvb2sgYXQgdGhlIG1lbnUgYW55d2F5XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICA8L2Rpdj5cclxuLy8gPC9kaXY+XHJcblxyXG5jb25zdCBnZXRIb21lUGFnZURpdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHdlbGNvbWVCb3ggPSBhZGRFbGVtZW50KHtcclxuICAgICAgdHlwZTogXCJkaXZcIixcclxuICAgICAgY2xhc3NMaXN0OiBcIndlbGNvbWUtYm94XCIsXHJcbiAgICB9KVxyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIGxvZ28gcGFydCBvbiB0aGUgd2VsY29tZSBib3hcclxuICAgIGNvbnN0IHdlbGNvbWUxID0gYWRkRWxlbWVudCh7XHJcbiAgICAgIHR5cGU6IFwiZGl2XCIsXHJcbiAgICAgIHBhcmVudDogd2VsY29tZUJveCxcclxuICAgICAgY2xhc3NMaXN0OiBcIndlbGNvbWUtMVwiLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIGFkZEVsZW1lbnQoe1xyXG4gICAgICAgICAgdHlwZTogXCJpbWdcIixcclxuICAgICAgICAgIGNsYXNzTGlzdDogXCJ3ZWxjb21lLWxvZ29cIixcclxuICAgICAgICAgIHNyYzogd2hpdGVMb2dvLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGFkZEVsZW1lbnQoe1xyXG4gICAgICAgICAgdHlwZTogXCJkaXZcIixcclxuICAgICAgICAgIHRleHQ6IFwiS3Vyb3dhLXNhblwiLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICBdLFxyXG4gICAgfSlcclxuICBcclxuICAgIC8vIENyZWF0ZSB0ZXh0IHBhcnQgb24gdGhlIHdlbGNvbWUgYm94XHJcbiAgICBjb25zdCB3ZWxjb21lMiA9IGFkZEVsZW1lbnQoe1xyXG4gICAgICB0eXBlOiBcImRpdlwiLFxyXG4gICAgICBwYXJlbnQ6IHdlbGNvbWVCb3gsXHJcbiAgICAgIGNsYXNzTGlzdDogXCJ3ZWxjb21lLTJcIixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICBhZGRFbGVtZW50KHtcclxuICAgICAgICAgIHR5cGU6IFwicFwiLFxyXG4gICAgICAgICAgdGV4dDogXCJXZWxjb21lIHRvIEt1cm93YS1zYW4gSmFwYW5lc2UgQmFrZXJ5IVwiLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGFkZEVsZW1lbnQoe1xyXG4gICAgICAgICAgdHlwZTogXCJwXCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIlRoaXMgaXMgbm90IGEgcmVhbCBiYWtlcnksIHNvcnJ5LiBUaGUgcGljdHVyZXMgbG9vayBnb29kIHRob3VnaC5cIixcclxuICAgICAgICB9KSxcclxuICAgICAgXSxcclxuICAgIH0pXHJcbiAgXHJcbiAgICAvLyBDcmVhdGUgYnV0dG9uIHBhcnQgb24gdGhlIHdlbGNvbWUgYm94XHJcbiAgICBjb25zdCB3ZWxjb21lMyA9IGFkZEVsZW1lbnQoe1xyXG4gICAgICB0eXBlOiBcImRpdlwiLFxyXG4gICAgICBwYXJlbnQ6IHdlbGNvbWVCb3gsXHJcbiAgICAgIGNsYXNzTGlzdDogXCJ3ZWxjb21lLTNcIixcclxuICAgICAgY2hpbGRyZW46IGFkZEVsZW1lbnQoe1xyXG4gICAgICAgIGlkOiBcIndlbGNvbWUtYnV0dG9uXCIsXHJcbiAgICAgICAgLy8gY2xhc3NMaXN0OiBcImhlYWRlci10YWJcIixcclxuICAgICAgICB0ZXh0OiBcIkxvb2sgYXQgdGhlIG1lbnUgYW55d2F5XCIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICBcclxuICAgIHJldHVybiB3ZWxjb21lQm94XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBnZXRIb21lUGFnZURpdiIsImltcG9ydCBjcm9zYW5kd2ljaCBmcm9tIFwiLi9pbWFnZXMvY3Jvc2FuZHdpY2gucG5nXCJcclxuaW1wb3J0IGNyb2lzc2FudCBmcm9tIFwiLi9pbWFnZXMva3Vyb3dhc2FuLmpwZ1wiXHJcbmltcG9ydCBiYWdlbHMgZnJvbSBcIi4vaW1hZ2VzL2JhZ2Vscy5qcGdcIlxyXG5pbXBvcnQgc3RyYXdiZXJyeSBmcm9tIFwiLi9pbWFnZXMvc3RyYXdiZXJyeS5qcGdcIlxyXG5pbXBvcnQgdHJheSBmcm9tIFwiLi9pbWFnZXMvdHJheS5qcGdcIlxyXG5pbXBvcnQgYmFndWV0dGUgZnJvbSBcIi4vaW1hZ2VzL2JhZ3VldHRlLmpwZ1wiXHJcbmltcG9ydCBtZWxvbnNhbiBmcm9tIFwiLi9pbWFnZXMvbWVsb25zYW4ucG5nXCJcclxuaW1wb3J0IGNob2NvbGF0IGZyb20gXCIuL2ltYWdlcy9wYWluLnBuZ1wiXHJcbmltcG9ydCBkb3JheWFraSBmcm9tIFwiLi9pbWFnZXMvZG9yYXlha2kucG5nXCJcclxuaW1wb3J0IGN1cnJ5YnJlYWQgZnJvbSBcIi4vaW1hZ2VzL2N1cnJ5YnJlYWQucG5nXCJcclxuaW1wb3J0IGFkZEVsZW1lbnQgZnJvbSBcIi4vYWRkRWxlbWVudC5qc1wiXHJcblxyXG5jb25zdCBtZW51Q2FyZENoaWxkID0gKHNyY0ltZywgbWVudVRleHQpID0+IHtcclxuICByZXR1cm4gYWRkRWxlbWVudCh7XHJcbiAgICBjbGFzc0xpc3Q6IFwibWVudS1jYXJkXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICBhZGRFbGVtZW50KHtcclxuICAgICAgICBjbGFzc0xpc3Q6IFwibWVudS1pbWctY29udGFpbmVyXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IGFkZEVsZW1lbnQoe1xyXG4gICAgICAgICAgdHlwZTogXCJpbWdcIixcclxuICAgICAgICAgIGNsYXNzTGlzdDogXCJtZW51LWltZ1wiLFxyXG4gICAgICAgICAgc3JjOiBzcmNJbWcsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pLFxyXG4gICAgICBhZGRFbGVtZW50KHtcclxuICAgICAgICBjbGFzc0xpc3Q6IFwibWVudS10ZXh0XCIsXHJcbiAgICAgICAgdGV4dDogbWVudVRleHQsXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBnZXRNZW51UGFnZURpdiA9ICgpID0+IHtcclxuICBjb25zdCBiZ01hc2sgPSBhZGRFbGVtZW50KHtcclxuICAgIHR5cGU6IFwiZGl2XCIsXHJcbiAgICBjbGFzc0xpc3Q6IFwibWVudS1iZy1tYXNrXCIsXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgbWVudUNhcmRzID0gYWRkRWxlbWVudCh7XHJcbiAgICB0eXBlOiBcImRpdlwiLFxyXG4gICAgY2xhc3NMaXN0OiBcIm1lbnUtY2FyZHNcIixcclxuICAgIHBhcmVudDogYmdNYXNrLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgbWVudUNhcmRDaGlsZChjcm9pc3NhbnQsIFwiS3Vyb3dhLXNhblwiKSxcclxuICAgICAgbWVudUNhcmRDaGlsZChjcm9zYW5kd2ljaCwgXCJLdXJvd2Etc2FuZHdpY2hcIiksXHJcbiAgICAgIG1lbnVDYXJkQ2hpbGQoc3RyYXdiZXJyeSwgXCJTdHJhd2JlcnJ5IEt1cm93YS1zYW5cIiksXHJcbiAgICAgIG1lbnVDYXJkQ2hpbGQoY2hvY29sYXQsIFwiUGFpbiBBdSBDaG9jb2xhdFwiKSxcclxuICAgICAgbWVudUNhcmRDaGlsZCh0cmF5LCBcIkt1cm93YS1zYW4gUGFydHlcIiksXHJcbiAgICAgIG1lbnVDYXJkQ2hpbGQobWVsb25zYW4sIFwiTWVsb24tc2FuXCIpLFxyXG4gICAgICBtZW51Q2FyZENoaWxkKGRvcmF5YWtpLCBcIkRvcmF5YWtpXCIpLFxyXG4gICAgICBtZW51Q2FyZENoaWxkKGN1cnJ5YnJlYWQsIFwiQ3VycnkgQnJlYWRcIiksXHJcbiAgICAgIG1lbnVDYXJkQ2hpbGQoYmFndWV0dGUsIFwiQmFndWV0dGVcIiksXHJcbiAgICAgIG1lbnVDYXJkQ2hpbGQoYmFnZWxzLCBcIkJhZ2VsXCIpLFxyXG4gICAgXSxcclxuICB9KVxyXG5cclxuICByZXR1cm4gYmdNYXNrXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE1lbnVQYWdlRGl2XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCJcclxuXHJcbmltcG9ydCBicmVhZEJHIGZyb20gXCIuL2ltYWdlcy9icmVhZC1iZy5qcGdcIlxyXG5pbXBvcnQgYmFrZXJ5QkcgZnJvbSBcIi4vaW1hZ2VzL2Jha2VyeS1iZy5qcGdcIlxyXG5pbXBvcnQgY29udGFjdEJHIGZyb20gXCIuL2ltYWdlcy9jb250YWN0LWJnLmpwZ1wiXHJcblxyXG5pbXBvcnQgZ2V0SG9tZVBhZ2VEaXYgZnJvbSBcIi4vZ2V0SG9tZVBhZ2VEaXYuanNcIlxyXG5pbXBvcnQgZ2V0TWVudVBhZ2VEaXYgZnJvbSBcIi4vZ2V0TWVudVBhZ2VEaXYuanNcIlxyXG5pbXBvcnQgZ2V0Q29udGFjdFBhZ2VEaXYgZnJvbSBcIi4vZ2V0Q29udGFjdFBhZ2VEaXYuanNcIlxyXG5cclxuY29uc3QgcmVtb3ZlQWxsQ2hpbGROb2RlcyA9IChwYXJlbnQpID0+IHtcclxuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZClcclxuICB9XHJcbn1cclxuXHJcbi8vIENsZWFyIHRoZSBtYWluIGJvZHkgb2YgdGhlIHBhZ2VcclxuLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBvZiBkaXYgd2l0aCBpZD1cImNvbnRlbnRcIlxyXG5jb25zdCBjbGVhclBhZ2UgPSAoKSA9PiB7XHJcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KVxyXG5cclxuICAvLyBSZW1vdmUgYmFja2dyb3VuZCBpbWFnZSBvZiBodG1sXHJcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpXHJcbiAgaHRtbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCJcclxufVxyXG5cclxuLy8gQ2hhbmdlIGh0bWwgYmFja2dyb3VuZCB0byB0aGUgaG9tZSBwYWdlIGJhY2tncm91bmRcclxuY29uc3QgY2hhbmdlQmFja2dyb3VuZFRvID0gKGJyZWFkQkcpID0+IHtcclxuICBodG1sLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7YnJlYWRCR30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkYFxyXG4gIGh0bWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCJcclxufVxyXG5cclxuY29uc3QgZGlzcGxheVRhYlBhZ2UgPSAodGFiTmFtZSkgPT4ge1xyXG4gIGlmICh0YWJOYW1lID09IFwiaG9tZVwiKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdvaW5nIHRvIHRoZSBob21lIHBhZ2VcIilcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2V0SG9tZVBhZ2VEaXYoKSlcclxuICAgIGNoYW5nZUJhY2tncm91bmRUbyhicmVhZEJHKVxyXG4gICAgYWRkV2VsY29tZUJ1dHRvbkV2ZW50KClcclxuICB9IGVsc2UgaWYgKHRhYk5hbWUgPT0gXCJtZW51XCIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiR29pbmcgdG8gdGhlIG1lbnUgcGFnZVwiKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnZXRNZW51UGFnZURpdigpKVxyXG4gICAgY2hhbmdlQmFja2dyb3VuZFRvKGJha2VyeUJHKVxyXG4gIH0gZWxzZSBpZiAodGFiTmFtZSA9PSBcImNvbnRhY3RcIikge1xyXG4gICAgY29uc29sZS5sb2coXCJHb2luZyB0byB0aGUgY29udGFjdCBwYWdlXCIpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdldENvbnRhY3RQYWdlRGl2KCkpXHJcbiAgICBjaGFuZ2VCYWNrZ3JvdW5kVG8oY29udGFjdEJHKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgY2FuJ3QgaGFwcGVuXCIpXHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgRXZlbnQgTGlzdGVuZXJzIGZvciBIZWFkZXIgVGFicyAoSG9tZSwgTWVudSwgQ29udGFjdClcclxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyVGFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoZWFkZXItdGFiXCIpXHJcbiAgZm9yIChjb25zdCB0YWIgb2YgaGVhZGVyVGFicykge1xyXG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hvc2VuLXRhYlwiKSkge1xyXG4gICAgICAgIC8vIFlvdSBhcmUgYWxyZWFkeSBvbiB0aGUgcGFnZSwgZG8gbm90aGluZ1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGNsaWNrZWQgdGhlIHRhYiB0aGF0IHlvdSBhcmUgYWxyZWFkeSBvbiBsb2xcIilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob3Nlbi10YWJcIikuY2xhc3NMaXN0LnJlbW92ZShcImNob3Nlbi10YWJcIilcclxuXHJcbiAgICAgICAgY29uc3QgdGFiTmFtZSA9IHRhYi5pZFxyXG4gICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuLXRhYlwiKVxyXG5cclxuICAgICAgICBjbGVhclBhZ2UoKVxyXG4gICAgICAgIGRpc3BsYXlUYWJQYWdlKHRhYk5hbWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gcmVkIHdlbGNvbWUgYnV0dG9uIG9uIHRoZSBob21lIHBhZ2VcclxuY29uc3QgYWRkV2VsY29tZUJ1dHRvbkV2ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdlbGNvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlbGNvbWUtYnV0dG9uXCIpXHJcbiAgd2VsY29tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaG9zZW4tdGFiXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaG9zZW4tdGFiXCIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIikuY2xhc3NMaXN0LmFkZChcImNob3Nlbi10YWJcIilcclxuICAgIGNsZWFyUGFnZSgpXHJcbiAgICBkaXNwbGF5VGFiUGFnZShcIm1lbnVcIilcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIilcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxyXG5cclxuY2xlYXJQYWdlKClcclxuZGlzcGxheVRhYlBhZ2UoXCJob21lXCIpXHJcbmFkZEV2ZW50TGlzdGVuZXJzKClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9