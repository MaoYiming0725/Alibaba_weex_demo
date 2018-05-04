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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(12)
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
__vue_options__.__file = "/Users/mym/Documents/science/font_end/weex/awesome-project/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-130be5c5"
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
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "50",
    "color": "#41B883"
  },
  "message": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "32",
    "color": "#727272"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(3);

var _Header2 = _interopRequireDefault(_Header);

var _topChannel = __webpack_require__(8);

var _topChannel2 = _interopRequireDefault(_topChannel);

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

exports.default = {
  name: 'App',
  components: {
    'home-header': _Header2.default,
    'top-channel': _topChannel2.default
  },
  data: function data() {
    return {};
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(4)
)

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "/Users/mym/Documents/science/font_end/weex/awesome-project/src/components/Header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-031ccb8e"
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
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "114",
    "paddingTop": "44",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "zIndex": 101,
    "backgroundColor": "#fafafa",
    "opacity": 0.99
  },
  "w-ipx": {
    "height": "154",
    "paddingTop": "84"
  },
  "scan": {
    "height": "80",
    "width": "96"
  },
  "notice": {
    "height": "80",
    "width": "96"
  },
  "ic": {
    "textAlign": "center",
    "color": "#666666",
    "fontWeight": "300",
    "fontSize": "32"
  },
  "txt": {
    "textAlign": "center",
    "color": "#666666",
    "fontWeight": "300",
    "fontSize": "18"
  },
  "search": {
    "textAlign": "center",
    "color": "#666666",
    "fontWeight": "300",
    "flex": 1,
    "height": "60",
    "fontSize": "26",
    "paddingTop": "13",
    "backgroundColor": "#ededed",
    "borderRadius": "8"
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(6);

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

var navigator = weex.requireModule('navigator');
exports.default = {
    data: function data() {
        return {};
    },
    created: function created() {},

    methods: {
        jumpWeb: function jumpWeb(_url) {
            if (!_url) _url = 'http://m.you.163.com/search';
            var url = this.$getConfig().bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "false"
            });
        }
    }
};

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_vm._m(0), _c('text', {
    staticClass: ["search", "iconfont"],
    on: {
      "click": function($event) {
        _vm.jumpWeb()
      }
    }
  }, [_vm._v(" 搜索商品，共8888款好物")]), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["scan"]
  }, [_c('text', {
    staticClass: ["ic", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["txt"]
  }, [_vm._v("扫一扫")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["notice"]
  }, [_c('text', {
    staticClass: ["ic", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["txt"]
  }, [_vm._v("消息")])])
}]}
module.exports.render._withStripped = true

/***/ }),
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
__vue_options__.__file = "/Users/mym/Documents/science/font_end/weex/awesome-project/src/components/topChannel.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7af882fa"
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
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "top": "114",
    "left": 0,
    "right": 0,
    "height": "54",
    "zIndex": 10,
    "backgroundColor": "#fafafa",
    "borderBottomWidth": "1",
    "borderBottomColor": "#d9d9d9"
  },
  "w-ipx": {
    "top": "154"
  },
  "scroller": {
    "height": "54",
    "flexDirection": "row"
  },
  "i-c": {
    "paddingTop": "10",
    "paddingLeft": "45",
    "paddingRight": "45",
    "paddingBottom": "6",
    "fontSize": "26",
    "color": "#333333"
  },
  "c-act": {
    "color": "#b4282d"
  },
  "j-uline": {
    "position": "absolute",
    "left": "30",
    "bottom": 0,
    "width": "82",
    "height": "4",
    "backgroundColor": "#b4282d"
  },
  "more": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "height": "52",
    "width": "100",
    "backgroundColor": "#fafafa",
    "textAlign": "center",
    "paddingTop": "10",
    "opacity": 0.96,
    "boxShadow": "-6px -4px 4px #fafafa"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');
exports.default = {
    data: function data() {
        return {
            jLPosition: { left: '30px', width: '80px' }
        };
    },
    mounted: function mounted() {
        //            this.initJLine();
    },

    methods: {
        initJLine: function initJLine() {
            if (!this.$refs.actJC) return;
            var l = this.$refs.actJC.$el.offsetLeft;
            var w = this.$refs.actJC.$el.offsetWidth;
            this.jLPosition = {
                left: l + 30 + "px",
                width: w - 60 + "px"
            };
        },

        chooseChannel: function chooseChannel(event) {
            //                const _target = event.target;
            //                if(_target.dataset.act !== "j-c") return;
            //                let l = _target.offsetLeft || 0;
            //                let w =  _target.offsetWidth || 0;
            //                if(w<=0) return;
            //                this.jLPosition = {
            //                    left: l+30 +"px",
            //                    width:w-60+"px"
            //                };
            //                animation.transition(this.$refs.jcLine, {
            //                    styles: {
            //                        left : l+30+"px",
            //                        width : w-60+"px"
            //                    },
            //                    duration: 300, //ms
            //                    timingFunction: 'ease',
            //                    delay: 0 //ms
            //                }, function () {});
        }
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "loadmoreoffset": "750px",
      "showScrollbar": "false"
    },
    on: {
      "click": _vm.chooseChannel
    }
  }, [_c('div', {
    ref: "jcLine",
    staticClass: ["j-uline"],
    style: _vm.jLPosition
  }), _c('text', {
    staticClass: ["i-c", "c-act"]
  }, [_vm._v("推荐")]), _c('text', {
    staticClass: ["i-c"]
  }, [_vm._v("限时购")]), _c('text', {
    staticClass: ["i-c"]
  }, [_vm._v("新品")]), _c('text', {
    staticClass: ["i-c"]
  }, [_vm._v("居家")]), _c('text', {
    staticClass: ["i-c"]
  }, [_vm._v("餐厨")]), _c('text', {
    staticClass: ["i-c"]
  }, [_vm._v("配件")]), _c('text', {
    staticClass: ["i-c"]
  }, [_vm._v("服装")]), _c('text', {
    staticClass: ["i-c"]
  }, [_vm._v("电器")]), _c('text', {
    staticClass: ["i-c"]
  }, [_vm._v("洗护")]), _c('text', {
    staticClass: ["i-c"]
  }, [_vm._v("杂货")]), _c('text', {
    staticClass: ["i-c"]
  }, [_vm._v("饮食")]), _c('text', {
    staticClass: ["i-c"]
  }, [_vm._v("婴童")]), _c('text', {
    staticClass: ["i-c"]
  }, [_vm._v("志趣")])]), _c('text', {
    staticClass: ["more", "iconfont"]
  }, [_vm._v("")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.logo
    }
  }), _c('text', {
    staticClass: ["greeting"]
  }, [_vm._v("The environment is ready!testtest")]), _c('home-header'), _c('top-channel')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);