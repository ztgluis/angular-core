!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ntln:function(e,a,c){"use strict";c.r(a),c.d(a,"SwapiModule",(function(){return A}));var i,r=c("tyNb"),o=c("M0ag"),f=c("fbMX"),u=c("fXoL"),b=((i=function(){function e(n){t(this,e),this.storageService=n}return n(e,[{key:"getTabs",value:function(){return this.storageService.getOrCache("https://swapi.dev/api/")}},{key:"getData",value:function(t){return this.storageService.getOrCache(t)}}]),e}()).\u0275fac=function(t){return new(t||i)(u.Vb(f.a))},i.\u0275prov=u.Hb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),s=c("Wp6s"),l=c("wZkO"),m=c("ofXK"),p=c("+0xr");function g(t,e){if(1&t&&(u.Rb(0,"th",12),u.yc(1),u.Qb()),2&t){var n=u.cc().$implicit;u.Ab(1),u.Ac(" ",n.key," ")}}function d(t,e){if(1&t&&(u.Rb(0,"td",13),u.yc(1),u.Qb()),2&t){var n=e.$implicit,a=u.cc().$implicit;u.Ab(1),u.Ac(" ",n[a.key]," ")}}function h(t,e){1&t&&(u.Pb(0,9),u.wc(1,g,2,1,"th",10),u.wc(2,d,2,1,"td",11),u.Ob()),2&t&&u.hc("matColumnDef",e.$implicit.key)}function w(t,e){1&t&&u.Mb(0,"tr",14)}function v(t,e){1&t&&u.Mb(0,"tr",15)}function y(t,e){if(1&t&&(u.Rb(0,"div"),u.Rb(1,"table",5),u.wc(2,h,3,1,"ng-container",6),u.dc(3,"keyvalue"),u.wc(4,w,1,0,"tr",7),u.wc(5,v,1,0,"tr",8),u.Qb(),u.Qb()),2&t){var n=e.ngIf,a=u.cc(3);u.Ab(1),u.hc("dataSource",n.results),u.Ab(1),u.hc("ngForOf",u.ec(3,4,n.results[0])),u.Ab(2),u.hc("matHeaderRowDef",a.objectKeys(n.results[0])),u.Ab(1),u.hc("matRowDefColumns",a.objectKeys(n.results[0]))}}function k(t,e){if(1&t&&(u.wc(0,y,6,6,"div",4),u.dc(1,"async")),2&t){var n=u.cc().$implicit,a=u.cc();u.hc("ngIf",u.ec(1,1,a.getData(n.value)))}}function C(t,e){1&t&&(u.Rb(0,"mat-tab",2),u.wc(1,k,2,3,"ng-template",3),u.Qb()),2&t&&u.hc("label",e.$implicit.key)}var D,O,R=((O=function(){function e(n){t(this,e),this.swapiService=n,this.data={},this.objectKeys=Object.keys}return n(e,[{key:"getData",value:function(t){return this.swapiService.getData(t)}},{key:"ngOnInit",value:function(){this.data.tabs=this.swapiService.getTabs()}}]),e}()).\u0275fac=function(t){return new(t||O)(u.Lb(b))},O.\u0275cmp=u.Fb({type:O,selectors:[["ngbm-swapi"]],decls:6,vars:5,consts:[[1,"page-container"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["matTabContent",""],[4,"ngIf"],["mat-table","",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(u.Rb(0,"div",0),u.Rb(1,"mat-card"),u.Rb(2,"mat-tab-group"),u.wc(3,C,2,1,"mat-tab",1),u.dc(4,"keyvalue"),u.dc(5,"async"),u.Qb(),u.Qb(),u.Qb()),2&t&&(u.Ab(3),u.hc("ngForOf",u.ec(4,1,u.ec(5,3,e.data.tabs))))},directives:[s.a,l.c,m.k,l.a,l.b,m.l,p.j,p.g,p.i,p.c,p.e,p.b,p.d,p.a,p.f,p.h],pipes:[m.f,m.b],styles:[".page-container[_ngcontent-%COMP%]{margin:1em 0}.page-container[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{margin:1em}"],changeDetection:0}),O),A=((D=function e(){t(this,e)}).\u0275mod=u.Jb({type:D}),D.\u0275inj=u.Ib({factory:function(t){return new(t||D)},imports:[[o.a,r.d.forChild([{path:"",component:R}])]]}),D)}}])}();