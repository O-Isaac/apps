(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[12],{140:function(t,e,a){"use strict";var r=a(12),n=a(13),s=a(22),i=a(21),c=a(0),l=a.n(c),o=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var t;return l.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(t=this.props.height)&&void 0!==t?t:"2em"}})}}]),a}(l.a.Component);e.a=o},147:function(t,e,a){"use strict";var r=a(12),n=a(13),s=a(22),i=a(21),c=a(0),l=a.n(c),o=new Map([[1,"./assets/star1.png"],[2,"./assets/star2.png"],[3,"./assets/star3.png"],[4,"./assets/star4.png"],[5,"./assets/star5.png"]]),u=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var t;return l.a.createElement("span",null,o.has(this.props.rarity)?l.a.createElement("img",{alt:"".concat(this.props.rarity," star(s)"),src:o.get(this.props.rarity),style:{height:null!==(t=this.props.height)&&void 0!==t?t:18}}):null)}}]),a}(l.a.Component);e.a=u},148:function(t,e,a){"use strict";var r=a(12),n=a(13),s=a(22),i=a(21),c=a(11),l=a(0),o=a.n(l),u=new Map([[0,0],[1,1],[2,1],[3,2],[4,3],[5,3]]),h=new Map([[c.c.SABER,1],[c.c.ARCHER,2],[c.c.LANCER,3],[c.c.RIDER,4],[c.c.CASTER,5],[c.c.ASSASSIN,6],[c.c.BERSERKER,7],[c.c.SHIELDER,8],[c.c.RULER,9],[c.c.ALTER_EGO,10],[c.c.AVENGER,11],[c.c.MOON_CANCER,23],[c.c.FOREIGNER,25],[c.c.GRAND_CASTER,5],[c.c.BEAST_I,20],[c.c.BEAST_II,20],[c.c.BEAST_IIIL,20],[c.c.BEAST_IIIR,20],[c.c.BEAST_UNKNOWN,20],[c.c.ALL,1001],[c.c.EXTRA,1002]]),v=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var t;return o.a.createElement("img",{alt:"",src:this.location(),style:{height:null!==(t=this.props.height)&&void 0!==t?t:24}})}},{key:"location",value:function(){var t,e=h.has(this.props.className)?h.get(this.props.className):12,a=null!==(t=this.props.rarity)&&void 0!==t?t:5,r=u.has(a)?u.get(a):3;return"https://assets.atlasacademy.io/GameData/NA/ClassIcons/class".concat(r,"_").concat(e,".png")}}]),a}(o.a.Component);e.a=v},149:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var r=a(152);var n=a(161);function s(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},152:function(t,e,a){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}a.d(e,"a",(function(){return r}))},157:function(t,e,a){"use strict";var r=a(1),n=a(3),s=a(4),i=a.n(s),c=a(0),l=a.n(c),o=a(5),u=l.a.forwardRef((function(t,e){var a=t.bsPrefix,s=t.className,c=t.striped,u=t.bordered,h=t.borderless,v=t.hover,f=t.size,p=t.variant,E=t.responsive,m=Object(n.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),y=Object(o.b)(a,"table"),d=i()(s,y,p&&y+"-"+p,f&&y+"-"+f,c&&y+"-striped",u&&y+"-bordered",h&&y+"-borderless",v&&y+"-hover"),R=l.a.createElement("table",Object(r.a)({},m,{className:d,ref:e}));if(E){var b=y+"-responsive";return"string"===typeof E&&(b=b+"-"+E),l.a.createElement("div",{className:b},R)}return R}));e.a=u},161:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var r=a(152);function n(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(t,e):void 0}}},253:function(t,e,a){},264:function(t,e,a){"use strict";a.r(e);var r=a(149),n=a(12),s=a(13),i=a(22),c=a(21),l=a(11),o=a(0),u=a.n(o),h=a(135),v=a(157),f=a(16),p=a(49),E=a(148),m=a(60),y=a(140),d=a(10),R=a(147),b=(a(253),a(7)),g=[l.c.SABER,l.c.ARCHER,l.c.LANCER,l.c.RIDER,l.c.CASTER,l.c.ASSASSIN,l.c.BERSERKER,l.c.EXTRA],A=function(t){Object(i.a)(a,t);var e=Object(c.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={loading:!0,servants:[],activeClassFilters:[],activeRarityFilters:[]},r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this;try{b.a.setRegion(this.props.region),p.a.servantList().then((function(e){t.setState({loading:!1,servants:e})}))}catch(e){this.setState({error:e})}}},{key:"isClassFilterActive",value:function(t){return-1!==this.state.activeClassFilters.indexOf(t)}},{key:"isExtra",value:function(t){return!(t===l.c.SABER||t===l.c.ARCHER||t===l.c.LANCER||t===l.c.RIDER||t===l.c.CASTER||t===l.c.ASSASSIN||t===l.c.BERSERKER)}},{key:"toggleClassFilter",value:function(t){var e=!1,a=this.state.activeClassFilters.filter((function(a){return a!==l.c.ALL&&(a!==t||(e=!0,!1))}));e||a.push(t),this.setState({activeClassFilters:a})}},{key:"toggleRarityFilter",value:function(t){-1!==this.state.activeRarityFilters.indexOf(t)?this.setState({activeClassFilters:this.state.activeClassFilters.filter((function(t){return t!==l.c.ALL})),activeRarityFilters:this.state.activeRarityFilters.filter((function(e){return e!==t}))}):this.setState({activeClassFilters:this.state.activeClassFilters.filter((function(t){return t!==l.c.ALL})),activeRarityFilters:[].concat(Object(r.a)(this.state.activeRarityFilters),[t])})}},{key:"servants",value:function(){var t=this,e=this.state.servants.slice().reverse();if(this.state.activeRarityFilters.length>0&&(e=e.filter((function(e){return-1!==t.state.activeRarityFilters.indexOf(e.rarity)}))),this.state.activeClassFilters.length>0&&(e=e.filter((function(e){for(var a in t.state.activeClassFilters){var r=t.state.activeClassFilters[a];if(r===l.c.EXTRA&&t.isExtra(e.className))return!0;if(e.className===r)return!0}return!1}))),this.state.search){var a=this.state.search.split(" ").filter((function(t){return t})).map((function(t){return t.toLowerCase()}));e=e.filter((function(t){return a.every((function(e){return t.name.toLowerCase().includes(e)}))}))}return e}},{key:"render",value:function(){var t,e=this;return this.state.error?u.a.createElement(m.a,{error:this.state.error}):this.state.loading?u.a.createElement(d.a,null):u.a.createElement("div",{id:"servants"},u.a.createElement(h.a,{inline:!0,style:{justifyContent:"center"}},g.map((function(t){var a=e.isClassFilterActive(t);return u.a.createElement("span",{key:t,className:"filter",style:{opacity:a?1:.5},onClick:function(a){e.toggleClassFilter(t)}},u.a.createElement(E.a,{height:50,rarity:a?5:3,className:t}))})),u.a.createElement(h.a.Control,{style:{marginLeft:"auto"},placeholder:"Search",value:null!==(t=this.state.search)&&void 0!==t?t:"",onChange:function(t){e.setState({search:t.target.value})}})),u.a.createElement("hr",null),u.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"#"),u.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"Class"),u.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"Thumbnail"),u.a.createElement("th",null,"Name"),u.a.createElement("th",null,"Rarity"))),u.a.createElement("tbody",null,this.servants().map((function(t,a){var r="/".concat(e.props.region,"/servant/").concat(t.collectionNo);return u.a.createElement("tr",{key:a},u.a.createElement("td",{align:"center"},u.a.createElement(f.b,{to:r},t.collectionNo)),u.a.createElement("td",{align:"center"},u.a.createElement(E.a,{className:t.className,rarity:t.rarity,height:50})),u.a.createElement("td",{align:"center"},u.a.createElement(f.b,{to:r},u.a.createElement(y.a,{type:t.type,rarity:t.rarity,location:t.face,height:50}))),u.a.createElement("td",null,u.a.createElement(f.b,{to:r},t.name)),u.a.createElement("td",null,u.a.createElement(R.a,{rarity:t.rarity})))})))))}}]),a}(u.a.Component);e.default=A}}]);
//# sourceMappingURL=12.a68647a3.chunk.js.map