"use strict";(self.webpackChunkmcq=self.webpackChunkmcq||[]).push([[558,614],{7798:function(e,l,n){n.d(l,{Z:function(){return i}});n(2791);var t=n(3504),a=n(184);function i(e){var l=e.props;return(0,a.jsx)("div",{className:"px-7 rounded-sm md:mt-4",children:(0,a.jsx)("div",{className:"text-md dark:text-mainText",children:l?null===l||void 0===l?void 0:l.map((function(e,n){return(0,a.jsx)("span",{children:null!==e&&void 0!==e&&e.header?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.rU,{to:"/".concat(e.link),className:"".concat(n===l.length-1?"opacity-60":"hover:underline text-blue-900 dark:text-blue-500"),children:[" ",e.header]})," ",n===(null===l||void 0===l?void 0:l.length)-1?"":"/"]}):(0,a.jsx)(a.Fragment,{})},n)})):(0,a.jsx)(a.Fragment,{})})})}},614:function(e,l,n){n.r(l),n.d(l,{default:function(){return s}});n(2791);var t=n(3504),a=n(4270),i=n(184);function s(){return(0,i.jsxs)("div",{className:"bg-back w-full h-full flex col-span-4",children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)("title",{children:"Page Not Found | Aakhyaan Academy"})}),(0,i.jsxs)("div",{className:"m-auto flex flex-col p-10",children:[(0,i.jsx)("div",{className:"mx-auto dark:hidden max-w-[250px]",children:(0,i.jsx)("img",{alt:"",src:"aakhyaanText.png"})}),(0,i.jsx)("div",{className:"invisible dark:visible max-w-[250px]",children:(0,i.jsx)("img",{alt:"",src:"aakhyaanTextWhite.png"})}),(0,i.jsxs)("span",{className:"font-sans",children:[(0,i.jsx)("span",{className:"font-bold",children:"404"}),". That's an error"]}),(0,i.jsxs)("span",{className:"mt-5 font-sans",children:["The requested URL"," ",(0,i.jsx)("strong",{children:window.location.href.replace("http://localhost:3000","")}),"was not found on this server.",(0,i.jsx)("span",{className:"font-thin",children:"That\u2019s all we know."})]}),(0,i.jsx)(t.rU,{to:"/",className:"mt-5 font-sans text-xl hover:underline transition-all text-blue-600",children:"Goto Home"})]})]})}},7613:function(e,l,n){n.r(l),n.d(l,{default:function(){return w}});var t=n(2982),a=n(1413),i=n(8214),s=n(5861),r=n(885),o=n(2791),d=n(1609),c=(n(8859),n(6871)),u=n(2419),v=n(9331),x=n(7798),h=n(5880),m=n(4373),f=n(3504),p=n(184);var g=function(e){e.courseId,e.subjectId;var l=e.chapterId,n=e.topics,t=e.setChaptersPanelMode,a=e.setErrorMessage,i=(0,c.s0)(),s="",r=window.location.pathname.split("/");return 6===r.length&&(s=r[r.length-1]),(0,o.useEffect)((function(){var e,t;s?i("".concat(l,"/").concat(s),{replace:!0}):null!==(e=n[0])&&void 0!==e&&e._id?i("".concat(l,"/").concat(null===(t=n[0])||void 0===t?void 0:t._id),{replace:!0}):a("There are no topics available at the moment.")}),[l,i,s,n]),(0,p.jsx)("div",{className:"flex flex-col divide-y-[0.5px] divide-blue-200",children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,p.jsx)(f.rU,{to:"".concat(l,"/").concat(null===e||void 0===e?void 0:e._id),onClick:function(n){n.preventDefault(),t(!0),i("".concat(l,"/").concat(null===e||void 0===e?void 0:e._id))},className:"".concat(s.split("/")[s.split("/").length-1]===(null===e||void 0===e?void 0:e._id)?"dark:bg-slate-600 bg-blue-600":""," text-mainText/90 text-lg text-center hover:underline hover:cursor-pointer flex flex-col items-center justify-center py-1"),children:null===e||void 0===e?void 0:e.title},n)}))})},j=n(614),b=n(6659),k=(n(5862),n(4270)),N=(0,o.lazy)((function(){return Promise.all([n.e(712),n.e(230)]).then(n.bind(n,4230))}));var w=function(){var e,l,n,h,m,f,g,w,Z,T,C,L,A,F,_,E,I=(0,o.useState)(""),M=(0,r.Z)(I,2),P=M[0],R=M[1],U=(0,c.UO)(),z=U.id1,S=U.id2,W=(0,o.useState)([]),O=(0,r.Z)(W,2),q=O[0],B=O[1],D=(0,u.ZP)("https://api.aakhyaan.org"+"/chapters/".concat(z,"/").concat(S,"/listwithtopic"),function(){var e=(0,s.Z)((0,i.Z)().mark((function e(l){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.Uo)(l);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(l){return e.apply(this,arguments)}}(),{revalidateOnFocus:!1,revalidateOnReconnect:!0}),G=D.data,H=D.error;return(0,o.useEffect)((function(){if("undefined"!==typeof G){var e,l,n=null===G||void 0===G||null===(e=G.data)||void 0===e?void 0:e.chapters;(n=n.sort((function(e,l){return e.sn-l.sn}))).map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{topics:e.topics.sort((function(e,l){return e.sn-l.sn}))})})),B(null===G||void 0===G||null===(l=G.data)||void 0===l?void 0:l.chapters)}else if(H){var t,i;R(null===H||void 0===H||null===(t=H.response)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.message)}}),[G,H]),(0,p.jsxs)("div",{className:"w-full h-full bg-back pt-20 dark:bg-background",children:[(0,p.jsx)(k.Z,{children:(0,p.jsx)("title",{children:"".concat(null!==G&&void 0!==G&&null!==(e=G.data)&&void 0!==e&&null!==(l=e.subject)&&void 0!==l&&l.title?(null===G||void 0===G||null===(n=G.data)||void 0===n||null===(h=n.subject)||void 0===h?void 0:h.title)+" | ":"","Aakhyaan Academy")})}),(0,p.jsx)(d.Z,{page:"programmes"}),(0,p.jsx)(x.Z,{props:[{header:"Programmes",link:"programmes"},{header:null===G||void 0===G||null===(m=G.data)||void 0===m||null===(f=m.course)||void 0===f?void 0:f.title,link:"programmes/".concat(null===G||void 0===G||null===(g=G.data)||void 0===g||null===(w=g.course)||void 0===w?void 0:w._id)},{header:null===G||void 0===G||null===(Z=G.data)||void 0===Z||null===(T=Z.subject)||void 0===T?void 0:T.title,link:"programmes/".concat(null===G||void 0===G||null===(C=G.data)||void 0===C||null===(L=C.course)||void 0===L?void 0:L._id,"/").concat(null===G||void 0===G||null===(A=G.data)||void 0===A||null===(F=A.subject)||void 0===F?void 0:F._id)}]}),G||H?!H&&G&&0!==(null===G||void 0===G||null===(_=G.data)||void 0===_?void 0:_.chapters)?(0,p.jsxs)("div",{className:"dark:bg-background bg-back mt-10 font-sans text-lg w-full lg:grid lg:grid-cols-5 min-h-full",children:[(0,p.jsx)(y,{id1:z,id2:S,chapters:q,setErrorMessage:R}),(0,p.jsx)(o.Suspense,{fallback:(0,p.jsx)("div",{className:"flex flex-col text-white",children:(0,p.jsx)("div",{className:"m-auto",children:"Loading..."})})}),(0,p.jsxs)(c.Z5,{children:[(0,p.jsx)(c.AW,{path:"*",element:(0,p.jsx)(j.default,{})}),(0,p.jsx)(c.AW,{path:"/:chapterId/:topicId",element:(0,p.jsx)(N,{})}),(0,p.jsx)(c.AW,{path:"/",element:(0,p.jsx)(N,{})})]})]}):(0,p.jsxs)(p.Fragment,{children:[G&&0===(null===G||void 0===G||null===(E=G.data)||void 0===E?void 0:E.chapters)?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"text-warningText text-xl w-full h-full flex items-center justify-center",children:"There are no chapters available at the moment."}),console.log(G,q.length)]}):(0,p.jsx)(p.Fragment,{}),H?(0,p.jsx)("div",{className:"text-warningText text-xl w-full h-full flex items-center justify-center",children:P}):(0,p.jsx)(p.Fragment,{})]}):(0,p.jsx)("div",{className:"mt-16 h-full",children:(0,p.jsxs)("div",{className:"dark:bg-background bg-back mt-10 font-sans text-lg w-full grid md:grid-cols-5 min-h-full",children:[(0,p.jsx)("div",{className:"mt-5 md:mt-0 hidden md:flex flex-col relative h-full w-full",children:(0,p.jsxs)("div",{className:"invisible md:visible min-w-[180px] dark:bg-formBox h-full md:flex flex-col bg-footer rounded-t-lg w-full",children:[(0,p.jsx)("span",{className:"mx-auto mb-1 place-self-center w-full px-2",children:(0,p.jsx)(b.Z,{height:25,baseColor:"gray"})}),(0,t.Z)(Array(3)).map((function(e,l){return(0,p.jsx)("div",{className:"flex flex-col items-center justify-center px-3 md:px-5 divide-y-2",children:(0,p.jsx)("div",{className:"w-full",children:(0,p.jsx)(b.Z,{height:20,baseColor:"pink"})})},l)}))]})}),(0,p.jsx)("div",{className:"z-10 col-span-4 flex flex-col w-full h-fit p-5 px-10 dark:bg-background",children:(0,p.jsxs)("div",{className:"relative w-full flex flex-col gap-10",children:[(0,p.jsx)("span",{className:"absolute -top-14  md:-top-20 place-self-center",children:(0,p.jsx)(b.Z,{width:220,height:20,baseColor:"gray"})}),(0,p.jsx)("div",{className:"flex flex-col gap-1 mt-10",children:(0,t.Z)(Array(15)).map((function(e,l){return(0,p.jsx)("div",{className:"w-full mx-auto",children:(0,p.jsx)(b.Z,{baseColor:"gray",height:18})},l)}))})]})})]})})]})},y=function(e){var l=e.chapters,n=(e.id1,e.id2),a=e.setErrorMessage,i=(0,o.useState)(!0),s=(0,r.Z)(i,2),d=s[0],c=s[1],u=(0,o.useRef)(null),v=(0,o.useRef)(null),x=(0,o.useState)([!0]),f=(0,r.Z)(x,2),j=f[0],b=f[1],k=(0,o.useRef)([]);return window.addEventListener("click",(function(e){var l,n;null!==(l=u.current)&&void 0!==l&&l.contains(e.target)||!u||(null!==(n=v.current)&&void 0!==n&&n.contains(e.target)||!v||d||c(!0))})),(0,o.useEffect)((function(){var e,l,n,t,a;d?(null===(e=u.current)||void 0===e||e.classList.remove("animate-moveRight","lg:animate-none"),null===(l=u.current)||void 0===l||l.classList.add("animate-vanishLeft","lg:animate-none"),setTimeout((function(){var e;null===(e=u.current)||void 0===e||e.classList.add("invisible","lg:animate-none")}),500)):(null===(n=u.current)||void 0===n||n.classList.remove("invisible","lg:animate-none"),null===(t=u.current)||void 0===t||t.classList.remove("animate-vanishLeft","lg:animate-none"),null===(a=u.current)||void 0===a||a.classList.add("animate-moveRight","lg:animate-none"))}),[d]),(0,p.jsxs)("div",{className:"z-20 lg:mt-0 flex flex-col relative",children:[(0,p.jsx)("span",{ref:v,className:"lg:hidden fixed top-28 hover:cursor-pointer ".concat(d?"":"rotate-180"),onClick:function(e){e.preventDefault(),c(!d)},children:(0,p.jsx)(m.WMs,{size:40,color:"blue"})}),(0,p.jsx)("div",{ref:u,className:"mt-5 invisible lg:visible min-w-[230px] lg:min-w-[180px] fixed left-0 select-none dark:bg-formBox h-full lg:flex flex-col bg-footer lg:relative rounded-tr-lg divide-y-2 dark:divide-blue-900 divide-blue-100 overflow-hidden z-30",children:null===l||void 0===l?void 0:l.map((function(e,l){return(0,p.jsxs)("div",{className:"flex flex-col",children:[(0,p.jsxs)("div",{onClick:function(){return function(e){var l;j[e]?((l=j)[e]=!1,b((0,t.Z)(l))):j[e]&&"undefined"!==typeof j[e]||((l=j)[e]=!0,b((0,t.Z)(l)))}(l)},ref:function(e){return k.current.push(e)},className:"relative text-lg text-center hover:bg-blue-900 hover:text-mainText dark:hover:bg-slate-700 hover:opacity-90 hover:cursor-pointer  text-mainText flex items-center justify-center px-3 lg:px-5 border-none ".concat(j[l]?"shadow-lg dark:bg-background/60 bg-background/40":"dark:bg-background bg-background/70 "," py-2"),children:[(0,p.jsx)("span",{children:null===e||void 0===e?void 0:e.title}),(0,p.jsx)("span",{className:"absolute right-2 ".concat(j[l]?"rotate-180":""),children:(0,p.jsx)(h.PZl,{})})]}),j[l]?(0,p.jsx)("div",{className:"animate-dropdownOpen",children:(0,p.jsx)(g,{setChaptersPanelMode:c,subjectId:n,chapterId:e._id,topics:e.topics,setErrorMessage:a})}):""]},l)}))})]})}}}]);
//# sourceMappingURL=558.09d37a4b.chunk.js.map