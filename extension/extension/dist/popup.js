/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"popup": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./extension/src/popup/index.js","vendors~popup"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./extension/src/colors.js":
/*!*********************************!*\
  !*** ./extension/src/colors.js ***!
  \*********************************/
/*! exports provided: colors, themeOverrides, axisStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeOverrides", function() { return themeOverrides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisStyle", function() { return axisStyle; });
/* harmony import */ var _instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @instructure/ui-themeable/lib/utils/color */ "./node_modules/@instructure/ui-themeable/lib/utils/color.js");
/* harmony import */ var _instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ucColors = {
  maroon: '#800000',
  dkGray: '#767676',
  ltGray: '#D6D6CE',
  yellow1: '#FFA319',
  yellow2: '#FFB547',
  yellow3: '#CC8214',
  orange1: '#C16622',
  orange2: '#D49464',
  orange3: '#9A5324',
  red1: '#8F3931',
  red2: '#B1746F',
  red3: '#642822',
  ltGreen1: '#8A9045',
  ltGreen2: '#ADB17D',
  ltGreen3: '#616530',
  dkGreen1: '#58593F',
  dkGreen2: '#8A8B79',
  dkGreen3: '#3E3E23',
  blue1: '#155F83',
  blue2: '#5B8FA8',
  blue3: '#0F425C',
  violet1: '#350E20',
  violet2: '#725663',
  cyan: '#47B5FF',
  magenta: '#FF3399' // text: '#222'

};
const baseColors = {
  brand: Object(_instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__["lighten"])(ucColors.blue1, 10),
  electric: Object(_instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__["lighten"])(ucColors.blue1, 10),
  shamrock: Object(_instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__["lighten"])(ucColors.ltGreen1, 5),
  barney: Object(_instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__["lighten"])(ucColors.violet1, 10),
  crimson: Object(_instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__["lighten"])(ucColors.red1, 10),
  fire: Object(_instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__["lighten"])(ucColors.orange1, 10),
  licorice: Object(_instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__["darken"])(ucColors.dkGray, 30),
  oxford: Object(_instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__["darken"])(ucColors.dkGray, 20),
  ash: Object(_instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__["lighten"])(ucColors.dkGray, 5),
  slate: Object(_instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__["lighten"])(ucColors.dkGray, 5),
  tiara: ucColors.ltGray,
  porcelain: Object(_instructure_ui_themeable_lib_utils_color__WEBPACK_IMPORTED_MODULE_0__["lighten"])(ucColors.ltGray, 10),
  white: '#FFFFFF'
};
const colors = _objectSpread({}, ucColors, baseColors, {
  textDarkest: baseColors.licorice,
  textDark: baseColors.ash,
  textLight: baseColors.porcelain,
  textLightest: baseColors.white,
  textBrand: baseColors.brand,
  textAlert: baseColors.barney,
  textInfo: baseColors.brand,
  textSuccess: baseColors.shamrock,
  textDanger: baseColors.crimson,
  textWarning: baseColors.fire,
  backgroundDarkest: baseColors.licorice,
  backgroundDark: baseColors.ash,
  backgroundMedium: baseColors.tiara,
  backgroundLight: baseColors.porcelain,
  backgroundLightest: baseColors.white,
  backgroundBrand: baseColors.brand,
  backgroundBrandSecondary: baseColors.oxford,
  backgroundAlert: baseColors.barney,
  backgroundInfo: baseColors.brand,
  backgroundSuccess: baseColors.shamrock,
  backgroundDanger: baseColors.crimson,
  backgroundWarning: baseColors.fire,
  borderLightest: baseColors.white,
  borderLight: baseColors.porcelain,
  borderMedium: baseColors.tiara,
  borderDark: baseColors.ash,
  borderDarkest: baseColors.licorice,
  borderBrand: baseColors.brand,
  borderAlert: baseColors.barney,
  borderInfo: baseColors.brand,
  borderSuccess: baseColors.shamrock,
  borderDanger: baseColors.crimson,
  borderWarning: baseColors.fire,
  borderDebug: baseColors.crimson // from https://github.com/instructure/instructure-ui/blob/master/packages/ui-themes/src/canvas/base/index.js

});
const brandVariables = {
  'ic-brand-primary': colors.textBrand,
  'ic-brand-font-color-dark': colors.textDarkest,
  'ic-link-color': colors.textBrand,
  'ic-link-decoration': 'none',
  'ic-brand-button--primary-bgd': colors.backgroundBrand,
  'ic-brand-button--primary-text': colors.textLightest,
  'ic-brand-button--secondary-bgd': colors.backgroundDarkest,
  'ic-brand-button--secondary-text': colors.textLightest,
  'ic-brand-global-nav-bgd': colors.backgroundBrandSecondary,
  'ic-global-nav-link-hover': colors.backgroundDarkest,
  'ic-brand-global-nav-ic-icon-svg-fill': colors.textLightest,
  'ic-brand-global-nav-ic-icon-svg-fill--active': colors.textBrand,
  'ic-brand-global-nav-menu-item__text-color': colors.textLightest,
  'ic-brand-global-nav-menu-item__text-color--active': colors.textBrand
};
const themeOverrides = _objectSpread({}, brandVariables, {
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
  colors: colors
});
const axisStyle = {
  text: {
    fill: colors.textDark,
    fontWeight: 400,
    fontSize: '10pt'
  },
  title: {
    fill: colors.textDark,
    fontWeight: 400,
    fontSize: '10pt'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./extension/src/popup/index.js":
/*!**************************************!*\
  !*** ./extension/src/popup/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _instructure_ui_themes_lib_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @instructure/ui-themes/lib/canvas */ "./node_modules/@instructure/ui-themes/lib/canvas/index.js");
/* harmony import */ var _instructure_ui_themes_lib_canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_instructure_ui_themes_lib_canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _instructure_ui_elements_lib_components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @instructure/ui-elements/lib/components/Text */ "./node_modules/@instructure/ui-elements/lib/components/Text/index.js");
/* harmony import */ var _instructure_ui_elements_lib_components_Text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_instructure_ui_elements_lib_components_Text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _instructure_ui_tabs_lib_components_TabList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @instructure/ui-tabs/lib/components/TabList */ "./node_modules/@instructure/ui-tabs/lib/components/TabList/index.js");
/* harmony import */ var _instructure_ui_tabs_lib_components_TabList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_instructure_ui_tabs_lib_components_TabList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _instructure_ui_tabs_lib_components_TabList_TabPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @instructure/ui-tabs/lib/components/TabList/TabPanel */ "./node_modules/@instructure/ui-tabs/lib/components/TabList/TabPanel/index.js");
/* harmony import */ var _instructure_ui_tabs_lib_components_TabList_TabPanel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_instructure_ui_tabs_lib_components_TabList_TabPanel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors */ "./extension/src/colors.js");







