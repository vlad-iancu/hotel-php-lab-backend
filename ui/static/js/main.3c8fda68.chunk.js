(this.webpackJsonphotel=this.webpackJsonphotel||[]).push([[0],{24:function(t,a,e){},25:function(t,a,e){},43:function(t,a,e){"use strict";e.r(a);var s=e(0),n=e(2),i=e.n(n),r=e(18),o=e.n(r),l=(e(24),e(4)),g=e(5),c=e(7),u=e(6),d=e(3),j=(e(25),e(9)),m=e.n(j),p="http://localhost",D=function(t){Object(c.a)(e,t);var a=Object(u.a)(e);function e(t){var s;return Object(l.a)(this,e),(s=a.call(this,t)).login=s.login.bind(Object(d.a)(s)),s.register=s.register.bind(Object(d.a)(s)),s.state={loginData:{},registerData:{},status:null,isLoading:!1},s}return Object(g.a)(e,[{key:"login",value:function(){var t=this;this.setState((function(t,a){return{loginData:t.loginData,registerData:t.registerData,status:null,isLoading:!0}})),m.a.post("".concat(p,"/login"),{email:this.state.loginData.userName,password:this.state.loginData.password}).then((function(a){var e=a.data;t.setState((function(t,a){return{loginData:t.loginData,registerData:t.registerData,status:{message:e.message,error:"ok"===e.status},isLoading:!1}}))}))}},{key:"register",value:function(){var t=this;this.setState((function(t,a){return{loginData:t.loginData,registerData:t.registerData,status:null,isLoading:!0}})),m.a.post("".concat(p,"/register"),{user_name:this.state.registerData.userName,email:this.state.registerData.email,password:this.state.registerData.password}).then((function(a){var e=a.data;t.setState((function(t,a){return{loginData:t.loginData,registerData:t.registerData,status:{message:e.message,error:"ok"===e.status},isLoading:!1}}))}))}},{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{className:"login-container",children:[Object(s.jsxs)("div",{className:"login-field-container",children:[Object(s.jsx)("span",{className:"login-label",children:"Email:"}),Object(s.jsx)("input",{type:"text",className:"login-input",onChange:function(a){t.setState((function(t,e){return{registerData:{email:a.target.value,password:t.registerData.password,userName:t.registerData.userName},loginData:t.loginData,status:t.status,isLoading:t.isLoading}}))}}),Object(s.jsx)("span",{className:"login-label",children:"Password:"}),Object(s.jsx)("input",{type:"password",className:"login-input",onChange:function(a){t.setState((function(t,e){return{registerData:{email:t.registerData.email,password:a.target.value,userName:t.registerData.userName},loginData:t.loginData,status:t.status,isLoading:t.isLoading}}))}}),Object(s.jsx)("span",{className:"login-label",children:"User Name:"}),Object(s.jsx)("input",{type:"text",className:"login-input",onChange:function(a){t.setState((function(t,e){return{registerData:{email:t.registerData.email,password:t.registerData.password,userName:a.target.value},loginData:t.loginData,status:t.status,isLoading:t.isLoading}}))}}),Object(s.jsx)("button",{className:"login-button",onClick:function(a){t.register()},children:"Register"})]}),Object(s.jsxs)("div",{className:"login-field-container",children:[Object(s.jsx)("span",{className:"login-label",children:"Email:"}),Object(s.jsx)("input",{type:"text",className:"login-input",onChange:function(a){t.setState((function(t,e){return{loginData:{email:a.target.email,password:t.loginData.password},registerData:t.registerData,status:t.status,isLoading:t.isLoading}}))}}),Object(s.jsx)("span",{className:"login-label",children:"Password:"}),Object(s.jsx)("input",{type:"password",className:"login-input",onChange:function(a){t.setState((function(t,e){return{loginData:{email:t.loginData.email,password:a.target.value},registerData:t.registerData,status:t.status,isLoading:t.isLoading}}))}}),Object(s.jsx)("button",{className:"login-button",onClick:function(a){t.login()},children:"Login"})]}),this.state.isLoading&&Object(s.jsx)("div",{className:"progress-bar"})]})}}]),e}(i.a.Component),b=function(t){Object(c.a)(e,t);var a=Object(u.a)(e);function e(){return Object(l.a)(this,e),a.apply(this,arguments)}return Object(g.a)(e,[{key:"render",value:function(){return Object(s.jsx)(D,{})}}]),e}(i.a.Component);o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3c8fda68.chunk.js.map