"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[5360],{75360:(x,f,t)=>{t.d(f,{ProtectedListView:()=>rt});var s=t(19968),l=t(62552),h=t(48112),I=t(28464),d=t(81504),D=t(42816),_=t(47616),E=t(48636),a=t(12132),M=t(14632),e=t(49008),K=t(19508),W=t(54424),g=t(49748),B=t(72984),u=t(54320),z=t(5240),F=t(91892),V=t(36196),G=t(20880),Y=t(21424),p=t(70516),H=t(31812),J=t(18424),Q=t(52540),X=t(21968),n=t(48632),r=t(85676),P=t(35184),O=t(99568),m=t(96556),T=t(13192),i=t(30840),v=t(77784),c=t(79371),y=t(67888),Z=t(52600),w=t(95752),b=t(37388),q=t(61840),tt=t(49108),o=t(44632),st=t(50840),S=t(20252),Ot=t(86432),mt=t(22612),ct=t(24808),ft=t(24024),At=t(40960),Lt=t(33656),Ct=t(43280),gt=t(79804),vt=t(19632),Ut=t(29576),Rt=t(61152),ht=t(9589),It=t(45488),Kt=t(75516);const ot=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],_t=()=>{(0,_.G0)();const{formatMessage:A}=(0,M.c)(),U=(0,_.eo)(),dt=(0,K.j)(C=>C.admin_app.permissions.settings?.["transfer-tokens"]),{isLoading:Et,allowedActions:{canCreate:k,canDelete:it,canUpdate:lt,canRead:R}}=(0,_.aU)(dt),{push:at}=(0,e.Uz)(),{trackUsage:j}=(0,_.m4)(),{_unstableFormatAPIError:N}=(0,_.An)();l.useEffect(()=>{at({search:a.stringify({sort:"name:ASC"},{encode:!1})})},[at]),(0,K.b)(()=>{j("willAccessTokenList",{tokenType:g.T})});const Mt=ot.map(C=>({...C,metadatas:{...C.metadatas,label:A(C.metadatas.label)}})),{data:L=[],isLoading:Tt,error:$}=(0,W.c)(void 0,{skip:!R});l.useEffect(()=>{L&&j("didAccessTokenList",{number:L.length,tokenType:g.T})},[j,L]),l.useEffect(()=>{$&&U({type:"warning",message:N($)})},[$,N,U]);const[Dt]=(0,W.d)(),Pt=async C=>{try{const nt=await Dt(C);"error"in nt&&U({type:"warning",message:N(nt.error)})}catch{U({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},et=Tt||Et;return(0,s.jsxs)(h.G,{"aria-busy":et,children:[(0,s.jsx)(_.K8,{name:"Transfer Tokens"}),(0,s.jsx)(I.a,{title:A({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:A({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:k?(0,s.jsx)(d.E,{"data-testid":"create-transfer-token-button",startIcon:(0,s.jsx)(E.c,{}),size:"S",onClick:()=>j("willAddTokenFromList",{tokenType:g.T}),to:"/settings/transfer-tokens/create",children:A({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})}):void 0}),(0,s.jsxs)(D.S,{children:[!R&&(0,s.jsx)(_.o5,{}),R&&L.length>0&&(0,s.jsx)(B.T,{permissions:{canRead:R,canDelete:it,canUpdate:lt},headers:Mt,contentType:"trasfer-tokens",isLoading:et,onConfirmDelete:Pt,tokens:L,tokenType:g.T}),R&&k&&L.length===0&&(0,s.jsx)(_.kP,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:(0,s.jsx)(d.E,{variant:"secondary",startIcon:(0,s.jsx)(E.c,{}),to:"/settings/transfer-tokens/create",children:A({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"})})}),R&&!k&&L.length===0&&(0,s.jsx)(_.kP,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},rt=()=>{const A=(0,K.j)(U=>U.admin_app.permissions.settings?.["transfer-tokens"].main);return(0,s.jsx)(_.rF,{permissions:A,children:(0,s.jsx)(_t,{})})}},72984:(x,f,t)=>{t.d(f,{T:()=>V});var s=t(19968),l=t(62552),h=t(48744),I=t(76512),d=t(9752),D=t(63358),_=t(48936),E=t(5e3),a=t(23264),M=t(5540),e=t(47616),K=t(71324),W=t(14032),g=t(89940),B=t(14632),u=t(49008),z=t(39380),F=t(5596);const V=({permissions:n,headers:r=[],contentType:P,isLoading:O=!1,tokens:m=[],onConfirmDelete:T,tokenType:i})=>{const{canDelete:v,canUpdate:c,canRead:y}=n;return(0,s.jsx)(e.AL,{headers:r,contentType:P,rows:m,withBulkActions:v||c||y,isLoading:O,onConfirmDelete:T,children:(0,s.jsx)(G,{tokenType:i,permissions:n,onConfirmDelete:T})})},G=({tokenType:n,permissions:r,rows:P=[],withBulkActions:O,onConfirmDelete:m})=>{const{canDelete:T,canUpdate:i,canRead:v}=r,[{query:c}]=(0,e.WK)(),{formatMessage:y}=(0,B.c)(),[,Z]=c&&c.sort?c.sort.split(":"):[void 0,"ASC"],{push:w,location:{pathname:b}}=(0,u.Uz)(),{trackUsage:q}=(0,e.m4)(),tt=[...P].sort((o,st)=>{const S=o.name.localeCompare(st.name);return Z==="DESC"?-S:S});return(0,s.jsx)(h.K,{children:tt.map(o=>(0,s.jsxs)(I.Tr,{...(0,e.on)({fn(){q("willEditTokenFromList",{tokenType:n}),w(`${b}/${o.id}`)},condition:i}),children:[(0,s.jsx)(d.Td,{maxWidth:(0,e.W8)(250),children:(0,s.jsx)(D.O,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:o.name})}),(0,s.jsx)(d.Td,{maxWidth:(0,e.W8)(250),children:(0,s.jsx)(D.O,{textColor:"neutral800",ellipsis:!0,children:o.description})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(D.O,{textColor:"neutral800",children:(0,s.jsx)(e.od,{timestamp:new Date(o.createdAt)})})}),(0,s.jsx)(d.Td,{children:o.lastUsedAt&&(0,s.jsx)(D.O,{textColor:"neutral800",children:(0,s.jsx)(e.od,{timestamp:new Date(o.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),O&&(0,s.jsx)(d.Td,{children:(0,s.jsxs)(_.C,{justifyContent:"end",children:[i&&(0,s.jsx)(X,{tokenName:o.name,tokenId:o.id}),!i&&v&&(0,s.jsx)(Q,{tokenName:o.name,tokenId:o.id}),T&&(0,s.jsx)(J,{tokenName:o.name,onClickDelete:()=>m?.(o.id),tokenType:n})]})})]},o.id))})},Y={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},p=({tokenName:n,tokenId:r,buttonType:P="edit",children:O})=>{const{formatMessage:m}=(0,B.c)(),{location:{pathname:T}}=(0,u.Uz)();return(0,s.jsx)(H,{forwardedAs:z.Af,to:`${T}/${r}`,title:m(Y[P],{target:n}),children:O})},H=(0,F.cp)(M.c)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,J=({tokenName:n,onClickDelete:r,tokenType:P})=>{const{formatMessage:O}=(0,B.c)(),{trackUsage:m}=(0,e.m4)(),[T,i]=l.useState(!1),v=()=>{i(!1),m("willDeleteToken",{tokenType:P}),r()};return(0,s.jsxs)(E.k,{paddingLeft:1,onClick:c=>c.stopPropagation(),children:[(0,s.jsx)(a.w,{onClick:()=>{i(!0)},label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${n}`}),name:"delete",borderWidth:0,icon:(0,s.jsx)(K.c,{})}),(0,s.jsx)(e.cz,{onToggleDialog:()=>i(!1),onConfirm:v,isOpen:T})]})},Q=({tokenName:n,tokenId:r})=>(0,s.jsx)(p,{tokenName:n,tokenId:r,buttonType:"read",children:(0,s.jsx)(W.c,{})}),X=({tokenName:n,tokenId:r})=>(0,s.jsx)(p,{tokenName:n,tokenId:r,children:(0,s.jsx)(g.c,{width:12})})},49748:(x,f,t)=>{t.d(f,{A:()=>s,T:()=>l});const s="api-token",l="transfer-token"},54424:(x,f,t)=>{t.d(f,{a:()=>d,b:()=>_,c:()=>h,d:()=>D,u:()=>I});var s=t(19508);const l=s.n.injectEndpoints({endpoints:E=>({getTransferTokens:E.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:a=>a.data,providesTags:(a,M)=>[...a?.map(({id:e})=>({type:"TransferToken",id:e}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:E.query({query:a=>`/admin/transfer/tokens/${a}`,transformResponse:a=>a.data,providesTags:(a,M,e)=>[{type:"TransferToken",id:e}]}),createTransferToken:E.mutation({query:a=>({url:"/admin/transfer/tokens",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:E.mutation({query:a=>({url:`/admin/transfer/tokens/${a}`,method:"DELETE"}),transformResponse:a=>a.data,invalidatesTags:(a,M,e)=>[{type:"TransferToken",id:e}]}),updateTransferToken:E.mutation({query:({id:a,...M})=>({url:`/admin/transfer/tokens/${a}`,method:"PUT",data:M}),transformResponse:a=>a.data,invalidatesTags:(a,M,{id:e})=>[{type:"TransferToken",id:e}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:h,useGetTransferTokenQuery:I,useCreateTransferTokenMutation:d,useDeleteTransferTokenMutation:D,useUpdateTransferTokenMutation:_}=l}}]);
