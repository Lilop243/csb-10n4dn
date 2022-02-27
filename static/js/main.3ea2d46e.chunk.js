(this["webpackJsonpcrud-filter-react"]=this["webpackJsonpcrud-filter-react"]||[]).push([[0],{196:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(72),c=t.n(n),m=(t(84),t(16)),s=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/",className:"nav-link"},"DEMO")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/products",className:"nav-link"},"Product List"))))},o=t(1),i=t(4),d=t(74),u=function(e){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"active-cyan-4 mb-4"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search","aria-label":"Search",name:"search",onChange:function(a){e.searchName(a.target.value)}})))},p=function(e){return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h4",null,"Product List")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(u,{searchName:function(a){e.FilterName(a)}})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#createProduct"},"Add Product"))),r.a.createElement("div",null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Price"),r.a.createElement("th",{scope:"col"},"Actions"))),r.a.createElement("tbody",null,e.products.length>0?e.products.map((function(a){return a.is_show?r.a.createElement("tr",{key:a.id},r.a.createElement("th",{scope:"row"},a.id),r.a.createElement("td",null,a.name),r.a.createElement("td",null,r.a.createElement(d.a,{value:a.price,displayType:"text",thousandSeparator:!0,suffix:" VND"})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){e.editProduct(a)},className:"btn btn-primary btn-sm",type:"button","data-toggle":"modal","data-target":"#editProduct"},"Edit"),r.a.createElement("button",{onClick:function(){return e.deleteProduct(a.id)},className:"btn btn-danger btn-sm"},"Delete"))):""})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3},"No Product"))))))},E=t(24),b=t(33),N=t(14),v=N.a().shape({name:N.b().required(),price:N.b().required()}),h=function(e){var a,t,l=Object(E.useForm)({resolver:Object(b.yupResolver)(v)}),n=l.register,c=l.handleSubmit,m=l.errors,s=l.reset;return r.a.createElement("div",{className:"modal fade",id:"createProduct",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Create Product"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-primary"},r.a.createElement("form",{onSubmit:c((function(a){console.log(a),e.addProduct(a),s()}))},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"*Name"),r.a.createElement("input",{type:"text",name:"name",className:"form-control select2",id:"name",placeholder:"Product name",ref:n({required:!0,maxLength:50})}),r.a.createElement("small",{id:"passwordHelp",className:"text-danger"},null===(a=m.name)||void 0===a?void 0:a.message)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"*Price"),r.a.createElement("input",{type:"number",name:"price",className:"form-control select2",id:"price",placeholder:"Price",ref:n({required:!0})}),r.a.createElement("small",{id:"passwordHelp",className:"text-danger"},null===(t=m.price)||void 0===t?void 0:t.message)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Detail"),r.a.createElement("input",{name:"detail",className:"form-control",id:"detail",placeholder:"Detail",ref:n}))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary mr-3","data-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Create"))))))))))))},f=t(78),g=t.n(f),y=t(45),x=N.a().shape({name:N.b().required(),price:N.b().required()}),P=function(e){var a,t,n=Object(l.useState)(e.currentProduct),c=Object(i.a)(n,2),m=c[0],s=c[1],o=Object(E.useForm)({resolver:Object(b.yupResolver)(x)}),d=o.register,u=o.handleSubmit,p=o.errors;Object(l.useEffect)((function(){s(e.currentProduct)}),[e]);return r.a.createElement("div",{className:"modal fade",id:"editProduct",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Edit Product"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(){return e.setEditing(!1)}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-primary"},r.a.createElement("form",{onSubmit:u((function(a){a=Object(y.a)(Object(y.a)({},a),{},{is_show:!0}),e.updateProduct(m.id,a)}))},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"hidden",name:"id",value:m.id,ref:d}),r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"*Name"),r.a.createElement("input",{defaultValue:m.name,type:"text",name:"name",className:"form-control select2",id:"name",placeholder:"Product name",ref:d({required:!0,maxLength:50})}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"*Price"),r.a.createElement("input",{defaultValue:m.price,type:"number",name:"price",className:"form-control select2",id:"price",placeholder:"Price",ref:d({required:!0})}),r.a.createElement("small",{id:"passwordHelp",className:"text-danger"},null===(a=p.name)||void 0===a?void 0:a.message)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Detail"),r.a.createElement("input",{defaultValue:m.detail,name:"detail",className:"form-control",id:"detail",placeholder:"Detail",ref:d}),r.a.createElement("small",{id:"passwordHelp",className:"text-danger"},null===(t=p.price)||void 0===t?void 0:t.message))))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{type:"submit",className:"btn btn-success float-right"},"Update"),r.a.createElement("button",{className:"btn","data-dismiss":"modal","aria-label":"Close",onClick:function(){return e.setEditing(!1)}},"Cancel"))))))))))))},w=function(e){return r.a.createElement("div",{className:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true","data-delay":5e3,style:{position:"absolute",top:"1rem",right:"1rem"}},r.a.createElement("div",{className:"toast-header"},r.a.createElement("button",{type:"button",className:"ml-2 mb-1 close","data-dismiss":"toast","aria-label":"Close"})),r.a.createElement("div",{className:"toast-body"},e.content))},O=function(){var e=Object(l.useState)([{id:1,name:"Iphone 11",price:12e6,detail:"iphone 11 pro max",is_show:!0},{id:2,name:"Iphone 4",price:2e6,detail:"iphone 4 cui",is_show:!0},{id:3,name:"Iphone 5",price:3e6,detail:"iphone 5s",is_show:!0},{id:4,name:"Iphone 6",price:4e6,detail:"iphone 6 plus",is_show:!0},{id:5,name:"Samsung note 9",price:11e6,detail:"Samsung note 9",is_show:!0},{id:6,name:"Iphone 12",price:32e6,detail:"iphone 12 mini",is_show:!0},{id:7,name:"vsmart live 4",price:5e6,detail:"Hang Viet Nam",is_show:!0}]),a=Object(i.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)(""),m=Object(i.a)(c,2),s=m[0],d=m[1],u=Object(l.useState)(),E=Object(i.a)(u,2),b=E[0],N=E[1],v=Object(l.useState)(!1),f=Object(i.a)(v,2),y=f[0],x=f[1];return r.a.createElement(r.a.Fragment,null,y?r.a.createElement(P,{editing:y,setEditing:x,currentProduct:b,updateProduct:function(e,a){var l=Object(o.a)(t),r=l.findIndex((function(a){return a.id===e}));-1!==r&&(l[r]=a,n(l)),d("Update product successfully!"),console.log(s)}}):r.a.createElement(h,{addProduct:function(e){e.id=t.length+1,e.is_show=!0,n([].concat(Object(o.a)(t),[e])),d("Create product successfully!"),console.log(s)}}),r.a.createElement("hr",null),r.a.createElement(p,{products:t,editProduct:function(e){x(!0),N({id:e.id,name:e.name,price:e.price,detail:e.detail})},deleteProduct:function(e){x(!1),n(t.filter((function(a){return a.id!==e})))},FilterName:function(e){var a=t.map((function(a){return a.is_show=-1!==a.name.toLowerCase().search(e.toLowerCase()),a}));n(a)}}),s&&r.a.createElement(g.a,{duration:5e3,persistOnHover:!0},r.a.createElement(w,{content:s})))},j=function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center"},"Welcome!"))},C=function(){return r.a.createElement("footer",{className:"page-footer font-small blue pt-4"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",r.a.createElement(m.b,{to:"https://mdbootstrap.com/"}," MDBootstrap.com")))},I=t(2);function S(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(s,null),r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:"/",component:j}),r.a.createElement(I.a,{exact:!0,path:"/products",component:O})),r.a.createElement(C,null)))}var F=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),F)},79:function(e,a,t){e.exports=t(196)},84:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.3ea2d46e.chunk.js.map