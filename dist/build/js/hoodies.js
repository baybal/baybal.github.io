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
/******/ 	__webpack_require__.p = "/dist/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extend; });
/* unused harmony export isObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRandomArrayIndex; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copies properties from one object to another (merge).
 */
var extend = function extend(to, from) {
  if (isObject(to) && isObject(from)) {
    for (var key in from) {
      to[key] = from[key];
    }
  }
  return to;
};

/**
 * Checks if the given argument is an object or not.
 */
var isObject = function isObject(ob) {
  return (typeof ob === 'undefined' ? 'undefined' : _typeof(ob)) === 'object' && ob !== null;
};

/**
 * Checks if the given argument is a number or not.
 */
var isNumber = function isNumber(num) {
  return typeof num === 'number' && !isNaN(num);
};

/**
 * Gets a random array item index.
 */
var getRandomArrayIndex = function getRandomArrayIndex(array) {
  return Math.floor(Math.random() * array.length);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(13);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
module.exports = __webpack_require__(20);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_pixelation_js__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.options = {
      SIGN: {
        el: '.h-sign',
        update_timeout: 200
      },
      PIXELS: {
        el: '#hoodies-pixels',
        config: {
          picture: {
            srcset: 'dist/media/pixels.png'
          },
          steps: 11,
          rows: 11
        }
      }
    };

    this.init();
  }

  _createClass(App, [{
    key: 'init',
    value: function init() {
      if (this.isMobile()) {
        this.updateSignStyle();
      }
      this.initPixels();
      this.bindUIActions();
    }
  }, {
    key: 'bindUIActions',
    value: function bindUIActions() {
      window.addEventListener("orientationchange", this.updateSignStyle.bind(this), false);
    }

    /**
     * Fixing content shaking on mobile devices caused by
     * scroll changing viewport height (browsers toolbars sliding)
     */

  }, {
    key: 'updateSignStyle',
    value: function updateSignStyle() {
      var signElement = document.querySelector(this.options.SIGN.el);

      if (signElement) {
        signElement.setAttribute('style', '');
        // making sure that previous value has been removed and then setting the new one
        setTimeout(function () {
          signElement.style.height = window.getComputedStyle(signElement).getPropertyValue('height');
        }, this.options.SIGN.update_timeout);
      }
    }
  }, {
    key: 'initPixels',
    value: function initPixels() {
      new __WEBPACK_IMPORTED_MODULE_0_modules_pixelation_js__["a" /* default */]({
        el: this.options.PIXELS.el,
        config: this.options.PIXELS.config
      });
    }
  }, {
    key: 'isMobile',
    value: function isMobile() {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) && !window.MSStream
      );
    }
  }]);

  return App;
}();

new App();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_spritz_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_throttle_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_throttle_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_throttle_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_utils_js__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





/**
 * Pixelation.
 * Module that consistently changes sprite frames on the given HTMLElement
 * as it scrolls through the page.
 */

var Pixelation = function () {
  function Pixelation() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Pixelation);

    var defaults = {
      el: '',
      throttle: 100
    };

    this.options = Object(__WEBPACK_IMPORTED_MODULE_2_modules_utils_js__["a" /* extend */])(defaults, options);

    if (!this.options.el || !(this.el = document.querySelector(this.options.el))) {
      throw new Error('Pixelation Element (options.el) not found.');
    }

    if (!this.options.config) {
      throw new Error('Pixelation Config (options.config) shouldn`t be empty.');
    }

    this.handler = __WEBPACK_IMPORTED_MODULE_1_lodash_throttle_js___default()(function () {
      var scrollPos = document.documentElement.scrollTop || document.body.scrollTop,
          curElPos = getElementPosition(_this.el),
          maxElPos = curElPos + scrollPos,
          scrolled = maxElPos - curElPos,
          frames_count = _this.sprite.options.steps,
          acceleration = 1.5,
          p = scrolled / maxElPos * acceleration,
          nextFrame = Math.ceil(frames_count * p);

      if (nextFrame <= 0) {
        nextFrame = 1;
      } else if (nextFrame > frames_count) {
        nextFrame = frames_count;
      }

      _this.sprite.step(nextFrame);
    }, this.options.throttle);

    this.init();
  }

  _createClass(Pixelation, [{
    key: 'init',
    value: function init() {
      this.sprite = Object(__WEBPACK_IMPORTED_MODULE_0_spritz_js__["a" /* default */])(this.options.el, this.options.config);
      window.addEventListener('scroll', this.handler);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      window.removeEventListener('scroll', this.handler);
      if (this.sprite) {
        this.sprite.destroy();
      }
    }
  }]);

  return Pixelation;
}();

