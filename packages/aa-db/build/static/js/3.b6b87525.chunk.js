(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[3],{113:function(e,t,a){"use strict";var n,r,i,s;a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s})),function(e){e.NONE="none",e.ADD_STATE="addState",e.SUB_STATE="subState",e.DAMAGE="damage",e.DAMAGE_NP="damageNp",e.GAIN_STAR="gainStar",e.GAIN_HP="gainHp",e.GAIN_NP="gainNp",e.LOSS_NP="lossNp",e.SHORTEN_SKILL="shortenSkill",e.EXTEND_SKILL="extendSkill",e.RELEASE_STATE="releaseState",e.LOSS_HP="lossHp",e.INSTANT_DEATH="instantDeath",e.DAMAGE_NP_PIERCE="damageNpPierce",e.DAMAGE_NP_INDIVIDUAL="damageNpIndividual",e.ADD_STATE_SHORT="addStateShort",e.GAIN_HP_PER="gainHpPer",e.DAMAGE_NP_STATE_INDIVIDUAL="damageNpStateIndividual",e.HASTEN_NPTURN="hastenNpturn",e.DELAY_NPTURN="delayNpturn",e.DAMAGE_NP_HPRATIO_HIGH="damageNpHpratioHigh",e.DAMAGE_NP_HPRATIO_LOW="damageNpHpratioLow",e.CARD_RESET="cardReset",e.REPLACE_MEMBER="replaceMember",e.LOSS_HP_SAFE="lossHpSafe",e.DAMAGE_NP_COUNTER="damageNpCounter",e.DAMAGE_NP_STATE_INDIVIDUAL_FIX="damageNpStateIndividualFix",e.DAMAGE_NP_SAFE="damageNpSafe",e.CALL_SERVANT="callServant",e.PT_SHUFFLE="ptShuffle",e.LOSS_STAR="lossStar",e.CHANGE_SERVANT="changeServant",e.CHANGE_BG="changeBg",e.DAMAGE_VALUE="damageValue",e.WITHDRAW="withdraw",e.FIX_COMMANDCARD="fixCommandcard",e.SHORTEN_BUFFTURN="shortenBuffturn",e.EXTEND_BUFFTURN="extendBuffturn",e.SHORTEN_BUFFCOUNT="shortenBuffcount",e.EXTEND_BUFFCOUNT="extendBuffcount",e.CHANGE_BGM="changeBgm",e.DISPLAY_BUFFSTRING="displayBuffstring",e.RESURRECTION="resurrection",e.GAIN_NP_BUFF_INDIVIDUAL_SUM="gainNpBuffIndividualSum",e.SET_SYSTEM_ALIVE_FLAG="setSystemAliveFlag",e.FORCE_INSTANT_DEATH="forceInstantDeath",e.DAMAGE_NP_RARE="damageNpRare",e.GAIN_NP_FROM_TARGETS="gainNpFromTargets",e.GAIN_HP_FROM_TARGETS="gainHpFromTargets",e.LOSS_HP_PER="lossHpPer",e.LOSS_HP_PER_SAFE="lossHpPerSafe",e.SHORTEN_USER_EQUIP_SKILL="shortenUserEquipSkill",e.QUICK_CHANGE_BG="quickChangeBg",e.SHIFT_SERVANT="shiftServant",e.DAMAGE_NP_AND_CHECK_INDIVIDUALITY="damageNpAndCheckIndividuality",e.ABSORB_NPTURN="absorbNpturn",e.OVERWRITE_DEAD_TYPE="overwriteDeadType",e.FORCE_ALL_BUFF_NOACT="forceAllBuffNoact",e.BREAK_GAUGE_UP="breakGaugeUp",e.BREAK_GAUGE_DOWN="breakGaugeDown",e.EXP_UP="expUp",e.QP_UP="qpUp",e.DROP_UP="dropUp",e.FRIEND_POINT_UP="friendPointUp",e.EVENT_DROP_UP="eventDropUp",e.EVENT_DROP_RATE_UP="eventDropRateUp",e.EVENT_POINT_UP="eventPointUp",e.EVENT_POINT_RATE_UP="eventPointRateUp",e.TRANSFORM_SERVANT="transformServant",e.QP_DROP_UP="qpDropUp",e.SERVANT_FRIENDSHIP_UP="servantFriendshipUp",e.USER_EQUIP_EXP_UP="userEquipExpUp",e.CLASS_DROP_UP="classDropUp",e.ENEMY_ENCOUNT_COPY_RATE_UP="enemyEncountCopyRateUp",e.ENEMY_ENCOUNT_RATE_UP="enemyEncountRateUp",e.ENEMY_PROB_DOWN="enemyProbDown",e.GET_REWARD_GIFT="getRewardGift",e.SEND_SUPPORT_FRIEND_POINT="sendSupportFriendPoint",e.MOVE_POSITION="movePosition",e.REVIVAL="revival",e.DAMAGE_NP_INDIVIDUAL_SUM="damageNpIndividualSum"}(n||(n={})),function(e){e.SELF="self",e.PT_ONE="ptOne",e.PT_ANOTHER="ptAnother",e.PT_ALL="ptAll",e.ENEMY="enemy",e.ENEMY_ANOTHER="enemyAnother",e.ENEMY_ALL="enemyAll",e.PT_FULL="ptFull",e.ENEMY_FULL="enemyFull",e.PT_OTHER="ptOther",e.PT_ONE_OTHER="ptOneOther",e.PT_RANDOM="ptRandom",e.ENEMY_OTHER="enemyOther",e.ENEMY_RANDOM="enemyRandom",e.PT_OTHER_FULL="ptOtherFull",e.ENEMY_OTHER_FULL="enemyOtherFull",e.PTSELECT_ONE_SUB="ptselectOneSub",e.PTSELECT_SUB="ptselectSub",e.PT_ONE_ANOTHER_RANDOM="ptOneAnotherRandom",e.PT_SELF_ANOTHER_RANDOM="ptSelfAnotherRandom",e.ENEMY_ONE_ANOTHER_RANDOM="enemyOneAnotherRandom",e.PT_SELF_ANOTHER_FIRST="ptSelfAnotherFirst",e.PT_SELF_BEFORE="ptSelfBefore",e.PT_SELF_AFTER="ptSelfAfter",e.PT_SELF_ANOTHER_LAST="ptSelfAnotherLast",e.COMMAND_TYPE_SELF_TREASURE_DEVICE="commandTypeSelfTreasureDevice"}(r||(r={})),function(e){e.PLAYER="player",e.ENEMY="enemy",e.PLAYER_AND_ENEMY="playerAndEnemy"}(i||(i={})),function(e){e.RATE="Rate",e.TURN="Turn",e.COUNT="Count",e.VALUE="Value",e.VALUE2="Value2",e.USE_RATE="UseRate",e.TARGET="Target",e.CORRECTION="Correction",e.PARAM_ADD="ParamAdd",e.PARAM_MAX="ParamMax",e.HIDE_MISS="HideMiss",e.ON_FIELD="OnField",e.HIDE_NO_EFFECT="HideNoEffect",e.UNAFFECTED="Unaffected",e.SHOW_STATE="ShowState",e.AURA_EFFECT_ID="AuraEffectId",e.ACT_SET="ActSet",e.ACT_SET_WEIGHT="ActSetWeight",e.SHOW_QUEST_NO_EFFECT="ShowQuestNoEffect",e.CHECK_DEAD="CheckDead",e.RATIO_HP_HIGH="RatioHPHigh",e.RATIO_HP_LOW="RatioHPLow",e.SET_PASSIVE_FRAME="SetPassiveFrame",e.PROC_PASSIVE="ProcPassive",e.PROC_ACTIVE="ProcActive",e.HIDE_PARAM="HideParam",e.SKILL_ID="SkillID",e.SKILL_LV="SkillLV",e.SHOW_CARD_ONLY="ShowCardOnly",e.EFFECT_SUMMON="EffectSummon",e.RATIO_HP_RANGE_HIGH="RatioHPRangeHigh",e.RATIO_HP_RANGE_LOW="RatioHPRangeLow",e.TARGET_LIST="TargetList",e.OPPONENT_ONLY="OpponentOnly",e.STATUS_EFFECT_ID="StatusEffectId",e.END_BATTLE="EndBattle",e.LOSE_BATTLE="LoseBattle",e.ADD_INDIVIDUALTY="AddIndividualty",e.ADD_LINKAGE_TARGET_INDIVIDUALTY="AddLinkageTargetIndividualty",e.SAME_BUFF_LIMIT_TARGET_INDIVIDUALITY="SameBuffLimitTargetIndividuality",e.SAME_BUFF_LIMIT_NUM="SameBuffLimitNum",e.CHECK_DUPLICATE="CheckDuplicate",e.ON_FIELD_COUNT="OnFieldCount",e.TARGET_RARITY_LIST="TargetRarityList",e.DEPEND_FUNC_ID="DependFuncId",e.INVALID_HIDE="InvalidHide",e.OUT_ENEMY_NPC_ID="OutEnemyNpcId",e.IN_ENEMY_NPC_ID="InEnemyNpcId",e.OUT_ENEMY_POSITION="OutEnemyPosition",e.IGNORE_INDIVIDUALITY="IgnoreIndividuality",e.STAR_HIGHER="StarHigher",e.CHANGE_TD_COMMAND_TYPE="ChangeTDCommandType",e.SHIFT_NPC_ID="ShiftNpcId",e.DISPLAY_LAST_FUNC_INVALID_TYPE="DisplayLastFuncInvalidType",e.AND_CHECK_INDIVIDUALITY_LIST="AndCheckIndividualityList",e.WIN_BATTLE_NOT_RELATED_SURVIVAL_STATUS="WinBattleNotRelatedSurvivalStatus",e.FORCE_SELF_INSTANT_DEATH="ForceSelfInstantDeath",e.CHANGE_MAX_BREAK_GAUGE="ChangeMaxBreakGauge",e.PARAM_ADD_MAX_VALUE="ParamAddMaxValue",e.PARAM_ADD_MAX_COUNT="ParamAddMaxCount",e.LOSS_HP_NO_CHANGE_DAMAGE="LossHpNoChangeDamage",e.INCLUDE_PASSIVE_INDIVIDUALITY="IncludePassiveIndividuality"}(s||(s={}))},118:function(e,t,a){"use strict";var n=a(11),r=a(12),i=a(19),s=a(18),u=a(53),o=a(30),_=a(0),E=a.n(_),c=a(16),A=a(123),p=a(97),T=function e(t){Object(n.a)(this,e),this.showing=!0,this.parts=[],this.preposition=void 0,this.preposition=t},N=function e(){Object(n.a)(this,e),this.team=new T,this.chance=new T,this.action=new T,this.amount=new T("of"),this.affects=new T,this.target=new T("to"),this.duration=new T,this.scaling=new T},l=a(119),f=a(113),d=a(126),D=a(106),I=a(152),O=a(151),h=a(134),R=new Map([[f.c.SELF,"self"],[f.c.PT_ONE,"party member"],[f.c.PT_ALL,"party"],[f.c.ENEMY,"enemy"],[f.c.ENEMY_ALL,"enemies"],[f.c.PT_FULL,"party (including reserve)"],[f.c.ENEMY_FULL,"enemies (including reserve)"],[f.c.PT_OTHER,"party except self"],[f.c.PT_ONE_OTHER,"other party members besides target"],[f.c.PT_RANDOM,"random party member"],[f.c.ENEMY_OTHER,"other enemies besides target"],[f.c.ENEMY_RANDOM,"random enemy"],[f.c.PT_OTHER_FULL,"party except self (including reserve)"],[f.c.ENEMY_OTHER_FULL,"other enemies (including reserve)"],[f.c.PTSELECT_ONE_SUB,"active party member and reserve party member"],[f.c.PTSELECT_SUB,"reserve party member"],[f.c.PT_ONE_ANOTHER_RANDOM,"other random party member"],[f.c.PT_SELF_ANOTHER_RANDOM,"other random party member (except self)"],[f.c.ENEMY_ONE_ANOTHER_RANDOM,"other random enemy"],[f.c.PT_SELF_ANOTHER_FIRST,"first other party member (except self)"],[f.c.COMMAND_TYPE_SELF_TREASURE_DEVICE,"target noble phantasm version"]]),S=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"getDataVal",value:function(){var e,t,a=this.props.func;if(this.props.level)return null!==(e=Object(A.g)(a,this.props.level,null!==(t=this.props.overcharge)&&void 0!==t?t:1))&&void 0!==e?e:{};var n=Object(A.d)(a);return Object(A.f)(n)}},{key:"render",value:function(){var e=this.props.region,t=this.props.func,a=this.getDataVal(),n=new N;!function(e,t,a,n){var r=t.team,i=r.parts;a.funcTargetTeam===f.b.PLAYER?i.push("[Player]"):a.funcTargetTeam===f.b.ENEMY?i.push("[Enemy]"):r.showing=!1}(0,n,t),function(e,t,a,n){var r=t.chance,i=r.parts;n.Rate&&n.Rate<0?i.push("Guaranteed to"):"number"===typeof n.Rate&&1e3!==n.Rate?i.push(n.Rate/10+"% Chance to"):n.Rate||a.funcType===f.d.NONE?r.showing=!1:i.push("Chance to")}(0,n,t,a),function(e,t,a,n){var r,i,s,u,o,_,c,A=t.action.parts;if(a.funcType===f.d.ADD_STATE||a.funcType===f.d.ADD_STATE_SHORT)A.push("Apply"),a.buffs.forEach((function(t,a){a>0&&A.push("&"),A.push(E.a.createElement(d.a,{region:e,buff:t}))})),(null===(o=a.buffs[0])||void 0===o?void 0:o.type)===l.a.FIELD_INDIVIDUALITY&&(t.amount.preposition="to"),t.target.preposition="on",(null===(_=a.buffs[0])||void 0===_?void 0:_.type)!==l.a.COMMANDATTACK_FUNCTION&&(null===(c=a.buffs[0])||void 0===c?void 0:c.type)!==l.a.NPATTACK_PREV_BUFF||(t.target.preposition="for");else if(a.funcType===f.d.SUB_STATE){var T;A.push("Remove effects"),(null===(T=a.traitVals)||void 0===T?void 0:T.length)&&(A.push("with"),a.traitVals.forEach((function(t,a){a>0&&A.push("&"),A.push(E.a.createElement(D.a,{region:e,trait:t}))}))),t.target.preposition="on"}else if(a.funcType===f.d.CARD_RESET)A.push("Shuffle Cards"),t.target.showing=!1;else if(a.funcType===f.d.DAMAGE_NP)A.push("Deal damage"),t.amount.preposition="for";else if(a.funcType===f.d.DAMAGE_NP_INDIVIDUAL||a.funcType===f.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX)"number"===typeof n.Target?A.push(E.a.createElement("span",null,"Deal damage (additional to targets with ",E.a.createElement(D.a,{region:e,trait:n.Target}),")")):A.push("Deal damage"),t.amount.preposition="for";else if(a.funcType===f.d.DAMAGE_NP_INDIVIDUAL_SUM){var N=[];"number"===typeof n.TargetList&&(N.push("to targets with"),N.push(E.a.createElement(D.a,{region:e,trait:n.TargetList}))),n.ParamAddMaxCount&&N.push("[Limit ".concat(n.ParamAddMaxCount,"]")),A.push("Deal damage"),N.length&&A.push(E.a.createElement(E.a.Fragment,null,"(additional"," ",Object(p.d)(N," ").map((function(e,t){return E.a.createElement(E.a.Fragment,{key:t},e)})),")"))}else if(a.funcType===f.d.DAMAGE_NP_RARE)A.push("Deal damage"),"string"===typeof n.TargetRarityList&&(A.push("that deals additional to"),A.push(n.TargetRarityList),A.push(n.TargetRarityList.split("/").length>1?"rarities":"rarity")),t.amount.preposition="for";else if(a.funcType===f.d.DAMAGE_NP_PIERCE)A.push("Deal damage that pierces defence"),t.amount.preposition="for";else if(a.funcType===f.d.DELAY_NPTURN)A.push("Drain Charge"),t.target.preposition="from";else if(a.funcType===f.d.FORCE_INSTANT_DEATH)A.push("Force Instant Death"),t.target.preposition="on";else if(a.funcType===f.d.GAIN_HP)A.push("Restore HP"),t.target.preposition="for";else if(a.funcType===f.d.GAIN_NP)A.push("Charge NP"),t.target.preposition="for";else if(a.funcType===f.d.GAIN_HP_FROM_TARGETS){var I,O;switch(n.DependFuncId){case 711:I="".concat(null!==(r=null===(i=n.DependFuncVals)||void 0===i?void 0:i.Value)&&void 0!==r?r:""," HP"),O="All Enemies"}A.push("Drain ".concat(I," from ").concat(O," and Restore HP")),t.target.preposition="for"}else if(a.funcType===f.d.GAIN_NP_FROM_TARGETS){var h,R;switch(n.DependFuncId){case 474:h="".concat(null!==(s=null===(u=n.DependFuncVals)||void 0===u?void 0:u.Value)&&void 0!==s?s:1," Charge"),R="All Enemies";break;case 3962:h="NP",R="All Other Allies"}A.push("Drain ".concat(h," from ").concat(R," and Charge NP")),t.target.preposition="for"}else a.funcType===f.d.GAIN_STAR?(A.push("Gain Critical Stars"),t.target.showing=!1):a.funcType===f.d.HASTEN_NPTURN?(A.push("Charge NP"),t.amount.preposition="by",t.target.preposition="for"):a.funcType===f.d.INSTANT_DEATH?A.push("Apply Death"):a.funcType===f.d.LOSS_HP_SAFE?(A.push("Drain HP"),t.target.preposition="from"):a.funcType===f.d.LOSS_NP?(A.push("Drain NP"),t.target.preposition="from"):a.funcType===f.d.NONE?(A.push("No Effect"),t.target.showing=!1):A.push(a.funcType)}(e,n,t,a),function(e,t,a,n){var r,i,s,u,o,_,c,A,p,T=t.amount,N=T.parts;if((null===(r=a.buffs[0])||void 0===r?void 0:r.type)===l.a.ADD_INDIVIDUALITY&&"number"===typeof n.Value)N.push(E.a.createElement(D.a,{region:e,trait:n.Value}));else if((null===(i=a.buffs[0])||void 0===i?void 0:i.type)!==l.a.ATTACK_FUNCTION&&(null===(s=a.buffs[0])||void 0===s?void 0:s.type)!==l.a.COMMANDATTACK_FUNCTION&&(null===(u=a.buffs[0])||void 0===u?void 0:u.type)!==l.a.COMMANDATTACK_BEFORE_FUNCTION&&(null===(o=a.buffs[0])||void 0===o?void 0:o.type)!==l.a.DAMAGE_FUNCTION&&(null===(_=a.buffs[0])||void 0===_?void 0:_.type)!==l.a.DEAD_FUNCTION&&(null===(c=a.buffs[0])||void 0===c?void 0:c.type)!==l.a.DELAY_FUNCTION&&(null===(A=a.buffs[0])||void 0===A?void 0:A.type)!==l.a.SELFTURNEND_FUNCTION||"number"!==typeof n.Value)if(a.funcType===f.d.CARD_RESET&&n.Value)T.preposition=void 0,N.push("".concat(n.Value," time").concat(n.Value>1?"s":""));else if(a.funcType===f.d.DAMAGE_NP_INDIVIDUAL_SUM)N.push(E.a.createElement(O.a,{region:e,func:a,dataVal:n,hideRate:!0}));else if(a.funcType===f.d.GAIN_HP_FROM_TARGETS)T.showing=!1;else if(a.funcType===f.d.GAIN_NP_FROM_TARGETS){var d;void 0!==(null===(d=n.DependFuncVals)||void 0===d?void 0:d.Value2)?N.push(E.a.createElement(O.a,{region:e,func:a,dataVal:n,hideRate:!0})):T.showing=!1}else if((null===(p=a.buffs[0])||void 0===p?void 0:p.type)===l.a.NPATTACK_PREV_BUFF){if("number"!==typeof n.SkillID)return void(T.showing=!1);T.preposition=void 0,N.push("that triggers"),N.push(E.a.createElement(h.a,{region:e,id:n.SkillID}))}else a.buffs[0]&&n.Value?N.push(E.a.createElement(I.a,{region:e,buff:a.buffs[0],dataVal:n})):n.Value?N.push(E.a.createElement(O.a,{region:e,func:a,dataVal:n,hideRate:!0})):T.showing=!1;else T.preposition=void 0,N.push("that triggers"),N.push(E.a.createElement(h.a,{region:e,id:n.Value}))}(e,n,t,a),function(e,t,a,n){var r=t.affects,i=r.parts;a.funcquestTvals.length&&(i.push("if on field"),i.push(Object(p.e)(a.funcquestTvals.map((function(t){return E.a.createElement(D.a,{region:e,trait:t})}))," & "))),a.functvals.length&&(i.push("for"),a.functvals.length>1&&i.push("all"),a.functvals.forEach((function(t,a){a>0&&i.push("&"),i.push(E.a.createElement(D.a,{region:e,trait:t}))}))),i.length||(r.showing=!1)}(e,n,t),function(e,t,a,n){var r=t.target.parts;R.has(a.funcTargetType)?r.push(R.get(a.funcTargetType)):r.push(a.funcTargetType)}(0,n,t),function(e,t,a,n){var r=t.duration,i=r.parts;if(n.Count&&n.Count>0&&n.Turn&&n.Turn>0){var s=1===n.Count?"1 Time":"".concat(n.Count," Times"),u=1===n.Turn?"1 Turn":"".concat(n.Turn," Turns");i.push("(".concat(u,", ").concat(s,")"))}else n.Turn&&n.Turn>0?i.push(1===n.Turn?"(1 Turn)":"(".concat(n.Turn," Turns)")):n.Count&&n.Count>0?i.push(1===n.Count?"(1 Time)":"(".concat(n.Count," Times)")):r.showing=!1}(0,n,0,a),function(e,t,a,n){var r=t.scaling,i=r.parts,s=Object(A.b)(a),u=Object(A.c)(a);s||u?(s&&i.push("<LEVEL>"),u&&i.push("<OVERCHARGE>")):r.showing=!1}(0,n,t);var r=[];return Object.values(n).forEach((function(e){e.showing&&(e.preposition&&r.push(e.preposition),r=r.concat(e.parts))})),r.push(E.a.createElement(c.b,{to:"/".concat(e,"/func/").concat(t.funcId)},E.a.createElement(o.a,{icon:u.d}))),r=Object(p.d)(r," "),E.a.createElement("span",null,r.map((function(e,t){return E.a.createElement(E.a.Fragment,{key:t},e)})))}}]),a}(E.a.Component);t.a=S},120:function(e,t,a){"use strict";var n=a(11),r=a(12),i=a(19),s=a(18),u=a(0),o=a.n(u),_=a(16),E=a(111),c=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(_.b,{to:"/".concat(this.props.region,"/skill/").concat(this.props.skill.id)},"[",o.a.createElement(E.a,{location:this.props.skill.icon,height:this.props.iconHeight})," ",this.props.skill.name?this.props.skill.name:"Skill: ".concat(this.props.skill.id),"]")}}]),a}(o.a.Component);t.a=c},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return A})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return l})),a.d(t,"f",(function(){return f})),a.d(t,"g",(function(){return d}));var n=a(0),r=a.n(n),i=a(119),s=a(113),u=a(151),o=function(e){if(!e.length)return!1;for(var t=e[0],a=1;a<e.length;a++){if(JSON.stringify(t)!==JSON.stringify(e[a]))return!0;t=e[a]}return!1},_=function(e){return new Set(e).size>1};function E(e,t){return function e(t){if(!t.length)return[];var a=function(e){return Object.values(s.a).filter((function(t){var a=e.map((function(e){return e[t]}));return _(a)}))}(t),n=t.filter((function(e){return void 0!==e.DependFuncVals})).length>0?t.map((function(e){var t;return null!==(t=e.DependFuncVals)&&void 0!==t?t:{}})):void 0,r=n?e(n):[],i=f(t);return t.map((function(e,t){var n={};for(var s in a)n[a[s]]=e[a[s]];return i.DependFuncId&&r[t]&&(n.DependFuncId=i.DependFuncId,n.DependFuncVals=r[t]),n}))}(p(t)).map((function(a){return r.a.createElement(u.a,{region:e,func:t,dataVal:a})}))}function c(e){return o(T(e))}function A(e){return o(N(e))}function p(e){var t=c(e),a=A(e);return t&&a?function(e){for(var t=[],a=1;a<=5;a++){var n=d(e,a,a);void 0!==n&&t.push(n)}return t}(e):a?N(e):T(e)}function T(e){var t;return null!==(t=e.svals)&&void 0!==t?t:[]}function N(e){for(var t=[],a=1;a<=5;a++){var n=d(e,1,a);void 0!==n&&t.push(n)}return t}function l(e){if(e.funcType!==s.d.ADD_STATE&&e.funcType!==s.d.ADD_STATE_SHORT)return[];var t=e.buffs[0];if(t.type===i.a.ATTACK_FUNCTION||t.type===i.a.COMMANDATTACK_FUNCTION||t.type===i.a.COMMANDATTACK_BEFORE_FUNCTION||t.type===i.a.DAMAGE_FUNCTION||t.type===i.a.DEAD_FUNCTION||t.type===i.a.DELAY_FUNCTION||t.type===i.a.SELFTURNEND_FUNCTION){var a=p(e)[0];return"number"===typeof a.Value?[a.Value]:[]}if(t.type===i.a.NPATTACK_PREV_BUFF){var n=p(e)[0];return"number"===typeof n.SkillID?[n.SkillID]:[]}return[]}function f(e){if(!e.length)return{};var t=function(e){return Object.values(s.a).filter((function(t){var a=e.map((function(e){return e[t]}));return!_(a)}))}(e),a={},n=e.filter((function(e){return void 0!==e.DependFuncVals})).length>0,r=n?e.map((function(e){var t;return null!==(t=e.DependFuncVals)&&void 0!==t?t:{}})):void 0,i=r?f(r):void 0;for(var u in t)a[t[u]]=e[0][t[u]];return n&&(a.DependFuncVals=i),a}function d(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(void 0!==e.svals)return(2===a&&e.svals2?e.svals2:3===a&&e.svals3?e.svals3:4===a&&e.svals4?e.svals4:5===a&&e.svals5?e.svals5:e.svals)[t-1]}},134:function(e,t,a){"use strict";var n=a(100),r=a.n(n),i=a(101),s=a(11),u=a(12),o=a(19),_=a(18),E=a(0),c=a.n(E),A=a(16),p=a(98),T=a(120),N=function(e){Object(o.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,p.a.skill(this.props.region,this.props.id);case 4:e.t1=e.sent,e.t2={skill:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=11;break;case 9:e.prev=9,e.t3=e.catch(0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e="/".concat(this.props.region,"/skill/").concat(this.props.id);return void 0===this.state.skill?c.a.createElement(A.b,{to:e},"[Skill: ",this.props.id,"]"):c.a.createElement(T.a,{region:this.props.region,skill:this.state.skill})}}]),a}(c.a.Component);t.a=N},151:function(e,t,a){"use strict";var n=a(11),r=a(12),i=a(19),s=a(18),u=a(0),o=a.n(u),_=a(119),E=a(113),c=a(97),A=a(152),p=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.region,t=this.props.func,a=this.props.dataVal,n=[];if((t.funcType===E.d.ADD_STATE||t.funcType===E.d.ADD_STATE_SHORT)&&t.buffs[0]&&(a.Value||t.buffs[0].type===_.a.DAMAGE_FUNCTION&&a.Value2||t.buffs[0].type===_.a.DEAD_FUNCTION&&a.Value2||t.buffs[0].type===_.a.DELAY_FUNCTION&&a.Value2||t.buffs[0].type===_.a.NPATTACK_PREV_BUFF&&a.SkillID||t.buffs[0].type===_.a.SELFTURNEND_FUNCTION&&a.Value2))return o.a.createElement(A.a,{region:e,buff:t.buffs[0],dataVal:a});if(this.props.hideRate||void 0===a.Rate||n.push(Object(c.a)(a.Rate,1)),void 0!==a.Value)switch(t.funcType){case E.d.DAMAGE_NP:case E.d.DAMAGE_NP_INDIVIDUAL:case E.d.DAMAGE_NP_INDIVIDUAL_SUM:case E.d.DAMAGE_NP_PIERCE:case E.d.DAMAGE_NP_RARE:case E.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX:n.push(Object(c.a)(a.Value,1));break;case E.d.GAIN_NP:case E.d.LOSS_NP:n.push(Object(c.a)(a.Value,2));break;default:n.push(a.Value.toString())}if(void 0!==a.Value2)switch(t.funcType){case E.d.GAIN_NP_FROM_TARGETS:n.push(Object(c.a)(a.Value2,2));break;case E.d.DAMAGE_NP_INDIVIDUAL_SUM:n.push("additional "+Object(c.a)(a.Value2,1))}if(void 0!==a.Correction)switch(t.funcType){case E.d.DAMAGE_NP_INDIVIDUAL:case E.d.DAMAGE_NP_RARE:case E.d.DAMAGE_NP_STATE_INDIVIDUAL_FIX:n.push(Object(c.a)(a.Correction,1));break;case E.d.DAMAGE_NP_INDIVIDUAL_SUM:n.push("("+Object(c.a)(a.Correction,1)+" x count)");break;default:n.push(a.Correction.toString())}if(void 0!==a.DependFuncId&&void 0!==a.DependFuncVals)switch(t.funcType){case E.d.GAIN_HP_FROM_TARGETS:var r;switch(a.DependFuncId){case 711:r=a.DependFuncVals.Value}void 0!==r&&n.push(r);break;case E.d.GAIN_NP_FROM_TARGETS:var i;switch(a.DependFuncId){case 474:i=a.DependFuncVals.Value2;break;case 3962:i=a.DependFuncVals.Value}void 0!==i&&n.push(Object(c.a)(i,2))}return n.length?o.a.createElement("span",null,Object(c.e)(n," + ")):o.a.createElement("span",null,"-")}}]),a}(o.a.Component);t.a=p},152:function(e,t,a){"use strict";var n=a(11),r=a(12),i=a(19),s=a(18),u=a(0),o=a.n(u),_=a(119),E=a(97),c=a(106),A=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e,t,a=null;switch(this.props.buff.type){case _.a.UP_ATK:case _.a.DOWN_ATK:case _.a.UP_COMMANDALL:case _.a.DOWN_COMMANDALL:case _.a.UP_CRITICALDAMAGE:case _.a.DOWN_CRITICALDAMAGE:case _.a.UP_CRITICALPOINT:case _.a.DOWN_CRITICALPOINT:case _.a.UP_CRITICALRATE:case _.a.DOWN_CRITICALRATE:case _.a.UP_CRITICAL_RATE_DAMAGE_TAKEN:case _.a.DOWN_CRITICAL_RATE_DAMAGE_TAKEN:case _.a.UP_DAMAGE:case _.a.DOWN_DAMAGE:case _.a.UP_DAMAGEDROPNP:case _.a.DOWN_DAMAGEDROPNP:case _.a.UP_DEFENCE:case _.a.DOWN_DEFENCE:case _.a.UP_DEFENCECOMMANDALL:case _.a.DOWN_DEFENCECOMMANDALL:case _.a.UP_DROPNP:case _.a.DOWN_DROPNP:case _.a.UP_FUNC_HP_REDUCE:case _.a.DOWN_FUNC_HP_REDUCE:case _.a.UP_HATE:case _.a.UP_NONRESIST_INSTANTDEATH:case _.a.UP_NPDAMAGE:case _.a.DOWN_NPDAMAGE:case _.a.UP_STARWEIGHT:case _.a.DOWN_STARWEIGHT:case _.a.UP_TOLERANCE:case _.a.DOWN_TOLERANCE:case _.a.UP_TOLERANCE_SUBSTATE:case _.a.DOWN_TOLERANCE_SUBSTATE:a=Object(E.a)(this.props.dataVal.Value,1);break;case _.a.REGAIN_NP:a=Object(E.a)(this.props.dataVal.Value,2);break;case _.a.ATTACK_FUNCTION:case _.a.COMMANDATTACK_FUNCTION:case _.a.COMMANDATTACK_BEFORE_FUNCTION:case _.a.DAMAGE_FUNCTION:case _.a.DEAD_FUNCTION:case _.a.DELAY_FUNCTION:case _.a.SELFTURNEND_FUNCTION:this.props.dataVal.Value2&&(a="Lv. "+this.props.dataVal.Value2);break;case _.a.NPATTACK_PREV_BUFF:this.props.dataVal.SkillLV&&(a="Lv. "+this.props.dataVal.SkillLV);break;case _.a.FIELD_INDIVIDUALITY:"number"===typeof this.props.dataVal.Value&&(a=o.a.createElement(c.a,{region:this.props.region,trait:this.props.dataVal.Value}));break;default:a=null!==(e=null===(t=this.props.dataVal.Value)||void 0===t?void 0:t.toString())&&void 0!==e?e:""}return a}}]),a}(o.a.Component);t.a=A}}]);
//# sourceMappingURL=3.b6b87525.chunk.js.map