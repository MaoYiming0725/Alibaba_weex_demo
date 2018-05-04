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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "head": {
    "marginTop": "20",
    "marginLeft": "25"
  },
  "scroll": {
    "flexDirection": "row",
    "height": "300"
  },
  "column": {
    "width": "700",
    "height": "300",
    "marginLeft": "25",
    "justifyContent": "center"
  },
  "img": {
    "width": "700",
    "height": "500",
    "position": "absolute",
    "top": 0
  },
  "title": {
    "fontSize": "50",
    "fontWeight": "bold",
    "width": "600",
    "textAlign": "left",
    "paddingLeft": "35",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 2 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["head", "infoList"],
  data() {
    return {
      header: "EXPERTS' CHOICE",
      img: [{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }]
    };
  },
  methods: {}
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["head"]
  }, [_vm._v(_vm._s(_vm.head))]), _c('scroller', {
    staticClass: ["scroll"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.infoList), function(item) {
    return _c('div', {
      staticClass: ["column"]
    }, [_c('image', {
      staticClass: ["img"],
      attrs: {
        "resize": "stretch",
        "src": item.src
      }
    }), _c('text', {
      staticClass: ["title"]
    }, [_vm._v(_vm._s(item.title))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
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

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
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
__vue_options__.__file = "/Users/mym/Documents/science/font_end/git仓库/Alibaba_weex_demo/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5cccb206"
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
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "background_img": {
    "WebkitFilter": "blur(10px)",
    "MozFilter": "blur(10px)",
    "MsFilter": "blur(10px)",
    "filter": "blur(10px)",
    "position": "absolute",
    "width": "750",
    "height": "500"
  },
  "trans": {
    "WebkitTransitionProperty": "'opacity'",
    "WebkitTransitionDuration": "'500ms'"
  },
  "wrapper": {
    "backgroundColor": "rgba(0,0,0,0.05)"
  },
  "column": {
    "width": "750",
    "height": "100"
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
  "header_block": {
    "width": "750",
    "height": "100",
    "justifyContent": "center",
    "alignItem": "center"
  },
  "header_text": {
    "textAlign": "center"
  },
  "slider1_block": {
    "width": "750",
    "height": "500",
    "marginTop": "20",
    "justifyContent": "center",
    "alignItem": "center"
  },
  "scroll_block": {
    "width": "750",
    "marginTop": "20"
  },
  "recommend_head": {
    "marginTop": "20",
    "marginLeft": "25"
  },
  "list_item": {
    "width": "650",
    "height": "250",
    "marginTop": "10",
    "marginBottom": "10",
    "marginLeft": "50",
    "backgroundColor": "rgba(255,255,255,1)",
    "justifyContent": "center",
    "alignItem": "center",
    "borderRadius": "10"
  },
  "list_title": {
    "font_end": "46",
    "textAlign": "left",
    "paddingLeft": "10"
  },
  "listImage": {
    "width": "650",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "marginTop": "20"
  },
  "img": {
    "width": "150",
    "height": "150"
  }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Slider1_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Slider1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Slider1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Block1_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Block1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Block1_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'App',
  components: {
    'slider1': __WEBPACK_IMPORTED_MODULE_0__components_Slider1_vue___default.a,
    'block1': __WEBPACK_IMPORTED_MODULE_1__components_Block1_vue___default.a
  },
  data() {
    return {
      pageInfo: {
        head: "ELECTRONICS & ENTERTAINMENT",
        content_offset: 0,
        styleObj: {
          height: weex.config.env.deviceHeight
        },
        bgImgObj: {
          opacity: '1'
        }

      },
      sliderInfo: {
        pic_index: 0,
        pic_index0: 0,
        sliderList: [{ title1: "Smart Gadget", title2: "Marketplace", src: 'http://img95.699pic.com/photo/50068/7102.jpg_wh300.jpg!/fh/300//quality/90' }, { title1: "Outdoor sports", title2: " products in spring", src: 'http://img95.699pic.com/photo/50081/8379.jpg_wh300.jpg!/fh/300//quality/90' }, { title1: "Selected Electronic", title2: " Cigarette Brands", src: 'http://img95.699pic.com/photo/50053/7463.jpg_wh300.jpg!/fh/300//quality/90' }, { title1: "Consumer Electronics", title2: " Accessories Marketplace", src: 'http://img95.699pic.com/photo/50026/9909.jpg_wh300.jpg!/fh/300//quality/90' }]
      },
      experts: {
        head: "EXPERTS' CHOICE",
        imgList: [{ title: "FISHING PRODUCTS EXPO", src: 'http://img95.699pic.com/photo/50001/3850.jpg_wh300.jpg!/fh/300//quality/90' }, { title: "SHENZHEN ECIG EXPO", src: 'http://img95.699pic.com/photo/50000/3850.jpg_wh300.jpg!/fh/300//quality/90' }, { title: "TOYS FROM MAJOR MANUFACTURERS", src: 'http://img95.699pic.com/photo/50008/5974.jpg_wh300.jpg!/fh/300//quality/90' }, { title: "FEATURED SPORTS SUPPLIERS", src: 'http://img95.699pic.com/photo/50019/1108.jpg_wh300.jpg!/fh/300//quality/90' }, { title: "QUALIFIED E-CIFARETTE BRANDS", src: 'http://img95.699pic.com/photo/00017/0541.jpg_wh300.jpg!/fh/300//quality/90' }]
      },
      recommend: {
        head: "YOU MAY LIKE",
        imgList: [{ title: "Smart Gadget Marketplace", src1: "http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2: "http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3: "http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg" }, { title: "Smart Gadget Marketplace", src1: "http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2: "http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3: "http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg" }, { title: "Smart Gadget Marketplace", src1: "http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2: "http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3: "http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg" }, { title: "Smart Gadget Marketplace", src1: "http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2: "http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3: "http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg" }, { title: "Smart Gadget Marketplace", src1: "http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2: "http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3: "http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg" }, { title: "Smart Gadget Marketplace", src1: "http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2: "http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3: "http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg" }],
        imgSrc: []
      }
    };
  },

  created() {
    //const initSrc = {src1:"//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2211247359/TB2J4h4nsjI8KJjSsppXXXbyVXa_!!2211247359.jpg", src2:"//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2211247359/TB2J4h4nsjI8KJjSsppXXXbyVXa_!!2211247359.jpg", src3:"//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2211247359/TB2J4h4nsjI8KJjSsppXXXbyVXa_!!2211247359.jpg"};
    //const initSrc = {src1: '', src2: '', src3: ''};
    for (let i = 0; i < this.recommend.imgList.length; i++) {
      this.recommend.imgSrc.push({ src1: '', src2: '', src3: '' });
    }
    this.$on('slider-change', function () {
      //modal.toast({message: this.sliderInfo.pic_index, duration: 0.5});
      this.sliderChangeHandler(arguments[0]);
    });
  },

  methods: {
    headerStyleHandler(scrollCount) {
      if (this.pageInfo.content_offset < 200) {
        let tmp = parseInt(this.pageInfo.content_offset / 20);
        return 'header' + tmp.toString();
      } else {
        return 'header';
      }
    },
    fetch(event) {
      modal.toast({ message: "loadmore", duration: 1 });
      setTimeout(() => {
        const length = this.recommend.imgList.length;
        //const data = {title: "Smart Gadget Marketplace", src1:"//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2211247359/TB2J4h4nsjI8KJjSsppXXXbyVXa_!!2211247359.jpg", src2:"//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2211247359/TB2J4h4nsjI8KJjSsppXXXbyVXa_!!2211247359.jpg", src3:"//g-search3.alicdn.com/img/bao/uploaded/i4/i3/2211247359/TB2J4h4nsjI8KJjSsppXXXbyVXa_!!2211247359.jpg"};
        //const initSrc = {src1: '', src2: '', src3: ''};
        for (var i = length; i < length + 4; i++) {
          this.recommend.imgList.push({ title: "Smart Gadget Marketplace", src1: "http://img.tukuchina.cn/images/front/h/d5/f4/235553180780.jpg", src2: "http://img.tukuchina.cn/images/front/h/31/1e/235556736999.jpg", src3: "http://img.tukuchina.cn/images/front_pic2/h/14/3d/1382526790.jpg" });
          this.recommend.imgSrc.push({ src1: '', src2: '', src3: '' });
        }
      }, 800);
    },
    sliderChangeHandler(idx) {
      const cover = this.$refs.cover;
      let _this = this;
      this.sliderInfo.pic_index = idx;
      //modal.toast({message: idx, duration: 0.5});
      animation.transition(cover, {
        styles: {
          opacity: '0'
        },
        duration: 500, //ms
        timingFunction: 'ease',
        needLayout: false,
        delay: 0 //ms
      }, function () {
        //modal.toast({ message: 'animation finished.', duration: 0.5});
        _this.sliderInfo.pic_index0 = _this.sliderInfo.pic_index;
        animation.transition(cover, {
          styles: {
            opacity: '1'
          },
          duration: 0, //ms
          needLayout: false,
          delay: 0 //ms
        });
      });
    },
    appearHandler(idx) {
      //const top = this.getOffsetTop(event.target);
      const _this = this;
      setTimeout(function () {
        _this.recommend.imgSrc[idx].src1 = _this.recommend.imgList[idx].src1;
        _this.recommend.imgSrc[idx].src2 = _this.recommend.imgList[idx].src2;
        _this.recommend.imgSrc[idx].src3 = _this.recommend.imgList[idx].src3;
      }, 800);
    },

    scrollHandler(event) {
      this.pageInfo.content_offset = -event.contentOffset.y;
    },

    getOffsetTop(ele) {
      let top = ele.offsetTop;
      let node = ele.offsetParent;
      while (node != null) {
        top += node.offsetTop;
        node = node.offsetParent;
      }
      return top;
    }

  }
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: {
      position: "absolute",
      width: "750px",
      height: "500px"
    }
  }, [_c('image', {
    staticClass: ["background_img"],
    attrs: {
      "src": _vm.sliderInfo.sliderList[_vm.sliderInfo.pic_index].src
    }
  }), _c('image', {
    ref: "cover",
    staticClass: ["background_img", "trans"],
    attrs: {
      "src": _vm.sliderInfo.sliderList[_vm.sliderInfo.pic_index0].src,
      "v:bindStyle": "pageInfo.bgImgObj"
    }
  })]), _c('list', {
    staticClass: ["wrapper"],
    staticStyle: {
      height: "1250px"
    },
    attrs: {
      "loadmoreoffset": "100"
    },
    on: {
      "loadmore": _vm.fetch,
      "scroll": _vm.scrollHandler
    }
  }, [_c('header', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["header_block"],
    class: [_vm.headerStyleHandler(_vm.pageInfo.scroll_count)]
  }, [_c('text', {
    staticClass: ["header_text"]
  }, [_vm._v(_vm._s(_vm.pageInfo.head))])])]), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["slider1_block"]
  }, [_c('slider1', {
    attrs: {
      "infoList": _vm.sliderInfo.sliderList,
      "pic_index": _vm.sliderInfo.pic_index
    }
  })], 1)]), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["scroll_block"]
  }, [_c('block1', {
    attrs: {
      "head": _vm.experts.head,
      "infoList": _vm.experts.imgList
    }
  })], 1)]), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["recommend_head"]
  }, [_vm._v(_vm._s(_vm.recommend.head))])]), _vm._l((_vm.recommend.imgList), function(item, idx) {
    return _c('cell', {
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["list_item"]
    }, [_c('text', {
      staticClass: ["list_title"]
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["listImage"],
      on: {
        "appear": function($event) {
          _vm.appearHandler(idx)
        }
      }
    }, [_c('image', {
      staticClass: ["img"],
      attrs: {
        "src": _vm.recommend.imgSrc[idx].src1
      }
    }), _c('image', {
      staticClass: ["img"],
      attrs: {
        "src": _vm.recommend.imgSrc[idx].src2
      }
    }), _c('image', {
      staticClass: ["img"],
      attrs: {
        "src": _vm.recommend.imgSrc[idx].src3
      }
    })])])])
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 20 */
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


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
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
__vue_options__.__file = "/Users/mym/Documents/science/font_end/git仓库/Alibaba_weex_demo/src/components/Block1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a48fea8"
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


/***/ })
/******/ ]);