!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=c(t);if(e){var i=c(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return r(this,n)}}function r(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"6RTz":function(r,c,i){"use strict";i.r(c),i.d(c,"HelpPageModule",(function(){return j}));var u,l,a,f=i("ofXK"),p=i("3Pt+"),s=i("TEn/"),d=i("tyNb"),b=i("NV1z"),m=i("fXoL"),h=i("mrSG"),y=i("C6fG"),g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}Object(h.b)(e,t),e.prototype.callNumber=function(t,e){return Object(y.cordova)(this,"callNumber",{callbackOrder:"reverse"},arguments)},e.prototype.isCallSupported=function(){return Object(y.cordova)(this,"isCallSupported",{},arguments)},e.pluginName="CallNumber",e.plugin="call-number",e.pluginRef="plugins.CallNumber",e.repo="https://github.com/Rohfosho/CordovaCallNumberPlugin",e.platforms=["Android","iOS"],e.\u0275fac=function(t){return n(t||e)},e.\u0275prov=m["\u0275\u0275defineInjectable"]({token:e,factory:function(t){return e.\u0275fac(t)}});var n=m["\u0275\u0275getInheritedFactory"](e);return e}(y.IonicNativePlugin),v=[{path:"",component:(u=function(r){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(a,r);var c,i,u,l=o(a);function a(e,n){var o;return t(this,a),(o=l.call(this,e)).callNumber=n,o}return c=a,(i=[{key:"enableMenuSwipe",value:function(){return!1}},{key:"ngOnInit",value:function(){}},{key:"rouboFurto",value:function(){this.callNumber.callNumber("0800",!0).then((function(t){return console.log("Launched dialer!",t)})).catch((function(t){return console.log("Error launching dialer",t)}))}}])&&e(c.prototype,i),u&&e(c,u),a}(b.a),u.\u0275fac=function(t){return new(t||u)(m["\u0275\u0275directiveInject"](m.Injector),m["\u0275\u0275directiveInject"](g))},u.\u0275cmp=m["\u0275\u0275defineComponent"]({type:u,selectors:[["app-help"]],features:[m["\u0275\u0275InheritDefinitionFeature"]],decls:12,vars:0,consts:[["slot","start"],["text","","defaultHref","/tabs/profile"],["text-center",""],[1,"contatos"],["expand","block","color","primary",3,"click"]],template:function(t,e){1&t&&(m["\u0275\u0275elementStart"](0,"ion-header"),m["\u0275\u0275elementStart"](1,"ion-toolbar"),m["\u0275\u0275elementStart"](2,"ion-buttons",0),m["\u0275\u0275element"](3,"ion-back-button",1),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"ion-title",2),m["\u0275\u0275text"](5,"Ajuda"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"ion-content"),m["\u0275\u0275elementStart"](7,"div",3),m["\u0275\u0275elementStart"](8,"p"),m["\u0275\u0275text"](9,"O que voc\xea precisa?"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"ion-button",4),m["\u0275\u0275listener"]("click",(function(){return e.rouboFurto()})),m["\u0275\u0275text"](11,"Comunicar Roubo ou Furto"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())},directives:[s.IonHeader,s.IonToolbar,s.IonButtons,s.IonBackButton,s.IonBackButtonDelegate,s.IonTitle,s.IonContent,s.IonButton],styles:["ion-content[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:#fff}.contatos[_ngcontent-%COMP%]{padding:30px}ion-button[_ngcontent-%COMP%]{margin-bottom:10px}"]}),u)}],O=((a=function e(){t(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||a)},imports:[[d.j.forChild(v)],d.j]}),a),j=((l=function e(){t(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:l}),l.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||l)},providers:[g],imports:[[f.CommonModule,p.FormsModule,s.IonicModule,O]]}),l)}}])}();