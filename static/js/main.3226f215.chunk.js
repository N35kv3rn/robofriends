(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,a){},14:function(e,n,a){},15:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),i=a(6),o=a.n(i);a(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);var s=a(1),l=a(2),m=a(4),c=a(3),u=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"},{id:11,name:"Alyssa Gal",username:"cid.fiend",email:"alyssa.gal@gmail.com"},{id:12,name:"Simon Ruud",username:"simonsr00",email:"simon.ruud@gmail.com"},{id:13,name:"Mathilde Neskvern",username:"Matnesk",email:"matnes@gmail.com"},{id:14,name:"Hans Neskvern",username:"Henesk",email:"heneskvern@gmail.com"},{id:15,name:"Line Neskvern",username:"Linenesk",email:"linenesk@gmail.com"},{id:16,name:"Marcus Neskvern",username:"marcusneskvern",email:"marcusnesk@gmail.com"},{id:17,name:"Andreas Lyngnes",username:"andrealy",email:"andrealy@hiof.no"},{id:18,name:"Georg Kaktus",username:"kaktus_gerg",email:"kaktgerg@gmail.no"}],h=function(e){e.robots;throw new Error("NOOOOO!")},d=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},g=(a(14),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)}),f=function(e){Object(m.a)(a,e);var n=Object(c.a)(a);function a(e){var t;return Object(s.a)(this,a),(t=n.call(this,e)).state={hasError:!1},t}return Object(l.a)(a,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops, that is not good!"):this.props.children}}]),a}(t.Component),b=function(e){Object(m.a)(a,e);var n=Object(c.a)(a);function a(){var e;return Object(s.a)(this,a),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:u,searchfield:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:u})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,a=e.searchfield,t=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robofriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(f,null,r.a.createElement(h,{robots:t})))):r.a.createElement("h1",null,"Loading... ")}}]),a}(t.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.3226f215.chunk.js.map