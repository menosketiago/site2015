!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var i,n=t.HTMLElement||t.Element,o=468,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},s=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,a=(i=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(i)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?m.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;m.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var i=f(this),n=i.getBoundingClientRect(),o=this.getBoundingClientRect();i!==e.body?(m.call(this,i,i.scrollLeft+o.left-n.left,i.scrollTop+o.top-n.top),"fixed"!==t.getComputedStyle(i).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(t,e){return"Y"===e?t.clientHeight+a<t.scrollHeight:"X"===e?t.clientWidth+a<t.scrollWidth:void 0}function d(e,i){var n=t.getComputedStyle(e,null)["overflow"+i];return"auto"===n||"scroll"===n}function h(t){var e=u(t,"Y")&&d(t,"Y"),i=u(t,"X")&&d(t,"X");return e||i}function f(t){for(;t!==e.body&&!1===h(t);)t=t.parentNode||t.host;return t}function p(e){var i,n,r,a,l=(s()-e.startTime)/o;a=l=l>1?1:l,i=.5*(1-Math.cos(Math.PI*a)),n=e.startX+(e.x-e.startX)*i,r=e.startY+(e.y-e.startY)*i,e.method.call(e.scrollable,n,r),n===e.x&&r===e.y||t.requestAnimationFrame(p.bind(t,e))}function m(i,n,o){var a,c,u,d,h=s();i===e.body?(a=t,c=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,d=r.scroll):(a=i,c=i.scrollLeft,u=i.scrollTop,d=l),p({scrollable:a,method:d,startTime:h,startX:c,startY:u,x:n,y:o})}}}}()},function(t,e,i){"use strict";i.r(e);self.fetch||(self.fetch=function(t,e){return e=e||{},new Promise((i,n)=>{const o=new XMLHttpRequest,r=[],s=[],a={},l=()=>({ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:()=>Promise.resolve(o.responseText),json:()=>Promise.resolve(JSON.parse(o.responseText)),blob:()=>Promise.resolve(new Blob([o.response])),clone:l,headers:{keys:()=>r,entries:()=>s,get:t=>a[t.toLowerCase()],has:t=>t.toLowerCase()in a}});o.open(e.method||"get",t,!0),o.onload=()=>{o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(t,e,i)=>{r.push(e=e.toLowerCase()),s.push([e,i]),a[e]=a[e]?`${a[e]},${i}`:i}),i(l())},o.onerror=n,o.withCredentials="include"==e.credentials;for(const t in e.headers)o.setRequestHeader(t,e.headers[t]);o.send(e.body||null)})});var n=i(0),o=i.n(n);function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={document:e}}var e,i,n;return e=t,(i=[{key:"init",value:function(){this.eventHandler()}},{key:"eventHandler",value:function(){document.addEventListener("keyup",(function(t){if("Tab"===t.key){var e=document.getElementsByClassName("has-focus");Array.from(e).forEach((function(t){t.classList.remove("has-focus")})),document.activeElement.classList.add("has-focus")}})),document.addEventListener("mousedown",(function(){var t=document.querySelector(".has-focus");null!=t&&t.classList.remove("has-focus")}))}}])&&r(e.prototype,i),n&&r(e,n),t}();function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={inputWrapper:e,input:e.querySelector("input, textarea")},this._state={hasValue:this.dom.input.value}}var e,i,n;return e=t,(i=[{key:"setState",value:function(t){this._state=Object.assign(this._state,t),this._updateDom()}},{key:"_updateDom",value:function(){this._state.hasValue?this.dom.input.classList.add("has-value"):this.dom.input.classList.remove("has-value")}},{key:"init",value:function(){this.eventHandler()}},{key:"eventHandler",value:function(){var t=this;this.dom.input.addEventListener("blur",(function(){t.checkValidity()})),this.dom.input.addEventListener("keyup",(function(){t.checkValue()}))}},{key:"checkValidity",value:function(){this.dom.input.validity.valid&&this.dom.input.classList.add("is-valid"),this.dom.input.validity.valid||this.dom.input.classList.add("is-invalid")}},{key:"checkValue",value:function(){this.dom.input.value?this.setState({hasValue:!0}):this.setState({hasValue:!1})}}])&&a(e.prototype,i),n&&a(e,n),t}();function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={modal:e,article:e.querySelector("article"),id:e.id},this.triggersArray=document.querySelectorAll("#work .item"),this.btnClose=document.getElementById("close-modal"),this._state={isVisible:this.dom.modal.classList.contains("is-visible")}}var e,i,n;return e=t,(i=[{key:"setState",value:function(t){this._state=Object.assign(this._state,t),this._updateDom()}},{key:"_updateDom",value:function(){this._state.isVisible?(this.dom.modal.classList.add("is-open"),this.dom.article.focus(),this.dom.article.classList.add("is-loading")):(this.dom.modal.classList.remove("is-open"),this.dom.article.blur(),this.dom.article.innerHTML="",this.dom.modal.classList.remove("dark-mode"),this.dom.modal.classList.remove("gold"),this.dom.modal.classList.remove("alien"))}},{key:"init",value:function(){this.eventHandler()}},{key:"eventHandler",value:function(){var t=this;document.addEventListener("click",(function(e){Array.from(t.triggersArray).forEach((function(i){e.target===i&&(t.show(),t.fetchContent(i))})),e.target===t.dom.modal&&t.hide(),e.target===t.btnClose&&t.hide()})),document.addEventListener("keyup",(function(e){"Escape"===e.key&&t.hide(),Array.from(t.triggersArray).forEach((function(i){e.target===i&&"Enter"===e.key&&t.show()}))}))}},{key:"show",value:function(){this.setState({isVisible:!0})}},{key:"hide",value:function(){this.setState({isVisible:!1})}},{key:"fetchContent",value:function(t){t.hasAttribute("data-dark")&&this.dom.modal.classList.add("dark-mode"),t.classList.contains("gold")&&this.dom.modal.classList.add("gold"),t.classList.contains("alien")&&this.dom.modal.classList.add("alien"),fetch("./work/"+t.id+".html").then((function(t){200===t.status?t.text().then((function(t){var e=document.getElementById("content-wrapper");e.classList.add("is-fading"),setTimeout((function(){e.classList.remove("is-fading"),e.classList.remove("is-loading"),e.innerHTML=t,window.initComponents()}),200)})):console.log("Looks like there was a problem. Status Code: "+t.status)})).catch((function(t){console.log("Fetch Error :-S",t)}))}}])&&c(e.prototype,i),n&&c(e,n),t}();function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={main:e,section:e.querySelector("#work")},this.sectionsArray=this.dom.main.querySelectorAll("main > section"),location.hash?this.initialSection=this.dom.main.querySelector(location.hash):this.initialSection=this.sectionsArray[0],this.targetSection="",this.logo=document.querySelector("header .logo"),this.links=document.querySelectorAll("nav a"),this.currentlyViewing=document.querySelector(".current-section h4"),this.btnUp=this.dom.main.querySelector(".scroll.up"),this.btnDown=this.dom.main.querySelector(".scroll.down"),this.btnTop=this.dom.main.querySelector(".scroll.top"),this.wrappersArray=this.dom.main.querySelectorAll("#work .wrapper"),this.initialWrapper=this.dom.main.querySelector("#work .wrapper"),this.targetWrapper="",this.btnRight=this.dom.main.querySelector(".scroll.right"),this.btnLeft=this.dom.main.querySelector(".scroll.left"),this._state={currentSection:this.initialSection,currentWrapper:this.initialWrapper}}var e,i,n;return e=t,(i=[{key:"setState",value:function(t){var e=this;this._state=Object.assign(this._state,t),setTimeout((function(){return e._updateDom()}),0)}},{key:"_updateDom",value:function(){this._state.currentSection.scrollIntoView({behavior:"smooth"}),this.currentlyViewing.textContent=this._state.currentSection.id,history.replaceState({},"","#"+this._state.currentSection.id)}},{key:"init",value:function(){this.eventHandler()}},{key:"eventHandler",value:function(){var t=this;document.addEventListener("click",(function(e){e.target===t.logo&&(e.preventDefault(),t.targetSection=t.sectionsArray[0],t.changeSection(t.targetSection)),Array.from(t.links).forEach((function(i){if(e.target===i){e.preventDefault();var n=e.target.href.split("#")[1];t.targetSection=t.dom.main.querySelector("#"+n),t.changeSection(t.targetSection)}})),e.target===t.btnUp&&(t.targetSection=t._state.currentSection.previousElementSibling,t.changeSection(t.targetSection)),e.target===t.btnDown&&(t.targetSection=t._state.currentSection.nextElementSibling,t.changeSection(t.targetSection)),e.target===t.btnTop&&t.changeSection(t.sectionsArray[0]),e.target===t.btnRight&&(t.targetWrapper=t._state.currentWrapper.nextElementSibling,t.changeWrapper(t.targetWrapper)),e.target===t.btnLeft&&(t.targetWrapper=t._state.currentWrapper.previousElementSibling,t.changeWrapper(t.targetWrapper))})),document.addEventListener("keydown",(function(e){"ArrowUp"!==e.key&&"ArrowRight"!==e.key&&"ArrowLeft"!==e.key&&"ArrowDown"!==e.key||e.preventDefault(),("ArrowUp"===e.key&&t._state.currentSection!==t.sectionsArray[0]||"w"===e.key&&t._state.currentSection!==t.sectionsArray[0])&&(t.targetSection=t._state.currentSection.previousElementSibling,t.changeSection(t.targetSection)),("ArrowDown"===e.key&&t._state.currentSection!==t.sectionsArray[t.sectionsArray.length-1]||"s"===e.key&&t._state.currentSection!==t.sectionsArray[t.sectionsArray.length-1])&&(t.targetSection=t._state.currentSection.nextElementSibling,t.changeSection(t.targetSection)),"work"===t._state.currentSection.id&&((t._state.currentWrapper!==t.wrappersArray[t.wrappersArray.length-1]&&"ArrowRight"===e.key||t._state.currentWrapper!==t.wrappersArray[t.wrappersArray.length-1]&&"d"===e.key)&&(t.targetWrapper=t._state.currentWrapper.nextElementSibling,t.changeWrapper(t.targetWrapper)),(t._state.currentWrapper!==t.wrappersArray[0]&&"ArrowLeft"===e.key||t._state.currentWrapper!==t.wrappersArray[0]&&"a"===e.key)&&(t.targetWrapper=t._state.currentWrapper.previousElementSibling,t.changeWrapper(t.targetWrapper)))})),this.dom.main.addEventListener("scroll",(function(){return t.checkVisibleSection()}))}},{key:"changeSection",value:function(t){this.setState({currentSection:t})}},{key:"changeWrapper",value:function(t){var e=this;this.setState({currentWrapper:t}),setTimeout((function(){var t=e._state.currentWrapper.getBoundingClientRect().left;e.dom.section.scrollTo({left:t,behavior:"smooth"})}),0),this.setButtonVisibility()}},{key:"setCurrentLink",value:function(){var t=this;Array.from(this.links).forEach((function(e){e.classList.remove("is-current"),e.tabIndex=0,e.href.split("#")[1]===t._state.currentSection.id&&(e.classList.add("is-current"),e.tabIndex=-1)}))}},{key:"setButtonVisibility",value:function(){this._state.currentSection===this.sectionsArray[0]?this.btnUp.classList.add("is-hidden"):this.btnUp.classList.remove("is-hidden"),this._state.currentSection===this.sectionsArray[this.sectionsArray.length-1]?(this.btnDown.classList.add("is-hidden"),this.btnTop.classList.remove("is-hidden")):(this.btnDown.classList.remove("is-hidden"),this.btnTop.classList.add("is-hidden")),"about"===this._state.currentSection.id?(this.btnUp.classList.add("on-yellow"),this.btnDown.classList.add("on-yellow")):(this.btnUp.classList.remove("on-yellow"),this.btnDown.classList.remove("on-yellow")),"work"===this._state.currentSection.id?(this.btnRight.classList.remove("is-hidden"),this._state.currentWrapper!==this.wrappersArray[0]&&this.btnLeft.classList.remove("is-hidden"),this._state.currentWrapper===this.wrappersArray[0]&&this.btnLeft.classList.add("is-hidden"),this._state.currentWrapper===this.wrappersArray[this.wrappersArray.length-1]&&this.btnRight.classList.add("is-hidden")):(this.btnRight.classList.add("is-hidden"),this.btnLeft.classList.add("is-hidden"))}},{key:"checkVisibleSection",value:function(){var t=this,e=this.dom.main.getBoundingClientRect().top;Array.from(this.sectionsArray).forEach((function(i){var n=i.getBoundingClientRect().top;e===n&&t.changeSection(i)}))}}])&&d(e.prototype,i),n&&d(e,n),t}();function f(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={trigger:e,content:e.getAttribute("data-tooltip")||!1},this.tooltip=document.querySelector(".tooltip"),this.main=document.querySelector("main"),this._state={isVisible:this.tooltip.classList.contains("is-visible")}}var e,i,n;return e=t,(i=[{key:"setState",value:function(t){this._state=Object.assign(this._state,t),this._updateDom()}},{key:"_updateDom",value:function(){this._state.isVisible?this.tooltip.classList.add("is-visible"):(this.tooltip.classList.remove("is-visible"),this.tooltip.removeAttribute("style"))}},{key:"init",value:function(){this.dom.content&&this.eventHandler()}},{key:"eventHandler",value:function(){var t=this;this.dom.trigger.addEventListener("mouseover",(function(e){return t.setTooltipContent()})),this.dom.trigger.addEventListener("mouseout",(function(){return t.hide()})),window.addEventListener("scroll",(function(){return t.hide()}),!0)}},{key:"setTooltipContent",value:function(){this.tooltip.innerHTML=this.dom.content,this.positionTooltip()}},{key:"positionTooltip",value:function(){var t,e,i,n,o;t=this.dom.trigger,e=this.tooltip,(i=this.dom.trigger.getBoundingClientRect()).top,e.offsetHeight,i.left,e.offsetWidth,window.innerWidth,i.left,e.offsetWidth,n=parseInt(i.bottom)-t.offsetHeight-e.offsetHeight-8,o=parseInt(i.left)+t.offsetWidth/2-e.offsetWidth/2,e.style.top=n+pageYOffset+"px",e.style.left=o+pageXOffset+"px",this.show()}},{key:"show",value:function(){this.setState({isVisible:!0})}},{key:"hide",value:function(){this.setState({isVisible:!1}),this.tooltip.innerHTML=""}}])&&f(e.prototype,i),n&&f(e,n),t}();function m(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={year:e}}var e,i,n;return e=t,(i=[{key:"init",value:function(){this.setCurrentYear()}},{key:"setCurrentYear",value:function(){var t=(new Date).getFullYear();this.dom.year.innerHTML=t}}])&&m(e.prototype,i),n&&m(e,n),t}();window.menos={Focus:s,Input:l,Modal:u,Navigator:h,Tooltip:p,Year:v};o.a.polyfill(),window.initComponents=function(){new s(document).init();var t=document.querySelectorAll(".input");t&&Array.from(t).forEach((function(t){new l(t).init()}));var e=document.getElementsByClassName("modal");e&&Array.from(e).forEach((function(t){new u(t).init()}));var i=document.querySelector("main");i&&new h(i).init();var n=document.querySelectorAll("[data-tooltip]");n&&Array.from(n).forEach((function(t){new p(t).init()}));var o=document.querySelectorAll("[data-year]");o&&Array.from(o).forEach((function(t){new v(t).init()}))},window.addEventListener("load",(function(){window.initComponents()}))}]);