(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[14],{101:function(e,t,n){"use strict";var a=n(10),r=n(11),c=n(18),u=n(17),i=n(53),s=n(29),o=n(0),l=n.n(o),f=n(92),p=n(148),v=n.n(p),h=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={showing:!1},r}return Object(r.a)(n,[{key:"hide",value:function(){this.setState({showing:!1})}},{key:"show",value:function(){this.setState({showing:!0})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("span",{className:"text-primary",style:{cursor:"pointer"},onClick:function(){e.show()}},"View Raw \xa0",l.a.createElement(s.a,{icon:i.b})),l.a.createElement(f.a,{size:"lg",show:this.state.showing,onHide:function(){return e.hide()}},l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement(f.a.Title,null,"Raw Data Viewer")),l.a.createElement(f.a.Body,null,l.a.createElement(v.a,{src:this.props.data,collapsed:1}))))}}]),n}(l.a.Component);t.a=h},130:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var a=n(97),r=n.n(a),c=n(98),u=n(10),i=n(11),s=n(18),o=n(17),l=n(0),f=n.n(l),p=n(95),v=n(99),h=n(52),d=n(12),b=n(101),g=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={loading:!0},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadQuest()}},{key:"loadQuest",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.quest(this.props.region,this.props.id,this.props.phase);case 3:t=e.sent,this.setState({loading:!1,quest:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:e.t0});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.error)return f.a.createElement(h.a,{error:this.state.error});if(this.state.loading||!this.state.quest)return f.a.createElement(d.a,null);var e=this.state.quest;return f.a.createElement("div",null,f.a.createElement("h1",null,e.name),f.a.createElement("br",null),f.a.createElement(v.a,{data:{Raw:f.a.createElement(b.a,{data:e}),ID:e.id,Phase:e.phase,Name:e.name,Type:e.type}}))}}]),n}(f.a.Component);t.default=g},95:function(e,t,n){"use strict";var a,r=n(115),c=n(10),u=n(11),i=n(97),s=n.n(i),o=n(98),l=n(121),f=n.n(l),p=n(24),v=n(30);!function(e){e.JP="JP",e.NA="NA"}(a||(a={}));var h=a,d=function(){function e(){Object(c.a)(this,e),this.cache=new Map,this.pending=new Map,this.pendingCatches=new Map}return Object(u.a)(e,[{key:"get",value:function(e,t,n){var a=this,r=this.cache.get(e);if(void 0!==r)return new Promise((function(e){e(r)}));var c=this.pending.get(e);return void 0!==c?new Promise((function(t,n){var r;c.push(t),(null!==(r=a.pendingCatches.get(e))&&void 0!==r?r:[]).push(n)})):(this.pending.set(e,[]),this.pendingCatches.set(e,[]),new Promise((function(r,c){t.call(null).then((function(t){var c;(null!==(c=a.pending.get(e))&&void 0!==c?c:[]).forEach((function(e){e.call(null,t)})),a.cache.set(e,t),a.pending.delete(e),a.pendingCatches.delete(e),null!==n&&window.setTimeout((function(){a.cache.delete(e)}),n),r(t)})).catch((function(t){var n;(null!==(n=a.pendingCatches.get(e))&&void 0!==n?n:[]).forEach((function(e){e.call(null,t)})),a.pending.delete(e),a.pendingCatches.delete(e),c(t)}))})))}}]),e}(),b="https://api.atlasacademy.io",g=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={buff:new d,craftEssence:new d,craftEssenceList:new d,func:new d,mysticCode:new d,mysticCodeList:new d,noblePhantasm:new d,quest:new d,servant:new d,servantList:new d,skill:new d,traitMap:new d},y=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,null,[{key:"buff",value:function(e,t){var n=p.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return m.buff.get(a,(function(){var a="?reverse=true"+(n===v.a.ENGLISH?"&lang=en":"");return g("".concat(b,"/nice/").concat(e,"/buff/").concat(t).concat(a))}),2e4)}},{key:"craftEssence",value:function(e,t){var n=p.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return m.craftEssence.get(a,(function(){var a="?lore=true"+(n===v.a.ENGLISH?"&lang=en":"");return g("".concat(b,"/nice/").concat(e,"/equip/").concat(t).concat(a))}),2e4)}},{key:"craftEssenceList",value:function(){var t=Object(o.a)(s.a.mark((function t(n){var a,c,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==h.NA){t.next=4;break}return t.abrupt("return",e.getCacheableCraftEssenceList(h.NA));case 4:if(n!==h.JP||p.a.language()!==v.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableCraftEssenceList(h.JP));case 6:return t.next=8,e.getCacheableCraftEssenceList(h.JP);case 8:return a=t.sent,t.next=11,e.getCacheableCraftEssenceList(h.NA);case 11:return c=t.sent,u=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",a.map((function(e){var t;return Object(r.a)(Object(r.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"func",value:function(e,t){var n=p.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return m.func.get(a,(function(){var a="?reverse=true"+(n===v.a.ENGLISH?"&lang=en":"");return g("".concat(b,"/nice/").concat(e,"/function/").concat(t).concat(a))}),2e4)}},{key:"mysticCode",value:function(e,t){var n="".concat(e,"-").concat(t);return m.mysticCode.get(n,(function(){return g("".concat(b,"/nice/").concat(e,"/MC/").concat(t))}),2e4)}},{key:"mysticCodeList",value:function(){var t=Object(o.a)(s.a.mark((function t(n){var a,c,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==h.NA){t.next=4;break}return t.abrupt("return",e.getCacheableMysticCodeList(h.NA));case 4:if(n!==h.JP||p.a.language()!==v.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableMysticCodeList(h.JP));case 6:return t.next=8,e.getCacheableMysticCodeList(h.JP);case 8:return a=t.sent,t.next=11,e.getCacheableMysticCodeList(h.NA);case 11:return c=t.sent,u=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",a.map((function(e){var t;return Object(r.a)(Object(r.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"noblePhantasm",value:function(e,t){var n=p.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return m.noblePhantasm.get(a,(function(){var a="?reverse=true"+(n===v.a.ENGLISH?"&lang=en":"");return g("".concat(b,"/nice/").concat(e,"/NP/").concat(t).concat(a))}),2e4)}},{key:"quest",value:function(e,t,n){var a="".concat(e,"-").concat(t,"-").concat(n);return m.quest.get(a,(function(){return g("".concat(b,"/nice/").concat(e,"/quest/").concat(t,"/").concat(n))}),2e4)}},{key:"servant",value:function(e,t){var n=p.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return m.servant.get(a,(function(){var a="?lore=true"+(n===v.a.ENGLISH?"&lang=en":"");return g("".concat(b,"/nice/").concat(e,"/servant/").concat(t).concat(a))}),2e4)}},{key:"servantList",value:function(){var t=Object(o.a)(s.a.mark((function t(n){var a,c,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==h.NA){t.next=4;break}return t.abrupt("return",e.getCacheableServantList(h.NA));case 4:if(n!==h.JP||p.a.language()!==v.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableServantList(h.JP));case 6:return t.next=8,e.getCacheableServantList(h.JP);case 8:return a=t.sent,t.next=11,e.getCacheableServantList(h.NA);case 11:return c=t.sent,u=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",a.map((function(e){var t;return Object(r.a)(Object(r.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"skill",value:function(e,t){var n=p.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return m.skill.get(a,(function(){var a="?reverse=true"+(n===v.a.ENGLISH?"&lang=en":"");return g("".concat(b,"/nice/").concat(e,"/skill/").concat(t).concat(a))}),2e4)}},{key:"traitMap",value:function(e){return m.traitMap.get(e,(function(){return g("".concat(b,"/export/").concat(e,"/nice_trait.json"))}),null)}},{key:"getCacheableCraftEssenceList",value:function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.craftEssenceList.get(t,(function(){return g("".concat(b,"/export/").concat(t,"/basic_equip.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableMysticCodeList",value:function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.mysticCodeList.get(t,(function(){return g("".concat(b,"/export/").concat(t,"/nice_mystic_code.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableServantList",value:function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.servantList.get(t,(function(){return g("".concat(b,"/export/").concat(t,"/basic_servant.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.a=y},99:function(e,t,n){"use strict";var a=n(10),r=n(11),c=n(18),u=n(17),i=n(0),s=n.n(i),o=n(180),l=(n(130),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,this.props.header?s.a.createElement("div",{className:"data-header"},this.props.header):null,s.a.createElement(o.a,{bordered:!0,hover:!0,className:"data-table"},s.a.createElement("tbody",null,Object.keys(this.props.data).map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",null,t),s.a.createElement("td",null,n.dumpValue(e.props.data[t])))})))))}}],[{key:"dumpValue",value:function(e){if("object"===typeof e){var t=e;return void 0!==t.key&&void 0!==t.props&&void 0!==t.type?t:JSON.stringify(e)}return e}}]),n}(s.a.Component));t.a=l}}]);
//# sourceMappingURL=14.404c9fbf.chunk.js.map