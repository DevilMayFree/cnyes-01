(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6634],{22498:function(t,e,r){var n="Expected a function",i=0/0,o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,s="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,l="object"==typeof self&&self&&self.Object===Object&&self,p=s||l||Function("return this")(),g=Object.prototype.toString,v=Math.max,d=Math.min,m=function(){return p.Date.now()};function h(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==g.call(e))return i;if(h(t)){var e,r="function"==typeof t.valueOf?t.valueOf():t;t=h(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=c.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):u.test(t)?i:+t}t.exports=function(t,e,r){var i=!0,o=!0;if("function"!=typeof t)throw TypeError(n);return h(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),function(t,e,r){var i,o,u,c,f,a,s=0,l=!1,p=!1,g=!0;if("function"!=typeof t)throw TypeError(n);function j(e){var r=i,n=o;return i=o=void 0,s=e,c=t.apply(n,r)}function w(t){var r=t-a,n=t-s;return void 0===a||r>=e||r<0||p&&n>=u}function y(){var t,r,n,i=m();if(w(i))return E(i);f=setTimeout(y,(t=i-a,r=i-s,n=e-t,p?d(n,u-r):n))}function E(t){return(f=void 0,g&&i)?j(t):(i=o=void 0,c)}function T(){var t,r=m(),n=w(r);if(i=arguments,o=this,a=r,n){if(void 0===f)return s=t=a,f=setTimeout(y,e),l?j(t):c;if(p)return f=setTimeout(y,e),j(a)}return void 0===f&&(f=setTimeout(y,e)),c}return e=b(e)||0,h(r)&&(l=!!r.leading,u=(p="maxWait"in r)?v(b(r.maxWait)||0,e):u,g="trailing"in r?!!r.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=a=o=f=void 0},T.flush=function(){return void 0===f?c:E(m())},T}(t,e,{leading:i,maxWait:e,trailing:o})}},26634:function(t,e,r){"use strict";r.r(e);var n=r(38139),i=r(38900),o=r(30748),u=r(76049),c=r(16511),f=r(74193),a=r(35409),s=r.n(a),l=r(22498),p=r.n(l),g=r(90275);let v={[u.Pj.EVENT_NAME]:u.PL.CLICK,[u.Pj.SECTION]:"FloatingBTN",[u.Pj.CLICK_ITEM]:""},d=(0,f.z)("a")({name:"FloatingButtonWrapper",class:"f1pgt94h",propsAsIs:!1,vars:{"f1pgt94h-0":[t=>{let{width:e}=t;return e},"px"],"f1pgt94h-1":[t=>{let{height:e}=t;return e},"px"]}}),m=(0,f.z)("img")({name:"FloatingButtonImage",class:"fc5u93z",propsAsIs:!1});e.default=(0,g.memo)(t=>{let{href:e="",image:r,width:f=100,height:a=136,description:l="",rotatingOffset:h=30}=t,b=(0,g.useRef)(-1),j=(0,g.useRef)(0),w=(0,g.useRef)(0),y=(0,g.useRef)(),[E,T]=(0,g.useState)(!1),x=p()(()=>{b.current<0&&(b.current=window.scrollY),y&&window.clearTimeout(null==y?void 0:y.current),y.current=setTimeout(()=>{j.current=window.scrollY,w.current=j.current-b.current,Math.abs(w.current)>h&&T(!!(w&&w.current&&w.current>0)),b.current=-1,j.current=0,w.current=0},66)},50);return(0,g.useEffect)(()=>{if(!c.sk)return window.addEventListener("scroll",x,!1),()=>{window.removeEventListener("scroll",x,!1)}},[x]),f>0&&a>0&&r?(0,o.jsx)(d,{width:f,height:a,href:e,target:"_blank",rel:"noreferrer noopener",title:l,onClick:()=>(0,u.gv)((0,i._)((0,n._)({},v),{[u.Pj.CLICK_ITEM]:l})),children:(0,o.jsx)(m,{isRotate:E,className:s()({rotate:E}),src:r,alt:"floating ad",title:l})}):null}),r(99033)},99033:function(t){t.exports={f1pgt94h:"f1pgt94h",fc5u93z:"fc5u93z","reset-fc5u93z":"reset-fc5u93z",rotate:"rotate","rotate-fc5u93z":"rotate-fc5u93z"}}}]);
//# sourceMappingURL=6634.603cde525d47d025.js.map