(()=>{"use strict";var e,a,f,d,t,r={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var f=c[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=r,b.c=c,e=[],b.O=(a,f,d,t)=>{if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],t=e[i][2];for(var c=!0,o=0;o<f.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(c=!1,t<r&&(r=t));if(c){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[f,d,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,f({}),f([]),f(f)];for(var c=2&d&&e;"object"==typeof c&&!~a.indexOf(c);c=f(c))Object.getOwnPropertyNames(c).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",71:"bd6c53ac",102:"3e8f9fd8",200:"74c42886",202:"1e6bdfd4",229:"f7838674",459:"1106684d",572:"7a023b7a",844:"ed42d971",955:"d748e4e2",1019:"226415ed",1145:"a5941b6e",1218:"cd4db73d",1591:"000774ea",2283:"a21db442",2528:"0e302c93",2954:"c5cf19e3",2969:"aeb74b2e",3085:"1f391b9e",3336:"94911797",3498:"e5a7434f",3645:"d7989f56",3657:"ed4c97f9",3767:"edf26d3b",3832:"9fde90c0",4642:"4602c34e",5266:"9222c4dc",5365:"9a1a8f2c",5458:"51e8437f",5643:"e2f10969",6122:"b314b742",6361:"3991838a",6518:"7d2f548a",6570:"03df922c",6784:"77a64b72",6833:"7f199708",7046:"fc76f26c",7063:"1341566d",7089:"dd7d4485",7275:"7bd1bd59",7379:"ce9a4ad6",7414:"393be207",7678:"6075da2c",7790:"bafc7c7e",7918:"17896441",8062:"50b0140e",8086:"5b9aef5e",8095:"f48b9bfa",8234:"bb1829f9",8348:"1e42bc26",8901:"dca3f590",9174:"770dce9f",9336:"5e5119d3",9514:"1be78505",9616:"f019b831",9671:"0e384e19",9762:"cc03e2d4",9817:"14eb3368"}[e]||e)+"."+{53:"a298f2d2",71:"d0ecf5d0",102:"0838e296",200:"bdea9722",202:"6c2dcebd",229:"f02335cb",459:"c5d44e3b",572:"60dffc29",844:"203641fe",955:"9b24ee02",1019:"acfba60e",1145:"33d2b382",1218:"f1817125",1591:"6c38b0c1",2283:"5c16da95",2528:"72249c5d",2954:"9ae1c619",2969:"02ec696b",3085:"96016fc6",3336:"8e67f777",3498:"0b3f8070",3645:"9749de94",3657:"1b1211e0",3767:"819fb059",3832:"3771b8dd",4248:"74e2059d",4642:"e15f6020",5266:"7297e128",5365:"cb97fc73",5458:"fcfa19d3",5643:"1781b4d9",6122:"c79f9526",6361:"28d485d3",6518:"a58f1727",6570:"48fba1e5",6784:"cc981388",6833:"182b8eb8",7046:"440fabc8",7063:"3b453429",7089:"54f305df",7275:"f484516d",7379:"ce3cb67d",7414:"9e95a802",7678:"dff3aead",7790:"bad9c1ca",7918:"2014cbbc",8062:"8b10421a",8086:"9200b966",8095:"d974be23",8234:"995959c3",8348:"eebf8fa9",8812:"f7242375",8901:"f1a14eaa",9174:"08e73e49",9336:"fe0b8892",9514:"784017ef",9616:"a3656951",9671:"b64671fa",9762:"4088e9eb",9817:"549a27d7"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},t="fastura:",b.l=(e,a,f,r)=>{if(d[e])d[e].push(a);else{var c,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+f){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",t+f),c.src=e),d[e]=[a];var l=(a,f)=>{c.onerror=c.onload=null,clearTimeout(s);var t=d[e];if(delete d[e],c.parentNode&&c.parentNode.removeChild(c),t&&t.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/documentacion/",b.gca=function(e){return e={17896441:"7918",94911797:"3336","935f2afb":"53",bd6c53ac:"71","3e8f9fd8":"102","74c42886":"200","1e6bdfd4":"202",f7838674:"229","1106684d":"459","7a023b7a":"572",ed42d971:"844",d748e4e2:"955","226415ed":"1019",a5941b6e:"1145",cd4db73d:"1218","000774ea":"1591",a21db442:"2283","0e302c93":"2528",c5cf19e3:"2954",aeb74b2e:"2969","1f391b9e":"3085",e5a7434f:"3498",d7989f56:"3645",ed4c97f9:"3657",edf26d3b:"3767","9fde90c0":"3832","4602c34e":"4642","9222c4dc":"5266","9a1a8f2c":"5365","51e8437f":"5458",e2f10969:"5643",b314b742:"6122","3991838a":"6361","7d2f548a":"6518","03df922c":"6570","77a64b72":"6784","7f199708":"6833",fc76f26c:"7046","1341566d":"7063",dd7d4485:"7089","7bd1bd59":"7275",ce9a4ad6:"7379","393be207":"7414","6075da2c":"7678",bafc7c7e:"7790","50b0140e":"8062","5b9aef5e":"8086",f48b9bfa:"8095",bb1829f9:"8234","1e42bc26":"8348",dca3f590:"8901","770dce9f":"9174","5e5119d3":"9336","1be78505":"9514",f019b831:"9616","0e384e19":"9671",cc03e2d4:"9762","14eb3368":"9817"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,f)=>{var d=b.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((f,t)=>d=e[a]=[f,t]));f.push(d[2]=t);var r=b.p+b.u(a),c=new Error;b.l(r,(f=>{if(b.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var t=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;c.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",c.name="ChunkLoadError",c.type=t,c.request=r,d[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var d,t,r=f[0],c=f[1],o=f[2],n=0;if(r.some((a=>0!==e[a]))){for(d in c)b.o(c,d)&&(b.m[d]=c[d]);if(o)var i=o(b)}for(a&&a(f);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},f=self.webpackChunkfastura=self.webpackChunkfastura||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();