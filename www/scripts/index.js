!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}self.fetch||(self.fetch=function(t,e){return e=e||{},new Promise((n,i)=>{const r=new XMLHttpRequest,o=[],s=[],a={},c=()=>({ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:()=>Promise.resolve(r.responseText),json:()=>Promise.resolve(JSON.parse(r.responseText)),blob:()=>Promise.resolve(new Blob([r.response])),clone:c,headers:{keys:()=>o,entries:()=>s,get:t=>a[t.toLowerCase()],has:t=>t.toLowerCase()in a}});r.open(e.method||"get",t,!0),r.onload=()=>{r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(t,e,n)=>{o.push(e=e.toLowerCase()),s.push([e,n]),a[e]=a[e]?`${a[e]},${n}`:n}),n(c())},r.onerror=i,r.withCredentials="include"==e.credentials;for(const t in e.headers)r.setRequestHeader(t,e.headers[t]);r.send(e.body||null)})});var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={document:e}}var e,n,r;return e=t,(n=[{key:"init",value:function(){this.eventHandler()}},{key:"eventHandler",value:function(){document.addEventListener("keyup",(function(t){if("Tab"===t.key){var e=document.getElementsByClassName("has-focus");Array.from(e).forEach((function(t){t.classList.remove("has-focus")})),document.activeElement.classList.add("has-focus")}})),document.addEventListener("mousedown",(function(){var t=document.querySelector(".has-focus");null!=t&&t.classList.remove("has-focus")}))}}])&&i(e.prototype,n),r&&i(e,r),t}();function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={modal:e,article:e.querySelector("article"),id:e.id},this.triggersArray=document.querySelectorAll("#work .item"),this.btnClose=document.getElementById("close-modal"),this._state={isVisible:this.dom.modal.classList.contains("is-visible")}}var e,n,i;return e=t,(n=[{key:"setState",value:function(t){this._state=Object.assign(this._state,t),this._updateDom()}},{key:"_updateDom",value:function(){this._state.isVisible?(this.dom.modal.classList.add("is-open"),this.dom.article.focus(),this.dom.article.classList.add("is-loading")):(this.dom.modal.classList.remove("is-open"),this.dom.article.blur(),this.dom.article.innerHTML="",this.dom.modal.classList.remove("dark-mode"))}},{key:"init",value:function(){this.eventHandler()}},{key:"eventHandler",value:function(){var t=this;document.addEventListener("click",(function(e){Array.from(t.triggersArray).forEach((function(n){e.target===n&&(t.show(),t.fetchContent(n))})),e.target===t.dom.modal&&t.hide(),e.target===t.btnClose&&t.hide()})),document.addEventListener("keyup",(function(e){"Escape"===e.key&&t.hide(),Array.from(t.triggersArray).forEach((function(n){e.target===n&&"Enter"===e.key&&t.show()}))}))}},{key:"show",value:function(){this.setState({isVisible:!0})}},{key:"hide",value:function(){this.setState({isVisible:!1})}},{key:"fetchContent",value:function(t){t.hasAttribute("data-dark")&&this.dom.modal.classList.add("dark-mode"),fetch("./work/"+t.id+".html").then((function(t){200===t.status?t.text().then((function(t){var e=document.getElementById("content-wrapper");e.classList.add("is-fading"),setTimeout((function(){e.classList.remove("is-fading"),e.classList.remove("is-loading"),e.innerHTML=t,window.initComponents()}),200)})):console.log("Looks like there was a problem. Status Code: "+t.status)})).catch((function(t){console.log("Fetch Error :-S",t)}))}}])&&o(e.prototype,n),i&&o(e,i),t}();function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={main:e},this.sectionsArray=this.dom.main.querySelectorAll("section"),location.hash?this.initialSection=this.dom.main.querySelector(location.hash):this.initialSection=this.sectionsArray[0],this.targetSection="",this.logo=document.querySelector("header .logo"),this.links=document.querySelectorAll("nav a"),this.currentlyViewing=document.querySelector(".current-section h4"),this.btnUp=this.dom.main.querySelector(".scroll.up"),this.btnDown=this.dom.main.querySelector(".scroll.down"),this.btnTop=this.dom.main.querySelector(".scroll.top"),this.wrappersArray=this.dom.main.querySelectorAll("#work .wrapper"),this.initialWrapper=this.dom.main.querySelector("#work .wrapper"),this.targetWrapper="",this.btnRight=this.dom.main.querySelector(".scroll.right"),this.btnLeft=this.dom.main.querySelector(".scroll.left"),this._state={currentSection:this.initialSection,currentWrapper:this.initialWrapper}}var e,n,i;return e=t,(n=[{key:"setState",value:function(t){this._state=Object.assign(this._state,t),this._updateDom()}},{key:"_updateDom",value:function(){var t=this;history.replaceState({},"","#"+this._state.currentSection.id),this.currentlyViewing.textContent=this._state.currentSection.id,1==performance.navigation.type?setTimeout((function(){t._state.currentSection.scrollIntoView({behavior:"smooth"})}),0):this._state.currentSection.scrollIntoView({behavior:"smooth"})}},{key:"init",value:function(){this.changeSection(this._state.currentSection),this.eventHandler()}},{key:"eventHandler",value:function(){var t=this;document.addEventListener("click",(function(e){e.target===t.logo&&(e.preventDefault(),t.targetSection=t.dom.main.querySelector("#home"),t.changeSection(t.targetSection)),Array.from(t.links).forEach((function(n){if(e.target===n){e.preventDefault();var i=e.target.href.split("#")[1];t.targetSection=t.dom.main.querySelector("section#"+i),t.changeSection(t.targetSection)}})),e.target===t.btnUp&&(t.targetSection=t._state.currentSection.previousElementSibling,t.changeSection(t.targetSection)),e.target===t.btnDown&&(t.targetSection=t._state.currentSection.nextElementSibling,t.changeSection(t.targetSection)),e.target===t.btnTop&&t.changeSection(t.initialSection),e.target===t.btnRight&&(t.targetWrapper=t._state.currentWrapper.nextElementSibling,t.changeWrapper(t.targetWrapper)),e.target===t.btnLeft&&(t.targetWrapper=t._state.currentWrapper.previousElementSibling,t.changeWrapper(t.targetWrapper))})),document.addEventListener("keydown",(function(e){"ArrowUp"!==e.key&&"ArrowRight"!==e.key&&"ArrowLeft"!==e.key&&"ArrowDown"!==e.key||e.preventDefault(),("ArrowUp"===e.key&&t._state.currentSection!==t.sectionsArray[0]||"w"===e.key&&t._state.currentSection!==t.sectionsArray[0])&&(t.targetSection=t._state.currentSection.previousElementSibling,t.changeSection(t.targetSection)),("ArrowDown"===e.key&&t._state.currentSection!==t.sectionsArray[t.sectionsArray.length-1]||"s"===e.key&&t._state.currentSection!==t.sectionsArray[t.sectionsArray.length-1])&&(t.targetSection=t._state.currentSection.nextElementSibling,t.changeSection(t.targetSection)),"work"===t._state.currentSection.id&&((t._state.currentWrapper!==t.wrappersArray[t.wrappersArray.length-1]&&"ArrowRight"===e.key||t._state.currentWrapper!==t.wrappersArray[t.wrappersArray.length-1]&&"d"===e.key)&&(t.targetWrapper=t._state.currentWrapper.nextElementSibling,t.changeWrapper(t.targetWrapper)),(t._state.currentWrapper!==t.wrappersArray[0]&&"ArrowLeft"===e.key||t._state.currentWrapper!==t.wrappersArray[0]&&"a"===e.key)&&(t.targetWrapper=t._state.currentWrapper.previousElementSibling,t.changeWrapper(t.targetWrapper)))})),this.dom.main.addEventListener("scroll",(function(){return t.checkVisibleSection()}))}},{key:"changeSection",value:function(t){this.setState({currentSection:t}),this.setCurrentLink(),this.setButtonVisibility()}},{key:"changeWrapper",value:function(t){this.setState({currentWrapper:t}),this._state.currentWrapper.scrollIntoView({behavior:"smooth"}),this.setButtonVisibility()}},{key:"setCurrentLink",value:function(){var t=this;Array.from(this.links).forEach((function(e){e.classList.remove("is-current"),e.tabIndex=0,e.href.split("#")[1]===t._state.currentSection.id&&(e.classList.add("is-current"),e.tabIndex=-1)}))}},{key:"setButtonVisibility",value:function(){this._state.currentSection===this.sectionsArray[0]?(this.btnUp.classList.add("is-hidden"),this.btnUp.tabIndex=-1):(this.btnUp.classList.remove("is-hidden"),this.btnUp.tabIndex=0),this._state.currentSection===this.sectionsArray[this.sectionsArray.length-1]?(this.btnDown.classList.add("is-hidden"),this.btnDown.tabIndex=-1,this.btnTop.classList.remove("is-hidden"),this.btnTop.tabIndex=0):(this.btnDown.classList.remove("is-hidden"),this.btnTop.classList.add("is-hidden"),this.btnTop.tabIndex=-1),"about"===this._state.currentSection.id?(this.btnUp.classList.add("on-yellow"),this.btnDown.classList.add("on-yellow")):(this.btnUp.classList.remove("on-yellow"),this.btnDown.classList.remove("on-yellow")),"work"===this._state.currentSection.id?(this.btnRight.classList.remove("is-hidden"),this.btnRight.tabIndex=0,this._state.currentWrapper!==this.wrappersArray[0]&&(this.btnLeft.classList.remove("is-hidden"),this.btnLeft.tabIndex=0),this._state.currentWrapper===this.wrappersArray[0]&&(this.btnLeft.classList.add("is-hidden"),this.btnLeft.tabIndex=-1),this._state.currentWrapper===this.wrappersArray[this.wrappersArray.length-1]&&(this.btnRight.classList.add("is-hidden"),this.btnRight.tabIndex=-1)):(this.btnRight.classList.add("is-hidden"),this.btnRight.tabIndex=-1,this.btnLeft.classList.add("is-hidden"),this.btnLeft.tabIndex=-1)}},{key:"checkVisibleSection",value:function(){var t=this,e=this.dom.main.getBoundingClientRect().top;Array.from(this.sectionsArray).forEach((function(n){var i=n.getBoundingClientRect().top;e===i&&t.changeSection(n)}))}}])&&a(e.prototype,n),i&&a(e,i),t}();function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={trigger:e,content:e.getAttribute("data-tooltip")||!1},this.tooltip=document.querySelector(".tooltip"),this.main=document.querySelector("main"),this._state={isVisible:this.tooltip.classList.contains("is-visible")}}var e,n,i;return e=t,(n=[{key:"setState",value:function(t){this._state=Object.assign(this._state,t),this._updateDom()}},{key:"_updateDom",value:function(){this._state.isVisible?this.tooltip.classList.add("is-visible"):(this.tooltip.classList.remove("is-visible"),this.tooltip.removeAttribute("style"))}},{key:"init",value:function(){this.dom.content&&this.eventHandler()}},{key:"eventHandler",value:function(){var t=this;this.dom.trigger.addEventListener("mouseover",(function(e){return t.setTooltipContent()})),this.dom.trigger.addEventListener("mouseout",(function(){return t.hide()})),window.addEventListener("scroll",(function(){return t.hide()}),!0)}},{key:"setTooltipContent",value:function(){this.tooltip.innerHTML=this.dom.content,this.positionTooltip()}},{key:"positionTooltip",value:function(){var t,e,n,i,r;t=this.dom.trigger,e=this.tooltip,(n=this.dom.trigger.getBoundingClientRect()).top,e.offsetHeight,n.left,e.offsetWidth,window.innerWidth,n.left,e.offsetWidth,i=parseInt(n.bottom)-t.offsetHeight-e.offsetHeight-8,r=parseInt(n.left)+t.offsetWidth/2-e.offsetWidth/2,e.style.top=i+pageYOffset+"px",e.style.left=r+pageXOffset+"px",this.show()}},{key:"show",value:function(){this.setState({isVisible:!0})}},{key:"hide",value:function(){this.setState({isVisible:!1}),this.tooltip.innerHTML=""}}])&&l(e.prototype,n),i&&l(e,i),t}();function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={year:e}}var e,n,i;return e=t,(n=[{key:"init",value:function(){this.setCurrentYear()}},{key:"setCurrentYear",value:function(){var t=(new Date).getFullYear();this.dom.year.innerHTML=t}}])&&h(e.prototype,n),i&&h(e,i),t}();window.menos={Focus:r,Modal:s,Navigator:c,Tooltip:u,Year:d};window.initComponents=function(){new r(document).init();var t=document.querySelectorAll("[data-year]");t&&Array.from(t).forEach((function(t){new d(t).init()}));var e=document.getElementsByClassName("modal");e&&Array.from(e).forEach((function(t){new s(t).init()}));var n=document.querySelector("main");n&&new c(n).init();var i=document.querySelectorAll("[data-tooltip]");i&&Array.from(i).forEach((function(t){new u(t).init()}))},window.addEventListener("load",(function(){window.initComponents()}))}]);