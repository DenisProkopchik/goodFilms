(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Vc8N:function(t,i,n){"use strict";n.r(i),n.d(i,"DescriptionModule",function(){return F});var e=n("3Pt+"),o=n("ofXK"),c=n("tyNb"),s=n("lJxs"),r=n("fXoL"),a=n("mqgx"),p=n("AzUR"),d=n("LLei");let b=(()=>{class t{constructor(t,i){this.element=t,this.renderer=i}ngOnInit(){this.imagePath.backdrop_path&&null!==this.imagePath.backdrop_path&&(this.element.nativeElement.style.backgroundImage=`url(${this.imagePath.webPath}${this.imagePath.backdrop_path})`)}}return t.\u0275fac=function(i){return new(i||t)(r.Ib(r.l),r.Ib(r.D))},t.\u0275dir=r.Db({type:t,selectors:[["","appBackgroundStyle",""]],inputs:{imagePath:["appBackgroundStyle","imagePath"]}}),t})();var l=n("YIa9"),u=n("ERxF");function g(t,i){if(1&t&&(r.Nb(0,"span"),r.qc(1),r.Mb()),2&t){const t=r.Wb();r.xb(1),r.sc(" (",t.info.description.production_countries[0].iso_3166_1,") ")}}function f(t,i){if(1&t&&(r.Nb(0,"span"),r.qc(1),r.Mb()),2&t){const t=r.Wb();r.xb(1),r.sc(" \u2022 ",t.info.description.runtime," ")}}function _(t,i){if(1&t&&(r.Nb(0,"span",5),r.qc(1),r.Xb(2,"currency"),r.Mb()),2&t){const t=r.Wb();r.xb(1),r.sc(" ",r.bc(2,1,t.info.description.budget,"","symbol","1.0-0")," ")}}function h(t,i){if(1&t&&(r.Lb(0),r.Jb(1,"app-vote",6),r.Kb()),2&t){const t=r.Wb();r.xb(1),r.cc("rating",t.info.description.vote_average)("isStaticBlock",!0)}}function m(t,i){if(1&t&&(r.Nb(0,"span",7),r.qc(1),r.Xb(2,"titlecase"),r.Mb()),2&t){const t=r.Wb();r.xb(1),r.sc(" ",r.Yb(2,1,t.info.description.tagline)," ")}}function x(t,i){if(1&t){const t=r.Ob();r.Nb(0,"button",8),r.Ub("click",function(){return r.kc(t),r.Wb().onBack()}),r.qc(1," \u25ba Play Trailer "),r.Mb()}}function M(t,i){if(1&t&&(r.Nb(0,"p"),r.qc(1),r.Mb()),2&t){const t=r.Wb();r.xb(1),r.sc(" Director: ",t.info.outputCredits.directing.original_name," ")}}function w(t,i){if(1&t&&(r.Nb(0,"li"),r.qc(1),r.Mb()),2&t){const t=i.$implicit;r.xb(1),r.sc(" ",t.original_name," ")}}function v(t,i){if(1&t&&(r.Lb(0),r.Nb(1,"div"),r.qc(2," Cast: "),r.Mb(),r.Nb(3,"ul",9),r.oc(4,w,2,1,"li",10),r.Xb(5,"slice"),r.Mb(),r.Kb()),2&t){const t=r.Wb();r.xb(4),r.cc("ngForOf",r.ac(5,1,t.info.outputCredits.cast,0,3))}}let O=(()=>{class t{constructor(t){this.setDateService=t,this.isShowTrailerOutput=new r.n}setDate(t){return this.setDateService.setShortDate(t.release_date?t.release_date:t.first_air_date?t.first_air_date:t.birthday)}onBack(){this.info.isShowTrailer=!this.info.isShowTrailer,this.isShowTrailerOutput.emit(this.info.isShowTrailer),this.info.isShowTrailer=!1}ngOnInit(){this.parseDate=this.setDate(this.info.description)}}return t.\u0275fac=function(i){return new(i||t)(r.Ib(l.a))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-desc-show"]],inputs:{info:"info"},outputs:{isShowTrailerOutput:"isShowTrailerOutput"},decls:19,vars:14,consts:[[4,"ngIf"],[1,"description__details"],["class","details__budget",4,"ngIf"],["class","description__tagline",4,"ngIf"],["class","description__button",3,"click",4,"ngIf"],[1,"details__budget"],[3,"rating","isStaticBlock"],[1,"description__tagline"],[1,"description__button",3,"click"],[1,"description__cast"],[4,"ngFor","ngForOf"]],template:function(t,i){1&t&&(r.Nb(0,"section"),r.Nb(1,"span"),r.qc(2),r.Xb(3,"date"),r.oc(4,g,2,1,"span",0),r.Mb(),r.qc(5," \u2022 "),r.Nb(6,"span"),r.qc(7),r.Mb(),r.oc(8,f,2,1,"span",0),r.Nb(9,"p",1),r.oc(10,_,3,6,"span",2),r.oc(11,h,2,2,"ng-container",0),r.Mb(),r.Nb(12,"p"),r.oc(13,m,3,3,"span",3),r.oc(14,x,2,0,"button",4),r.Mb(),r.Nb(15,"p"),r.qc(16),r.Mb(),r.oc(17,M,2,1,"p",0),r.oc(18,v,6,5,"ng-container",0),r.Mb()),2&t&&(r.xb(2),r.sc(" ",r.Zb(3,11,i.parseDate,"dd/MM/yyyy")," "),r.xb(2),r.cc("ngIf",i.info.description.production_countries.length),r.xb(3),r.rc(i.info.description.genres),r.xb(1),r.cc("ngIf","NaNh NaNm"!==i.info.description.runtime),r.xb(2),r.cc("ngIf",i.info.description.budget),r.xb(1),r.cc("ngIf",i.info.description.vote_average),r.xb(2),r.cc("ngIf",i.info.description.tagline),r.xb(1),r.cc("ngIf",i.info.videos&&i.info.videos.length),r.xb(2),r.sc(" ",i.info.description.overview," "),r.xb(1),r.cc("ngIf",i.info.outputCredits.directing),r.xb(1),r.cc("ngIf",i.info.outputCredits.cast&&i.info.outputCredits.cast.length))},directives:[o.o,u.a,o.n],pipes:[o.e,o.c,o.t,o.s],styles:[".description__button[_ngcontent-%COMP%]:hover:not(:disabled){color:#000;background-color:#fff;cursor:pointer}.description__button[_ngcontent-%COMP%]{position:absolute;top:10px;bottom:auto;right:10px;padding:10px;border-radius:50%;border-radius:10px;border:2px solid #fff;background-color:initial;color:#fff;text-align:center;transition:all .2s;opacity:1;outline:none;margin-top:0}.description__details[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;flex-flow:row}.description__button[_ngcontent-%COMP%]{position:static}.description__tagline[_ngcontent-%COMP%], .details__budget[_ngcontent-%COMP%]{margin-right:10px}.description__cast[_ngcontent-%COMP%]{padding-left:20px}"]}),t})();function P(t,i){if(1&t&&(r.Nb(0,"p"),r.qc(1),r.Xb(2,"lowercase"),r.Mb()),2&t){const t=r.Wb();r.xb(1),r.sc(" - ",r.Yb(2,1,t.description.known_for_department)," ")}}function C(t,i){if(1&t&&(r.Nb(0,"p"),r.qc(1),r.Xb(2,"number"),r.Mb()),2&t){const t=r.Wb();r.xb(1),r.sc(" Popularity: ",r.Zb(2,1,t.description.popularity,"1.0-0")," ")}}function k(t,i){if(1&t&&(r.Nb(0,"p"),r.qc(1),r.Mb()),2&t){const t=r.Wb();r.xb(1),r.sc(" ",t.description.biography," ")}}let y=(()=>{class t{constructor(t){this.setDateService=t}setDate(t){return this.setDateService.setShortDate(t.release_date?t.release_date:t.first_air_date?t.first_air_date:t.birthday)}ngOnInit(){this.parseDate=this.setDate(this.description)}}return t.\u0275fac=function(i){return new(i||t)(r.Ib(l.a))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-desc-person"]],inputs:{description:"description",page:"page"},decls:7,vars:7,consts:[[4,"ngIf"]],template:function(t,i){1&t&&(r.Nb(0,"div"),r.oc(1,P,3,3,"p",0),r.oc(2,C,3,4,"p",0),r.Nb(3,"p"),r.qc(4),r.Xb(5,"date"),r.Mb(),r.oc(6,k,2,1,"p",0),r.Mb()),2&t&&(r.xb(1),r.cc("ngIf",i.description.known_for_department),r.xb(1),r.cc("ngIf",i.description.popularity),r.xb(2),r.sc(" ",r.Zb(5,4,i.parseDate,"dd/MM/yyyy")," "),r.xb(2),r.cc("ngIf",i.description.biography))},directives:[o.o],pipes:[o.e,o.l,o.f],styles:[""]}),t})();var I=n("dzG8"),S=n("jhN1");let N=(()=>{class t{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}return t.\u0275fac=function(i){return new(i||t)(r.Ib(S.b))},t.\u0275pipe=r.Hb({name:"safe",type:t,pure:!0}),t})(),T=(()=>{class t{constructor(){this.indexVideo=0,this.isShowTrailer=!1,this.isShowTrailerOutput=new r.n}onBack(t){const i=t.target.classList.contains("video__iframe");this.isShowTrailer=!this.isShowTrailer,i||this.isShowTrailerOutput.emit(this.isShowTrailer)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-video"]],inputs:{params:"params",pathVideo:"pathVideo",isShowTrailer:"isShowTrailer"},outputs:{isShowTrailerOutput:"isShowTrailerOutput"},decls:5,vars:3,consts:[[1,"description__video",3,"click"],[1,"video__closed"],["type","text/html","frameborder","0","allowfullscreen","","allow","autoplay; fullscreen",1,"video__iframe",3,"src"]],template:function(t,i){1&t&&(r.Nb(0,"section",0),r.Ub("click",function(t){return i.onBack(t)}),r.Nb(1,"button",1),r.qc(2," \u274c "),r.Mb(),r.Jb(3,"iframe",2),r.Xb(4,"safe"),r.Mb()),2&t&&(r.xb(3),r.cc("src",r.Yb(4,1,i.pathVideo),r.lc))},pipes:[N],styles:[".description__video[_ngcontent-%COMP%]{width:100%;height:100%}.description__video[_ngcontent-%COMP%]   .video__closed[_ngcontent-%COMP%]:hover:not(:disabled){color:#000;background-color:#fff;cursor:pointer}.description__video[_ngcontent-%COMP%]   .video__closed[_ngcontent-%COMP%]{position:absolute;top:10px;bottom:auto;right:10px;padding:10px;border-radius:50%;border-radius:10px;border:2px solid #fff;background-color:initial;color:#fff;text-align:center;transition:all .2s;opacity:1;outline:none;margin-top:0}*[_ngcontent-%COMP%]{overflow-y:hidden}.description__video[_ngcontent-%COMP%]{position:absolute;top:0;bottom:auto;right:0;padding:0;border-radius:0;background-color:rgba(0,0,0,.8);color:#fff;display:flex;justify-content:center;align-items:center;flex-flow:row;z-index:17}.description__video[_ngcontent-%COMP%]   .video__closed[_ngcontent-%COMP%]{top:calc(10% - 42px);right:calc(10% - 42px)}.description__video[_ngcontent-%COMP%]   .video__iframe[_ngcontent-%COMP%]{width:80%;height:80%}.description__video_display_none[_ngcontent-%COMP%]{display:none}"]}),t})();function D(t,i){if(1&t){const t=r.Ob();r.Lb(0),r.Nb(1,"div",5),r.qc(2," Sorry, something is wrong... "),r.Mb(),r.Nb(3,"button",6),r.Ub("click",function(){return r.kc(t),r.Wb(2).onBackPage()}),r.qc(4," back "),r.Mb(),r.Kb()}}const q=function(t,i,n,e,o){return{description:t,videos:i,page:n,outputCredits:e,isShowTrailer:o}};function W(t,i){if(1&t){const t=r.Ob();r.Lb(0),r.Nb(1,"app-desc-show",13),r.Ub("isShowTrailerOutput",function(i){return r.kc(t),r.Wb(3).onVideo(i)}),r.Mb(),r.Kb()}if(2&t){const t=r.Wb(3);r.xb(1),r.cc("info",r.hc(1,q,t.description,t.videos,t.page,t.outputCredits,t.isShowTrailer))}}function B(t,i){if(1&t&&r.Jb(0,"app-desc-person",14),2&t){const t=r.Wb(3);r.cc("description",t.description)("page",t.page)}}const L=function(t,i){return{webPath:t,backdrop_path:i}},V=function(t){return{description__content_background_dark:t}};function j(t,i){if(1&t){const t=r.Ob();r.Nb(0,"div",7),r.Nb(1,"button",6),r.Ub("click",function(){return r.kc(t),r.Wb(2).onBackPage()}),r.qc(2," \u274c "),r.Mb(),r.Nb(3,"div",8),r.Jb(4,"img",9),r.Nb(5,"aside",10),r.Nb(6,"h2",11),r.qc(7),r.Mb(),r.oc(8,W,2,7,"ng-container",1),r.oc(9,B,1,2,"ng-template",null,12,r.pc),r.Mb(),r.Mb(),r.Mb()}if(2&t){const t=r.jc(10),i=r.Wb(2);r.cc("appBackgroundStyle",i.description.also_known_as?"":r.fc(6,L,i.webPath,i.description.backdrop_path)),r.xb(3),r.cc("ngClass",r.ec(9,V,!i.description.also_known_as)),r.xb(1),r.cc("src",i.pathOfImage,r.mc),r.xb(3),r.sc(" ",i.description.original_title?i.description.original_title:i.description.name," "),r.xb(1),r.cc("ngIf",!i.description.also_known_as)("ngIfElse",t)}}function E(t,i){if(1&t&&(r.Lb(0),r.oc(1,D,5,0,"ng-container",1),r.oc(2,j,11,11,"ng-template",null,4,r.pc),r.Kb()),2&t){const t=r.jc(3),i=r.Wb();r.xb(1),r.cc("ngIf",i.isError&&!i.description)("ngIfElse",t)}}function X(t,i){1&t&&r.Jb(0,"app-loading")}function z(t,i){if(1&t){const t=r.Ob();r.Nb(0,"app-video",15),r.Ub("isShowTrailerOutput",function(i){return r.kc(t),r.Wb().onVideo(i)}),r.Mb()}if(2&t){const t=r.Wb();r.cc("isShowTrailer",t.isShowTrailer)("pathVideo",t.pathVideo)}}const J=[{path:"",component:(()=>{class t{constructor(t,i,n,e,o,c){this.getDataService=t,this.getPreviousPageService=i,this.router=n,this.activatedRoute=e,this.findPathImageService=o,this.location=c,this.videoTitle="videos",this.creditsTitle="credits",this.webPath="https://image.tmdb.org/t/p/original",this.indexVideo=0,this.minutes=60,this.isShowTrailer=!1,this.isLoading=!1,this.isError=!1,this.outputCredits={directing:void 0,cast:void 0}}findPathOfImage(t){return this.findPathImageService.findPath(t)}onBackPage(){this.location.back()}onVideo(t){this.isShowTrailer=t}loadDetails(){this.getDataService.getDetails(this.type,this.id).pipe(Object(s.a)(t=>{const i=t.genres;if(i){const n=Math.floor(t.runtime/this.minutes),e=t.runtime-n*this.minutes;t.genres=i.reduce((t,i)=>t+i.name+", ",""),t.genres=t.genres.slice(0,-2),t.runtime=`${n}h ${e}m`}return t})).subscribe(t=>{this.description=t,this.pathOfImage=this.findPathOfImage(this.description),this.isLoading=!1},t=>{this.isError=!0,this.isLoading=!1,console.log(t.message)})}loadAnotherInfo(t){this.getDataService.getDetails(this.type,this.id,t).subscribe(i=>{t===this.videoTitle?(this.videos=i.results,this.videos.length&&(this.pathVideo=`https://www.youtube.com/embed/${this.videos[this.indexVideo].key}?autoplay=1`)):t===this.creditsTitle&&(this.credits=i,this.outputCredits.directing=this.credits.crew.find(t=>"Directing"===t.known_for_department||"Writing"===t.known_for_department),this.outputCredits.cast=this.credits.cast.filter(t=>"Acting"===t.known_for_department))},t=>{this.isError=!0,this.isLoading=!1,console.log(t.message)})}ngOnInit(){this.isLoading=!0,this.description=void 0;const t=this.router.url.split("/");this.type=t[1],this.id=t[2].split("?")[0],this.subscription$=this.activatedRoute.queryParams.subscribe(t=>{this.page=Number(t.page),this.getPreviousPageService.getPrevPath(this.page)}),this.loadDetails(),"person"!==this.type&&(this.loadAnotherInfo(this.videoTitle),this.loadAnotherInfo(this.creditsTitle))}ngOnDestroy(){this.subscription$.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(r.Ib(a.a),r.Ib(p.a),r.Ib(c.b),r.Ib(c.a),r.Ib(d.a),r.Ib(o.j))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-description"]],decls:5,vars:3,consts:[[1,"description"],[4,"ngIf","ngIfElse"],["loadingBlock",""],[3,"isShowTrailer","pathVideo","isShowTrailerOutput",4,"ngIf"],["content",""],[1,"description__error"],[1,"description__button",3,"click"],[1,"description__content",3,"appBackgroundStyle"],[1,"description__content_background",3,"ngClass"],[1,"description__image",3,"src"],[1,"description__text"],[1,"text__title"],["personInfo",""],[3,"info","isShowTrailerOutput"],[3,"description","page"],[3,"isShowTrailer","pathVideo","isShowTrailerOutput"]],template:function(t,i){if(1&t&&(r.Nb(0,"section",0),r.oc(1,E,4,2,"ng-container",1),r.oc(2,X,1,0,"ng-template",null,2,r.pc),r.Mb(),r.oc(4,z,1,2,"app-video",3)),2&t){const t=r.jc(3);r.xb(1),r.cc("ngIf",!i.isLoading)("ngIfElse",t),r.xb(3),r.cc("ngIf",i.isShowTrailer&&i.videos.length)}},directives:[o.o,b,o.m,O,y,I.a,T],styles:[".description[_ngcontent-%COMP%]   .description__content[_ngcontent-%COMP%]   .description__content_background[_ngcontent-%COMP%]{width:100%;height:100%}.description[_ngcontent-%COMP%]   .description__button[_ngcontent-%COMP%]:hover:not(:disabled), .description[_ngcontent-%COMP%]   .description__content[_ngcontent-%COMP%]   .description__button[_ngcontent-%COMP%]:hover:not(:disabled){color:#000;background-color:#fff;cursor:pointer}.description[_ngcontent-%COMP%]   .description__content[_ngcontent-%COMP%]   .description__button[_ngcontent-%COMP%]{position:absolute;top:10px;bottom:auto;right:10px;padding:10px;border-radius:50%;border-radius:10px;border:2px solid #fff;background-color:initial;color:#fff;text-align:center;transition:all .2s;opacity:1;outline:none;margin-top:0}.description[_ngcontent-%COMP%]   .description__error[_ngcontent-%COMP%]{margin:40px 0;color:#fff;font-size:26px;text-align:center}.description[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-flow:column;min-height:100vh}.description[_ngcontent-%COMP%]   .description__content[_ngcontent-%COMP%]{position:relative;width:80%;margin-left:150px;background-repeat:no-repeat;background-size:100% auto;background-position:50%;color:#fff}.description[_ngcontent-%COMP%]   .description__content[_ngcontent-%COMP%]   .description__content_background[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-flow:row;box-sizing:border-box}.description[_ngcontent-%COMP%]   .description__content[_ngcontent-%COMP%]   .description__content_background[_ngcontent-%COMP%]   .description__image[_ngcontent-%COMP%]{height:480px;margin:50px 20px;border-radius:10px}.description[_ngcontent-%COMP%]   .description__content[_ngcontent-%COMP%]   .description__content_background[_ngcontent-%COMP%]   .description__text[_ngcontent-%COMP%]{width:60%;margin-left:20px}.description[_ngcontent-%COMP%]   .description__content[_ngcontent-%COMP%]   .description__content_background_dark[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(0,0,0,.98),rgba(0,0,0,.8) 70%)}.description[_ngcontent-%COMP%]   .description__button[_ngcontent-%COMP%]{border-radius:10px;border:2px solid #fff;background-color:initial;color:#fff;text-align:center;transition:all .2s;opacity:1;outline:none;padding:5px 10px}"]}),t})()}];let U=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(i){return new(i||t)},providers:[],imports:[[c.e.forChild(J)],c.e]}),t})();var $=n("BHD2");let F=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(i){return new(i||t)},imports:[[o.b,e.f,U,$.a]]}),t})()}}]);