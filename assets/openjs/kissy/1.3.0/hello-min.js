/*! caja-kissy 2013-09-13 */
KISSY.add("openjs/kissy/1.3.0/hello",function(t){function n(t){function n(t){this.inner=new String(t)}return n.prototype.toUpperCase=function(){return this.inner.toUpperCase()},t.markCtor(n),t.grantMethod(n,"toUpperCase"),function(){return{SSS:t.markFunction(function(t){return new n(t)}),kissy:!0}}}return t.DOM,t.Event,n},{requires:["calendar","calendar/assets/dpl.css"]});