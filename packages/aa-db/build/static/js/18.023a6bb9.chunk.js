(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[18],{183:function(e,t,a){"use strict";a.r(t);var n=a(100),r=a.n(n),l=a(101),s=a(110),c=a(11),u=a(12),i=a(19),o=a(18),f=a(53),h=a(30),p=a(0),m=a.n(p),v=a(95),b=a(93),E=a(182),d=a(98),g=a(119),y=a(54),k=a(9),S=a(126),j=new Map([]),w=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var n,r;return Object(c.a)(this,a),(r=t.call(this,e)).state=null!==(n=j.get(e.region))&&void 0!==n?n:{searching:!1,buffs:[]},r}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){j.set(this.props.region,Object(s.a)({},this.state))}},{key:"describeBuffType",value:function(e){var t;for(var a in S.c){if(S.c[a].up===e)return S.c[a].description+" Up";if(S.c[a].down===e)return S.c[a].description+" Down"}return null!==(t=S.b.get(e))&&void 0!==t?t:e}},{key:"search",value:function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.name||this.state.type){e.next=4;break}return this.setState({buffs:[]}),alert("Please refine the results before searching"),e.abrupt("return");case 4:return e.prev=4,e.next=7,this.setState({searching:!0,buffs:[]});case 7:return e.next=9,d.a.searchBuffs(this.props.region,this.state.name,this.state.type);case 9:t=e.sent,this.setState({searching:!1,buffs:t}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),this.setState({error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a=this;return this.state.error?m.a.createElement(y.a,{error:this.state.error}):m.a.createElement("div",null,this.state.searching?m.a.createElement(k.a,null):null,m.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.search()}},m.a.createElement(v.a.Group,null,m.a.createElement(v.a.Label,null,"Name"),m.a.createElement(v.a.Control,{value:null!==(e=this.state.name)&&void 0!==e?e:"",onChange:function(e){a.setState({name:e.target.value})}})),m.a.createElement(v.a.Group,null,m.a.createElement(v.a.Label,null,"Type"),m.a.createElement(v.a.Control,{as:"select",value:null!==(t=this.state.type)&&void 0!==t?t:"all",onChange:function(e){"all"===e.target.value?a.setState({type:void 0}):a.setState({type:e.target.value})}},m.a.createElement("option",{value:"all"},"All"),Object.values(g.a).map((function(e,t){return m.a.createElement("option",{key:t,value:e},a.describeBuffType(e))})))),m.a.createElement(b.a,{variant:"primary",onClick:function(){return a.search()}},"Search"," ",m.a.createElement(h.a,{icon:f.b}))),m.a.createElement("hr",null),m.a.createElement(E.a,{responsive:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"Buff"),m.a.createElement("th",null,"Usage Count"))),m.a.createElement("tbody",null,this.state.buffs.map((function(e,t){return m.a.createElement("tr",{key:t},m.a.createElement("td",null,e.id),m.a.createElement("td",null,m.a.createElement(S.a,{region:a.props.region,buff:e})),m.a.createElement("td",null,e.reverseFunctions.length))})))))}}]),a}(m.a.Component);t.default=w}}]);
//# sourceMappingURL=18.023a6bb9.chunk.js.map