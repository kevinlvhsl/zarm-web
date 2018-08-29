(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{169:function(n,e,t){"use strict";var o=t(170),r=t.n(o),a=t(174),i=t.n(a),s=t(175),u=t.n(s),c=t(176),l=t.n(c),d=t(22),m=t.n(d),h=t(18),p=t.n(h),v=t(19),f=t.n(v),b=t(20),g=t.n(b),y=t(21),k=t.n(y),C=t(0),E=t.n(C),w=t(43),_=t.n(w),N=t(168),D=t.n(N),I=t(177),M=t.n(I),S=t(173),x=t.n(S),B=t(23),j=t.n(B),L=t(178),O=t(1),T=t.n(O),R=t(172),A=t.n(R),H=(t(179),t(180),t(181),t(182),function(n){function e(){return p()(this,e),g()(this,(e.__proto__||m()(e)).apply(this,arguments))}return k()(e,n),f()(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props,t=e.onChange,o=e.value;this.cm=A()(this.editor,{mode:"jsx",theme:"react",keyMap:"sublime",viewportMargin:1/0,lineNumbers:!1,dragDrop:!1}),this.cm.setValue(o),this.cm.on("changes",function(e){t&&(clearTimeout(n.timeout),n.timeout=setTimeout(function(){t(e.getValue())},300))})}},{key:"render",value:function(){var n=this;return E.a.createElement("div",{className:"editor",ref:function(e){n.editor=e}})}}]),e}(C.Component)),U=H;H.propTypes={onChange:T.a.func,value:T.a.string},H.defaultProps={onChange:function(){},value:""};var F=function(n){function e(n){p()(this,e);var t=g()(this,(e.__proto__||m()(e)).call(this,n));return t.playerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.description=D()(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t.state={showBlock:!1},t.blockControl=t.blockControl.bind(t),t}return k()(e,n),f()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&_.a.unmountComponentAtNode(this.containerElem)}},{key:"blockControl",value:function(){this.setState({showBlock:!this.state.showBlock})}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(44),t.e(42)]).then(t.bind(null,316)).then(function(n){var t=["context","React","ReactDOM"],o=[e,E.a,_.a];return j()(n).forEach(function(e){t.push(e),o.push(n[e])}),{args:t,argv:o}}).then(function(t){var o=t.args,r=t.argv,a=Object(L.transform)("\n        class Demo extends React.Component {\n          "+n+"\n        }\n\n        ReactDOM.render(<Demo {...context.props} />, document.getElementById('"+e.playerId+"'))\n      ",{presets:["es2015","react"]}).code;o.push(a),(new(Function.prototype.bind.apply(Function,[null].concat(x()(o))))).apply(void 0,x()(r)),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return E.a.createElement("div",{className:"demo-block demo-box demo-"+this.props.name},E.a.createElement("div",{className:"source",id:this.playerId,ref:function(e){n.containerElem=e}}),this.state.showBlock&&E.a.createElement("div",{className:"meta"},this.description&&E.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:this.description}}),E.a.createElement(U,{value:this.source[2],onChange:function(e){return n.renderSource(e)}})),E.a.createElement("div",{className:"demo-block-control",onClick:this.blockControl},this.state.showBlock?E.a.createElement("span",null,E.a.createElement("i",{className:"el-icon-caret-top"}),"隐藏"):E.a.createElement("span",null,E.a.createElement("i",{className:"el-icon-caret-bottom"}),"展开")))}}]),e}(E.a.Component),J=function(n){function e(n){p()(this,e);var t=g()(this,(e.__proto__||m()(e)).call(this,n));return t.nodeList=[],t.components=new l.a,t.renderer=new D.a.Renderer,t.renderer.table=function(n,e){return'<table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table>"},t}return k()(e,n),f()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){_.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,r=i()(this.components);!(n=(o=r.next()).done);n=!0){var a=o.value,s=u()(a,2),c=s[0],l=s[1],d=document.getElementById(c);this.nodeList.push(d),d instanceof HTMLElement&&_.a.render(l,d)}}catch(n){e=!0,t=n}finally{try{!n&&r.return&&r.return()}finally{if(e)throw t}}M.a.highlightAll()}},{key:"render",value:function(){var n=this,e=this.document();if("string"==typeof e){this.components.clear();var t=D()(e.replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,o){var a=o.toString(36);return n.components.set(a,E.a.createElement(F,r()({name:n.constructor.name.toLowerCase()},n.props),t)),"<div id="+a+"></div>"}),{renderer:this.renderer});return E.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}return E.a.createElement("span",null)}}]),e}(E.a.Component);e.a=J},260:function(n,e){n.exports="## NumberInput 数值输入框\n\n数字输入组件，仅允许数值输入\n\n### 基本用法\n\n数字输入框\n\n::: demo 设置输入框的值\n```js\nconstructor (props) {\n    super(props)\n    this.state = {\n      value: 33\n    }\n}\n\nonChange (e) {\n  this.setState({ value: e.target.value })\n}\n\nrender() {\n  return (\n    <div>\n      <NumberInput onChange={this.onChange.bind(this)} value={this.state.value} />\n    </div>\n  )\n}\n```\n:::\n\n### 设置数值精度(保留小数位数)\n\ndecimal设置数值精度\n\n::: demo decimal设置数值精度\n```js\nrender() {\n  return (\n    <div>\n      <NumberInput value={4} decimal={2} />\n    </div>\n  )\n}\n```\n:::\n\n### 设置输入的最大或最小值\n\n最大或最小值\n\n::: demo 设置输入的最大或最小值\n```js\nrender() {\n  return (\n    <div>\n      <NumberInput min={5} max={10} value={7} decimal={3} />\n    </div>\n  )\n}\n```\n:::\n\n### 设置输入是否显示加减按钮\n\nshowStepper设置是否显示加减按钮, step设置步长\n\n::: demo showStepper设置是否显示加减按钮, step设置步长\n```js\nonChange (e) {\n  console.log(e.target.value)\n}\n\nrender() {\n  return (\n    <div>\n      <NumberInput\n        showStepper\n        value={3}\n        step={1}\n        max={20}\n        min={2}\n        onChange={this.onChange.bind(this)}\n      />\n    </div>\n  )\n}\n```\n:::\n\n### 禁用状态\n\nisDisable设置禁用状态\n\n::: demo 设置禁用状态\n```js\nonChange (e) {\n  console.log(e.target.value)\n}\n\nrender() {\n  return (\n    <div>\n      <NumberInput\n        isDisabled\n        showStepper\n        value={3}\n        step={1}\n        max={20}\n        min={2}\n        onChange={this.onChange.bind(this)}\n      />\n    </div>\n  )\n}\n```\n:::\n\n\n\n### 参数\n| 参数      | 说明          | 类型      | 可选值                           | 默认值  |\n|---------- |-------------- |---------- |--------------------------------  |-------- |\n| value | 输入值 | number | — | — |\n| onChange | change事件 | func(e:Event) | — | — |\n| onBlur | blur事件 | func(e:Event) | — | — |\n| className | 自定义类名 | string | - | - |\n| showStepper | 是否开启记步器 | bool | - | false |\n| decimal | 数值精度 | number | — | - |\n| min | 数值范围最小值 | number | — | — |\n| max | 数值范围最大值 | number | — | — |\n| placeholder | 原生placeholder文案\t | string | — | ' |\n| isDisabled | 是否禁用状态\t | bool | — | false |\n| step | 设置加减步长\t | number | number | 1 |\n\n\n\n\n"},98:function(n,e,t){"use strict";t.r(e);var o=t(22),r=t.n(o),a=t(18),i=t.n(a),s=t(19),u=t.n(s),c=t(20),l=t.n(c),d=t(21),m=t.n(d),h=function(n){function e(){return i()(this,e),l()(this,(e.__proto__||r()(e)).apply(this,arguments))}return m()(e,n),u()(e,[{key:"document",value:function(){return t(260)}}]),e}(t(169).a);e.default=h}}]);