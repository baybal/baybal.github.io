!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/build/",e(e.s=5)}([function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e){function i(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=i},function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"c",function(){return a}),i.d(e,"b",function(){return s});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(t,e){if(o(t)&&o(e))for(var i in e)t[i]=e[i];return t},o=function(t){return"object"===(void 0===t?"undefined":n(t))&&null!==t},a=function(t){return"number"==typeof t&&!isNaN(t)},s=function(t){return Math.floor(Math.random()*t.length)}},function(t,e,i){var n=i(12),r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();t.exports=o},function(t,e,i){var n=i(3),r=n.Symbol;t.exports=r},function(t,e,i){i(6),t.exports=i(19)},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=i(7),o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();(new(function(){function t(){n(this,t),this.options={SIGN:{el:".h-sign",throttle:100},PIXELS:{el:"#hoodies-pixels",config:{picture:{srcset:"dist/media/pixels.png"},steps:11,rows:11}}}}return o(t,[{key:"init",value:function(){this.isMobileSafari()&&this.updateSignStyle(),this.initPixels()}},{key:"updateSignStyle",value:function(){var t=document.querySelector(this.options.SIGN.el);t&&(t.setAttribute("style",""),t.style.height=window.getComputedStyle(t).getPropertyValue("height"))}},{key:"initPixels",value:function(){new r.a({el:this.options.PIXELS.el,config:this.options.PIXELS.config})}},{key:"isMobileSafari",value:function(){return/iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(navigator.userAgent)}}]),t}())).init()},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=i(8),o=i(9),a=i.n(o),s=i(2),u=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=function(){function t(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,t);var r={el:"",throttle:100};if(this.options=Object(s.a)(r,i),!this.options.el||!(this.el=document.querySelector(this.options.el)))throw new Error("Pixelation Element (options.el) not found.");if(!this.options.config)throw new Error("Pixelation Config (options.config) shouldn`t be empty.");this.handler=a()(function(){var t=document.documentElement.scrollTop||document.body.scrollTop,i=h(e.el),n=i+t,r=n-i,o=e.sprite.options.steps,a=r/n,s=Math.ceil(o*a)>0?Math.ceil(o*a):1;s<o?e.sprite.step(s):e.sprite.step(o)},this.options.throttle),this.init()}return u(t,[{key:"init",value:function(){this.sprite=Object(r.a)(this.options.el,this.options.config),window.addEventListener("scroll",this.handler)}},{key:"destroy",value:function(){window.removeEventListener("scroll",this.handler),this.sprite&&this.sprite.destroy()}}]),t}();e.a=c;var h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return Math.round(t.getBoundingClientRect().top)}},function(t,e,i){"use strict";/*!
* spritz.js 2.2.1 - Modern and delightful sprites animation library for JavaScript!
*
* @author       maoosi <hello@sylvainsimao.fr>
* @homepage     https://github.com/maoosi/spritz.js
* @copyright    Copyright (c) 2017 maoosi <hello@sylvainsimao.fr>
* @license      MIT
* @version      2.2.1
*/
var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},r=function(){function t(t,e){return a[t]=a[t]||[],a[t].push(e),this}function e(e,i){return i._once=!0,t(e,i),this}function i(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?a[t].splice(a[t].indexOf(e),1):delete a[t],this}function r(t){for(var e=this,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var s=a[t]&&a[t].slice();return s&&s.forEach(function(n){n._once&&i(t,n),n.apply(e,r)}),this}var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object.create(null);return n({},o,{on:t,once:e,off:i,emit:r})},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(){o(this,t),this.waitQueue=[],this.waitExecution=!1}return a(t,[{key:"handle",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this.waitQueue.push({func:e,timeout:this._isAsyncFunc(e)?"async":i}),this.waitExecution||this._next(),t}},{key:"pause",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return this.handle(t,i,e)}},{key:"_isAsyncFunc",value:function(t){return t.toString().search("done()")>-1}},{key:"_exec",value:function(t){var e=this;t.call(this,function(){e._next()})}},{key:"_next",value:function(){var t=this;if(this.waitQueue.length>0){this.waitExecution=!0;var e=this.waitQueue.shift(),i=e.func,n=e.timeout;"async"===n?this._exec(i):!1!==n?(this._exec(i),setTimeout(function(){t._next()},n)):(this._exec(i),this._next())}else this.waitExecution=!1}}]),t}(),u=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return new(Function.prototype.bind.apply(s,[null].concat(e)))},c=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},h=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,t),this.options={picture:i.picture||[],steps:i.steps||1,rows:i.rows||1,init:void 0!==i.init?i.init:1,testunit:i.testunit||!1},Array.isArray(this.options.picture)||(this.options.picture=[this.options.picture]),this.selector="string"==typeof e?document.querySelector(e):e,this.emitter=r(),this.waitter=u(),this.supportsWebP=this._supportsWebP(),this.initiated=!1,this.options.init>0?this.init(this.options.init):this}return h(t,[{key:"_globalVars",value:function(){this.canvas=!1,this.ctx=!1,this.loaded=!1,this._resetUntil(),this.anim=!1,this.columns=Math.ceil(this.options.steps/this.options.rows),this.currentFps=15,this.flipped=!1}},{key:"_throttle",value:function(t,e){var i=this,n=arguments,r=void 0,o=void 0;return function(){var a=i,s=+new Date,u=n;r&&s<r+e?(clearTimeout(o),o=setTimeout(function(){r=s,t.apply(a,u)},e)):(r=s,t.apply(a,u))}}},{key:"_bindEvents",value:function(){var t=this;this.resize=this._throttle(function(){t._resize()},250),window.addEventListener("resize",this.resize,!1)}},{key:"_unbindEvents",value:function(){window.removeEventListener("resize",this.resize,!1)}},{key:"_resize",value:function(){this._loadPicture(),this.emitter.emit("resize",this.pic)}},{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.waitter.handle(this,function(){t.initiated||(t.initialStep=e,t.currentStep=e,t._globalVars(),t._bindEvents(),t._createCanvas(),t._loadPicture(),t.initiated=!0,t.emitter.emit("ready"))})}},{key:"destroy",value:function(){var t=this;return this.waitter.handle(this,function(){t.initiated&&(t.stop(),t._unbindEvents(),t.canvas.parentNode.removeChild(t.canvas),t.container.parentNode.removeChild(t.container),t.canvas=!1,t.ctx=!1,t.initiated=!1,t.emitter.emit("destroy"),t.emitter.off("ready"),t.emitter.off("destroy"),t.emitter.off("resize"),t.emitter.off("play"),t.emitter.off("load"),t.emitter.off("change"),t.emitter.off("wait"),t.emitter.off("flip"),t.emitter.off("pause"),t.emitter.off("stop"))})}},{key:"play",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.waitter.handle(this,function(){t.animDirection="backward"===e?"backward":"forward",t._startAnimation(),t.emitter.emit("play",t.animDirection)})}},{key:"playback",value:function(){var t=this;return this.waitter.handle(this,function(){t.animDirection="backward",t._startAnimation(),t.emitter.emit("play",t.animDirection)})}},{key:"pause",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.waitter.handle(this,function(){t._pauseAnimation(),e||t.emitter.emit("pause")})}},{key:"stop",value:function(){var t=this;return this.waitter.handle(this,function(){t.pause(!0),t.step(t.initialStep),t.emitter.emit("stop")})}},{key:"wait",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.waitter.handle(this,function(){t.emitter.emit("wait",e)},e)}},{key:"step",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.waitter.handle(this,function(){var i=t.currentStep;t.currentStep=e,t._draw(),t.emitter.emit("change",i,t.currentStep)})}},{key:"fps",value:function(t){var e=this;return this.waitter.handle(this,function(){e.currentFps=t})}},{key:"until",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.waitter.handle(this,function(){e.stopAtStep=t,e.stopAtLoop=i})}},{key:"next",value:function(){var t=this;return this.waitter.handle(this,function(){t.animDirection="forward";var e=t.currentStep;t.currentStep=t._targetStep(),t._draw(),t.emitter.emit("change",e,t.currentStep)})}},{key:"prev",value:function(){var t=this;return this.waitter.handle(this,function(){t.animDirection="backward";var e=t.currentStep;t.currentStep=t._targetStep(),t._draw(),t.emitter.emit("change",e,t.currentStep)})}},{key:"get",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.waitter.handle(this,function(){switch(t){case"step":return!1!==i?i.call(e,e.currentStep):e.currentStep;case"picture":return!1!==i?i.call(e,e.pic):e.pic;default:return!1}})}},{key:"flip",value:function(){var t=this;return this.waitter.handle(this,function(){var e=t.flipped?"width:100%;height:100%;":"width:100%;height:100%;-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1);-webkit-filter:FlipH;filter:FlipH;";t.container.setAttribute("style",e),t.flipped=!t.flipped,t.emitter.emit("flip")})}},{key:"on",value:function(){var t;return(t=this.emitter).on.apply(t,arguments)}},{key:"off",value:function(){var t;return(t=this.emitter).off.apply(t,arguments)}},{key:"_resetUntil",value:function(){this.stopAtLoop=!1,this.stopAtStep=!1}},{key:"_targetStep",value:function(){return"forward"===this.animDirection?this.currentStep<this.options.steps?this.currentStep+1:1:this.currentStep>1?this.currentStep-1:this.options.steps}},{key:"_animate",value:function(t){var e=this;if(this.initiated){void 0===this.animTime&&(this.animTime=t);var i=Math.floor((t-this.animTime)/(1e3/this.currentFps)),n=!1;if(i>this.animFrame){this.animFrame=i;var r=this.currentStep;this.currentStep=this._targetStep();var o=!0;this.currentStep===this.stopAtStep&&++this.currentLoop===this.stopAtLoop&&(o=!1),o?(this._draw(),this.emitter.emit("change",r,this.currentStep)):(this._draw(),this.pause(),n=!0)}n||this.requireStop||(this.anim=window.requestAnimationFrame(function(t){return e._animate(t)}))}}},{key:"_startAnimation",value:function(){var t=this;this.anim?(this.pause(),this.play(this.animDirection)):(this.requireStop=!1,this.animTime=void 0,this.animFrame=0,this.currentLoop=0,this.anim=window.requestAnimationFrame(function(e){return t._animate(e)}))}},{key:"_pauseAnimation",value:function(){this.anim&&(this._resetUntil(),this.requireStop=!0,window.cancelAnimationFrame(this.anim),this.anim=!1)}},{key:"_selectPicture",value:function(){for(var t=0;t<this.options.picture.length;t++){var e=this.options.picture[t];if(this._supportsFormat(e.srcset)&&this._matchesMedia(e.media))return this.pic=e,e.srcset}return!1}},{key:"_supportsFormat",value:function(t){var e=this._getExtension(t);return"webp"===e&&this.supportsWebP||"webp"!==e}},{key:"_supportsWebP",value:function(){var t=document.createElement("canvas");return t.width=t.height=1,t.toDataURL&&t.toDataURL("image/webp")&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}},{key:"_getExtension",value:function(t){return/[.]/.exec(t)?/[^.]+$/.exec(t)[0]:void 0}},{key:"_matchesMedia",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=window.matchMedia(t);return void 0===t||e.matches}},{key:"_setDimensions",value:function(){this.stepWidth=this.pic.width/this.columns,this.stepHeight=this.pic.height/this.options.rows,this.stepRatio=this.stepWidth/this.stepHeight,this.parentWidth=this.selector.clientWidth,this.parentHeight=this.selector.clientHeight,this.parentRatio=this.parentWidth/this.parentHeight,"cover"===this.pic.objectFit?this.stepRatio>=this.parentRatio?(this.canvasHeight=this.parentHeight,this.canvasWidth=this.stepWidth*this.canvasHeight/this.stepHeight):(this.canvasWidth=this.parentWidth,this.canvasHeight=this.stepHeight*this.canvasWidth/this.stepWidth):this.stepRatio>=this.parentRatio?(this.canvasWidth=this.parentWidth,this.canvasHeight=this.stepHeight*this.canvasWidth/this.stepWidth):(this.canvasHeight=this.parentHeight,this.canvasWidth=this.stepWidth*this.canvasHeight/this.stepHeight),this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight}},{key:"_loadPicture",value:function(){var t=this;this.picture=new Image,this.picture.onload=function(){t.pic.width||(t.pic.width=t.picture.naturalWidth),t.pic.height||(t.pic.height=t.picture.naturalHeight),t.loaded||(t.emitter.emit("load",t.pic),t.loaded=!0),t._draw()},this.picture.src=this._selectPicture()}},{key:"_draw",value:function(){this.initiated&&(this._setDimensions(),this._drawPicture())}},{key:"_drawPicture",value:function(){var t=Math.floor((this.currentStep-1)%this.columns),e=Math.floor((this.currentStep-1)/this.columns),i=t*this.stepWidth,n=e*this.stepHeight;this.options.testunit||(this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.ctx.drawImage(this.picture,Math.round(i),Math.round(n),this.stepWidth,this.stepHeight,0,0,this.canvasWidth,this.canvasHeight))}},{key:"_createCanvas",value:function(){this.canvas=document.createElement("canvas"),this.canvas.setAttribute("style","position:absolute;left:50%;top:50%;-webkit-transform:translateY(-50%) translateY(1px) translateX(-50%) translateX(1px);-ms-transform:translateY(-50%) translateY(1px) translateX(-50%) translateX(1px);transform:translateY(-50%) translateY(1px) translateX(-50%) translateX(1px);"),this.container=document.createElement("div"),this.container.setAttribute("style","width:100%;height:100%;position:relative;"),this.container.appendChild(this.canvas),this.selector.appendChild(this.container),this.ctx=this.canvas.getContext("2d")}}]),t}(),p=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return new(Function.prototype.bind.apply(l,[null].concat(e)))};e.a=p},function(t,e,i){function n(t,e,i){var n=!0,s=!0;if("function"!=typeof t)throw new TypeError(a);return o(i)&&(n="leading"in i?!!i.leading:n,s="trailing"in i?!!i.trailing:s),r(t,e,{leading:n,maxWait:e,trailing:s})}var r=i(10),o=i(1),a="Expected a function";t.exports=n},function(t,e,i){function n(t,e,i){function n(e){var i=g,n=w;return g=w=void 0,k=e,_=t.apply(n,i)}function h(t){return k=t,x=setTimeout(f,e),E?n(t):_}function l(t){var i=t-S,n=t-k,r=e-i;return W?c(r,b-n):r}function p(t){var i=t-S,n=t-k;return void 0===S||i>=e||i<0||W&&n>=b}function f(){var t=o();if(p(t))return v(t);x=setTimeout(f,l(t))}function v(t){return x=void 0,j&&g?n(t):(g=w=void 0,_)}function d(){void 0!==x&&clearTimeout(x),k=0,g=S=w=x=void 0}function m(){return void 0===x?_:v(o())}function y(){var t=o(),i=p(t);if(g=arguments,w=this,S=t,i){if(void 0===x)return h(S);if(W)return x=setTimeout(f,e),n(S)}return void 0===x&&(x=setTimeout(f,e)),_}var g,w,b,_,x,S,k=0,E=!1,W=!1,j=!0;if("function"!=typeof t)throw new TypeError(s);return e=a(e)||0,r(i)&&(E=!!i.leading,W="maxWait"in i,b=W?u(a(i.maxWait)||0,e):b,j="trailing"in i?!!i.trailing:j),y.cancel=d,y.flush=m,y}var r=i(1),o=i(11),a=i(13),s="Expected a function",u=Math.max,c=Math.min;t.exports=n},function(t,e,i){var n=i(3),r=function(){return n.Date.now()};t.exports=r},function(t,e,i){(function(e){var i="object"==typeof e&&e&&e.Object===Object&&e;t.exports=i}).call(e,i(0))},function(t,e,i){function n(t){if("number"==typeof t)return t;if(o(t))return a;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var i=c.test(t);return i||h.test(t)?l(t.slice(2),i?2:8):u.test(t)?a:+t}var r=i(1),o=i(14),a=NaN,s=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,h=/^0o[0-7]+$/i,l=parseInt;t.exports=n},function(t,e,i){function n(t){return"symbol"==typeof t||o(t)&&r(t)==a}var r=i(15),o=i(18),a="[object Symbol]";t.exports=n},function(t,e,i){function n(t){return null==t?void 0===t?u:s:c&&c in Object(t)?o(t):a(t)}var r=i(4),o=i(16),a=i(17),s="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=n},function(t,e,i){function n(t){var e=a.call(t,u),i=t[u];try{t[u]=void 0;var n=!0}catch(t){}var r=s.call(t);return n&&(e?t[u]=i:delete t[u]),r}var r=i(4),o=Object.prototype,a=o.hasOwnProperty,s=o.toString,u=r?r.toStringTag:void 0;t.exports=n},function(t,e){function i(t){return r.call(t)}var n=Object.prototype,r=n.toString;t.exports=i},function(t,e){function i(t){return null!=t&&"object"==typeof t}t.exports=i},function(t,e){}]);