"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8055],{13134:function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}(n(67294)),a=n(56281),u=n(99790);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(f,e);var t,n,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=p(f);return e=t?Reflect.construct(n,arguments,p(this).constructor):n.apply(this,arguments),e&&("object"===r(e)||"function"==typeof e)?e:s(this)});function f(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,f);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return y(s(e=i.call.apply(i,[this].concat(n))),"callPlayer",a.callPlayer),y(s(e),"playerID",e.props.config.playerId||"".concat("wistia-player-").concat((0,a.randomString)())),y(s(e),"onPlay",function(){var t;return(t=e.props).onPlay.apply(t,arguments)}),y(s(e),"onPause",function(){var t;return(t=e.props).onPause.apply(t,arguments)}),y(s(e),"onSeek",function(){var t;return(t=e.props).onSeek.apply(t,arguments)}),y(s(e),"onEnded",function(){var t;return(t=e.props).onEnded.apply(t,arguments)}),y(s(e),"mute",function(){e.callPlayer("mute")}),y(s(e),"unmute",function(){e.callPlayer("unmute")}),e}return n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this,n=this.props,r=n.playing,o=n.muted,u=n.controls,i=n.onReady,c=n.config,s=n.onError;(0,a.getSDK)("https://fast.wistia.com/assets/external/E-v1.js","Wistia").then(function(e){c.customControls&&c.customControls.forEach(function(t){return e.defineControl(t)}),window._wq=window._wq||[],window._wq.push({id:t.playerID,options:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){y(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({autoPlay:r,silentAutoPlay:"allow",muted:o,controlsVisibleOnLoad:u,fullscreenButton:u,playbar:u,playbackRateControl:u,qualityControl:u,volumeControl:u,settingsControl:u,smallPlayButton:u},c.options),onReady:function(e){t.player=e,t.unbind(),t.player.bind("play",t.onPlay),t.player.bind("pause",t.onPause),t.player.bind("seek",t.onSeek),t.player.bind("end",t.onEnded),i()}})},s)}},{key:"unbind",value:function(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.unbind(),this.callPlayer("remove")}},{key:"seekTo",value:function(e){this.callPlayer("time",e)}},{key:"setVolume",value:function(e){this.callPlayer("volume",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("playbackRate",e)}},{key:"getDuration",value:function(){return this.callPlayer("duration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("time")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props.url,t=e&&e.match(u.MATCH_URL_WISTIA)[1],n="wistia_embed wistia_async_".concat(t);return o.default.createElement("div",{id:this.playerID,key:t,className:n,style:{width:"100%",height:"100%"}})}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(f.prototype,n),f}(o.Component);t.default=f,y(f,"displayName","Wistia"),y(f,"canPlay",u.canPlay.wistia),y(f,"loopOnEnded",!0)}}]);