(window["webpackJsonpcs-5278-slides"]=window["webpackJsonpcs-5278-slides"]||[]).push([[0],{136:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),c=n(50),o=n.n(c),s=n(26),i=n.n(s),l=n(51),u=n(52),h=n(53),f=n(55),p=n(54),m=n(56),d=(n(63),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={list:[]},n.handleRes=function(e){var t=document.createElement("img"),a=new Blob([e],{type:"text/png"});t.href=URL.createObjectURL(a),console.log(t.href),n.setState((function(e){return{list:e.list.concat(t.href),value:""}}))},n.getImages=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=1;case 1:if(!(t<98)){e.next=8;break}return"https://cors-anywhere.herokuapp.com/",a="https://github.com/JRHonda/cs-5278-slides/blob/master/week-7-slide-".concat(t,".png?raw=true"),e.next=5,fetch("https://cors-anywhere.herokuapp.com/"+a).then((function(e){return e.blob()})).then((function(e){var t=new FileReader,a="";t.onload=function(){console.log(this.result),a=this.result},console.log(a),n.handleRes(e),t.readAsDataURL(e)}));case 5:t++,e.next=1;break;case 8:case"end":return e.stop()}}),e)}))),n.componentDidMount=function(){n.getImages()},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"ui segment blue",style:{fontSize:"80px",display:"flex",justifyContent:"center",backgroundColor:"lightgrey"}},"Week 7"),this.state.list.map((function(e){return r.a.createElement("img",{key:Math.random().toString(36).substr(2,16),className:"ui container image",src:e,alt:""})})))}}]),t}(r.a.Component));n(135);o.a.render(r.a.createElement(d,null),document.querySelector("#root"))},57:function(e,t,n){e.exports=n(136)},70:function(e,t){},72:function(e,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.1c980491.chunk.js.map