(function(){"use strict";class B{constructor(e){this.properties=e!=null?e:[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const P="https://unpkg.com/@workadventure/scripting-api-extra@1.3.3/dist";class Y{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new B(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function O(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(P+"/configuration.html"+e)}async function Q(t,e){const n=await WA.room.getTiledMap(),r=new Map;return j(n.layers,r,t,e),r}function j(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const i of o.objects)if(i.type==="variable"||i.class==="variable"){if(!!n&&o.name!==n||!!r&&!r.includes(i.name))continue;e.set(i.name,new Y(i))}}else o.type==="group"&&j(o.layers,e,n,r)}let x;async function L(){return x===void 0&&(x=z()),x}async function z(){return ee(await WA.room.getTiledMap())}function ee(t){const e=new Map;return _(t.layers,"",e),e}function _(t,e,n){for(const r of t)r.type==="group"?_(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}function te(t){let e=1/0,n=1/0,r=0,o=0;const i=t.data;if(typeof i=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<t.height;s++)for(let u=0;u<t.width;u++)i[u+s*t.width]!==0&&(e=Math.min(e,u),o=Math.max(o,u),n=Math.min(n,s),r=Math.max(r,s));return{top:n,left:e,right:o+1,bottom:r+1}}function N(t){let e=1/0,n=1/0,r=0,o=0;for(const i of t){const s=te(i);s.left<e&&(e=s.left),s.top<n&&(n=s.top),s.right>o&&(o=s.right),s.bottom>r&&(r=s.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ne=Object.prototype.toString,S=Array.isArray||function(e){return ne.call(e)==="[object Array]"};function R(t){return typeof t=="function"}function re(t){return S(t)?"array":typeof t}function G(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function q(t,e){return t!=null&&typeof t=="object"&&e in t}function oe(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var ie=RegExp.prototype.test;function se(t,e){return ie.call(t,e)}var ae=/\S/;function ue(t){return!se(ae,t)}var le={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function ce(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return le[n]})}var pe=/\s*/,fe=/\s+/,K=/\s*=/,he=/\s*\}/,de=/#|\^|\/|>|\{|&|=|!/;function ge(t,e){if(!t)return[];var n=!1,r=[],o=[],i=[],s=!1,u=!1,a="",c=0;function h(){if(s&&!u)for(;i.length;)delete o[i.pop()];else i=[];s=!1,u=!1}var y,w,f;function A(b){if(typeof b=="string"&&(b=b.split(fe,2)),!S(b)||b.length!==2)throw new Error("Invalid tags: "+b);y=new RegExp(G(b[0])+"\\s*"),w=new RegExp("\\s*"+G(b[1])),f=new RegExp("\\s*"+G("}"+b[1]))}A(e||m.tags);for(var l=new E(t),p,d,v,T,k,W;!l.eos();){if(p=l.pos,v=l.scanUntil(y),v)for(var D=0,Ze=v.length;D<Ze;++D)T=v.charAt(D),ue(T)?(i.push(o.length),a+=T):(u=!0,n=!0,a+=" "),o.push(["text",T,p,p+1]),p+=1,T===`
`&&(h(),a="",c=0,n=!1);if(!l.scan(y))break;if(s=!0,d=l.scan(de)||"name",l.scan(pe),d==="="?(v=l.scanUntil(K),l.scan(K),l.scanUntil(w)):d==="{"?(v=l.scanUntil(f),l.scan(he),l.scanUntil(w),d="&"):v=l.scanUntil(w),!l.scan(w))throw new Error("Unclosed tag at "+l.pos);if(d==">"?k=[d,v,p,l.pos,a,c,n]:k=[d,v,p,l.pos],c++,o.push(k),d==="#"||d==="^")r.push(k);else if(d==="/"){if(W=r.pop(),!W)throw new Error('Unopened section "'+v+'" at '+p);if(W[1]!==v)throw new Error('Unclosed section "'+W[1]+'" at '+p)}else d==="name"||d==="{"||d==="&"?u=!0:d==="="&&A(v)}if(h(),W=r.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+l.pos);return me(ye(o))}function ye(t){for(var e=[],n,r,o=0,i=t.length;o<i;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function me(t){for(var e=[],n=e,r=[],o,i,s=0,u=t.length;s<u;++s)switch(o=t[s],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":i=r.pop(),i[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function E(t){this.string=t,this.tail=t,this.pos=0}E.prototype.eos=function(){return this.tail===""},E.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},E.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function C(t,e){this.view=t,this.cache={".":this.view},this.parent=e}C.prototype.push=function(e){return new C(e,this)},C.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,i,s,u,a=!1;o;){if(e.indexOf(".")>0)for(i=o.view,s=e.split("."),u=0;i!=null&&u<s.length;)u===s.length-1&&(a=q(i,s[u])||oe(i,s[u])),i=i[s[u++]];else i=o.view[e],a=q(o.view,e);if(a){r=i;break}o=o.parent}n[e]=r}return R(r)&&(r=r.call(this.view)),r};function g(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()},g.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||m.tags).join(":"),i=typeof r<"u",s=i?r.get(o):void 0;return s==null&&(s=ge(e,n),i&&r.set(o,s)),s},g.prototype.render=function(e,n,r,o){var i=this.getConfigTags(o),s=this.parse(e,i),u=n instanceof C?n:new C(n,void 0);return this.renderTokens(s,u,r,e,o)},g.prototype.renderTokens=function(e,n,r,o,i){for(var s="",u,a,c,h=0,y=e.length;h<y;++h)c=void 0,u=e[h],a=u[0],a==="#"?c=this.renderSection(u,n,r,o,i):a==="^"?c=this.renderInverted(u,n,r,o,i):a===">"?c=this.renderPartial(u,n,r,i):a==="&"?c=this.unescapedValue(u,n):a==="name"?c=this.escapedValue(u,n,i):a==="text"&&(c=this.rawValue(u)),c!==void 0&&(s+=c);return s},g.prototype.renderSection=function(e,n,r,o,i){var s=this,u="",a=n.lookup(e[1]);function c(w){return s.render(w,n,r,i)}if(!!a){if(S(a))for(var h=0,y=a.length;h<y;++h)u+=this.renderTokens(e[4],n.push(a[h]),r,o,i);else if(typeof a=="object"||typeof a=="string"||typeof a=="number")u+=this.renderTokens(e[4],n.push(a),r,o,i);else if(R(a)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");a=a.call(n.view,o.slice(e[3],e[5]),c),a!=null&&(u+=a)}else u+=this.renderTokens(e[4],n,r,o,i);return u}},g.prototype.renderInverted=function(e,n,r,o,i){var s=n.lookup(e[1]);if(!s||S(s)&&s.length===0)return this.renderTokens(e[4],n,r,o,i)},g.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),i=e.split(`
`),s=0;s<i.length;s++)i[s].length&&(s>0||!r)&&(i[s]=o+i[s]);return i.join(`
`)},g.prototype.renderPartial=function(e,n,r,o){if(!!r){var i=this.getConfigTags(o),s=R(r)?r(e[1]):r[e[1]];if(s!=null){var u=e[6],a=e[5],c=e[4],h=s;a==0&&c&&(h=this.indentPartial(s,c,u));var y=this.parse(h,i);return this.renderTokens(y,n,r,h,o)}}},g.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r},g.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||m.escape,i=n.lookup(e[1]);if(i!=null)return typeof i=="number"&&o===m.escape?String(i):o(i)},g.prototype.rawValue=function(e){return e[1]},g.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0},g.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var m={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){M.templateCache=t},get templateCache(){return M.templateCache}},M=new g;m.clearCache=function(){return M.clearCache()},m.parse=function(e,n){return M.parse(e,n)},m.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+re(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,n,r,o)},m.escape=ce,m.Scanner=E,m.Context=C,m.Writer=g;class we{constructor(e,n){this.template=e,this.state=n,this.ast=m.parse(e)}getValue(){return this.value===void 0&&(this.value=m.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=m.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],i=r[1],s=r[4];["name","&","#","^"].includes(o)&&n.add(i),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,n)}}}async function ve(){var t;const e=await L();for(const[n,r]of e.entries()){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const i of o){if(i.type==="int"||i.type==="bool"||i.type==="object"||typeof i.value!="string")continue;const s=new we(i.value,WA.state);if(s.isPureString())continue;const u=s.getValue();$(n,i.name,u),s.onChange(a=>{$(n,i.name,a)})}}}function $(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}let I,V=0,U=0;function Z(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function be(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=H(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Ae(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=H(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function F(t){return t.map(e=>I.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function H(t){const e=F(t),n=N(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(V-r,2)+Math.pow(U-o,2))}function We(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?be(t):Ae(t),Z(t)}),Z(t)}function Se(t,e,n,r){const o=t.name;let i,s,u=!1;const a=n.getString("tag");let c=!0;a&&!WA.player.tags.includes(a)&&(c=!1);const h=!!a;function y(){var l;i&&i.remove(),i=WA.ui.displayActionMessage({message:(l=n.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,w()}})}function w(){var l;i&&i.remove(),i=WA.ui.displayActionMessage({message:(l=n.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,y()}})}function f(l){const p=N(F(e.properties.mustGetString("closeLayer").split(`
`)));s=WA.room.website.create({name:"doorKeypad"+l,url:r+"/keypad.html#"+encodeURIComponent(l),position:{x:p.right*32,y:p.top*32,width:32*3,height:32*4},allowApi:!0})}function A(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(u=!0,n.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(h&&!c||!h)&&(n.getString("code")||n.getString("codeVariable"))){f(o);return}!c||(WA.state[e.name]?y():w())}),WA.room.onLeaveLayer(o).subscribe(()=>{u=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),i&&i.remove(),A()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&y(),s&&WA.state[e.name]===!0&&A(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&w())})}function Ce(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-V,2)+Math.pow(t.y-U,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function Be(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Ce(t)})}function Ee(t,e,n){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var i;o?r=WA.ui.openPopup(o,"",[{label:(i=e.getString("bellButtonText"))!==null&&i!==void 0?i:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Me(t){t=t!=null?t:P;const e=await Q();I=await L();for(const n of e.values())n.properties.get("door")&&We(n),n.properties.get("bell")&&Be(n);for(const n of I.values()){const r=new B(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const s=e.get(o);if(s===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');Se(n,s,r,t)}const i=r.getString("bellVariable");i&&Ee(i,r,n.name)}WA.player.onPlayerMove(n=>{V=n.x,U=n.y})}function Te(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),i=t.getString("triggerMessage"),s=t.getString("tag");Pe(n,e,r,o,i,s)}}function Pe(t,e,n,r,o,i){i&&!WA.player.tags.includes(i)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function Le(){const t=await L();for(const e of t.values()){const n=new B(e.properties);Te(n,e.name)}}let J;async function ke(t){const e=await WA.room.getTiledMap();t=t!=null?t:P,J=await L();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new B(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const i of J.values()){const s=new B(i.properties),u=s.getString("openConfig");u&&i.type==="tilelayer"&&xe(u.split(","),i.name,s)}}}function xe(t,e,n){let r;const o=n.getString("openConfigAdminTag");let i=!0;o&&!WA.player.tags.includes(o)&&(i=!1);function s(){var a;r&&r.remove(),r=WA.ui.displayActionMessage({message:(a=n.getString("openConfigTriggerMessage"))!==null&&a!==void 0?a:"Press SPACE or touch here to configure",callback:()=>O(t)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const a=n.getString("openConfigTrigger");i&&(a&&a==="onaction"?s():O(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),u()})}const Re=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],Ge=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function Ie(){var t;const e=WA.player.state.tutorialDone,n=/Mobi|Android/i.test(navigator.userAgent),o=await((t=(await WA.room.getTiledMap()).properties)===null||t===void 0?void 0:t.find(s=>s.name==="tutorial")),i=o&&o.value;if(!e&&i){Ve(n);let s=await WA.player.getPosition(),u;const a=await WA.room.website.get("tutorial"),c=()=>{const A=s.x+a.x+a.width>u.x+u.width,l=s.x+a.x<u.x,p=s.y+a.y+a.height>u.y+u.height,d=s.y+a.y<u.y;A?a.x=-a.width-1.5*16:l&&(a.x=1.5*16),p?a.y=-a.height:d&&(a.y=16)},h=f=>{a.width=f.width,a.height=f.height,a.scale=f.scale},y=f=>{const l=(n?Re:Ge).filter(p=>{if(p.lowerBound&&p.uppperBound)return p.lowerBound<f&&f<=p.uppperBound;if(p.lowerBound&&!p.uppperBound)return p.lowerBound<f;if(!p.lowerBound&&p.uppperBound)return f<=p.uppperBound;throw new Error(`Zoom level of: ${f} could not fit in any of the desktopConfig's ranges.`)});h(l[0].config)},w=()=>{if(u===void 0)return;const f=u.zoom;y(f),c()};WA.player.onPlayerMove(f=>{s=f,w()}),WA.camera.onCameraUpdate().subscribe(f=>{u=f,w()}),WA.player.state.tutorialDone=!0}}function Ve(t){let e={allow:"",name:"tutorial",url:P+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};t&&(e={...e,position:{x:32,y:-225,height:390,width:250},scale:1}),WA.room.website.create(e)}function Ue(){return WA.onInit().then(()=>{Me().catch(t=>console.error(t)),Le().catch(t=>console.error(t)),ke().catch(t=>console.error(t)),ve().catch(t=>console.error(t)),Ie().catch(t=>console.error(t))}).catch(t=>console.error(t))}const De="https://cdn.pixabay.com/download/audio/2022/02/22/audio_8590a9aa91.mp3?filename=spaceship-ambience-with-effects-21420.mp3";function Oe(){var t=WA.sound.loadSound(De),e={volume:.25,loop:!0,rate:1,detune:1,delay:0,seek:0,mute:!1};t.play(e)}function je(){WA.controls.disableWebcam(),WA.controls.disableMicrophone(),WA.controls.disablePlayerProximityMeeting()}function _e(){Oe(),je()}const Ne=1e3,qe="https://poeschl.github.io/quest-for-coffee/solutions/result.json";function Ke(t){WA.room.hideLayer("Doors/"+t)}function X(){fetch(qe).then(t=>t.json()).then(t=>{console.debug("Recieved door flags "+JSON.stringify(t));for(const[e,n]of Object.entries(t))n&&Ke(e)})}function $e(){X(),setInterval(X,Ne)}WA.onInit().then(()=>{console.log("WorkAdventure API Extra ready"),Ue().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t)),_e(),$e()})})();
//# sourceMappingURL=quest-for-coffee.iife.js.map
