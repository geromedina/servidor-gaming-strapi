"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[5340],{55340:(p,P,s)=>{s.d(P,{ProtectedListPage:()=>ts});var _=s(19968),D=s(62552),e=s(76512),E=s(9752),i=s(63358),C=s(48936),T=s(5e3),h=s(23264),r=s(48112),a=s(28464),L=s(35676),R=s(52051),U=s(42816),W=s(42848),S=s(89616),K=s(20464),I=s(35480),Y=s(48744),n=s(47616),$=s(48636),Z=s(32680),H=s(89940),J=s(71324),Q=s(78164),X=s(29088),N=s(14632),b=s(49008),F=s(19508),k=s(58276),z=s(72704),rs=s(54320),Ms=s(5240),Os=s(91892),Ps=s(36196),Cs=s(20880),Ts=s(21424),hs=s(70516),Ls=s(31812),Rs=s(18424),ms=s(52540),cs=s(21968),As=s(12132),vs=s(48632),gs=s(85676),Bs=s(35184),Us=s(99568),Ws=s(96556),Ks=s(13192),Is=s(30840),xs=s(77784),js=s(79371),fs=s(67888),ys=s(52600),us=s(95752),ps=s(37388),Ss=s(61840),$s=s(49108),Ns=s(44632),Fs=s(50840),zs=s(20252),Vs=s(86432),Gs=s(22612),Ys=s(24808),Zs=s(24024),Hs=s(40960),Js=s(33656),Qs=s(43280),Xs=s(79804),bs=s(19632),ks=s(29576),ws=s(61152),qs=s(9589),s_=s(45488),__=s(75516),t_=s(38768),o_=s(79904);const w=({id:t,name:O,description:l,usersCount:c,icons:A,rowIndex:x,canUpdate:v})=>{const{formatMessage:g}=(0,N.c)(),[,m]=A,j=g({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:c});return(0,_.jsxs)(e.Tr,{"aria-rowindex":x,...v?(0,n.on)({fn:m.onClick}):{},children:[(0,_.jsx)(E.Td,{maxWidth:(0,n.W8)(130),children:(0,_.jsx)(i.O,{ellipsis:!0,textColor:"neutral800",children:O})}),(0,_.jsx)(E.Td,{maxWidth:(0,n.W8)(250),children:(0,_.jsx)(i.O,{ellipsis:!0,textColor:"neutral800",children:l})}),(0,_.jsx)(E.Td,{children:(0,_.jsx)(i.O,{textColor:"neutral800",children:j})}),(0,_.jsx)(E.Td,{children:(0,_.jsx)(C.C,{justifyContent:"flex-end",...n.Ii,children:A.map((d,B)=>d?(0,_.jsx)(T.k,{paddingLeft:B===0?0:1,children:(0,_.jsx)(h.w,{onClick:d.onClick,label:d.label,borderWidth:0,icon:d.icon})},d.label):null)})})]},t)},q=()=>{const{formatMessage:t}=(0,N.c)();(0,n.G0)();const O=(0,F.j)(z.s),{formatAPIError:l}=(0,n.An)(),c=(0,n.eo)(),[A,x]=D.useState(!1),[{query:v}]=(0,n.WK)(),{isLoading:g,allowedActions:{canCreate:m,canDelete:j,canRead:d,canUpdate:B}}=(0,n.aU)(O.settings?.roles),{roles:V,refetch:os}=(0,k.u)({filters:v?._q?{name:{$containsi:v._q}}:void 0},{refetchOnMountOrArgChange:!0,skip:g||!d}),{push:f}=(0,b.Uz)(),[{showModalConfirmButtonLoading:ns,roleToDelete:Es},y]=D.useReducer(_s,ss),{post:as}=(0,n.YF)(),ls=async()=>{try{y({type:"ON_REMOVE_ROLES"}),await as("/admin/roles/batch-delete",{ids:[Es]}),await os(),y({type:"RESET_DATA_TO_DELETE"})}catch(o){o instanceof Q.Uh&&c({type:"warning",message:l(o)})}u()},G=()=>f("/settings/roles/new"),u=()=>x(o=>!o),is=o=>M=>{M.preventDefault(),M.stopPropagation(),o.usersCount?c({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):(y({type:"SET_ROLE_TO_DELETE",id:o.id}),u())},ds=o=>M=>{M.preventDefault(),M.stopPropagation(),f(`/settings/roles/duplicate/${o.id}`)},es=V.length+1,Ds=6;return g?(0,_.jsx)(r.G,{children:(0,_.jsx)(n.Wm,{})}):(0,_.jsxs)(r.G,{children:[(0,_.jsx)(n.K8,{name:"Roles"}),(0,_.jsx)(a.a,{primaryAction:m?(0,_.jsx)(L.Z,{onClick:G,startIcon:(0,_.jsx)($.c,{}),size:"S",children:t({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:t({id:"global.roles",defaultMessage:"roles"}),subtitle:t({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),d&&(0,_.jsx)(R.U,{startActions:(0,_.jsx)(n.w9,{label:t({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:t({id:"global.roles",defaultMessage:"roles"})})})}),d&&(0,_.jsx)(U.S,{children:(0,_.jsxs)(W.o,{colCount:Ds,rowCount:es,footer:m?(0,_.jsx)(S.U,{onClick:G,icon:(0,_.jsx)($.c,{}),children:t({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[(0,_.jsx)(K.o,{children:(0,_.jsxs)(e.Tr,{"aria-rowindex":1,children:[(0,_.jsx)(E.Th,{children:(0,_.jsx)(i.O,{variant:"sigma",textColor:"neutral600",children:t({id:"global.name",defaultMessage:"Name"})})}),(0,_.jsx)(E.Th,{children:(0,_.jsx)(i.O,{variant:"sigma",textColor:"neutral600",children:t({id:"global.description",defaultMessage:"Description"})})}),(0,_.jsx)(E.Th,{children:(0,_.jsx)(i.O,{variant:"sigma",textColor:"neutral600",children:t({id:"global.users",defaultMessage:"Users"})})}),(0,_.jsx)(E.Th,{children:(0,_.jsx)(I.K,{children:t({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,_.jsx)(Y.K,{children:V?.map((o,M)=>(0,_.jsx)(w,{id:o.id,name:o.name,description:o.description,usersCount:o.usersCount,icons:[m&&{onClick:ds(o),label:t({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:(0,_.jsx)(Z.c,{})},B&&{onClick:()=>f(`/settings/roles/${o.id}`),label:t({id:"app.utils.edit",defaultMessage:"Edit"}),icon:(0,_.jsx)(H.c,{})},j&&{onClick:is(o),label:t({id:"global.delete",defaultMessage:"Delete"}),icon:(0,_.jsx)(J.c,{})}].filter(Boolean),rowIndex:M+2,canUpdate:B},o.id))})]})}),(0,_.jsx)(n.cz,{isOpen:A,onConfirm:ls,isConfirmButtonLoading:ns,onToggleDialog:u})]})},ss={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},_s=(t,O)=>(0,X.cp)(t,l=>{switch(O.type){case"ON_REMOVE_ROLES":{l.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{l.shouldRefetchData=!0,l.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{l.shouldRefetchData=!1,l.roleToDelete=null,l.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{l.roleToDelete=O.id;break}default:return l}}),ts=()=>{const t=(0,F.j)(z.s);return(0,_.jsx)(n.rF,{permissions:t.settings?.roles.main,children:(0,_.jsx)(q,{})})}},58276:(p,P,s)=>{s.d(P,{u:()=>i});var _=s(62552),D=s(47616),e=s(14632),E=s(19508);const i=(C={},T)=>{const{locale:h}=(0,e.c)(),r=(0,D.In)(h,{sensitivity:"base"}),{data:a,error:L,isError:R,isLoading:U,refetch:W}=(0,E.z)(C,T);return{roles:_.useMemo(()=>[...a??[]].sort((K,I)=>r.compare(K.name,I.name)),[a,r]),error:L,isError:R,isLoading:U,refetch:W}}},89616:(p,P,s)=>{s.d(P,{U:()=>r});var _=s(19968),D=s(5596),e=s(5e3),E=s(6912),i=s(48936),C=s(63358);const T=(0,D.cp)(e.k)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.primary600};
  }
`,h=(0,D.cp)(e.k)`
  border-radius: 0 0 ${({theme:a})=>a.borderRadius} ${({theme:a})=>a.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,r=({children:a,icon:L,...R})=>(0,_.jsxs)("div",{children:[(0,_.jsx)(E.c,{}),(0,_.jsx)(h,{as:"button",background:"primary100",padding:5,...R,children:(0,_.jsxs)(i.C,{children:[(0,_.jsx)(T,{"aria-hidden":!0,background:"primary200",children:L}),(0,_.jsx)(e.k,{paddingLeft:3,children:(0,_.jsx)(C.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:a})})]})})]})}}]);