/* harmony default export */ __webpack_exports__["a"] = (Pixelation);


var getElementPosition = function getElementPosition() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

  return Math.round(el.getBoundingClientRect().top);
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
* spritz.js 2.2.1 - Modern and delightful sprites animation library for JavaScript!
*
* @author       maoosi <hello@sylvainsimao.fr>
* @homepage     https://github.com/maoosi/spritz.js
* @copyright    Copyright (c) 2017 maoosi <hello@sylvainsimao.fr>
* @license      MIT
* @version      2.2.1
*/
var _extends=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},knot=function(){function t(t,i){return a[t]=a[t]||[],a[t].push(i),this}function i(i,e){return e._once=!0,t(i,e),this}function e(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i?a[t].splice(a[t].indexOf(i),1):delete a[t],this}function n(t){for(var i=this,n=arguments.length,s=Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];var h=a[t]&&a[t].slice();return h&&h.forEach(function(n){n._once&&e(t,n),n.apply(i,s)}),this}var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object.create(null);return _extends({},s,{on:t,once:i,off:e,emit:n})},classCallCheck=function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")},createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}(),Wait=function(){function t(){classCallCheck(this,t),this.waitQueue=[],this.waitExecution=!1}return createClass(t,[{key:"handle",value:function(t,i){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this.waitQueue.push({func:i,timeout:this._isAsyncFunc(i)?"async":e}),this.waitExecution||this._next(),t}},{key:"pause",value:function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return this.handle(t,e,i)}},{key:"_isAsyncFunc",value:function(t){return t.toString().search("done()")>-1}},{key:"_exec",value:function(t){var i=this;t.call(this,function(){i._next()})}},{key:"_next",value:function(){var t=this;if(this.waitQueue.length>0){this.waitExecution=!0;var i=this.waitQueue.shift(),e=i.func,n=i.timeout;"async"===n?this._exec(e):n!==!1?(this._exec(e),setTimeout(function(){t._next()},n)):(this._exec(e),this._next())}else this.waitExecution=!1}}]),t}(),wait=function(){for(var t=arguments.length,i=Array(t),e=0;e<t;e++)i[e]=arguments[e];return new(Function.prototype.bind.apply(Wait,[null].concat(i)))},classCallCheck$1=function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")},createClass$1=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}(),Spritz=function(){function t(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return classCallCheck$1(this,t),this.options={picture:e.picture||[],steps:e.steps||1,rows:e.rows||1,init:"undefined"!=typeof e.init?e.init:1,testunit:e.testunit||!1},Array.isArray(this.options.picture)||(this.options.picture=[this.options.picture]),this.selector="string"==typeof i?document.querySelector(i):i,this.emitter=knot(),this.waitter=wait(),this.supportsWebP=this._supportsWebP(),this.initiated=!1,this.options.init>0?this.init(this.options.init):this}return createClass$1(t,[{key:"_globalVars",value:function(){this.canvas=!1,this.ctx=!1,this.loaded=!1,this._resetUntil(),this.anim=!1,this.columns=Math.ceil(this.options.steps/this.options.rows),this.currentFps=15,this.flipped=!1}},{key:"_throttle",value:function(t,i){var e=this,n=arguments,s=void 0,a=void 0;return function(){var r=e,h=+new Date,o=n;s&&h<s+i?(clearTimeout(a),a=setTimeout(function(){s=h,t.apply(r,o)},i)):(s=h,t.apply(r,o))}}},{key:"_bindEvents",value:function(){var t=this;this.resize=this._throttle(function(){t._resize()},250),window.addEventListener("resize",this.resize,!1)}},{key:"_unbindEvents",value:function(){window.removeEventListener("resize",this.resize,!1)}},{key:"_resize",value:function(){this._loadPicture(),this.emitter.emit("resize",this.pic)}},{key:"init",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.waitter.handle(this,function(){t.initiated||(t.initialStep=i,t.currentStep=i,t._globalVars(),t._bindEvents(),t._createCanvas(),t._loadPicture(),t.initiated=!0,t.emitter.emit("ready"))})}},{key:"destroy",value:function(){var t=this;return this.waitter.handle(this,function(){t.initiated&&(t.stop(),t._unbindEvents(),t.canvas.parentNode.removeChild(t.canvas),t.container.parentNode.removeChild(t.container),t.canvas=!1,t.ctx=!1,t.initiated=!1,t.emitter.emit("destroy"),t.emitter.off("ready"),t.emitter.off("destroy"),t.emitter.off("resize"),t.emitter.off("play"),t.emitter.off("load"),t.emitter.off("change"),t.emitter.off("wait"),t.emitter.off("flip"),t.emitter.off("pause"),t.emitter.off("stop"))})}},{key:"play",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.waitter.handle(this,function(){t.animDirection="backward"===i?"backward":"forward",t._startAnimation(),t.emitter.emit("play",t.animDirection)})}},{key:"playback",value:function(){var t=this;return this.waitter.handle(this,function(){t.animDirection="backward",t._startAnimation(),t.emitter.emit("play",t.animDirection)})}},{key:"pause",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.waitter.handle(this,function(){t._pauseAnimation(),i||t.emitter.emit("pause")})}},{key:"stop",value:function(){var t=this;return this.waitter.handle(this,function(){t.pause(!0),t.step(t.initialStep),t.emitter.emit("stop")})}},{key:"wait",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.waitter.handle(this,function(){t.emitter.emit("wait",i)},i)}},{key:"step",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.waitter.handle(this,function(){var e=t.currentStep;t.currentStep=i,t._draw(),t.emitter.emit("change",e,t.currentStep)})}},{key:"fps",value:function(t){var i=this;return this.waitter.handle(this,function(){i.currentFps=t})}},{key:"until",value:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.waitter.handle(this,function(){i.stopAtStep=t,i.stopAtLoop=e})}},{key:"next",value:function(){var t=this;return this.waitter.handle(this,function(){t.animDirection="forward";var i=t.currentStep;t.currentStep=t._targetStep(),t._draw(),t.emitter.emit("change",i,t.currentStep)})}},{key:"prev",value:function(){var t=this;return this.waitter.handle(this,function(){t.animDirection="backward";var i=t.currentStep;t.currentStep=t._targetStep(),t._draw(),t.emitter.emit("change",i,t.currentStep)})}},{key:"get",value:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.waitter.handle(this,function(){switch(t){case"step":return e!==!1?e.call(i,i.currentStep):i.currentStep;case"picture":return e!==!1?e.call(i,i.pic):i.pic;default:return!1}})}},{key:"flip",value:function(){var t=this;return this.waitter.handle(this,function(){var i=t.flipped?"width:100%;height:100%;":"width:100%;height:100%;-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1);-webkit-filter:FlipH;filter:FlipH;";t.container.setAttribute("style",i),t.flipped=!t.flipped,t.emitter.emit("flip")})}},{key:"on",value:function(){var t;return(t=this.emitter).on.apply(t,arguments)}},{key:"off",value:function(){var t;return(t=this.emitter).off.apply(t,arguments)}},{key:"_resetUntil",value:function(){this.stopAtLoop=!1,this.stopAtStep=!1}},{key:"_targetStep",value:function(){return"forward"===this.animDirection?this.currentStep<this.options.steps?this.currentStep+1:1:this.currentStep>1?this.currentStep-1:this.options.steps}},{key:"_animate",value:function(t){var i=this;if(this.initiated){void 0===this.animTime&&(this.animTime=t);var e=Math.floor((t-this.animTime)/(1e3/this.currentFps)),n=!1;if(e>this.animFrame){this.animFrame=e;var s=this.currentStep;this.currentStep=this._targetStep();var a=!0;this.currentStep===this.stopAtStep&&(this.currentLoop++,this.currentLoop===this.stopAtLoop&&(a=!1)),a?(this._draw(),this.emitter.emit("change",s,this.currentStep)):(this._draw(),this.pause(),n=!0)}n||this.requireStop||(this.anim=window.requestAnimationFrame(function(t){return i._animate(t)}))}}},{key:"_startAnimation",value:function(){var t=this;this.anim?(this.pause(),this.play(this.animDirection)):(this.requireStop=!1,this.animTime=void 0,this.animFrame=0,this.currentLoop=0,this.anim=window.requestAnimationFrame(function(i){return t._animate(i)}))}},{key:"_pauseAnimation",value:function(){this.anim&&(this._resetUntil(),this.requireStop=!0,window.cancelAnimationFrame(this.anim),this.anim=!1)}},{key:"_selectPicture",value:function(){for(var t=0;t<this.options.picture.length;t++){var i=this.options.picture[t];if(this._supportsFormat(i.srcset)&&this._matchesMedia(i.media))return this.pic=i,i.srcset}return!1}},{key:"_supportsFormat",value:function(t){var i=this._getExtension(t);return"webp"===i&&this.supportsWebP||"webp"!==i}},{key:"_supportsWebP",value:function(){var t=document.createElement("canvas");return t.width=t.height=1,t.toDataURL&&t.toDataURL("image/webp")&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}},{key:"_getExtension",value:function(t){return/[.]/.exec(t)?/[^.]+$/.exec(t)[0]:void 0}},{key:"_matchesMedia",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=window.matchMedia(t);return void 0===t||i.matches}},{key:"_setDimensions",value:function(){this.stepWidth=this.pic.width/this.columns,this.stepHeight=this.pic.height/this.options.rows,this.stepRatio=this.stepWidth/this.stepHeight,this.parentWidth=this.selector.clientWidth,this.parentHeight=this.selector.clientHeight,this.parentRatio=this.parentWidth/this.parentHeight,"cover"===this.pic.objectFit?this.stepRatio>=this.parentRatio?(this.canvasHeight=this.parentHeight,this.canvasWidth=this.stepWidth*this.canvasHeight/this.stepHeight):(this.canvasWidth=this.parentWidth,this.canvasHeight=this.stepHeight*this.canvasWidth/this.stepWidth):this.stepRatio>=this.parentRatio?(this.canvasWidth=this.parentWidth,this.canvasHeight=this.stepHeight*this.canvasWidth/this.stepWidth):(this.canvasHeight=this.parentHeight,this.canvasWidth=this.stepWidth*this.canvasHeight/this.stepHeight),this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight}},{key:"_loadPicture",value:function(){var t=this;this.picture=new Image,this.picture.onload=function(){t.pic.width||(t.pic.width=t.picture.naturalWidth),t.pic.height||(t.pic.height=t.picture.naturalHeight),t.loaded||(t.emitter.emit("load",t.pic),t.loaded=!0),t._draw()},this.picture.src=this._selectPicture()}},{key:"_draw",value:function(){this.initiated&&(this._setDimensions(),this._drawPicture())}},{key:"_drawPicture",value:function(){var t=Math.floor((this.currentStep-1)%this.columns),i=Math.floor((this.currentStep-1)/this.columns),e=t*this.stepWidth,n=i*this.stepHeight;this.options.testunit||(this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.ctx.drawImage(this.picture,Math.round(e),Math.round(n),this.stepWidth,this.stepHeight,0,0,this.canvasWidth,this.canvasHeight))}},{key:"_createCanvas",value:function(){this.canvas=document.createElement("canvas"),this.canvas.setAttribute("style","position:absolute;left:50%;top:50%;-webkit-transform:translateY(-50%) translateY(1px) translateX(-50%) translateX(1px);-ms-transform:translateY(-50%) translateY(1px) translateX(-50%) translateX(1px);transform:translateY(-50%) translateY(1px) translateX(-50%) translateX(1px);"),this.container=document.createElement("div"),this.container.setAttribute("style","width:100%;height:100%;position:relative;"),this.container.appendChild(this.canvas),this.selector.appendChild(this.container),this.ctx=this.canvas.getContext("2d")}}]),t}(),spritz=function(){for(var t=arguments.length,i=Array(t),e=0;e<t;e++)i[e]=arguments[e];return new(Function.prototype.bind.apply(Spritz,[null].concat(i)))};/* harmony default export */ __webpack_exports__["a"] = (spritz);
//# sourceMappingURL=spritz.mjs.map


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(11),
    isObject = __webpack_require__(1);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1),
    now = __webpack_require__(12),
    toNumber = __webpack_require__(14);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1),
    isSymbol = __webpack_require__(15);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(19);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(4),
    getRawTag = __webpack_require__(17),
    objectToString = __webpack_require__(18);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(4);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);