webpackJsonp([1],[,,,,,,,,,,function(t,e,o){"use strict";var n=o(3),a=o(61),s=o(48),r=o.n(s);n.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Hello",component:r.a}]})},function(t,e){},function(t,e,o){function n(t){o(43)}var a=o(1)(o(31),o(58),n,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(2),a=o.n(n),s=o(52),r=o.n(s),i=o(50),u=o.n(i),d=o(49),c=o.n(d),l=o(51),f=o.n(l),v=o(53),m=o.n(v);e.default={name:"app",components:{"show-todos":r.a,"app-title":u.a,"add-todo":c.a,"remove-todo":f.a,"todo-counter":m.a},data:function(){return{todos:[]}},created:function(){this.getTodos()},methods:{getTodos:function(){var t=this;a.a.get("https://vue-todo-components.firebaseio.com/todos.json").then(function(e){t.todos=e.data;var o=[];for(var n in t.todos)t.todos[n].id=n,o.push(t.todos[n]);t.todos=o}),setTimeout(this.getTodos,500)}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(2),a=o.n(n);e.default={data:function(){return{addTask:"",isActive:!1,errors:[]}},methods:{addTodo:function(){var t=this;""==this.addTask?console.log("cannot be empty"):a.a.post("https://vue-todo-components.firebaseio.com/todos.json",{name:this.addTask,status:this.isActive}).then(function(e){console.log("task added"),t.addTask=""}).catch(function(e){t.errors.push(e)})}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{appTitle:"ToDo List"}},methods:{}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(2),a=o.n(n);e.default={props:{todos:{type:Array,required:!0}},data:function(){return{showTools:!0}},created:function(){},methods:{removeTodo:function(){var t=this.todos.filter(function(t){return 1==t.status});for(var e in t)a.a.delete("https://vue-todo-components.firebaseio.com/todos/"+t[e].id+".json").then(function(t){}).catch(function(t){console.log(t)})}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(2),a=o.n(n);e.default={props:{todos:{type:Array,required:!0}},data:function(){return{errors:[],ischeck:[],dialogVisible:!1}},methods:{preUpdate:function(t,e){var o=this;a.a.patch("https://vue-todo-components.firebaseio.com/todos/"+t+".json",{status:e}).then(function(t){console.log("task updated")}).catch(function(t){o.errors.push(t)})},updateStatus:function(t,e){!0===e?this.preUpdate(t,!1):this.preUpdate(t,!0)},removeTodo:function(t){var e=this;a.a.delete("https://vue-todo-components.firebaseio.com/todos/"+t+".json"),console.log("item removed").catch(function(t){e.errors.push(t)})}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(2);o.n(n);e.default={props:{todos:{type:Array,required:!0}},data:function(){return{title:"Task Remaining",errors:[]}},computed:{todosRemaining:function(){return this.todos.filter(function(t){return 0==t.status}).length}},methods:{}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(3),a=o(10),s=o(12),r=o.n(s),i=o(13),u=o.n(i),d=o(11);o.n(d);n.default.use(u.a),n.default.material.registerTheme("default",{primary:"blue",accent:"red",warn:"red"}),n.default.config.productionTip=!1,new n.default({el:"#app",router:a.a,template:"<App/>",components:{App:r.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,o){function n(t){o(41)}var a=o(1)(o(32),o(56),n,"data-v-4b03c223",null);t.exports=a.exports},function(t,e,o){function n(t){o(40)}var a=o(1)(o(33),o(55),n,null,null);t.exports=a.exports},function(t,e,o){function n(t){o(39)}var a=o(1)(o(34),o(54),n,"data-v-1976f976",null);t.exports=a.exports},function(t,e,o){function n(t){o(44)}var a=o(1)(o(35),o(59),n,"data-v-88e3a7ae",null);t.exports=a.exports},function(t,e,o){function n(t){o(45)}var a=o(1)(o(36),o(60),n,"data-v-abc37bfe",null);t.exports=a.exports},function(t,e,o){function n(t){o(42)}var a=o(1)(o(37),o(57),n,"data-v-7593f8b2",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v(t._s(t.appTitle))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("md-input-container",[o("md-input",{attrs:{id:"addtask",type:"text",placeholder:"Please add your task here!"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addTodo(e)}},model:{value:t.addTask,callback:function(e){t.addTask=e},expression:"addTask"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[t._v(t._s(t.msg))]),t._v(" "),o("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),o("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),o("br"),t._v(" "),o("li",[o("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),o("li",[o("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),o("li",[o("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"md-subheading"},[t._v(t._s(t.title)+": "+t._s(t.todosRemaining))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"phone-viewport",attrs:{id:"app"}},[o("md-toolbar",{attrs:{"md-theme":"default"}},[o("md-button",{staticClass:"md-icon-button"},[o("md-icon",[t._v("menu")])],1),t._v(" "),o("app-title"),t._v(" "),o("md-button",{staticClass:"md-icon-button"},[o("md-icon",[t._v("favorite")])],1)],1),t._v(" "),o("md-layout",{attrs:{"md-align":"center"}},[o("md-layout",{attrs:{"md-align":"center","md-flex":"100"}},[o("md-layout",{staticStyle:{"margin-top":"30px"},attrs:{"md-align":"center","md-flex":"35"}},[o("todo-counter",{attrs:{todos:t.todos}})],1)],1),t._v(" "),o("md-layout",{attrs:{"md-align":"center","md-flex":"100"}},[o("md-layout",{attrs:{"md-align":"center","md-flex":"35"}},[o("add-todo")],1)],1),t._v(" "),o("md-layout",{attrs:{"md-align":"center","md-flex":"100"}},[o("md-layout",{attrs:{"md-align":"center","md-flex":"35"}},[o("show-todos",{attrs:{todos:t.todos}})],1)],1),t._v(" "),o("md-layout",{attrs:{"md-align":"center","md-flex":"100"}},[o("md-layout",{attrs:{"md-align":"center","md-flex":"35"}},[o("remove-todo",{attrs:{todos:t.todos}})],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("md-button",{staticClass:"md-fab md-fab-bottom-right",on:{click:t.removeTodo}},[o("md-icon",[t._v("clear")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("md-list",t._l(t.todos,function(e){return o("md-list-item",{class:{active:e.status},on:{click:function(o){t.updateStatus(e.id,e.status)}}},[1==e.status?o("md-icon",{staticClass:"md-accent"},[t._v("sentiment_very_satisfied")]):o("md-icon",[t._v("sentiment_neutral")]),t._v(" "),o("span",[o("label",[t._v(t._s(e.name))])])],1)}))},staticRenderFns:[]}}],[38]);
//# sourceMappingURL=app.2d996a0a5998ecff855c.js.map