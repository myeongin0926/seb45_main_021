(self.webpackChunkclient=self.webpackChunkclient||[]).push([[757],{4757:function(t,o,e){var r;"undefined"!==typeof self&&self,r=function(t){return function(t){var o={};function e(r){if(o[r])return o[r].exports;var l=o[r]={i:r,l:!1,exports:{}};return t[r].call(l.exports,l,l.exports,e),l.l=!0,l.exports}return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=0)}([function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r,l=e(1),n=(r=l)&&r.__esModule?r:{default:r};o.default=n.default},function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r,l=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},n=function(){function t(t,o){for(var e=0;e<o.length;e++){var r=o[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(o,e,r){return e&&t(o.prototype,e),r&&t(o,r),o}}(),i=e(2),s=(r=i)&&r.__esModule?r:{default:r},c=function(t){function o(t){!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o);var e=function(t,o){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!==typeof o&&"function"!==typeof o?t:o}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t));return e.smoothScroll=e.smoothScroll.bind(e),e}return function(t,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(t,o):t.__proto__=o)}(o,t),n(o,[{key:"componentDidMount",value:function(){e(3).polyfill()}},{key:"smoothScroll",value:function(t){var o=this;t.preventDefault();var e=function(){return 0};"undefined"!==typeof this.props.offset&&(e=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(o.props.offset)});var r=t.currentTarget.getAttribute("href").slice(1),l=document.getElementById(r).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:l-e(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,o=(t.offset,function(t,o){var e={};for(var r in t)o.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}(t,["offset"]));return s.default.createElement("a",l({},o,{onClick:this.smoothScroll}))}}]),o}(i.Component);o.default=c},function(o,e){o.exports=t},function(t,o,e){!function(){"use strict";t.exports={polyfill:function(){var t=window,o=document;if(!("scrollBehavior"in o.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var e,r=t.HTMLElement||t.Element,l=468,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||c,scrollIntoView:r.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,s=(e=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(e)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(t,o.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var t=arguments[0].left,o=arguments[0].top;h.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof o?this.scrollTop:~~o)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var e=function(t){var e;do{e=(t=t.parentNode)===o.body}while(!1===e&&!1===u(t));return e=null,t}(this),r=e.getBoundingClientRect(),l=this.getBoundingClientRect();e!==o.body?(h.call(this,e,e.scrollLeft+l.left-r.left,e.scrollTop+l.top-r.top),"fixed"!==t.getComputedStyle(e).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,o){this.scrollLeft=t,this.scrollTop=o}function f(t){if(null===t||"object"!==typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"===typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function a(t,o){return"Y"===o?t.clientHeight+s<t.scrollHeight:"X"===o?t.clientWidth+s<t.scrollWidth:void 0}function p(o,e){var r=t.getComputedStyle(o,null)["overflow"+e];return"auto"===r||"scroll"===r}function u(t){var o=a(t,"Y")&&p(t,"Y"),e=a(t,"X")&&p(t,"X");return o||e}function d(o){var e,r,n,s,c=(i()-o.startTime)/l;s=c=c>1?1:c,e=.5*(1-Math.cos(Math.PI*s)),r=o.startX+(o.x-o.startX)*e,n=o.startY+(o.y-o.startY)*e,o.method.call(o.scrollable,r,n),r===o.x&&n===o.y||t.requestAnimationFrame(d.bind(t,o))}function h(e,r,l){var s,f,a,p,u=i();e===o.body?(s=t,f=t.scrollX||t.pageXOffset,a=t.scrollY||t.pageYOffset,p=n.scroll):(s=e,f=e.scrollLeft,a=e.scrollTop,p=c),d({scrollable:s,method:p,startTime:u,startX:f,startY:a,x:r,y:l})}}}}()}])},t.exports=r(e(2791))}}]);
//# sourceMappingURL=757.b9a342d6.chunk.js.map