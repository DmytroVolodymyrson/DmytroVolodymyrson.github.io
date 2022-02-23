(function(e){function t(t){for(var s,c,o=t[0],i=t[1],u=t[2],d=0,b=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(s=!1)}s&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},r={app:0},a=[];function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/todo/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23"),r=n("5502"),a={getTasks:function(e){return e.tasks}},c=n("5530"),o=n("1da1"),i=(n("96cf"),n("d3b7"),n("b0c0"),{registerTask:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://todo-9ed2d-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",{method:"POST",body:JSON.stringify(t)});case 2:return s=n.sent,n.next=5,s.json();case 5:r=n.sent,t=Object(c["a"])(Object(c["a"])({},t),{},{id:r.name}),e.commit("registerTask",t);case 8:case"end":return n.stop()}}),n)})))()},setTasks:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.commit("setTasks",t);case 1:case"end":return n.stop()}}),n)})))()},loadTasks:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,s,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://todo-9ed2d-default-rtdb.europe-west1.firebasedatabase.app/tasks.json");case 2:return n=t.sent,t.next=5,n.json();case 5:for(a in s=t.sent,r=[],s)r.unshift({id:a,title:s[a].title,descr:s[a].descr,done:s[a].done});e.commit("setTasks",r);case 9:case"end":return t.stop()}}),t)})))()},completeTask:function(e,t){fetch("https://todo-9ed2d-default-rtdb.europe-west1.firebasedatabase.app/tasks/".concat(t,".json"),{method:"PATCH",body:JSON.stringify({done:!0})}),e.commit("completeTask",t)},deleteTask:function(e,t){fetch("https://todo-9ed2d-default-rtdb.europe-west1.firebasedatabase.app/tasks/".concat(t,".json"),{method:"DELETE"}),e.commit("deleteTask",t)}}),u=(n("7db0"),n("c740"),n("fb6a"),{registerTask:function(e,t){e.tasks.unshift(t)},setTasks:function(e,t){e.tasks=t},completeTask:function(e,t){e.tasks.find((function(e){return e.id===t})).done=!0},deleteTask:function(e,t){var n=e.tasks.findIndex((function(e){return e.id===t}));e.tasks.slice(n,1)}}),l={state:function(){return{tasks:[]}},actions:i,getters:a,mutations:u},d=Object(r["a"])({modules:{tasks:l}}),b=d,p=n("6c02"),f={class:"task-list__btns btns-list "},O=Object(s["f"])("Create new task"),j={class:"task-list"};function k(e,t,n,r,a,c){var o=Object(s["u"])("router-link"),i=Object(s["u"])("the-task");return Object(s["p"])(),Object(s["d"])(s["a"],null,[Object(s["g"])("div",f,[Object(s["g"])("button",{class:"btn",onClick:t[1]||(t[1]=function(e){return r.loadTasks()})},"Reload"),Object(s["g"])(o,{class:"btn",to:"/new-task"},{default:Object(s["A"])((function(){return[O]})),_:1}),r.isCompleted?(Object(s["p"])(),Object(s["d"])("button",{key:1,class:"btn",onClick:t[3]||(t[3]=function(){return r.seeAll&&r.seeAll.apply(r,arguments)})},"See tasks to do")):(Object(s["p"])(),Object(s["d"])("button",{key:0,class:"btn",onClick:t[2]||(t[2]=function(){return r.seeCompleted&&r.seeCompleted.apply(r,arguments)})}," See done tasks "))]),Object(s["g"])("ul",j,[(Object(s["p"])(!0),Object(s["d"])(s["a"],null,Object(s["t"])(r.filteredTasks.list,(function(e){return Object(s["p"])(),Object(s["d"])(i,{key:e.id,class:"task",title:e.title,descr:e.descr,id:e.id,done:e.done,onDeleteTask:r.deleteTask,onDoneTask:r.completeTask},null,8,["title","descr","id","done","onDeleteTask","onDoneTask"])})),128))])],64)}n("4de4");var m={class:"task"},v={class:"task__title title"},h={class:"task__descr descr"},g={class:"task__btns btns-list"},T=Object(s["f"])("See more");function w(e,t,n,r,a,c){var o=Object(s["u"])("router-link");return Object(s["p"])(),Object(s["d"])("li",m,[Object(s["g"])("div",v,Object(s["w"])(n.title),1),Object(s["g"])("div",h,Object(s["w"])(n.descr),1),Object(s["g"])("div",g,[Object(s["g"])(o,{class:"btn",to:r.taskDetailLink},{default:Object(s["A"])((function(){return[T]})),_:1},8,["to"]),n.done?Object(s["e"])("",!0):(Object(s["p"])(),Object(s["d"])("button",{key:0,class:"btn",onClick:t[1]||(t[1]=function(e){return r.doneTask()})},"Done")),Object(s["g"])("button",{class:"btn btn_red",onClick:t[2]||(t[2]=function(e){return r.deleteTask()})},"Delete")])])}var y={props:["title","descr","id","done"],setup:function(e,t){var n=Object(p["c"])();function r(){t.emit("deleteTask",e.id)}function a(){t.emit("doneTask",e.id)}var c=Object(s["b"])((function(){return n.path+"/"+e.id}));return{deleteTask:r,doneTask:a,taskDetailLink:c}}};y.render=w;var _=y,x={components:{TheTask:_},setup:function(){var e=Object(r["b"])(),t=Object(s["r"])({list:[]});b(),t.list=e.getters.getTasks;var n=Object(s["s"])(!1);function a(n){t.list=t.list.filter((function(e){return e.id!=n})),e.dispatch("deleteTask",n)}function c(n){t.list.find((function(e){return e.id===n})).done=!0,e.dispatch("completeTask",n)}function i(){d(!0),n.value=!0}function u(){d(),n.value=!1}var l=Object(s["r"])({list:[]});function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];l.list=t.list.filter((function(t){return t.done==e}))}function b(){return p.apply(this,arguments)}function p(){return p=Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.dispatch("loadTasks");case 2:t.list=e.getters.getTasks;case 3:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}return d(),Object(s["z"])(t,(function(){n.value?d(!0):d()})),{tasks:t,deleteTask:a,completeTask:c,seeCompleted:i,filteredTasks:l,seeAll:u,isCompleted:n,store:e,loadTasks:b}},beforeUnmount:function(){this.store.dispatch("setTasks",this.tasks.list)}};x.render=k;var S=x,D={class:"task-page"},C={class:"tp__title title"},P={class:"tp__descr descr"};function R(e,t,n,r,a,c){return Object(s["p"])(),Object(s["d"])("div",D,[Object(s["g"])("h2",C,Object(s["w"])(r.selectedTask.title),1),Object(s["g"])("div",P,Object(s["w"])(r.selectedTask.descr),1)])}var A={props:["id"],setup:function(e){var t=Object(r["b"])(),n=t.getters.getTasks.find((function(t){return t.id===e.id}));return{selectedTask:n}}};A.render=R;var J=A,M={class:"new-task"},E=Object(s["g"])("h2",{class:"nt__title title"},"Create New Task",-1);function L(e,t,n,r,a,c){var o=Object(s["u"])("task-form");return Object(s["p"])(),Object(s["d"])("section",M,[E,Object(s["g"])(o,{onSaveData:r.saveData},null,8,["onSaveData"])])}n("ac1f"),n("5319");var N=Object(s["g"])("button",{class:"btn"},"Submit",-1);function U(e,t,n,r,a,c){return Object(s["p"])(),Object(s["d"])("form",{action:"#",class:"task-form",onSubmit:t[3]||(t[3]=Object(s["C"])((function(){return r.emmitSubmit&&r.emmitSubmit.apply(r,arguments)}),["prevent"]))},[Object(s["B"])(Object(s["g"])("input",{type:"text",class:"input",placeholder:"Title","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.title=e})},null,512),[[s["y"],r.title]]),Object(s["B"])(Object(s["g"])("textarea",{cols:"1",rows:"5",class:"input",placeholder:"Description","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.descr=e})},null,512),[[s["y"],r.descr]]),N],32)}var B={emits:["save-data"],setup:function(e,t){var n=Object(s["s"])(""),r=Object(s["s"])("");function a(){var e={title:n.value,descr:r.value,done:!1};t.emit("save-data",e)}return{title:n,descr:r,emmitSubmit:a}}};B.render=U;var H=B,V={components:{TaskForm:H},setup:function(){var e=Object(r["b"])(),t=Object(p["d"])();function n(n){e.dispatch("registerTask",n),t.replace("/tasks")}return{saveData:n}}};V.render=L;var z=V,F=Object(p["a"])({history:Object(p["b"])(),routes:[{path:"/",redirect:"/tasks"},{path:"/tasks",component:S},{path:"/tasks/:id",props:!0,component:J},{path:"/new-task",component:z}]}),I=F,q={class:"section-1 section-padding"},G={class:"fixed"};function K(e,t,n,r,a,c){var o=Object(s["u"])("the-header"),i=Object(s["u"])("router-view");return Object(s["p"])(),Object(s["d"])(s["a"],null,[Object(s["g"])(o),Object(s["g"])("section",q,[Object(s["g"])("div",G,[Object(s["g"])(i)])])],64)}var Q={class:"header"},W={class:"fixed"},X=Object(s["f"])("TODO");function Y(e,t){var n=Object(s["u"])("router-link");return Object(s["p"])(),Object(s["d"])("header",Q,[Object(s["g"])("div",W,[Object(s["g"])(n,{to:"/",class:"header__logo"},{default:Object(s["A"])((function(){return[X]})),_:1})])])}const Z={};Z.render=Y;var $=Z,ee={components:{TheHeader:$}};ee.render=K;var te=ee,ne=Object(s["c"])(te);ne.use(b),ne.use(I),ne.mount("#app")}});
//# sourceMappingURL=app.14c2e017.js.map