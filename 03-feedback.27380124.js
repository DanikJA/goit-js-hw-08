function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var i,r,o,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,a=setTimeout(T,t),l?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function T(){var e=m();if(S(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-f);return s?v(n,o-(e-c)):n}(e))}function h(e){return a=void 0,p&&i?b(e):(i=r=void 0,u)}function w(){var e=m(),n=S(e);if(i=arguments,r=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(T,t),b(f)}return void 0===a&&(a=setTimeout(T,t)),u}return t=g(t)||0,y(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(g(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=r=a=void 0},w.flush=function(){return void 0===a?u:h(m())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),j=document.querySelector("textarea"),S=document.querySelector("input[type='email']");function T(e){const t={email:S.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}!function(){const e=localStorage.getItem("feedback-form-state");if(e){const{email:t,message:n}=JSON.parse(e);j.value=n,S.value=t}}(),b.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),j.addEventListener("input",e(t)(T,500)),S.addEventListener("input",e(t)(T,500));
//# sourceMappingURL=03-feedback.27380124.js.map