_instructure_ui_themes_lib_canvas__WEBPACK_IMPORTED_MODULE_2___default.a.use({
  overrides: _colors__WEBPACK_IMPORTED_MODULE_6__["themeOverrides"]
});

class Popup extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  async componentDidMount() {// stub
  }

  render() {
    const {
      selectedIndex
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: 450
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_tabs_lib_components_TabList__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "minimal",
      selectedIndex: selectedIndex,
      onChange: e => this.setState({
        selectedIndex: e
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_tabs_lib_components_TabList_TabPanel__WEBPACK_IMPORTED_MODULE_5___default.a, {
      title: "Summary"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_elements_lib_components_Text__WEBPACK_IMPORTED_MODULE_3___default.a, null, "hello hello"))));
  }

}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Popup, null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL3NyYy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL3NyYy9wb3B1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1Y0NvbG9ycyIsIm1hcm9vbiIsImRrR3JheSIsImx0R3JheSIsInllbGxvdzEiLCJ5ZWxsb3cyIiwieWVsbG93MyIsIm9yYW5nZTEiLCJvcmFuZ2UyIiwib3JhbmdlMyIsInJlZDEiLCJyZWQyIiwicmVkMyIsImx0R3JlZW4xIiwibHRHcmVlbjIiLCJsdEdyZWVuMyIsImRrR3JlZW4xIiwiZGtHcmVlbjIiLCJka0dyZWVuMyIsImJsdWUxIiwiYmx1ZTIiLCJibHVlMyIsInZpb2xldDEiLCJ2aW9sZXQyIiwiY3lhbiIsIm1hZ2VudGEiLCJiYXNlQ29sb3JzIiwiYnJhbmQiLCJsaWdodGVuIiwiZWxlY3RyaWMiLCJzaGFtcm9jayIsImJhcm5leSIsImNyaW1zb24iLCJmaXJlIiwibGljb3JpY2UiLCJkYXJrZW4iLCJveGZvcmQiLCJhc2giLCJzbGF0ZSIsInRpYXJhIiwicG9yY2VsYWluIiwid2hpdGUiLCJjb2xvcnMiLCJ0ZXh0RGFya2VzdCIsInRleHREYXJrIiwidGV4dExpZ2h0IiwidGV4dExpZ2h0ZXN0IiwidGV4dEJyYW5kIiwidGV4dEFsZXJ0IiwidGV4dEluZm8iLCJ0ZXh0U3VjY2VzcyIsInRleHREYW5nZXIiLCJ0ZXh0V2FybmluZyIsImJhY2tncm91bmREYXJrZXN0IiwiYmFja2dyb3VuZERhcmsiLCJiYWNrZ3JvdW5kTWVkaXVtIiwiYmFja2dyb3VuZExpZ2h0IiwiYmFja2dyb3VuZExpZ2h0ZXN0IiwiYmFja2dyb3VuZEJyYW5kIiwiYmFja2dyb3VuZEJyYW5kU2Vjb25kYXJ5IiwiYmFja2dyb3VuZEFsZXJ0IiwiYmFja2dyb3VuZEluZm8iLCJiYWNrZ3JvdW5kU3VjY2VzcyIsImJhY2tncm91bmREYW5nZXIiLCJiYWNrZ3JvdW5kV2FybmluZyIsImJvcmRlckxpZ2h0ZXN0IiwiYm9yZGVyTGlnaHQiLCJib3JkZXJNZWRpdW0iLCJib3JkZXJEYXJrIiwiYm9yZGVyRGFya2VzdCIsImJvcmRlckJyYW5kIiwiYm9yZGVyQWxlcnQiLCJib3JkZXJJbmZvIiwiYm9yZGVyU3VjY2VzcyIsImJvcmRlckRhbmdlciIsImJvcmRlcldhcm5pbmciLCJib3JkZXJEZWJ1ZyIsImJyYW5kVmFyaWFibGVzIiwidGhlbWVPdmVycmlkZXMiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImF4aXNTdHlsZSIsInRleHQiLCJmaWxsIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwidGl0bGUiLCJ0aGVtZSIsInVzZSIsIm92ZXJyaWRlcyIsIlBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZEluZGV4IiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJ3aWR0aCIsImUiLCJzZXRTdGF0ZSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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UjtBQUFaLE9BQ04sMkRBQUMsa0ZBQUQ7QUFDRSxhQUFPLEVBQUMsU0FEVjtBQUVFLG1CQUFhLEVBQUVILGFBRmpCO0FBR0UsY0FBUSxFQUFHSSxDQUFELElBQU8sS0FBS0MsUUFBTCxDQUFjO0FBQUVMLHFCQUFhLEVBQUVJO0FBQWpCLE9BQWQ7QUFIbkIsT0FLRSwyREFBQywyRkFBRDtBQUFVLFdBQUssRUFBQztBQUFoQixPQUNFLDJEQUFDLG1GQUFELHNCQURGLENBTEYsQ0FETSxDQUFSO0FBYUQ7O0FBNUJpQzs7QUErQnBDRSxnREFBUSxDQUFDSixNQUFULENBQWdCLDJEQUFDLEtBQUQsT0FBaEIsRUFBMkJLLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUEzQixFIiwiZmlsZSI6InBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwb3B1cFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vZXh0ZW5zaW9uL3NyYy9wb3B1cC9pbmRleC5qc1wiLFwidmVuZG9yc35wb3B1cFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IGFscGhhLCBkYXJrZW4sIGxpZ2h0ZW4gfSBmcm9tICdAaW5zdHJ1Y3R1cmUvdWktdGhlbWVhYmxlL2xpYi91dGlscy9jb2xvcidcblxuY29uc3QgdWNDb2xvcnMgPSB7XG4gIG1hcm9vbjogJyM4MDAwMDAnLFxuICBka0dyYXk6ICcjNzY3Njc2JyxcbiAgbHRHcmF5OiAnI0Q2RDZDRScsXG4gIHllbGxvdzE6ICcjRkZBMzE5JyxcbiAgeWVsbG93MjogJyNGRkI1NDcnLFxuICB5ZWxsb3czOiAnI0NDODIxNCcsXG4gIG9yYW5nZTE6ICcjQzE2NjIyJyxcbiAgb3JhbmdlMjogJyNENDk0NjQnLFxuICBvcmFuZ2UzOiAnIzlBNTMyNCcsXG4gIHJlZDE6ICcjOEYzOTMxJyxcbiAgcmVkMjogJyNCMTc0NkYnLFxuICByZWQzOiAnIzY0MjgyMicsXG4gIGx0R3JlZW4xOiAnIzhBOTA0NScsXG4gIGx0R3JlZW4yOiAnI0FEQjE3RCcsXG4gIGx0R3JlZW4zOiAnIzYxNjUzMCcsXG4gIGRrR3JlZW4xOiAnIzU4NTkzRicsXG4gIGRrR3JlZW4yOiAnIzhBOEI3OScsXG4gIGRrR3JlZW4zOiAnIzNFM0UyMycsXG4gIGJsdWUxOiAnIzE1NUY4MycsXG4gIGJsdWUyOiAnIzVCOEZBOCcsXG4gIGJsdWUzOiAnIzBGNDI1QycsXG4gIHZpb2xldDE6ICcjMzUwRTIwJyxcbiAgdmlvbGV0MjogJyM3MjU2NjMnLFxuICBjeWFuOiAnIzQ3QjVGRicsXG4gIG1hZ2VudGE6ICcjRkYzMzk5J1xuXG4gIC8vIHRleHQ6ICcjMjIyJ1xufVxuXG5jb25zdCBiYXNlQ29sb3JzID0ge1xuICBicmFuZDogbGlnaHRlbih1Y0NvbG9ycy5ibHVlMSwgMTApLFxuICBlbGVjdHJpYzogbGlnaHRlbih1Y0NvbG9ycy5ibHVlMSwgMTApLFxuICBzaGFtcm9jazogbGlnaHRlbih1Y0NvbG9ycy5sdEdyZWVuMSwgNSksXG4gIGJhcm5leTogbGlnaHRlbih1Y0NvbG9ycy52aW9sZXQxLCAxMCksXG4gIGNyaW1zb246IGxpZ2h0ZW4odWNDb2xvcnMucmVkMSwgMTApLFxuICBmaXJlOiBsaWdodGVuKHVjQ29sb3JzLm9yYW5nZTEsIDEwKSxcbiAgbGljb3JpY2U6IGRhcmtlbih1Y0NvbG9ycy5ka0dyYXksIDMwKSxcbiAgb3hmb3JkOiBkYXJrZW4odWNDb2xvcnMuZGtHcmF5LCAyMCksXG4gIGFzaDogbGlnaHRlbih1Y0NvbG9ycy5ka0dyYXksIDUpLFxuICBzbGF0ZTogbGlnaHRlbih1Y0NvbG9ycy5ka0dyYXksIDUpLFxuICB0aWFyYTogdWNDb2xvcnMubHRHcmF5LFxuICBwb3JjZWxhaW46IGxpZ2h0ZW4odWNDb2xvcnMubHRHcmF5LCAxMCksXG4gIHdoaXRlOiAnI0ZGRkZGRicsXG5cbn1cblxuZXhwb3J0IGNvbnN0IGNvbG9ycyA9IHtcbiAgLi4udWNDb2xvcnMsXG4gIC4uLmJhc2VDb2xvcnMsXG5cbiAgdGV4dERhcmtlc3Q6IGJhc2VDb2xvcnMubGljb3JpY2UsXG4gIHRleHREYXJrOiBiYXNlQ29sb3JzLmFzaCxcbiAgdGV4dExpZ2h0OiBiYXNlQ29sb3JzLnBvcmNlbGFpbixcbiAgdGV4dExpZ2h0ZXN0OiBiYXNlQ29sb3JzLndoaXRlLFxuXG4gIHRleHRCcmFuZDogYmFzZUNvbG9ycy5icmFuZCxcbiAgdGV4dEFsZXJ0OiBiYXNlQ29sb3JzLmJhcm5leSxcbiAgdGV4dEluZm86IGJhc2VDb2xvcnMuYnJhbmQsXG4gIHRleHRTdWNjZXNzOiBiYXNlQ29sb3JzLnNoYW1yb2NrLFxuICB0ZXh0RGFuZ2VyOiBiYXNlQ29sb3JzLmNyaW1zb24sXG4gIHRleHRXYXJuaW5nOiBiYXNlQ29sb3JzLmZpcmUsXG5cbiAgYmFja2dyb3VuZERhcmtlc3Q6IGJhc2VDb2xvcnMubGljb3JpY2UsXG4gIGJhY2tncm91bmREYXJrOiBiYXNlQ29sb3JzLmFzaCxcbiAgYmFja2dyb3VuZE1lZGl1bTogYmFzZUNvbG9ycy50aWFyYSxcbiAgYmFja2dyb3VuZExpZ2h0OiBiYXNlQ29sb3JzLnBvcmNlbGFpbixcbiAgYmFja2dyb3VuZExpZ2h0ZXN0OiBiYXNlQ29sb3JzLndoaXRlLFxuXG4gIGJhY2tncm91bmRCcmFuZDogYmFzZUNvbG9ycy5icmFuZCxcbiAgYmFja2dyb3VuZEJyYW5kU2Vjb25kYXJ5OiBiYXNlQ29sb3JzLm94Zm9yZCxcbiAgYmFja2dyb3VuZEFsZXJ0OiBiYXNlQ29sb3JzLmJhcm5leSxcbiAgYmFja2dyb3VuZEluZm86IGJhc2VDb2xvcnMuYnJhbmQsXG4gIGJhY2tncm91bmRTdWNjZXNzOiBiYXNlQ29sb3JzLnNoYW1yb2NrLFxuICBiYWNrZ3JvdW5kRGFuZ2VyOiBiYXNlQ29sb3JzLmNyaW1zb24sXG4gIGJhY2tncm91bmRXYXJuaW5nOiBiYXNlQ29sb3JzLmZpcmUsXG5cbiAgYm9yZGVyTGlnaHRlc3Q6IGJhc2VDb2xvcnMud2hpdGUsXG4gIGJvcmRlckxpZ2h0OiBiYXNlQ29sb3JzLnBvcmNlbGFpbixcbiAgYm9yZGVyTWVkaXVtOiBiYXNlQ29sb3JzLnRpYXJhLFxuICBib3JkZXJEYXJrOiBiYXNlQ29sb3JzLmFzaCxcbiAgYm9yZGVyRGFya2VzdDogYmFzZUNvbG9ycy5saWNvcmljZSxcblxuICBib3JkZXJCcmFuZDogYmFzZUNvbG9ycy5icmFuZCxcbiAgYm9yZGVyQWxlcnQ6IGJhc2VDb2xvcnMuYmFybmV5LFxuICBib3JkZXJJbmZvOiBiYXNlQ29sb3JzLmJyYW5kLFxuICBib3JkZXJTdWNjZXNzOiBiYXNlQ29sb3JzLnNoYW1yb2NrLFxuICBib3JkZXJEYW5nZXI6IGJhc2VDb2xvcnMuY3JpbXNvbixcbiAgYm9yZGVyV2FybmluZzogYmFzZUNvbG9ycy5maXJlLFxuXG4gIGJvcmRlckRlYnVnOiBiYXNlQ29sb3JzLmNyaW1zb25cbn1cblxuLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaW5zdHJ1Y3R1cmUvaW5zdHJ1Y3R1cmUtdWkvYmxvYi9tYXN0ZXIvcGFja2FnZXMvdWktdGhlbWVzL3NyYy9jYW52YXMvYmFzZS9pbmRleC5qc1xuY29uc3QgYnJhbmRWYXJpYWJsZXMgPSB7XG4gICdpYy1icmFuZC1wcmltYXJ5JzogY29sb3JzLnRleHRCcmFuZCxcbiAgJ2ljLWJyYW5kLWZvbnQtY29sb3ItZGFyayc6IGNvbG9ycy50ZXh0RGFya2VzdCxcblxuICAnaWMtbGluay1jb2xvcic6IGNvbG9ycy50ZXh0QnJhbmQsXG4gICdpYy1saW5rLWRlY29yYXRpb24nOiAnbm9uZScsXG5cbiAgJ2ljLWJyYW5kLWJ1dHRvbi0tcHJpbWFyeS1iZ2QnOiBjb2xvcnMuYmFja2dyb3VuZEJyYW5kLFxuICAnaWMtYnJhbmQtYnV0dG9uLS1wcmltYXJ5LXRleHQnOiBjb2xvcnMudGV4dExpZ2h0ZXN0LFxuICAnaWMtYnJhbmQtYnV0dG9uLS1zZWNvbmRhcnktYmdkJzogY29sb3JzLmJhY2tncm91bmREYXJrZXN0LFxuICAnaWMtYnJhbmQtYnV0dG9uLS1zZWNvbmRhcnktdGV4dCc6IGNvbG9ycy50ZXh0TGlnaHRlc3QsXG5cbiAgJ2ljLWJyYW5kLWdsb2JhbC1uYXYtYmdkJzogY29sb3JzLmJhY2tncm91bmRCcmFuZFNlY29uZGFyeSxcbiAgJ2ljLWdsb2JhbC1uYXYtbGluay1ob3Zlcic6IGNvbG9ycy5iYWNrZ3JvdW5kRGFya2VzdCxcbiAgJ2ljLWJyYW5kLWdsb2JhbC1uYXYtaWMtaWNvbi1zdmctZmlsbCc6IGNvbG9ycy50ZXh0TGlnaHRlc3QsXG4gICdpYy1icmFuZC1nbG9iYWwtbmF2LWljLWljb24tc3ZnLWZpbGwtLWFjdGl2ZSc6IGNvbG9ycy50ZXh0QnJhbmQsXG4gICdpYy1icmFuZC1nbG9iYWwtbmF2LW1lbnUtaXRlbV9fdGV4dC1jb2xvcic6IGNvbG9ycy50ZXh0TGlnaHRlc3QsXG4gICdpYy1icmFuZC1nbG9iYWwtbmF2LW1lbnUtaXRlbV9fdGV4dC1jb2xvci0tYWN0aXZlJzogY29sb3JzLnRleHRCcmFuZFxufVxuXG5leHBvcnQgY29uc3QgdGhlbWVPdmVycmlkZXMgPSB7XG4gIC4uLmJyYW5kVmFyaWFibGVzLFxuXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiJ1xuICB9LFxuICBjb2xvcnM6IGNvbG9yc1xufVxuXG5leHBvcnQgY29uc3QgYXhpc1N0eWxlID0ge1xuICB0ZXh0OiB7ZmlsbDogY29sb3JzLnRleHREYXJrLCBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiAnMTBwdCd9LFxuICB0aXRsZToge2ZpbGw6IGNvbG9ycy50ZXh0RGFyaywgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogJzEwcHQnfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb2xvcnNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCB0aGVtZSBmcm9tICdAaW5zdHJ1Y3R1cmUvdWktdGhlbWVzL2xpYi9jYW52YXMnXG5pbXBvcnQgVGV4dCBmcm9tICdAaW5zdHJ1Y3R1cmUvdWktZWxlbWVudHMvbGliL2NvbXBvbmVudHMvVGV4dCdcbmltcG9ydCBUYWJMaXN0IGZyb20gJ0BpbnN0cnVjdHVyZS91aS10YWJzL2xpYi9jb21wb25lbnRzL1RhYkxpc3QnXG5pbXBvcnQgVGFiUGFuZWwgZnJvbSAnQGluc3RydWN0dXJlL3VpLXRhYnMvbGliL2NvbXBvbmVudHMvVGFiTGlzdC9UYWJQYW5lbCdcblxuaW1wb3J0IHsgdGhlbWVPdmVycmlkZXMgfSBmcm9tICcuLi9jb2xvcnMnXG5cbnRoZW1lLnVzZSh7IG92ZXJyaWRlczogdGhlbWVPdmVycmlkZXMgfSlcblxuY2xhc3MgUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRJbmRleDogMFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAvLyBzdHViXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRJbmRleCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXt7d2lkdGg6IDQ1MH19PlxuICAgICAgPFRhYkxpc3RcbiAgICAgICAgdmFyaWFudD0nbWluaW1hbCdcbiAgICAgICAgc2VsZWN0ZWRJbmRleD17c2VsZWN0ZWRJbmRleH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJbmRleDogZSB9KX1cbiAgICAgID5cbiAgICAgICAgPFRhYlBhbmVsIHRpdGxlPSdTdW1tYXJ5Jz5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIGhlbGxvIGhlbGxvXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgPC9UYWJMaXN0PlxuICAgIDwvZGl2PilcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPFBvcHVwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==