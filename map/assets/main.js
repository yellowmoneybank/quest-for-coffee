class B{constructor(e){this.properties=e!=null?e:[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const V="https://unpkg.com/@workadventure/scripting-api-extra@1.3.3/dist";class he{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new B(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function K(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(V+"/configuration.html"+e)}async function de(t,e){const n=await WA.room.getTiledMap(),r=new Map;return oe(n.layers,r,t,e),r}function oe(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(!!n&&o.name!==n||!!r&&!r.includes(s.name))continue;e.set(s.name,new he(s))}}else o.type==="group"&&oe(o.layers,e,n,r)}let O;async function T(){return O===void 0&&(O=ge()),O}async function ge(){return ye(await WA.room.getTiledMap())}function ye(t){const e=new Map;return se(t.layers,"",e),e}function se(t,e,n){for(const r of t)r.type==="group"?se(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}function me(t){let e=1/0,n=1/0,r=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<t.height;i++)for(let u=0;u<t.width;u++)s[u+i*t.width]!==0&&(e=Math.min(e,u),o=Math.max(o,u),n=Math.min(n,i),r=Math.max(r,i));return{top:n,left:e,right:o+1,bottom:r+1}}function ie(t){let e=1/0,n=1/0,r=0,o=0;for(const s of t){const i=me(s);i.left<e&&(e=i.left),i.top<n&&(n=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var be=Object.prototype.toString,C=Array.isArray||function(e){return be.call(e)==="[object Array]"};function j(t){return typeof t=="function"}function ve(t){return C(t)?"array":typeof t}function D(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function $(t,e){return t!=null&&typeof t=="object"&&e in t}function Ae(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var we=RegExp.prototype.test;function We(t,e){return we.call(t,e)}var Le=/\S/;function Se(t){return!We(Le,t)}var Ce={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function Ee(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return Ce[n]})}var Be=/\s*/,Me=/\s+/,F=/\s*=/,Te=/\s*\}/,Pe=/#|\^|\/|>|\{|&|=|!/;function ke(t,e){if(!t)return[];var n=!1,r=[],o=[],s=[],i=!1,u=!1,a="",l=0;function h(){if(i&&!u)for(;s.length;)delete o[s.pop()];else s=[];i=!1,u=!1}var y,b,p;function W(w){if(typeof w=="string"&&(w=w.split(Me,2)),!C(w)||w.length!==2)throw new Error("Invalid tags: "+w);y=new RegExp(D(w[0])+"\\s*"),b=new RegExp("\\s*"+D(w[1])),p=new RegExp("\\s*"+D("}"+w[1]))}W(e||v.tags);for(var c=new P(t),f,g,A,E,k,L;!c.eos();){if(f=c.pos,A=c.scanUntil(y),A)for(var G=0,pe=A.length;G<pe;++G)E=A.charAt(G),Se(E)?(s.push(o.length),a+=E):(u=!0,n=!0,a+=" "),o.push(["text",E,f,f+1]),f+=1,E===`
`&&(h(),a="",l=0,n=!1);if(!c.scan(y))break;if(i=!0,g=c.scan(Pe)||"name",c.scan(Be),g==="="?(A=c.scanUntil(F),c.scan(F),c.scanUntil(b)):g==="{"?(A=c.scanUntil(p),c.scan(Te),c.scanUntil(b),g="&"):A=c.scanUntil(b),!c.scan(b))throw new Error("Unclosed tag at "+c.pos);if(g==">"?k=[g,A,f,c.pos,a,l,n]:k=[g,A,f,c.pos],l++,o.push(k),g==="#"||g==="^")r.push(k);else if(g==="/"){if(L=r.pop(),!L)throw new Error('Unopened section "'+A+'" at '+f);if(L[1]!==A)throw new Error('Unclosed section "'+L[1]+'" at '+f)}else g==="name"||g==="{"||g==="&"?u=!0:g==="="&&W(A)}if(h(),L=r.pop(),L)throw new Error('Unclosed section "'+L[1]+'" at '+c.pos);return xe(Re(o))}function Re(t){for(var e=[],n,r,o=0,s=t.length;o<s;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function xe(t){for(var e=[],n=e,r=[],o,s,i=0,u=t.length;i<u;++i)switch(o=t[i],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function P(t){this.string=t,this.tail=t,this.pos=0}P.prototype.eos=function(){return this.tail===""};P.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};P.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function S(t,e){this.view=t,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,s,i,u,a=!1;o;){if(e.indexOf(".")>0)for(s=o.view,i=e.split("."),u=0;s!=null&&u<i.length;)u===i.length-1&&(a=$(s,i[u])||Ae(s,i[u])),s=s[i[u++]];else s=o.view[e],a=$(o.view,e);if(a){r=s;break}o=o.parent}n[e]=r}return j(r)&&(r=r.call(this.view)),r};function m(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}m.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};m.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||v.tags).join(":"),s=typeof r<"u",i=s?r.get(o):void 0;return i==null&&(i=ke(e,n),s&&r.set(o,i)),i};m.prototype.render=function(e,n,r,o){var s=this.getConfigTags(o),i=this.parse(e,s),u=n instanceof S?n:new S(n,void 0);return this.renderTokens(i,u,r,e,o)};m.prototype.renderTokens=function(e,n,r,o,s){for(var i="",u,a,l,h=0,y=e.length;h<y;++h)l=void 0,u=e[h],a=u[0],a==="#"?l=this.renderSection(u,n,r,o,s):a==="^"?l=this.renderInverted(u,n,r,o,s):a===">"?l=this.renderPartial(u,n,r,s):a==="&"?l=this.unescapedValue(u,n):a==="name"?l=this.escapedValue(u,n,s):a==="text"&&(l=this.rawValue(u)),l!==void 0&&(i+=l);return i};m.prototype.renderSection=function(e,n,r,o,s){var i=this,u="",a=n.lookup(e[1]);function l(b){return i.render(b,n,r,s)}if(!!a){if(C(a))for(var h=0,y=a.length;h<y;++h)u+=this.renderTokens(e[4],n.push(a[h]),r,o,s);else if(typeof a=="object"||typeof a=="string"||typeof a=="number")u+=this.renderTokens(e[4],n.push(a),r,o,s);else if(j(a)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");a=a.call(n.view,o.slice(e[3],e[5]),l),a!=null&&(u+=a)}else u+=this.renderTokens(e[4],n,r,o,s);return u}};m.prototype.renderInverted=function(e,n,r,o,s){var i=n.lookup(e[1]);if(!i||C(i)&&i.length===0)return this.renderTokens(e[4],n,r,o,s)};m.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!r)&&(s[i]=o+s[i]);return s.join(`
`)};m.prototype.renderPartial=function(e,n,r,o){if(!!r){var s=this.getConfigTags(o),i=j(r)?r(e[1]):r[e[1]];if(i!=null){var u=e[6],a=e[5],l=e[4],h=i;a==0&&l&&(h=this.indentPartial(i,l,u));var y=this.parse(h,s);return this.renderTokens(y,n,r,h,o)}}};m.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};m.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||v.escape,s=n.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===v.escape?String(s):o(s)};m.prototype.rawValue=function(e){return e[1]};m.prototype.getConfigTags=function(e){return C(e)?e:e&&typeof e=="object"?e.tags:void 0};m.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!C(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){M.templateCache=t},get templateCache(){return M.templateCache}},M=new m;v.clearCache=function(){return M.clearCache()};v.parse=function(e,n){return M.parse(e,n)};v.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ve(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,n,r,o)};v.escape=Ee;v.Scanner=P;v.Context=S;v.Writer=m;class Ie{constructor(e,n){this.template=e,this.state=n,this.ast=v.parse(e)}getValue(){return this.value===void 0&&(this.value=v.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=v.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],s=r[1],i=r[4];["name","&","#","^"].includes(o)&&n.add(s),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,n)}}}async function Ve(){var t;const e=await T();for(const[n,r]of e.entries()){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const i=new Ie(s.value,WA.state);if(i.isPureString())continue;const u=i.getValue();H(n,s.name,u),i.onChange(a=>{H(n,s.name,a)})}}}function H(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}let _,N=0,q=0;function Y(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Ge(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=ue(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Oe(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=ue(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function ae(t){return t.map(e=>_.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function ue(t){const e=ae(t),n=ie(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(N-r,2)+Math.pow(q-o,2))}function De(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Ge(t):Oe(t),Y(t)}),Y(t)}function _e(t,e,n,r){const o=t.name;let s,i,u=!1;const a=n.getString("tag");let l=!0;a&&!WA.player.tags.includes(a)&&(l=!1);const h=!!a;function y(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=n.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,b()}})}function b(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=n.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,y()}})}function p(c){const f=ie(ae(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+c,url:r+"/keypad.html#"+encodeURIComponent(c),position:{x:f.right*32,y:f.top*32,width:32*3,height:32*4},allowApi:!0})}function W(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(u=!0,n.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(h&&!l||!h)&&(n.getString("code")||n.getString("codeVariable"))){p(o);return}!l||(WA.state[e.name]?y():b())}),WA.room.onLeaveLayer(o).subscribe(()=>{u=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),W()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&y(),i&&WA.state[e.name]===!0&&W(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&b())})}function Ue(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-N,2)+Math.pow(t.y-q,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function je(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Ue(t)})}function Ne(t,e,n){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{r&&(r.close(),r=void 0)})}async function qe(t){t=t!=null?t:V;const e=await de();_=await T();for(const n of e.values())n.properties.get("door")&&De(n),n.properties.get("bell")&&je(n);for(const n of _.values()){const r=new B(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');_e(n,i,r,t)}const s=r.getString("bellVariable");s&&Ne(s,r,n.name)}WA.player.onPlayerMove(n=>{N=n.x,q=n.y})}function Ke(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),i=t.getString("tag");$e(n,e,r,o,s,i)}}function $e(t,e,n,r,o,s){s&&!WA.player.tags.includes(s)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function Fe(){const t=await T();for(const e of t.values()){const n=new B(e.properties);Ke(n,e.name)}}let Z;async function He(t){const e=await WA.room.getTiledMap();t=t!=null?t:V,Z=await T();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new B(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of Z.values()){const i=new B(s.properties),u=i.getString("openConfig");u&&s.type==="tilelayer"&&Ye(u.split(","),s.name,i)}}}function Ye(t,e,n){let r;const o=n.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function i(){var a;r&&r.remove(),r=WA.ui.displayActionMessage({message:(a=n.getString("openConfigTriggerMessage"))!==null&&a!==void 0?a:"Press SPACE or touch here to configure",callback:()=>K(t)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const a=n.getString("openConfigTrigger");s&&(a&&a==="onaction"?i():K(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),u()})}const Ze=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],Je=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function Xe(){var t;const e=WA.player.state.tutorialDone,n=/Mobi|Android/i.test(navigator.userAgent),o=await((t=(await WA.room.getTiledMap()).properties)===null||t===void 0?void 0:t.find(i=>i.name==="tutorial")),s=o&&o.value;if(!e&&s){Qe(n);let i=await WA.player.getPosition(),u;const a=await WA.room.website.get("tutorial"),l=()=>{const W=i.x+a.x+a.width>u.x+u.width,c=i.x+a.x<u.x,f=i.y+a.y+a.height>u.y+u.height,g=i.y+a.y<u.y;W?a.x=-a.width-1.5*16:c&&(a.x=1.5*16),f?a.y=-a.height:g&&(a.y=16)},h=p=>{a.width=p.width,a.height=p.height,a.scale=p.scale},y=p=>{const c=(n?Ze:Je).filter(f=>{if(f.lowerBound&&f.uppperBound)return f.lowerBound<p&&p<=f.uppperBound;if(f.lowerBound&&!f.uppperBound)return f.lowerBound<p;if(!f.lowerBound&&f.uppperBound)return p<=f.uppperBound;throw new Error(`Zoom level of: ${p} could not fit in any of the desktopConfig's ranges.`)});h(c[0].config)},b=()=>{if(u===void 0)return;const p=u.zoom;y(p),l()};WA.player.onPlayerMove(p=>{i=p,b()}),WA.camera.onCameraUpdate().subscribe(p=>{u=p,b()}),WA.player.state.tutorialDone=!0}}function Qe(t){let e={allow:"",name:"tutorial",url:V+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};t&&(e={...e,position:{x:32,y:-225,height:390,width:250},scale:1}),WA.room.website.create(e)}function ze(){return WA.onInit().then(()=>{qe().catch(t=>console.error(t)),Fe().catch(t=>console.error(t)),He().catch(t=>console.error(t)),Ve().catch(t=>console.error(t)),Xe().catch(t=>console.error(t))}).catch(t=>console.error(t))}function ce(t,e){const n=t.slice().sort(),r=e.slice().sort();return n.length===r.length&&n.every((o,s)=>o===r[s])}const J={code:[1,2,3,6],number:4},X={code:[4,8,9,6],number:5},Q={code:[8,5,2,3],number:2},z={code:[5,7,8,9],number:9},U="4tiles-";let x;function et(){const t=[];for(let e=1;e<=9;e++)WA.state.loadVariable(U+e)>0&&t.push(e);return console.debug("Retrieved tileIds "+t),t}function R(t,e,n){return ce(t,e)?n:"-"}function le(){const t=et(),e=R(t,J.code,J.number)+R(t,X.code,X.number)+R(t,Q.code,Q.number)+R(t,z.code,z.number);x.remove(),x=WA.ui.displayActionMessage({message:"The screen shows: "+e,type:"message",callback:()=>{le()}})}function tt(){x=WA.ui.displayActionMessage({message:"Click Space to check the screen",type:"message",callback:()=>{le()}})}function d(t,e){let n=WA.state.loadVariable(U+t),r;e?r=n+1:r=n-1,WA.state.saveVariable(U+t,r),console.debug("4tiles: "+t+" "+n+" -> "+r)}function nt(){WA.room.onEnterLayer("4tiles1monitor/topleft").subscribe(()=>{d(1,!0)}),WA.room.onLeaveLayer("4tiles1monitor/topleft").subscribe(()=>{d(1,!1)}),WA.room.onEnterLayer("4tiles1monitor/top").subscribe(()=>{d(2,!0)}),WA.room.onLeaveLayer("4tiles1monitor/top").subscribe(()=>{d(2,!1)}),WA.room.onEnterLayer("4tiles1monitor/topright").subscribe(()=>{d(3,!0)}),WA.room.onLeaveLayer("4tiles1monitor/topright").subscribe(()=>{d(3,!1)}),WA.room.onEnterLayer("4tiles1monitor/left").subscribe(()=>{d(4,!0)}),WA.room.onLeaveLayer("4tiles1monitor/left").subscribe(()=>{d(4,!1)}),WA.room.onEnterLayer("4tiles1monitor/center").subscribe(()=>{d(5,!0)}),WA.room.onLeaveLayer("4tiles1monitor/center").subscribe(()=>{d(5,!1)}),WA.room.onEnterLayer("4tiles1monitor/right").subscribe(()=>{d(6,!0)}),WA.room.onLeaveLayer("4tiles1monitor/right").subscribe(()=>{d(6,!1)}),WA.room.onEnterLayer("4tiles1monitor/bottomleft").subscribe(()=>{d(7,!0)}),WA.room.onLeaveLayer("4tiles1monitor/bottomleft").subscribe(()=>{d(7,!1)}),WA.room.onEnterLayer("4tiles1monitor/bottom").subscribe(()=>{d(8,!0)}),WA.room.onLeaveLayer("4tiles1monitor/bottom").subscribe(()=>{d(8,!1)}),WA.room.onEnterLayer("4tiles1monitor/bottomright").subscribe(()=>{d(9,!0)}),WA.room.onLeaveLayer("4tiles1monitor/bottomright").subscribe(()=>{d(9,!1)}),WA.room.onEnterLayer("4tiles1monitor/code").subscribe(()=>{tt()}),WA.room.onLeaveLayer("4tiles1monitor/code").subscribe(()=>{x.remove()})}const rt=1e3,ot="https://poeschl.github.io/quest-for-coffee/solutions/result.json";let ee=[],fe=new Map;function st(t){WA.room.hideLayer("Doors/"+t),WA.room.hideLayer("RiddleLayerHidesTransparency/"+t)}async function it(t){const e=await T(),r=Array.from(e.keys()).filter(o=>o.startsWith("Doors/"+t+"-"))[0].split("/")[1];return console.debug("Get layer group "+r+" for id "+t),r}function te(){fetch(ot).then(t=>t.json()).then(async t=>{const e=Object.values(t);if(!ce(e,ee)){ee=e,console.debug("Recieved new door flags "+JSON.stringify(t));for(const[n,r]of Object.entries(t))r&&(st(await it(n)),at(n))}})}function at(t){const e=fe.get(t);e!=null&&e()}function ut(t,e){fe.set(t,e)}function ct(){te(),setInterval(te,rt)}function lt(){WA.room.showLayer("howmanyunicorns/hidden-unicorns")}function ft(){WA.room.hideLayer("howmanyunicorns/hidden-unicorns"),ut(7,lt)}const ne="noMate",re="noCoffee";let I;function pt(){I=WA.ui.displayActionMessage({message:"Kein Mate verf\xFCgbar",callback:()=>{}}),console.debug("Show Mate")}function ht(){I=WA.ui.displayActionMessage({message:"Kein Kaffee verf\xFCgbar, nur noch koffeinfrei....",callback:()=>{}})}function dt(){WA.room.onEnterLayer(ne).subscribe(()=>{pt()}),WA.room.onLeaveLayer(ne).subscribe(()=>{I.remove()}),WA.room.onEnterLayer(re).subscribe(()=>{ht()}),WA.room.onLeaveLayer(re).subscribe(()=>{I.remove()})}WA.onInit().then(()=>{console.log("WorkAdventure API Extra ready"),ze().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t)),WA.controls.disableWebcam(),WA.controls.disableMicrophone(),WA.controls.disablePlayerProximityMeeting(),ct(),dt(),nt(),ft()});
//# sourceMappingURL=main.js.map
