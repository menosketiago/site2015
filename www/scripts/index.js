!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={modal:e,id:e.id},this.triggers=document.querySelectorAll('[data-trigger="'.concat(this.dom.id,'"]')),this._state={isVisible:this.dom.modal.classList.contains("is-visible")},this.events={closeModalEvent:new CustomEvent("closeModal",{detail:{id:this.id}}),showModalEvent:new CustomEvent("showModal",{detail:{id:this.id}})}}var e,n,o;return e=t,(n=[{key:"init",value:function(){this.eventHandler(),this.fetchContent()}},{key:"setState",value:function(t){this._state=Object.assign(this._state,t),this._updateDom()}},{key:"_updateDom",value:function(){this._state.isVisible?(this.dom.modal.classList.add("is-visible"),this.dom.modal.dispatchEvent(this.events.showModalEvent)):(this.dom.modal.classList.remove("is-visible"),this.dom.modal.dispatchEvent(this.events.closeModalEvent))}},{key:"eventHandler",value:function(){}},{key:"show",value:function(){var t=this;this.setState({isVisible:!0}),document.addEventListener("keyup",(function(e){"Escape"===e.code&&t.hide()}),{once:!0})}},{key:"hide",value:function(){this.setState({isVisible:!1})}},{key:"fetchContent",value:function(){}}])&&i(e.prototype,n),o&&i(e,o),t}();function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={main:e},this.initialSection=this.dom.main.querySelector("section"),this.targetSection=void 0,this.sectionsArray=this.dom.main.querySelectorAll("section"),this.links=document.querySelectorAll("nav a"),this.sectionHeader=document.querySelector(".current-section h4"),this.btnUp=this.dom.main.querySelector(".scroll.up"),this.btnDown=this.dom.main.querySelector(".scroll.down"),this.btnTop=this.dom.main.querySelector(".scroll.top"),this.btnRight=this.dom.main.querySelector(".scroll.right"),this._state={currentSection:this.initialSection}}var e,n,i;return e=t,(n=[{key:"init",value:function(){this.eventHandler()}},{key:"setState",value:function(t){this._state=Object.assign(this._state,t),this._updateDom()}},{key:"_updateDom",value:function(){location.hash="#"+this._state.currentSection.id,this.sectionHeader.textContent=this._state.currentSection.id}},{key:"eventHandler",value:function(){var t=this;window.addEventListener("load",(function(){t.setButtonVisibility()})),Array.from(this.links).forEach((function(e){e.addEventListener("click",(function(e){var n=e.target.href.split("#")[1];t.targetSection=t.dom.main.querySelector("section#"+n),t.navigate(t.targetSection)}))})),this.btnUp.addEventListener("click",(function(){t.targetSection=t._state.currentSection.previousElementSibling,t.navigate(t.targetSection)})),this.btnDown.addEventListener("click",(function(){t.targetSection=t._state.currentSection.nextElementSibling,t.navigate(t.targetSection)})),this.btnTop.addEventListener("click",(function(){t.navigate(t.initialSection)})),document.addEventListener("keydown",(function(e){"ArrowUp"!==e.code&&"ArrowRight"!==e.code&&"ArrowLeft"!==e.code&&"ArrowDown"!==e.code||e.preventDefault(),("ArrowUp"===e.code&&t._state.currentSection!==t.sectionsArray[0]||"KeyW"===e.code&&t._state.currentSection!==t.sectionsArray[0])&&(t.targetSection=t._state.currentSection.previousElementSibling,t.navigate(t.targetSection)),("ArrowDown"===e.code&&t._state.currentSection!==t.sectionsArray[t.sectionsArray.length-1]||"KeyS"===e.code&&t._state.currentSection!==t.sectionsArray[t.sectionsArray.length-1])&&(t.targetSection=t._state.currentSection.nextElementSibling,t.navigate(t.targetSection)),"work"===t._state.currentSection.id&&("ArrowLeft"===e.code||e.code,"ArrowRight"===e.code||e.code)})),this.dom.main.addEventListener("scroll",(function(){return t.checkVisibleSection()}))}},{key:"navigate",value:function(t){this.setState({currentSection:t}),this.setCurrentLink(),this.setButtonVisibility()}},{key:"setCurrentLink",value:function(){var t=this;Array.from(this.links).forEach((function(e){e.classList.remove("is-current"),e.href.split("#")[1]===t._state.currentSection.id&&e.classList.add("is-current")}))}},{key:"setButtonVisibility",value:function(){this._state.currentSection===this.sectionsArray[0]?this.btnUp.classList.add("is-hidden"):this.btnUp.classList.remove("is-hidden"),this._state.currentSection===this.sectionsArray[this.sectionsArray.length-1]?(this.btnDown.classList.add("is-hidden"),this.btnTop.classList.remove("is-hidden")):(this.btnDown.classList.remove("is-hidden"),this.btnTop.classList.add("is-hidden")),"about"===this._state.currentSection.id?(this.btnUp.classList.add("on-yellow"),this.btnDown.classList.add("on-yellow")):(this.btnUp.classList.remove("on-yellow"),this.btnDown.classList.remove("on-yellow")),"work"===this._state.currentSection.id?this.btnRight.classList.remove("is-hidden"):this.btnRight.classList.add("is-hidden")}},{key:"checkVisibleSection",value:function(){var t=this,e=this.dom.main.getBoundingClientRect().top;Array.from(this.sectionsArray).forEach((function(n){var i=n.getBoundingClientRect().top;e===i&&t.navigate(n)}))}}])&&r(e.prototype,n),i&&r(e,i),t}();function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom={year:e}}var e,n,i;return e=t,(n=[{key:"init",value:function(){this.setCurrentYear()}},{key:"setCurrentYear",value:function(){var t=(new Date).getFullYear();this.dom.year.innerHTML=t}}])&&a(e.prototype,n),i&&a(e,i),t}();window.tiago={Modal:o,Navigator:s,Year:c};window.onload=function(){var t=document.querySelectorAll("[data-year]");t&&Array.from(t).forEach((function(t){new c(t).init()}));var e=document.getElementsByClassName("modal");e&&Array.from(e).forEach((function(t){new o(t).init()}));var n=document.querySelector("main");new s(n).init()}}]);