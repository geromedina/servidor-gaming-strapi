"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[500],{20500:(J,C,s)=>{s.r(C),s.d(C,{ProfilePage:()=>ts});var e=s(19968),d=s(62552),B=s(3400),A=s(48112),h=s(28464),Q=s(42816),Y=s(35676),O=s(5e3),p=s(48936),L=s(63358),I=s(28724),m=s(70996),N=s(62492),X=s(17324),D=s(56104),i=s(47616),b=s(53305),U=s(14032),W=s(63648),k=s(31812),q=s(30840),V=s(21424),T=s(14632),z=s(5596),K=s(52540),l=s(19508),ss=s(72704),es=s(57940),ps=s(54320),Ds=s(5240),us=s(91892),vs=s(36196),Cs=s(20880),As=s(70516),Ls=s(18424),Is=s(21968),Ts=s(12132),xs=s(48632),Rs=s(85676),Bs=s(35184),Us=s(99568),Ws=s(96556),Ks=s(13192),js=s(77784),ys=s(79371),Ss=s(67888),ws=s(52600),Fs=s(95752),Hs=s(37388),Qs=s(61840),Ns=s(49108),Vs=s(44632),zs=s(50840),Gs=s(20252),$s=s(86432),Zs=s(22612),Js=s(24808),Ys=s(24024),Xs=s(40960),bs=s(33656),ks=s(43280),qs=s(79804),se=s(19632),ee=s(29576),ae=s(61152),te=s(9589),re=s(45488),oe=s(75516),ne=s(38768),ie=s(79904);const as=K.kt().shape({...es.C,currentPassword:K.Qb().when(["password","confirmPassword"],(t,r,n)=>t||r?n.required(i.aO.required):n),preferedLanguage:K.Qb().nullable()}),ts=()=>{const t=(0,l.j)(_=>_.admin_app.language.localeNames),{formatMessage:r}=(0,T.c)(),{trackUsage:n}=(0,i.m4)(),a=(0,i.eo)(),{lockApp:P,unlockApp:o}=(0,i.H6)(),{notifyStatus:M}=(0,B.O)(),y=(0,l.j)(_=>_.admin_app.theme.currentTheme),u=(0,l.s)(),{_unstableFormatValidationErrors:S,_unstableFormatAPIError:g}=(0,i.An)();(0,i.G0)();const c=(0,l.a)("ProfilePage",_=>_.user);d.useEffect(()=>{c?M(r({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"})):a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})},[r,M,a,c]);const[is,{isLoading:ds}]=(0,l.t)(),{isLoading:ls,data:_s,error:$}=(0,l.v)(void 0,{skip:!(window.strapi.isEE&&window.strapi.features.isEnabled("sso"))});d.useEffect(()=>{$&&a({type:"warning",message:{id:"Settings.permissions.users.sso.provider.error"}})},[$,a]);const Es=async(_,{setErrors:w})=>{P();const{confirmPassword:F,currentTheme:v,...x}=_;let f=x;if(f.password===""){const{password:Z,currentPassword:R,...H}=f;f=H}const E=await is(f);"data"in E&&(u((0,l.w)(v)),n("didChangeMode",{newMode:v}),a({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})),"error"in E&&((0,l.x)(E.error)&&(E.error.name==="ValidationError"||E.error.message==="ValidationError")?w(S(E.error)):(0,l.x)(E.error)?a({type:"warning",message:g(E.error)}):a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})),o?.()};if(ls)return(0,e.jsxs)(A.G,{"aria-busy":"true",children:[(0,e.jsx)(V.S,{title:r({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),(0,e.jsx)(h.a,{title:r({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),(0,e.jsx)(Q.S,{children:(0,e.jsx)(i.Wm,{})})]});const ms=_s?.isSSOLocked??!1,{email:cs,firstname:Ms,lastname:Ps,username:gs,preferedLanguage:fs}=c??{},hs={email:cs,firstname:Ms,lastname:Ps,username:gs,preferedLanguage:fs,currentTheme:y,confirmPassword:"",password:""};return(0,e.jsxs)(A.G,{"aria-busy":ds,children:[(0,e.jsx)(V.S,{title:r({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),(0,e.jsx)(k.QJ,{onSubmit:Es,initialValues:hs,validateOnChange:!1,validationSchema:as,enableReinitialize:!0,children:({errors:_,values:{email:w,firstname:F,lastname:v,username:x,preferedLanguage:f,currentTheme:E,...Z},handleChange:R,isSubmitting:H,dirty:Os})=>(0,e.jsxs)(i.QF,{children:[(0,e.jsx)(h.a,{title:x||(0,ss.g)(F??"",v),primaryAction:(0,e.jsx)(Y.Z,{startIcon:(0,e.jsx)(b.c,{}),loading:H,type:"submit",disabled:!Os,children:r({id:"global.save",defaultMessage:"Save"})})}),(0,e.jsx)(O.k,{paddingBottom:10,children:(0,e.jsx)(Q.S,{children:(0,e.jsxs)(p.C,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsx)(ns,{errors:_,onChange:R,values:{firstname:F,lastname:v,username:x,email:w}}),!ms&&(0,e.jsx)(rs,{errors:_,onChange:R,values:Z}),(0,e.jsx)(os,{onChange:R,values:{preferedLanguage:f,currentTheme:E},localeNames:t})]})})})]})})]})},rs=({errors:t,onChange:r,values:n})=>{const{formatMessage:a}=(0,T.c)(),[P,o]=d.useState(!1),[M,y]=d.useState(!1),[u,S]=d.useState(!1);return(0,e.jsx)(O.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(p.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(L.O,{variant:"delta",as:"h2",children:a({id:"global.change-password",defaultMessage:"Change password"})}),(0,e.jsx)(I.y,{gap:5,children:(0,e.jsx)(m.C,{s:12,col:6,children:(0,e.jsx)(N.g,{error:t.currentPassword?a({id:t.currentPassword,defaultMessage:t.currentPassword}):"",onChange:r,value:n.currentPassword,label:a({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:P?"text":"password",endAction:(0,e.jsx)(j,{onClick:g=>{g.stopPropagation(),o(c=>!c)},label:a(P?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:P?(0,e.jsx)(U.c,{}):(0,e.jsx)(W.c,{})})})})}),(0,e.jsxs)(I.y,{gap:5,children:[(0,e.jsx)(m.C,{s:12,col:6,children:(0,e.jsx)(G,{error:t.password?a({id:t.password,defaultMessage:t.password}):"",onChange:r,value:n.password,label:a({id:"global.password",defaultMessage:"Password"}),name:"password",type:M?"text":"password",autoComplete:"new-password",endAction:(0,e.jsx)(j,{onClick:g=>{g.stopPropagation(),y(c=>!c)},label:a(M?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:M?(0,e.jsx)(U.c,{}):(0,e.jsx)(W.c,{})})})}),(0,e.jsx)(m.C,{s:12,col:6,children:(0,e.jsx)(G,{error:t.confirmPassword?a({id:t.confirmPassword,defaultMessage:t.confirmPassword}):"",onChange:r,value:n.confirmPassword,label:a({id:"Auth.form.confirmPassword.label",defaultMessage:"Confirm Password"}),name:"confirmPassword",type:u?"text":"password",autoComplete:"new-password",endAction:(0,e.jsx)(j,{onClick:g=>{g.stopPropagation(),S(c=>!c)},label:a(u?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:u?(0,e.jsx)(U.c,{}):(0,e.jsx)(W.c,{})})})})]})]})})},G=(0,z.cp)(N.g)`
  ::-ms-reveal {
    display: none;
  }
`,j=(0,z.cp)(X.d)`
  svg {
    height: ${(0,i.W8)(16)};
    width: ${(0,i.W8)(16)};
    path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }
`,os=({onChange:t,values:r,localeNames:n})=>{const{formatMessage:a}=(0,T.c)(),P=(0,l.j)(o=>o.admin_app.theme.availableThemes);return(0,e.jsx)(O.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(p.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsxs)(p.C,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(L.O,{variant:"delta",as:"h2",children:a({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})}),(0,e.jsx)(L.O,{children:a({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:(0,e.jsx)(O.k,{as:"a",color:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales",children:a({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"})})})})]}),(0,e.jsxs)(I.y,{gap:5,children:[(0,e.jsx)(m.C,{s:12,col:6,children:(0,e.jsx)(D.K_,{label:a({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:a({id:"global.select",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{t({target:{name:"preferedLanguage",value:null}})},clearLabel:a({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:r.preferedLanguage,onChange:o=>{t({target:{name:"preferedLanguage",value:o}})},children:Object.entries(n).map(([o,M])=>(0,e.jsx)(D.kH,{value:o,children:M},o))})}),(0,e.jsx)(m.C,{s:12,col:6,children:(0,e.jsxs)(D.K_,{label:a({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:a({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:r.currentTheme,onChange:o=>{t({target:{name:"currentTheme",value:o}})},children:[(0,e.jsx)(D.kH,{value:"system",children:a({id:"Settings.profile.form.section.experience.mode.option-system-label",defaultMessage:"Use system settings"})}),P.map(o=>(0,e.jsx)(D.kH,{value:o,children:a({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:a({id:o,defaultMessage:q(o)})})},o))]})})]})]})})},ns=({errors:t,onChange:r,values:n})=>{const{formatMessage:a}=(0,T.c)();return(0,e.jsx)(O.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(p.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(L.O,{variant:"delta",as:"h2",children:a({id:"global.profile",defaultMessage:"Profile"})}),(0,e.jsxs)(I.y,{gap:5,children:[(0,e.jsx)(m.C,{s:12,col:6,children:(0,e.jsx)(i.u,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:t.firstname,onChange:r,value:n.firstname,type:"text",name:"firstname",required:!0})}),(0,e.jsx)(m.C,{s:12,col:6,children:(0,e.jsx)(i.u,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:t.lastname,onChange:r,value:n.lastname,type:"text",name:"lastname"})}),(0,e.jsx)(m.C,{s:12,col:6,children:(0,e.jsx)(i.u,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:t.email,onChange:r,value:n.email,type:"email",name:"email",required:!0})}),(0,e.jsx)(m.C,{s:12,col:6,children:(0,e.jsx)(i.u,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:t.username,onChange:r,value:n.username,type:"text",name:"username"})})]})]})})}},57940:(J,C,s)=>{s.d(C,{C:()=>B});var e=s(47616),d=s(52540);const B={firstname:d.Qb().trim().required(e.aO.required),lastname:d.Qb(),email:d.Qb().email(e.aO.email).lowercase().required(e.aO.required),username:d.Qb().nullable(),password:d.Qb().min(8,e.aO.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:d.Qb().min(8,e.aO.minLength).oneOf([d.IL("password"),null],"components.Input.error.password.noMatch").when("password",(A,h)=>A?h.required(e.aO.required):h)}}}]);
