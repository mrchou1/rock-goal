(this["webpackJsonprock-app"]=this["webpackJsonprock-app"]||[]).push([[0],{103:function(e,t,n){},105:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(11),o=n.n(s),r=(n(92),n.p,n(93),n.p,n(18)),i=n(16),l=n(22),u=n(21),j=(n(94),n(76)),h=n(140),d=n(141),b=n(30),m=n.n(b),O=n(75),p=n.n(O),v=n(27),f=n(2),x=m.a[800],N=Object(j.a)({palette:{primary:{main:p.a[50]},secondary:{main:x}}}),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={routerInfos:[],routerGoalAccount:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"\u62b1\u77f3\u5927\u4e82\u9b25\u8a18\u5206\u677f"}),Object(f.jsx)("h4",{children:"\u6b61\u8fce\u4f7f\u7528"}),Object(f.jsxs)(h.a,{theme:N,children:[Object(f.jsx)(v.b,{to:"/quikStart",children:Object(f.jsx)(d.a,{className:"mb-2",variant:"contained",color:"secondary",children:"\u5feb\u901f\u958b\u59cb >"})}),Object(f.jsx)("br",{}),Object(f.jsx)(v.b,{to:"/OptionStart/settingPerson",children:Object(f.jsx)(d.a,{variant:"contained",color:"primary",children:"\u958b\u59cb >"})})]})]})}}]),n}(a.Component),g=(n(103),n(14)),A=n(8),k=n(5),S=n.n(k),y=(n(105),n(57)),R=n.n(y);var w,I=n(152),z=n(149),G=n(148),D=n(58),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={routerInfos:[],routerGoalAccounts:[],addName:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){if("string"===typeof sessionStorage.getItem("routerGoalAccounts")){var e=JSON.parse(sessionStorage.getItem("routerGoalAccounts")||"{}");this.setState({routerGoalAccounts:e})}else this.initUserAccount()}},{key:"initUserAccount",value:function(){var e=function(){var e={topCount:0,zone2Count:0,zone1Count:0,zone1Att:0,zone2Att:0,startAtt:0},t=[];return t.push(Object(A.a)({name:"\u767e\u516b"},S.a.cloneDeep(e))),t.push(Object(A.a)({name:"\u53f2\u86cb"},S.a.cloneDeep(e))),t.push(Object(A.a)({name:"\u7c73\u8e22"},S.a.cloneDeep(e))),t.push(Object(A.a)({name:"\u80e1\u771f"},S.a.cloneDeep(e))),t.push(Object(A.a)({name:"KAI B"},S.a.cloneDeep(e))),t.push(Object(A.a)({name:"\u5b6b\u8778"},S.a.cloneDeep(e))),t.push(Object(A.a)({name:"Yolin"},S.a.cloneDeep(e))),t.push(Object(A.a)({name:"ED"},S.a.cloneDeep(e))),t}();this.setState({routerGoalAccounts:e})}},{key:"handleNameChange",value:function(e,t){var n=this.state.routerGoalAccounts;n[e].name=t.target.value,this.setState({routerGoalAccounts:n})}},{key:"handleDeleteAccount",value:function(e){var t=this.state.routerGoalAccounts;delete t[e],this.setState({routerGoalAccounts:t})}},{key:"handleSearchNameChange",value:function(e){this.setState({addName:e})}},{key:"addAccount",value:function(){var e=this.state,t=e.addName,n=e.routerGoalAccounts;n.push(Object(A.a)({name:t},S.a.cloneDeep({topCount:0,zone2Count:0,zone1Count:0,zone1Att:0,zone2Att:0,startAtt:0}))),this.setState({routerGoalAccounts:n})}},{key:"handleNextRoute",value:function(){var e=this.state.routerGoalAccounts;console.log(S.a.filter(e,(function(e){return null!==e}))),sessionStorage.setItem("routerGoalAccounts",JSON.stringify(S.a.filter(e,(function(e){return!S.a.isEmpty(e)}))))}},{key:"render",value:function(){var e=this,t=this.state,n=t.routerGoalAccounts,c=t.addName;return Object(f.jsxs)(a.Fragment,{children:[Object(f.jsx)("h2",{children:"\u8a2d\u5b9a\u4eba\u54e1"}),Object(f.jsxs)("div",{className:"rock-person__new-person",children:[Object(f.jsx)(I.a,{id:"new-person",placeholder:"\u65b0\u589e\u4eba\u54e1\u540d\u7a31",variant:"outlined",value:c,className:"rock-person__new-person__input",onChange:function(t){e.handleSearchNameChange(t.target.value)}}),Object(f.jsx)(d.a,{variant:"contained",style:{color:"white",background:D.a[500]},onClick:function(){e.addAccount()},children:"\u65b0\u589e"})]}),Object(f.jsx)(z.a,{className:"rock-person__list",children:Object.keys(n).map((function(t){return Object(f.jsx)(G.a,{classNames:"move",timeout:{enter:300,exit:300},children:Object(f.jsxs)("div",{className:"rock-person__item",children:[Object(f.jsx)(I.a,{required:!0,id:"name-input-".concat(t),value:n[t].name,label:"\u540d\u7a31",onChange:function(n){e.handleNameChange(t,n)}},t),Object(f.jsx)(d.a,{variant:"contained",color:"secondary",className:"ic-btn",onClick:function(){e.handleDeleteAccount(t)},children:Object(f.jsx)(R.a,{})})]})},t)}))}),Object(f.jsx)(v.b,{to:"/OptionStart/settingRoute",onClick:function(){return e.handleNextRoute()},children:Object(f.jsx)(d.a,{variant:"contained",color:"primary",children:"\u4e0b\u4e00\u6b65 >"})})]})}}]),n}(a.Component),E=(n(111),n(146)),V=n(150),Z=n(147),P=n(151);!function(e){e[e.V0=0]="V0",e[e.V1=1]="V1",e[e.V2=2]="V2",e[e.V3=3]="V3",e[e.V4=4]="V4",e[e.V5=5]="V5",e[e.V6=6]="V6"}(w||(w={}));var T,W=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={routerInfos:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){if("string"===typeof sessionStorage.getItem("routerInfos")){var e=JSON.parse(sessionStorage.getItem("routerInfos")||"{}");this.setState({routerInfos:e})}}},{key:"addRoute",value:function(){var e=this.state.routerInfos;e.push({level:w.V0,color:""}),this.setState({routerInfos:e})}},{key:"handleRouteNameChange",value:function(e,t){var n=this.state.routerInfos;n[e].color=t,this.setState({routerInfos:n})}},{key:"handleDeleteRoute",value:function(e){var t=this.state.routerInfos;delete t[e],this.setState({routerInfos:t})}},{key:"handleNextRoute",value:function(){var e=this.state.routerInfos;sessionStorage.setItem("routerInfos",JSON.stringify(S.a.filter(e,(function(e){return!S.a.isEmpty(e)}))))}},{key:"handleChangeLevel",value:function(e,t){var n=this.state.routerInfos;n[e].level=t,this.setState({routerInfos:n})}},{key:"render",value:function(){var e=this,t=this.state,n=t.routerInfos;t.addName;return Object(f.jsxs)(a.Fragment,{children:[Object(f.jsx)("h2",{children:"\u8a2d\u5b9a\u8def\u7dda"}),Object(f.jsx)("div",{className:"rock-person__new-person",children:Object(f.jsx)(d.a,{variant:"contained",style:{color:"white",background:D.a[500]},onClick:function(){e.addRoute()},children:"\u65b0\u589e\u8def\u7dda"})}),Object(f.jsx)(z.a,{className:"rock-person__list",children:Object.keys(n).map((function(t){return Object(f.jsx)(G.a,{classNames:"move",timeout:{enter:300,exit:300},children:Object(f.jsxs)("div",{className:"rock-person__item",children:[Object(f.jsxs)(E.a,{variant:"filled",children:[Object(f.jsx)(V.a,{id:"select-anme",children:"\u6210\u7e3e"}),Object(f.jsxs)(Z.a,{labelId:"select-anme",id:"select-anme",value:n[t].level,onChange:function(n){e.handleChangeLevel(t,n.target.value)},children:[Object(f.jsx)(P.a,{value:"0",children:"V0"}),Object(f.jsx)(P.a,{value:"1",children:"V1"}),Object(f.jsx)(P.a,{value:"2",children:"V2"}),Object(f.jsx)(P.a,{value:"3",children:"V3"}),Object(f.jsx)(P.a,{value:"4",children:"V4"}),Object(f.jsx)(P.a,{value:"5",children:"V5"}),Object(f.jsx)(P.a,{value:"6",children:"V6"})]})]}),Object(f.jsx)(I.a,{required:!0,id:"name-input-".concat(t),value:n[t].color,label:"\u984f\u8272",onChange:function(n){e.handleRouteNameChange(t,n.target.value)}},t),Object(f.jsx)(d.a,{variant:"contained",color:"secondary",className:"ic-btn",onClick:function(){e.handleDeleteRoute(t)},children:Object(f.jsx)(R.a,{})})]})},t)}))}),Object(f.jsx)(v.b,{to:"/OptionStart/start",onClick:function(){return e.handleNextRoute()},children:Object(f.jsx)(d.a,{variant:"contained",color:"primary",children:"\u78ba\u5b9a >"})})]})}}]),n}(a.Component),J=(n(112),n(7)),M=(n(113),m.a[800],Object(j.a)({palette:{primary:m.a}})),B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleNameChange=function(e){a.setState({selectName:e.target.value})},a.handleRouterNumChange=function(e){a.setState({selectRouterNum:e.target.value})},a.handleStatusChange=function(e){a.setState({selectRouterStatus:e.target.value})},a.handleConfirmClick=function(){var e=a.state,t=e.userAccount,n=e.selectName,c=e.selectRouterNum,s=e.selectRouterStatus,o=S.a.find(t,(function(e){return e.name===n}));if(!S.a.isEmpty(o)){var r=S.a.find(o.routerGoal,(function(e){return e.number===c}));switch(void 0!==r&&Number(s)>Number(r.status)&&(r.status=s),s){case T.NONE:o.startAtt+=1;break;case T.ZONE_1:o.startAtt+=1,o.zone1Att+=1;break;case T.ZONE_2:case T.TOP:o.startAtt+=1,o.zone1Att+=1,o.zone2Att+=1}var i=0,l=0,u=0;S.a.each(o.routerGoal,(function(e){switch(e.status){case T.ZONE_1:u+=1;break;case T.ZONE_2:l+=1;break;case T.TOP:i+=1}})),console.log(i,l,u),o.topCount=i,o.zone2Count=l,o.zone1Count=u,console.log(o),console.log(t),a.setState({userAccount:t}),a.setWhoWin()}},a.state={userAccount:[],test:!0,routerCount:8,initAccountRouterGoal:[],selectName:"\u767e\u516b",selectRouterNum:1,selectRouterStatus:"1"},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.initAccount()}},{key:"initAccount",value:function(){this.initRouterGoal()}},{key:"initRouterGoal",value:function(){for(var e=this.state.routerCount,t=[],n=0;n<e;n++)t.push({number:n+1,status:T.NONE});var a={routerGoal:S.a.cloneDeep(t),topCount:0,zone2Count:0,zone1Count:0,zone1Att:0,zone2Att:0,startAtt:0},c=[];c.push(Object(A.a)({name:"\u767e\u516b"},S.a.cloneDeep(a))),c.push(Object(A.a)({name:"\u53f2\u86cb"},S.a.cloneDeep(a))),c.push(Object(A.a)({name:"\u7c73\u8e22"},S.a.cloneDeep(a))),c.push(Object(A.a)({name:"\u80e1\u771f"},S.a.cloneDeep(a))),c.push(Object(A.a)({name:"KAI B"},S.a.cloneDeep(a))),c.push(Object(A.a)({name:"\u5b6b\u8778"},S.a.cloneDeep(a))),c.push(Object(A.a)({name:"Yolin"},S.a.cloneDeep(a))),c.push(Object(A.a)({name:"ED"},S.a.cloneDeep(a))),this.setState({userAccount:c}),this.setState({initAccountRouterGoal:a})}},{key:"initUserAccount",value:function(){var e=this.state.initAccountRouterGoal,t=[];t.push(Object(A.a)({name:"\u767e\u516b"},e)),t.push(Object(A.a)({name:"\u53f2\u86cb"},e)),t.push(Object(A.a)({name:"\u7c73\u8e22"},e)),t.push(Object(A.a)({name:"\u80e1\u771f"},e)),t.push(Object(A.a)({name:"KAI B"},e)),t.push(Object(A.a)({name:"\u5b6b\u8778"},e)),t.push(Object(A.a)({name:"Yolin"},e)),this.setState({userAccount:t})}},{key:"setWhoWin",value:function(){var e=this.state.userAccount,t=S.a.orderBy(e,["topCount","zone2Count","zone1Count"],["desc","desc","desc"]);this.setState({userAccount:t})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.userAccount,a=t.selectName,c=t.routerCount,s=t.selectRouterNum,o=t.selectRouterStatus;return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsxs)(E.a,{variant:"filled",className:e.formControl,children:[Object(f.jsx)(V.a,{id:"select-anme",children:"\u4eba\u54e1"}),Object(f.jsx)(Z.a,{labelId:"select-anme",id:"select-anme",value:a,onChange:this.handleNameChange,children:S.a.map(n,(function(e){return Object(f.jsx)(P.a,{value:e.name,children:e.name})}))})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)(E.a,{variant:"filled",className:e.formControl,children:[Object(f.jsx)(V.a,{id:"select-router",children:"\u8def\u7dda"}),Object(f.jsx)(Z.a,{labelId:"select-router",id:"select-router",value:s,onChange:this.handleRouterNumChange,children:S.a.map(S.a.range(1,c+1),(function(e){return Object(f.jsxs)(P.a,{value:e,children:["\u8def\u7dda",e]})}))})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)(E.a,{variant:"filled",className:e.formControl,children:[Object(f.jsx)(V.a,{id:"select-anme",children:"\u6210\u7e3e"}),Object(f.jsxs)(Z.a,{labelId:"select-anme",id:"select-anme",value:o,onChange:this.handleStatusChange,children:[Object(f.jsx)(P.a,{value:"4",children:"TOP"}),Object(f.jsx)(P.a,{value:"3",children:"ZONE_2"}),Object(f.jsx)(P.a,{value:"2",children:"ZONE_1"}),Object(f.jsx)(P.a,{value:"1",children:"\u5931\u6557"})]})]})}),Object(f.jsx)(h.a,{theme:M,children:Object(f.jsx)(d.a,{variant:"contained",color:"primary",onClick:this.handleConfirmClick,children:"\u9001\u51fa"})}),Object(f.jsxs)("div",{className:"left",children:[Object(f.jsx)("span",{className:"md-title w-70",children:"\u540d\u5b50"}),Object(f.jsx)("span",{className:"w-35",children:"TOP"}),Object(f.jsx)("span",{className:"w-35",children:"Z2"}),Object(f.jsx)("span",{className:"w-35",children:"Z1"}),Object(f.jsx)("span",{className:"w-35",children:"Z2t"}),Object(f.jsx)("span",{className:"w-35",children:"Z1t"}),Object(f.jsx)("span",{className:"w-35",children:"\u6b21\u6578"})]}),Object(f.jsx)("div",{className:"left",children:S.a.map(n,(function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"md-title  w-70",children:e.name}),Object(f.jsxs)("span",{className:"w-35",children:[e.topCount," "]}),Object(f.jsxs)("span",{className:"w-35",children:[e.zone2Count," "]}),Object(f.jsxs)("span",{className:"w-35",children:[e.zone1Count," "]}),Object(f.jsxs)("span",{className:"w-35",children:[e.zone2Att,"  "]}),Object(f.jsxs)("span",{className:"w-35",children:[e.zone1Att,"  "]}),Object(f.jsxs)("span",{className:"w-35",children:[e.startAtt,"  "]})]})}))})]})}}]),n}(a.Component),F=Object(J.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:180},selectEmpty:{marginTop:e.spacing(2)}}}))(B);!function(e){e.TOP="4",e.ZONE_2="3",e.ZONE_1="2",e.FAIL="0",e.NONE="1"}(T||(T={}));m.a[800];var L=Object(j.a)({palette:{primary:m.a}}),q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleNameChange=function(e){a.setState({selectName:e.target.value})},a.handleRouterNumChange=function(e){a.setState({selectRouterNum:e.target.value})},a.handleStatusChange=function(e){a.setState({selectRouterStatus:e.target.value})},a.handleConfirmClick=function(){var e=a.state,t=e.userAccount,n=e.selectName,c=e.selectRouterNum,s=e.selectRouterStatus,o=S.a.find(t,(function(e){return e.name===n}));if(!S.a.isEmpty(o)){var r=S.a.find(o.routerGoal,(function(e){return e.number===c}));switch(void 0!==r&&Number(s)>Number(r.status)&&(r.status=s),s){case T.NONE:o.startAtt+=1;break;case T.ZONE_1:o.startAtt+=1,o.zone1Att+=1;break;case T.ZONE_2:case T.TOP:o.startAtt+=1,o.zone1Att+=1,o.zone2Att+=1}var i=0,l=0,u=0;S.a.each(o.routerGoal,(function(e){switch(e.status){case T.ZONE_1:u+=1;break;case T.ZONE_2:l+=1;break;case T.TOP:i+=1}})),console.log(i,l,u),o.topCount=i,o.zone2Count=l,o.zone1Count=u,console.log(o),console.log(t),a.setState({userAccount:t}),a.setWhoWin()}},a.state={userAccount:[],test:!0,routerCount:8,initAccountRouterGoal:[],selectName:"\u767e\u516b",selectRouterNum:1,selectRouterStatus:"1"},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.initAccount()}},{key:"initAccount",value:function(){this.initRouterGoal()}},{key:"initRouterGoal",value:function(){var e=JSON.parse(sessionStorage.getItem("routerInfos")||"{}"),t=JSON.parse(sessionStorage.getItem("routerGoalAccounts")||"{}");console.log("routeInfos",e);var n=[];S.a.each(e,(function(e,t){n.push({number:Number(t)+1,name:"V".concat(e.level," ").concat(e.color),status:T.NONE})})),console.log("initRouterGoalModel",n),this.setState({userAccount:S.a.map(t,(function(e){return Object(A.a)(Object(A.a)({},e),{},{routerGoal:S.a.cloneDeep(n)})})),initAccountRouterGoal:n})}},{key:"setWhoWin",value:function(){var e=this.state.userAccount,t=S.a.orderBy(e,["topCount","zone2Count","zone1Count"],["desc","desc","desc"]);this.setState({userAccount:t})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.userAccount,a=t.selectName,c=(t.routerCount,t.selectRouterNum),s=t.selectRouterStatus,o=t.initAccountRouterGoal;return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsxs)(E.a,{variant:"filled",className:e.formControl,children:[Object(f.jsx)(V.a,{id:"select-anme",children:"\u4eba\u54e1"}),Object(f.jsx)(Z.a,{labelId:"select-anme",id:"select-anme",value:a,onChange:this.handleNameChange,children:S.a.map(n,(function(e){return Object(f.jsx)(P.a,{value:e.name,children:e.name})}))})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)(E.a,{variant:"filled",className:e.formControl,children:[Object(f.jsx)(V.a,{id:"select-router",children:"\u8def\u7dda"}),Object(f.jsx)(Z.a,{labelId:"select-router",id:"select-router",value:c,onChange:this.handleRouterNumChange,children:S.a.map(o,(function(e){return Object(f.jsx)(P.a,{value:e.number,children:e.name})}))})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)(E.a,{variant:"filled",className:e.formControl,children:[Object(f.jsx)(V.a,{id:"select-anme",children:"\u6210\u7e3e"}),Object(f.jsxs)(Z.a,{labelId:"select-anme",id:"select-anme",value:s,onChange:this.handleStatusChange,children:[Object(f.jsx)(P.a,{value:"4",children:"TOP"}),Object(f.jsx)(P.a,{value:"3",children:"ZONE_2"}),Object(f.jsx)(P.a,{value:"2",children:"ZONE_1"}),Object(f.jsx)(P.a,{value:"1",children:"\u5931\u6557"})]})]})}),Object(f.jsx)(h.a,{theme:L,children:Object(f.jsx)(d.a,{variant:"contained",color:"primary",onClick:this.handleConfirmClick,children:"\u9001\u51fa"})}),Object(f.jsxs)("div",{className:"left",children:[Object(f.jsx)("span",{className:"md-title w-70",children:"\u540d\u5b50"}),Object(f.jsx)("span",{className:"w-35",children:"TOP"}),Object(f.jsx)("span",{className:"w-35",children:"Z2"}),Object(f.jsx)("span",{className:"w-35",children:"Z1"}),Object(f.jsx)("span",{className:"w-35",children:"Z2t"}),Object(f.jsx)("span",{className:"w-35",children:"Z1t"}),Object(f.jsx)("span",{className:"w-35",children:"\u6b21\u6578"})]}),Object(f.jsx)("div",{className:"left",children:S.a.map(n,(function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"md-title  w-70",children:e.name}),Object(f.jsxs)("span",{className:"w-35",children:[e.topCount," "]}),Object(f.jsxs)("span",{className:"w-35",children:[e.zone2Count," "]}),Object(f.jsxs)("span",{className:"w-35",children:[e.zone1Count," "]}),Object(f.jsxs)("span",{className:"w-35",children:[e.zone2Att,"  "]}),Object(f.jsxs)("span",{className:"w-35",children:[e.zone1Att,"  "]}),Object(f.jsxs)("span",{className:"w-35",children:[e.startAtt,"  "]})]})}))})]})}}]),n}(a.Component),K=Object(J.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:180},selectEmpty:{marginTop:e.spacing(2)}}}))(q),U=(m.a[800],Object(j.a)({palette:{success:{main:"#4caf50",light:"#81c784",dark:"#388e3c"}}})),Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.location,t=this.props.match.path;return Object(f.jsx)("div",{children:Object(f.jsx)(h.a,{theme:U,children:Object(f.jsxs)(g.c,{location:e,children:[Object(f.jsx)(g.a,{path:"".concat(t,"/settingPerson"),children:Object(f.jsx)(_,{})}),Object(f.jsx)(g.a,{path:"".concat(t,"/settingRoute"),children:Object(f.jsx)(W,{})}),Object(f.jsx)(g.a,{path:"".concat(t,"/start"),children:Object(f.jsx)(K,{})})]})})})}}]),n}(a.Component);function H(){var e=Object(g.f)();return Object(f.jsx)(z.a,{children:Object(f.jsx)(G.a,{classNames:"page-fade",timeout:300,unmountOnExit:!0,children:Object(f.jsxs)(g.c,{location:e,children:[Object(f.jsx)(g.a,{exact:!0,path:"/",component:C}),Object(f.jsx)(g.a,{path:"/quikStart",component:F}),Object(f.jsx)(g.a,{path:"/optionStart",component:Y})]})},e.key)})}var Q=function(){return Object(f.jsx)(v.a,{basename:"/rock-goal/build",children:Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("div",{className:"rock-bg",children:Object(f.jsx)(g.c,{children:Object(f.jsx)(g.a,{path:"*",children:Object(f.jsx)(H,{})})})})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Q,{})}),document.getElementById("root")),X()},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.02e781aa.chunk.js.map