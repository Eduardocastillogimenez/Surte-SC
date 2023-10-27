import{b as ne,m as U,u as Z,a as se}from"./tag-6b6e78a9.js";import{g as P,L as T,k as v,i as le,M as R,n as $,N as D,s as X,x as ue,O as q,P as ie,Q as re,R as ce,S as ve,y as me,m as de,h as F,j as pe,u as ye,a as M}from"./index-8c6bff69.js";import{u as fe}from"./ssrBoot-29951010.js";const z=Symbol.for("vuetify:layout"),Q=Symbol.for("vuetify:layout-item"),K=1e3,ge=P({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),$e=P({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function he(){const e=T(z);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Me(e){const l=T(z);if(!l)throw new Error("[Vuetify] Could not find injected layout");const o=e.id??`layout-item-${re()}`,u=D("useLayoutItem");q(Q,{id:o});const n=X(!1);ce(()=>n.value=!0),ve(()=>n.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:r}=l.register(u,{...e,active:v(()=>n.value?!1:e.active.value),id:o});return me(()=>l.unregister(o)),{layoutItemStyles:i,layoutRect:l.layoutRect,layoutItemScrimStyles:r}}const be=(e,l,o,u)=>{let n={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...n}}];for(const r of e){const p=l.get(r),f=o.get(r),g=u.get(r);if(!p||!f||!g)continue;const b={...n,[p.value]:parseInt(n[p.value],10)+(g.value?parseInt(f.value,10):0)};i.push({id:r,layer:b}),n=b}return i};function Ie(e){const l=T(z,null),o=v(()=>l?l.rootZIndex.value-100:K),u=le([]),n=R(new Map),i=R(new Map),r=R(new Map),p=R(new Map),f=R(new Map),{resizeRef:g,contentRect:b}=ne(),W=v(()=>{const a=new Map,m=e.overlaps??[];for(const t of m.filter(c=>c.includes(":"))){const[c,s]=t.split(":");if(!u.value.includes(c)||!u.value.includes(s))continue;const y=n.get(c),h=n.get(s),w=i.get(c),L=i.get(s);!y||!h||!w||!L||(a.set(s,{position:y.value,amount:parseInt(w.value,10)}),a.set(c,{position:h.value,amount:-parseInt(L.value,10)}))}return a}),I=v(()=>{const a=[...new Set([...r.values()].map(t=>t.value))].sort((t,c)=>t-c),m=[];for(const t of a){const c=u.value.filter(s=>{var y;return((y=r.get(s))==null?void 0:y.value)===t});m.push(...c)}return be(m,n,i,p)}),B=v(()=>!Array.from(f.values()).some(a=>a.value)),x=v(()=>I.value[I.value.length-1].layer),Y=v(()=>({"--v-layout-left":$(x.value.left),"--v-layout-right":$(x.value.right),"--v-layout-top":$(x.value.top),"--v-layout-bottom":$(x.value.bottom),...B.value?void 0:{transition:"none"}})),S=v(()=>I.value.slice(1).map((a,m)=>{let{id:t}=a;const{layer:c}=I.value[m],s=i.get(t),y=n.get(t);return{id:t,...c,size:Number(s.value),position:y.value}})),E=a=>S.value.find(m=>m.id===a),A=D("createLayout"),H=X(!1);ue(()=>{H.value=!0}),q(z,{register:(a,m)=>{let{id:t,order:c,position:s,layoutSize:y,elementSize:h,active:w,disableTransitions:L,absolute:ee}=m;r.set(t,c),n.set(t,s),i.set(t,y),p.set(t,w),L&&f.set(t,L);const N=ie(Q,A==null?void 0:A.vnode).indexOf(a);N>-1?u.value.splice(N,0,t):u.value.push(t);const _=v(()=>S.value.findIndex(V=>V.id===t)),C=v(()=>o.value+I.value.length*2-_.value*2),te=v(()=>{const V=s.value==="left"||s.value==="right",k=s.value==="right",ae=s.value==="bottom",j={[s.value]:0,zIndex:C.value,transform:`translate${V?"X":"Y"}(${(w.value?0:-110)*(k||ae?-1:1)}%)`,position:ee.value||o.value!==K?"absolute":"fixed",...B.value?void 0:{transition:"none"}};if(!H.value)return j;const d=S.value[_.value];if(!d)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const O=W.value.get(t);return O&&(d[O.position]+=O.amount),{...j,height:V?`calc(100% - ${d.top}px - ${d.bottom}px)`:h.value?`${h.value}px`:void 0,left:k?void 0:`${d.left}px`,right:k?`${d.right}px`:void 0,top:s.value!=="bottom"?`${d.top}px`:void 0,bottom:s.value!=="top"?`${d.bottom}px`:void 0,width:V?h.value?`${h.value}px`:void 0:`calc(100% - ${d.left}px - ${d.right}px)`}}),oe=v(()=>({zIndex:C.value-1}));return{layoutItemStyles:te,layoutItemScrimStyles:oe,zIndex:C}},unregister:a=>{r.delete(a),n.delete(a),i.delete(a),p.delete(a),f.delete(a),u.value=u.value.filter(m=>m!==a)},mainRect:x,mainStyles:Y,getLayoutItem:E,items:S,layoutRect:b,rootZIndex:o});const G=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),J=v(()=>({zIndex:l?o.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:G,layoutStyles:J,getLayoutItem:E,items:S,layoutRect:b,layoutRef:g}}const xe=P({...U(),...ge({fullHeight:!0}),...de()},"VApp"),ze=F()({name:"VApp",props:xe(),setup(e,l){let{slots:o}=l;const u=pe(e),{layoutClasses:n,getLayoutItem:i,items:r,layoutRef:p}=Ie(e),{rtlClasses:f}=ye();return Z(()=>{var g;return M("div",{ref:p,class:["v-application",u.themeClasses.value,n.value,f.value,e.class],style:[e.style]},[M("div",{class:"v-application__wrap"},[(g=o.default)==null?void 0:g.call(o)])])}),{getLayoutItem:i,items:r,theme:u}}});const Se=P({scrollable:Boolean,...U(),...se({tag:"main"})},"VMain"),Pe=F()({name:"VMain",props:Se(),setup(e,l){let{slots:o}=l;const{mainStyles:u}=he(),{ssrBootStyles:n}=fe();return Z(()=>M(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[u.value,n.value,e.style]},{default:()=>{var i,r;return[e.scrollable?M("div",{class:"v-main__scroller"},[(i=o.default)==null?void 0:i.call(o)]):(r=o.default)==null?void 0:r.call(o)]}})),{}}});export{ze as V,Pe as a,$e as m,Me as u};
