"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3149],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||k[m]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return k}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={},s="Kafka",p={unversionedId:"extensions/kafka",id:"extensions/kafka",title:"Kafka",description:"\u5728\u590d\u6742\u7cfb\u7edf\u7684\u67b6\u6784\u4e2d\uff0c\u4e8b\u4ef6\u6d41\u662f\u5f88\u91cd\u8981\u7684\u4e00\u73af\uff0c\u5305\u62ec\u4ece\u4e8b\u4ef6\u6e90\u4e2d(\u6570\u636e\u5e93\u3001\u4f20\u611f\u5668\u3001\u79fb\u52a8\u8bbe\u5907\u7b49)\u4ee5\u4e8b\u4ef6\u6d41\u7684\u65b9\u5f0f\u53bb\u5b9e\u65f6\u6355\u83b7\u6570\u636e\uff0c\u6301\u4e45\u5316\u4e8b\u4ef6\u6d41\u65b9\u4fbf\u68c0\u7d22\uff0c\u5e76\u5b9e\u65f6\u548c\u56de\u987e\u64cd\u4f5c\u5904\u7406\u54cd\u5e94\u4e8b\u4ef6\u6d41\u3002",source:"@site/docs/extensions/kafka.md",sourceDirName:"extensions",slug:"/extensions/kafka",permalink:"/docs/extensions/kafka",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/kafka.md",tags:[],version:"current",frontMatter:{}},c={},k=[{value:"\u57fa\u7840\u6982\u5ff5",id:"\u57fa\u7840\u6982\u5ff5",level:2},{value:"\u6d88\u8d39\u8005\uff08Consumer\uff09\u4f7f\u7528\u65b9\u6cd5",id:"\u6d88\u8d39\u8005consumer\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u5f00\u542f\u7ec4\u4ef6",id:"\u5f00\u542f\u7ec4\u4ef6",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:3},{value:"Kafka \u6d88\u606f\u4e0a\u4e0b\u6587",id:"kafka-\u6d88\u606f\u4e0a\u4e0b\u6587",level:3},{value:"\u914d\u7f6e\u6d88\u8d39\u8005",id:"\u914d\u7f6e\u6d88\u8d39\u8005",level:3},{value:"Manual-committing",id:"manual-committing",level:3},{value:"Multi different Topic",id:"multi-different-topic",level:3},{value:"\u88c5\u9970\u5668\u53c2\u6570",id:"\u88c5\u9970\u5668\u53c2\u6570",level:3},{value:"\u751f\u4ea7\u8005\uff08Producer\uff09\u4f7f\u7528\u65b9\u6cd5",id:"\u751f\u4ea7\u8005producer\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56-1",level:3},{value:"\u8c03\u7528\u670d\u52a1\u53d1\u9001\u6d88\u606f",id:"\u8c03\u7528\u670d\u52a1\u53d1\u9001\u6d88\u606f",level:3},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2}],u={toc:k};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kafka"},"Kafka"),(0,o.kt)("p",null,"\u5728\u590d\u6742\u7cfb\u7edf\u7684\u67b6\u6784\u4e2d\uff0c\u4e8b\u4ef6\u6d41\u662f\u5f88\u91cd\u8981\u7684\u4e00\u73af\uff0c\u5305\u62ec\u4ece\u4e8b\u4ef6\u6e90\u4e2d(\u6570\u636e\u5e93\u3001\u4f20\u611f\u5668\u3001\u79fb\u52a8\u8bbe\u5907\u7b49)\u4ee5\u4e8b\u4ef6\u6d41\u7684\u65b9\u5f0f\u53bb\u5b9e\u65f6\u6355\u83b7\u6570\u636e\uff0c\u6301\u4e45\u5316\u4e8b\u4ef6\u6d41\u65b9\u4fbf\u68c0\u7d22\uff0c\u5e76\u5b9e\u65f6\u548c\u56de\u987e\u64cd\u4f5c\u5904\u7406\u54cd\u5e94\u4e8b\u4ef6\u6d41\u3002"),(0,o.kt)("p",null,"\u5e94\u7528\u4e8e\u652f\u4ed8\u548c\u91d1\u878d\u4ea4\u6613\u3001\u5b9e\u65bd\u8ddf\u8e2a\u548c\u76d1\u63a7\u6c7d\u8f66\u7b49\u884c\u4e1a\u4fe1\u606f\u6d41\u52a8\u3001\u6355\u83b7\u5206\u6790\u7269\u8054\u7f51\u6570\u636e\u7b49\u7b49\u3002"),(0,o.kt)("p",null,"\u5728Midway\u4e2d\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u8ba2\u9605Kafka\u7684\u80fd\u529b\uff0c\u4e13\u95e8\u6765\u6ee1\u8db3\u7528\u6237\u7684\u8fd9\u7c7b\u9700\u6c42\u3002"),(0,o.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8ba2\u9605\u670d\u52a1")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,o.kt)("h2",{id:"\u57fa\u7840\u6982\u5ff5"},"\u57fa\u7840\u6982\u5ff5"),(0,o.kt)("p",null,"\u5206\u5e03\u5f0f\u6d41\u5904\u7406\u5e73\u53f0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53d1\u5e03\u8ba2\u9605\uff08\u6d41\uff09\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ul"},"\u5bb9\u9519\uff08\u6545\u969c\u8f6c\u79fb\uff09\u5b58\u50a8\u4fe1\u606f\uff08\u6d41\uff09\uff0c\u5b58\u50a8\u4e8b\u4ef6\u6d41"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u6d88\u606f\u6d41\u53d1\u751f\u7684\u65f6\u5019\u8fdb\u884c\u5904\u7406\uff0c\u5904\u7406\u4e8b\u4ef6\u6d41")),(0,o.kt)("p",null,"\u7406\u89e3Producer\uff08\u751f\u4ea7\u8005\uff09"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53d1\u5e03\u6d88\u606f\u5230\u4e00\u4e2a\u4e3b\u9898\u6216\u591a\u4e2atopic(\u4e3b\u9898)\u3002")),(0,o.kt)("p",null,"\u7406\u89e3Consumer\uff08\u4e3b\u9898\u6d88\u8d39\u8005\uff09"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8ba2\u9605\u4e00\u4e2a\u6216\u8005\u591a\u4e2atopic,\u5e76\u5904\u7406\u4ea7\u751f\u7684\u4fe1\u606f\u3002")),(0,o.kt)("p",null,"\u7406\u89e3Stream API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5145\u5f53\u4e00\u4e2a\u6d41\u5904\u7406\u5668\uff0c\u4ece1\u4e2a\u6216\u591a\u4e2atopic\u6d88\u8d39\u8f93\u5165\u6d41\uff0c\u5e76\u751f\u4ea7\u4e00\u4e2a\u8f93\u51fa\u6d41\u52301\u4e2a\u6216\u591a\u4e2a\u8f93\u51fatopic\uff0c\u6709\u6548\u5730\u5c06\u8f93\u5165\u6d41\u8f6c\u6362\u5230\u8f93\u51fa\u6d41\u3002")),(0,o.kt)("p",null,"\u7406\u89e3Broker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5df2\u53d1\u5e03\u7684\u6d88\u606f\u4fdd\u5b58\u5728\u4e00\u7ec4\u670d\u52a1\u5668\u4e2d\uff0c\u79f0\u4e4b\u4e3aKafka\u96c6\u7fa4\u3002\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u670d\u52a1\u5668\u90fd\u662f\u4e00\u4e2a\u4ee3\u7406\uff08Broker\uff09\u3002 \u6d88\u8d39\u8005\u53ef\u4ee5\u8ba2\u9605\u4e00\u4e2a\u6216\u591a\u4e2a\u4e3b\u9898\uff08topic\uff09\uff0c\u5e76\u4eceBroker\u62c9\u6570\u636e\uff0c\u4ece\u800c\u6d88\u8d39\u8fd9\u4e9b\u5df2\u53d1\u5e03\u7684\u6d88\u606f\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://kafka.apache.org/images/streams-and-tables-p1_p4.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u6d88\u8d39\u8005consumer\u4f7f\u7528\u65b9\u6cd5"},"\u6d88\u8d39\u8005\uff08Consumer\uff09\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("p",null,"Midway \u63d0\u4f9b\u4e86\u8ba2\u9605 Kafka \u7684\u80fd\u529b\uff0c\u5e76\u80fd\u591f\u72ec\u7acb\u90e8\u7f72\u548c\u4f7f\u7528\u3002\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/kafka")," \u6a21\u5757\u53ca\u5176\u5b9a\u4e49\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/kafka --save\n$ npm i kafkajs --save\n")),(0,o.kt)("p",null,"\u6216\u8005\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/kafka": "^3.0.0",\n    "kafka": "^2.0.0",\n    // ...\n  }\n}\n')),(0,o.kt)("h2",{id:"\u5f00\u542f\u7ec4\u4ef6"},"\u5f00\u542f\u7ec4\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/kafka")," \u53ef\u4ee5\u4f5c\u4e3a\u72ec\u7acb\u4e3b\u6846\u67b6\u4f7f\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as kafka from '@midwayjs/kafka';\n\n@Configuration({\n  imports: [\n    kafka\n  ],\n  // ...\n})\nexport class MainConfiguration {\n  async onReady() {\n        // ...\n  }\n}\n")),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u9644\u52a0\u5728\u5176\u4ed6\u7684\u4e3b\u6846\u67b6\u4e0b\uff0c\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\nimport * as kafka from '@midwayjs/kafka';\n\n@Configuration({\n  imports: [\n    koa,\n    kafka\n  ],\n  // ...\n})\nexport class ContainerLifeCycle {\n  async onReady() {\n        // ...\n  }\n}\n")),(0,o.kt)("h3",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,o.kt)("p",null,"\u6211\u4eec\u4e00\u822c\u628a\u80fd\u529b\u5206\u4e3a\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\uff0c\u800c\u8ba2\u9605\u6b63\u662f\u6d88\u8d39\u8005\u7684\u80fd\u529b\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u4e00\u822c\u628a\u6d88\u8d39\u8005\u653e\u5728 consumer \u76ee\u5f55\u3002\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/consumer/userConsumer.ts"),"  \u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 consumer\n\u2502   \u2502   \u2514\u2500\u2500 user.consumer.ts\n\u2502   \u251c\u2500\u2500 interface.ts\n\u2502   \u2514\u2500\u2500 service\n\u2502       \u2514\u2500\u2500 user.service.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,o.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\n@Consumer(MSListenerType.KAFKA)\nexport class UserConsumer {\n\n  @Inject()\n  ctx: IMidwayKafkaContext;\n\n  @Inject()\n  logger;\n\n  @KafkaListener('topic-test')\n  async gotData(message: KafkaMessage) {\n    this.logger.info('test output =>', message.offset + ' ' + message.key + ' ' + message.value.toString('utf8'));\n  }\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@Consumer")," \u88c5\u9970\u5668\uff0c\u63d0\u4f9b\u6d88\u8d39\u8005\u6807\u8bc6\uff0c\u5e76\u4e14\u5b83\u7684\u53c2\u6570\uff0c\u6307\u5b9a\u4e86\u67d0\u79cd\u6d88\u8d39\u6846\u67b6\u7684\u7c7b\u578b\uff0c\u6bd4\u5982\uff0c\u6211\u4eec\u8fd9\u91cc\u6307\u5b9a\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"MSListenerType.KFAKA")," \u8fd9\u4e2a\u7c7b\u578b\uff0c\u6307\u7684\u5c31\u662f kafka \u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u6807\u8bc6\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Consumer")," \u7684\u7c7b\uff0c\u5bf9\u65b9\u6cd5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@KafkaListener")," \u88c5\u9970\u5668\u540e\uff0c\u53ef\u4ee5\u7ed1\u5b9a\u4e00\u4e2atopic\u3002"),(0,o.kt)("p",null,"\u65b9\u6cd5\u7684\u53c2\u6570\u4e3a\u63a5\u6536\u5230\u7684\u6d88\u606f\uff0c\u7c7b\u578b\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"ConsumeMessage")," \u3002\u9ed8\u8ba4\u8bbe\u7f6e\u4e86\u81ea\u52a8\u786e\u8ba4\uff0c\u4ec0\u4e48\u65f6\u5019\u8bbe\u7f6e\u624b\u52a8\u786e\u8ba4\uff1f\u5f53\u51fa\u73b0\u5f02\u5e38\u7684\u65f6\u5019\uff0c\u9700\u8981\u8bbe\u7f6ecommitOffsets\u504f\u79fb\u5230\u5f02\u5e38\u7684\u4f4d\u7f6e\uff0c\u7528\u4e8e\u91cd\u65b0\u6267\u884c\u6d88\u8d39\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u8ba2\u9605\u591a\u4e2atopic\uff0c\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u6587\u4ef6\u3002"),(0,o.kt)("h3",{id:"kafka-\u6d88\u606f\u4e0a\u4e0b\u6587"},"Kafka \u6d88\u606f\u4e0a\u4e0b\u6587"),(0,o.kt)("p",null,"\u8ba2\u9605 ",(0,o.kt)("inlineCode",{parentName:"p"},"Kafka")," \u6570\u636e\u7684\u4e0a\u4e0b\u6587\uff0c\u548c Web \u540c\u6837\u7684\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"requestContext")," \uff0c\u548c\u6bcf\u6b21\u63a5\u6536\u6d88\u606f\u7684\u6570\u636e\u7ed1\u5b9a\u3002"),(0,o.kt)("p",null,"\u6574\u4e2a ctx \u7684\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type Context = {\n  requestContext: IMidwayContainer;\n};\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u4ece\u6846\u67b6\u83b7\u53d6\u5b9a\u4e49"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@midwayjs/kafka';\n")),(0,o.kt)("h3",{id:"\u914d\u7f6e\u6d88\u8d39\u8005"},"\u914d\u7f6e\u6d88\u8d39\u8005"),(0,o.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5728\u914d\u7f6e\u4e2d\u6307\u5b9a kafka \u7684\u5730\u5740\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nimport { MidwayConfig } from '@midwayjs/core';\n\nexport default {\n  // ...\n    kafka: {\n        kafkaConfig: {\n            clientId: 'my-app',\n            brokers: [process.env.KAFKA_URL || 'localhost:9092'],\n        },\n        consumerConfig: {\n            groupId: 'groupId-test'\n        }\n    },\n} as MidwayConfig;\n")),(0,o.kt)("p",null,"\u66f4\u591a\u914d\u7f6e(\u66f4\u8be6\u7ec6\u7684\u914d\u7f6e\uff0c\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.js.org/docs/consuming)%EF%BC%9A"},"https://kafka.js.org/docs/consuming)\uff1a")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kafkaConfig"),(0,o.kt)("td",{parentName:"tr",align:null},"kafka \u7684\u8fde\u63a5\u4fe1\u606f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"- clientId"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5ba2\u6237\u7aefID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"- brokers"),(0,o.kt)("td",{parentName:"tr",align:null},"Kafka\u96c6\u7fa4brokers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"consumerConfig"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u914d\u7f6e")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"- groupId"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5206\u7ec4ID")))),(0,o.kt)("h3",{id:"manual-committing"},"Manual-committing"),(0,o.kt)("p",null,"\u624b\u52a8\u63d0\u4ea4\u8bbe\u7f6e\uff0c\u7ec4\u4ef6\u9ed8\u8ba4\u662f\u81ea\u52a8\u63d0\u4ea4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Consumer, MSListenerType, Inject, App, KafkaListener } from '@midwayjs/decorator';\nimport { KafkaMessage } from 'kafkajs';\nimport { Context, Application } from '../../../../../src';\n\n@Provide()\n@Consumer(MSListenerType.KAFKA)\nexport class UserConsumer {\n\n  @App()\n  app: Application;\n\n  @Inject()\n  ctx: Context;\n\n  @Inject()\n  logger;\n\n  @KafkaListener('topic-test0', {\n    subscription: {\n      fromBeginning: false,\n    },\n    runConfig: {\n      autoCommit: false,\n    }\n  })\n  async gotData(message: KafkaMessage) {\n    console.info('gotData info');\n    this.logger.info('test output =>', message.offset + ' ' + message.key + ' ' + message.value.toString('utf8'));\n    try {\n      // \u629b\u51fa\u5f02\u5e38\uff0c\u5f53\u51fa\u73b0\u5f02\u5e38\u7684\u65f6\u5019\uff0c\u9700\u8981\u8bbe\u7f6ecommitOffsets\u504f\u79fb\u5230\u5f02\u5e38\u7684\u4f4d\u7f6e\uff0c\u7528\u4e8e\u91cd\u65b0\u6267\u884c\u6d88\u8d39\uff0c\u6240\u4ee5\u8fd9\u91cc\u5e94\u8be5\u51fa\u73b0\u7684\u6d88\u8d39\u662f2\u6b21\uff0ctotal\u4e3a2\n      throw new Error(\"error\");\n    } catch (error) {\n      this.ctx.commitOffsets(message.offset);\n    }\n    this.app.setAttr('total', this.app.getAttr<number>('total') + 1);\n  }\n}\n")),(0,o.kt)("h3",{id:"multi-different-topic"},"Multi different Topic"),(0,o.kt)("p",null,"\u8ba2\u9605\u7684 topic1 \u548c topic2\uff0c \u4e24\u4e2a\u4e3b\u9898\u7684\u6d88\u8d39\u90fd\u4f1a\u88ab\u8c03\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Consumer, MSListenerType, Inject, App, KafkaListener } from '@midwayjs/decorator';\nimport { KafkaMessage } from 'kafkajs';\nimport { Context, Application } from '../../../../../src';\n\n@Provide()\n@Consumer(MSListenerType.KAFKA)\nexport class UserConsumer {\n\n  @App()\n  app: Application;\n\n  @Inject()\n  ctx: Context;\n\n  @Inject()\n  logger;\n\n  @KafkaListener('topic-test')\n  async gotData(message: KafkaMessage) {\n    console.info('gotData info');\n    this.logger.info('test output =>', message.offset + ' ' + message.key + ' ' + message.value.toString('utf8'));\n    this.app.setAttr('total', this.app.getAttr<number>('total') + 1);\n  }\n\n  @KafkaListener('topic-test2')\n  async gotData2(message: KafkaMessage) {\n    console.info('gotData2 info');\n    this.logger.info('test output =>', message.offset + ' ' + message.key + ' ' + message.value.toString('utf8'));\n    this.app.setAttr('total', this.app.getAttr<number>('total') + 1);\n  }\n\n}\n\n")),(0,o.kt)("h3",{id:"\u88c5\u9970\u5668\u53c2\u6570"},"\u88c5\u9970\u5668\u53c2\u6570"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@kafkaListener")," \u88c5\u9970\u5668\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a topic \uff0c\u4ee3\u8868\u9700\u8981\u6d88\u8d39\u7684\u4e3b\u9898\u3002"),(0,o.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5305\u542b\u6ce8\u518c\u7684\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"subscription"),"\u3001\u8fd0\u884c\u7684\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"runConfig"),"\u7b49\u53c2\u6570\uff0c\u8be6\u7ec6\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface KafkaListenerOptions {\n  propertyKey?: string;\n  topic?: string;\n\n  subscription?: ConsumerSubscribeTopics | ConsumerSubscribeTopic;\n  runConfig?: ConsumerRunConfig;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4e00")),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u624b\u52a8\u63d0\u4ea4\uff0c\u8bbe\u7f6e\u6d88\u8d39\u8005\u5728\u5f00\u59cb\u83b7\u53d6\u6d88\u606f\u65f6\u5c06\u4f7f\u7528\u6700\u65b0\u63d0\u4ea4\u7684\u504f\u79fb\u91cf",(0,o.kt)("inlineCode",{parentName:"p"},"fromBeginning: false"),"\uff0c\u8bbe\u7f6e\u8fd0\u884c\u65f6\u7684\u63d0\u4ea4\u65b9\u5f0f\u4e3a\u624b\u52a8\u63d0\u4ea4",(0,o.kt)("inlineCode",{parentName:"p"},"autoCommit: false")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typeScript"},"import { Provide, Consumer, MSListenerType, Inject, App, KafkaListener } from '@midwayjs/decorator';\nimport { KafkaMessage } from 'kafkajs';\nimport { Context, Application } from '../../../../../src';\n\n@Provide()\n@Consumer(MSListenerType.KAFKA)\nexport class UserConsumer {\n\n  @App()\n  app: Application;\n\n  @Inject()\n  ctx: Context;\n\n  @Inject()\n  logger;\n\n  @KafkaListener('topic-test0', {\n    subscription: {\n      fromBeginning: false,\n    },\n    runConfig: {\n      autoCommit: false,\n    }\n  })\n  async gotData(message: KafkaMessage) {\n    console.info('gotData info');\n    this.logger.info('test output =>', message.offset + ' ' + message.key + ' ' + message.value.toString('utf8'));\n    try {\n      // \u629b\u51fa\u5f02\u5e38\uff0c\u5f53\u51fa\u73b0\u5f02\u5e38\u7684\u65f6\u5019\uff0c\u9700\u8981\u8bbe\u7f6ecommitOffsets\u504f\u79fb\u5230\u5f02\u5e38\u7684\u4f4d\u7f6e\uff0c\u7528\u4e8e\u91cd\u65b0\u6267\u884c\u6d88\u8d39\n      throw new Error(\"error\");\n    } catch (error) {\n      this.ctx.commitOffsets(message.offset);\n    }\n  }\n}\n\n")),(0,o.kt)("h2",{id:"\u751f\u4ea7\u8005producer\u4f7f\u7528\u65b9\u6cd5"},"\u751f\u4ea7\u8005\uff08Producer\uff09\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("p",null,"\u751f\u4ea7\u8005\uff08Producer\uff09\u4e5f\u5c31\u662f\u7b2c\u4e00\u8282\u4e2d\u7684\u6d88\u606f\u751f\u4ea7\u8005\uff0c\u7b80\u5355\u7684\u6765\u8bf4\u5c31\u662f\u4f1a\u521b\u5efa\u4e00\u4e2a\u5ba2\u6237\u7aef\uff0c\u5c06\u6d88\u606f\u53d1\u9001\u5230 Kafka \u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a\u5f53\u524d Midway \u5e76\u6ca1\u6709\u4f7f\u7528\u7ec4\u4ef6\u6765\u652f\u6301\u6d88\u606f\u53d1\u9001\uff0c\u8fd9\u91cc\u5c55\u793a\u7684\u793a\u4f8b\u53ea\u662f\u4f7f\u7528\u7eaf SDK \u5728 Midway \u4e2d\u7684\u5199\u6cd5\u3002"),(0,o.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56-1"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i kafkajs --save\n")),(0,o.kt)("h3",{id:"\u8c03\u7528\u670d\u52a1\u53d1\u9001\u6d88\u606f"},"\u8c03\u7528\u670d\u52a1\u53d1\u9001\u6d88\u606f"),(0,o.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u4eec\u5728 service \u6587\u4ef6\u4e0b\uff0c\u65b0\u589e\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka.ts")," \u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Provide,\n  Scope,\n  ScopeEnum,\n  Init,\n  Autoload,\n  Destroy,\n  Config,\n} from '@midwayjs/decorator';\nimport { ProducerRecord } from 'kafkajs';\nconst { Kafka } = require('kafkajs');\n\n@Autoload()\n@Provide()\n@Scope(ScopeEnum.Singleton) // Singleton \u5355\u4f8b\uff0c\u5168\u5c40\u552f\u4e00\uff08\u8fdb\u7a0b\u7ea7\u522b\uff09\nexport class KafkaService {\n  @Config('kafka')\n  kafkaConfig: any;\n\n  private connection;\n  private producer;\n\n  @Init()\n  async connect() {\n    // \u521b\u5efa\u8fde\u63a5\uff0c\u4f60\u53ef\u4ee5\u628a\u914d\u7f6e\u653e\u5728 Config \u4e2d\uff0c\u7136\u540e\u6ce8\u5165\u8fdb\u6765\n    const { brokers, clientId, producerConfig = {} } = this.kafkaConfig;\n    const client = new Kafka({\n      clientId: clientId,\n      brokers: brokers,\n    });\n    this.producer = client.producer(producerConfig);\n    this.connection = await this.producer.connect();\n  }\n\n  // \u53d1\u9001\u6d88\u606f\n  public async send(producerRecord: ProducerRecord) {\n    return this.producer.send(producerRecord);\n  }\n\n  @Destroy()\n  async close() {\n    await this.connection.close();\n  }\n}\n\n")),(0,o.kt)("p",null,"\u5927\u6982\u5c31\u662f\u521b\u5efa\u4e86\u4e00\u4e2a\u7528\u6765\u5c01\u88c5\u6d88\u606f\u901a\u4fe1\u7684 service\uff0c\u540c\u65f6\u4ed6\u662f\u5168\u5c40\u552f\u4e00\u7684 Singleton \u5355\u4f8b\u3002\u7531\u4e8e\u589e\u52a0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"@AutoLoad")," \u88c5\u9970\u5668\uff0c\u53ef\u4ee5\u81ea\u6267\u884c\u521d\u59cb\u5316\u3002"),(0,o.kt)("p",null,"\u8fd9\u6837\u57fa\u7840\u7684\u8c03\u7528\u670d\u52a1\u5c31\u62bd\u8c61\u597d\u4e86\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728\u7528\u5230\u7684\u5730\u65b9\uff0c\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"send")," \u65b9\u6cd5\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\nexport class UserService {\n\n  @Inject()\n  kafkaService: KafkaService;\n\n    async invoke() {\n    // TODO\n\n    // \u53d1\u9001\u6d88\u606f\n    const result = this.kafkaService.send({\n        topic: 'test',\n        messages: [\n        {\n            value: JSON.stringify(messageValue),\n        },\n        ],\n    });\n  }\n}\n")),(0,o.kt)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kafka.js.org/docs/introduction"},"KafkaJS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kafka.apache.org/intro"},"apache kafka\u5b98\u7f51"))))}m.isMDXComponent=!0}}]);