// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=new Map,i=new Map,o=function(e,t){var r=void 0,n=void 0;if("performance"in self){var i=performance.now();r=i,n=e-Math.max(0,i-t)}else r=Date.now(),n=e;return{expected:r+n,remainingDelay:n}},a=function e(t,r,n,i){var o="performance"in self?performance.now():Date.now();o>n?postMessage({id:null,method:"call",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,n-o,t,r,n,i))};addEventListener("message",function(e){var t=e.data;try{if("clear"===t.method){var r=t.id,s=t.params,u=s.timerId,l=s.timerType;if("interval"===l)!function(e){var t=n.get(e);if(void 0===t)throw new Error('There is no interval scheduled with the given id "'+e+'".');clearTimeout(t),n.delete(e)}(u),postMessage({error:null,id:r});else{if("timeout"!==l)throw new Error('The given type "'+l+'" is not supported');!function(e){var t=i.get(e);if(void 0===t)throw new Error('There is no timeout scheduled with the given id "'+e+'".');clearTimeout(t),i.delete(e)}(u),postMessage({error:null,id:r})}}else{if("set"!==t.method)throw new Error('The given method "'+t.method+'" is not supported');var d=t.params,c=d.delay,p=d.now,f=d.timerId,m=d.timerType;if("interval"===m)!function(e,t,r){var i=o(e,r),s=i.expected,u=i.remainingDelay;n.set(t,setTimeout(a,u,n,t,s,"interval"))}(c,f,p);else{if("timeout"!==m)throw new Error('The given type "'+m+'" is not supported');!function(e,t,r){var n=o(e,r),s=n.expected,u=n.remainingDelay;i.set(t,setTimeout(a,u,i,t,s,"timeout"))}(c,f,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}})}]);`;
