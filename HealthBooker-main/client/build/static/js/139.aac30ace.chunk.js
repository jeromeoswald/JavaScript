"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[139],{6760:(e,n,l)=>{l.d(n,{A:()=>s});l(5043);var i=l(579);const s=()=>(0,i.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})},5560:(e,n,l)=>{l.d(n,{A:()=>r});l(5043);var i=l(5369),s=l(9776),t=l(5475),o=l(579);const r=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("footer",{children:[(0,o.jsxs)("div",{className:"footer",children:[(0,o.jsxs)("div",{className:"footer-links",children:[(0,o.jsx)("h3",{children:"Links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/",children:"Home"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/doctors",children:"Doctors"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/appointments",children:"Appointments"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/notifications",children:"Notifications"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.Vq,{to:"/#contact",children:"Contact Us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/profile",children:"Profile"})})]})]}),(0,o.jsxs)("div",{className:"social",children:[(0,o.jsx)("h3",{children:"Social links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"facebook",children:(0,o.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(i.ok6,{})})}),(0,o.jsx)("li",{className:"youtube",children:(0,o.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(i.Vk6,{})})}),(0,o.jsx)("li",{className:"instagram",children:(0,o.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(i.ao$,{})})})]})]})]}),(0,o.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,o.jsx)("a",{href:"https://www.linkedin.com/in/jerome-oswald-ebenezer-j/",target:"_blank",rel:"noreferrer",children:"Jerome Oswald Ebenezer J"})," ","\xa9 ",(new Date).getFullYear()]})]})})},8114:(e,n,l)=>{l.d(n,{A:()=>x});var i=l(5043),s=l(3216),t=l(5475),o=l(9776),r=l(9456),d=l(5089),c=l(1009),a=l(5922),h=l(7070),j=l(579);const x=()=>{const[e,n]=(0,i.useState)(!1),l=(0,r.wA)(),x=(0,s.Zp)(),[m,u]=(0,i.useState)(localStorage.getItem("token")||""),[v,p]=(0,i.useState)(localStorage.getItem("token")?(0,h.A)(localStorage.getItem("token")):"");return(0,j.jsxs)("header",{children:[(0,j.jsxs)("nav",{className:e?"nav-active":"",children:[(0,j.jsx)("h2",{className:"nav-logo",children:(0,j.jsx)(t.k2,{to:"/",children:"HealthBooker"})}),(0,j.jsxs)("ul",{className:"nav-links",children:[(0,j.jsx)("li",{children:(0,j.jsx)(t.k2,{to:"/",children:"Home"})}),(0,j.jsx)("li",{children:(0,j.jsx)(t.k2,{to:"/doctors",children:"Doctors"})}),m&&v.isAdmin&&(0,j.jsx)("li",{children:(0,j.jsx)(t.k2,{to:"/dashboard/users",children:"Dashboard"})}),m&&!v.isAdmin&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(t.k2,{to:"/appointments",children:"Appointments"})}),(0,j.jsx)("li",{children:(0,j.jsx)(t.k2,{to:"/notifications",children:"Notifications"})}),(0,j.jsx)("li",{children:(0,j.jsx)(t.k2,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,j.jsx)("li",{children:(0,j.jsx)(o.Vq,{to:"/#contact",children:"Contact Us"})}),(0,j.jsx)("li",{children:(0,j.jsx)(t.k2,{to:"/profile",children:"Profile"})})]}),m?(0,j.jsx)("li",{children:(0,j.jsx)("span",{className:"btn",onClick:()=>{l((0,d.iA)({})),localStorage.removeItem("token"),x("/login")},children:"Logout"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(t.k2,{className:"btn",to:"/login",children:"Login"})}),(0,j.jsx)("li",{children:(0,j.jsx)(t.k2,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,j.jsxs)("div",{className:"menu-icons",children:[!e&&(0,j.jsx)(c.ND1,{className:"menu-open",onClick:()=>{n(!0)}}),e&&(0,j.jsx)(a.clO,{className:"menu-close",onClick:()=>{n(!1)}})]})]})}},5139:(e,n,l)=>{l.r(n),l.d(n,{default:()=>u});var i=l(5043),s=l(6760),t=l(5560),o=l(8114),r=l(5789),d=l(5089),c=l(8271),a=l(9456),h=l(7070),j=l(6213),x=l(2339),m=(l(8067),l(579));const u=()=>{var e;const[n,l]=(0,i.useState)([]),u=(0,a.wA)(),{loading:v}=(0,a.d4)((e=>e.root)),{userId:p}=(0,h.A)(localStorage.getItem("token")),k=async e=>{try{u((0,d.r1)(!0));const e=await(0,r.A)("/appointment/getallappointments?search=".concat(p));l(e),u((0,d.r1)(!1))}catch(n){}};(0,i.useEffect)((()=>{k()}),[]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.A,{}),v?(0,m.jsx)(c.A,{}):(0,m.jsxs)("section",{className:"container notif-section",children:[(0,m.jsx)("h2",{className:"page-heading",children:"Your Appointments"}),n.length>0?(0,m.jsx)("div",{className:"appointments",children:(0,m.jsxs)("table",{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"S.No"}),(0,m.jsx)("th",{children:"Doctor"}),(0,m.jsx)("th",{children:"Patient"}),(0,m.jsx)("th",{children:"Appointment Date"}),(0,m.jsx)("th",{children:"Appointment Time"}),(0,m.jsx)("th",{children:"Booking Date"}),(0,m.jsx)("th",{children:"Booking Time"}),(0,m.jsx)("th",{children:"Status"}),p===(null===(e=n[0].doctorId)||void 0===e?void 0:e._id)?(0,m.jsx)("th",{children:"Action"}):(0,m.jsx)(m.Fragment,{})]})}),(0,m.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map(((e,n)=>{var l,i,s,t,o;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:n+1}),(0,m.jsx)("td",{children:(null===e||void 0===e||null===(l=e.doctorId)||void 0===l?void 0:l.firstname)+" "+(null===e||void 0===e||null===(i=e.doctorId)||void 0===i?void 0:i.lastname)}),(0,m.jsx)("td",{children:(null===e||void 0===e||null===(s=e.userId)||void 0===s?void 0:s.firstname)+" "+(null===e||void 0===e||null===(t=e.userId)||void 0===t?void 0:t.lastname)}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.date}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.time}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.createdAt.split("T")[0]}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[1].split(".")[0]}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.status}),p===(null===e||void 0===e||null===(o=e.doctorId)||void 0===o?void 0:o._id)?(0,m.jsx)("td",{children:(0,m.jsx)("button",{className:"btn user-btn accept-btn ".concat("Completed"===(null===e||void 0===e?void 0:e.status)?"disable-btn":""),disabled:"Completed"===(null===e||void 0===e?void 0:e.status),onClick:()=>(async e=>{try{var n,l,i;await x.Ay.promise(j.A.put("/appointment/completed",{appointid:null===e||void 0===e?void 0:e._id,doctorId:null===e||void 0===e||null===(n=e.doctorId)||void 0===n?void 0:n._id,doctorname:"".concat(null===e||void 0===e||null===(l=e.userId)||void 0===l?void 0:l.firstname," ").concat(null===e||void 0===e||null===(i=e.userId)||void 0===i?void 0:i.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."}),k()}catch(s){return s}})(e),children:"Complete"})}):(0,m.jsx)(m.Fragment,{})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,m.jsx)(s.A,{})]}),(0,m.jsx)(t.A,{})]})}},8067:()=>{}}]);
//# sourceMappingURL=139.aac30ace.chunk.js.map