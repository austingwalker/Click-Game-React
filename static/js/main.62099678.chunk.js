(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,name:"Rose",image:"https://66.media.tumblr.com/d4aa584a021e36191be5f587e2f4d7f6/tumblr_nsyfaoOVmI1rshw4wo1_1280.jpg"},{id:2,name:"Crown",image:"https://66.media.tumblr.com/a4f9910398aa5d3d25ca5ac92f86239b/tumblr_na8bfiSdfP1rshw4wo1_r1_1280.jpg"},{id:3,name:"Moon",image:"https://66.media.tumblr.com/c9f6e5aded24705eedad08a925d02e34/tumblr_nt0d7aEGZS1rshw4wo1_1280.jpg"},{id:4,name:"Watermelon",image:"https://66.media.tumblr.com/2b935f829e43571f874ca0a8f5273c26/tumblr_nerkth88Tt1rshw4wo1_1280.jpg",occupation:"Boy Genius",location:"A Secret Laboratory"},{id:5,name:"Deer",image:"https://66.media.tumblr.com/c89c5c437465a1a34d696c17e54e3df3/tumblr_na8djn04hQ1rshw4wo1_1280.jpg"},{id:6,name:"Gentleman",image:"https://66.media.tumblr.com/5edb3bfa9c71416eec64bd270e0acf8a/tumblr_nahs2wQKvV1rshw4wo1_1280.jpg"},{id:7,name:"Lady",image:"https://66.media.tumblr.com/dd06ce70e65b7510b695bb70a1348c08/tumblr_nahu68Voop1rshw4wo1_1280.jpg"},{id:8,name:"Tree",image:"https://66.media.tumblr.com/9740c89658ce9d3041172d33a22727ac/tumblr_nei0nuGERl1rshw4wo1_1280.jpg"},{id:9,name:"Arrows",image:"https://66.media.tumblr.com/f8805d50a2d02118776f333d6109bf85/tumblr_nex09gGA7B1rshw4wo1_1280.jpg"},{id:10,name:"Ladder",image:"https://66.media.tumblr.com/792962b91ea6347cc0ebacb2312014e5/tumblr_nahwawjVW01rshw4wo1_1280.jpg"},{id:11,name:"Hand",image:"https://66.media.tumblr.com/91947a326f0a0c1e5aa83cb7b2a584c5/tumblr_nac2809Nlh1rshw4wo1_1280.jpg"},{id:12,name:"Chicken",image:"https://66.media.tumblr.com/d6fa6a934609a9469c9cbc17e337f567/tumblr_nac5tjimAk1rshw4wo1_1280.jpg"}]},function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),i=a.n(r),o=a(1),m=a(2),s=a(4),u=a(3),l=a(5),d=(a(15),function(e){return c.a.createElement("div",{className:"pictures"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})),c.a.createElement("span",{onClick:function(){return e.countPicture()},className:"count"}))}),b=(a(16),a(17),function(e){return c.a.createElement("div",{className:"title",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e.children)}),f=(a(18),a(19),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={message:"",animating:!1},a.renderMessage=function(){switch(a.state.message){case"correct":return"You guessed correctly!";case"incorrect":return"You guessed incorrectly!";default:return"Click an image to begin!"}},a}return Object(l.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=e.score,n=e.topScore,c={animating:!0};c.message=0===a&&0===n?"":0===a&&n>0?"incorrect":"correct",a===this.props.score&&this.state.message===c.message||this.setState(c)}},{key:"render",value:function(){var e=this;return c.a.createElement("li",{className:this.state.animating?this.state.message:"",onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderMessage())}}]),t}(n.Component)),p=function(e){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",null,c.a.createElement("li",{className:"brand"},c.a.createElement("a",{href:"/"},"Loteria Memoria")),c.a.createElement(f,{score:e.score,topScore:e.topScore}),c.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))},g=(a(20),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",null,"Loteria Memoria"))}),h=(a(21),function(e){return c.a.createElement("div",{className:"container"},e.children)}),w=(a(22),function(e){return c.a.createElement("div",{className:"row picBox"},e.children)}),E=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return c.a.createElement("div",Object.assign({className:t},e))},j=a(8),_=(a(23),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={pictures:j,count:0},a.countPicture=function(){a.setState({count:a.state.count+1}),console.log(a.state.count)},a}return Object(l.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement(b,{backgroundImage:"http://i64.tinypic.com/f9gl00.jpg"},c.a.createElement("h2",null,"Click on an image to earn points, but don't click on any of them more than once!")),c.a.createElement(h,null,c.a.createElement(w,null,c.a.createElement(E,{size:"md-10"},this.state.pictures.map(function(t){return c.a.createElement(d,{countPicture:function(){return e.countPicture()},id:t.id,key:t.id,image:t.image})})))),c.a.createElement(g,null))}}]),t}(n.Component));a(24);i.a.render(c.a.createElement(_,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.62099678.chunk.js.map