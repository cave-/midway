"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9148],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4882:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={},p="Koa \u5e94\u7528\u8fc1\u79fb",s={unversionedId:"serverless/migrate_koa",id:"serverless/migrate_koa",title:"Koa \u5e94\u7528\u8fc1\u79fb",description:"Midway Serverless \u63d0\u4f9b\u4e86\u4e00\u5957\u901a\u7528\u7684\u5e94\u7528\u8fc1\u79fb\u65b9\u6848\uff0c\u5c06\u539f\u6709\u5e94\u7528\u5c3d\u53ef\u80fd\u4e0d\u4fee\u6539\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u53d1\u5e03\u5230\u51fd\u6570\u5e73\u53f0\u3002\u4f7f\u7528\u6b64\u65b9\u6848\uff0c\u53ef\u4ee5\u5c06\u539f\u6709\u7684 koa \u5e94\u7528\u5c3d\u53ef\u80fd\u5feb\u901f\u7b80\u5355\u7684\u8fc1\u79fb\u5230\u51fd\u6570\u5e73\u53f0\u8fdb\u884c\u6258\u7ba1\uff0c\u4eab\u53d7\u4e91\u539f\u751f\u65f6\u4ee3\u7684\u5f39\u6027\u7ea2\u5229\u3002",source:"@site/docs/serverless/migrate_koa.md",sourceDirName:"serverless",slug:"/serverless/migrate_koa",permalink:"/docs/serverless/migrate_koa",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/migrate_koa.md",tags:[],version:"current",frontMatter:{},sidebar:"serverless",previous:{title:"\u9759\u6001\u7f51\u7ad9\u6258\u7ba1",permalink:"/docs/serverless/migrate_static"},next:{title:"Express \u5e94\u7528\u8fc1\u79fb",permalink:"/docs/serverless/migrate_express"}},c={},u=[{value:"\u65b0\u589e\u51fd\u6570\u914d\u7f6e",id:"\u65b0\u589e\u51fd\u6570\u914d\u7f6e",level:2},{value:"\u4ee3\u7801\u4fee\u6539",id:"\u4ee3\u7801\u4fee\u6539",level:2},{value:"\u9759\u6001\u8d44\u6e90",id:"\u9759\u6001\u8d44\u6e90",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u9ed8\u8ba4\u60c5\u51b5",id:"\u9ed8\u8ba4\u60c5\u51b5",level:2},{value:"\u963f\u91cc\u4e91",id:"\u963f\u91cc\u4e91",level:3},{value:"\u817e\u8baf\u4e91",id:"\u817e\u8baf\u4e91",level:3},{value:"\u4fee\u6539\u90e8\u7f72\u7684\u51fd\u6570\u540d",id:"\u4fee\u6539\u90e8\u7f72\u7684\u51fd\u6570\u540d",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"koa-\u5e94\u7528\u8fc1\u79fb"},"Koa \u5e94\u7528\u8fc1\u79fb"),(0,o.kt)("p",null,"Midway Serverless \u63d0\u4f9b\u4e86\u4e00\u5957\u901a\u7528\u7684\u5e94\u7528\u8fc1\u79fb\u65b9\u6848\uff0c\u5c06\u539f\u6709\u5e94\u7528\u5c3d\u53ef\u80fd\u4e0d\u4fee\u6539\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u53d1\u5e03\u5230\u51fd\u6570\u5e73\u53f0\u3002\u4f7f\u7528\u6b64\u65b9\u6848\uff0c\u53ef\u4ee5\u5c06\u539f\u6709\u7684 koa \u5e94\u7528\u5c3d\u53ef\u80fd\u5feb\u901f\u7b80\u5355\u7684\u8fc1\u79fb\u5230\u51fd\u6570\u5e73\u53f0\u8fdb\u884c\u6258\u7ba1\uff0c\u4eab\u53d7\u4e91\u539f\u751f\u65f6\u4ee3\u7684\u5f39\u6027\u7ea2\u5229\u3002"),(0,o.kt)("h2",{id:"\u65b0\u589e\u51fd\u6570\u914d\u7f6e"},"\u65b0\u589e\u51fd\u6570\u914d\u7f6e"),(0,o.kt)("p",null,"\u5728\u4ee3\u7801\u6839\u76ee\u5f55\u65b0\u589e\u52a0\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"f.yml")," \uff0c\u5185\u5bb9\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-koa-demo       ## \u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u5e94\u7528\u540d\n\nprovider:\n  name: aliyun             ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType: koa            ## \u90e8\u7f72\u7684\u5e94\u7528\u7c7b\u578b\n\npackage:\n  exclude:\n    - package-lock.json    ## \u5ffd\u7565 package-lock.json \u6587\u4ef6\n\ncustom:\n  customDomain:\n    domainName: auto       ## \u81ea\u52a8\u751f\u6210\u57df\u540d\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6709\u65f6\u5019 package-lock.json \u6587\u4ef6\u4f1a\u9020\u6210\u90e8\u7f72\u5305\u8fc7\u5927\uff08\u5c06 dev \u4f9d\u8d56\u6253\u5165\uff09\u3002"))),(0,o.kt)("h2",{id:"\u4ee3\u7801\u4fee\u6539"},"\u4ee3\u7801\u4fee\u6539"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1\u3001\u9700\u8981\u5bfc\u51fa\u9ed8\u8ba4\u7684 app"),(0,o.kt)("li",{parentName:"ul"},"2\u3001\u9879\u76ee\u6587\u4ef6\u5f53\u524d\u6587\u4ef6\u540d\u5fc5\u987b\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"app.js")),(0,o.kt)("li",{parentName:"ul"},"3\u3001 ",(0,o.kt)("inlineCode",{parentName:"li"},"index.js")," \u4e3a\u4fdd\u7559\u6587\u4ef6\uff0c\u9879\u76ee\u4e2d\u8bf7\u4e0d\u8981\u6709\u6b64\u6587\u4ef6\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// app.js\n\nconst Koa = require('koa');\nconst Router = require('koa-router');\nconst app = new Koa();\n\n// *****\n\n// \u6ce8\u91ca\u539f\u672c\u7684\u76d1\u542c\n// app.listen(3000);\n\n// \u5bfc\u51fa\u9ed8\u8ba4\u7684 app\nmodule.exports = app;\n")),(0,o.kt)("p",null,"\u5982\u679c\u5728\u521d\u59cb\u5316\u6709\u5f02\u6b65\u7684\u60c5\u51b5 \uff0c\u6bd4\u5982\u8fde\u63a5\u6570\u636e\u5e93\u7b49\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5f02\u6b65\u7684\u652f\u6301\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// app.js\n\nconst Koa = require('koa');\nconst Router = require('koa-router');\nconst app = new Koa();\n\n// *****\n\n// \u6ce8\u91ca\u539f\u672c\u7684\u76d1\u542c\n// app.listen(3000);\n\n// \u5bfc\u51fa\u9ed8\u8ba4\u7684 app\nmodule.exports = async () => {\n  // do some async method, like db connect\n  return app;\n};\n")),(0,o.kt)("h2",{id:"\u9759\u6001\u8d44\u6e90"},"\u9759\u6001\u8d44\u6e90"),(0,o.kt)("p",null,"\u5982\u679c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u6709\u5e0c\u671b\u6784\u5efa\u62f7\u8d1d\u7684\u76ee\u5f55\uff0c\u6bd4\u5982\u9759\u6001\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," \u76ee\u5f55\uff0c\u8bf7\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"f.yml")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.include")," \u5b57\u6bb5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-egg-demo      ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun            ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType:\n  type: koa               ## \u90e8\u7f72\u7684\u5e94\u7528\u7c7b\u578b\n  version: 3.0.0\n\npackage:\n  include:\n    - public              ## \u5199\u5728\u8fd9\u91cc\u4f1a\u88ab\u81ea\u52a8\u6253\u5305\n  exclude:\n    - package-lock.json   ## \u5ffd\u7565 package-lock.json \u6587\u4ef6\n")),(0,o.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e Scripts \u811a\u672c\u548c dev \u4f9d\u8d56 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli")," \uff0c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "@midwayjs/cli": "^1.2.36"\n    ...\n  },\n  "scripts": {\n    "deploy": "midway-bin deploy",\n    ...\n  }\n}\n')),(0,o.kt)("p",null,"\u6216\u8005\u4f7f\u7528\u4e0d\u540c\u7684 npm \u5305\u52a0\u901f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "scripts": {\n    "deploy": "midway-bin deploy --npm=cnpm",\n    ...\n  }\n}\n')),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5355\u72ec\u6267\u884c\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx midway-bin deploy                                     ## deploy by npm\n$ npx midway-bin deploy --npm=cnpm              ## deploy by cnpm\n")),(0,o.kt)("h2",{id:"\u9ed8\u8ba4\u60c5\u51b5"},"\u9ed8\u8ba4\u60c5\u51b5"),(0,o.kt)("h3",{id:"\u963f\u91cc\u4e91"},"\u963f\u91cc\u4e91"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u53d1\u5e03\u4e3a http \u89e6\u53d1\u5668\uff0c\u5982\u679c\u9700\u8981 API \u7f51\u5173\uff0c\u53ef\u4ee5\u81ea\u884c\u6309\u7167 f.yml \u7684\u683c\u5f0f\u8fdb\u884c functions \u7ed3\u6784\u7684\u4fee\u6539\u914d\u7f6e\uff0c\u540c\u65f6\uff0c\u9700\u8981\u5728\u5e73\u53f0\u914d\u7f6e\u8def\u7531\u3002"),(0,o.kt)("h3",{id:"\u817e\u8baf\u4e91"},"\u817e\u8baf\u4e91"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u53d1\u5e03\u4e3a API \u7f51\u5173\u89e6\u53d1\u5668\uff0c\u540c\u65f6\u4f1a\u81ea\u52a8\u914d\u7f6e\u7f51\u5173\u8def\u7531\u3002"),(0,o.kt)("h3",{id:"\u4fee\u6539\u90e8\u7f72\u7684\u51fd\u6570\u540d"},"\u4fee\u6539\u90e8\u7f72\u7684\u51fd\u6570\u540d"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 name \u5b57\u6bb5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-demo     ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun       ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType:\n  type: koa\n  version: 3.0.0\n  name: app_idx      ## \u51fd\u6570\u540d\n")))}d.isMDXComponent=!0}}]);