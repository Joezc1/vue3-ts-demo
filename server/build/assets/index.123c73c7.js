var Ce=Object.defineProperty;var fe=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var ye=(t,o,r)=>o in t?Ce(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,ee=(t,o)=>{for(var r in o||(o={}))Be.call(o,r)&&ye(t,r,o[r]);if(fe)for(var r of fe(o))Ee.call(o,r)&&ye(t,r,o[r]);return t};import{I as z,a as T,T as b,P as M,r as a,u as X,j as s,b as e,C as R,F as le,d as W,c as ue,e as F,D as Se,f as L,K as Ae,g as De,B as Q,h as $e,N as ve,i as Te,k as Ie,l as xe,q as Re,M as Me,m as We,n as je,o as te,p as ge,s as Pe,t as Ye,S as ze,R as Le,v as qe,w as Ue}from"./vendor.bc32f589.js";const Oe=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}};Oe();var E=z.createFromIconfont("//at.alicdn.com/t/font_2954539_gb7x8h90fq.js");T.defaults.baseURL="http://101.43.17.174:3000";T.defaults.withCredentials=!0;T.defaults.headers["X-Requested-With"]="XMLHttpRequest";T.defaults.headers.Authorization=`${localStorage.getItem("token")||null}`;T.defaults.headers.post["Content-Type"]="application/json";T.interceptors.response.use(t=>typeof t.data!="object"?(b.show("\u670D\u52A1\u7AEF\u5F02\u5E38\uFF01"),Promise.reject(t)):t.data.code*1!=1?(t.data.msg&&b.show(t.data.msg),+t.data.code==-1&&localStorage.removeItem("token"),Promise.reject(t.data)):t.data);const O=T.get,V=T.post,Z={normal:0,pull:1,drop:2,loading:3,success:4,failure:5},de={normal:0,abort:1,loading:2,success:3,failure:4,complete:5},se={1:{icon:"icon-canyin1"},2:{icon:"icon-fushi"},3:{icon:"icon-jiaotong"},4:{icon:"icon-juanzhi"},5:{icon:"icon-gouwuchefill"},6:{icon:"icon-xuexi"},7:{icon:"icon-yaopin"},8:{icon:"icon-lvxing"},9:{icon:"icon-haoyou"},10:{icon:"icon-renminbi1"},11:{icon:"icon-qianbao1"},12:{icon:"icon-qiandai"},13:{icon:"icon-shenghuozhuanzhang"},14:{icon:"icon-licai"},15:{icon:"icon-tuikuanshouhou"},16:{icon:"icon-renminbi1"}},be=t=>(t&&t.startsWith("http")||(t=`${MODE=="development"?"http://api.chennick.wang":baseUrl}${t}`),t),He="_item_mkxeh_1",Ke="_header-date_mkxeh_7",Xe="_date_mkxeh_18",Ge="_money_mkxeh_22",Je="_item-icon_mkxeh_37";var G={item:He,headerDate:Ke,date:Xe,money:Ge,itemIcon:Je};const we=({bill:t})=>{const[o,r]=a.exports.useState(0),[l,n]=a.exports.useState(0),c=X();a.exports.useEffect(()=>{const u=t.bills.filter(f=>f.pay_type==2).reduce((f,g)=>(f+=Number(g.amount),f),0);r(u);const h=t.bills.filter(f=>f.pay_type==1).reduce((f,g)=>(f+=Number(g.amount),f),0);n(h)},[t.bills]);const m=u=>{c.push(`/detail?id=${u.id}`)};return s("div",{className:G.item,children:[s("div",{className:G.headerDate,children:[e("div",{className:G.date,children:t.date}),s("div",{className:G.money,children:[s("span",{children:[e("img",{src:"//s.yezgea02.com/1615953405599/zhi%402x.png",alt:"\u652F"}),s("span",{children:["\xA5",l.toFixed(2)]})]}),s("span",{children:[e("img",{src:"//s.yezgea02.com/1615953405599/shou%402x.png",alt:"\u6536"}),s("span",{children:["\xA5",o.toFixed(2)]})]})]})]}),t&&t.bills.map(u=>e(R,{className:G.bill,onClick:()=>m(u),title:s(le,{children:[e(E,{className:G.itemIcon,type:u.type_id?se[u.type_id].icon:1}),e("span",{children:u.type_name})]}),description:e("span",{style:{color:u.pay_type==2?"red":"#39be77"},children:`${u.pay_type==1?"-":"+"}${u.amount}`}),help:s("div",{children:[W(new Date(u.create_date).getTime()).format("HH:mm")," ",u.remark?`| ${u.remark}`:""]})},u.id))]})};we.propTypes={bill:M.object};const Qe="_popup-type_4v4ui_1",Ve="_header_4v4ui_7",Ze="_cross_4v4ui_20",et="_content_4v4ui_28",tt="_all_4v4ui_31",st="_title_4v4ui_38",at="_expense-wrap_4v4ui_43",nt="_income-wrap_4v4ui_44",ot="_active_4v4ui_58";var S={popupType:Qe,header:Ve,cross:Ze,content:et,all:tt,title:st,expenseWrap:at,incomeWrap:nt,active:ot};const Ne=a.exports.forwardRef(({onSelect:t},o)=>{const[r,l]=a.exports.useState(!1),[n,c]=a.exports.useState("all"),[m,u]=a.exports.useState([]),[h,f]=a.exports.useState([]);a.exports.useEffect(async()=>{const{data:{list:d}}=await O("/type/list");u(d.filter(x=>x.type==1)),f(d.filter(x=>x.type==2))},[]),o&&(o.current={show:()=>{l(!0)},close:()=>{l(!1)}});const g=d=>{c(d.id),l(!1),t(d)};return e(ue,{visible:r,direction:"bottom",onMaskClick:()=>l(!1),destroy:!1,mountContainer:()=>document.body,children:s("div",{className:S.popupType,children:[s("div",{className:S.header,children:["\u8BF7\u9009\u62E9\u7C7B\u578B",e(z,{type:"wrong",className:S.cross,onClick:()=>l(!1)})]}),s("div",{className:S.content,children:[e("div",{onClick:()=>g({id:"all"}),className:F({[S.all]:!0,[S.active]:n=="all"}),children:"\u5168\u90E8\u7C7B\u578B"}),e("div",{className:S.title,children:"\u652F\u51FA"}),e("div",{className:S.expenseWrap,children:m.map((d,x)=>e("p",{onClick:()=>g(d),className:F({[S.active]:n==d.id}),children:d.name},x))}),e("div",{className:S.title,children:"\u6536\u5165"}),e("div",{className:S.incomeWrap,children:h.map((d,x)=>e("p",{onClick:()=>g(d),className:F({[S.active]:n==d.id}),children:d.name},x))})]})]})})});Ne.propTypes={onSelect:M.func};const ae=a.exports.forwardRef(({onSelect:t,mode:o="date"},r)=>{const[l,n]=a.exports.useState(!1),[c,m]=a.exports.useState(new Date),u=h=>{m(h),n(!1),o=="month"?t(W(h).format("YYYY-MM")):o=="date"&&t(W(h).format("YYYY-MM-DD"))};return r&&(r.current={show:()=>{n(!0)},close:()=>{n(!1)}}),e(ue,{visible:l,direction:"bottom",onMaskClick:()=>n(!1),destroy:!1,mountContainer:()=>document.body,children:e("div",{children:e(Se,{visible:l,value:c,mode:o,onOk:u,onCancel:()=>n(!1)})})})});ae.propTypes={mode:M.string,onSelect:M.func};const ct="_add-wrap_bey74_1",rt="_header_bey74_7",it="_close_bey74_10",lt="_filter_bey74_15",ut="_type_bey74_21",dt="_expense_bey74_30",pt="_active_bey74_33",mt="_income_bey74_38",ht="_time_bey74_43",_t="_arrow_bey74_52",ft="_money_bey74_56",yt="_sufix_bey74_61",vt="_amount_bey74_66",xt="_type-warp_bey74_70",gt="_type-body_bey74_79",bt="_type-item_bey74_83",wt="_iconfont-wrap_bey74_90",Nt="_iconfont_bey74_90",Ft="_remark_bey74_116";var v={addWrap:ct,header:rt,close:it,filter:lt,type:ut,expense:dt,active:pt,income:mt,time:ht,arrow:_t,money:ft,sufix:yt,amount:vt,typeWarp:xt,typeBody:gt,typeItem:bt,iconfontWrap:wt,iconfont:Nt,remark:Ft};const pe=a.exports.forwardRef(({detail:t={},onReload:o},r)=>{const l=a.exports.useRef(),n=t&&t.id,[c,m]=a.exports.useState(!1),[u,h]=a.exports.useState("expense"),[f,g]=a.exports.useState([]),[d,x]=a.exports.useState([]),[w,y]=a.exports.useState({}),[N,j]=a.exports.useState(""),[q,D]=a.exports.useState(""),[H,P]=a.exports.useState(!1),[_,k]=a.exports.useState(new Date);a.exports.useEffect(()=>{t.id&&(h(t.pay_type==1?"expense":"income"),y({id:t.type_id,name:t.type_name}),D(t.remark),j(t.amount),k(W(Number(t.date)).$d))},[t]),r&&(r.current={show:()=>{m(!0)},close:()=>{m(!1)}}),a.exports.useEffect(async()=>{const{data:{list:i}}=await O("/type/list"),K=i.filter(ie=>ie.type==1),ke=i.filter(ie=>ie.type==2);g(K),x(ke),n||y(K[0])},[]);const Y=i=>{h(i),i=="expense"?y(f[0]):y(d[0])},$=()=>{l.current&&l.current.show()},U=i=>{k(i)},oe=i=>{y(i)},ce=i=>{if(console.log("\u70B9\u51FB"),i=String(i),i=="delete"){console.log("amount",N);let K=N.slice(0,N.length-1);j(K);return}if(i=="ok"){re();return}i=="."&&N.includes(".")||i!="."&&N.includes(".")&&N&&N.split(".")[1].length>=2||j(N+i)},re=async()=>{if(!N){b.show("\u8BF7\u8F93\u5165\u5177\u4F53\u91D1\u989D");return}const i={amount:Number(N).toFixed(2),type_id:w.id,type_name:w.name,date:W(_).unix()*1e3,pay_type:u=="expense"?1:2,remark:q||""};n?(i.id=n,await V("/bill/update",i),b.show("\u4FEE\u6539\u6210\u529F")):(await V("/bill/add",i),j(""),h("expense"),y(f[0]),k(new Date),D(""),b.show("\u6DFB\u52A0\u6210\u529F")),m(!1),o&&o()};return e(ue,{visible:c,direction:"bottom",onMaskClick:()=>m(!1),destroy:!1,mountContainer:()=>document.body,children:s("div",{className:v.addWrap,children:[e("header",{className:v.header,children:e("span",{className:v.close,onClick:()=>m(!1),children:e(z,{type:"wrong"})})}),s("div",{className:v.filter,children:[s("div",{className:v.type,children:[e("span",{onClick:()=>Y("expense"),className:F({[v.expense]:!0,[v.active]:u=="expense"}),children:"\u652F\u51FA"}),e("span",{onClick:()=>Y("income"),className:F({[v.income]:!0,[v.active]:u=="income"}),children:"\u6536\u5165"})]}),s("div",{className:v.time,onClick:$,children:[W(_).format("MM-DD")," ",e(z,{className:v.arrow,type:"arrow-bottom"})]})]}),s("div",{className:v.money,children:[e("span",{className:v.sufix,children:"\xA5"}),e("span",{className:F(v.amount,v.animation),children:N})]}),e("div",{className:v.typeWarp,children:e("div",{className:v.typeBody,children:(u=="expense"?f:d).map(i=>s("div",{onClick:()=>oe(i),className:v.typeItem,children:[e("span",{className:F({[v.iconfontWrap]:!0,[v.expense]:u=="expense",[v.income]:u=="income",[v.active]:w.id==i.id}),children:e(E,{className:v.iconfont,type:se[i.id].icon})}),e("span",{children:i.name})]},i.id))})}),e("div",{className:v.remark,children:H?e(L,{autoHeight:!0,showLength:!0,maxLength:50,type:"text",rows:3,value:q,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8\u4FE1\u606F",onChange:i=>D(i),onBlur:()=>P(!1)}):e("span",{onClick:()=>P(!0),children:q||"\u6DFB\u52A0\u5907\u6CE8"})}),e(Ae,{type:"price",onKeyClick:i=>ce(i)}),e(ae,{ref:l,onSelect:U})]})})});pe.propTypes={detail:M.object,onReload:M.func};const kt="_home_1bx10_1",Ct="_header_1bx10_7",Bt="_data-wrap_1bx10_22",Et="_income_1bx10_33",St="_type-wrap_1bx10_36",At="_left_1bx10_48",Dt="_arrow_1bx10_51",$t="_content-wrap_1bx10_55",Tt="_add_1bx10_65";var C={home:kt,header:Ct,dataWrap:Bt,income:Et,typeWrap:St,left:At,arrow:Dt,contentWrap:$t,add:Tt};const It=()=>{const t=a.exports.useRef(),o=a.exports.useRef(),r=a.exports.useRef(),[l,n]=a.exports.useState(0),[c,m]=a.exports.useState(0),[u,h]=a.exports.useState({}),[f,g]=a.exports.useState(W().format("YYYY-MM")),[d,x]=a.exports.useState(1),[w,y]=a.exports.useState([]),[N,j]=a.exports.useState(0),[q,D]=a.exports.useState(Z.normal),[H,P]=a.exports.useState(de.normal);a.exports.useEffect(()=>{_(),console.log("typeRef",t)},[d,u,f]);const _=async()=>{const{data:i}=await O(`/bill/list?page_number=${d}&page_size=5&date=${f}&type_id=${u.id||""}`);d==1?y(i.list):y(w.concat(i.list)),n((i.totalExpense*1).toFixed(2)),m((i.totalIncome*1).toFixed(2)),j(i.totalPage),P(de.success),D(Z.success)},k=()=>{D(Z.loading),d!=1?x(1):_()},Y=()=>{d<N&&(P(de.loading),x(d+1))},$=()=>{t.current&&t.current.show()},U=()=>{o.current&&o.current.show()},oe=i=>{D(Z.loading),x(1),h(i)},ce=i=>{D(Z.loading),x(1),g(i)},re=()=>{r.current&&r.current.show()};return s("div",{className:C.home,children:[s("div",{className:C.header,children:[s("div",{className:C.dataWrap,children:[s("span",{className:C.expense,children:["\u603B\u652F\u51FA\uFF1A",s("b",{children:["\xA5 ",l]})]}),s("span",{className:C.income,children:["\u603B\u6536\u5165\uFF1A",s("b",{children:["\xA5 ",c]})]})]}),s("div",{className:C.typeWrap,children:[e("div",{className:C.left,onClick:$,children:s("span",{className:C.title,children:[u.name||"\u5168\u90E8\u7C7B\u578B"," ",e(z,{className:C.arrow,type:"arrow-bottom"})]})}),e("div",{className:C.right,children:s("span",{className:C.time,onClick:U,children:[f,e(z,{className:C.arrow,type:"arrow-bottom"})]})})]})]}),e("div",{className:C.contentWrap,children:w.length?e(De,{animationDuration:200,stayTime:400,refresh:{state:q,handler:k},load:{state:H,distance:200,handler:Y},children:w.map((i,K)=>e(we,{bill:i},K))}):null}),e("div",{className:C.add,onClick:re,children:e(E,{type:"icon-jilu"})}),e(Ne,{ref:t,onSelect:oe}),e(ae,{ref:o,mode:"month",onSelect:ce}),e(pe,{ref:r,onReload:k})]})},Rt="_user_2wwvo_1",Mt="_head_2wwvo_5",Wt="_info_2wwvo_14",jt="_content_2wwvo_33",Pt="_logout_2wwvo_43";var J={user:Rt,head:Mt,info:Wt,content:jt,logout:Pt};const Yt=()=>{const t=X(),[o,r]=a.exports.useState({});a.exports.useEffect(()=>{l()},[]);const l=async()=>{const{data:c}=await O("/user/info");r(c),setAvatar(c.avatar)},n=async()=>{localStorage.removeItem("token"),t.push("/login")};return s("div",{className:J.user,children:[s("div",{className:J.head,children:[s("div",{className:J.info,children:[s("span",{children:["\u6635\u79F0\uFF1A",o.username||"--"]}),s("span",{children:[e("img",{style:{width:30,height:30,verticalAlign:"-10px"},src:"//s.yezgea02.com/1615973630132/geqian.png",alt:""}),e("b",{children:o.signature||"\u6682\u65E0\u4E2A\u7B7E"})]})]}),e("img",{className:J.avatar,style:{width:60,height:60,borderRadius:8},src:o.avatar||"",alt:""})]}),s("div",{className:J.content,children:[e(R,{hasArrow:!0,title:"\u7528\u6237\u4FE1\u606F\u4FEE\u6539",onClick:()=>t.push("/userinfo"),icon:e("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/gxqm.png",alt:""})}),e(R,{hasArrow:!0,title:"\u91CD\u5236\u5BC6\u7801",onClick:()=>t.push("/account"),icon:e("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/zhaq.png",alt:""})}),e(R,{hasArrow:!0,title:"\u5173\u4E8E\u6211\u4EEC",onClick:()=>t.push("/about"),icon:e("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615975178434/lianxi.png",alt:""})})]}),e(Q,{className:J.logout,block:!0,theme:"danger",onClick:n,children:"\u9000\u51FA\u767B\u5F55"})]})},zt="_data_f4sv2_1",Lt="_total_f4sv2_5",qt="_time_f4sv2_13",Ut="_date_f4sv2_35",Ot="_title_f4sv2_39",Ht="_expense_f4sv2_45",Kt="_income_f4sv2_51",Xt="_structure_f4sv2_55",Gt="_head_f4sv2_60",Jt="_tab_f4sv2_70",Qt="_active_f4sv2_80",Vt="_content_f4sv2_88",Zt="_item_f4sv2_88",es="_left_f4sv2_93",ts="_type_f4sv2_100",ss="_name_f4sv2_115",as="_right_f4sv2_124",ns="_percent_f4sv2_129",os="_momey_f4sv2_135",cs="_proportion_f4sv2_138";var p={data:zt,total:Lt,time:qt,date:Ut,title:Ot,expense:Ht,income:Kt,structure:Xt,head:Gt,tab:Jt,active:Qt,content:Vt,item:Zt,left:es,type:ts,name:ss,right:as,percent:ns,momey:os,proportion:cs};let me=null;const rs=()=>{const t=a.exports.useRef(),[o,r]=a.exports.useState(W().format("YYYY-MM")),[l,n]=a.exports.useState("expense"),[c,m]=a.exports.useState(0),[u,h]=a.exports.useState(0),[f,g]=a.exports.useState([]),[d,x]=a.exports.useState([]),[w,y]=a.exports.useState("expense");a.exports.useEffect(()=>(N(),()=>{me.dispose()}),[o]);const N=async()=>{const{data:_}=await O(`/bill/data?date=${o}`);m(_.total_expense),h(_.total_income);const k=_.total_data.filter($=>$.pay_type==1).sort(($,U)=>U.number-$.number),Y=_.total_data.filter($=>$.pay_type==2).sort(($,U)=>U.number-$.number);g(k),x(Y),console.log("income_data",Y),P(w=="expense"?k:Y)},j=()=>{t.current&&t.current.show()},q=_=>{r(_)},D=_=>{n(_)},H=_=>{y(_),P(_=="expense"?f:d)},P=_=>{echarts&&(me=echarts.init(document.getElementById("proportion")),me.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{data:_.map(k=>k.type_name)},series:[{name:"\u652F\u51FA",type:"pie",radius:"55%",data:_.map(k=>({value:k.number,name:k.type_name})),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}))};return s("div",{className:p.data,children:[s("div",{className:p.total,children:[s("div",{className:p.time,onClick:j,children:[e("span",{children:o}),e(z,{className:p.date,type:"date"})]}),e("div",{className:p.title,children:"\u5171\u652F\u51FA"}),s("div",{className:p.expense,children:["\xA5",c]}),s("div",{className:p.income,children:["\u5171\u6536\u5165\xA5",u]})]}),s("div",{className:p.structure,children:[s("div",{className:p.head,children:[e("span",{className:p.title,children:"\u6536\u652F\u6784\u6210"}),s("div",{className:p.tab,children:[e("span",{onClick:()=>D("expense"),className:F({[p.expense]:!0,[p.active]:l=="expense"}),children:"\u652F\u51FA"}),e("span",{onClick:()=>D("income"),className:F({[p.income]:!0,[p.active]:l=="income"}),children:"\u6536\u5165"})]})]}),e("div",{className:p.content,children:(l=="expense"?f:d).map(_=>s("div",{className:p.item,children:[s("div",{className:p.left,children:[s("div",{className:p.type,children:[e("span",{className:F({[p.expense]:l=="expense",[p.income]:l=="income"}),children:e(CustomIcon,{type:_.type_id?se[_.type_id].icon:1})}),e("span",{className:p.name,children:_.type_name})]}),s("div",{className:p.progress,children:["\xA5",Number(_.number).toFixed(2)||0]})]}),e("div",{className:p.right,children:e("div",{className:p.percent,children:e($e,{shape:"line",percent:Number(_.number/Number(l=="expense"?c:u)*100).toFixed(2),theme:"primary"})})})]},_.type_id))}),s("div",{className:p.proportion,children:[s("div",{className:p.head,children:[e("span",{className:p.title,children:"\u6536\u652F\u6784\u6210"}),s("div",{className:p.tab,children:[e("span",{onClick:()=>H("expense"),className:F({[p.expense]:!0,[p.active]:w=="expense"}),children:"\u652F\u51FA"}),e("span",{onClick:()=>H("income"),className:F({[p.income]:!0,[p.active]:w=="income"}),children:"\u6536\u5165"})]})]}),e("div",{id:"proportion"})]})]}),e(ae,{ref:t,mode:"month",onSelect:q})]})},is="_container_10aj2_1",ls="_border_bottom_10aj2_4",us="_head_10aj2_7",ds="_body_10aj2_18",ps="_color_primary_10aj2_18",ms="_check_10aj2_21",hs="_login_button_10aj2_27",_s="_tab_10aj2_31",fs="_is_active_10aj2_41",ys="_form_10aj2_45";var A={container:is,border_bottom:ls,head:us,body:ds,color_primary:ps,check:ms,login_button:hs,tab:_s,is_active:fs,form:ys};const vs=()=>{const[t,o]=a.exports.useState("login"),[r,l]=a.exports.useState(""),[n,c]=a.exports.useState(""),[m,u]=a.exports.useState(""),[h,f]=a.exports.useState(""),[g,d]=a.exports.useState(!1),x=a.exports.useCallback(y=>{u(y)},[]),w=async()=>{if(!r){b.show("\u8BF7\u8F93\u5165\u8D26\u53F7");return}if(!n){b.show("\u8BF7\u8F93\u5165\u5BC6\u7801");return}if(!g){b.show("\u8BF7\u52FE\u9009\u7528\u6237\u534F\u8BAE");return}if(t==="login"){let y=await T.post("/user/login",{username:r,password:n});y.code&&(b.show("\u767B\u9646\u6210\u529F"),localStorage.setItem("token",y.data.token),window.location.href="/")}else{if(!h){b.show("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801");return}if(h!==m){b.show("\u9A8C\u8BC1\u7801\u9519\u8BEF");return}let y=await T.post("/user/register",{username:r,password:n});y.code&&(b.show(y.msg),globalThis.type="register")}};return s("div",{className:A.container,children:[e(ve,{left:e(E,{type:"icon-fanhui",onClick:()=>window.history.back()}),title:"\u767B\u5F55"}),e("div",{className:A.head}),s("div",{className:A.body,children:[s("div",{className:A.tab,children:[e("span",{onClick:()=>{o("login")},className:t==="login"?A.is_active:null,children:"\u767B\u5F55"}),e("span",{onClick:()=>{o("register")},className:t==="register"?A.is_active:null,children:"\u6CE8\u518C"})]}),s("div",{className:A.form,children:[e("div",{className:A.border_bottom,children:e(R,{icon:e(E,{type:"icon-user"}),children:e(L,{onChange:y=>{l(y)},clearable:!0,type:"text",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",value:r})})}),e("div",{className:A.border_bottom,children:e(R,{icon:e(E,{type:"icon-safetycertificate"}),children:e(L,{onChange:y=>{c(y)},clearable:!0,type:"password",placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801",value:n})})}),t=="register"?e("div",{className:A.border_bottom,children:s(R,{icon:e(E,{type:"icon-lock"}),children:[e(L,{maxLength:"4",onChange:y=>{f(y)},clearable:!0,type:"text",placeholder:"\u8BF7\u8F93\u5165\u56FE\u5F62\u7801",value:h}),e(Te,{onChange:x,charNum:4,bgColor:"#f5f5f5"})]})}):null,e("div",{className:A.check,children:s(Ie,{onClick:()=>{d(!g)},children:[e("span",{children:"\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F"}),e("span",{children:"\u300A\u767B\u5F55\u6761\u6B3E\u300B"})]})}),e("div",{className:A.login_button,children:e(Q,{shape:"round",block:!0,theme:"primary",onClick:()=>{w()},children:t==="login"?"\u767B\u5F55":"\u6CE8\u518C"})})]})]})]})},xs="_header-warp_12wcp_1",gs="_block_12wcp_4",bs="_header_12wcp_1",ws="_more_12wcp_21";var he={headerWarp:xs,block:gs,header:bs,more:ws};const ne=({title:t=""})=>{const o=X();return e("div",{className:he.headerWarp,children:e("div",{className:he.block,children:e(ve,{className:he.header,left:e(z,{type:"arrow-left",theme:"primary",onClick:()=>o.goBack()}),title:t})})})};ne.propTypes={title:M.string};const Ns="_detail_152kr_1",Fs="_card_152kr_8",ks="_type_152kr_16",Cs="_expense_152kr_29",Bs="_income_152kr_32",Es="_iconfont_152kr_35",Ss="_amount_152kr_38",As="_info_152kr_43",Ds="_time_152kr_48",$s="_remark_152kr_61",Ts="_operation_152kr_75",Is="_van-icon_152kr_82";var B={detail:Ns,card:Fs,type:ks,expense:Cs,income:Bs,iconfont:Es,amount:Ss,info:As,time:Ds,remark:$s,operation:Ts,vanIcon:Is};const Rs=()=>{const t=a.exports.useRef(),o=X(),r=xe(),{id:l}=Re.parse(r.search),[n,c]=a.exports.useState({});a.exports.useEffect(()=>{m()},[]);const m=async()=>{const{data:h}=await O(`/bill/detail?id=${l}`);c(h)},u=()=>{Me.confirm({title:"\u5220\u9664",content:"\u786E\u8BA4\u5220\u9664\u8D26\u5355\uFF1F",onOk:async()=>{await V("/bill/delete",{id:l}),b.show("\u5220\u9664\u6210\u529F"),o.goBack()}})};return s("div",{className:B.detail,children:[e(ne,{title:"\u8D26\u5355\u8BE6\u60C5"}),s("div",{className:B.card,children:[s("div",{className:B.type,children:[e("span",{className:F({[B.expense]:n.pay_type==1,[B.income]:n.pay_type==2}),children:e(E,{className:B.iconfont,type:n.type_id?se[n.type_id].icon:1})}),e("span",{children:n.type_name||""})]}),n.pay_type==1?s("div",{className:F(B.amount,B.expense),children:["-",n.amount]}):s("div",{className:F(B.amount,B.incom),children:["+",n.amount]}),s("div",{className:B.info,children:[s("div",{className:B.time,children:[e("span",{children:"\u8BB0\u5F55\u65F6\u95F4"}),e("span",{children:W(Number(n.create_date)).format("YYYY-MM-DD HH:mm")})]}),s("div",{className:B.remark,children:[e("span",{children:"\u5907\u6CE8"}),e("span",{children:n.remark||"-"})]})]}),s("div",{className:B.operation,children:[s("span",{onClick:u,children:[e(E,{type:"shanchu"}),"\u5220\u9664"]}),s("span",{onClick:()=>t.current&&t.current.show(),children:[e(E,{type:"tianjia"}),"\u7F16\u8F91"]})]})]}),e(pe,{ref:t,detail:n,onReload:m})]})},Ms="http://api.chennick.wang",Ws="_userinfo_1wov8_1",js="_item_1wov8_8",Ps="_title_1wov8_12",Ys="_avatar_1wov8_16",zs="_avatar-url_1wov8_20",Ls="_desc_1wov8_26",qs="_upload_1wov8_32",Us="_signature_1wov8_35";var I={userinfo:Ws,item:js,title:Ps,avatar:Ys,avatarUrl:zs,desc:Ls,upload:qs,signature:Us};const Os=()=>{const t=X(),[o,r]=a.exports.useState({}),[l,n]=a.exports.useState(""),[c,m]=a.exports.useState(""),u=localStorage.getItem("token");a.exports.useEffect(()=>{h()},[]);const h=async()=>{const{data:d}=await O("/api/user/get_userinfo");r(d),n(be(d.avatar)),m(d.signature)},f=d=>{if(console.log("file.file",d.file),d&&d.file.size>200*1024){b.show("\u4E0A\u4F20\u5934\u50CF\u4E0D\u5F97\u8D85\u8FC7 200 KB\uFF01\uFF01");return}let x=new FormData;x.append("file",d.file),T({method:"post",url:`${Ms}/upload`,data:x,headers:{"Content-Type":"multipart/form-data",Authorization:u}}).then(w=>{n(be(w.data))})},g=async()=>{await V("/api/user/edit_userinfo",{signature:c,avatar:l}),b.show("\u4FEE\u6539\u6210\u529F"),t.goBack()};return s(le,{children:[e(ne,{title:"\u7528\u6237\u4FE1\u606F"}),s("div",{className:I.userinfo,children:[e("h1",{children:"\u4E2A\u4EBA\u8D44\u6599"}),s("div",{className:I.item,children:[e("div",{className:I.title,children:"\u5934\u50CF"}),s("div",{className:I.avatar,children:[e("img",{className:I.avatarUrl,src:l,alt:""}),s("div",{className:I.desc,children:[e("span",{children:"\u652F\u6301 jpg\u3001png\u3001jpeg \u683C\u5F0F\u5927\u5C0F 200KB \u4EE5\u5185\u7684\u56FE\u7247"}),e(We,{className:I.filePicker,onChange:f,accept:"image/*",children:e(Q,{className:I.upload,theme:"primary",size:"xs",children:"\u70B9\u51FB\u4E0A\u4F20"})})]})]})]}),s("div",{className:I.item,children:[e("div",{className:I.title,children:"\u4E2A\u6027\u7B7E\u540D"}),e("div",{className:I.signature,children:e(L,{clearable:!0,type:"text",value:c,placeholder:"\u8BF7\u8F93\u5165\u4E2A\u6027\u7B7E\u540D",onChange:d=>m(d)})})]}),e(Q,{onClick:g,style:{marginTop:50},block:!0,theme:"primary",children:"\u4FDD\u5B58"})]})]})},Hs="_account_u7md4_1",Ks="_form_u7md4_4",Xs="_btn_u7md4_9";var _e={account:Hs,form:Ks,btn:Xs};const Gs=t=>{const{getFieldProps:o,getFieldError:r}=t.form,l=()=>{t.form.validateFields(async(n,c)=>{if(!n){if(console.log(c),c.newpass!=c.newpass2){b.show("\u65B0\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4");return}await V("/user/modify_pass",{old_pass:c.oldpass,new_pass:c.newpass,new_pass2:c.newpass2}),b.show("\u4FEE\u6539\u6210\u529F")}})};return s(le,{children:[e(ne,{title:"\u91CD\u5236\u5BC6\u7801"}),s("div",{className:_e.account,children:[s("div",{className:_e.form,children:[e(R,{title:"\u539F\u5BC6\u7801",children:e(L,ee({clearable:!0,type:"text",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},o("oldpass",{rules:[{required:!0}]})))}),e(R,{title:"\u65B0\u5BC6\u7801",children:e(L,ee({clearable:!0,type:"text",placeholder:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},o("newpass",{rules:[{required:!0}]})))}),e(R,{title:"\u786E\u8BA4\u5BC6\u7801",children:e(L,ee({clearable:!0,type:"text",placeholder:"\u8BF7\u518D\u6B64\u8F93\u5165\u65B0\u5BC6\u7801\u786E\u8BA4"},o("newpass2",{rules:[{required:!0}]})))})]}),e(Q,{className:_e.btn,block:!0,theme:"primary",onClick:l,children:"\u63D0\u4EA4"})]})]})};var Js=je()(Gs);const Qs=[{path:"/",component:It},{path:"/data",component:rs},{path:"/user",component:Yt},{path:"/login",component:vs},{path:"/detail",component:Rs},{path:"/userinfo",component:Os},{path:"/account",component:Js}],Fe=({showTabbar:t,activeKey:o,changeTabbar:r})=>{const l=X(),n=c=>{r(c)};return a.exports.useEffect(()=>{l.push(o)},[o]),s(te,{visible:t,activeKey:o,onChange:n,children:[e(te.Item,{itemKey:"/",title:"\u9996\u9875",icon:e(E,{type:"icon-home"})}),e(te.Item,{itemKey:"/data",title:"\u8D26\u5355\u6982\u51B5",icon:e(E,{type:"icon-barchart"})}),e(te.Item,{itemKey:"/user",title:"\u6211\u7684",icon:e(E,{type:"icon-user"})})]})};Fe.propTypes={showNav:M.bool,activeKey:M.string};function Vs(){const t=xe(),{pathname:o}=t,r=["/","/data","/user"],[l,n]=a.exports.useState(!1),[c,m]=a.exports.useState("/");a.exports.useEffect(()=>{n(r.includes(o)),m(o)},[o]);const u=h=>{m(h)};return s(ge,{children:[e(Pe,{primaryColor:"#007fff",locale:Ye,children:e(ze,{children:Qs.map(h=>e(Le,{exact:!0,path:h.path,children:e(h.component,{})},h.path))})}),e(Fe,{changeTabbar:u,activeKey:c,showTabbar:l})]})}qe.render(e(Ue.StrictMode,{children:e(ge,{children:e(Vs,{})})}),document.getElementById("root"));
