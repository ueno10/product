(this.webpackJsonpnode=this.webpackJsonpnode||[]).push([[0],{147:function(e,t,n){e.exports=n(148)},148:function(e,t,n){"use strict";n.r(t);var r=n(16),a=n(1),l=n.n(a),o=n(134),i=n(142);Object(o.render)(l.a.createElement((function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],u=function(e){return"\u5185\u95a3\u5e9c"===e?"hsl(20, 70%, 50%)":"\u539a\u751f\u52b4\u50cd\u7701"===e?"hsl(40, 70%, 50%)":"\u56fd\u571f\u4ea4\u901a\u7701"===e?"hsl(60, 70%, 50%)":"\u5916\u52d9\u7701"===e?"hsl(90, 70%, 50%)":"\u5fa9\u8208\u5e81"===e?"hsl(120, 70%, 50%)":"\u6587\u90e8\u79d1\u5b66\u7701"===e?"hsl(160, 70%, 50%)":"\u74b0\u5883\u7701"===e?"hsl(240, 70%, 50%)":"\u7d4c\u6e08\u7523\u696d\u7701"===e?"hsl(200, 70%, 50%)":"\u7dcf\u52d9\u7701"===e?"hsl(180, 70%, 50%)":"\u8b66\u5bdf\u5e81"===e?"hsl(300, 70%, 50%)":"\u9632\u885b\u7701"===e?"hsl(360, 70%, 50%)":"\u500b\u4eba\u60c5\u5831\u4fdd\u8b77\u59d4\u54e1\u4f1a"===e?"hsl(350, 70%, 50%)":"\u8ca1\u52d9\u7701"===e?"hsl(220, 70%, 50%)":"\u6cd5\u52d9\u7701"===e?"hsl(45, 70%, 50%)":"\u8fb2\u6797\u6c34\u7523\u7701"===e?"hsl(140, 70%, 50%)":"\u539f\u5b50\u529b\u898f\u5236\u59d4\u54e1\u4f1a"===e?"hsl(95, 20%, 60%)":void 0};return Object(a.useEffect)((function(){window.fetch("data.json").then((function(e){return e.json()})).then((function(e){var t=new Set,n=!0,r=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var c=l.value;t.add(c.name)}}catch(se){r=!0,a=se}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}var m=[],h=!0,s=!1,f=void 0;try{for(var d,y=t[Symbol.iterator]();!(h=(d=y.next()).done);h=!0){var v=d.value,p=new Set,E=!0,b=!1,w=void 0;try{for(var S,x=e[Symbol.iterator]();!(E=(S=x.next()).done);E=!0){var g=S.value;g.name===v&&p.add(g.ministry)}}catch(se){b=!0,w=se}finally{try{E||null==x.return||x.return()}finally{if(b)throw w}}console.log(p);var j=[],N=!0,O=!1,k=void 0;try{for(var J,C=p[Symbol.iterator]();!(N=(J=C.next()).done);N=!0){var D=J.value,I=new Set,R=!0,q=!1,F=void 0;try{for(var G,T=e[Symbol.iterator]();!(R=(G=T.next()).done);R=!0){var U=G.value;U.ministry===D&&I.add(U.bureau)}}catch(se){q=!0,F=se}finally{try{R||null==T.return||T.return()}finally{if(q)throw F}}var W=[],_=!0,z=!1,A=void 0;try{for(var B,H=I[Symbol.iterator]();!(_=(B=H.next()).done);_=!0){var K=B.value,L=new Set,M=!0,P=!1,Q=void 0;try{for(var V,X=e[Symbol.iterator]();!(M=(V=X.next()).done);M=!0){var Y=V.value;Y.bureau===K&&L.add(Y.department)}}catch(se){P=!0,Q=se}finally{try{M||null==X.return||X.return()}finally{if(P)throw Q}}var Z=[],$=!0,ee=!1,te=void 0;try{for(var ne,re=L[Symbol.iterator]();!($=(ne=re.next()).done);$=!0){var ae=ne.value,le=0,oe=!0,ie=!1,ue=void 0;try{for(var ce,me=e[Symbol.iterator]();!(oe=(ce=me.next()).done);oe=!0){var he=ce.value;he.name===v&&he.ministry===D&&he.bureau===K&&he.department===ae&&(le+=he.amount)}}catch(se){ie=!0,ue=se}finally{try{oe||null==me.return||me.return()}finally{if(ie)throw ue}}Z.push({name:ae,amount:le})}}catch(se){ee=!0,te=se}finally{try{$||null==re.return||re.return()}finally{if(ee)throw te}}W.push({name:K,children:Z})}}catch(se){z=!0,A=se}finally{try{_||null==H.return||H.return()}finally{if(z)throw A}}j.push({name:D,color:u(D),children:W})}}catch(se){O=!0,k=se}finally{try{N||null==C.return||C.return()}finally{if(O)throw k}}m.push({name:v,children:j})}}catch(se){s=!0,f=se}finally{try{h||null==y.return||y.return()}finally{if(s)throw f}}o(m)}))}),[]),console.log(n),l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("h3",null,"2019\u5e74\u5ea6\u5c3e\u4e0a\u30bc\u30df \u60c5\u5831\u79d1\u5b66\u8b1b\u7a762 \u8ab2\u984c\u5236\u4f5c"),l.a.createElement("h1",null,"sunburst\u3092\u7528\u3044\u305f\u5efa\u8a2d\u4f1a\u793e\u306e\u56fd\u5bb6\u4e8b\u696d\u53ef\u8996\u5316"),l.a.createElement("h2",null,"\u30c7\u30fc\u30bf\u306e\u8aac\u660e"),l.a.createElement("p",null,"\u5efa\u7bc9\u696d\u754c\u306e\u4f01\u696d\u306e\u4e2d\u304b\u30892016\u5e74~2019\u5e74\u306b\u884c\u308f\u308c\u305f\u884c\u653f\u4e8b\u696d\u3092\u8acb\u3051\u8ca0\u3063\u305f\u6570\u306e\u591a\u3044\u4e0a\u4f4d3\u793e\u3092\u9078\u3073\u3001\u884c\u653f\u4e8b\u696d\u30ec\u30d3\u30e5\u30fc\u30b7\u30fc\u30c8\u4e3b\u8981\u9805\u76ee\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u524d\u8ff0\u306b\u3042\u308b\u4f01\u696d\u304c\u652f\u51fa\u5148\u3068\u306a\u308b\u4e8b\u696d\u306e\u30c7\u30fc\u30bf\u306e \u652f\u51fa\u5148\u540d,\u62c5\u5f53\u5e9c\u7701\u5e81,\u62c5\u5f53\u90e8\u5c40,\u62c5\u5f53\u90e8\u9580,\u5e74\u5ea6,\u91d1\u984d(\u767e\u4e07\u5186)\u30921\u3064\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u4f7f\u7528\u3057\u305f."),l.a.createElement("p",null,"\u306a\u304a\u4e0a\u8a18\u306e\u4e0a\u4f4d3\u793e\u3068\u305d\u308c\u305e\u308c\u306e\u30c7\u30fc\u30bf\u6570,\u7dcf\u652f\u51fa\u984d\u306f\u6e05\u6c34\u5efa\u8a2d\u682a\u5f0f\u4f1a\u793e\u304c102\u4ef6,87607\u767e\u4e07\u5186\u3002\u5927\u6210\u5efa\u8a2d\u682a\u5f0f\u4f1a\u793e\u304c107\u4ef6,112668\u767e\u4e07\u5186\u3002\u9e7f\u5cf6\u5efa\u8a2d\u682a\u5f0f\u4f1a\u793e\u304c134\u4ef6,167096\u767e\u4e07\u5186\u3068\u306a\u3063\u3066\u3044\u308b\u3002"),l.a.createElement("h2",null,"\u53ef\u8996\u5316\u65b9\u6cd5,\u56f3\u306e\u8aac\u660e"),l.a.createElement("p",null,"\u4e0a\u8a18\u306e\u30c7\u30fc\u30bf\u3092\u968e\u5c64\u578b\u306e\u30c7\u30fc\u30bf\u306b\u5909\u63db\u3057\u3001sunburst\u3068\u547c\u3070\u308c\u308b\u968e\u5c64\u5316\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u30c9\u30fc\u30ca\u30c4\u72b6\u306e\u30b0\u30e9\u30d5\u3067\u8868\u73fe\u3057\u305f\u7269\u3092React\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306enivo\u3092\u4f7f\u3063\u3066\u63cf\u753b\u3057\u305f\u3002"),l.a.createElement("p",null,"\u4eca\u56de\u306f\u4f01\u696d\u3054\u3068\u306b\u56f3\u3092\u4f5c\u308a\u305d\u308c\u305e\u308c\u5185\u5074\u304b\u3089\u4e00\u756a\u76ee\u306e\u5c64\u304c\u62c5\u5f53\u5e9c\u7701\u5e81\u3001\u4e8c\u756a\u76ee\u306e\u5c64\u304c\u62c5\u5f53\u90e8\u5c40\u3001\u4e09\u756a\u76ee\u306e\u5c64\u304c\u62c5\u5f53\u90e8\u9580\u3068\u306a\u3063\u3066\u304a\u308a\u3001\u8272\u306b\u95a2\u3057\u3066\u306f\u4e00\u756a\u5185\u5074\u306e\u5c64\u3001\u3059\u306a\u308f\u3061\u62c5\u5f53\u5e9c\u7701\u5e81\u3054\u3068\u306b\u8272\u5206\u3051\u3092\u884c\u3063\u305f\u3002"),l.a.createElement("h2",null,"\u53ef\u8996\u5316\u7d50\u679c\u306e\u56f3"),n.map((function(e){return l.a.createElement("center",null,l.a.createElement("h3",null,e.name),l.a.createElement("div",{style:{width:"600px",height:"600px"}},l.a.createElement(i.a,{data:e,margin:{top:10,right:20,bottom:50,left:10},identity:"name",value:"amount",cornerRadius:2,borderWidth:1,borderColor:"white",colors:function(e){return e.color},childColor:{from:"color",modifiers:[]},animate:!0,motionStiffness:90,motionDamping:15,isInteractive:!0})))})),l.a.createElement("h2",null,"\u53ef\u8996\u5316\u7d50\u679c\u306e\u8003\u5bdf"),l.a.createElement("p",null,"\u5168\u793e\u3068\u3082\u9632\u885b\u7701\u306e\u5927\u534a\u306e\u4e8b\u696d\u3092\u7c73\u8ecd\u518d\u7de8\u95a2\u4fc2\u8cbb\u304c\u5360\u3081\u3066\u3044\u308b\u3002\u3053\u308c\u306f\u7c73\u8ecd\u57fa\u5730\u306b\u56fd\u304c\u591a\u304f\u306e\u4e88\u7b97\u3092\u8cbb\u3084\u3057\u3066\u3044\u308b\u4e8b\u304c\u308f\u304b\u308b\u3002\u4e2d\u3067\u3082\u533b\u7642\u6a5f\u95a2\u3092\u5f97\u610f\u5206\u91ce\u3068\u3059\u308b\u6e05\u6c34\u5efa\u8a2d\u306f\u533b\u7642\u65bd\u8a2d\u306e\u65b0\u8a2d\u5de5\u4e8b\u3002\u5927\u578b\u571f\u6728\u5efa\u7bc9\u3092\u5f97\u610f\u3068\u3059\u308b\u5927\u6210\u5efa\u8a2d\u306f\u516c\u5171\u65bd\u8a2d\u3084\u5cb8\u58c1\u5de5\u4e8b\u3002\u571f\u6728\u6280\u8853\u3092\u91cd\u8996\u3059\u308b\u9e7f\u5cf6\u5efa\u8a2d\u306f\u571f\u6728\u5de5\u4e8b\u3084\u5efa\u8a2d\u5de5\u4e8b\u3092\u591a\u304f\u884c\u3063\u3066\u3044\u308b\u4e8b\u304c\u5206\u304b\u3063\u305f\u3002"),l.a.createElement("p",null,"\u6e05\u6c34\u5efa\u8a2d\u306f\u56fd\u571f\u4ea4\u901a\u7701\u306e\u5272\u5408\u304c\u591a\u304f\u3001\u305d\u306e\u4e2d\u3067\u3082\u6c34\u7ba1\u7406\u30fb\u56fd\u571f\u4fdd\u5168\u5c40\u3001\u6cbb\u6c34\u8ab2\u306e\u5272\u5408\u304c\u591a\u3044\u3002\u3053\u308c\u306f\u5927\u898f\u6a21\u306a\u30c0\u30e0\u5efa\u8a2d\u4e8b\u696d\u3092\u62c5\u3063\u3066\u3044\u308b\u304b\u3089\u3067\u3042\u308b\u3068\u8003\u3048\u3089\u308c\u308b\u3002\u307e\u305f\u4ed6\u793e\u3068\u306e\u9055\u3044\u3068\u3057\u3066\u5185\u95a3\u5e9c\u304b\u3089\u306e\u652f\u51fa\u304c\u3042\u308a\u3001\u3053\u308c\u306f\u4f1d\u7d71\u5efa\u7bc9\u306b\u8c4a\u5bcc\u306a\u5b9f\u7e3e\u3092\u6709\u3059\u308b\u6e05\u6c34\u5efa\u8a2d\u306f\u56fd\u5b9d\u3067\u3042\u308b\u8fce\u8cd3\u9928\u306e\u6539\u4fee\u7b49\u3092\u884c\u3063\u3066\u3044\u308b\u305f\u3081\u3067\u3042\u308b\u3002"),l.a.createElement("p",null,"\u5927\u6210\u5efa\u8a2d\u306f\u7279\u5fb4\u3068\u3057\u3066\u6cd5\u52d9\u7701\u3001\u8ca1\u52d9\u7701\u306e\u5272\u5408\u304c\u4ed6\u793e\u3088\u308a\u3082\u591a\u3044\u4e8b\u304c\u3042\u3052\u3089\u308c\u308b\u3002\u3053\u308c\u306f\u5211\u52d9\u6240\u7b49\u306e\u6cd5\u52d9\u65bd\u8a2d\u306e\u6574\u5099\u3092\u884c\u3063\u3066\u304a\u308a\u3001\u307e\u305f\u305d\u308c\u3089\u306f\u7279\u5b9a\u56fa\u6709\u8ca1\u7523\u3067\u3042\u308b\u305f\u3081\u8ca1\u52d9\u7701\u304b\u3089\u306e\u652f\u51fa\u984d\u3082\u591a\u304f\u306a\u3063\u3066\u3044\u308b\u3068\u8003\u3048\u3089\u308c\u308b\u3002"),l.a.createElement("p",null,"\u9e7f\u5cf6\u5efa\u8a2d\u306f\u7279\u5fb4\u3068\u3057\u3066\u7d4c\u6e08\u7523\u696d\u7701\u3001\u5fa9\u8208\u5e81\u306e\u5272\u5408\u304c\u4ed6\u793e\u3088\u308a\u3082\u591a\u3044\u4e8b\u304c\u3042\u3052\u3089\u308c\u308b\u3002\u3053\u308c\u306f\u9e7f\u5cf6\u5efa\u8a2d\u304c\u74b0\u5883\u4fdd\u5168\u6280\u8853\u3092\u5927\u304d\u306a\u67f1\u306e\uff11\u3064\u3068\u3057\u3066\u3042\u3052\u3066\u304a\u308a\u3001\u6771\u65e5\u672c\u5927\u9707\u707d\u3067\u751f\u3058\u305f\u6c5a\u67d3\u6c34\u306e\u554f\u984c\u306e\u89e3\u6c7a\u3084\u6c5a\u67d3\u7269\u8cea\u306e\u51e6\u7406\u7b49\u3092\u884c\u3063\u3066\u304a\u308a\u3001\u305d\u3053\u306b\u591a\u304f\u306e\u91d1\u984d\u304c\u4f7f\u308f\u308c\u3066\u3044\u308b\u305f\u3081\u3060\u3068\u8003\u3048\u3089\u308c\u308b\u3002"),l.a.createElement("p",null,"\u53c2\u8003\u30da\u30fc\u30b8 ~\u653f\u5e9c\u306e\u4e8b\u696d\u304c\u691c\u7d22\u3067\u304d\u308b\u30b5\u30a4\u30c8JUDGIT!~\uff1a",l.a.createElement("a",{href:"https://judgit.netlify.com",target:"_blank"},"https://judgit.netlify.com"))))),l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("p",null,"\xa92020 \u4e0a\u91ce\u745e\u8cb4, \u51fa\u53e3\u7ffc, \u91ce\u6751\u7406\u7d17"))))}),null),document.querySelector("#content"))}},[[147,1,2]]]);
//# sourceMappingURL=main.d6ff3419.chunk.js.map