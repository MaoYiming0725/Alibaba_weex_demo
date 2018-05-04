// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "rgba(255,255,255,1)",
    "marginTop": "10",
    "paddingBottom": "40"
  },
  "head": {
    "marginTop": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "marginLeft": "20"
  },
  "box": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-around",
    "width": "750"
  },
  "box_item": {
    "width": "300",
    "height": "400",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "img": {
    "width": "300",
    "height": "300",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "rgba(0,0,0,0.2)"
  },
  "title": {
    "textAlign": "center",
    "fontSize": "25",
    "lines": 2,
    "width": "300"
  },
  "price": {
    "stextAlign": "left",
    "fontSize": "25",
    "width": "300"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: ["head", "productList"],
    data() {
        return {};
    },
    methods: {}
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["head"]
  }, [_vm._v(_vm._s(_vm.head))]), _c('div', {
    staticClass: ["box"]
  }, _vm._l((_vm.productList), function(item) {
    return _c('div', {
      staticClass: ["box_item"]
    }, [_c('image', {
      staticClass: ["img"],
      attrs: {
        "src": item.src
      }
    }), _c('text', {
      staticClass: ["title"]
    }, [_vm._v(_vm._s(item.title))]), _c('text', {
      staticClass: ["price"]
    }, [_vm._v(_vm._s(item.price))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/mym/Documents/science/font_end/git仓库/Alibaba_weex_demo/src/views/detail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8288fe92"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "background_img": {
    "position": "absolute",
    "width": "750",
    "height": "300"
  },
  "wrapper": {
    "backgroundColor": "rgba(0,0,0,0.05)",
    "flexDirection": "row"
  },
  "header_block": {
    "width": "750",
    "height": "100",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "header0": {
    "backgroundColor": "rgba(255,255,255,0)"
  },
  "header1": {
    "backgroundColor": "rgba(255,255,255,0.1)"
  },
  "header2": {
    "backgroundColor": "rgba(255,255,255,0.2)"
  },
  "header3": {
    "backgroundColor": "rgba(255,255,255,0.3)"
  },
  "header4": {
    "backgroundColor": "rgba(255,255,255,0.4)"
  },
  "header5": {
    "backgroundColor": "rgba(255,255,255,0.5)"
  },
  "header6": {
    "backgroundColor": "rgba(255,255,255,0.6)"
  },
  "header7": {
    "backgroundColor": "rgba(255,255,255,0.7)"
  },
  "header8": {
    "backgroundColor": "rgba(255,255,255,0.8)"
  },
  "header9": {
    "backgroundColor": "rgba(255,255,255,0.9)"
  },
  "header": {
    "backgroundColor": "rgba(255,255,255,1)"
  },
  "header_text": {
    "textAlign": "center"
  },
  "abstract": {
    "width": "750",
    "height": "200",
    "backgroundColor": "rgba(255,255,255,1)",
    "marginBottom": "20",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "ab_block": {
    "width": "700",
    "height": "150"
  },
  "ab_title": {
    "textAlign": "left",
    "fontSize": "40",
    "marginBottom": "10"
  },
  "ab_content": {
    "textAlign": "left",
    "fontSize": "25"
  }
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Block2_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Block2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Block2_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');
const animation = weex.requireModule('animation');
const dom = weex.requireModule('dom');
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'block2': __WEBPACK_IMPORTED_MODULE_0__components_Block2_vue___default.a
  },
  data() {
    return {
      pageInfo: {
        head: "ELECTRONICS & ENTERTAINMENT",
        content_offset: 0,
        styleObj: {
          height: weex.config.env.deviceHeight
        }

      },
      abstract: {
        title: "Smart Gadget Marketplace",
        content: "Can't find the next top selling products? We provide the varies smart gadgets which can keep the high retail price."
      },
      recommend: {
        head: "Recommended for you",
        productInfoList: [{ title: "ELECTRICAL ALLOY BIMETAL SILVER CONTACTOR RIVET CONTACTS POINTS", src: "//sc01.alicdn.com/kf/HTB1ClEdkbYI8KJjy0Faq6zAiVXaO/2018-electric-switch-wall-switch-smart-switch.jpg_220x220.jpg", price: "US $0.40-0.50" }, { title: "ELECTRICAL ALLOY BIMETAL SILVER CONTACTOR RIVET CONTACTS POINTS", src: "//sc01.alicdn.com/kf/HTB1ClEdkbYI8KJjy0Faq6zAiVXaO/2018-electric-switch-wall-switch-smart-switch.jpg_220x220.jpg", price: "US $0.40-0.50" }, { title: "ELECTRICAL ALLOY BIMETAL SILVER CONTACTOR RIVET CONTACTS POINTS", src: "//sc01.alicdn.com/kf/HTB1ClEdkbYI8KJjy0Faq6zAiVXaO/2018-electric-switch-wall-switch-smart-switch.jpg_220x220.jpg", price: "US $0.40-0.50" }, { title: "ELECTRICAL ALLOY BIMETAL SILVER CONTACTOR RIVET CONTACTS POINTS", src: "//sc01.alicdn.com/kf/HTB1ClEdkbYI8KJjy0Faq6zAiVXaO/2018-electric-switch-wall-switch-smart-switch.jpg_220x220.jpg", price: "US $0.40-0.50" }, { title: "ELECTRICAL ALLOY BIMETAL SILVER CONTACTOR RIVET CONTACTS POINTS", src: "//sc01.alicdn.com/kf/HTB1ClEdkbYI8KJjy0Faq6zAiVXaO/2018-electric-switch-wall-switch-smart-switch.jpg_220x220.jpg", price: "US $0.40-0.50" }, { title: "ELECTRICAL ALLOY BIMETAL SILVER CONTACTOR RIVET CONTACTS POINTS", src: "//sc01.alicdn.com/kf/HTB1ClEdkbYI8KJjy0Faq6zAiVXaO/2018-electric-switch-wall-switch-smart-switch.jpg_220x220.jpg", price: "US $0.40-0.50" }],
        imgSrc: []
      }
    };
  },

  methods: {
    headerStyleHandler() {
      if (this.pageInfo.content_offset < 200) {
        let tmp = parseInt(this.pageInfo.content_offset / 20);
        return 'header' + tmp.toString();
      } else {
        return 'header';
      }
    },
    appearHandler(idx) {
      const _this = this;
      setTimeout(function () {}, 800);
    },

    scrollHandler(event) {
      this.pageInfo.content_offset = -event.contentOffset.y;
    }

  }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/mym/Documents/science/font_end/git仓库/Alibaba_weex_demo/src/components/Block2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a571629"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _c('list', {
    staticClass: ["wrapper"],
    staticStyle: {
      height: "1200px"
    },
    on: {
      "scroll": _vm.scrollHandler
    }
  }, [_c('header', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["header_block"],
    class: [_vm.headerStyleHandler()],
    staticStyle: {
      marginBottom: "200px"
    }
  }, [_c('text', {
    staticClass: ["header_text"]
  }, [_vm._v(_vm._s(_vm.pageInfo.head))])])]), _c('cell', {
    staticClass: ["abstract"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["ab_block"]
  }, [_c('text', {
    staticClass: ["ab_title"]
  }, [_vm._v(_vm._s(_vm.abstract.title))]), _c('text', {
    staticClass: ["ab_content"]
  }, [_vm._v(_vm._s(_vm.abstract.content))])])]), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('block2', {
    attrs: {
      "head": _vm.recommend.head,
      "productList": _vm.recommend.productInfoList
    }
  })], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      position: "absolute",
      width: "750px",
      height: "300px"
    }
  }, [_c('image', {
    staticClass: ["background_img"],
    attrs: {
      "src": "http://img95.699pic.com/photo/50068/7102.jpg_wh300.jpg!/fh/300//quality/90"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);