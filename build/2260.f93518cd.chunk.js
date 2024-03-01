"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[2260],{60080:(ts,p,s)=>{s.d(p,{F:()=>E});var t=s(19968),d=s(62552),O=s(5e3),y=s(35676),f=s(47616),I=s(60012),m=s(14632);const E=({displayedFilters:r})=>{const[P,D]=d.useState(!1),{formatMessage:S}=(0,m.c)(),u=d.useRef(null),B=()=>{D(x=>!x)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(O.k,{paddingTop:1,paddingBottom:1,children:[(0,t.jsx)(y.Z,{variant:"tertiary",ref:u,startIcon:(0,t.jsx)(I.c,{}),onClick:B,size:"S",children:S({id:"app.utils.filters",defaultMessage:"Filters"})}),P&&(0,t.jsx)(f.SI,{displayedFilters:r,isVisible:P,onToggle:B,source:u})]}),(0,t.jsx)(f.aW,{filtersSchema:r})]})}},22260:(ts,p,s)=>{s.d(p,{C:()=>rs,ProtectedListPage:()=>fs});var t=s(19968),d=s(62552),O=s(35676),y=s(11208),f=s(2931),I=s(25824),m=s(48936),E=s(5e3),r=s(63358),P=s(28724),D=s(70996),S=s(3548),u=s(48744),B=s(76512),x=s(9752),G=s(19576),g=s(23264),C=s(48112),F=s(28464),J=s(52051),X=s(42816),e=s(47616),T=s(12132),z=s(14632),q=s(49008),_=s(19508),es=s(60080),A=s(92508),_s=s(89940),ds=s(71324),Es=s(5848),ms=s(39820),Ms=s(31812),b=s(52540),is=s(26051),as=s(72704),Is=s(54320),Ts=s(5240),Us=s(91892),Rs=s(36196),us=s(20880),Bs=s(21424),xs=s(70516),Ks=s(18424),js=s(21968),Ws=s(48632),ps=s(85676),ys=s(35184),Ss=s(99568),Fs=s(96556),zs=s(13192),Vs=s(30840),$s=s(77784),Ns=s(79371),Zs=s(67888),Qs=s(52600),Hs=s(95752),Ys=s(37388),Gs=s(61840),Js=s(49108),Xs=s(44632),bs=s(50840),ks=s(20252),ws=s(86432),qs=s(22612),st=s(24808),tt=s(24024),et=s(40960),at=s(33656),nt=s(43280),it=s(79804),ot=s(19632),rt=s(29576),lt=s(61152),_t=s(9589),dt=s(45488),Et=s(75516),mt=s(58276),Mt=s(38768),ct=s(79904);const cs=({onClick:a})=>{const{formatMessage:i}=(0,z.c)();return(0,t.jsx)(O.Z,{onClick:a,startIcon:(0,t.jsx)(A.c,{}),size:"S",children:i({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})},Os=({onToggle:a})=>{const[i,K]=d.useState("create"),[$,N]=d.useState(""),{formatMessage:M}=(0,z.c)(),h=(0,e.eo)(),{lockApp:Z,unlockApp:U}=(0,e.H6)(),{_unstableFormatAPIError:Q,_unstableFormatValidationErrors:j}=(0,e.An)(),n=(0,_.p)(Ps,async()=>(await s.e(3168).then(s.bind(s,23168))).ROLE_LAYOUT,{combine(o,R){return[...o,...R]},defaultValue:[]}),V=(0,_.p)(os,async()=>(await s.e(3168).then(s.bind(s,23168))).FORM_INITIAL_VALUES,{combine(o,R){return{...o,...R}},defaultValue:os}),L=(0,_.p)(is.M,async()=>(await s.e(4072).then(s.bind(s,24072))).MagicLinkEE),[H]=(0,_.H)(),W=M({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),k=async(o,{setErrors:R})=>{Z();const c=await H({...o,roles:o.roles??[]});"data"in c?c.data.registrationToken?(N(c.data.registrationToken),ss()):h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}):(h({type:"warning",message:Q(c.error)}),(0,_.x)(c.error)&&c.error.name==="ValidationError"&&R(j(c.error))),U()},ss=()=>{l?K(l):a()},{buttonSubmitLabel:w,isDisabled:Y,next:l}=Cs[i];return L?(0,t.jsxs)(y.E,{onClose:a,labelledBy:"title",children:[(0,t.jsx)(f.k,{children:(0,t.jsx)(Es.M,{label:W,children:(0,t.jsx)(ms.i,{isCurrent:!0,children:W})})}),(0,t.jsx)(Ms.QJ,{enableReinitialize:!0,initialValues:V??{},onSubmit:k,validationSchema:gs,validateOnChange:!1,children:({errors:o,handleChange:R,values:c,isSubmitting:ls})=>(0,t.jsxs)(e.QF,{children:[(0,t.jsx)(I.a,{children:(0,t.jsxs)(m.C,{direction:"column",alignItems:"stretch",gap:6,children:[i!=="create"&&(0,t.jsx)(L,{registrationToken:$}),(0,t.jsxs)(E.k,{children:[(0,t.jsx)(r.O,{variant:"beta",as:"h2",children:M({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),(0,t.jsx)(E.k,{paddingTop:4,children:(0,t.jsx)(m.C,{direction:"column",alignItems:"stretch",gap:1,children:(0,t.jsx)(P.y,{gap:5,children:Ds.map(ns=>ns.map(v=>(0,t.jsx)(D.C,{...v.size,children:(0,t.jsx)(e.u,{...v,disabled:Y,error:o[v.name],onChange:R,value:c[v.name]})},v.name)))})})})]}),(0,t.jsxs)(E.k,{children:[(0,t.jsx)(r.O,{variant:"beta",as:"h2",children:M({id:"global.roles",defaultMessage:"User's role"})}),(0,t.jsx)(E.k,{paddingTop:4,children:(0,t.jsxs)(P.y,{gap:5,children:[(0,t.jsx)(D.C,{col:6,xs:12,children:(0,t.jsx)(is.S,{disabled:Y,error:o.roles,onChange:R,value:c.roles??[]})}),n.map(ns=>ns.map(v=>(0,t.jsx)(D.C,{...v.size,children:(0,t.jsx)(e.u,{...v,disabled:Y,onChange:R,value:c[v.name]})},v.name)))]})})]})]})}),(0,t.jsx)(S._,{startActions:(0,t.jsx)(O.Z,{variant:"tertiary",onClick:a,type:"button",children:M({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:i==="create"?(0,t.jsx)(O.Z,{type:"submit",loading:ls,children:M(w)}):(0,t.jsx)(O.Z,{type:"button",loading:ls,onClick:a,children:M(w)})})]})})]}):null},os={firstname:"",lastname:"",email:"",roles:[]},Ps=[],Ds=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],gs=b.kt().shape({firstname:b.Qb().trim().required(e.aO.required),lastname:b.Qb(),email:b.Qb().email(e.aO.email).required(e.aO.required),roles:b.M$().min(1,e.aO.required).required(e.aO.required)}),Cs={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},As=({canDelete:a,headers:i=[],entriesToDelete:K=[],onClickDelete:$,onSelectRow:N,withMainAction:M,withBulkActions:h,rows:Z=[]})=>{const{push:U,location:{pathname:Q}}=(0,q.Uz)(),{formatMessage:j}=(0,z.c)();return(0,t.jsx)(u.K,{children:Z.map(n=>{const V=K.findIndex(L=>L===n.id)!==-1;return(0,t.jsxs)(B.Tr,{...(0,e.on)({fn:()=>U(`${Q}/${n.id}`),condition:h}),children:[M&&(0,t.jsx)(x.Td,{...e.Ii,children:(0,t.jsx)(G.c,{"aria-label":j({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,as.g)(n?.firstname??"",n.lastname)}),checked:V,onChange:()=>{N&&N({name:n.id,value:!V})}})}),i.map(({key:L,cellFormatter:H,name:W,...k})=>(0,t.jsx)(x.Td,{children:typeof H=="function"?H(n,{key:L,name:W,formatMessage:j,...k}):(0,t.jsx)(r.O,{textColor:"neutral800",children:n[W]||"-"})},L)),h&&(0,t.jsx)(x.Td,{children:(0,t.jsxs)(m.C,{justifyContent:"end",children:[(0,t.jsx)(g.w,{onClick:()=>U(`${Q}/${n.id}`),label:j({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,as.g)(n.firstname??"",n.lastname)}),noBorder:!0,icon:(0,t.jsx)(_s.c,{})}),a&&(0,t.jsx)(E.k,{paddingLeft:1,...e.Ii,children:(0,t.jsx)(g.w,{onClick:()=>{$&&$(n.id)},label:j({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,as.g)(n.firstname??"",n.lastname)}),noBorder:!0,icon:(0,t.jsx)(ds.c,{})})})]})})]},n.id)})})},rs=()=>{const{_unstableFormatAPIError:a}=(0,e.An)(),[i,K]=d.useState(!1),$=(0,_.j)(l=>l.admin_app.permissions),{allowedActions:{canCreate:N,canDelete:M,canRead:h}}=(0,e.aU)($.settings?.users),Z=(0,e.eo)(),{formatMessage:U}=(0,z.c)(),{search:Q}=(0,q.IT)();(0,e.G0)();const{data:j,isError:n,isLoading:V}=(0,_.k)(T.parse(Q,{ignoreQueryPrefix:!0}),{skip:!h}),{pagination:L,users:H}=j??{},W=(0,_.p)(cs,async()=>(await s.e(9432).then(s.bind(s,89432))).CreateActionEE),k=hs.map(l=>({...l,metadatas:{...l.metadatas,label:U(l.metadatas.label)}})),ss=U({id:"global.users",defaultMessage:"Users"}),w=()=>{K(l=>!l)},[Y]=(0,_.J)();return W?(0,t.jsxs)(C.G,{"aria-busy":V,children:[(0,t.jsx)(e.K8,{name:"Users"}),(0,t.jsx)(F.a,{primaryAction:N&&(0,t.jsx)(W,{onClick:w}),title:ss,subtitle:U({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),h&&(0,t.jsx)(J.U,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.w9,{label:U({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ss})}),(0,t.jsx)(es.F,{displayedFilters:Ls})]})}),(0,t.jsxs)(X.S,{children:[!h&&(0,t.jsx)(e.o5,{}),n&&(0,t.jsx)("div",{children:"TODO: An error occurred"}),h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.AL,{contentType:"Users",isLoading:V,onConfirmDeleteAll:async l=>{const o=await Y({ids:l});"error"in o&&Z({type:"warning",message:a(o.error)})},onConfirmDelete:async l=>{const o=await Y({ids:[l]});"error"in o&&Z({type:"warning",message:a(o.error)})},headers:k,rows:H,withBulkActions:!0,withMainAction:M,children:(0,t.jsx)(As,{canDelete:M})}),L&&(0,t.jsx)(E.k,{paddingTop:4,children:(0,t.jsxs)(m.C,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,t.jsx)(e.A7,{}),(0,t.jsx)(e.cZ,{pagination:L})]})})]})]}),i&&(0,t.jsx)(Os,{onToggle:w})]}):null},hs=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:a},{formatMessage:i}){return(0,t.jsx)(r.O,{textColor:"neutral800",children:a.map(K=>i({id:`Settings.permissions.users.${K.code}`,defaultMessage:K.name})).join(`,
`)})}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:a},{formatMessage:i}){return(0,t.jsxs)(m.C,{children:[(0,t.jsx)(e.sD,{variant:a?"success":"danger"}),(0,t.jsx)(r.O,{textColor:"neutral800",children:i({id:a?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:a?"Active":"Inactive"})})]})}}],Ls=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],vs=()=>{const a=(0,_.p)(rs,async()=>(await s.e(6120).then(s.bind(s,26120))).UserListPageEE);return a?(0,t.jsx)(a,{}):null},fs=()=>{const a=(0,_.j)(i=>i.admin_app.permissions.settings?.users.main);return(0,t.jsx)(e.rF,{permissions:a,children:(0,t.jsx)(vs,{})})}},26051:(ts,p,s)=>{s.d(p,{M:()=>S,S:()=>u,a:()=>D});var t=s(19968),d=s(14632),O=s(19508),y=s(23264),f=s(5928),I=s(47616),m=s(32680),E=s(24144),r=s(5596),P=s(58276);const D=({children:g,target:C})=>{const F=(0,I.eo)(),{formatMessage:J}=(0,d.c)(),{copy:X}=(0,I.UC)(),e=J({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),T=async()=>{await X(C)&&F({type:"info",message:{id:"notification.link-copied"}})};return(0,t.jsx)(I._y,{endAction:(0,t.jsx)(y.w,{label:e,noBorder:!0,icon:(0,t.jsx)(m.c,{}),onClick:T}),title:C,titleEllipsis:!0,subtitle:g,icon:(0,t.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},S=({registrationToken:g})=>{const{formatMessage:C}=(0,d.c)(),F=`${window.location.origin}${(0,O.K)()}/auth/register?registrationToken=${g}`;return(0,t.jsx)(D,{target:F,children:C({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},u=({disabled:g,error:C,onChange:F,value:J})=>{const{isLoading:X,roles:e}=(0,P.u)(),{formatMessage:T}=(0,d.c)(),z=C?T({id:C,defaultMessage:C}):"",q=T({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),_=T({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),es=T({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,t.jsx)(f.e,{id:"roles",disabled:g,error:z,hint:_,label:q,name:"roles",onChange:A=>{F({target:{name:"roles",value:A}})},placeholder:es,startIcon:X?(0,t.jsx)(G,{}):void 0,value:J.map(A=>A.toString()),withTags:!0,required:!0,children:e.map(A=>(0,t.jsx)(f.eI,{value:A.id.toString(),children:T({id:`global.${A.code}`,defaultMessage:A.name})},A.id))})},B=(0,r.xZ)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,x=r.cp.div`
  animation: ${B} 2s infinite linear;
`,G=()=>(0,t.jsx)(x,{children:(0,t.jsx)(E.c,{})})},58276:(ts,p,s)=>{s.d(p,{u:()=>f});var t=s(62552),d=s(47616),O=s(14632),y=s(19508);const f=(I={},m)=>{const{locale:E}=(0,O.c)(),r=(0,d.In)(E,{sensitivity:"base"}),{data:P,error:D,isError:S,isLoading:u,refetch:B}=(0,y.z)(I,m);return{roles:t.useMemo(()=>[...P??[]].sort((G,g)=>r.compare(G.name,g.name)),[P,r]),error:D,isError:S,isLoading:u,refetch:B}}}}]);
