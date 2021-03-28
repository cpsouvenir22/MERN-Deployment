(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(19),l=c.n(a),r=(c(25),c(26),c(27),c(3)),i=c(4),o=c(5),j=c.n(o),d=c(0),b=function(e){var t=Object(n.useState)(!1),c=Object(i.a)(t,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){j.a.get("http://localhost:8000/api/Pets").then((function(e){return a(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),s?Object(d.jsxs)("div",{className:"d-flex flex-wrap justify-content-around col-12 mx-auto",children:[Object(d.jsx)("div",{className:"d-flex flex-wrap justify-content-end col-12",children:Object(d.jsx)(r.a,{to:"/new",children:"Add a Pet to the Shelter"})}),Object(d.jsx)("div",{className:"d-flex flex-wrap justify-content-start col-12",children:Object(d.jsx)("h4",{children:"These Pets are looking for a good home"})}),Object(d.jsx)("br",{}),Object(d.jsxs)("table",{className:"table table-bordered col-10 mx",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Actions"})]})}),Object(d.jsx)("tbody",{children:s.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.type}),Object(d.jsxs)("td",{children:[Object(d.jsx)(r.a,{to:"/show/".concat(e._id),children:" Details "})," |",Object(d.jsx)(r.a,{to:"/edit/".concat(e._id),children:" Edit "})]})]},t)}))})]})]}):Object(d.jsx)("h2",{children:"Loading"})},h=c(6),u=c(8),x=function(e){var t=e.inputs,c=e.handleInputChange,n=e.handleSubmit,s=e.submitValue,a=e.errors;return Object(d.jsx)("div",{className:"d-flex flex-wrap justify-content-start col-12",children:Object(d.jsxs)("form",{onSubmit:n,className:"col-6 mx-auto",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Pet Name:"}),Object(d.jsx)("input",{type:"text",name:"name",className:"form-control",onChange:c,value:t.name}),Object(d.jsx)("span",{className:"text-danger",children:a.name?a.name.message:""})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"type",children:"Pet Type:"}),Object(d.jsx)("input",{type:"text",name:"type",className:"form-control",onChange:c,value:t.type}),Object(d.jsx)("span",{className:"text-danger",children:a.type?a.type.message:""})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"description",children:"Pet Description:"}),Object(d.jsx)("input",{type:"text",name:"description",className:"form-control",onChange:c,value:t.description}),Object(d.jsx)("span",{className:"text-danger",children:a.description?a.description.message:""})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"skill",children:"Skill 1:"}),Object(d.jsx)("input",{type:"text",name:"skill",className:"form-control",onChange:c,value:t.skill}),Object(d.jsx)("span",{className:"text-danger",children:a.skill?a.skill.message:""})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"skill2",children:"Skill 2:"}),Object(d.jsx)("input",{type:"text",name:"skill2",className:"form-control",onChange:c,value:t.skill2}),Object(d.jsx)("span",{className:"text-danger",children:a.skill2?a.skill2.message:""})]}),Object(d.jsx)("input",{type:"submit",value:s,className:"btn btn-primary"})]})})},O=function(e){var t=Object(n.useState)({name:"",type:"",description:"",skill:"",skill2:""}),c=Object(i.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)({name:"",type:"",description:"",skill:"",skill2:""}),o=Object(i.a)(l,2),b=o[0],O=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"d-flex flex-wrap justify-content-start col-12 mx-3",children:Object(d.jsx)("h4",{children:"Know a pet needing a home?"})}),Object(d.jsx)(x,{inputs:s,handleInputChange:function(e){a(Object(u.a)(Object(u.a)({},s),{},Object(h.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),j.a.post("http://localhost:8000/api/Pets",s).then((function(e){return Object(r.c)("/")})).catch((function(e){O(e.response.data.errors),console.log(e)}))},errors:b,submitValue:"Submit"})]})},m=function(e){var t=Object(n.useState)(!1),c=Object(i.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(0),o=Object(i.a)(l,2),b=o[0],h=o[1];Object(n.useEffect)((function(){j.a.get("http://localhost:8000/api/Pets/".concat(e.id)).then((function(e){return a(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"d-flex flex-wrap justify-content-between col-11 p-4",children:[Object(d.jsxs)("h2",{className:"card-title",children:["Details About: ",s.name]}),Object(d.jsxs)("button",{className:"btn btn-danger btn-outline-dark ",onClick:function(){return e=s._id,void j.a.delete("http://localhost:8000/api/Pets/".concat(e)).then((function(e){return a(e.data.results)})).then((function(e){return Object(r.c)("/")})).catch((function(e){return console.log(e)}));var e},children:["Adopt ",s.name]})]}),Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"card-body text-center",children:[Object(d.jsxs)("h5",{className:"card-text text-left",children:["Pet Type: ",s.type]}),Object(d.jsx)("br",{}),Object(d.jsxs)("h5",{className:"card-text text-left",children:["Description: ",s.description]}),Object(d.jsx)("br",{}),Object(d.jsxs)("h5",{className:"card-text text-left",children:["Skills: ",Object(d.jsx)("br",{}),s.skill," ",Object(d.jsx)("br",{})," ",s.skill2," "]})]})}),Object(d.jsxs)("button",{onClick:function(){h((function(e){return e+1}))},children:["Like ",s.name]})," ",Object(d.jsxs)("h5",{children:[b," Likes"]})]})},p=function(e){var t=Object(n.useState)(!1),c=Object(i.a)(t,2),s=c[0],a=c[1];Object(n.useEffect)((function(){j.a.put("http://localhost:8000/api/Pets/".concat(e.id)).then((function(e){return a(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]);var l=Object(n.useState)({name:"",type:"",description:"",skill:"",skill2:""}),o=Object(i.a)(l,2),b=o[0],O=o[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h2",{className:"d-flex flex-wrap justify-content-center col-12",children:["Edit ",s.name]}),s?Object(d.jsx)(x,{inputs:s,title:"Edit",submitValue:"Edit Pet",handleInputChange:function(e){a(Object(u.a)(Object(u.a)({},s),{},Object(h.a)({},e.target.name,e.target.value)))},handleSubmit:function(t){t.preventDefault(),j.a.put("http://localhost:8000/api/Pets/".concat(e.id),s).then((function(e){return Object(r.c)("/")})).catch((function(e){console.log(e.response.data.errors),O(e.response.data.errors)}))},errors:b}):Object(d.jsx)("h2",{children:"Loading"})]})};var f=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"d-flex flex-wrap justify-content-between col-11 mx-3 p-2",children:[Object(d.jsx)("h1",{children:"Pet Shelter "}),Object(d.jsx)(r.a,{to:"/",children:"Back to Home"})]}),Object(d.jsxs)(r.b,{children:[Object(d.jsx)(b,{path:"/"}),Object(d.jsx)(O,{path:"/new"}),Object(d.jsx)(m,{path:"/show/:id"}),Object(d.jsx)(p,{path:"/edit/:id"})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),a(e),l(e)}))};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[53,1,2]]]);
//# sourceMappingURL=main.f80649ff.chunk.js.map