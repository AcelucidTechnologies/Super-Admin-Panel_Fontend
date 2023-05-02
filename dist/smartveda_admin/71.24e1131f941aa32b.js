"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[71],{7673:(q,Z,i)=>{i.d(Z,{v:()=>t});var v=i(5439),s=i(5e3),f=i(520);let t=(()=>{class g{constructor(p){this.http=p}generateRandomNo(){return`ASNO/${(new Date).valueOf()}`}generateRandomeOrderId(){return`${(new Date).valueOf()}`}getCurrentDate(){return`${(new Date).toLocaleDateString()}`}convertDate(p){return v(p).format("YYYY-MM-DD")}convertTime(p){return v(p).format("HH:mm")}fileReadAndDetails(p){var l=p.target.files;console.log(p.target.files);var m=new FileReader;return m.readAsDataURL(p.target.files[0]),m.onload=T=>{this.URLBase64=T.target.result},{fileData:l,URLBase64:this.URLBase64}}getCountries(){return this.http.get("https://trial.mobiscroll.com/content/countries.json")}getConfig(p,l){return{customConfig:"/assets/js/ckeditor/ckeditor-config.js",height:p,wordcount:{showParagraphs:!1,showWordCount:!1,showCharCount:!0,maxCharCount:l}}}}return g.\u0275fac=function(p){return new(p||g)(s.LFG(f.eN))},g.\u0275prov=s.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},6071:(q,Z,i)=>{i.r(Z),i.d(Z,{AppoinmentModule:()=>V});var v=i(9808),A=i(1083),s=i(3075),f=i(8441),t=i(5e3),g=i(7650),h=i(520),p=i(9646);i(2340);let m=[{_id:"125875hdvfh875",name:"Sohan Pandey",email:"sohanpandey45@gmail.com",phone:"6398617038",appointmentDate:"2022-12-25",startTime:"2:30PM",endTime:"3:30PM"},{_id:"125875hdvfh875",name:"Amit Kumar",email:"amit245@gmail.com",phone:"6398617038",appointmentDate:"2023-03-25",startTime:"2:30PM",endTime:"3:30PM"},{_id:"986575hdvfh875",name:"Rohan Pandey",email:"rohanpandey45@gmail.com",phone:"6398617038",appointmentDate:"2022-02-25",startTime:"1:30PM",endTime:"2:30PM"},{_id:"025685hdvfh875",name:"Mukesh Chaudhary",email:"mukesh2345@gmail.com",phone:"6398617038",appointmentDate:"2023-02-25",startTime:"2:30PM",endTime:"3:30PM"},{_id:"259875hdvfh875gdn",name:"Rohan Shingh",email:"rohanshingh45@gmail.com",phone:"6398617038",appointmentDate:"2023-01-25",startTime:"2:30PM",endTime:"3:30PM"}],T=(()=>{class n{constructor(e){this.http=e}getAppointmentList(){const e=localStorage.getItem("token")||"";return(new h.WM).set("x-access-token",e),(0,p.of)(m)}getAppointmentById(e){const o=localStorage.getItem("token")||"";(new h.WM).set("x-access-token",o);let c=m.findIndex(u=>u._id===e);return(0,p.of)(m[c])}addAppointment(e){const o=localStorage.getItem("token")||"";return(new h.WM).set("x-access-token",o),e.id=m.length+1,m.push(e),(0,p.of)(e)}deleteAppointmentById(e){const o=localStorage.getItem("token")||"";(new h.WM).set("x-access-token",o);let c=m.findIndex(u=>u._id===e);return m.splice(m.findIndex(u=>u._id===e),1),(0,p.of)(m[c])}editAppointment(e,o){const r=localStorage.getItem("token")||"";(new h.WM).set("x-access-token",r);let u=m.findIndex(_=>_._id===o);return m[u]=e,(0,p.of)(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(h.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var S=i(7673),x=i(845),y=i(4119);const b=function(){return["/appointment"]};let L=(()=>{class n{constructor(e,o,r,d,c,u,_){this.fb=e,this.activateRoute=o,this.ngxLoader=r,this.route=d,this.toastr=c,this.AppoinmentService=u,this.commonService=_,this.title=" ",this.editMode=!1,this.appoinmentForm=this.fb.group({name:["",[s.kI.required]],email:["",[s.kI.required]],phone:["",[s.kI.required]],appointmentDate:["",[s.kI.required]],startTime:["",[s.kI.required]],endTime:["",[s.kI.required]]})}ngOnInit(){this.fgsType=f.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.activateRoute.queryParamMap.subscribe(e=>{this.id=e.get("id"),this.id&&null!=this.id?(this.editMode=!0,this.title="Edit Category",this.getAppoinmentById()):(this.editMode=!1,this.title="Add New Category")})}getAppoinmentById(){this.AppoinmentService.getAppointmentById(this.id).subscribe(e=>{this.appoinmentForm.patchValue({name:null==e?void 0:e.name,email:null==e?void 0:e.email,phone:null==e?void 0:e.phone,appointmentDate:null==e?void 0:e.appointmentDate,startTime:null==e?void 0:e.startTime,endTime:null==e?void 0:e.endTime}),this.ngxLoader.stop()})}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}addAppointment(e){this.AppoinmentService.addAppointment(e).subscribe(o=>{o?(this.toastr.showSuccess("Appointment added successfully","Appointment Added"),this.ngxLoader.stop(),this.route.navigate(["/appointment"])):(this.toastr.showError("Somthing wrong Please check","Error occured"),this.ngxLoader.stop(),this.route.navigate(["/"]))})}editAppointment(e){this.AppoinmentService.editAppointment(e,this.id).subscribe(o=>{o?(this.toastr.showSuccess("Appointment added successfully","Appointment Added"),this.ngxLoader.stop(),this.route.navigate(["/appointment"])):(this.toastr.showError("Somthing wrong Please check","Error occured"),this.ngxLoader.stop(),this.route.navigate(["/"]))})}submit(){var e,o,r,d,c,u;this.payload={_id:parseInt(this.id),name:null===(e=this.appoinmentForm)||void 0===e?void 0:e.controls.name.value,email:null===(o=this.appoinmentForm)||void 0===o?void 0:o.controls.email.value,phone:null===(r=this.appoinmentForm)||void 0===r?void 0:r.controls.phone.value,appointmentDate:null===(d=this.appoinmentForm)||void 0===d?void 0:d.controls.appointmentDate.value,startTime:null===(c=this.appoinmentForm)||void 0===c?void 0:c.controls.startTime.value,endTime:null===(u=this.appoinmentForm)||void 0===u?void 0:u.controls.endTime.value},this.ngxLoader.start(),this.editMode?this.editAppointment(this.payload):this.addAppointment(this.payload)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.qu),t.Y36(A.gz),t.Y36(f.LA),t.Y36(A.F0),t.Y36(g.$),t.Y36(T),t.Y36(S.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-edit-appoinment"]],decls:51,vars:7,consts:[[1,"page-heading"],[1,"header-text-title"],["pButton","","pTooltip","Back","tooltipPosition","bottom",1,"pi","pi-arrow-left","p-button-text",3,"routerLink"],[3,"formGroup"],[1,"card","col-sm-12"],[1,"row","gutters"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],[1,"h-100","mt-5"],[1,"card-body"],[1,"mb-2","text-primary"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"form-group"],["for","name"],["type","text","formControlName","name",1,"form-control"],["type","text","formControlName","email",1,"form-control"],["for","hyperlink"],["type","text","formControlName","phone",1,"form-control"],["for","Name"],["type","date","formControlName","appointmentDate",1,"form-control"],["for","time"],["type","time","id","time","formControlName","startTime",1,"form-control"],["type","time","id","time","formControlName","endTime",1,"form-control"],[1,"row","gutters","mt-4"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","mt-4"],[1,"text-right"],["pButton","","type","button","id","submit","name","submit",1,"p-button-danger","mr-4",3,"routerLink"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._UZ(2,"i",2),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"form",3),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"div",7),t.TgZ(9,"div",8),t.TgZ(10,"div",5),t.TgZ(11,"div",6),t.TgZ(12,"h6",9),t._uU(13),t.qZA(),t.qZA(),t.TgZ(14,"div",10),t.TgZ(15,"div",11),t.TgZ(16,"label",12),t._uU(17,"Name"),t.qZA(),t._UZ(18,"input",13),t.qZA(),t.qZA(),t.TgZ(19,"div",10),t.TgZ(20,"div",11),t.TgZ(21,"label",12),t._uU(22,"Email"),t.qZA(),t._UZ(23,"input",14),t.qZA(),t.qZA(),t.TgZ(24,"div",10),t.TgZ(25,"div",11),t.TgZ(26,"label",15),t._uU(27,"Phone"),t.qZA(),t._UZ(28,"input",16),t.qZA(),t.qZA(),t.TgZ(29,"div",10),t.TgZ(30,"div",11),t.TgZ(31,"label",17),t._uU(32,"Appointment Date"),t.qZA(),t._UZ(33,"input",18),t.qZA(),t.qZA(),t.TgZ(34,"div",10),t.TgZ(35,"div",11),t.TgZ(36,"label",19),t._uU(37,"Start Time"),t.qZA(),t._UZ(38,"input",20),t.qZA(),t.qZA(),t.TgZ(39,"div",10),t.TgZ(40,"div",11),t.TgZ(41,"label",19),t._uU(42,"End Time"),t.qZA(),t._UZ(43,"input",21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"div",22),t.TgZ(45,"div",23),t.TgZ(46,"div",24),t.TgZ(47,"button",25),t._uU(48,"Cancel"),t.qZA(),t.TgZ(49,"button",26),t.NdJ("click",function(){return o.submit()}),t._uU(50,"Submit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("routerLink",t.DdM(5,b)),t.xp6(1),t.hij("",o.title," "),t.xp6(1),t.Q6J("formGroup",o.appoinmentForm),t.xp6(9),t.Oqu(o.title),t.xp6(34),t.Q6J("routerLink",t.DdM(6,b)))},directives:[x.Hq,y.u,A.rH,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u],styles:[""]}),n})();var C=i(2888),M=i(4851),U=i(9783),D=i(1424);const P=["dt"],E=function(){return["/appointment/add"]};function O(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",10),t.TgZ(1,"span",11),t._UZ(2,"i",12),t.TgZ(3,"input",13),t.NdJ("input",function(r){return t.CHM(e),t.oxw().applyFilterGlobal(r,"contains")}),t.qZA(),t.qZA(),t.TgZ(4,"span",11),t._UZ(5,"button",14),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(5),t.Q6J("routerLink",t.DdM(2,E))("disabled",!e.accessPermission.add)}}function I(n,a){if(1&n&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.Oqu(e.headers)}}function R(n,a){if(1&n&&(t.TgZ(0,"tr"),t.YNc(1,I,2,1,"th",15),t.TgZ(2,"th"),t._uU(3,"Options"),t.qZA(),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("ngForOf",e)}}const N=function(){return["/appointment/edit"]},w=function(n){return{id:n}};function F(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t.TgZ(16,"div",16),t._UZ(17,"button",17),t.TgZ(18,"button",18),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().deleteAppoinmentById(d._id)}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=a.$implicit,o=t.oxw();t.xp6(2),t.Oqu(e._id),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.appointmentDate),t.xp6(2),t.Oqu(e.startTime),t.xp6(2),t.Oqu(e.endTime),t.xp6(3),t.Q6J("routerLink",t.DdM(11,N))("queryParams",t.VKq(12,w,e._id))("disabled",!o.accessPermission.edit),t.xp6(1),t.Q6J("disabled",!o.accessPermission.delete)}}function k(n,a){1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td",19),t._uU(2," No Records Found. "),t.qZA(),t.qZA())}const B=function(){return["_id","name","email","phone"]},Y=[{path:"",component:(()=>{class n{constructor(e,o,r,d){this.ngxLoader=e,this.toastr=o,this.AppoinmentService=r,this.permissionService=d,this.appoinmentList=[],this.permissionService.getModulePermission().subscribe(c=>{this.accessPermission=c[0].AppointmentList})}ngOnInit(){this.fgsType=f.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.cols=[{field:"_id",show:!0,headers:"Id"},{field:"name",show:!0,headers:"Name"},{field:"email",show:!0,headers:"Email"},{field:"phone",show:!0,headers:"Phone"},{field:"appointmentDate",show:!0,headers:"Appointment Date"},{field:"startTime",show:!0,headers:"Start At"},{field:"endTime",show:!0,headers:" End At"}],this.getAppoinmentList()}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}getAppoinmentList(){this.AppoinmentService.getAppointmentList().subscribe(e=>{this.appoinmentList=e,this.ngxLoader.stop()})}deleteAppoinmentById(e){this.AppoinmentService.deleteAppointmentById(e).subscribe(o=>{o&&(this.toastr.showSuccess("order deleted successfully","order delete"),this.getAppoinmentList())})}applyFilterGlobal(e,o){this.dt.filterGlobal(e.target.value,o)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.LA),t.Y36(g.$),t.Y36(T),t.Y36(C.y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-appoinment-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(P,5),2&e){let r;t.iGM(r=t.CRH())&&(o.dt=r.first)}},decls:11,vars:10,consts:[[1,"page-heading"],[1,"header-text-title",2,"margin-left","1%"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","showCurrentPageReport","value","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"fgsColor","fgsType"],[1,"row"],[1,"p-input-icon-right","ml-5"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",3,"input"],["pButton","","type","button","label","Add New Appoinment",1,"p-button-success",3,"routerLink","disabled"],[4,"ngFor","ngForOf"],["id","btn-grp",1,"btn-grp"],["pButton","","type","button","icon","pi pi-user-edit","pTooltip","Edit Appoinment","tooltipPosition","bottom",1,"p-button-warning",2,"margin-right","5px",3,"routerLink","queryParams","disabled"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete Appoinment","tooltipPosition","bottom",1,"p-button-danger",2,"margin-right","5px",3,"disabled","click"],["colspan","12",1,"text-center","text-danger","font-weight-700"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._uU(2,"Appointment List"),t.qZA(),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"p-table",3,4),t.YNc(6,O,6,3,"ng-template",5),t.YNc(7,R,4,1,"ng-template",6),t.YNc(8,F,19,14,"ng-template",7),t.YNc(9,k,3,0,"ng-template",8),t.qZA(),t._UZ(10,"ngx-ui-loader",9),t.qZA()),2&e&&(t.xp6(4),t.Q6J("columns",o.cols)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("value",o.appoinmentList)("responsive",!0)("globalFilterFields",t.DdM(9,B)),t.xp6(6),t.Q6J("fgsColor","#000000")("fgsType",o.fgsType))},directives:[M.iA,U.jx,D.o,x.Hq,A.rH,v.sg,y.u,f.Eo],styles:[".btn-grp[_ngcontent-%COMP%]{display:flex}"]}),n})()},{path:"add",component:L},{path:"edit",component:L}];let J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[A.Bz.forChild(Y)],A.Bz]}),n})();var $=i(5115);let V=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[v.ez,J,$.m]]}),n})()}}]);