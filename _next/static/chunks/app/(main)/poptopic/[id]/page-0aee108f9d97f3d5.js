(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3281,8887],{41011:function(e,t,n){Promise.resolve().then(n.bind(n,96941)),Promise.resolve().then(n.bind(n,54820)),Promise.resolve().then(n.bind(n,85811)),Promise.resolve().then(n.bind(n,67962)),Promise.resolve().then(n.bind(n,65390)),Promise.resolve().then(n.bind(n,65907)),Promise.resolve().then(n.bind(n,24276)),Promise.resolve().then(n.bind(n,47173)),Promise.resolve().then(n.bind(n,34163)),Promise.resolve().then(n.bind(n,70590)),Promise.resolve().then(n.bind(n,95517)),Promise.resolve().then(n.bind(n,79583)),Promise.resolve().then(n.bind(n,83556)),Promise.resolve().then(n.bind(n,71625)),Promise.resolve().then(n.bind(n,38262)),Promise.resolve().then(n.bind(n,47037)),Promise.resolve().then(n.bind(n,10224)),Promise.resolve().then(n.bind(n,45487)),Promise.resolve().then(n.bind(n,78183)),Promise.resolve().then(n.bind(n,23607)),Promise.resolve().then(n.bind(n,55514)),Promise.resolve().then(n.bind(n,94214)),Promise.resolve().then(n.bind(n,30555)),Promise.resolve().then(n.bind(n,61335)),Promise.resolve().then(n.bind(n,15792)),Promise.resolve().then(n.bind(n,89984)),Promise.resolve().then(n.bind(n,73440)),Promise.resolve().then(n.bind(n,90719)),Promise.resolve().then(n.bind(n,5040)),Promise.resolve().then(n.t.bind(n,92633,23)),Promise.resolve().then(n.bind(n,36132)),Promise.resolve().then(n.bind(n,47320)),Promise.resolve().then(n.bind(n,24486)),Promise.resolve().then(n.bind(n,94229)),Promise.resolve().then(n.t.bind(n,19025,23)),Promise.resolve().then(n.t.bind(n,925,23)),Promise.resolve().then(n.t.bind(n,55679,23)),Promise.resolve().then(n.bind(n,20154)),Promise.resolve().then(n.bind(n,43339)),Promise.resolve().then(n.bind(n,67175)),Promise.resolve().then(n.t.bind(n,87217,23)),Promise.resolve().then(n.t.bind(n,4027,23)),Promise.resolve().then(n.t.bind(n,53004,23)),Promise.resolve().then(n.t.bind(n,57361,23)),Promise.resolve().then(n.t.bind(n,53875,23)),Promise.resolve().then(n.t.bind(n,8042,23)),Promise.resolve().then(n.t.bind(n,14745,23)),Promise.resolve().then(n.t.bind(n,65046,23)),Promise.resolve().then(n.t.bind(n,60325,23)),Promise.resolve().then(n.t.bind(n,44410,23)),Promise.resolve().then(n.t.bind(n,33817,23)),Promise.resolve().then(n.t.bind(n,84276,23)),Promise.resolve().then(n.t.bind(n,37099,23)),Promise.resolve().then(n.t.bind(n,94248,23)),Promise.resolve().then(n.t.bind(n,83903,23)),Promise.resolve().then(n.t.bind(n,3118,23)),Promise.resolve().then(n.t.bind(n,9599,23)),Promise.resolve().then(n.t.bind(n,13513,23)),Promise.resolve().then(n.t.bind(n,28400,23)),Promise.resolve().then(n.t.bind(n,55313,23)),Promise.resolve().then(n.t.bind(n,78039,23)),Promise.resolve().then(n.t.bind(n,94585,23)),Promise.resolve().then(n.t.bind(n,31366,23)),Promise.resolve().then(n.t.bind(n,32566,23)),Promise.resolve().then(n.t.bind(n,97579,23))},28887:function(e,t,n){"use strict";n.r(t);var s=n(30748),r=n(49224),i=n(93867),o=n(30128),l=n(74193),d=n(90275);let a=(0,l.z)("div")({name:"View",class:"v1f85mj1",propsAsIs:!1}),c=(0,l.z)("div")({name:"Today",class:"tfhuqru",propsAsIs:!1,vars:{"tfhuqru-0":[e=>{let{fontWeight:t}=e;return t||400}]}});t.default=(0,d.memo)(e=>{var t;let{timestamp:n,fontWeight:l}=e,{dates:d}=(0,o.Q)(),u=n||(null==d?void 0:null===(t=d[1])||void 0===t?void 0:t.getTime())||Date.now(),v=(0,i.zk)(u),m=v?"今天":(0,i.mr)(u/1e3,"YYYYMMDD");return(0,s.jsxs)(a,{children:[v&&(0,s.jsx)(r.Z,{timestamp:u,marginRight:8}),(0,s.jsx)(c,{fontWeight:l,children:m})]})}),n(70789)},78183:function(e,t,n){"use strict";n.d(t,{default:function(){return x}});var s=n(30748),r=n(90275),i=n(74193),o=n(85563),l=n(48649),d=n(36916);let a=(0,i.z)("main")({name:"Container",class:"ck8m4lf",propsAsIs:!1}),c=(0,i.z)("div")({name:"Content",class:"c164ub90",propsAsIs:!1}),u=(0,i.z)("div")({name:"ContentBlurBackground",class:"cm2cmjs",propsAsIs:!1,vars:{"cm2cmjs-0":[e=>{let{isExpand:t}=e;return t?"none":"block"}]}});var v=e=>{let{content:t,isExpand:n,onContentHeightChange:i}=e,v=(0,r.useRef)(null),m=(0,r.useRef)(null),h=(0,r.useRef)(0),b=(0,o.parseFromString)((0,l.decode)("<body>".concat(t,"</body>")).toString()).getElementsByTagName("body")[0].childNodes||[];return(0,r.useEffect)(()=>{let e=v.current;e&&(h.current=e.clientHeight,i(h.current))},[i]),(0,r.useEffect)(()=>{let e=m.current,t=h.current;e&&0!==t&&(e.style.maxHeight=n&&t>d.CY?"".concat(t,"px"):"".concat(d.CY,"px"))},[n]),(0,r.useEffect)(()=>{let e=v.current;if(e){let t=new ResizeObserver(t=>{h.current=e.clientHeight});return t.observe(e),()=>{t.disconnect()}}},[]),(0,s.jsxs)(a,{ref:m,children:[(0,s.jsx)(c,{ref:v,children:b.map((e,t)=>{if("table"===e.nodeName){let t=e.childNodes.find(e=>"tbody"===e.nodeName),n=e.childNodes.find(e=>"thead"===e.nodeName),s=null==n?void 0:n.childNodes.filter(e=>"tr"===e.nodeName),r=null==s?void 0:s.map(e=>e.childNodes.filter(e=>"th"===e.nodeName)),i=null==t?void 0:t.childNodes.filter(e=>"tr"===e.nodeName),o=null==i?void 0:i.map(e=>e.childNodes.filter(e=>"td"===e.nodeName)),l=(e,t)=>{e.attributes=[...e.attributes,{name:"style",value:"text-align: ".concat(t,";")}]};null==o||o.forEach((e,t)=>{e.forEach((e,n)=>{let s=e.textContent,i=/^[\d-+]/.test(s)&&0!==n?"right":"left";if(l(e,i),0===t){var o;let e=null==r?void 0:null===(o=r[t])||void 0===o?void 0:o[n];e&&l(e,i)}})})}return(0,s.jsx)("section",{dangerouslySetInnerHTML:{__html:e.outerHTML}},"news-section-".concat(t))})}),(0,s.jsx)(u,{isExpand:n})]})};n(41274);let m=(0,i.z)("button")({name:"Button",class:"bvsxq3s",propsAsIs:!1,vars:{"bvsxq3s-0":[e=>{let{isExpand:t}=e;return t?"rotate(180deg)":"rotate(0deg)"}],"bvsxq3s-1":[e=>{let{isExpand:t}=e;return t?"rotate(0deg)":"rotate(180deg)"}]}});var h=e=>{let{onClickExpand:t,isExpand:n}=e;return(0,s.jsx)(m,{onClick:t,isExpand:n,children:n?"收起內容":"展開看更多完整內容"})};n(88849);var b=n(76049),f=n(75033);let P=(0,i.z)("div")({name:"ContentContainer",class:"c17i3pg7",propsAsIs:!1});var x=e=>{let{content:t}=e,[n,i]=(0,r.useState)(!0),[o,l]=(0,r.useState)(0),[a,c]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{o>=d.CY&&(i(!1),c(!0))},[o]),(0,s.jsxs)(P,{children:[(0,s.jsx)(v,{content:t,isExpand:n,onContentHeightChange:e=>{l(e)}}),a&&(0,s.jsx)(h,{onClickExpand:()=>{i(e=>!e),(0,b.gv)({[b.Pj.EVENT_NAME]:b.PL.CLICK_BUTTON,[b.Pj.SECTION]:f.fV.NEWS_CATEGORY_POP_TOPIC_ID,[b.Pj.CLICK_ITEM]:n?"收合":"展開"})},isExpand:n})]})};n(93402)},23607:function(e,t,n){"use strict";var s=n(30748),r=n(74193),i=n(28887),o=n(64742);let l=(0,r.z)("div")({name:"DateContainer",class:"d1dtsv1y",propsAsIs:!1}),d=(0,r.z)("div")({name:"Header",class:"h6xeqx0",propsAsIs:!1}),a=(0,r.z)("div")({name:"FilterContainer",class:"fwpqce7",propsAsIs:!1}),c=(0,r.z)("div")({name:"RedHeadLine",class:"resckzu",propsAsIs:!1});(0,r.z)("div")({name:"Divide",class:"d1v46js8",propsAsIs:!1}),(0,r.z)("div")({name:"Desktop",class:"d1knzzm9",propsAsIs:!1}),t.default=()=>(0,s.jsxs)(l,{children:[(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{}),(0,s.jsx)("h3",{children:"相關新聞"}),(0,s.jsx)(a,{children:(0,s.jsx)(o.Z,{isDetailPage:!0})})]}),(0,s.jsx)(i.default,{fontWeight:500})]}),n(48930)},55514:function(e,t,n){"use strict";n.d(t,{default:function(){return v}});var s=n(38139),r=n(30748),i=n(30678),o=n(90275),l=n(74193),d=n(44389);let a=(0,l.z)("div")({name:"View",class:"v96ltbt",propsAsIs:!1});var c=(0,o.memo)(()=>(0,r.jsx)(a,{children:Array.from({length:10}).fill(0).map((e,t)=>(0,r.jsx)(d.default.NewsSkeleton,{},"news_list_item_skeleton_".concat(t+1)))}));n(63432);let u=(0,i.default)(()=>Promise.all([n.e(5853),n.e(4674),n.e(3422),n.e(2936)]).then(n.bind(n,92936)),{loadableGenerated:{webpack:()=>[92936]},loading:()=>(0,r.jsx)(c,{}),ssr:!1});var v=e=>(0,r.jsx)(o.Suspense,{children:(0,r.jsx)(u,(0,s._)({},e))})},64742:function(e,t,n){"use strict";var s=n(30748),r=n(42844),i=n(30678),o=n(90275);let l=(0,i.default)(()=>Promise.all([n.e(4146),n.e(7396)]).then(n.bind(n,7396)),{loadableGenerated:{webpack:()=>[7396]},loading:()=>(0,s.jsx)(r.aF,{width:110,height:28,borderRadius:3}),ssr:!1});t.Z=e=>{let{isDetailPage:t=!1}=e;return(0,s.jsx)(o.Suspense,{children:(0,s.jsx)(l,{isDetailPage:t})})}},30555:function(e,t,n){"use strict";n.r(t),n.d(t,{DateContext:function(){return d},default:function(){return c}});var s=n(30748),r=n(31815),i=n(19881),o=n(22381),l=n(90275);let d=(0,l.createContext)({dates:[]}),a=new Date;function c(e){let{category:t,children:n}=e,c=(0,l.useMemo)(()=>t===r.p.BC_TUTORIAL?[(0,i.e)(a,1),a]:[(0,o.k)(a,10),a],[t]),[u,v]=(0,l.useState)(c),m=(0,l.useMemo)(()=>({dates:u,setDates:v}),[u]);return(0,s.jsx)(d.Provider,{value:m,children:n})}},61335:function(e,t,n){"use strict";n.d(t,{K:function(){return o},default:function(){return l}});var s=n(30748),r=n(90275),i=n(75033);let o=(0,r.createContext)({category:i.a.ALL,setCategory:void 0,keyword:"",setKeyword:void 0});function l(e){let{children:t}=e,[n,l]=(0,r.useState)(i.a.ALL),[d,a]=(0,r.useState)(""),c=(0,r.useMemo)(()=>({category:n,setCategory:l,keyword:d,setKeyword:a}),[n,l,d,a]);return(0,s.jsx)(o.Provider,{value:c,children:t})}},30128:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var s=n(30555),r=n(90275);let i=()=>(0,r.useContext)(s.DateContext)},49224:function(e,t,n){"use strict";var s=n(30748);let r=(0,n(74193).z)("div")({name:"Container",class:"c1x15wja",propsAsIs:!1,vars:{"c1x15wja-0":[e=>{let{marginRight:t}=e;return t||0},"px"]}});t.Z=e=>{let{timestamp:t,marginRight:n}=e,i=new Date(t).getDate();return(0,s.jsx)(r,{marginRight:n,children:i})},n(41080)},55313:function(e){e.exports={d1u894o8:"d1u894o8",d10cj85e:"d10cj85e"}},78039:function(e){e.exports={m3qc7fx:"m3qc7fx",mgbfj1q:"mgbfj1q",cudoasi:"cudoasi",gyf0rys:"gyf0rys"}},70789:function(e){e.exports={v1f85mj1:"v1f85mj1",tfhuqru:"tfhuqru"}},94585:function(e){e.exports={t2begpw:"t2begpw"}},28400:function(e){e.exports={hafnv4b:"hafnv4b",ti5goar:"ti5goar",t4y0n8:"t4y0n8",name:"name"}},41274:function(e){e.exports={ck8m4lf:"ck8m4lf",c164ub90:"c164ub90",warning:"warning",cm2cmjs:"cm2cmjs"}},88849:function(e){e.exports={bvsxq3s:"bvsxq3s"}},93402:function(e){e.exports={c17i3pg7:"c17i3pg7"}},48930:function(e){e.exports={d1dtsv1y:"d1dtsv1y",h6xeqx0:"h6xeqx0",fwpqce7:"fwpqce7",resckzu:"resckzu"}},63432:function(e){e.exports={v96ltbt:"v96ltbt"}},32566:function(e){e.exports={tns49jx:"tns49jx",hi3dwzj:"hi3dwzj",t1r94qga:"t1r94qga"}},97579:function(e){e.exports={c1sh66eh:"c1sh66eh"}},41080:function(e){e.exports={c1x15wja:"c1x15wja"}}},function(e){e.O(0,[9433,9964,4689,4674,6302,1626,7157,3620,9025,4401,3268,7900,4244,9329,3983,5598,6098,4330,5390,2270,1091,3011,1677,2382,1744],function(){return e(e.s=41011)}),_N_E=e.O()}]);
//# sourceMappingURL=page-0aee108f9d97f3d5.js.map