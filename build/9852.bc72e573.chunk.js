"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[9852],{9852:(z,B,s)=>{s.d(B,{M:()=>F,ProtectedEditView:()=>Y});var e=s(19968),O=s(62552),A=s(48112),R=s(42816),K=s(48936),W=s(5e3),u=s(63358),T=s(28724),n=s(70996),M=s(28464),E=s(35676),a=s(47616),N=s(53305),$=s(31812),y=s(14632),j=s(49008),g=s(52540),U=s(19508),x=s(54424),C=s(49748),m=s(7496),as=s(54320),rs=s(5240),os=s(91892),_s=s(36196),is=s(20880),Es=s(21424),ds=s(70516),ls=s(18424),Ts=s(21968),Ms=s(12132),Ps=s(48632),Os=s(85676),ms=s(35184),Ds=s(99568),fs=s(96556),cs=s(13192),gs=s(30840),Cs=s(77784),vs=s(79371),hs=s(67888),Ls=s(52600),As=s(95752),Rs=s(37388),Ks=s(61840),Us=s(49108),ps=s(44632),Is=s(50840),Bs=s(20252),Ws=s(86432),us=s(22612),ys=s(24808),js=s(24024),xs=s(40960),ks=s(33656),Ss=s(43280),Fs=s(79804),Vs=s(19632),Gs=s(29576),Qs=s(61152),zs=s(9589),Ns=s(45488),$s=s(75516);const J=g.kt().shape({name:g.Qb().max(100).required(a.aO.required),description:g.Qb().nullable(),lifespan:g.CQ().integer().min(0).nullable().defined(a.aO.required),permissions:g.Qb().required(a.aO.required)}),F=()=>{(0,a.G0)();const{formatMessage:o}=(0,y.c)(),{lockApp:_,unlockApp:v}=(0,a.H6)(),d=(0,a.eo)(),D=(0,j.Uz)(),{state:h}=(0,j.IT)(),[r,f]=O.useState(h&&"accessKey"in h.transferToken?{...h.transferToken}:null),{trackUsage:P}=(0,a.m4)(),{setCurrentStep:X}=(0,a.sg)(),w=(0,U.j)(i=>i.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:b,canUpdate:q,canRegenerate:ss}}=(0,a.aU)(w),p=(0,j.SU)("/settings/transfer-tokens/:id")?.params?.id,l=p==="create",{_unstableFormatAPIError:I,_unstableFormatValidationErrors:V}=(0,a.An)();O.useEffect(()=>{P(l?"didAddTokenFromList":"didEditTokenFromList",{tokenType:C.T})},[l,P]);const{data:k,error:S}=(0,x.u)(p,{skip:l||r!==null||!p});O.useEffect(()=>{S&&d({type:"warning",message:I(S)})},[S,I,d]),O.useEffect(()=>{k&&f(k)},[k]);const[es]=(0,x.a)(),[ns]=(0,x.b)(),ts=async(i,c)=>{P(l?"willCreateToken":"willEditToken",{tokenType:C.T}),_();const L=i.permissions.split("-");if((t=>t.length===1?t[0]==="push"||t[0]==="pull":t[0]==="push"&&t[1]==="pull")(L))try{if(l){const t=await es({...i,permissions:L});if("error"in t){(0,U.x)(t.error)&&t.error.name==="ValidationError"?c.setErrors(V(t.error)):d({type:"warning",message:I(t.error)});return}f(t.data),d({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),P("didCreateToken",{type:r?.permissions,tokenType:C.T}),D.push(`/settings/transfer-tokens/${t.data.id}`,{transferToken:t.data}),X("transferTokens.success")}else{const t=await ns({id:p,name:i.name,description:i.description,permissions:L});if("error"in t){(0,U.x)(t.error)&&t.error.name==="ValidationError"?c.setErrors(V(t.error)):d({type:"warning",message:I(t.error)});return}f(t.data),d({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),P("didEditToken",{type:r?.permissions,tokenType:C.T})}}catch{d({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{v()}},G=q&&!l||b&&l;return!l&&!r?(0,e.jsx)(Z,{}):(0,e.jsxs)(A.G,{children:[(0,e.jsx)(a.K8,{name:"Transfer Tokens"}),(0,e.jsx)($.QJ,{validationSchema:J,validateOnChange:!1,initialValues:{name:r?.name||"",description:r?.description||"",lifespan:r?.lifespan??null,permissions:r?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(i,c)=>ts(i,c),children:({errors:i,handleChange:c,isSubmitting:L,values:Q})=>(0,e.jsxs)(a.QF,{children:[(0,e.jsx)(m.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:r,setToken:f,canEditInputs:G,canRegenerate:ss,isSubmitting:L,regenerateUrl:"/admin/transfer/tokens/"}),(0,e.jsx)(R.S,{children:(0,e.jsxs)(K.C,{direction:"column",alignItems:"stretch",gap:6,children:[r&&Boolean(r?.name)&&"accessKey"in r&&(0,e.jsx)(m.c,{token:r.accessKey,tokenType:C.T}),(0,e.jsx)(H,{errors:i,onChange:c,canEditInputs:G,isCreating:l,values:Q,transferToken:r})]})})]})})]})},Y=()=>{const o=(0,U.j)(_=>_.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,e.jsx)(a.rF,{permissions:o,children:(0,e.jsx)(F,{})})},H=({errors:o={},onChange:_,canEditInputs:v,isCreating:d,values:D,transferToken:h={}})=>{const{formatMessage:r}=(0,y.c)(),f=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,e.jsx)(W.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(K.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(u.O,{variant:"delta",as:"h2",children:r({id:"global.details",defaultMessage:"Details"})}),(0,e.jsxs)(T.y,{gap:5,children:[(0,e.jsx)(n.C,{col:6,xs:12,children:(0,e.jsx)(m.T,{error:o.name,value:D.name,canEditInputs:v,onChange:_})},"name"),(0,e.jsx)(n.C,{col:6,xs:12,children:(0,e.jsx)(m.a,{error:o.description,value:D.description,canEditInputs:v,onChange:_})},"description"),(0,e.jsx)(n.C,{col:6,xs:12,children:(0,e.jsx)(m.L,{isCreating:d,error:o.lifespan,value:D.lifespan,onChange:_,token:h})},"lifespan"),(0,e.jsx)(n.C,{col:6,xs:12,children:(0,e.jsx)(m.b,{name:"permissions",value:D.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:P=>{_({target:{name:"permissions",value:P}})},options:f,canEditInputs:v})},"permissions")]})]})})},Z=({transferTokenName:o})=>{const{formatMessage:_}=(0,y.c)();return(0,a.G0)(),(0,e.jsxs)(A.G,{"aria-busy":"true",children:[(0,e.jsx)(a.K8,{name:"Transfer Tokens"}),(0,e.jsx)(M.a,{primaryAction:(0,e.jsx)(E.Z,{disabled:!0,startIcon:(0,e.jsx)(N.c,{}),type:"button",size:"L",children:_({id:"global.save",defaultMessage:"Save"})}),title:o||_({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,e.jsx)(R.S,{children:(0,e.jsx)(a.Wm,{})})]})}},54424:(z,B,s)=>{s.d(B,{a:()=>K,b:()=>u,c:()=>A,d:()=>W,u:()=>R});var e=s(19508);const O=e.n.injectEndpoints({endpoints:T=>({getTransferTokens:T.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:n=>n.data,providesTags:(n,M)=>[...n?.map(({id:E})=>({type:"TransferToken",id:E}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:T.query({query:n=>`/admin/transfer/tokens/${n}`,transformResponse:n=>n.data,providesTags:(n,M,E)=>[{type:"TransferToken",id:E}]}),createTransferToken:T.mutation({query:n=>({url:"/admin/transfer/tokens",method:"POST",data:n}),transformResponse:n=>n.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:T.mutation({query:n=>({url:`/admin/transfer/tokens/${n}`,method:"DELETE"}),transformResponse:n=>n.data,invalidatesTags:(n,M,E)=>[{type:"TransferToken",id:E}]}),updateTransferToken:T.mutation({query:({id:n,...M})=>({url:`/admin/transfer/tokens/${n}`,method:"PUT",data:M}),transformResponse:n=>n.data,invalidatesTags:(n,M,{id:E})=>[{type:"TransferToken",id:E}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:A,useGetTransferTokenQuery:R,useCreateTransferTokenMutation:K,useDeleteTransferTokenMutation:W,useUpdateTransferTokenMutation:u}=O}}]);
