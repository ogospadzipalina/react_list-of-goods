(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,o=s(3),r=s.n(o),i=s(4),c=s(5),a=s(8),l=s(6),u=s(7),h=s(1),b=s.n(h),d=(s(13),s(14),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var y=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortType:n.NONE},t.sortAlphabetically=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.reversedGoods=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=function(t,e){var s=e.sortType,o=e.isReversed,r=Object(u.a)(t);return s===n.ALPHABET&&r.sort((function(t,e){return t.localeCompare(e)})),s===n.LENGTH&&r.sort((function(t,e){return t.length-e.length})),o&&r.reverse(),console.log(s,o),r}(p,{sortType:this.state.sortType,isReversed:this.state.isReversed});return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:this.state.sortType===n.ALPHABET?"button is-info":"button is-info is-light",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:this.state.sortType===n.LENGTH?"button is-info":"button is-success is-light",onClick:this.sortByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:!0===this.state.isReversed?"button is-info":"button is-warning is-light",onClick:this.reversedGoods,children:"Reverse"}),(this.state.sortType!==n.NONE||!0===this.state.isReversed)&&Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.reset,children:"Reset"})]}),Object(d.jsx)("ul",{children:t.map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),s}(b.a.Component);r.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a79b41b7.chunk.js.map