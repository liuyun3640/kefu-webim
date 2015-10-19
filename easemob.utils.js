!function(window,undefined){"use strict";var EasemobWidget=EasemobWidget||{};EasemobWidget.utils=EasemobWidget.utils||{},EasemobWidget.utils.queryString=function(url,key){var r=url.match(new RegExp("[?&]?"+key+"=[0-9a-zA-Z%@._-]*[^&]","g"));return r=r&&r[0]?"?"==r[0][0]||"&"==r[0][0]?r[0].slice(1):r[0]:"",r.slice(key.length+1)},EasemobWidget.utils.getConfig=function(key){var that;that=key?key:location.href;var obj={};if(!that)return{str:"",json:obj,domain:""};var tmp,idx=that.indexOf("?"),sIdx=that.indexOf("//")>-1?that.indexOf("//"):0,domain=that.slice(sIdx,that.indexOf("/",sIdx+2)),arr=that.slice(idx+1).split("&");obj.src=that.slice(0,idx);for(var i=0,l=arr.length;l>i;i++)tmp=arr[i].split("="),obj[tmp[0]]=tmp.length>1?tmp[1]:"";return{str:that,json:obj,domain:domain}},EasemobWidget.utils.isAndroid=/Android/i.test(navigator.userAgent),EasemobWidget.utils.isMobile=/mobile/i.test(navigator.userAgent);var _on=function(target,ev,fn){target.addEventListener?target.addEventListener(ev,fn):target.attachEvent?target.attachEvent("on"+ev,fn):target["on"+ev]=fn},_remove=function(target,ev,fn){target.removeEventListener?target.removeEventListener(ev,fn):target.detachEvent?target.detachEvent("on"+ev,fn):target["on"+ev]=null};EasemobWidget.utils.on=_on,EasemobWidget.utils.remove=_remove,EasemobWidget.utils.isMin=function(){return document.visibilityState&&"hidden"==document.visibilityState||document.hidden?!0:void 0};var EmMessage=function(){var _supportPostMessage="postMessage"in window,_hasHash=function(url){var idx=url.lastIndexOf("/"),idxj=url.lastIndexOf("#");return 0>idxj?!1:url.indexOf("#")>idx&&idxj!=url.length?!0:void 0},_parseHash=function(url,key){var res=url.match(new RegExp(key+"\\w*"+key,"g"));return res&&res[0]?res[0].slice(key.length,-key.length):""},_getMsg=function(key,url){var str=key.toString(),arr=url.match(new RegExp(str+"\\w*"+str,"g"));return arr?arr[0].slice(str.length,-str.length):""},_appendMsg=function(key,msg,url){return url.replace(new RegExp(key+"\\w*"+key,"g"),key+msg+key)},message=function(iframeId,prefix){return this instanceof message?(this.t=(new Date).getTime(),this.iframe=document.getElementById(iframeId),this.prefix=prefix||"_em_",void delete this.t):new message};return message.prototype.sendToParent=function(msg){if("string"!=typeof msg)throw"msg must be string";return _supportPostMessage?(window.parent.postMessage(msg,"*"),this):this},message.prototype.sendToIframe=function(msg){if("string"!=typeof msg)throw"msg must be string";if(_supportPostMessage)return this.iframe.contentWindow.postMessage(msg,"*"),this;var src=this.iframe.getAttribute("src");return _hasHash(src)?_getMsg(this.prefix,src)?this.iframe.setAttribute("src",_appendMsg(this.prefix,msg,src)):this.iframe.setAttribute("src",src+"&"+this.prefix+msg+this.prefix):this.iframe.setAttribute("src",src+="#"+this.prefix+msg+this.prefix),this},message.prototype.listenToParent=function(callback){if(_supportPostMessage)return _on(window,"message",function(e){callback(e.data)}),this;if(window.onhashchange)window.onhashchange=function(){callback(_parseHash(location.href,this.prefix))};else{var that=this,memHref=location.href;setInterval(function(){var curHref=location.href;curHref!=memHref&&(memHref=curHref,callback(_parseHash(curHref,that.prefix)))},50)}return this},message.prototype.listenToIframe=function(callback){return _supportPostMessage&&_on(window,"message",function(e){callback(e.data)}),this},message}(),c={setcookie:function(key,value){var date=new Date;date.setTime(date.getTime()+2592e6),document.cookie=key+"="+escape(value)+";expires="+date.toGMTString()},getcookie:function(key){var results=document.cookie.match("(^|;) ?"+key+"=([^;]*)(;|$)");return results?unescape(results[2]):""}};Date.prototype.format=function(fmt){var o={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds()};/(y+)/.test(fmt)&&(fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var k in o)new RegExp("("+k+")").test(fmt)&&(fmt=fmt.replace(RegExp.$1,1==RegExp.$1.length?o[k]:("00"+o[k]).substr((""+o[k]).length)));return fmt},window.EasemobWidget=EasemobWidget,window.EmMessage=EmMessage,window.Emc=c}(window,void 0);