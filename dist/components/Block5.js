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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
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
__vue_options__.__file = "/Users/mym/Documents/science/font_end/weex/awesome-project/src/components/Block5.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a38a118"
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

/***/ 27:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff",
    "paddingTop": "15",
    "paddingBottom": "15"
  },
  "auther-box": {
    "height": "75",
    "paddingTop": "10",
    "paddingLeft": "25",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row"
  },
  "auther-img": {
    "height": "58",
    "width": "58",
    "borderRadius": "58"
  },
  "auther-name": {
    "flex": 1,
    "fontSize": "26",
    "height": "58",
    "paddingLeft": "20",
    "paddingTop": "10"
  },
  "img-box": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "main-img": {
    "flex": 1,
    "height": "380"
  },
  "sub-imgs-box": {
    "width": "190",
    "height": "380"
  },
  "sub-img": {
    "height": "188",
    "width": "190",
    "marginLeft": "3",
    "marginBottom": "3"
  },
  "tlt-box": {
    "height": "80",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row"
  },
  "tlt": {
    "fontSize": "34",
    "flex": 1,
    "overflow": "hidden",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "price": {
    "fontSize": "34",
    "color": "#b4282d",
    "paddingLeft": "10"
  },
  "info": {
    "fontSize": "26",
    "paddingLeft": "20",
    "paddingRight": "20",
    "overflow": "hidden",
    "lines": 2,
    "textOverflow": "ellipsis",
    "color": "#666666"
  }
}

/***/ }),

/***/ 28:
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

var navigator = weex.requireModule('navigator');
exports.default = {
    props: ["article", "url"],
    data: function data() {
        return {};
    },

    methods: {
        jumpWeb: function jumpWeb(_url) {
            if (!_url) _url = 'http://m.you.163.com/topic/v1/pub/XLymbwEO0J.html';
            var url = this.$getConfig().bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "true"
            });
        }
    }
};

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "click": function($event) {
        _vm.jumpWeb(_vm.url)
      }
    }
  }, [_c('div', {
    staticClass: ["auther-box"]
  }, [_c('image', {
    staticClass: ["auther-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.autherImg
    }
  }), _c('text', {
    staticClass: ["auther-name"]
  }, [_vm._v(_vm._s(_vm.article.auther))])]), _c('div', {
    staticClass: ["img-box"]
  }, [(typeof _vm.article.img == 'string') ? [_c('image', {
    staticClass: ["main-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.img
    }
  })] : (typeof _vm.article.img == 'object' && _vm.article.img.length >= 3) ? [_c('image', {
    staticClass: ["main-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.img[0]
    }
  }), _c('div', {
    staticClass: ["sub-imgs-box"]
  }, [_c('image', {
    staticClass: ["sub-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.img[1]
    }
  }), _c('image', {
    staticClass: ["sub-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.img[2]
    }
  })])] : _vm._e()], 2), _c('div', {
    staticClass: ["tlt-box"]
  }, [_c('text', {
    staticClass: ["tlt"]
  }, [_vm._v(_vm._s(_vm.article.tlt))]), (_vm.article.price) ? _c('text', {
    staticClass: ["price"]
  }, [_vm._v(_vm._s(_vm.article.price) + "元起")]) : _vm._e()]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v(_vm._s(_vm.article.info))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });