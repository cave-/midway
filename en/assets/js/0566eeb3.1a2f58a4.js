"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3100],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5481:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={},l="\u8de8\u57df",c={unversionedId:"extensions/cross_domain",id:"extensions/cross_domain",title:"\u8de8\u57df",description:"\u9002\u7528\u4e8e @midwayjs/faas \u3001@midwayjs/web \u3001@midwayjs/koa \u548c @midwayjs/express \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u8de8\u57df\u7ec4\u4ef6\uff0c\u652f\u6301 cors \u3001jsonp \u591a\u79cd\u6a21\u5f0f\u3002",source:"@site/docs/extensions/cross_domain.md",sourceDirName:"extensions",slug:"/extensions/cross_domain",permalink:"/en/docs/extensions/cross_domain",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/cross_domain.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"\u9759\u6001\u6587\u4ef6\u6258\u7ba1",permalink:"/en/docs/extensions/static_file"},next:{title:"HTTP \u4ee3\u7406",permalink:"/en/docs/extensions/http-proxy"}},p={},u=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",level:2},{value:"CORS \u914d\u7f6e",id:"cors-\u914d\u7f6e",level:2},{value:"JSONP \u914d\u7f6e",id:"jsonp-\u914d\u7f6e",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8de8\u57df"},"\u8de8\u57df"),(0,o.kt)("p",null,"\u9002\u7528\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," \u3001",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \u3001",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u8de8\u57df\u7ec4\u4ef6\uff0c\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"cors")," \u3001",(0,o.kt)("inlineCode",{parentName:"p"},"jsonp")," \u591a\u79cd\u6a21\u5f0f\u3002"),(0,o.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"web \u652f\u6301\u60c5\u51b5"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,o.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/cross-domain --save\n")),(0,o.kt)("h2",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u4e2d\u5f15\u5165\u7ec4\u4ef6,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as crossDomain from '@midwayjs/cross-domain';\n@Configuration({\n  imports: [\n    // ...other components\n    crossDomain\n  ],\n})\nexport class MainConfiguration {}\n")),(0,o.kt)("h2",{id:"cors-\u914d\u7f6e"},"CORS \u914d\u7f6e"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/config/config.default")," \u4e2d\u8fdb\u884c CORS \u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  cors: {\n    credentials: false,\n  },\n}\n")),(0,o.kt)("p",null,"\u53ef\u7528\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const cors = {\n  // \u5141\u8bb8\u8de8\u57df\u7684\u65b9\u6cd5\uff0c\u3010\u9ed8\u8ba4\u503c\u3011\u4e3a GET,HEAD,PUT,POST,DELETE,PATCH\n  allowMethods: string |string[];\n  // \u8bbe\u7f6e Access-Control-Allow-Origin \u7684\u503c\uff0c\u3010\u9ed8\u8ba4\u503c\u3011\u4f1a\u83b7\u53d6\u8bf7\u6c42\u5934\u4e0a\u7684 origin\n  // \u4e5f\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e00\u4e2a\u56de\u8c03\u65b9\u6cd5\uff0c\u4f20\u5165\u7684\u53c2\u6570\u4e3a request\uff0c\u9700\u8981\u8fd4\u56de origin \u503c\n  // \u4f8b\u5982\uff1ahttp://test.midwayjs.org\n  // \u5982\u679c\u8bbe\u7f6e\u4e86 credentials\uff0c\u5219 origin \u4e0d\u80fd\u8bbe\u7f6e\u4e3a *\n  origin: string|Function;\n  // \u8bbe\u7f6e Access-Control-Allow-Headers \u7684\u503c\uff0c\u3010\u9ed8\u8ba4\u503c\u3011\u4f1a\u83b7\u53d6\u8bf7\u6c42\u5934\u4e0a\u7684 Access-Control-Request-Headers\n  allowHeaders: string |string[];\n  // \u8bbe\u7f6e Access-Control-Expose-Headers \u7684\u503c\n  exposeHeaders: string |string[];\n  // \u8bbe\u7f6e Access-Control-Allow-Credentials\uff0c\u3010\u9ed8\u8ba4\u503c\u3011false\n   // \u4e5f\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e00\u4e2a\u56de\u8c03\u65b9\u6cd5\uff0c\u4f20\u5165\u7684\u53c2\u6570\u4e3a request\uff0c\u8fd4\u56de\u503c\u4e3a true \u6216 false\n  credentials: boolean|Function;\n  // \u662f\u5426\u5728\u6267\u884c\u62a5\u9519\u7684\u65f6\u5019\uff0c\u628a\u8de8\u57df\u7684 header \u4fe1\u606f\u5199\u5165\u5230 error \u5bf9\u7684 headers \u5c5e\u6027\u4e2d\uff0c\u3010\u9ed8\u8ba4\u503c\u3011false\n  keepHeadersOnError: boolean;\n  // \u8bbe\u7f6e Access-Control-Max-Age\n  maxAge: number;\n}\n")),(0,o.kt)("h2",{id:"jsonp-\u914d\u7f6e"},"JSONP \u914d\u7f6e"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/config/config.default")," \u4e2d\u8fdb\u884c JSONP \u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  jsonp: {\n    callback: 'jsonp',\n    limit: 512,\n  },\n}\n")))}m.isMDXComponent=!0}}]);