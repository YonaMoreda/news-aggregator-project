(this["webpackJsonpnews-aggregator-project"]=this["webpackJsonpnews-aggregator-project"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),i=n(4),a=n.n(i),o=n(3),d=n(5),j=n(6),l=n(8),h=n(7),u=(n(14),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={isLoaded:!1,error:null,titles:[],descriptions:[],links:[]},r}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rss.dw.com/xml/rss-amh-news").then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")}),(function(t){e.setState({isLoaded:!0,error:t})})).then((function(t){["title","description","link"].forEach((function(n){for(var r,s=t.getElementsByTagName(n),c=[],i=0;i<s.length;i++)c.push(s[i].childNodes[0].nodeValue);e.setState((r={},Object(o.a)(r,n+"s",c),Object(o.a)(r,"isLoaded",!0),r))}))}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,s=e.titles,c=e.descriptions,i=e.links;return t?Object(r.jsxs)("div",{children:["Error: ",t.message]}):n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{class:"nav",children:Object(r.jsx)("h2",{children:"logo"})}),Object(r.jsx)("section",{children:s.map((function(e,t,n){return t>=2?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{class:"cards",children:[Object(r.jsx)("img",{src:"https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0",alt:""}),Object(r.jsx)("h1",{children:e}),Object(r.jsx)("p",{children:c[t]}),Object(r.jsx)("a",{href:i[t],target:"_blank",children:"read more"})]})}):console.log("hi")}))})]}):Object(r.jsx)("div",{children:"Loading..."})}}]),n}(c.a.Component));var b=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(u,{})})};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a386e82c.chunk.js.map