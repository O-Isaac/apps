(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[6],{143:function(e,t,a){"use strict";var r=a(13),n=a(14),s=a(23),i=a(22),c=a(0),o=a.n(c),l=a(190),u=(a(155),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.header?o.a.createElement("div",{className:"data-header"},this.props.header):null,o.a.createElement(l.a,{bordered:!0,hover:!0,className:"data-table"},o.a.createElement("tbody",null,Object.keys(this.props.data).map((function(t,r){return o.a.createElement("tr",{key:r},o.a.createElement("th",null,t),o.a.createElement("td",null,a.dumpValue(e.props.data[t])))})))))}}],[{key:"dumpValue",value:function(e){if("object"===typeof e){var t=e;return void 0!==t.key&&void 0!==t.props&&void 0!==t.type?t:JSON.stringify(e)}return e}}]),a}(o.a.Component));t.a=u},145:function(e,t,a){"use strict";var r=a(13),n=a(14),s=a(23),i=a(22),c=a(0),o=a.n(c),l=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e;return o.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:"2em"}})}}]),a}(o.a.Component);t.a=l},146:function(e,t,a){"use strict";var r=a(20),n=a.n(r),s=a(34),i=a(13),c=a(14),o=a(23),l=a(22),u=a(60),p=a(35),f=a(62),d=a.n(f),h=a(172),m=a.n(h),v=a(0),b=a.n(v),E=a(138),y=a(139),O=a(173),g=a.n(O),j=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={showing:!1},r}return Object(c.a)(a,[{key:"hide",value:function(){this.setState({showing:!1})}},{key:"show",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.data){e.next=4;break}this.setState({showing:!0}),e.next=20;break;case 4:if("object"!==typeof this.props.data){e.next=8;break}this.setState({showing:!0,data:this.props.data}),e.next=20;break;case 8:return e.prev=8,e.t0=this,e.next=12,d.a.get(this.props.data);case 12:e.t1=e.sent.data,e.t2={showing:!0,data:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=20;break;case 17:e.prev=17,e.t3=e.catch(8),this.setState({showing:!0,data:{error:e.t3}});case 20:case"end":return e.stop()}}),e,this,[[8,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return b.a.createElement(b.a.Fragment,null,b.a.createElement(E.a,{variant:"outline-info",block:!0,onClick:function(){e.show()}},this.props.text||"View","\xa0",b.a.createElement(p.a,{icon:u.c})),b.a.createElement(y.a,{size:"lg",show:this.state.showing,onHide:function(){return e.hide()}},b.a.createElement(y.a.Header,{closeButton:!0},b.a.createElement(y.a.Title,null,"Raw Data Viewer")),b.a.createElement(y.a.Body,null,this.state.data?b.a.createElement(g.a,{src:this.state.data,collapsed:1,enableClipboard:function(e){"string"===typeof e.src&&m()(e.src)}}):null)))}}]),a}(b.a.Component);t.a=j},148:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(148);var n=a(154);function s(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(148);function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},155:function(e,t,a){},159:function(e,t,a){"use strict";var r=a(13),n=a(14),s=a(23),i=a(22),c=a(0),o=a.n(c),l=a(190),u=(a(174),a(149)),p=a(11),f=a(163),d=a(171),h=a(157),m=a(164),v=a(142),b=a(20),E=a.n(b),y=a(34),O=a(51),g=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,O.a.skill(this.props.skillId);case 4:e.t1=e.sent,e.t2={skill:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=11;break;case 9:e.prev=9,e.t3=e.catch(0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return void 0===this.state.skill?null:o.a.createElement(A,{region:this.props.region,funcs:this.state.skill.functions,levels:this.props.levels,relatedSkillId:this.state.skill.id})}}]),a}(o.a.Component),j=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"displayRequirement",value:function(e,t){return o.a.createElement("tr",null,o.a.createElement("td",{className:"effect"},"[Requirement] ",e),this.props.levels?Array(this.props.levels).fill(null).map((function(e,a){var r;return o.a.createElement("td",{key:a},null!==(r=t[a])&&void 0!==r?r:"-")})):t.map((function(e,t){return o.a.createElement("td",{key:t},e)})))}},{key:"hpPerLowerRequirements",value:function(){if(this.props.scripts.HP_PER_LOWER)return this.displayRequirement("Health Percent Below",this.props.scripts.HP_PER_LOWER.map((function(e){return Object(v.a)(e,1)})))}},{key:"hpRequirements",value:function(){if(this.props.scripts.HP_VAL_HIGHER)return this.displayRequirement("Health",this.props.scripts.HP_VAL_HIGHER)}},{key:"npRequirements",value:function(){if(this.props.scripts.NP_HIGHER)return this.displayRequirement("NP Gauge",this.props.scripts.NP_HIGHER.map((function(e){return Object(v.a)(e,0)})))}},{key:"starRequirements",value:function(){if(this.props.scripts.STAR_HIGHER)return this.displayRequirement("Critical Stars",this.props.scripts.STAR_HIGHER)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.hpPerLowerRequirements(),this.hpRequirements(),this.npRequirements(),this.starRequirements())}}]),a}(o.a.Component),A=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.props.cooldowns?o.a.createElement("tr",null,o.a.createElement("td",{className:"effect"},"Cooldown"),this.props.cooldowns.map((function(e,t){return o.a.createElement("td",{key:t},e)}))):null,this.props.scripts?o.a.createElement(j,{region:this.props.region,scripts:this.props.scripts}):null,this.props.gain?o.a.createElement("tr",null,o.a.createElement("td",{className:"effect"},"NP Gain"),Object(u.a)(Array(this.props.levels)).map((function(t,a){var r,n,s,i,c,l;return o.a.createElement("td",{key:a},Object(v.a)(null===(r=e.props.gain)||void 0===r?void 0:r.buster[a],2)," ",o.a.createElement(f.a,{card:p.c.BUSTER}),o.a.createElement("br",null),Object(v.a)(null===(n=e.props.gain)||void 0===n?void 0:n.arts[a],2)," ",o.a.createElement(f.a,{card:p.c.ARTS}),o.a.createElement("br",null),Object(v.a)(null===(s=e.props.gain)||void 0===s?void 0:s.quick[a],2)," ",o.a.createElement(f.a,{card:p.c.QUICK}),o.a.createElement("br",null),Object(v.a)(null===(i=e.props.gain)||void 0===i?void 0:i.extra[a],2)," ",o.a.createElement(f.a,{card:p.c.EXTRA}),o.a.createElement("br",null),Object(v.a)(null===(c=e.props.gain)||void 0===c?void 0:c.np[a],2)," NP",o.a.createElement("br",null),Object(v.a)(null===(l=e.props.gain)||void 0===l?void 0:l.defence[a],2)," Def")}))):null,this.props.funcs.map((function(t,a){for(var r=Object(m.a)(e.props.region,t),n=Object(m.f)(t),s=0;s<(null!==(i=e.props.levels)&&void 0!==i?i:0);s++){var i;r[s]||r.push("-")}return o.a.createElement(o.a.Fragment,{key:a},o.a.createElement("tr",null,o.a.createElement("td",{className:"effect"},e.props.relatedSkillId?o.a.createElement(h.a,{region:e.props.region,id:e.props.relatedSkillId}):null,e.props.relatedSkillId?" ":"",o.a.createElement(d.a,{region:e.props.region,func:t})),e.props.levels?r.map((function(e,t){return o.a.createElement("td",{key:t},e)})):null),n.map((function(t,a){return o.a.createElement(g,{key:t,region:e.props.region,skillId:t,levels:e.props.levels})})))})))}}]),a}(o.a.Component),k=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement(l.a,{responsive:!0,className:"effect-breakdown"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Effect"),this.props.levels?Array.from(Array(this.props.levels).keys()).map((function(e){return o.a.createElement("td",{key:e},e+1)})):null)),o.a.createElement("tbody",null,o.a.createElement(A,{region:this.props.region,cooldowns:this.props.cooldowns,funcs:this.props.funcs,gain:this.props.gain,levels:this.props.levels,scripts:this.props.scripts})))}}]),a}(o.a.Component);t.a=k},163:function(e,t,a){"use strict";var r=a(13),n=a(14),s=a(23),i=a(22),c=a(64),o=a(0),l=a.n(o),u=(a(175),[c.a.ARTS,c.a.BUSTER,c.a.QUICK,c.a.EXTRA]),p=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e;if(-1===u.indexOf(this.props.card))return"[Card: ".concat(this.props.card,"]");var t=null!==(e=this.props.height)&&void 0!==e?e:"2em",a=["card-type"],r=void 0,n=void 0;switch(this.props.card){case c.a.ARTS:r="assets/card_icon_arts.png",n="assets/card_txt_arts.png";break;case c.a.BUSTER:r="assets/card_icon_buster.png",n="assets/card_txt_buster.png";break;case c.a.QUICK:r="assets/card_icon_quick.png",n="assets/card_txt_quick.png";break;case c.a.EXTRA:a.push("extra"),n="assets/card_txt_extra.png"}return l.a.createElement("span",{className:a.join(" "),style:{height:t}},l.a.createElement("img",{alt:"",className:"card-type-ratio",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}),r?l.a.createElement("img",{alt:"",className:"card-type-icon",src:r}):null,l.a.createElement("img",{alt:"",className:"card-type-text",src:n}))}}]),a}(l.a.Component);t.a=p},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){"use strict";var r=a(13),n=a(14),s=a(23),i=a(22),c=a(11),o=a(0),l=a.n(o),u=new Map([[0,0],[1,1],[2,1],[3,2],[4,3],[5,3]]),p=new Map([[c.d.SABER,1],[c.d.ARCHER,2],[c.d.LANCER,3],[c.d.RIDER,4],[c.d.CASTER,5],[c.d.ASSASSIN,6],[c.d.BERSERKER,7],[c.d.SHIELDER,8],[c.d.RULER,9],[c.d.ALTER_EGO,10],[c.d.AVENGER,11],[c.d.MOON_CANCER,23],[c.d.FOREIGNER,25],[c.d.GRAND_CASTER,5],[c.d.BEAST_I,20],[c.d.BEAST_II,20],[c.d.BEAST_IIIL,20],[c.d.BEAST_IIIR,20],[c.d.BEAST_UNKNOWN,20],[c.d.ALL,1001],[c.d.EXTRA,1002]]),f=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e;return l.a.createElement("img",{alt:"",src:this.location(),style:{height:null!==(e=this.props.height)&&void 0!==e?e:24}})}},{key:"location",value:function(){var e,t=p.has(this.props.className)?p.get(this.props.className):12,a=null!==(e=this.props.rarity)&&void 0!==e?e:5,r=u.has(a)?u.get(a):3;return"https://assets.atlasacademy.io/GameData/NA/ClassIcons/class".concat(r,"_").concat(t,".png")}}]),a}(l.a.Component);t.a=f},178:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return s}))},183:function(e,t,a){"use strict";var r=a(1),n=a(3),s=a(4),i=a.n(s),c=a(0),o=a.n(c),l=a(5),u=["xl","lg","md","sm","xs"],p=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,c=e.noGutters,p=e.as,f=void 0===p?"div":p,d=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(l.a)(a,"row"),m=h+"-cols",v=[];return u.forEach((function(e){var t,a=d[e];delete d[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&v.push(""+m+r+"-"+t)})),o.a.createElement(f,Object(r.a)({ref:t},d,{className:i.a.apply(void 0,[s,h,c&&"no-gutters"].concat(v))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},188:function(e,t,a){"use strict";var r=a(13),n=a(14),s=a(23),i=a(22),c=a(0),o=a.n(c),l=a(15),u=a(176),p=a(145),f=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"faceIconLocation",value:function(){var e=this.props.servant.extraAssets.faces;if(e.ascension){var t=Object.values(e.ascension).shift();if(t)return t}if(e.costume){var a=Object.values(e.costume).shift();if(a)return a}}},{key:"render",value:function(){var e=this.faceIconLocation();return o.a.createElement(l.b,{to:"/".concat(this.props.region,"/servant/").concat(this.props.servant.collectionNo)},o.a.createElement(u.a,{className:this.props.servant.className,rarity:this.props.servant.rarity,height:this.props.iconHeight})," ",e?o.a.createElement(p.a,{location:e,rarity:this.props.servant.rarity,type:this.props.servant.type,height:this.props.iconHeight}):void 0,e?" ":void 0,this.props.servant.name)}}]),a}(o.a.Component);t.a=f},189:function(e,t,a){"use strict";var r=a(13),n=a(14),s=a(23),i=a(22),c=a(0),o=a.n(c),l=a(143),u=a(146),p=a(179),f=a(151),d=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props.func;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{data:{ID:a.funcId,Type:a.funcType,Target:a.funcTargetType,"Affects Players/Enemies":a.funcTargetTeam,"Popup Text":a.funcPopupText,"Target Traits":o.a.createElement("div",null,a.functvals.map((function(e,a){return o.a.createElement(f.a,{key:a,region:t.props.region,trait:e})}))),"Affects Traits":o.a.createElement("div",null,null===(e=a.traitVals)||void 0===e?void 0:e.map((function(e,a){return o.a.createElement(f.a,{key:a,region:t.props.region,trait:e})}))),Buffs:o.a.createElement("div",null,a.buffs.map((function(e,a){return o.a.createElement(p.a,{key:a,region:t.props.region,buff:e})})))}}),o.a.createElement("span",null,o.a.createElement(u.a,{text:"Nice",data:a}),o.a.createElement(u.a,{text:"Raw",data:"https://api.atlasacademy.io/raw/".concat(this.props.region,"/function/").concat(a.funcId,"?expand=true")}),","))}}]),a}(o.a.Component);t.a=d},213:function(e,t,a){"use strict";var r=a(178),n=a(13),s=a(14),i=a(23),c=a(22),o=a(0),l=a.n(o),u=a(143),p=a(146),f=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,{data:Object(r.a)({Raw:l.a.createElement(p.a,{data:this.props.dataVal})},this.props.dataVal)})}}]),a}(l.a.Component);t.a=f}}]);
//# sourceMappingURL=6.0d7cc631.chunk.js.map