(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,a,t){e.exports={menu:"menu_menu__1knez",active:"menu_active__2ll1X"}},31:function(e,a,t){e.exports=t(42)},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),c=t.n(o),l=t(19),i=t(27),s=t(6),m=function(e,a){return{type:"FLIP",id:e,name:a}},d=function(e){return{type:"SET_CARDS",cards:e}},p=function(e){return{type:"LOCKED_CARDS",name:e}},f={cards:[],flippedCards:0,entryCardId:[],gameWin:!1,stepCount:0},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FLIP":return Object(s.a)(Object(s.a)({},e),{},{cards:e.cards.map((function(e){return e.id==a.id&&(e.flip?e.flip=!1:e.flip=!0),e})),flippedCards:e.flippedCards+1,entryCardId:[].concat(Object(i.a)(e.entryCardId),[a.name]),stepCount:e.stepCount+1});case"RESET_CARDS":return Object(s.a)(Object(s.a)({},e),{},{cards:e.cards.map((function(e){return e.flip=!1,e})),flippedCards:0,entryCardId:[]});case"SET_CARDS":return Object(s.a)(Object(s.a)({},e),{},{cards:Object(i.a)(a.cards)});case"LOCKED_CARDS":return Object(s.a)(Object(s.a)({},e),{},{cards:e.cards.map((function(e){return e.name===a.name&&(e.lock=!0),e})),flippedCards:0,entryCardId:[]});case"RESET_GAME":return Object(s.a)(Object(s.a)({},e),{},{cards:e.cards.map((function(e){return e.lock=!1,e})),flippedCards:0,entryCardId:[],gameWin:!1,stepCount:0});case"WIN_GAME":return Object(s.a)(Object(s.a)({},e),{},{gameWin:!0});default:return e}},u={data:[{name:"Petia",data:"17.12.2020",timeGame:"00:12:30",gameLevel:"level_1"}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return e},h=Object(l.b)({resultPage:v,levelPage:g}),_=Object(l.c)(h),w=t(12),b=t(2);var I=function(){return r.a.createElement("div",{className:"board"},r.a.createElement("div",null,r.a.createElement("div",{style:{fontWeight:"bold",marginBottom:"30px"}},"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0438\u0433\u0440\u044b \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043e\u0432\u0435\u043d\u044c!"),r.a.createElement("div",null,'\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0442\u0435\u0431\u0435 \u043f\u043e\u043c\u043e\u0433\u0443\u0442 \u0438\u0433\u0440\u044b, \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044e\u0449\u0438\u0435 \u043f\u0430\u043c\u044f\u0442\u044c "\u041d\u0430\u0439\u0434\u0438 \u043f\u0430\u0440\u0443"! \u0429\u0451\u043b\u043a\u0430\u0439 \u043c\u044b\u0448\u043a\u043e\u0439 \u043f\u043e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0435, \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0439, \u0447\u0442\u043e \u043d\u0430 \u043d\u0435\u0439 \u043d\u0430\u0440\u0438\u0441\u043e\u0432\u0430\u043d\u043e \u0438 \u0438\u0449\u0438 \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a\u0443\u044e \u0436\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443. \u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u044b \u0442\u043e\u043b\u044c\u043a\u043e 2 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438, \u0438 \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u043f\u0430\u0440\u0430 - \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c\u0438. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043d\u0435\u0443\u0434\u0430\u0447\u0438 \u043e\u0431\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u0441\u044f, \u0438 \u0442\u0435\u0431\u0435 \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u0430\u0442\u044c \u043f\u0430\u0440\u0443 \u0437\u0430\u043d\u043e\u0432\u043e.')))},C=t(11),k=t(15),E=t(16),y=t(18),N=t(17),j=t(7),G=t.n(j);function J(){return r.a.createElement("svg",{className:G.a.back_face,alt:"JS Badge","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 267.69 303.2"},r.a.createElement("path",{fill:"#d6ba31",d:"M133.85 0h133.84l-24.21 272.86-109.63 30.34-109.64-30.34L0 0h133.85z"}),r.a.createElement("path",{fill:"#ffd93d",d:"M243.51 21.57L222.78 255.4l-88.72 24.48V21.57h109.45z"}),r.a.createElement("path",{fill:"#ebebeb",d:"M96.9 199.57L45 184.89l-.26 31.26 78.84 22.16L123 57.96H97.34l-.44 141.61z"}),r.a.createElement("path",{fill:"#fff",d:"M145.23 57.96l85.92-.15-3.95 31.1-55.5.53-.03 48.13 53.06-6.01-6.24 87.24-73.26 19.01v-34.56l52.97-10.77.8-27.44-53.77 9.3V57.96z"}))}var O=function(e){Object(y.a)(t,e);var a=Object(N.a)(t);function t(){var e;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r)))._cards=[{id:1,name:"iconJS",faceImg:"https://img.icons8.com/color/452/javascript.png",flip:!1},{id:2,name:"React",faceImg:"https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"},{id:3,name:"VueJS",faceImg:"https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg"},{id:4,name:"Angular",faceImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",flip:!1},{id:5,name:"Ember",faceImg:"https://cdn.worldvectorlogo.com/logos/ember-tomster.svg"},{id:6,name:"iconJS",faceImg:"https://img.icons8.com/color/452/javascript.png",flip:!1},{id:7,name:"React",faceImg:"https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"},{id:8,name:"VueJS",faceImg:"https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg"},{id:9,name:"Angular",faceImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",flip:!1},{id:10,name:"Ember",faceImg:"https://cdn.worldvectorlogo.com/logos/ember-tomster.svg"},{id:11,name:"Node",faceImg:"https://cdn.worldvectorlogo.com/logos/node-js-logo.svg"},{id:12,name:"Node",faceImg:"https://cdn.worldvectorlogo.com/logos/node-js-logo.svg"}],e}return Object(E.a)(t,[{key:"shuffleCards",value:function(e){for(var a,t,n=e.length-1;n>0;n--)t=e[a=Math.floor(Math.random()*(n+1))],e[a]=e[n],e[n]=t;return e}},{key:"renderCards",value:function(){var e=this,a=this.props.cards;return this.props.level1.gameWin?r.a.createElement("div",{className:G.a.win__game},"\u041f\u043e\u0431\u0435\u0434\u0430! \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0445\u043e\u0434\u043e\u0432: ",this.props.level1.stepCount):a.map((function(a){return a.flip?r.a.createElement("div",{className:G.a.memory_card+" "+G.a.flip,key:a.id,id:a.id,"data-name":a.name},r.a.createElement("img",{className:G.a.front_face,src:a.faceImg,alt:a.name}),r.a.createElement(J,null)):a.lock?r.a.createElement("div",{className:G.a.memory_card+" "+G.a.flip,key:a.id,id:a.id,"data-name":a.name}):r.a.createElement("div",{className:G.a.memory_card,key:a.id,id:a.id,"data-name":a.name,onClick:function(a){return e.props.flipOnClick(a.currentTarget.id,a.currentTarget.dataset.name)}},r.a.createElement("img",{className:G.a.front_face,src:a.faceImg,alt:a.name}),r.a.createElement(J,null))}))}},{key:"resetBoard",value:function(){this.props.resetCasds()}},{key:"stepGame",value:function(){var e=this;if(2===this.props.flippedCards){var a=this.props.entryCardId[0],t=this.props.entryCardId[1];a===t&&setTimeout((function(){return e.props.lockedCard(a)}),400),setTimeout(this.props.resetCasds,400)}}},{key:"winGame",value:function(){var e=this;if(!this.props.level1.gameWin&&this.props.cards.length>0){var a=this.props.cards.length,t=0;this.props.cards.forEach((function(e){e.lock&&(t+=1)})),a===t&&setTimeout((function(){return e.props.winGame()}),300)}}},{key:"startGame",value:function(){this.props.setCards(this.shuffleCards(this._cards))}},{key:"refreshGame",value:function(){this.props.resetGame(),setTimeout(this.startGame.bind(this),300)}},{key:"componentDidMount",value:function(){this.startGame()}},{key:"componentDidUpdate",value:function(){this.winGame(),this.stepGame()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"board"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:{fontWeight:"bold",marginBottom:"10px"}},"Level 1"),r.a.createElement("div",{className:G.a.game__board},this.renderCards()),r.a.createElement("div",{style:{fontWeight:"bold",margin:"10px"}},r.a.createElement("button",{onClick:function(){return e.refreshGame()}},"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"))))}}]),t}(r.a.Component);var Z=Object(C.b)((function(e){return{level1:e.levelPage,cards:e.levelPage.cards,flippedCards:e.levelPage.flippedCards,entryCardId:e.levelPage.entryCardId}}),(function(e){return{flipOnClick:function(a,t){return e(m(a,t))},resetCasds:function(){return e({type:"RESET_CARDS"})},setCards:function(a){return e(d(a))},lockedCard:function(a){return e(p(a))},winGame:function(){return e({type:"WIN_GAME"})},resetGame:function(){return e({type:"RESET_GAME"})}}}))(O),L=t(8),T=t.n(L);function A(){return r.a.createElement("svg",{className:T.a.back_face,alt:"JS Badge","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 267.69 303.2"},r.a.createElement("path",{fill:"#d6ba31",d:"M133.85 0h133.84l-24.21 272.86-109.63 30.34-109.64-30.34L0 0h133.85z"}),r.a.createElement("path",{fill:"#ffd93d",d:"M243.51 21.57L222.78 255.4l-88.72 24.48V21.57h109.45z"}),r.a.createElement("path",{fill:"#ebebeb",d:"M96.9 199.57L45 184.89l-.26 31.26 78.84 22.16L123 57.96H97.34l-.44 141.61z"}),r.a.createElement("path",{fill:"#fff",d:"M145.23 57.96l85.92-.15-3.95 31.1-55.5.53-.03 48.13 53.06-6.01-6.24 87.24-73.26 19.01v-34.56l52.97-10.77.8-27.44-53.77 9.3V57.96z"}))}var S=function(e){Object(y.a)(t,e);var a=Object(N.a)(t);function t(){var e;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r)))._cards=[{id:1,name:"iconJS",faceImg:"https://img.icons8.com/color/452/javascript.png",flip:!1},{id:2,name:"React",faceImg:"https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"},{id:3,name:"VueJS",faceImg:"https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg"},{id:4,name:"Angular",faceImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",flip:!1},{id:5,name:"Ember",faceImg:"https://cdn.worldvectorlogo.com/logos/ember-tomster.svg"},{id:6,name:"iconJS",faceImg:"https://img.icons8.com/color/452/javascript.png",flip:!1},{id:7,name:"React",faceImg:"https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"},{id:8,name:"VueJS",faceImg:"https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg"},{id:9,name:"Angular",faceImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",flip:!1},{id:10,name:"Ember",faceImg:"https://cdn.worldvectorlogo.com/logos/ember-tomster.svg"},{id:11,name:"Node",faceImg:"https://cdn.worldvectorlogo.com/logos/node-js-logo.svg"},{id:12,name:"Node",faceImg:"https://cdn.worldvectorlogo.com/logos/node-js-logo.svg"},{id:13,name:"VSCode",faceImg:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjE3ZDVlYTAtNjIzZC00MGIxLTliMzEtMDI3YjkwNGE1ZjE1XC9kZGpyZ3d3LTg0NmNlNDI5LTNiMGQtNGFkOC1iZjZkLWFjNTJkZmU0ODIwMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZkEnCXJtjhT0v0UEQF7_k0VfiSaIoZa-YlerQJG-CXw"},{id:14,name:"VSCode",faceImg:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjE3ZDVlYTAtNjIzZC00MGIxLTliMzEtMDI3YjkwNGE1ZjE1XC9kZGpyZ3d3LTg0NmNlNDI5LTNiMGQtNGFkOC1iZjZkLWFjNTJkZmU0ODIwMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZkEnCXJtjhT0v0UEQF7_k0VfiSaIoZa-YlerQJG-CXw"},{id:15,name:"Camera",faceImg:"https://simpleicon.com/wp-content/uploads/camera.svg"},{id:16,name:"Camera",faceImg:"https://simpleicon.com/wp-content/uploads/camera.svg"},{id:17,name:"Tag",faceImg:"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg"},{id:18,name:"Tag",faceImg:"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg"},{id:19,name:"Rocket",faceImg:"https://simpleicon.com/wp-content/uploads/rocket.svg"},{id:20,name:"Rocket",faceImg:"https://simpleicon.com/wp-content/uploads/rocket.svg"}],e}return Object(E.a)(t,[{key:"shuffleCards",value:function(e){for(var a,t,n=e.length-1;n>0;n--)t=e[a=Math.floor(Math.random()*(n+1))],e[a]=e[n],e[n]=t;return e}},{key:"renderCards",value:function(){var e=this,a=this.props.cards;return this.props.level2.gameWin?r.a.createElement("div",{className:T.a.win__game},"\u041f\u043e\u0431\u0435\u0434\u0430! \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0445\u043e\u0434\u043e\u0432: ",this.props.level2.stepCount):a.map((function(a){return a.flip?r.a.createElement("div",{className:T.a.memory_card+" "+T.a.flip,key:a.id,id:a.id,"data-name":a.name},r.a.createElement("img",{className:T.a.front_face,src:a.faceImg,alt:a.name}),r.a.createElement(A,null)):a.lock?r.a.createElement("div",{className:T.a.memory_card+" "+T.a.flip,key:a.id,id:a.id,"data-name":a.name}):r.a.createElement("div",{className:T.a.memory_card,key:a.id,id:a.id,"data-name":a.name,onClick:function(a){return e.props.flipOnClick(a.currentTarget.id,a.currentTarget.dataset.name)}},r.a.createElement("img",{className:T.a.front_face,src:a.faceImg,alt:a.name}),r.a.createElement(A,null))}))}},{key:"resetBoard",value:function(){this.props.resetCasds()}},{key:"stepGame",value:function(){var e=this;if(2===this.props.flippedCards){var a=this.props.entryCardId[0],t=this.props.entryCardId[1];a===t&&setTimeout((function(){return e.props.lockedCard(a)}),400),setTimeout(this.props.resetCasds,400)}}},{key:"winGame",value:function(){var e=this;if(!this.props.level2.gameWin&&this.props.cards.length>0){var a=this.props.cards.length,t=0;this.props.cards.forEach((function(e){e.lock&&(t+=1)})),a===t&&setTimeout((function(){return e.props.winGame()}),300)}}},{key:"startGame",value:function(){this.props.setCards(this.shuffleCards(this._cards))}},{key:"refreshGame",value:function(){this.props.resetGame(),setTimeout(this.startGame.bind(this),300)}},{key:"componentDidMount",value:function(){this.startGame()}},{key:"componentDidUpdate",value:function(){this.winGame(),this.stepGame()}},{key:"render",value:function(){var e=this;return console.log(this.props),r.a.createElement("div",{className:"board"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:{fontWeight:"bold",marginBottom:"10px"}},"Level 1"),r.a.createElement("div",{className:T.a.game__board},this.renderCards()),r.a.createElement("div",{style:{fontWeight:"bold",margin:"10px"}},r.a.createElement("button",{onClick:function(){return e.refreshGame()}},"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"))))}}]),t}(r.a.Component);var M=Object(C.b)((function(e){return{level2:e.levelPage,cards:e.levelPage.cards,flippedCards:e.levelPage.flippedCards,entryCardId:e.levelPage.entryCardId}}),(function(e){return{flipOnClick:function(a,t){return e(m(a,t))},resetCasds:function(){return e({type:"RESET_CARDS"})},setCards:function(a){return e(d(a))},lockedCard:function(a){return e(p(a))},winGame:function(){return e({type:"WIN_GAME"})},resetGame:function(){return e({type:"RESET_GAME"})}}}))(S),z=t(9),V=t.n(z);function x(){return r.a.createElement("svg",{className:V.a.back_face,alt:"JS Badge","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 267.69 303.2"},r.a.createElement("path",{fill:"#d6ba31",d:"M133.85 0h133.84l-24.21 272.86-109.63 30.34-109.64-30.34L0 0h133.85z"}),r.a.createElement("path",{fill:"#ffd93d",d:"M243.51 21.57L222.78 255.4l-88.72 24.48V21.57h109.45z"}),r.a.createElement("path",{fill:"#ebebeb",d:"M96.9 199.57L45 184.89l-.26 31.26 78.84 22.16L123 57.96H97.34l-.44 141.61z"}),r.a.createElement("path",{fill:"#fff",d:"M145.23 57.96l85.92-.15-3.95 31.1-55.5.53-.03 48.13 53.06-6.01-6.24 87.24-73.26 19.01v-34.56l52.97-10.77.8-27.44-53.77 9.3V57.96z"}))}var R=function(e){Object(y.a)(t,e);var a=Object(N.a)(t);function t(){var e;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r)))._cards=[{id:1,name:"iconJS",faceImg:"https://img.icons8.com/color/452/javascript.png",flip:!1},{id:2,name:"React",faceImg:"https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"},{id:3,name:"VueJS",faceImg:"https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg"},{id:4,name:"Angular",faceImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",flip:!1},{id:5,name:"Ember",faceImg:"https://cdn.worldvectorlogo.com/logos/ember-tomster.svg"},{id:6,name:"iconJS",faceImg:"https://img.icons8.com/color/452/javascript.png",flip:!1},{id:7,name:"React",faceImg:"https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"},{id:8,name:"VueJS",faceImg:"https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg"},{id:9,name:"Angular",faceImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",flip:!1},{id:10,name:"Ember",faceImg:"https://cdn.worldvectorlogo.com/logos/ember-tomster.svg"},{id:11,name:"Node",faceImg:"https://cdn.worldvectorlogo.com/logos/node-js-logo.svg"},{id:12,name:"Node",faceImg:"https://cdn.worldvectorlogo.com/logos/node-js-logo.svg"},{id:13,name:"VSCode",faceImg:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjE3ZDVlYTAtNjIzZC00MGIxLTliMzEtMDI3YjkwNGE1ZjE1XC9kZGpyZ3d3LTg0NmNlNDI5LTNiMGQtNGFkOC1iZjZkLWFjNTJkZmU0ODIwMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZkEnCXJtjhT0v0UEQF7_k0VfiSaIoZa-YlerQJG-CXw"},{id:14,name:"VSCode",faceImg:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjE3ZDVlYTAtNjIzZC00MGIxLTliMzEtMDI3YjkwNGE1ZjE1XC9kZGpyZ3d3LTg0NmNlNDI5LTNiMGQtNGFkOC1iZjZkLWFjNTJkZmU0ODIwMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZkEnCXJtjhT0v0UEQF7_k0VfiSaIoZa-YlerQJG-CXw"},{id:15,name:"Camera",faceImg:"https://simpleicon.com/wp-content/uploads/camera.svg"},{id:16,name:"Camera",faceImg:"https://simpleicon.com/wp-content/uploads/camera.svg"},{id:17,name:"Tag",faceImg:"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg"},{id:18,name:"Tag",faceImg:"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg"},{id:19,name:"Rocket",faceImg:"https://simpleicon.com/wp-content/uploads/rocket.svg"},{id:20,name:"Rocket",faceImg:"https://simpleicon.com/wp-content/uploads/rocket.svg"},{id:21,name:"CSS",faceImg:"https://cdn.worldvectorlogo.com/logos/css3.svg"},{id:22,name:"CSS",faceImg:"https://cdn.worldvectorlogo.com/logos/css3.svg"},{id:23,name:"Like",faceImg:"https://cdn.worldvectorlogo.com/logos/facebook-like.svg"},{id:24,name:"Like",faceImg:"https://cdn.worldvectorlogo.com/logos/facebook-like.svg"}],e}return Object(E.a)(t,[{key:"shuffleCards",value:function(e){for(var a,t,n=e.length-1;n>0;n--)t=e[a=Math.floor(Math.random()*(n+1))],e[a]=e[n],e[n]=t;return e}},{key:"renderCards",value:function(){var e=this,a=this.props.cards;return this.props.level3.gameWin?r.a.createElement("div",{className:V.a.win__game},"\u041f\u043e\u0431\u0435\u0434\u0430! \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0445\u043e\u0434\u043e\u0432: ",this.props.level3.stepCount):a.map((function(a){return a.flip?r.a.createElement("div",{className:V.a.memory_card+" "+V.a.flip,key:a.id,id:a.id,"data-name":a.name},r.a.createElement("img",{className:V.a.front_face,src:a.faceImg,alt:a.name}),r.a.createElement(x,null)):a.lock?r.a.createElement("div",{className:V.a.memory_card+" "+V.a.flip,key:a.id,id:a.id,"data-name":a.name}):r.a.createElement("div",{className:V.a.memory_card,key:a.id,id:a.id,"data-name":a.name,onClick:function(a){return e.props.flipOnClick(a.currentTarget.id,a.currentTarget.dataset.name)}},r.a.createElement("img",{className:V.a.front_face,src:a.faceImg,alt:a.name}),r.a.createElement(x,null))}))}},{key:"resetBoard",value:function(){this.props.resetCasds()}},{key:"stepGame",value:function(){var e=this;if(2===this.props.flippedCards){var a=this.props.entryCardId[0],t=this.props.entryCardId[1];a===t&&setTimeout((function(){return e.props.lockedCard(a)}),400),setTimeout(this.props.resetCasds,400)}}},{key:"winGame",value:function(){var e=this;if(!this.props.level3.gameWin&&this.props.cards.length>0){var a=this.props.cards.length,t=0;this.props.cards.forEach((function(e){e.lock&&(t+=1)})),a===t&&setTimeout((function(){return e.props.winGame()}),300)}}},{key:"startGame",value:function(){this.props.setCards(this.shuffleCards(this._cards))}},{key:"refreshGame",value:function(){this.props.resetGame(),setTimeout(this.startGame.bind(this),300)}},{key:"componentDidMount",value:function(){this.startGame()}},{key:"componentDidUpdate",value:function(){this.winGame(),this.stepGame()}},{key:"render",value:function(){var e=this;return console.log(this.props),r.a.createElement("div",{className:"board"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:{fontWeight:"bold",marginBottom:"10px"}},"Level 1"),r.a.createElement("div",{className:V.a.game__board},this.renderCards()),r.a.createElement("div",{style:{fontWeight:"bold",margin:"10px"}},r.a.createElement("button",{onClick:function(){return e.refreshGame()}},"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"))))}}]),t}(r.a.Component);var W=Object(C.b)((function(e){return{level3:e.levelPage,cards:e.levelPage.cards,flippedCards:e.levelPage.flippedCards,entryCardId:e.levelPage.entryCardId}}),(function(e){return{flipOnClick:function(a,t){return e(m(a,t))},resetCasds:function(){return e({type:"RESET_CARDS"})},setCards:function(a){return e(d(a))},lockedCard:function(a){return e(p(a))},winGame:function(){return e({type:"WIN_GAME"})},resetGame:function(){return e({type:"RESET_GAME"})}}}))(R),D=t(13),X=t.n(D);function Q(){return r.a.createElement("div",{className:X.a.menu},r.a.createElement("div",null,r.a.createElement(w.b,{to:"/level1",activeClassName:X.a.active},"Level 1"),r.a.createElement(w.b,{to:"/level2",activeClassName:X.a.active},"Level 2"),r.a.createElement(w.b,{to:"/level3",activeClassName:X.a.active},"Level 3")),r.a.createElement(w.b,{to:"/about",className:X.a.menu__result,activeClassName:X.a.active},"About Game"))}t(41);function U(){return r.a.createElement(w.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},"\u0418\u0433\u0440\u0430: \u041d\u0430\u0439\u0434\u0438 \u043f\u0430\u0440\u0443"),r.a.createElement(Q,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/level1"},r.a.createElement(Z,null)),r.a.createElement(b.a,{path:"/level2"},r.a.createElement(M,null)),r.a.createElement(b.a,{path:"/level3"},r.a.createElement(W,null)),r.a.createElement(b.a,{path:"/"},r.a.createElement(I,null)))))}var Y=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C.a,{store:_},r.a.createElement(U,null))),Y)},7:function(e,a,t){e.exports={game__board:"level1_game__board__3BlY5",win__game:"level1_win__game__1qNWo",memory_card:"level1_memory_card__BmNRt",flip:"level1_flip__3Gp3d",front_face:"level1_front_face__27nVT",back_face:"level1_back_face__2Tsuh"}},8:function(e,a,t){e.exports={game__board:"level2_game__board__2S7qE",win__game:"level2_win__game__euaoj",memory_card:"level2_memory_card__1WC7K",flip:"level2_flip__1HCqN",front_face:"level2_front_face__gu_A0",back_face:"level2_back_face__1nhI3"}},9:function(e,a,t){e.exports={game__board:"level3_game__board__2PVfg",win__game:"level3_win__game__1PwNr",memory_card:"level3_memory_card__36g_f",flip:"level3_flip__3koE2",front_face:"level3_front_face__2y3La",back_face:"level3_back_face__3ul9P"}}},[[31,1,2]]]);
//# sourceMappingURL=main.5bd0c3fa.chunk.js.map