(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"lips",image:"https://i-h2.pinimg.com/originals/a4/fc/ae/a4fcae0d8179ee2ad8bbb06858ad524c.png"},{id:2,name:"finger",image:"https://i.pinimg.com/originals/2a/b6/42/2ab64294a100f89d389c2651949a58dd.png"},{id:3,name:"bee",image:"https://i.pinimg.com/originals/62/5f/64/625f64127f960bab97bc318eea6ac391.png"},{id:4,name:"star",image:"https://i.pinimg.com/originals/8c/68/dc/8c68dc48a89b18a393dbb1f45caeb14a.png"},{id:5,name:"shoes",image:"https://i.pinimg.com/originals/c9/83/e8/c983e807acdbe73764369562e322fb88.png"},{id:6,name:"hood",image:"https://i.pinimg.com/originals/a3/b1/39/a3b139ad333ae0a355bab9356f5075f9.png"},{id:7,name:"graffiti",image:"https://i.pinimg.com/originals/d7/52/a7/d752a7c4ff57c0d72a6671a3e4135792.png"},{id:8,name:"zentangle",image:"https://i.pinimg.com/originals/93/48/a4/9348a410dd13d5d6b1a365a0aba963b7.png"},{id:9,name:"rose",image:"https://i.pinimg.com/originals/f2/df/e1/f2dfe14f6f2dbef5343d0bdeca349b0c.png"},{id:10,name:"city",image:"https://i.pinimg.com/originals/5b/50/a1/5b50a1533071a4c1ec1056507e073c4f.png"},{id:11,name:"computer",image:"https://i.pinimg.com/originals/2e/df/a9/2edfa9413ce98b6568ccc35f9a549322.png"},{id:12,name:"skull",image:"https://i.pinimg.com/originals/fa/c6/95/fac6955a63d2e0d916cfa219669c8cd4.png"}]},,,,,,,,function(e,a,t){e.exports=t(18)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),c=t(3),o=t.n(c),s=(t(15),t(4)),r=t(5),l=t(7),m=t(6),d=t(8),g=t(1);t(16);var p=function(e){return n.a.createElement("header",{className:"scoreB"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 col-right"},n.a.createElement("h1",null,e.title))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-2 col-right"},n.a.createElement("h6",null,"High Score: ",e.topScore)),n.a.createElement("div",{className:"col-md-2 col-right"},n.a.createElement("h6",null,"Current Score: ",e.score))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 col-right"},n.a.createElement("h6",null,"Click on a picture, but don't click on it more than once!"))))},h=(t(17),function(e){return n.a.createElement("div",{className:"card",onClick:function(){return e.clickedImage(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.artist,src:e.image}),n.a.createElement("div",{className:"overlay"})))});function f(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=[e[t],e[a]];e[a]=i[0],e[t]=i[1]}return e}var u=function(e){function a(){var e,t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={paintings:g,score:0,topScore:0,showAlert:0,showSuccess:0,clickedpaintings:[]},t.clickedImage=function(e){var a=t.state.clickedpaintings,i=t.state.score,n=t.state.topScore;t.setState({showAlert:0}),-1===a.indexOf(e)?(a.push(e),console.log(a),t.handleIncrement(),t.makeShuffle()):12===t.state.score?t.setState({showSuccess:1,score:0,clickedpaintings:[]}):(t.setState({score:0,clickedpaintings:[]}),console.log("duplicate"),t.setState({showAlert:1})),i>n&&t.setState({topScore:i})},t.handleIncrement=function(){t.setState({score:t.state.score+1})},t.makeShuffle=function(){t.setState({paintings:f(g)})},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement(p,{title:"Clicky Game",score:this.state.score,topScore:this.state.topScore}),n.a.createElement("div",{className:"alert alert-danger",style:{opacity:this.state.showAlert}},"You clicked on this already, try again..."),n.a.createElement("div",{className:"alert alert-success",style:{opacity:this.state.showSuccess}},"Keep it going!"),n.a.createElement("div",{className:"row"}," ",this.state.paintings.map(function(a){return n.a.createElement(h,{id:a.id,image:a.image,clickedImage:e.clickedImage})})))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.22386821.chunk.js.map