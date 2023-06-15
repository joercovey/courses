!function(){"use strict";function e(b){b.fn._fadeIn=b.fn.fadeIn;var p=b.noop||function(){},h=/MSIE/.test(navigator.userAgent),k=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),y=(document.documentMode,b.isFunction(document.createElement("div").style.setExpression));b.blockUI=function(e){o(window,e)},b.unblockUI=function(e){v(window,e)},b.growlUI=function(e,t,o,n){var i=b('<div class="growlUI"></div>');e&&i.append("<h1>"+e+"</h1>"),t&&i.append("<h2>"+t+"</h2>"),o===undefined&&(o=3e3);var s=function(e){e=e||{},b.blockUI({message:i,fadeIn:"undefined"!=typeof e.fadeIn?e.fadeIn:700,fadeOut:"undefined"!=typeof e.fadeOut?e.fadeOut:1e3,timeout:"undefined"!=typeof e.timeout?e.timeout:o,centerY:!1,showOverlay:!1,onUnblock:n,css:b.blockUI.defaults.growlCSS})};s();i.css("opacity");i.mouseover(function(){s({fadeIn:0,timeout:3e4});var e=b(".blockMsg");e.stop(),e.fadeTo(300,1)}).mouseout(function(){b(".blockMsg").fadeOut(1e3)})},b.fn.block=function(e){if(this[0]===window)return b.blockUI(e),this;var t=b.extend({},b.blockUI.defaults,e||{});return this.each(function(){var e=b(this);t.ignoreIfBlocked&&e.data("blockUI.isBlocked")||e.unblock({fadeOut:0})}),this.each(function(){"static"==b.css(this,"position")&&(this.style.position="relative",b(this).data("blockUI.static",!0)),this.style.zoom=1,o(this,e)})},b.fn.unblock=function(e){return this[0]===window?(b.unblockUI(e),this):this.each(function(){v(this,e)})},b.blockUI.version=2.7,b.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var m=null,g=[];function o(e,o){var t,n,i,s,l,d,a,c,r,u=e==window,f=o&&o.message!==undefined?o.message:undefined;(o=b.extend({},b.blockUI.defaults,o||{})).ignoreIfBlocked&&b(e).data("blockUI.isBlocked")||(o.overlayCSS=b.extend({},b.blockUI.defaults.overlayCSS,o.overlayCSS||{}),i=b.extend({},b.blockUI.defaults.css,o.css||{}),o.onOverlayClick&&(o.overlayCSS.cursor="pointer"),s=b.extend({},b.blockUI.defaults.themedCSS,o.themedCSS||{}),f=f===undefined?o.message:f,u&&m&&v(window,{fadeOut:0}),f&&"string"!=typeof f&&(f.parentNode||f.jquery)&&(t=f.jquery?f[0]:f,a={},b(e).data("blockUI.history",a),a.el=t,a.parent=t.parentNode,a.display=t.style.display,a.position=t.style.position,a.parent&&a.parent.removeChild(t)),b(e).data("blockUI.onUnblock",o.onUnblock),r=o.baseZ,a=h||o.forceIframe?b('<iframe class="blockUI" style="z-index:'+r+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+o.iframeSrc+'"></iframe>'):b('<div class="blockUI" style="display:none"></div>'),t=o.theme?b('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+r+++';display:none"></div>'):b('<div class="blockUI blockOverlay" style="z-index:'+r+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),o.theme&&u?(c='<div class="blockUI '+o.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(r+10)+';display:none;position:fixed">',o.title&&(c+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(o.title||"&nbsp;")+"</div>"),c+='<div class="ui-widget-content ui-dialog-content"></div>',c+="</div>"):o.theme?(c='<div class="blockUI '+o.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(r+10)+';display:none;position:absolute">',o.title&&(c+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(o.title||"&nbsp;")+"</div>"),c+='<div class="ui-widget-content ui-dialog-content"></div>',c+="</div>"):c=u?'<div class="blockUI '+o.blockMsgClass+' blockPage" style="z-index:'+(r+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+o.blockMsgClass+' blockElement" style="z-index:'+(r+10)+';display:none;position:absolute"></div>',r=b(c),f&&(o.theme?(r.css(s),r.addClass("ui-widget-content")):r.css(i)),o.theme||t.css(o.overlayCSS),t.css("position",u?"fixed":"absolute"),(h||o.forceIframe)&&a.css("opacity",0),c=[a,t,r],n=b(u?"body":e),b.each(c,function(){this.appendTo(n)}),o.theme&&o.draggable&&b.fn.draggable&&r.draggable({handle:".ui-dialog-titlebar",cancel:"li"}),s=y&&(!b.support.boxModel||0<b("object,embed",u?null:e).length),(k||s)&&(u&&o.allowBodyStretch&&b.support.boxModel&&b("html,body").css("height","100%"),!k&&b.support.boxModel||u||(i=U(e,"borderTopWidth"),s=U(e,"borderLeftWidth"),l=i?"(0 - "+i+")":0,d=s?"(0 - "+s+")":0),b.each(c,function(e,t){t=t[0].style;t.position="absolute",e<2?(u?t.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+o.quirksmodeOffsetHack+') + "px"'):t.setExpression("height",'this.parentNode.offsetHeight + "px"'),u?t.setExpression("width",'jQuery.support.boxModel&&document.documentElement.clientWidth||document.body.clientWidth + "px"'):t.setExpression("width",'this.parentNode.offsetWidth + "px"'),d&&t.setExpression("left",d),l&&t.setExpression("top",l)):o.centerY?(u&&t.setExpression("top",'(document.documentElement.clientHeight||document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah=document.documentElement.scrollTop ? document.documentElement.scrollTop:document.body.scrollTop) + "px"'),t.marginTop=0):!o.centerY&&u&&(e="((document.documentElement.scrollTop ? document.documentElement.scrollTop:document.body.scrollTop) + "+(o.css&&o.css.top?parseInt(o.css.top,10):0)+') + "px"',t.setExpression("top",e))})),f&&((o.theme?r.find(".ui-widget-content"):r).append(f),(f.jquery||f.nodeType)&&b(f).show()),(h||o.forceIframe)&&o.showOverlay&&a.show(),o.fadeIn?(c=o.onBlock?o.onBlock:p,a=o.showOverlay&&!f?c:p,c=f?c:p,o.showOverlay&&t._fadeIn(o.fadeIn,a),f&&r._fadeIn(o.fadeIn,c)):(o.showOverlay&&t.show(),f&&r.show(),o.onBlock&&o.onBlock.bind(r)()),I(1,e,o),u?(m=r[0],g=b(o.focusableElements,m),o.focusInput&&setTimeout(w,20)):function(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-U(n,"borderLeftWidth"),n=(n.offsetHeight-e.offsetHeight)/2-U(n,"borderTopWidth");t&&(i.left=0<s?s+"px":"0");o&&(i.top=0<n?n+"px":"0")}(r[0],o.centerX,o.centerY),o.timeout&&(r=setTimeout(function(){u?b.unblockUI(o):b(e).unblock(o)},o.timeout),b(e).data("blockUI.timeout",r)))}function v(e,t){var o,n,i=e==window,s=b(e),l=s.data("blockUI.history"),d=s.data("blockUI.timeout");d&&(clearTimeout(d),s.removeData("blockUI.timeout")),t=b.extend({},b.blockUI.defaults,t||{}),I(0,e,t),null===t.onUnblock&&(t.onUnblock=s.data("blockUI.onUnblock"),s.removeData("blockUI.onUnblock")),n=i?b(document.body).children().filter(".blockUI").add("body > .blockUI"):s.find(">.blockUI"),t.cursorReset&&(1<n.length&&(n[1].style.cursor=t.cursorReset),2<n.length&&(n[2].style.cursor=t.cursorReset)),i&&(m=g=null),t.fadeOut?(o=n.length,n.stop().fadeOut(t.fadeOut,function(){0==--o&&a(n,l,t,e)})):a(n,l,t,e)}function a(e,t,o,n){var i=b(n);i.data("blockUI.isBlocked")||(e.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),t&&t.el&&(t.el.style.display=t.display,t.el.style.position=t.position,t.el.style.cursor="default",t.parent&&t.parent.appendChild(t.el),i.removeData("blockUI.history")),i.data("blockUI.static")&&i.css("position","static"),"function"==typeof o.onUnblock&&o.onUnblock(n,o),n=(i=b(document.body)).width(),o=i[0].style.width,i.width(n-1).width(n),i[0].style.width=o)}function I(e,t,o){var n=t==window,t=b(t);!e&&(n&&!m||!n&&!t.data("blockUI.isBlocked"))||(t.data("blockUI.isBlocked",e),n&&o.bindEvents&&(!e||o.showOverlay)&&(n="mousedown mouseup keydown keypress keyup touchstart touchend touchmove",e?b(document).bind(n,o,i):b(document).unbind(n,i)))}function i(e){if("keydown"===e.type&&e.keyCode&&9==e.keyCode&&m&&e.data.constrainTabKey){var t=!e.shiftKey&&e.target===g[g.length-1],o=e.shiftKey&&e.target===g[0];if(t||o)return setTimeout(function(){w(o)},10),!1}var n=e.data,t=b(e.target);return t.hasClass("blockOverlay")&&n.onOverlayClick&&n.onOverlayClick(e),0<t.parents("div."+n.blockMsgClass).length||0===t.parents().children().filter("div.blockUI").length}function w(e){!g||(e=g[!0===e?g.length-1:0])&&e.focus()}function U(e,t){return parseInt(b.css(e,t),10)||0}}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();