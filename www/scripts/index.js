!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={document:e}}var e,n,i;return e=t,(n=[{key:"init",value:function(){this.eventHandler()}},{key:"eventHandler",value:function(){document.addEventListener("keyup",(function(t){if("Tab"===t.key){var e=document.getElementsByClassName("has-focus");Array.from(e).forEach((function(t){t.classList.remove("has-focus")})),document.activeElement.classList.add("has-focus")}})),document.addEventListener("mousedown",(function(){var t=document.querySelector(".has-focus");null!=t&&t.classList.remove("has-focus")}))}}])&&r(e.prototype,n),i&&r(e,i),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={modal:e,article:e.querySelector("article"),id:e.id},this.triggersArray=document.querySelectorAll("#work .item"),this.btnClose=document.querySelector("#close-modal"),this.btnRight=document.querySelector(".scroll.right"),this._state={isVisible:this.dom.modal.classList.contains("is-visible")}}var e,n,r;return e=t,(n=[{key:"init",value:function(){this.eventHandler()}},{key:"setState",value:function(t){this._state=Object.assign(this._state,t),this._updateDom()}},{key:"_updateDom",value:function(){this._state.isVisible?(this.dom.modal.classList.add("is-open"),this.dom.article.focus()):(this.dom.modal.classList.remove("is-open"),this.dom.article.blur())}},{key:"eventHandler",value:function(){var t=this;document.addEventListener("click",(function(e){Array.from(t.triggersArray).forEach((function(n){e.target===n&&t.show()})),e.target===t.dom.modal&&t.hide(),e.target===t.btnClose&&t.hide()})),document.addEventListener("keyup",(function(e){"Escape"===e.key&&t.hide(),Array.from(t.triggersArray).forEach((function(n){e.target===n&&"Enter"===e.key&&t.show()}))}))}},{key:"show",value:function(){this.setState({isVisible:!0}),this.btnRight.classList.add("is-hidden")}},{key:"hide",value:function(){this.setState({isVisible:!1}),this.btnRight.classList.remove("is-hidden")}},{key:"fetchContent",value:function(){}}])&&a(e.prototype,n),r&&a(e,r),t}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={main:e},this.sectionsArray=this.dom.main.querySelectorAll("section"),this.initialSection=this.dom.main.querySelector(location.hash),this.targetSection=void 0,this.logo=document.querySelector("header .logo"),this.links=document.querySelectorAll("nav a"),this.currentlyViewing=document.querySelector(".current-section h4"),this.btnUp=this.dom.main.querySelector(".scroll.up"),this.btnDown=this.dom.main.querySelector(".scroll.down"),this.btnTop=this.dom.main.querySelector(".scroll.top"),this.wrappersArray=this.dom.main.querySelectorAll("#work .wrapper"),this.initialWrapper=this.dom.main.querySelector("#work .wrapper"),this.targetWrapper=void 0,this.btnRight=this.dom.main.querySelector(".scroll.right"),this.btnLeft=this.dom.main.querySelector(".scroll.left"),this._state={currentSection:this.initialSection,currentWrapper:this.initialWrapper}}var e,n,r;return e=t,(n=[{key:"init",value:function(){this.checkVisibleSection(),this.eventHandler()}},{key:"setState",value:function(t){this._state=Object.assign(this._state,t),this._updateDom()}},{key:"_updateDom",value:function(){this._state.currentSection.scrollIntoView({behavior:"smooth"}),history.replaceState({},"","#"+this._state.currentSection.id),this.currentlyViewing.textContent=this._state.currentSection.id}},{key:"eventHandler",value:function(){var t=this;window.addEventListener("load",(function(){t.setButtonVisibility()})),this.logo.addEventListener("click",(function(e){e.preventDefault(),t.targetSection=t.dom.main.querySelector("#home"),t.changeSection(t.targetSection)})),Array.from(this.links).forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=e.target.href.split("#")[1];t.targetSection=t.dom.main.querySelector("section#"+n),t.changeSection(t.targetSection)}))})),this.btnUp.addEventListener("click",(function(){t.targetSection=t._state.currentSection.previousElementSibling,t.changeSection(t.targetSection)})),this.btnDown.addEventListener("click",(function(){t.targetSection=t._state.currentSection.nextElementSibling,t.changeSection(t.targetSection)})),this.btnTop.addEventListener("click",(function(){t.changeSection(t.initialSection)})),this.btnRight.addEventListener("click",(function(){t.targetWrapper=t._state.currentWrapper.nextElementSibling,t.changeWrapper(t.targetWrapper)})),this.btnLeft.addEventListener("click",(function(){t.targetWrapper=t._state.currentWrapper.previousElementSibling,t.changeWrapper(t.targetWrapper)})),document.addEventListener("keydown",(function(e){"ArrowUp"!==e.key&&"ArrowRight"!==e.key&&"ArrowLeft"!==e.key&&"ArrowDown"!==e.key||e.preventDefault(),("ArrowUp"===e.key&&t._state.currentSection!==t.sectionsArray[0]||"w"===e.key&&t._state.currentSection!==t.sectionsArray[0])&&(t.targetSection=t._state.currentSection.previousElementSibling,t.changeSection(t.targetSection)),("ArrowDown"===e.key&&t._state.currentSection!==t.sectionsArray[t.sectionsArray.length-1]||"s"===e.key&&t._state.currentSection!==t.sectionsArray[t.sectionsArray.length-1])&&(t.targetSection=t._state.currentSection.nextElementSibling,t.changeSection(t.targetSection)),"work"===t._state.currentSection.id&&((t._state.currentWrapper!==t.wrappersArray[t.wrappersArray.length-1]&&"ArrowRight"===e.key||t._state.currentWrapper!==t.wrappersArray[t.wrappersArray.length-1]&&"d"===e.key)&&(t.targetWrapper=t._state.currentWrapper.nextElementSibling,t.changeWrapper(t.targetWrapper)),(t._state.currentWrapper!==t.wrappersArray[0]&&"ArrowLeft"===e.key||t._state.currentWrapper!==t.wrappersArray[0]&&"a"===e.key)&&(t.targetWrapper=t._state.currentWrapper.previousElementSibling,t.changeWrapper(t.targetWrapper)))})),this.dom.main.addEventListener("scroll",(function(){return t.checkVisibleSection()}))}},{key:"changeSection",value:function(t){this.setState({currentSection:t}),this.setCurrentLink(),this.setButtonVisibility()}},{key:"changeWrapper",value:function(t){this.setState({currentWrapper:t}),this._state.currentWrapper.scrollIntoView({behavior:"smooth"}),this.setButtonVisibility()}},{key:"setCurrentLink",value:function(){var t=this;Array.from(this.links).forEach((function(e){e.classList.remove("is-current"),e.tabIndex=0,e.href.split("#")[1]===t._state.currentSection.id&&(e.classList.add("is-current"),e.tabIndex=-1)}))}},{key:"setButtonVisibility",value:function(){this._state.currentSection===this.sectionsArray[0]?(this.btnUp.classList.add("is-hidden"),this.btnUp.tabIndex=-1):(this.btnUp.classList.remove("is-hidden"),this.btnUp.tabIndex=0),this._state.currentSection===this.sectionsArray[this.sectionsArray.length-1]?(this.btnDown.classList.add("is-hidden"),this.btnDown.tabIndex=-1,this.btnTop.classList.remove("is-hidden"),this.btnTop.tabIndex=0):(this.btnDown.classList.remove("is-hidden"),this.btnTop.classList.add("is-hidden"),this.btnTop.tabIndex=-1),"about"===this._state.currentSection.id?(this.btnUp.classList.add("on-yellow"),this.btnDown.classList.add("on-yellow")):(this.btnUp.classList.remove("on-yellow"),this.btnDown.classList.remove("on-yellow")),"work"===this._state.currentSection.id?(this.btnRight.classList.remove("is-hidden"),this.btnRight.tabIndex=0,this._state.currentWrapper!==this.wrappersArray[0]&&(this.btnLeft.classList.remove("is-hidden"),this.btnLeft.tabIndex=0),this._state.currentWrapper===this.wrappersArray[0]&&(this.btnLeft.classList.add("is-hidden"),this.btnLeft.tabIndex=-1),this._state.currentWrapper===this.wrappersArray[this.wrappersArray.length-1]&&(this.btnRight.classList.add("is-hidden"),this.btnRight.tabIndex=-1)):(this.btnRight.classList.add("is-hidden"),this.btnRight.tabIndex=-1,this.btnLeft.classList.add("is-hidden"),this.btnLeft.tabIndex=-1)}},{key:"checkVisibleSection",value:function(){var t=this,e=this.dom.main.getBoundingClientRect().top;Array.from(this.sectionsArray).forEach((function(n){var r=n.getBoundingClientRect().top;e===r&&t.changeSection(n)}))}}])&&o(e.prototype,n),r&&o(e,r),t}();function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={year:e}}var e,n,r;return e=t,(n=[{key:"init",value:function(){this.setCurrentYear()}},{key:"setCurrentYear",value:function(){var t=(new Date).getFullYear();this.dom.year.innerHTML=t}}])&&l(e.prototype,n),r&&l(e,r),t}();window.tiago={Focus:i,Modal:s,Navigator:c,Year:u};window.onload=function(){new i(document).init();var t=document.querySelectorAll("[data-year]");t&&Array.from(t).forEach((function(t){new u(t).init()}));var e=document.getElementsByClassName("modal");e&&Array.from(e).forEach((function(t){new s(t).init()}));var n=document.querySelector("main");new c(n).init()}}]);