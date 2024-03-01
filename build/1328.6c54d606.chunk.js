"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[1328],{85240:(D,r,t)=>{t.d(r,{a:()=>P,g:()=>n});var a=t(15520),o=t(1844);function n(l){if(!l)return null;const i=Object.entries(a.g.colors).filter(([,O])=>O.toUpperCase()===l.toUpperCase()).reduce((O,[T])=>(o.S?.[T]&&(O=T),O),null);return i?{themeColorName:i,name:o.S[i]}:null}function P(){return Object.entries(o.S).map(([l,d])=>({hex:a.g.colors[l].toUpperCase(),name:d}))}},1844:(D,r,t)=>{t.d(r,{A:()=>i,C:()=>K,D:()=>S,R:()=>o,S:()=>C,a:()=>U,b:()=>I,c:()=>O,d:()=>E,e:()=>n,f:()=>P,g:()=>d,h:()=>l,i:()=>f,j:()=>s,k:()=>T,l:()=>_,m:()=>e,n:()=>M});var a=t(15520);const o="settings_review-workflows",n="Settings/Review_Workflows/RESET_WORKFLOW",P="Settings/Review_Workflows/SET_CONTENT_TYPES",l="Settings/Review_Workflows/SET_IS_LOADING",d="Settings/Review_Workflows/SET_ROLES",i="Settings/Review_Workflows/SET_WORKFLOW",O="Settings/Review_Workflows/SET_WORKFLOWS",T="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",E="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",s="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",_="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",e="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",M="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",f="Settings/Review_Workflows/WORKFLOW_UPDATE",C={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},I=a.g.colors.primary600,S={STAGE:"stage"},K="numberOfWorkflows",U="stagesPerWorkflow"},51328:(D,r,t)=>{t.r(r),t.d(r,{REVIEW_WORKFLOW_COLUMNS_EE:()=>u,REVIEW_WORKFLOW_FILTERS:()=>y});var a=t(19508),o=t(58984),n=t(19968),P=t(65092),l=t(9544),d=t(56104),i=t(48936),O=t(63358),T=t(89296),E=t(14632),s=t(46964),_=t(85240),e=t(47616),M=t(54320),f=t(5240),C=t(91892),I=t(36196),S=t(20880),K=t(21424),U=t(62552),F=t(70516),k=t(31812),G=t(18424),j=t(52540),$=t(21968),x=t(12132),Y=t(48632),z=t(85676),V=t(35184),H=t(99568),Q=t(96556),X=t(13192),J=t(30840),Z=t(77784),b=t(79371),q=t(67888),tt=t(52600),st=t(95752),_t=t(37388),et=t(61840),at=t(49108),ot=t(44632),nt=t(50840),Et=t(20252),rt=t(86432),lt=t(22612),it=t(24808),Ot=t(24024),dt=t(40960),Tt=t(33656),Pt=t(43280),Mt=t(79804),Dt=t(19632),Wt=t(29576),mt=t(61152),Rt=t(9589),At=t(45488),vt=t(75516),Lt=t(78744),gt=t(1844);const B=({value:m,onChange:v})=>{const{formatMessage:R}=(0,E.c)(),{data:L,isLoading:g}=(0,a.k)(),A=L?.users||[];return(0,n.jsx)(P.k1,{value:m,"aria-label":R({id:"content-manager.components.Filters.usersSelect.label",defaultMessage:"Search and select an user to filter"}),onChange:v,loading:g,children:A.map(W=>(0,n.jsx)(l.m,{value:W.id.toString(),children:(0,a.l)(W,R)},W.id))})},h=({value:m,onChange:v,uid:R})=>{const{formatMessage:L}=(0,E.c)(),{workflows:g,isLoading:A}=(0,s.u)({filters:{contentTypes:R}}),[W]=g??[];return(0,n.jsx)(d.K_,{"aria-label":L({id:"content-manager.components.Filters.reviewWorkflows.label",defaultMessage:"Search and select an workflow stage to filter"}),value:m,onChange:v,loading:A,customizeContent:()=>(0,n.jsxs)(i.C,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,n.jsx)(O.O,{textColor:"neutral800",ellipsis:!0,children:m}),A?(0,n.jsx)(T.c,{small:!0,style:{display:"flex"}}):null]}),children:(W?.stages??[]).map(({id:p,color:c,name:w})=>{const{themeColorName:N}=(0,_.g)(c)??{};return(0,n.jsx)(d.kH,{startIcon:(0,n.jsx)(i.C,{height:2,background:c,borderColor:N==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2}),value:w,children:w},p)})})},u=[{key:`__${o.S}_temp_key__`,name:o.S,fieldSchema:{type:"relation",relation:"oneToMany",target:"admin::review-workflow-stage"},metadatas:{label:{id:(0,a.o)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"},searchable:!1,sortable:!0,mainField:{name:"name",type:"string"}}},{key:`__${o.A}_temp_key__`,name:o.A,fieldSchema:{type:"relation",target:"admin::user",relation:"oneToMany"},metadatas:{label:{id:(0,a.o)("containers.ListPage.table-headers.reviewWorkflows.assignee"),defaultMessage:"Assignee"},searchable:!1,sortable:!0,mainField:{name:"firstname",type:"string"}}}],y=[{fieldSchema:{type:"relation",mainField:{name:"name",schema:{type:"string"}}},metadatas:{customInput:h,label:{id:(0,a.o)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"}},name:"strapi_stage"},{fieldSchema:{type:"relation",mainField:{name:"id",schema:{type:"integer"}}},metadatas:{customInput:B,customOperators:[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],label:{id:(0,a.o)("containers.ListPage.table-headers.reviewWorkflows.assignee.label"),defaultMessage:"Assignee"}},name:"strapi_assignee"}]},58984:(D,r,t)=>{t.d(r,{A:()=>o,S:()=>a});const a="strapi_stage",o="strapi_assignee"},78744:(D,r,t)=>{t.d(r,{a:()=>i,b:()=>O,c:()=>n,d:()=>P,e:()=>d,f:()=>l,u:()=>T});var a=t(19508);const o=a.n.injectEndpoints({endpoints:E=>({getWorkflows:E.query({query:s=>{const{id:_,...e}=s??{};return{url:`/admin/review-workflows/workflows/${_??""}`,method:"GET",config:{params:e}}},transformResponse:s=>{let _=[];return Array.isArray(s.data)?_=s.data:_=[s.data],{workflows:_,meta:"meta"in s?s.meta:void 0}},providesTags:(s,_,e)=>typeof e=="object"&&"id"in e&&e.id!==""?[{type:"ReviewWorkflow",id:e.id}]:[...s?.workflows.map(({id:M})=>({type:"ReviewWorkflow",id:M}))??[],{type:"ReviewWorkflow",id:"LIST"}]}),createWorkflow:E.mutation({query:s=>({url:"/admin/review-workflows/workflows",method:"POST",data:s}),transformResponse:s=>s.data,invalidatesTags:[{type:"ReviewWorkflow",id:"LIST"}]}),updateWorkflow:E.mutation({query:({id:s,..._})=>({url:`/admin/review-workflows/workflows/${s}`,method:"PUT",data:_}),transformResponse:s=>s.data,invalidatesTags:(s,_,e)=>[{type:"ReviewWorkflow",id:e.id}]}),deleteWorkflow:E.mutation({query:({id:s})=>({url:`/admin/review-workflows/workflows/${s}`,method:"DELETE"}),transformResponse:s=>s.data,invalidatesTags:(s,_,e)=>[{type:"ReviewWorkflow",id:e.id}]}),getStages:E.query({query:({model:s,slug:_,id:e})=>({url:`/admin/content-manager/${_}/${s}/${e}/stages`,method:"GET"}),transformResponse:s=>({meta:s.meta??{workflowCount:0},stages:s.data??[]}),providesTags:(s,_,e)=>[{type:"ReviewWorkflowStage",id:e.id}]}),updateStage:E.mutation({query:({model:s,slug:_,id:e,...M})=>({url:`/admin/content-manager/${_}/${s}/${e}/stage`,method:"PUT",data:M}),transformResponse:s=>s.data,invalidatesTags:(s,_,e)=>[{type:"ReviewWorkflowStage",id:e.id}]}),updateAssignee:E.mutation({query:({model:s,slug:_,id:e,...M})=>({url:`/admin/content-manager/${_}/${s}/${e}/assignee`,method:"PUT",data:M}),transformResponse:s=>s.data})}),overrideExisting:!1}),{useGetWorkflowsQuery:n,useCreateWorkflowMutation:P,useDeleteWorkflowMutation:l,useUpdateWorkflowMutation:d,useGetStagesQuery:i,useUpdateStageMutation:O,useUpdateAssigneeMutation:T}=o},46964:(D,r,t)=>{t.d(r,{u:()=>o});var a=t(78744);function o(n={}){const{id:P="",...l}=n,{data:d,isLoading:i}=(0,a.c)({id:P,populate:"stages",...l}),[O]=(0,a.d)(),[T]=(0,a.e)(),[E]=(0,a.f)(),{workflows:s,meta:_}=d??{};return{meta:_,workflows:s,isLoading:i,createWorkflow:O,updateWorkflow:T,deleteWorkflow:E}}}}]);