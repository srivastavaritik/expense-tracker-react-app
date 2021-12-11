(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),u=(a(14),a(4)),o=a(1),i=(a(15),a(16),function(e){var t="card "+e.className;return l.a.createElement("div",{className:t},e.children)}),m=(a(17),function(e){return l.a.createElement("div",{className:"expenses-filter"},l.a.createElement("div",{className:"expenses-filter__control"},l.a.createElement("label",null,"Filter by year"),l.a.createElement("select",{value:e.yearSelected,onChange:function(t){e.onFilterChange(t.target.value)}},l.a.createElement("option",{value:"ALL"},"ALL"),l.a.createElement("option",{value:"2023"},"2023"),l.a.createElement("option",{value:"2022"},"2022"),l.a.createElement("option",{value:"2021"},"2021"),l.a.createElement("option",{value:"2020"},"2020"),l.a.createElement("option",{value:"2019"},"2019"))))}),s=(a(18),a(19),a(20),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.toLocaleString("en-US",{day:"2-digit"}),n=e.date.getFullYear();return l.a.createElement("div",{className:"expense-date"},l.a.createElement("div",{className:"expense-date__month"},t),l.a.createElement("div",{className:"expense-date__year"},n),l.a.createElement("div",{className:"expense-date__day"},a))}),d=function(e){return l.a.createElement("li",null,l.a.createElement(i,{className:"expense-item"},l.a.createElement(s,{date:e.date}),l.a.createElement("div",{className:"expense-item__description"},l.a.createElement("h2",null,e.title),l.a.createElement("div",{className:"expense-item__price"},"\u20b9",e.amount))))},v=function(e){var t=l.a.createElement("h1",null,"No Expenses Found!");return 0===e.fexp.length?l.a.createElement("h2",{className:"expenses-list__fallback"},t):l.a.createElement("ul",{className:"expenses-list"},e.fexp.map((function(e){return l.a.createElement(d,{key:e.id,title:e.title,amount:e.amount,date:e.date})})))},E=a(8),p=(a(21),function(e){var t="0%";return e.maxValue>0&&(t=e.value/e.maxValue*100+"%"),l.a.createElement("div",{className:"chart-bar"},l.a.createElement("div",{className:"chart-bar__inner"},l.a.createElement("div",{className:"chart-bar__fill",style:{height:t}})),l.a.createElement("div",{className:"chart-bar__lable"},e.lable))}),b=(a(22),function(e){var t=e.dataPoints.map((function(e){return e.value})),a=Math.max.apply(Math,Object(u.a)(t));return l.a.createElement("div",{className:"chart"},e.dataPoints.map((function(e){return l.a.createElement(p,{key:e.lable,value:e.value,maxValue:a,lable:e.lable})})))}),f=function(e){var t,a=[{lable:"Jan",value:0},{lable:"Feb",value:0},{lable:"Mar",value:0},{lable:"Apr",value:0},{lable:"May",value:0},{lable:"Jun",value:0},{lable:"Jul",value:0},{lable:"Aug",value:0},{lable:"Sep",value:0},{lable:"Oct",value:0},{lable:"Nov",value:0},{lable:"Dec",value:0}],n=Object(E.a)(e.expenses);try{for(n.s();!(t=n.n()).done;){var c=t.value;a[c.date.getMonth()].value+=c.amount}}catch(r){n.e(r)}finally{n.f()}return l.a.createElement(b,{dataPoints:a})},x=function(e){var t=Object(n.useState)("2021"),a=Object(o.a)(t,2),c=a[0],r=a[1],u=e.items.filter((function(e){return"ALL"===c?e:e.date.getFullYear().toString()===c}));return console.log(c),l.a.createElement("div",null,l.a.createElement(i,{className:"expenses"},l.a.createElement(m,{yearSelected:c,onFilterChange:function(e){r(e)}}),l.a.createElement(f,{expenses:u}),l.a.createElement(v,{fexp:u})))},g=a(5),h=(a(23),a(24),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),m=i[0],s=i[1],d=Object(n.useState)(""),v=Object(o.a)(d,2),E=v[0],p=v[1];return l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={title:c,amount:+m,date:new Date(E)};e.onSaveExpenseData(a),r(""),s(""),p("")}},l.a.createElement("div",{className:"new-expense__controls"},l.a.createElement("div",{className:"new-expense__control"},l.a.createElement("label",null,"Title"),l.a.createElement("input",{type:"text",value:c,onChange:function(e){r(e.target.value)},placeholder:"Enter Title Here..."})),l.a.createElement("div",{className:"new-expense__control"},l.a.createElement("label",null,"Amount"),l.a.createElement("input",{type:"number",value:m,onChange:function(e){s(e.target.value)},min:"0.01",step:"0.01",placeholder:"Enter Amount Spent..."})),l.a.createElement("div",{className:"new-expense__control"},l.a.createElement("label",null,"Date"),l.a.createElement("input",{type:"date",amount:E,onChange:function(e){p(e.target.value)},min:"2021-12-01",max:"2023-12-31"}))),l.a.createElement("div",{className:"new-expense__actions"},l.a.createElement("button",{onClick:e.onCancel},"Cancel"),l.a.createElement("button",{type:"submit"},"Submit")))}),N=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],r=a[1],u=function(){r(!0)};return l.a.createElement("div",{className:"new-expense"},!c&&l.a.createElement("button",{onClick:u},"Add New Expense"),c&&l.a.createElement(h,{changeEditing:u,onSaveExpenseData:function(t){var a=Object(g.a)(Object(g.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(a),r(!1)},onCancel:function(){r(!1)}}))},_=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],S=function(){var e=Object(n.useState)(_),t=Object(o.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",null,l.a.createElement(N,{onAddExpense:function(e){c((function(t){return[e].concat(Object(u.a)(t))})),console.log("In App.js"),console.log(e),console.log(e.date.getYear()+1900)}}),l.a.createElement(x,{items:a}))};r.a.render(l.a.createElement(S,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.ec5eb09f.chunk.js.map