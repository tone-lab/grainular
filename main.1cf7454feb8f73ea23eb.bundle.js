webpackJsonp([1,4],{"/fcW":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="/fcW"},0:function(t,e,n){t.exports=n("x35b")},"1A80":function(t,e,n){"use strict";function i(t){return o._15(0,[o._16(201326592,1,{wave:0}),(t()(),o._17(null,["\n"])),(t()(),o._17(null,["\n"])),(t()(),o._17(null,["\n\n"])),(t()(),o._17(null,["\n\n\n"])),(t()(),o._17(null,["\n"])),(t()(),o._17(null,["\n"])),(t()(),o._17(null,["\n"])),(t()(),o._17(null,["\n\n\n\n"])),(t()(),o._17(null,["\n    "])),(t()(),o._17(null,["\n    "])),(t()(),o._17(null,["\n    "])),(t()(),o._17(null,["\n"])),(t()(),o._17(null,["\n\n"])),(t()(),o._18(0,null,null,6,"div",[["class","wave"]],null,null,null,null,null)),(t()(),o._17(null,["\n    "])),(t()(),o._18(0,[[1,0],["wave",1]],null,3,":svg:svg",[],[[1,"viewBox",0]],[[null,"click"]],function(t,e,n){var i=!0,r=t.component;if("click"===e){i=!1!==r.skip(n)&&i}return i},null,null)),(t()(),o._17(null,["\n        "])),(t()(),o._18(0,null,null,0,":svg:path",[["fill","none"],["stroke","khaki"]],[[1,"d",0]],null,null,null,null)),(t()(),o._17(null,["\n    "])),(t()(),o._17(null,["\n"])),(t()(),o._17(null,["\n"]))],null,function(t,e){var n=e.component;t(e,16,0,"0 0 "+n.playerSize+" 512"),t(e,18,0,n.path)})}function r(t){return o._15(0,[(t()(),o._18(0,null,null,1,"app-root",[],null,null,null,i,a)),o._19(2121728,null,0,s.a,[o.h],null,null)],null,null)}var _=n("l0Vc"),o=n("3j3K"),s=n("YWx4");n.d(e,"a",function(){return u});var l=[_.a],a=o._14({encapsulation:0,styles:l,data:{}}),u=o._20("app-root",s.a,r,{},{},[])},Iksp:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){}return t}()},YWx4:function(t,e,n){"use strict";var i=n("3j3K"),r=n("M4fF");n.n(r);n.d(e,"a",function(){return c});var _=n("ZnLv").GrainPlayer,o=n("ZnLv").Transport,s=n("ZnLv").Master,l=n("ZnLv").Gain,a=n("ZnLv").AutoFilter,u=n("ZnLv").Freeverb,h=n("ZnLv").Compressor,c=function(){function t(t){var e=this;this.zone=t,this.isLoaded=!1,this.spectrum="M 0 0",this.playerSize=0,this.grain=new _("assets/sounds/cow-and-calf.wav",function(){e.isLoaded=!0,e.zone.run(function(){var t=2048,i=n.i(r.map)(n.i(r.chunk)(e.grain.buffer.getChannelData(0),t),function(t){return n.i(r.first)(t)}),_=n.i(r.map)(i,function(t,e){return"L "+e+" "+(256*t+256)}).join(" ");e.spectrum="M 0 256 "+_,e.playerSize=i.length,e.grain.start()})}),this.filter=new a("4m",800).start(),this.gain=new l,this.gain.connect(s),this.reverb=new u,this.filter.depth.value=1,this.filter.connect(this.reverb),this.grain.connect(this.filter),this.reverb.roomSize.value=1,o.start(),this.grain.grainSize=.015,this.grain.overlap=.25,this.grain.detune=-600,this.grain.playbackRate=.2,this.grain.drift=.05,this.comp=new h,this.comp.connect(this.gain),this.reverb.connect(this.comp)}return t.prototype.ngAfterViewInit=function(){this.pt=this.wave.nativeElement.createSVGPoint()},Object.defineProperty(t.prototype,"path",{get:function(){return this.spectrum},enumerable:!0,configurable:!0}),t.prototype.skip=function(t){if(this.pt){this.pt.x=t.clientX,this.pt.y=t.clientY;var e=this.pt.matrixTransform(this.wave.nativeElement.getScreenCTM().inverse());console.log(e);var n=this.grain.buffer.duration,i=e.x/this.playerSize;this.grain.scrub(n*i)}},t.prototype.start=function(){this.gain.gain.value=.75,this.grain.start()},t.prototype.stop=function(){this.gain.gain.value=0},t.ctorParameters=function(){return[{type:i.h}]},t}()},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},kke6:function(t,e,n){"use strict";var i=n("3j3K"),r=n("Iksp"),_=n("2Je8"),o=n("Qbdm"),s=n("NVOs"),l=n("Fzro"),a=n("1A80");n.d(e,"a",function(){return c});var u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),h=function(t){function e(e){return t.call(this,e,[a.a],[a.a])||this}return u(e,t),Object.defineProperty(e.prototype,"_LOCALE_ID_12",{get:function(){return null==this.__LOCALE_ID_12&&(this.__LOCALE_ID_12=i.b(this.parent.get(i.c,null))),this.__LOCALE_ID_12},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_NgLocalization_13",{get:function(){return null==this.__NgLocalization_13&&(this.__NgLocalization_13=new _.a(this._LOCALE_ID_12)),this.__NgLocalization_13},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new i.d),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=i.e()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_IterableDiffers_16",{get:function(){return null==this.__IterableDiffers_16&&(this.__IterableDiffers_16=i.f()),this.__IterableDiffers_16},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_KeyValueDiffers_17",{get:function(){return null==this.__KeyValueDiffers_17&&(this.__KeyValueDiffers_17=i.g()),this.__KeyValueDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomSanitizer_18",{get:function(){return null==this.__DomSanitizer_18&&(this.__DomSanitizer_18=new o.b(this.parent.get(o.c))),this.__DomSanitizer_18},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Sanitizer_19",{get:function(){return null==this.__Sanitizer_19&&(this.__Sanitizer_19=this._DomSanitizer_18),this.__Sanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_HAMMER_GESTURE_CONFIG_20",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_20&&(this.__HAMMER_GESTURE_CONFIG_20=new o.d),this.__HAMMER_GESTURE_CONFIG_20},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EVENT_MANAGER_PLUGINS_21",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_21&&(this.__EVENT_MANAGER_PLUGINS_21=[new o.e(this.parent.get(o.c)),new o.f(this.parent.get(o.c)),new o.g(this.parent.get(o.c),this._HAMMER_GESTURE_CONFIG_20)]),this.__EVENT_MANAGER_PLUGINS_21},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EventManager_22",{get:function(){return null==this.__EventManager_22&&(this.__EventManager_22=new o.h(this._EVENT_MANAGER_PLUGINS_21,this.parent.get(i.h))),this.__EventManager_22},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomSharedStylesHost_23",{get:function(){return null==this.__ɵDomSharedStylesHost_23&&(this.__ɵDomSharedStylesHost_23=new o.i(this.parent.get(o.c))),this.__ɵDomSharedStylesHost_23},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomRendererFactory2_24",{get:function(){return null==this.__ɵDomRendererFactory2_24&&(this.__ɵDomRendererFactory2_24=new o.j(this._EventManager_22,this._ɵDomSharedStylesHost_23)),this.__ɵDomRendererFactory2_24},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RendererFactory2_25",{get:function(){return null==this.__RendererFactory2_25&&(this.__RendererFactory2_25=this._ɵDomRendererFactory2_24),this.__RendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵSharedStylesHost_26",{get:function(){return null==this.__ɵSharedStylesHost_26&&(this.__ɵSharedStylesHost_26=this._ɵDomSharedStylesHost_23),this.__ɵSharedStylesHost_26},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Testability_27",{get:function(){return null==this.__Testability_27&&(this.__Testability_27=new i.i(this.parent.get(i.h))),this.__Testability_27},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Meta_28",{get:function(){return null==this.__Meta_28&&(this.__Meta_28=new o.k(this.parent.get(o.c))),this.__Meta_28},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Title_29",{get:function(){return null==this.__Title_29&&(this.__Title_29=new o.l(this.parent.get(o.c))),this.__Title_29},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵi_30",{get:function(){return null==this.__ɵi_30&&(this.__ɵi_30=new s.a),this.__ɵi_30},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_BrowserXhr_31",{get:function(){return null==this.__BrowserXhr_31&&(this.__BrowserXhr_31=new l.a),this.__BrowserXhr_31},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ResponseOptions_32",{get:function(){return null==this.__ResponseOptions_32&&(this.__ResponseOptions_32=new l.b),this.__ResponseOptions_32},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XSRFStrategy_33",{get:function(){return null==this.__XSRFStrategy_33&&(this.__XSRFStrategy_33=l.c()),this.__XSRFStrategy_33},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XHRBackend_34",{get:function(){return null==this.__XHRBackend_34&&(this.__XHRBackend_34=new l.d(this._BrowserXhr_31,this._ResponseOptions_32,this._XSRFStrategy_33)),this.__XHRBackend_34},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RequestOptions_35",{get:function(){return null==this.__RequestOptions_35&&(this.__RequestOptions_35=new l.e),this.__RequestOptions_35},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Http_36",{get:function(){return null==this.__Http_36&&(this.__Http_36=l.f(this._XHRBackend_34,this._RequestOptions_35)),this.__Http_36},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new _.b,this._ErrorHandler_1=o.m(),this._APP_INITIALIZER_2=[i.j,o.n(this.parent.get(o.o,null),this.parent.get(i.k,null))],this._ApplicationInitStatus_3=new i.l(this._APP_INITIALIZER_2),this._ɵf_4=new i.m(this.parent.get(i.h),this.parent.get(i.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new i.o(this._ApplicationRef_5),this._BrowserModule_7=new o.p(this.parent.get(o.p,null)),this._ɵba_8=new s.b,this._FormsModule_9=new s.c,this._HttpModule_10=new l.g,this._AppModule_11=new r.a,this._AppModule_11},e.prototype.getInternal=function(t,e){return t===_.b?this._CommonModule_0:t===i.p?this._ErrorHandler_1:t===i.q?this._APP_INITIALIZER_2:t===i.l?this._ApplicationInitStatus_3:t===i.m?this._ɵf_4:t===i.r?this._ApplicationRef_5:t===i.o?this._ApplicationModule_6:t===o.p?this._BrowserModule_7:t===s.b?this._ɵba_8:t===s.c?this._FormsModule_9:t===l.g?this._HttpModule_10:t===r.a?this._AppModule_11:t===i.c?this._LOCALE_ID_12:t===_.c?this._NgLocalization_13:t===i.d?this._Compiler_14:t===i.s?this._APP_ID_15:t===i.t?this._IterableDiffers_16:t===i.u?this._KeyValueDiffers_17:t===o.q?this._DomSanitizer_18:t===i.v?this._Sanitizer_19:t===o.r?this._HAMMER_GESTURE_CONFIG_20:t===o.s?this._EVENT_MANAGER_PLUGINS_21:t===o.h?this._EventManager_22:t===o.i?this._ɵDomSharedStylesHost_23:t===o.j?this._ɵDomRendererFactory2_24:t===i.w?this._RendererFactory2_25:t===o.t?this._ɵSharedStylesHost_26:t===i.i?this._Testability_27:t===o.k?this._Meta_28:t===o.l?this._Title_29:t===s.a?this._ɵi_30:t===l.a?this._BrowserXhr_31:t===l.h?this._ResponseOptions_32:t===l.i?this._XSRFStrategy_33:t===l.d?this._XHRBackend_34:t===l.j?this._RequestOptions_35:t===l.k?this._Http_36:e},e.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_23&&this._ɵDomSharedStylesHost_23.ngOnDestroy()},e}(i.x),c=new i.y(h,r.a)},l0Vc:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=[".wave[_ngcontent-%COMP%]{width:100%;height:100%;top:0;left:0}.credits[_ngcontent-%COMP%], .wave[_ngcontent-%COMP%]{position:absolute}.credits[_ngcontent-%COMP%]{font-size:12px;bottom:0}"]},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("3j3K"),r=n("kZql"),_=n("Qbdm"),o=n("kke6");r.a.production&&n.i(i.a)(),n.i(_.a)().bootstrapModuleFactory(o.a)}},[0]);