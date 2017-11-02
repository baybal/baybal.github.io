!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/build/",e(e.s=20)}({1:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return s});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(t,e){if(o(t)&&o(e))for(var i in e)t[i]=e[i];return t},o=function(t){return"object"===(void 0===t?"undefined":n(t))&&null!==t},s=function(t){return Math.floor(Math.random()*t.length)}},20:function(t,e,i){t.exports=i(21)},21:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(22),r=new n.a({el:"#play-ground"});r.addCreature({start:[5,18],colors:["lime","blue","blue","blue","blue"],speed:500}),r.addCreature({start:[55,0],colors:["red","yellow","red","red","red"],speed:300,grid:[60,60],size:1})},22:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=i(1),o=function(){function t(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw o}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,t);var i={};if(this.options=Object(r.a)(i,e),!this.options.el||!(this.parent=document.querySelector(this.options.el)))throw new Error("Playground: Parent element (options.el) is not found.");this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("width","100%"),this.svg.setAttribute("height","100%"),this.parent.append(this.svg),this.creatures=[]}return s(t,[{key:"addCreature",value:function(t){this.creatures.push(new a(this,t))}},{key:"width",get:function(){return this.svg.getBoundingClientRect().width}},{key:"height",get:function(){return this.svg.getBoundingClientRect().height}}]),t}();e.a=u;var a=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,t);var o={colors:["lime"],start:[0,0],speed:1e3,grid:[40,40],size:1};this.ground=e,this.svg=this.ground.svg,this.options=Object(r.a)(o,i),this.grid=this.createMatrix(this.options.grid[0],this.options.grid[1]),this.blocks=[],this.ambient=[this.options.start],this.loop(this.lastTime)}return s(t,[{key:"loop",value:function(){var t=this;setInterval(function(){t.addBlock()},this.options.speed)}},{key:"addBlock",value:function(){var t=Object(r.b)(this.ambient),e=this.ambient.splice(t,1),i=o(e,1),n=i[0],s=new h(this.svg,n,this.options.colors[Object(r.b)(this.options.colors)],this.ground.width/this.options.grid[0]*this.options.size),u=[[n[0],n[1]-1],[n[0]+1,n[1]],[n[0],n[1]+1],[n[0]-1,n[1]]];for(this.blocks.push(s),this.setCell(n,1);this.ambient.length<3&&u.length>0;){var a=u.splice(Object(r.b)(u),1),l=o(a,1),c=l[0];c[0]>=0&&c[1]>=0&&this.isEmptyCell(c)&&(this.ambient.push(c),this.setCell(c,-1))}}},{key:"isEmptyCell",value:function(t){var e=o(t,2),i=e[0],n=e[1];return 1!==this.grid[i][n]&&-1!==this.grid[i][n]}},{key:"setCell",value:function(t,e){var i=o(t,2),n=i[0],r=i[1];this.grid[n][r]=e}},{key:"createMatrix",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=new Array(t),n=0;n<i.length;n++)i[n]=new Array(e);return i}}]),t}(),h=function(){function t(e,i,r,o){n(this,t),this.root=e,this.size=o,this.svg=new l(this.root,this.convertCoordsToPoints(i)),this.svg.setAttribute("class","creature-block"),this.svg.setAttribute("fill",r),this.svg.setAttribute("stroke",r),this.root.insertBefore(this.svg.node,this.root.firstChild)}return s(t,[{key:"convertCoordsToPoints",value:function(t){var e=o(t,2),i=e[0],n=e[1];return[{x:i*this.size,y:n*this.size},{x:i*this.size+this.size,y:n*this.size},{x:i*this.size+this.size,y:n*this.size+this.size},{x:i*this.size,y:n*this.size+this.size}]}}]),t}(),l=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];arguments[2];if(n(this,t),this.root=e,this.node=document.createElementNS("http://www.w3.org/2000/svg","polygon"),this.points=this.node.points,i.length>0){var r=this.createPoints(i);this.initialize(r[0]);for(var o=1;o<r.length;o++)this.appendPoint(r[o])}}return s(t,[{key:"createPoint",value:function(t){var e=this.root.createSVGPoint();return e.x=t.x,e.y=t.y,e}},{key:"createPoints",value:function(t){var e=[],i=!0,n=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var u=o.value;e.push(this.createPoint(u))}}catch(t){n=!0,r=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw r}}return e}},{key:"setPoints",value:function(t){if(t.length>0){var e=this.createPoints(t);this.initialize(e[0]);for(var i=1;i<e.length;i++)this.appendPoint(e[i])}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:createPoint({x:0,y:0});this.points.initialize(t)}},{key:"appendPoint",value:function(t){this.points.appendItem(t)}},{key:"getPoint",value:function(t){return this.points.getItem(t)}},{key:"setAttribute",value:function(t,e){this.node.setAttribute(t,e)}}]),t}()}});