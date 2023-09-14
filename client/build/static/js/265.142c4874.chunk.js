"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[265],{9100:function(n,e,t){t.d(e,{Z:function(){return h}});var i,s=t(168),r=t(2791),o=t(9256),a=t(4164),c=t(1646),d=t(184),l=o.ZP.div(i||(i=(0,s.Z)(["\n  position: fixed;\n  z-index: 15;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #0000007d;\n  .modal-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-width: 500px;\n    background-color: #323232;\n    border-radius: 3px;\n    "," {\n      min-width: 200px;\n      width: 95%;\n    }\n    font-weight: var(--nanum-semi-bold);\n    animation: slideIn 0.3s ease;\n    h4 {\n      padding: 22px;\n      font-size: 1.8rem;\n    }\n    p {\n      font-size: 1.6rem;\n      padding: 22px;\n      color: var(--black-200);\n      line-height: 10px;\n    }\n    .button-wrapper {\n      display: flex;\n      justify-content: end;\n      margin-top: 15px;\n      padding: 8px;\n      button {\n        border-radius: 5px;\n        padding: 8px 15px;\n        &:hover {\n          background-color: var(--black-700);\n        }\n      }\n    }\n  }\n  .children {\n    padding: 2rem;\n  }\n  @keyframes slideIn {\n    0% {\n      transform: translateY(100%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n"])),c.ai);function h(n){var e=n.setIsOpen,t=n.type,i=void 0===t?"confirm":t,s=n.title,o=n.body,c=n.confirmHandler,h=n.cancelHandler,u=n.children;(0,r.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="auto"}}),[]);var f=function(){"confirm"===i&&e(!1)};return(0,a.createPortal)((0,d.jsx)(l,{onClick:f,children:(0,d.jsxs)("div",{className:"modal-content",onClick:function(n){return n.stopPropagation()},children:[u?(0,d.jsx)("div",{className:"children",children:u}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h4",{children:s}),(0,d.jsx)("p",{children:o})]}),(0,d.jsxs)("div",{className:"button-wrapper",children:[(0,d.jsx)("button",{onClick:function(){c&&c(),f()},children:"\ud655\uc778"}),"confirm"===i&&(0,d.jsx)("button",{onClick:function(){h&&h(),f()},children:"\ucde8\uc18c"})]})]})}),document.getElementById("modal"))}},265:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var i,s,r,o=t(9439),a=t(168),c=t(2791),d=t(9256),l=t(2665),h=t(5983),u=t(5671),f=t(3144),p=t(6274),m=t(9359),g=t(1250),x=t(4373),y=t(5763),j=t(8820),v=t(184),b=d.zo.div(i||(i=(0,a.Z)(["\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  font-family: var(--nanum);\n"]))),Z=d.zo.div(s||(s=(0,a.Z)(["\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  background-color: ",";\n  border-radius: 5px;\n  gap: 1rem;\n  align-items: center;\n  min-height: 5rem;\n  p {\n    font-family: var(--nanum);\n    font-size: 2rem;\n    min-width: 20rem;\n    word-wrap: break-word;\n    text-shadow: 2px 2px 2px gray;\n  }\n  @keyframes slideInRight {\n    from {\n      transform: translateX(100%);\n    }\n    to {\n      transform: translateX(0);\n    }\n  }\n  animation: slideInRight 0.5s ease-in-out;\n"])),(function(n){return"info"===n.$type?"#6060de":"success"===n.$type?"#55b555":"warning"===n.$type?"#dfdf4bcb":"error"===n.$type?"var(--error)":null})),w=d.zo.div(r||(r=(0,a.Z)(["\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 5px;\n  background-color: #dedede;\n  animation: progressBar 3s linear;\n  border-radius: 5px;\n  @keyframes progressBar {\n    0% {\n      width: 100%;\n    }\n    100% {\n      width: 0;\n    }\n  }\n"])));function k(n){var e=n.messages,t=n.closeMessage;return(0,v.jsx)(b,{children:e.map((function(n){return(0,v.jsxs)(Z,{$type:n.type,children:["info"===n.type&&(0,v.jsx)(y.hQB,{size:30}),"success"===n.type&&(0,v.jsx)(y._aN,{size:30}),"warning"===n.type&&(0,v.jsx)(j.SR5,{size:30}),"error"===n.type&&(0,v.jsx)(j.CSE,{size:30}),(0,v.jsx)("p",{children:n.message}),(0,v.jsx)(x.j7p,{size:30,style:{cursor:"pointer"},onClick:function(){return t(n.id)}}),(0,v.jsx)(w,{})]},n.id)}))})}var z=t(6666),C=t.n(z),I=(0,m.Z)("rootElem"),P=(0,m.Z)("root"),M=(0,m.Z)("messages"),O=(0,m.Z)("render"),B=(0,m.Z)("closeMessage"),E=(0,m.Z)("autoCloseMessage");function $(n){(0,p.Z)(this,P)[P].render(n)}function H(n){var e=(0,p.Z)(this,M)[M].findIndex((function(e){return e.id===n}));(0,p.Z)(this,M)[M].splice(e,1),(0,p.Z)(this,O)[O]((0,v.jsx)(k,{messages:(0,p.Z)(this,M)[M],closeMessage:(0,p.Z)(this,B)[B].bind(this)}))}function N(n){var e=this;setTimeout((function(){(0,p.Z)(e,B)[B](n)}),3e3,this)}var R,S=new(function(){function n(){(0,u.Z)(this,n),Object.defineProperty(this,E,{value:N}),Object.defineProperty(this,B,{value:H}),Object.defineProperty(this,O,{value:$}),Object.defineProperty(this,I,{writable:!0,value:void 0}),Object.defineProperty(this,P,{writable:!0,value:void 0}),Object.defineProperty(this,M,{writable:!0,value:void 0}),(0,p.Z)(this,I)[I]=document.getElementById("toast-root"),(0,p.Z)(this,P)[P]=g.createRoot((0,p.Z)(this,I)[I]),(0,p.Z)(this,M)[M]=[]}return(0,f.Z)(n,[{key:"info",value:function(n){var e=C()();(0,p.Z)(this,M)[M].push({id:e,type:"info",message:n}),(0,p.Z)(this,O)[O]((0,v.jsx)(k,{messages:(0,p.Z)(this,M)[M],closeMessage:(0,p.Z)(this,B)[B].bind(this)})),(0,p.Z)(this,E)[E](e)}},{key:"success",value:function(n){var e=C()();(0,p.Z)(this,M)[M].push({id:e,type:"success",message:n}),(0,p.Z)(this,O)[O]((0,v.jsx)(k,{messages:(0,p.Z)(this,M)[M],closeMessage:(0,p.Z)(this,B)[B].bind(this)})),(0,p.Z)(this,E)[E](e)}},{key:"warning",value:function(n){var e=C()();(0,p.Z)(this,M)[M].push({id:e,type:"warning",message:n}),(0,p.Z)(this,O)[O]((0,v.jsx)(k,{messages:(0,p.Z)(this,M)[M],closeMessage:(0,p.Z)(this,B)[B].bind(this)})),(0,p.Z)(this,E)[E](e)}},{key:"error",value:function(n){var e=C()();(0,p.Z)(this,M)[M].push({id:e,type:"error",message:n}),(0,p.Z)(this,O)[O]((0,v.jsx)(k,{messages:(0,p.Z)(this,M)[M],closeMessage:(0,p.Z)(this,B)[B].bind(this)})),(0,p.Z)(this,E)[E](e)}}]),n}()),X=t(9100),Y=(0,d.zo)(l.Z)(R||(R=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: var(--inner);\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  gap: 3rem;\n  margin-top: 6rem;\n  /* background-color: #00000030; */\n  font-family: var(--nanum-normal);\n  font-weight: 600;\n  h2 {\n    font-size: 7rem;\n    letter-spacing: 1rem;\n    color: var(--error);\n    font-family: var(--barlow);\n  }\n  span {\n    font-size: 3rem;\n  }\n  button {\n    align-items: center;\n    width: fit-content;\n    padding: 1rem 4rem;\n    font-size: 3rem;\n    font-family: var(--barlow);\n    transition: all 1s;\n  }\n"])));function F(){var n=(0,c.useState)(!1),e=(0,o.Z)(n,2),t=e[0],i=e[1],s=function(){i((function(n){return!n}))};return(0,v.jsxs)(Y,{children:[(0,v.jsx)("h2",{children:"404"}),(0,v.jsx)("span",{children:"\uc8c4\uc1a1\ud569\ub2c8\ub2e4."}),(0,v.jsx)("span",{children:"\uc694\uccad\ud558\uc2e0 \ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),(0,v.jsx)("a",{href:"/",children:(0,v.jsx)(h.wU,{children:"Home"})}),t&&(0,v.jsx)(X.Z,{setIsOn:s,type:"children",checkHandler:function(){return console.log("hi")},children:(0,v.jsx)("div",{children:"123123"})}),(0,v.jsx)("button",{onClick:s,children:"\ubaa8\ub2ec"}),(0,v.jsx)("button",{onClick:function(){return S.success("\uc131\uacf5nhjghjghghjghjg7865786hjgjhghjgjh")},children:"\uc131gfghfghfghfgh\uacf5"}),(0,v.jsx)("button",{onClick:function(){return S.info("\uc778\ud3ec")},children:"\uc778\ud3ec"})]})}}}]);
//# sourceMappingURL=265.142c4874.chunk.js.map