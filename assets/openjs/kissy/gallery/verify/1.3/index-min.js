/*! caja-kissy  */
KISSY.add("openjs/kissy/gallery/verify/1.3/index",function(n,t){function e(t){return n.each(t,function(n){var t=n&&n.length;t&&t>1&&n[t-1]&&(n[t-1]=cajaAFTB.sanitizeHtml(n[t-1]))}),t}function r(r){function i(r,i){i.fields&&n.each(i.fields,function(n){n=e(n)}),this.inner=new t(r,cajaAFTB.untame(i))}return n.augment(i,{verify:function(n){var t=this.inner.verify(n);return t},add:function(n,t){t=e(t),this.inner.add(n,t)},modify:function(n,t){t=e(t),this.inner.modify(n,t)},reset:function(n){this.inner.reset(n)},remove:function(n){this.inner.remove(n)},disable:function(n,t){this.inner.disable(n,t)},error:function(n,t){var e=cajaAFTB.sanitizeHtml(t);this.inner.error(n,e)},fire:function(n,t){this.inner.fire(n,cajaAFTB.untame(t))},on:function(n,t){this.inner.on(n,r.markFunction(function(n){t.call(this,{succeed:n.succeed,info:cajaAFTB.sanitizeHtml(n.info),results:n.results,field:n.field})}))}}),r.markCtor(i),n.each(["verify","add","modify","remove","disable","reset","error","fire","on"],function(n){r.grantMethod(i,n)}),function(t){return{Verify:r.markFunction(function(){var e=n.makeArray(arguments)[1];return container=n.get(n.makeArray(arguments)[0],t.mod),new i(container,e)}),kissy:!0}}}return n.DOM,n.Event,r},{requires:["gallery/verify/1.3/index","core"]});