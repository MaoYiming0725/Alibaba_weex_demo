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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by zwwill on 2017/8/27.
 */

var utilFunc = {
    initIconFont: function initIconFont() {
        var domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
        });
    },
    setBundleUrl: function setBundleUrl(url, jsFile) {
        var bundleUrl = url;
        var host = '';
        var path = '';
        var nativeBase = void 0;
        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist';
        } else if (isiOSAssets) {
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            var matchFirstPath = /\/\/[^\/]+\/([^\/\s]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
        }
        var h5Base = './index.html?page=';
        // in Native
        var base = nativeBase;
        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
            // check if in weexpack project
            if (path === 'web' || path === 'dist') {
                base = h5Base + '/dist/';
            } else {
                base = h5Base + '';
            }
        } else {
            base = nativeBase + (!!path ? path + '/' : '');
        }

        var newUrl = base + jsFile;
        return newUrl;
    },
    getUrlSearch: function getUrlSearch(url, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.slice(url.indexOf('?') + 1).match(reg);
        if (r != null) {
            try {
                return decodeURIComponent(r[2]);
            } catch (_e) {
                return null;
            }
        }
        return null;
    }
};

exports.default = utilFunc;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
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
__vue_options__.__file = "/Users/mym/Documents/science/font_end/weex/awesome-project/src/components/Block2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a8d2e1e"
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
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff",
    "paddingBottom": "6"
  },
  "tlt-box": {
    "height": "260",
    "width": "750",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "tlt": {
    "marginTop": "76",
    "textAlign": "center",
    "fontSize": "34",
    "color": "#8BA0B6"
  },
  "tlt-hot": {
    "color": "#B4A078"
  },
  "btn-all": {
    "textAlign": "center",
    "fontSize": "26",
    "width": "220",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "marginTop": "20",
    "color": "#8BA0B6",
    "borderRadius": "4",
    "backgroundColor": "#D8E5F1"
  },
  "btn-hot": {
    "color": "#B4A078",
    "backgroundColor": "#F4E9CB"
  },
  "tlt-image": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "box": {
    "width": "750",
    "height": "500",
    "flexDirection": "row",
    "paddingTop": "30",
    "paddingBottom": "30",
    "paddingLeft": "15",
    "paddingRight": "15"
  },
  "i-good": {
    "paddingLeft": "15",
    "paddingRight": "15"
  },
  "gd-img": {
    "height": "286",
    "width": "286",
    "backgroundColor": "#f4f4f4"
  },
  "gd-tlt": {
    "fontSize": "28",
    "color": "#333333",
    "width": "286",
    "marginTop": "16",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "gd-info": {
    "display": "block",
    "fontSize": "24",
    "width": "286",
    "marginTop": "8",
    "color": "#7f7f7f",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "gd-price": {
    "fontSize": "28",
    "width": "286",
    "marginTop": "16",
    "color": "#b4282d",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "gd-more": {
    "height": "286",
    "width": "286",
    "fontSize": "28",
    "lineHeight": "40",
    "borderWidth": "6",
    "paddingTop": "120",
    "paddingBottom": "120",
    "borderColor": "#f4f4f4",
    "textAlign": "center"
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    props: ["newGoods", "hotGoods", "head", "hasMore", "goods"],
    data: function data() {
        return {};
    },

    methods: {
        jumpWeb: function jumpWeb(_url) {
            if (!_url) return;
            var url = this.$getConfig().bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "true"
            });
        }
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [(_vm.newGoods) ? _c('div', {
    staticClass: ["tlt-box"]
  }, [_c('image', {
    staticClass: ["tlt-image"],
    attrs: {
      "resize": "cover",
      "src": "http://doc.zwwill.com/yanxuan/imgs/bg-new.png"
    }
  }), _c('text', {
    staticClass: ["tlt", "tlt-new"]
  }, [_vm._v(_vm._s(_vm.head.tlt))]), _c('text', {
    staticClass: ["btn-all", "btn-new"],
    on: {
      "click": function($event) {
        _vm.jumpWeb(_vm.head.url)
      }
    }
  }, [_vm._v("查看全部 >")])]) : (_vm.hotGoods) ? _c('div', {
    staticClass: ["tlt-box"]
  }, [_c('image', {
    staticClass: ["tlt-image"],
    attrs: {
      "resize": "cover",
      "src": "http://doc.zwwill.com/yanxuan/imgs/bg-hot.png"
    }
  }), _c('text', {
    staticClass: ["tlt", "tlt-hot"]
  }, [_vm._v(_vm._s(_vm.head.tlt))]), _c('text', {
    staticClass: ["btn-all", "btn-hot"],
    on: {
      "click": function($event) {
        _vm.jumpWeb(_vm.head.url)
      }
    }
  }, [_vm._v("查看全部 >")])]) : _vm._e(), _c('scroller', {
    staticClass: ["box"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, [_vm._l((_vm.goods), function(i) {
    return _c('div', {
      staticClass: ["i-good"]
    }, [_c('image', {
      staticClass: ["gd-img"],
      attrs: {
        "resize": "cover",
        "src": i.img
      }
    }), _c('text', {
      staticClass: ["gd-tlt"]
    }, [_vm._v(_vm._s(i.tlt))]), _c('text', {
      staticClass: ["gd-info"]
    }, [_vm._v(_vm._s(i.info))]), _c('text', {
      staticClass: ["gd-price"]
    }, [_vm._v("¥" + _vm._s(i.price))])])
  }), (_vm.hasMore) ? _c('div', {
    staticClass: ["i-good"]
  }, [_c('text', {
    staticClass: ["gd-more"]
  }, [_vm._v("查看全部")])]) : _vm._e()], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);