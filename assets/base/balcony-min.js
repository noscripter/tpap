/*! caja-kissy  */
(function(){var n=KISSY,t="r4000",e=location&&-1!==(location.search||"").indexOf("caja-debug")?"http://assets.daily.taobao.net/apps/taesite/balcony/core/":"http://a.tbcdn.cn/apps/taesite/balcony/core/",r=e+t+"/caja/";-1!=location.href.indexOf("__dev__")&&(e="../../../caja/ant-lib/com/google/caja/plugin/",t="",r=e);var o="J_TScriptedModule",i={},a={};a.addModsCajoledJS=function(t,e){2>arguments.length||n.isString(t)&&(i[t]=i[t]||";"+e+";")},a.getModsCajoledJS=function(n){return n?i[n]?i[n]:null:null},a.runScriptedMods=function(t,e,r){var a=KISSY.DOM,s=a.query("."+o);if(s){var u=[];n.each(e,function(n){u.push(n(t))});var c=n.isFunction(window.getCajaExposed)?window.getCajaExposed(t,cajaAFTB):{},l=s.length,d=0;n.each(s,function(e){var o=a.attr(e,"data-componentid");if(o){var s=i[o];void 0!==s&&t.makeES5Frame(e,{rewrite:cajaAFTB.rewriteURL},function(o){var i=t.tame(t.markFunction(function(t,e,r){return n.log(t,e,r),!0}));a.attr(o.iframe,"data-modulename",a.attr(o.div,"data-componentid")),cajaAFTB.tameNode||(cajaAFTB.tameNode=function(n){return o.imports.tameNode___(n,!0)},cajaAFTB.checkCss=function(n,t,e){return o.imports.checkCss___(n,t,e)},cajaAFTB.sanitizeHtml=function(n){var t=document.createElement("div");return t=cajaAFTB.tameNode(t),t.innerHTML_s___(n),t.innerHTML_g___()});var p={},h={};n.each(u,function(t){var r=t({frame:o,mod:e});!0===r.kissy?(n.mix(p,r),r.kissy=void 0):n.mix(h,r)});var f=o.contentCajoled("",s),m={KISSY:t.tame(p),onerror:i};m=n.mix(c,m),m=n.mix(m,h),f.run(m,function(){d++,r&&d==l&&r()})})}})}},a.setup=function(n,t){caja.configure({cajaServer:r,debug:location&&-1!==(location.search||"").indexOf("caja-debug")||-1!=location.href.indexOf("__dev__")},function(e){a.runScriptedMods(e,n,t)})},a.registerCajoledMods=function(n,t){a.addModsCajoledJS(n,t)},window.TShop||(window.TShop={}),window.TShop.Balcony=a})();