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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
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
__vue_options__.__file = "/Users/mym/Documents/science/font_end/git仓库/Alibaba_weex_demo/src/components/Slider1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-31dc76bc"
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
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "width": "750",
    "height": "500"
  },
  "frame": {
    "width": "750",
    "height": "500",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "img": {
    "width": "700",
    "height": "500"
  },
  "title_block": {
    "paddingTop": "50"
  },
  "title": {
    "fontSize": "40",
    "fontWeight": "bold",
    "width": "400",
    "textAlign": "center",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 10 */
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

const modal = weex.requireModule('modal');
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["infoList", "pic_index"],
  data() {
    return {
      imgStyle: []
    };
  },
  created() {
    for (var i = 0; i < this.infoList.length; i++) {
      this.imgStyle.push({ width: '700', height: '500' });
    }
  },
  mounted() {
    for (var i = 0; i < this.infoList.length; i++) {
      this.imgStyleHandler(i);
    }
  },
  methods: {
    onchange(event) {
      this.$parent.$emit("slider-change", event.index);
    },
    picSet(index) {
      if (this.pic_index == index) return 'img';else return 'img1';
    },
    scrollHandler(event) {
      //modal.toast({message: event.offsetXRatio + ':' + this.pic_index, duration: 0.5});
      this.imgStyleHandler(this.pic_index, Math.abs(event.offsetXRatio));
      if (event.offsetXRatio < 0 && this.pic_index < this.infoList.length - 1) {
        this.imgStyleHandler(this.pic_index + 1, 1 - Math.abs(event.offsetXRatio));
      }
      if (event.offsetXRatio > 0 && this.pic_index > 0) {
        this.imgStyleHandler(this.pic_index - 1, 1 - Math.abs(event.offsetXRatio));
      }
    },
    imgStyleHandler(idx, scale) {
      //console.log(this.imgStyle);
      let w, h;
      if (scale == undefined) {
        if (idx != this.pic_index) {
          scale = 1;
        } else {
          scale = 0;
        }
      }
      w = 650 - scale * 100;
      h = 450 - scale * 100;
      this.imgStyle[idx].width = w.toString();
      this.imgStyle[idx].height = h.toString();
    }

  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slider', {
    ref: "slider",
    staticClass: ["slider"],
    attrs: {
      "offsetXAccuracy": "0.05",
      "autoPlay": "false",
      "infinite": "false"
    },
    on: {
      "change": _vm.onchange,
      "scroll": _vm.scrollHandler
    }
  }, _vm._l((_vm.infoList), function(item, idx) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["img"],
      style: _vm.imgStyle[idx],
      attrs: {
        "resize": "stretch",
        "src": item.src
      }
    })])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);