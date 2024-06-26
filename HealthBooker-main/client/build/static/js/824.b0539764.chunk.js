"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[824],{5560:(e,t,n)=>{n.d(t,{A:()=>o});n(5043);var r=n(5369),s=n(9776),i=n(5475),a=n(579);const o=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("footer",{children:[(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsxs)("div",{className:"footer-links",children:[(0,a.jsx)("h3",{children:"Links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.k2,{to:"/",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.k2,{to:"/doctors",children:"Doctors"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.k2,{to:"/appointments",children:"Appointments"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.k2,{to:"/notifications",children:"Notifications"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.Vq,{to:"/#contact",children:"Contact Us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.k2,{to:"/profile",children:"Profile"})})]})]}),(0,a.jsxs)("div",{className:"social",children:[(0,a.jsx)("h3",{children:"Social links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"facebook",children:(0,a.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(r.ok6,{})})}),(0,a.jsx)("li",{className:"youtube",children:(0,a.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(r.Vk6,{})})}),(0,a.jsx)("li",{className:"instagram",children:(0,a.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(r.ao$,{})})})]})]})]}),(0,a.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,a.jsx)("a",{href:"https://www.linkedin.com/in/jerome-oswald-ebenezer-j/",target:"_blank",rel:"noreferrer",children:"Jerome Oswald Ebenezer J"})," ","\xa9 ",(new Date).getFullYear()]})]})})},8114:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(5043),s=n(3216),i=n(5475),a=n(9776),o=n(9456),l=n(5089),c=n(1009),u=n(5922),d=n(7070),h=n(579);const p=()=>{const[e,t]=(0,r.useState)(!1),n=(0,o.wA)(),p=(0,s.Zp)(),[f,m]=(0,r.useState)(localStorage.getItem("token")||""),[g,j]=(0,r.useState)(localStorage.getItem("token")?(0,d.A)(localStorage.getItem("token")):"");return(0,h.jsxs)("header",{children:[(0,h.jsxs)("nav",{className:e?"nav-active":"",children:[(0,h.jsx)("h2",{className:"nav-logo",children:(0,h.jsx)(i.k2,{to:"/",children:"HealthBooker"})}),(0,h.jsxs)("ul",{className:"nav-links",children:[(0,h.jsx)("li",{children:(0,h.jsx)(i.k2,{to:"/",children:"Home"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.k2,{to:"/doctors",children:"Doctors"})}),f&&g.isAdmin&&(0,h.jsx)("li",{children:(0,h.jsx)(i.k2,{to:"/dashboard/users",children:"Dashboard"})}),f&&!g.isAdmin&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{children:(0,h.jsx)(i.k2,{to:"/appointments",children:"Appointments"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.k2,{to:"/notifications",children:"Notifications"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.k2,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,h.jsx)("li",{children:(0,h.jsx)(a.Vq,{to:"/#contact",children:"Contact Us"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.k2,{to:"/profile",children:"Profile"})})]}),f?(0,h.jsx)("li",{children:(0,h.jsx)("span",{className:"btn",onClick:()=>{n((0,l.iA)({})),localStorage.removeItem("token"),p("/login")},children:"Logout"})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{children:(0,h.jsx)(i.k2,{className:"btn",to:"/login",children:"Login"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.k2,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,h.jsxs)("div",{className:"menu-icons",children:[!e&&(0,h.jsx)(c.ND1,{className:"menu-open",onClick:()=>{t(!0)}}),e&&(0,h.jsx)(u.clO,{className:"menu-close",onClick:()=>{t(!1)}})]})]})}},6161:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(5043),s=(n(4748),n(579));const i=()=>{const[e,t]=(0,r.useState)({name:"",email:"",message:""}),n=n=>{const{name:r,value:s}=n.target;return t({...e,[r]:s})};return(0,s.jsx)("section",{className:"register-section flex-center",id:"contact",children:(0,s.jsxs)("div",{className:"contact-container flex-center contact",children:[(0,s.jsx)("h2",{className:"form-heading",children:"Contact Us"}),(0,s.jsxs)("form",{method:"POST",action:"https://formspree.io/f/xdknnpqr",className:"register-form",children:[(0,s.jsx)("input",{type:"text",name:"name",className:"form-input",placeholder:"Enter your name",value:e.name,onChange:n}),(0,s.jsx)("input",{type:"email",name:"email",className:"form-input",placeholder:"Enter your email",value:e.email,onChange:n}),(0,s.jsx)("textarea",{type:"text",name:"message",className:"form-input",placeholder:"Enter your message",value:e.message,onChange:n,rows:"8",cols:"12"}),(0,s.jsx)("button",{type:"submit",className:"btn form-btn",children:"send"})]})]})})},a=n.p+"static/media/aboutimg.af2db4b9f307d04f8745.jpg",o=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("section",{className:"container",children:[(0,s.jsx)("h2",{className:"page-heading about-heading",children:"About Us"}),(0,s.jsxs)("div",{className:"about",children:[(0,s.jsx)("div",{className:"hero-img",children:(0,s.jsx)("img",{src:a,alt:"hero"})}),(0,s.jsx)("div",{className:"hero-content",children:(0,s.jsx)("p",{children:"Our online health consultation and doctor appointment service provides easy access to certified healthcare professionals from the comfort of your home. Schedule appointments flexibly, enjoy secure video consultations, and manage your healthcare efficiently with instant confirmations and reminders."})})]})]})});var l=n(5560);const c=n.p+"static/media/heroimg.8bbd2437f7c9d842026c.jpg",u=()=>(0,s.jsxs)("section",{className:"hero",children:[(0,s.jsxs)("div",{className:"hero-content",children:[(0,s.jsxs)("h1",{children:["Your Health, ",(0,s.jsx)("br",{}),"Our Responsibility"]}),(0,s.jsx)("p",{children:"It embodies our commitment to providing top-notch, personalized healthcare and promoting overall well-being. We prioritize preventive care, advanced treatments, and community engagement to ensure you receive the best possible care."})]}),(0,s.jsx)("div",{className:"hero-img",children:(0,s.jsx)("img",{src:c,alt:"hero"})})]});var d=n(8114),h=n(5751);const p=()=>(0,s.jsxs)("section",{className:"container circles",children:[(0,s.jsxs)("div",{className:"circle",children:[(0,s.jsx)(h.Ay,{start:0,end:1e3,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:e=>{let{countUpRef:t}=e;return(0,s.jsxs)("div",{className:"counter",children:[(0,s.jsx)("span",{ref:t}),"+"]})}}),(0,s.jsxs)("span",{className:"circle-name",children:["Satisfied",(0,s.jsx)("br",{}),"Patients"]})]}),(0,s.jsxs)("div",{className:"circle",children:[(0,s.jsx)(h.Ay,{start:0,end:250,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:e=>{let{countUpRef:t}=e;return(0,s.jsxs)("div",{className:"counter",children:[(0,s.jsx)("span",{ref:t}),"+"]})}}),(0,s.jsxs)("span",{className:"circle-name",children:["Verified",(0,s.jsx)("br",{}),"Doctors"]})]}),(0,s.jsxs)("div",{className:"circle",children:[(0,s.jsx)(h.Ay,{start:0,end:75,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:e=>{let{countUpRef:t}=e;return(0,s.jsxs)("div",{className:"counter",children:[(0,s.jsx)("span",{ref:t}),"+"]})}}),(0,s.jsxs)("span",{className:"circle-name",children:["Specialist",(0,s.jsx)("br",{}),"Doctors"]})]})]}),f=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{}),(0,s.jsx)(u,{}),(0,s.jsx)(o,{}),(0,s.jsx)(p,{}),(0,s.jsx)(i,{}),(0,s.jsx)(l.A,{})]})},7904:(e,t,n)=>{n.r(t),n.d(t,{CountUp:()=>s});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},r.apply(this,arguments)},s=function(){function e(e,t,n){var s=this;this.endVal=t,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){s.startTime||(s.startTime=e);var t=e-s.startTime;s.remaining=s.duration-t,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration);var n=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=n?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.options.onCompleteCallback&&s.options.onCompleteCallback()},this.formatNumber=function(e){var t,n,r,i,a=e<0?"-":"";t=Math.abs(e).toFixed(s.options.decimalPlaces);var o=(t+="").split(".");if(n=o[0],r=o.length>1?s.options.decimal+o[1]:"",s.options.useGrouping){i="";for(var l=3,c=0,u=0,d=n.length;u<d;++u)s.options.useIndianSeparators&&4===u&&(l=2,c=1),0!==u&&c%l==0&&(i=s.options.separator+i),c++,i=n[d-u-1]+i;n=i}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]}))),a+s.options.prefix+n+r+s.options.suffix},this.easeOutExpo=function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),r=n.top+window.pageYOffset,s=n.top+n.height+window.pageYOffset;s<t&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||r>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t;if(this.el){var n=this.formattingFn(e);(null===(t=this.options.plugin)||void 0===t?void 0:t.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},5751:(e,t,n)=>{var r=n(5043),s=n(7904);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function l(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,i,a,o=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(o.push(r.value),o.length!==t);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw s}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function f(e){var t=r.useRef(e);return p((function(){t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],g={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},j=function(e){var t=Object.fromEntries(Object.entries(e).filter((function(e){return void 0!==d(e,2)[1]}))),n=r.useMemo((function(){return a(a({},g),t)}),[e]),i=n.ref,o=n.startOnMount,l=n.enableReinitialize,c=n.delay,h=n.onEnd,p=n.onStart,j=n.onPauseResume,x=n.onReset,y=n.onUpdate,b=u(n,m),v=r.useRef(),w=r.useRef(),V=r.useRef(!1),S=f((function(){return function(e,t){var n=t.decimal,r=t.decimals,i=t.duration,a=t.easingFn,o=t.end,l=t.formattingFn,c=t.numerals,u=t.prefix,d=t.separator,h=t.start,p=t.suffix,f=t.useEasing,m=t.useGrouping,g=t.useIndianSeparators,j=t.enableScrollSpy,x=t.scrollSpyDelay,y=t.scrollSpyOnce,b=t.plugin;return new s.CountUp(e,o,{startVal:h,duration:i,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:l,numerals:c,separator:d,prefix:u,suffix:p,plugin:b,useEasing:f,useIndianSeparators:g,useGrouping:m,enableScrollSpy:j,scrollSpyDelay:x,scrollSpyOnce:y})}("string"===typeof i?i:i.current,b)})),N=f((function(e){var t=v.current;if(t&&!e)return t;var n=S();return v.current=n,n})),E=f((function(){var e=function(){return N(!0).start((function(){null===h||void 0===h||h({pauseResume:O,reset:k,start:F,update:A})}))};c&&c>0?w.current=setTimeout(e,1e3*c):e(),null===p||void 0===p||p({pauseResume:O,reset:k,update:A})})),O=f((function(){N().pauseResume(),null===j||void 0===j||j({reset:k,start:F,update:A})})),k=f((function(){N().el&&(w.current&&clearTimeout(w.current),N().reset(),null===x||void 0===x||x({pauseResume:O,start:F,update:A}))})),A=f((function(e){N().update(e),null===y||void 0===y||y({pauseResume:O,reset:k,start:F})})),F=f((function(){k(),E()})),C=f((function(e){o&&(e&&k(),E())}));return r.useEffect((function(){V.current?l&&C(!0):(V.current=!0,C())}),[l,V,C,c,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),r.useEffect((function(){return function(){k()}}),[k]),{start:F,pauseResume:O,reset:k,update:A,getCountUp:N}},x=["className","redraw","containerProps","children","style"];t.Ay=function(e){var t=e.className,n=e.redraw,s=e.containerProps,i=e.children,o=e.style,l=u(e,x),d=r.useRef(null),h=r.useRef(!1),p=j(a(a({},l),{},{ref:d,startOnMount:"function"!==typeof i||0===e.delay,enableReinitialize:!1})),m=p.start,g=p.reset,y=p.update,b=p.pauseResume,v=p.getCountUp,w=f((function(){m()})),V=f((function(t){e.preserveValue||g(),y(t)})),S=f((function(){"function"!==typeof e.children||d.current instanceof Element?v():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){S()}),[S]),r.useEffect((function(){h.current&&V(e.end)}),[e.end,V]);var N=n&&e;return r.useEffect((function(){n&&h.current&&w()}),[w,n,N]),r.useEffect((function(){!n&&h.current&&w()}),[w,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),r.useEffect((function(){h.current=!0}),[]),"function"===typeof i?i({countUpRef:d,start:m,reset:g,update:y,pauseResume:b,getCountUp:v}):r.createElement("span",c({className:t,ref:d,style:o},s),"undefined"!==typeof e.start?v().formattingFn(e.start):"")}},4748:()=>{}}]);
//# sourceMappingURL=824.b0539764.chunk.js.map