(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ntln:function(t,e,c){"use strict";c.r(e),c.d(e,"SwapiModule",(function(){return D}));var a=c("tyNb"),n=c("M0ag"),r=c("fbMX"),o=c("fXoL");let i=(()=>{class t{constructor(t){this.storageService=t}getTabs(){return this.storageService.getOrCache("https://swapi.dev/api/")}getData(t){return this.storageService.getOrCache(t.replace(/^http:/,"https:"))}}return t.\u0275fac=function(e){return new(e||t)(o.Vb(r.a))},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var s=c("Wp6s"),b=c("wZkO"),l=c("ofXK"),m=c("+0xr");function f(t,e){if(1&t&&(o.Rb(0,"th",12),o.yc(1),o.Qb()),2&t){const t=o.cc().$implicit;o.Ab(1),o.Ac(" ",t.key," ")}}function u(t,e){if(1&t&&(o.Rb(0,"td",13),o.yc(1),o.Qb()),2&t){const t=e.$implicit,c=o.cc().$implicit;o.Ab(1),o.Ac(" ",t[c.key]," ")}}function p(t,e){1&t&&(o.Pb(0,9),o.wc(1,f,2,1,"th",10),o.wc(2,u,2,1,"td",11),o.Ob()),2&t&&o.hc("matColumnDef",e.$implicit.key)}function d(t,e){1&t&&o.Mb(0,"tr",14)}function g(t,e){1&t&&o.Mb(0,"tr",15)}function h(t,e){if(1&t&&(o.Rb(0,"div"),o.Rb(1,"table",5),o.wc(2,p,3,1,"ng-container",6),o.dc(3,"keyvalue"),o.wc(4,d,1,0,"tr",7),o.wc(5,g,1,0,"tr",8),o.Qb(),o.Qb()),2&t){const t=e.ngIf,c=o.cc(3);o.Ab(1),o.hc("dataSource",t.results),o.Ab(1),o.hc("ngForOf",o.ec(3,4,t.results[0])),o.Ab(2),o.hc("matHeaderRowDef",c.objectKeys(t.results[0])),o.Ab(1),o.hc("matRowDefColumns",c.objectKeys(t.results[0]))}}function w(t,e){if(1&t&&(o.wc(0,h,6,6,"div",4),o.dc(1,"async")),2&t){const t=o.cc().$implicit,e=o.cc();o.hc("ngIf",o.ec(1,1,e.getData(t.value)))}}function y(t,e){1&t&&(o.Rb(0,"mat-tab",2),o.wc(1,w,2,3,"ng-template",3),o.Qb()),2&t&&o.hc("label",e.$implicit.key)}let v=(()=>{class t{constructor(t){this.swapiService=t,this.data={},this.objectKeys=Object.keys}getData(t){return this.swapiService.getData(t)}ngOnInit(){this.data.tabs=this.swapiService.getTabs()}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(i))},t.\u0275cmp=o.Fb({type:t,selectors:[["ngbm-swapi"]],decls:6,vars:5,consts:[[1,"page-container"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["matTabContent",""],[4,"ngIf"],["mat-table","",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(o.Rb(0,"div",0),o.Rb(1,"mat-card"),o.Rb(2,"mat-tab-group"),o.wc(3,y,2,1,"mat-tab",1),o.dc(4,"keyvalue"),o.dc(5,"async"),o.Qb(),o.Qb(),o.Qb()),2&t&&(o.Ab(3),o.hc("ngForOf",o.ec(4,1,o.ec(5,3,e.data.tabs))))},directives:[s.a,b.c,l.k,b.a,b.b,l.l,m.j,m.g,m.i,m.c,m.e,m.b,m.d,m.a,m.f,m.h],pipes:[l.f,l.b],styles:[".page-container[_ngcontent-%COMP%]{margin:1em 0}.page-container[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{margin:1em}"],changeDetection:0}),t})(),D=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[n.a,a.d.forChild([{path:"",component:v}])]]}),t})()}}]);