(this.webpackJsonphotel=this.webpackJsonphotel||[]).push([[0],{24:function(t,e,a){},25:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a(2),i=a.n(n),r=a(18),o=a.n(r),l=(a(24),a(4)),g=a(5),u=a(7),c=a(6),d=a(3),p=(a(25),a(9)),b=a.n(p),j="http://localhost/",m=function(t){Object(u.a)(a,t);var e=Object(c.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).login=s.login.bind(Object(d.a)(s)),s.register=s.register.bind(Object(d.a)(s)),s.state={loginData:{},registerData:{},status:null,isLoading:!1,debugResponse:null},s}return Object(g.a)(a,[{key:"login",value:function(){var t=this;this.setState((function(t,e){return{loginData:t.loginData,registerData:t.registerData,status:null,isLoading:!0,debugResponse:t.debugResponse}})),b.a.post("".concat(j,"/login"),{email:this.state.loginData.userName,password:this.state.loginData.password}).then((function(e){var a=e.data;t.setState((function(t,e){return{loginData:t.loginData,registerData:t.registerData,status:{message:a.message,error:"ok"===a.status},isLoading:!1,debugResponse:t.debugResponse}}))}))}},{key:"register",value:function(){var t=this;this.setState((function(t,e){return{loginData:t.loginData,registerData:t.registerData,status:null,isLoading:!0,debugResponse:t.debugResponse}})),b.a.post("".concat(j,"/register"),{user_name:this.state.registerData.userName,email:this.state.registerData.email,password:this.state.registerData.password}).then((function(e){var a=e.data;t.setState((function(t,s){return{loginData:t.loginData,registerData:t.registerData,status:{message:a.message,error:"ok"===a.status},isLoading:!1,debugResponse:e.data}}))}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{className:"login-container",children:[Object(s.jsxs)("div",{className:"login-field-container",children:[Object(s.jsx)("span",{className:"login-label",children:"Email:"}),Object(s.jsx)("input",{type:"text",className:"login-input",onChange:function(e){t.setState((function(t,a){return{registerData:{email:e.target.value,password:t.registerData.password,userName:t.registerData.userName},loginData:t.loginData,status:t.status,isLoading:t.isLoading}}))}}),Object(s.jsx)("span",{className:"login-label",children:"Password:"}),Object(s.jsx)("input",{type:"password",className:"login-input",onChange:function(e){t.setState((function(t,a){return{registerData:{email:t.registerData.email,password:e.target.value,userName:t.registerData.userName},loginData:t.loginData,status:t.status,isLoading:t.isLoading}}))}}),Object(s.jsx)("span",{className:"login-label",children:"User Name:"}),Object(s.jsx)("input",{type:"text",className:"login-input",onChange:function(e){t.setState((function(t,a){return{registerData:{email:t.registerData.email,password:t.registerData.password,userName:e.target.value},loginData:t.loginData,status:t.status,isLoading:t.isLoading}}))}}),Object(s.jsx)("button",{className:"login-button",onClick:function(e){t.register()},children:"Register"})]}),Object(s.jsxs)("div",{className:"login-field-container",children:[Object(s.jsx)("span",{className:"login-label",children:"Email:"}),Object(s.jsx)("input",{type:"text",className:"login-input",onChange:function(e){t.setState((function(t,a){return{loginData:{email:e.target.email,password:t.loginData.password},registerData:t.registerData,status:t.status,isLoading:t.isLoading}}))}}),Object(s.jsx)("span",{className:"login-label",children:"Password:"}),Object(s.jsx)("input",{type:"password",className:"login-input",onChange:function(e){t.setState((function(t,a){return{loginData:{email:t.loginData.email,password:e.target.value},registerData:t.registerData,status:t.status,isLoading:t.isLoading}}))}}),Object(s.jsx)("button",{className:"login-button",onClick:function(e){t.login()},children:"Login"})]}),Object(s.jsx)("span",{children:JSON.stringify(this.state.debugResponse)})]})}}]),a}(i.a.Component),D=function(t){Object(u.a)(a,t);var e=Object(c.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(s.jsx)(m,{})}}]),a}(i.a.Component);o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(D,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.39bc9d3d.chunk.js.map