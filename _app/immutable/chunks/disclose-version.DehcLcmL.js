import{aa as k,Y as A,ab as W,z as N,P as U,q as z,a4 as G,K,w as b,h as X,ac as J,j as f,ad as j,ae as O,x as g,y as L,l as u,v as w,af as Q,ag as Z,k as H,ah as D,ai as M,aj as ee,ak as te,al as re,am as ae,an as ne,ao as oe,i as ie,a as se,p as ue,ap as le}from"./index-client.DczVaH3T.js";function ge(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const de=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function we(e){return de.includes(e)}const ce={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function Te(e){return e=e.toLowerCase(),ce[e]??e}const fe=["touchstart","touchmove"];function _e(e){return fe.includes(e)}const ve=["textarea","script","style","title"];function be(e){return ve.includes(e)}function he(e){var t=W,r=N;k(null),A(null);try{return e()}finally{k(t),A(r)}}const $=new Set,I=new Set;function q(e,t,r,o){function n(a){if(o.capture||T.call(t,a),!a.cancelBubble)return he(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?z(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function Le(e,t,r,o={}){var n=q(t,e,r,o);return()=>{e.removeEventListener(t,n,o)}}function Ne(e,t,r,o,n){var a={capture:o,passive:n},i=q(e,t,r,a);(t===document.body||t===window||t===document)&&U(()=>{t.removeEventListener(e,i,a)})}function Se(e){for(var t=0;t<e.length;t++)$.add(e[t]);for(var r of I)r(e)}function T(e){var V;var t=this,r=t.ownerDocument,o=e.type,n=((V=e.composedPath)==null?void 0:V.call(e))||[],a=n[0]||e.target,i=0,_=e.__root;if(_){var d=n.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var y=n.indexOf(t);if(y===-1)return;d<=y&&(i=d)}if(a=n[i]||e.target,a!==t){G(e,"currentTarget",{configurable:!0,get(){return a||r}});var R=W,v=N;k(null),A(null);try{for(var s,l=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+o];if(m!==void 0&&!a.disabled)if(K(m)){var[F,...Y]=m;F.apply(a,[e,...Y])}else m.call(a,e)}catch(S){s?l.push(S):s=S}if(e.cancelBubble||p===t||p===null)break;a=p}if(s){for(let S of l)queueMicrotask(()=>{throw S});throw s}}finally{e.__root=t,delete e.currentTarget,k(R),A(v)}}}let c;function pe(){c=void 0}function ke(e){let t=null,r=f;var o;if(f){for(t=u,c===void 0&&(c=w(document.head));c!==null&&(c.nodeType!==8||c.data!==j);)c=O(c);c===null?g(!1):c=L(O(c))}f||(o=document.head.appendChild(b()));try{X(()=>e(o),J)}finally{r&&(g(!0),c=u,L(t))}}function x(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function h(e,t){var r=N;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Ae(e,t){var r=(t&Q)!==0,o=(t&Z)!==0,n,a=!e.startsWith("<!>");return()=>{if(f)return h(u,null),u;n===void 0&&(n=x(a?e:"<!>"+e),r||(n=w(n)));var i=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var _=w(i),d=i.lastChild;h(_,d)}else h(i,i);return i}}function Re(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(f)return h(u,null),u;if(!a){var i=x(n),_=w(i);a=w(_)}var d=a.cloneNode(!0);return h(d,d),d}}function Me(e=""){if(!f){var t=b(e+"");return h(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=b()),L(r)),h(r,r),r}function Oe(){if(f)return h(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=b();return e.append(t,r),h(t,r),e}function De(e,t){if(f){N.nodes_end=u,H();return}e!==null&&e.before(t)}let C=!0;function Ie(e){C=e}function Ce(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function me(e,t){return B(e,t)}function Pe(e,t){D(),t.intro=t.intro??!1;const r=t.target,o=f,n=u;try{for(var a=w(r);a&&(a.nodeType!==8||a.data!==j);)a=O(a);if(!a)throw M;g(!0),L(a),H();const i=B(e,{...t,anchor:a});if(u===null||u.nodeType!==8||u.data!==ee)throw te(),M;return g(!1),i}catch(i){if(i===M)return t.recover===!1&&re(),D(),ae(r),g(!1),me(e,t);throw i}finally{g(o),L(n),pe()}}const E=new Map;function B(e,{target:t,anchor:r,props:o={},events:n,context:a,intro:i=!0}){D();var _=new Set,d=v=>{for(var s=0;s<v.length;s++){var l=v[s];if(!_.has(l)){_.add(l);var p=_e(l);t.addEventListener(l,T,{passive:p});var m=E.get(l);m===void 0?(document.addEventListener(l,T,{passive:p}),E.set(l,1)):E.set(l,m+1)}}};d(ne($)),I.add(d);var y=void 0,R=oe(()=>{var v=r??t.appendChild(b());return ie(()=>{if(a){se({});var s=le;s.c=a}n&&(o.$$events=n),f&&h(v,null),C=i,y=e(v,o)||{},C=!0,f&&(N.nodes_end=u),a&&ue()}),()=>{var p;for(var s of _){t.removeEventListener(s,T);var l=E.get(s);--l===0?(document.removeEventListener(s,T),E.delete(s)):E.set(s,l)}I.delete(d),v!==r&&((p=v.parentNode)==null||p.removeChild(v))}});return P.set(y,R),y}let P=new WeakMap;function Ve(e,t){const r=P.get(e);return r?(P.delete(e),r(t)):Promise.resolve()}const ye="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ye);export{De as a,h as b,Oe as c,Ie as d,Me as e,x as f,ge as g,Pe as h,be as i,q as j,Se as k,Te as l,me as m,Re as n,we as o,C as p,ke as q,Ne as r,Ce as s,Ae as t,Ve as u,Le as v};
