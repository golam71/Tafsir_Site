const f={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return U(this.context.count)},getNextContextId(){return U(this.context.count++)}};function U(e){const n=String(e),t=n.length-1;return f.context.id+(t?String.fromCharCode(96+t):"")+n}function v(e){f.context=e}function fe(){return{...f.context,id:f.getNextContextId(),count:0}}const ue=(e,n)=>e===n,He=Symbol("solid-proxy"),_e=Symbol("solid-track"),N={equals:ue};let ce=ne;const w=1,H=2,X={owned:null,cleanups:null,context:null,owner:null};var a=null;let L=null,ae=null,d=null,g=null,x=null,I=0;function Q(e,n){const t=d,s=a,i=e.length===0,l=n===void 0?s:n,r=i?X:{owned:null,cleanups:null,context:l?l.context:null,owner:l},o=i?e:()=>e(()=>T(()=>k(r)));a=r,d=null;try{return E(o,!0)}finally{d=t,a=s}}function M(e,n){n=n?Object.assign({},N,n):N;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),z(t,i));return[Z.bind(t),s]}function _(e,n,t){const s=ee(e,n,!1,w);P(s)}function m(e,n,t){t=t?Object.assign({},N,t):N;const s=ee(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,P(s),Z.bind(s)}function qe(e){return E(e,!1)}function T(e){if(d===null)return e();const n=d;d=null;try{return e()}finally{d=n}}function de(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function Fe(){return d}function he(){return a}function ge(e){x.push.apply(x,e),e.length=0}function J(e,n){const t=Symbol("context");return{id:t,Provider:Se(t),defaultValue:e}}function pe(e){let n;return a&&a.context&&(n=a.context[e.id])!==void 0?n:e.defaultValue}function ye(e){const n=m(e),t=m(()=>O(n()));return t.toArray=()=>{const s=t();return Array.isArray(s)?s:s!=null?[s]:[]},t}let R;function xe(){return R||(R=J())}function Z(){if(this.sources&&this.state)if(this.state===w)P(this);else{const e=g;g=null,E(()=>q(this),!1),g=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function z(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&E(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=L&&L.running;r&&L.disposed.has(l),(r?!l.tState:!l.state)&&(l.pure?g.push(l):x.push(l),l.observers&&se(l)),r||(l.state=w)}if(g.length>1e6)throw g=[],new Error},!1)),n}function P(e){if(!e.fn)return;k(e);const n=I;be(e,e.value,n)}function be(e,n,t){let s;const i=a,l=d;d=a=e;try{s=e.fn(n)}catch(r){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(k),e.owned=null),e.updatedAt=t+1,ie(r)}finally{d=l,a=i}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?z(e,s):e.value=s,e.updatedAt=t)}function ee(e,n,t,s=w,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:a,context:a?a.context:null,pure:t};return a===null||a!==X&&(a.owned?a.owned.push(l):a.owned=[l]),l}function te(e){if(e.state===0)return;if(e.state===H)return q(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<I);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===w)P(e);else if(e.state===H){const s=g;g=null,E(()=>q(e,n[0]),!1),g=s}}function E(e,n){if(g)return e();let t=!1;n||(g=[]),x?t=!0:x=[],I++;try{const s=e();return we(t),s}catch(s){t||(x=null),g=null,ie(s)}}function we(e){if(g&&(ne(g),g=null),e)return;const n=x;x=null,n.length&&E(()=>ce(n),!1)}function ne(e){for(let n=0;n<e.length;n++)te(e[n])}function q(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const i=s.state;i===w?s!==n&&(!s.updatedAt||s.updatedAt<I)&&te(s):i===H&&q(s,n)}}}function se(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=H,t.pure?g.push(t):x.push(t),t.observers&&se(t))}}function k(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,t.observerSlots[s]=r)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)k(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function Ce(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ie(e,n=a){throw Ce(e)}function O(e){if(typeof e=="function"&&!e.length)return O(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const s=O(e[t]);Array.isArray(s)?n.push.apply(n,s):n.push(s)}return n}return e}function Se(e,n){return function(s){let i;return _(()=>i=T(()=>(a.context={...a.context,[e]:s.value},ye(()=>s.children))),void 0),i}}let le=!1;function Ae(){le=!0}function ve(e,n){if(le&&f.context){const t=f.context;v(fe());const s=T(()=>e(n||{}));return v(t),s}return T(()=>e(n||{}))}const Ee=J();function Ie(e){let n=0,t,s,i,l,r;const[o,u]=M(!1),h=xe(),c={increment:()=>{++n===1&&u(!0)},decrement:()=>{--n===0&&u(!1)},inFallback:o,effects:[],resolved:!1},p=he();if(f.context&&f.load){const b=f.getContextId();let S=f.load(b);if(S&&(typeof S!="object"||S.status!=="success"?i=S:f.gather(b)),i&&i!=="$$f"){const[Y,$]=M(void 0,{equals:!1});l=Y,i.then(()=>{if(f.done)return $();f.gather(b),v(s),$(),v()},B=>{r=B,$()})}}const C=pe(Ee);C&&(t=C.register(c.inFallback));let y;return de(()=>y&&y()),ve(h.Provider,{value:c,get children(){return m(()=>{if(r)throw r;if(s=f.context,l)return l(),l=void 0;s&&i==="$$f"&&v();const b=m(()=>e.children);return m(S=>{const Y=c.inFallback(),{showContent:$=!0,showFallback:B=!0}=t?t():{};if((!Y||i&&i!=="$$f")&&$)return c.resolved=!0,y&&y(),y=s=i=void 0,ge(c.effects),b();if(B)return y?S:Q(re=>(y=re,s&&(v({id:s.id+"F",count:0}),s=void 0),e.fallback),p)})})}})}function $e(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,u=n[i-1].nextSibling,h=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const c=l<s?o?t[o-1].nextSibling:t[l-o]:u;for(;o<l;)e.insertBefore(t[o++],c)}else if(l===o)for(;r<i;)(!h||!h.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const c=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],c),n[i]=t[l]}else{if(!h){h=new Map;let p=o;for(;p<l;)h.set(t[p],p++)}const c=h.get(n[r]);if(c!=null)if(o<c&&c<l){let p=r,C=1,y;for(;++p<i&&p<l&&!((y=h.get(n[p]))==null||y!==c+C);)C++;if(C>c-o){const b=n[r];for(;o<c;)e.insertBefore(t[o++],b)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const V="_$DX_DELEGATE";function G(e,n,t,s={}){let i;return Q(l=>{i=l,n===document?e():me(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function Pe(e,n,t){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},l=()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function ke(e,n=window.document){const t=n[V]||(n[V]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,oe))}}function Ye(e,n,t){D(e)||(t==null?e.removeAttribute(n):e.setAttribute(n,t))}function me(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return F(e,n,s,t);_(i=>F(e,n(),i,t),s)}function Te(e,n,t={}){if(globalThis._$HY.done)return G(e,n,[...n.childNodes],t);f.completed=globalThis._$HY.completed,f.events=globalThis._$HY.events,f.load=s=>globalThis._$HY.r[s],f.has=s=>s in globalThis._$HY.r,f.gather=s=>W(n,s),f.registry=new Map,f.context={id:t.renderId||"",count:0};try{return W(n,t.renderId),G(e,n,[...n.childNodes],t)}finally{f.context=null}}function Be(e){let n,t;return!D()||!(n=f.registry.get(t=Ne()))?e():(f.completed&&f.completed.add(n),f.registry.delete(t),n)}function Le(){f.events&&!f.events.queued&&(queueMicrotask(()=>{const{completed:e,events:n}=f;for(n.queued=!1;n.length;){const[t,s]=n[0];if(!e.has(t))return;n.shift(),oe(s)}f.done&&(f.events=_$HY.events=null,f.completed=_$HY.completed=null)}),f.events.queued=!0)}function D(e){return!!f.context&&!f.done&&(!e||e.isConnected)}function oe(e){if(f.registry&&f.events&&f.events.find(([s,i])=>i===e))return;const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),f.registry&&!f.done&&(f.done=_$HY.done=!0);t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function F(e,n,t,s,i){const l=D(e);if(l){!t&&(t=[...e.childNodes]);let u=[];for(let h=0;h<t.length;h++){const c=t[h];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():u.push(c)}t=u}for(;typeof t=="function";)t=t();if(n===t)return t;const r=typeof n,o=s!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,r==="string"||r==="number"){if(l||r==="number"&&(n=n.toString(),n===t))return t;if(o){let u=t[0];u&&u.nodeType===3?u.data!==n&&(u.data=n):u=document.createTextNode(n),t=A(e,t,s,u)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||r==="boolean"){if(l)return t;t=A(e,t,s)}else{if(r==="function")return _(()=>{let u=n();for(;typeof u=="function";)u=u();t=F(e,u,t,s)}),()=>t;if(Array.isArray(n)){const u=[],h=t&&Array.isArray(t);if(j(u,n,t,i))return _(()=>t=F(e,u,t,s,!0)),()=>t;if(l){if(!u.length)return t;if(s===void 0)return t=[...e.childNodes];let c=u[0];if(c.parentNode!==e)return t;const p=[c];for(;(c=c.nextSibling)!==s;)p.push(c);return t=p}if(u.length===0){if(t=A(e,t,s),o)return t}else h?t.length===0?K(e,u,s):$e(e,t,u):(t&&A(e),K(e,u));t=u}else if(n.nodeType){if(l&&n.parentNode)return t=o?[n]:n;if(Array.isArray(t)){if(o)return t=A(e,t,s,n);A(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function j(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],u=t&&t[e.length],h;if(!(o==null||o===!0||o===!1))if((h=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=j(e,o,u)||i;else if(h==="function")if(s){for(;typeof o=="function";)o=o();i=j(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||i}else e.push(o),i=!0;else{const c=String(o);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return i}function K(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function A(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const u=o.parentNode===e;!l&&!r?u?e.replaceChild(i,o):e.insertBefore(i,t):u&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}function W(e,n){const t=e.querySelectorAll("*[data-hk]");for(let s=0;s<t.length;s++){const i=t[s],l=i.getAttribute("data-hk");(!n||l.startsWith(n))&&!f.registry.has(l)&&f.registry.set(l,i)}}function Ne(){return f.getNextContextId()}const Oe=(...e)=>(Ae(),Te(...e));export{He as $,Ie as S,_e as a,Fe as b,ve as c,ke as d,qe as e,M as f,Be as g,Oe as h,me as i,G as j,Le as r,Ye as s,Pe as t};
