!function(){function t(e){"@babel/helpers - typeof";return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,n,r){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,n,r||t)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var r,u=i(e);if(n){var c=i(this).constructor;r=Reflect.construct(u,arguments,c)}else r=u.apply(this,arguments);return function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;return o(e)}(this,r)}}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){if(n=t,!(null!=(r=e)&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r))throw new TypeError("Cannot call a class as a function");var n,r}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var a=function(){function t(){u(this,t),Object.defineProperty(this,"listeners",{value:{},writable:!0,configurable:!0})}return l(t,[{key:"addEventListener",value:function(t,e){t in this.listeners||(this.listeners[t]=[]),this.listeners[t].push(e)}},{key:"removeEventListener",value:function(t,e){if(t in this.listeners)for(var n=this.listeners[t],r=0,o=n.length;r<o;r++)if(n[r]===e)return void n.splice(r,1)}},{key:"dispatchEvent",value:function(t){var e=this;if(t.type in this.listeners){for(var n=function(n){setTimeout(function(){return n.call(e,t)})},r=this.listeners[t.type],o=0,i=r.length;o<i;o++)n(r[o]);return!t.defaultPrevented}}}]),t}(),f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(f,a);var c=r(f);function f(){var t;return u(this,f),(t=c.call(this)).listeners||a.call(o(t)),Object.defineProperty(o(t),"aborted",{value:!1,writable:!0,configurable:!0}),Object.defineProperty(o(t),"onabort",{value:null,writable:!0,configurable:!0}),t}return l(f,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(t){"abort"===t.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,t)),e(i(f.prototype),"dispatchEvent",this).call(this,t)}}]),f}(),s=function(){function t(){u(this,t),Object.defineProperty(this,"signal",{value:new f,writable:!0,configurable:!0})}return l(t,[{key:"abort",value:function(){var t;try{t=new Event("abort")}catch(e){"undefined"!=typeof document?document.createEvent?(t=document.createEvent("Event")).initEvent("abort",!1,!1):(t=document.createEventObject()).type="abort":t={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(t)}},{key:"toString",value:function(){return"[object AbortController]"}}]),t}();"undefined"!=typeof Symbol&&Symbol.toStringTag&&(s.prototype[Symbol.toStringTag]="AbortController",f.prototype[Symbol.toStringTag]="AbortSignal"),window.AbortController=s,window.AbortSignal=f}();