"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[696],{5560:(e,s,n)=>{n.d(s,{A:()=>o});n(5043);var r=n(5369),l=n(9776),t=n(5475),i=n(579);const o=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("footer",{children:[(0,i.jsxs)("div",{className:"footer",children:[(0,i.jsxs)("div",{className:"footer-links",children:[(0,i.jsx)("h3",{children:"Links"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(t.k2,{to:"/",children:"Home"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.k2,{to:"/doctors",children:"Doctors"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.k2,{to:"/appointments",children:"Appointments"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.k2,{to:"/notifications",children:"Notifications"})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.Vq,{to:"/#contact",children:"Contact Us"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.k2,{to:"/profile",children:"Profile"})})]})]}),(0,i.jsxs)("div",{className:"social",children:[(0,i.jsx)("h3",{children:"Social links"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"facebook",children:(0,i.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)(r.ok6,{})})}),(0,i.jsx)("li",{className:"youtube",children:(0,i.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)(r.Vk6,{})})}),(0,i.jsx)("li",{className:"instagram",children:(0,i.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)(r.ao$,{})})})]})]})]}),(0,i.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,i.jsx)("a",{href:"https://www.linkedin.com/in/jerome-oswald-ebenezer-j/",target:"_blank",rel:"noreferrer",children:"Jerome Oswald Ebenezer J"})," ","\xa9 ",(new Date).getFullYear()]})]})})},8114:(e,s,n)=>{n.d(s,{A:()=>j});var r=n(5043),l=n(3216),t=n(5475),i=n(9776),o=n(9456),c=n(5089),a=n(1009),d=n(5922),h=n(7070),x=n(579);const j=()=>{const[e,s]=(0,r.useState)(!1),n=(0,o.wA)(),j=(0,l.Zp)(),[m,p]=(0,r.useState)(localStorage.getItem("token")||""),[u,f]=(0,r.useState)(localStorage.getItem("token")?(0,h.A)(localStorage.getItem("token")):"");return(0,x.jsxs)("header",{children:[(0,x.jsxs)("nav",{className:e?"nav-active":"",children:[(0,x.jsx)("h2",{className:"nav-logo",children:(0,x.jsx)(t.k2,{to:"/",children:"HealthBooker"})}),(0,x.jsxs)("ul",{className:"nav-links",children:[(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/doctors",children:"Doctors"})}),m&&u.isAdmin&&(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/dashboard/users",children:"Dashboard"})}),m&&!u.isAdmin&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/appointments",children:"Appointments"})}),(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/notifications",children:"Notifications"})}),(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,x.jsx)("li",{children:(0,x.jsx)(i.Vq,{to:"/#contact",children:"Contact Us"})}),(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/profile",children:"Profile"})})]}),m?(0,x.jsx)("li",{children:(0,x.jsx)("span",{className:"btn",onClick:()=>{n((0,c.iA)({})),localStorage.removeItem("token"),j("/login")},children:"Logout"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{className:"btn",to:"/login",children:"Login"})}),(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,x.jsxs)("div",{className:"menu-icons",children:[!e&&(0,x.jsx)(a.ND1,{className:"menu-open",onClick:()=>{s(!0)}}),e&&(0,x.jsx)(d.clO,{className:"menu-close",onClick:()=>{s(!1)}})]})]})}},8696:(e,s,n)=>{n.r(s),n.d(s,{default:()=>d});var r=n(5043),l=(n(4748),n(6213)),t=n(2339),i=n(3216),o=n(8114),c=n(5560),a=n(579);l.A.defaults.baseURL="https://healthbooker-e0dn.onrender.com/api";const d=()=>{const e=(0,i.Zp)(),[s,n]=(0,r.useState)({specialization:"",experience:"",fees:""}),d=e=>{const{name:r,value:l}=e.target;return n({...s,[r]:l})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{}),(0,a.jsx)("section",{className:"register-section flex-center apply-doctor",id:"contact",children:(0,a.jsxs)("div",{className:"register-container flex-center contact",children:[(0,a.jsx)("h2",{className:"form-heading",children:"Apply for Doctor"}),(0,a.jsxs)("form",{className:"register-form ",children:[(0,a.jsx)("input",{type:"text",name:"specialization",className:"form-input",placeholder:"Enter your specialization",value:s.specialization,onChange:d}),(0,a.jsx)("input",{type:"number",name:"experience",className:"form-input",placeholder:"Enter your experience (in years)",value:s.experience,onChange:d}),(0,a.jsx)("input",{type:"number",name:"fees",className:"form-input",placeholder:"Enter your fees  (in dollars)",value:s.fees,onChange:d}),(0,a.jsx)("button",{type:"submit",className:"btn form-btn",onClick:async n=>{n.preventDefault();try{await t.Ay.promise(l.A.post("/doctor/applyfordoctor",{formDetails:s},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Doctor application sent successfully",error:"Unable to send Doctor application",loading:"Sending doctor application..."}),e("/")}catch(r){return r}},children:"apply"})]})]})}),(0,a.jsx)(c.A,{})]})}},4748:()=>{}}]);
//# sourceMappingURL=696.18cddcfb.chunk.js.map