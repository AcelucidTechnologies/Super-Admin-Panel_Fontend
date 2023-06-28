"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[632],{4632:(me,y,d)=>{d.r(y),d.d(y,{TravelModule:()=>pe});var m=d(9808),p=d(1083),a=d(3075),e=d(5e3),v=d(8441),f=d(7650),h=d(1561);function D(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",28),e._uU(2," Employee Id is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.employeeId.errors.required)}}function F(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",28),e._uU(2," Employee Name is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.employeeName.errors.required)}}function C(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",28),e._uU(2," Journey date is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.journeyDate.errors.required)}}function U(r,l){1&r&&(e.TgZ(0,"div",30),e._uU(1," return date should be greater than or equal to from date "),e.qZA())}function M(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",28),e._uU(2," return date is required "),e.qZA(),e.YNc(3,U,2,0,"div",29),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.returnDate.errors.required),e.xp6(2),e.Q6J("ngIf",(null==t.selectForm.controls.returnDate.errors?null:t.selectForm.controls.returnDate.errors.invalidreturnDate)&&(t.selectForm.controls.returnDate.touched||t.selectForm.controls.returnDate.dirty))}}function I(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",28),e._uU(2," travel from is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.travelFrom.errors.required)}}function k(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",28),e._uU(2," travel to is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.travelTo.errors.required)}}function J(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",28),e._uU(2," added by is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.addedBy.errors.required)}}function N(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",28),e._uU(2," purpose of travel is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.purposeTravel.errors.required)}}const q=function(){return["/travelexpense/travel-list"]};let w=(()=>{class r{constructor(t,o,n,i,s){this.ngxLoader=t,this.fb=o,this.toastr=n,this.leaveservice=i,this.route=s,this.selectForm=this.fb.group({username:localStorage.getItem("email"),employeeId:["",[a.kI.required]],employeeName:["",[a.kI.required]],journeyDate:["",[a.kI.required]],returnDate:["",[a.kI.required,this.validateToDate.bind(this)]],travelFrom:["",[a.kI.required]],travelTo:["",[a.kI.required]],purposeTravel:["",[a.kI.required]],addedBy:["",[a.kI.required]]})}getMinimumDate(){const t=new Date;return t.setDate(t.getDate()),t.toISOString().split("T")[0]}validateToDate(t){var o,n;const i=t.value,s=null===(n=null===(o=this.selectForm)||void 0===o?void 0:o.get("journeyDate"))||void 0===n?void 0:n.value;return!i||!s||new Date(s)<=new Date(i)?null:{invalidreturnDate:!0}}submit(){this.ngxLoader.start(),this.leaveservice.createTravel(this.selectForm.value).subscribe(t=>{this.travellist=t,t&&(this.ngxLoader.start(),console.log("100"+this.travellist),this.toastr.showSuccess("Travel expense added successfully","Expense Added")),this.route.navigate(["/travelexpense/travel-list"])})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.LA),e.Y36(a.qu),e.Y36(f.$),e.Y36(h.e),e.Y36(p.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-add-travel"]],decls:84,vars:16,consts:[[1,"button-heading-container"],[1,"mb-2","back-button",3,"routerLink"],[1,"material-icons"],[1,"card","pl-4","pr-4","pb-3","pt-4"],[3,"formGroup"],[1,"row","mb-4"],[1,"col-6"],[1,"row"],[1,"col-4"],[1,"starlabel"],[1,"col-8"],["formControlName","employeeId","placeholder","Enter employee name","type","text",1,"form-control","custom-placeholder","input-padding"],[4,"ngIf"],["formControlName","employeeName","placeholder","Enter employee name","type","text",1,"form-control","custom-placeholder","input-padding"],["formControlName","journeyDate","placeholder","Enter employee type","type","date",1,"form-control","custom-placeholder","input-padding",3,"min"],["formControlName","returnDate","placeholder","Enter Reason","type","date",1,"form-control","custom-placeholder","input-padding",3,"min"],[1,"row","mb-4","mt-2"],["formControlName","travelFrom","placeholder","Enter travel from","type","text",1,"form-control","custom-placeholder","input-padding"],["formControlName","travelTo","placeholder","Enter travel to","type","text",1,"form-control","custom-placeholder","input-padding"],["formControlName","addedBy","placeholder","Enter added by","type","text",1,"form-control","custom-placeholder","input-padding"],[1,"col-12"],[1,"col-2"],[1,"col-10"],["formControlName","purposeTravel","type","text","placeholder","Enter travel purpose ",1,"form-control","custom-placeholder","input-padding",2,"height","100px"],[1,"row","mb-5","mt-4"],[1,"d-flex","justify-content-end","col-11","mt-4"],["type","submit",1,"btn","btn-info","mr-3",2,"background","rgb(228, 28, 28)","border","none",3,"disabled","click"],[1,"btn","btn-info",2,"background","#637381","border","none",3,"routerLink"],[2,"color","rgb(253, 122, 122)","font-size","small","font-style","italic",3,"hidden"],["style","color: rgb(253, 122, 122); font-size: small; font-style: italic;",4,"ngIf"],[2,"color","rgb(253, 122, 122)","font-size","small","font-style","italic"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e.TgZ(2,"i",2),e._uU(3,"arrow_back"),e.qZA(),e.qZA(),e.TgZ(4,"h5"),e._uU(5,"\xa0Add Expense"),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.TgZ(7,"form",4),e.TgZ(8,"div",5),e.TgZ(9,"div",6),e.TgZ(10,"div",7),e.TgZ(11,"div",8),e.TgZ(12,"label",9),e._uU(13,"Employee ID"),e.qZA(),e.qZA(),e.TgZ(14,"div",10),e._UZ(15,"input",11),e.YNc(16,D,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",6),e.TgZ(18,"div",7),e.TgZ(19,"div",8),e.TgZ(20,"label",9),e._uU(21,"Employee Name"),e.qZA(),e.qZA(),e.TgZ(22,"div",10),e._UZ(23,"input",13),e.YNc(24,F,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"div",5),e.TgZ(26,"div",6),e.TgZ(27,"div",7),e.TgZ(28,"div",8),e.TgZ(29,"label",9),e._uU(30,"Journey date"),e.qZA(),e.qZA(),e.TgZ(31,"div",10),e._UZ(32,"input",14),e.YNc(33,C,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"div",6),e.TgZ(35,"div",7),e.TgZ(36,"div",8),e.TgZ(37,"label",9),e._uU(38,"Return Date"),e.qZA(),e.qZA(),e.TgZ(39,"div",10),e._UZ(40,"input",15),e.YNc(41,M,4,2,"div",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(42,"div",16),e.TgZ(43,"div",6),e.TgZ(44,"div",7),e.TgZ(45,"div",8),e.TgZ(46,"label",9),e._uU(47,"Travel From"),e.qZA(),e.qZA(),e.TgZ(48,"div",10),e._UZ(49,"input",17),e.YNc(50,I,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(51,"div",6),e.TgZ(52,"div",7),e.TgZ(53,"div",8),e.TgZ(54,"label",9),e._uU(55,"Travel To"),e.qZA(),e.qZA(),e.TgZ(56,"div",10),e._UZ(57,"input",18),e.YNc(58,k,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(59,"div",16),e.TgZ(60,"div",6),e.TgZ(61,"div",7),e.TgZ(62,"div",8),e.TgZ(63,"label",9),e._uU(64,"Added By"),e.qZA(),e.qZA(),e.TgZ(65,"div",10),e._UZ(66,"input",19),e.YNc(67,J,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(68,"div",16),e.TgZ(69,"div",20),e.TgZ(70,"div",7),e.TgZ(71,"div",21),e.TgZ(72,"label",9),e._uU(73,"Purpose of Travel"),e.qZA(),e.qZA(),e.TgZ(74,"div",22),e._UZ(75,"textarea",23),e.YNc(76,N,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e._UZ(77,"div",6),e.qZA(),e.TgZ(78,"div",24),e.TgZ(79,"div",25),e.TgZ(80,"button",26),e.NdJ("click",function(){return o.submit()}),e._uU(81," Submit "),e.qZA(),e.TgZ(82,"button",27),e._uU(83," Cancel "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(14,q)),e.xp6(6),e.Q6J("formGroup",o.selectForm),e.xp6(9),e.Q6J("ngIf",!o.selectForm.controls.employeeId.valid&&(o.selectForm.controls.employeeId.touched||o.selectForm.controls.employeeId.dirty)),e.xp6(8),e.Q6J("ngIf",!o.selectForm.controls.employeeName.valid&&(o.selectForm.controls.employeeName.touched||o.selectForm.controls.employeeName.dirty)),e.xp6(8),e.Q6J("min",o.getMinimumDate()),e.xp6(1),e.Q6J("ngIf",!o.selectForm.controls.journeyDate.valid&&(o.selectForm.controls.journeyDate.touched||o.selectForm.controls.journeyDate.dirty)),e.xp6(7),e.Q6J("min",o.getMinimumDate()),e.xp6(1),e.Q6J("ngIf",!o.selectForm.controls.returnDate.valid&&(o.selectForm.controls.returnDate.touched||o.selectForm.controls.returnDate.dirty)),e.xp6(9),e.Q6J("ngIf",!o.selectForm.controls.travelFrom.valid&&(o.selectForm.controls.travelFrom.touched||o.selectForm.controls.travelFrom.dirty)),e.xp6(8),e.Q6J("ngIf",!o.selectForm.controls.travelTo.valid&&(o.selectForm.controls.travelTo.touched||o.selectForm.controls.travelTo.dirty)),e.xp6(9),e.Q6J("ngIf",!o.selectForm.controls.addedBy.valid&&(o.selectForm.controls.addedBy.touched||o.selectForm.controls.addedBy.dirty)),e.xp6(9),e.Q6J("ngIf",!o.selectForm.controls.purposeTravel.valid&&(o.selectForm.controls.purposeTravel.touched||o.selectForm.controls.purposeTravel.dirty)),e.xp6(4),e.Q6J("disabled",!o.selectForm.valid),e.xp6(2),e.Q6J("routerLink",e.DdM(15,q)))},directives:[p.rH,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,m.O5],styles:['.back-button[_ngcontent-%COMP%]{background:#e41c1c;color:#fff;border:none;padding:5px;border-radius:5px;width:40px}  .back-button:hover{background-color:#f08080!important}.button-heading-container[_ngcontent-%COMP%]{display:flex;align-items:center}.card-title[_ngcontent-%COMP%]{background-color:#5f9ea0;color:#f5f5f5;line-height:30px;padding-left:10px}label.starlabel[_ngcontent-%COMP%]:after{content:"*";color:#e41c1c}.custom-placeholder[_ngcontent-%COMP%]::placeholder{color:#495057}']}),r})();var u=d(8966),_=d(7423);let b=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-dialog-travel"]],decls:11,vars:1,consts:[["mat-dialog-title",""],[1,"mat-typography"],["align","end"],["mat-button","",1,"dialog1","button-color","mr-2",3,"mat-dialog-close"],["mat-button","","mat-dialog-close","",1,"dialog2"]],template:function(t,o){1&t&&(e.TgZ(0,"div"),e.TgZ(1,"h2",0),e._uU(2,"Delete Travel Expense List"),e.qZA(),e.TgZ(3,"mat-dialog-content",1),e.TgZ(4,"h3"),e._uU(5,"Do you want to delete this Record?"),e.qZA(),e.qZA(),e.TgZ(6,"mat-dialog-actions",2),e.TgZ(7,"button",3),e._uU(8,"Yes, delete it!"),e.qZA(),e.TgZ(9,"button",4),e._uU(10,"Cancel"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(7),e.Q6J("mat-dialog-close",!0))},directives:[u.uh,u.xY,u.H8,_.lW,u.ZT],styles:["mat-dialog-content[_ngcontent-%COMP%]{width:600px}[_nghost-%COMP%]  .dialog1{background:#e41c1c;color:#fff;border-radius:5px;outline:none}.dialog2[_ngcontent-%COMP%]{color:#fff;background:#637381;border-radius:5px;outline:none}.mat-dialog-title[_ngcontent-%COMP%], .mat-dialog-content[_ngcontent-%COMP%]{text-align:center}.mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}.mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 10px}"]}),r})();function E(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",27),e._uU(2," Employee Id is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.employeeId.errors.required)}}function P(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",27),e._uU(2," Employee Name is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.employeeName.errors.required)}}function O(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",27),e._uU(2," Journey date is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.journeyDate.errors.required)}}function L(r,l){1&r&&(e.TgZ(0,"div",29),e._uU(1," return date should be greater than or equal to from date "),e.qZA())}function Q(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",27),e._uU(2," return date is required "),e.qZA(),e.YNc(3,L,2,0,"div",28),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.returnDate.errors.required),e.xp6(2),e.Q6J("ngIf",(null==t.selectForm.controls.returnDate.errors?null:t.selectForm.controls.returnDate.errors.invalidreturnDate)&&(t.selectForm.controls.returnDate.touched||t.selectForm.controls.returnDate.dirty))}}function j(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",27),e._uU(2," travel from is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.travelFrom.errors.required)}}function S(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",27),e._uU(2," travel to is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.travelTo.errors.required)}}function Y(r,l){if(1&r&&(e.TgZ(0,"div"),e.TgZ(1,"div",27),e._uU(2," purpose of travel is required "),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.selectForm.controls.purposeTravel.errors.required)}}const x=function(){return["/travelexpense/travel-list"]};let B=(()=>{class r{constructor(t,o,n,i,s,T){this.ngxLoader=t,this.fb=o,this.toastr=n,this.leaveservice=i,this.activatedRoute=s,this.route=T,this.activatedRoute.queryParamMap.subscribe(g=>{this.id=g.get("id")}),this.selectForm=this.fb.group({username:localStorage.getItem("email"),employeeId:["",[a.kI.required]],employeeName:["",[a.kI.required]],journeyDate:["",[a.kI.required]],returnDate:["",[a.kI.required,this.validateToDate.bind(this)]],travelFrom:["",[a.kI.required]],travelTo:["",[a.kI.required]],purposeTravel:["",[a.kI.required]]})}getMinimumDate(){const t=new Date;return t.setDate(t.getDate()),t.toISOString().split("T")[0]}validateToDate(t){var o,n;const i=t.value,s=null===(n=null===(o=this.selectForm)||void 0===o?void 0:o.get("journeyDate"))||void 0===n?void 0:n.value;return!i||!s||new Date(s)<=new Date(i)?null:{invalidreturnDate:!0}}getTravelDetail(){this.leaveservice.getTravelById(this.id).subscribe(t=>{const o=this.convertDateFormat(t.journeyDate),n=this.convertDateFormat(t.returnDate);this.selectForm.patchValue({employeeId:t.employeeId,employeeName:t.employeeName,journeyDate:o,returnDate:n,travelFrom:t.travelFrom,travelTo:t.travelTo,purposeTravel:t.purposeTravel})})}convertDateFormat(t){if(!t)return"";const o=new Date(t);return`${o.getUTCFullYear()}-${this.formatNumber(o.getUTCMonth()+1)}-${this.formatNumber(o.getUTCDate())}`}formatNumber(t){return t<10?`0${t}`:`${t}`}ngOnInit(){this.getTravelDetail()}submit(){this.ngxLoader.start(),this.leaveservice.editTravelList(this.selectForm.value,this.id).subscribe(t=>{this.exitlist=t,t&&(this.ngxLoader.start(),console.log("100"+this.exitlist),this.toastr.showSuccess("Travel expense edit successfully","Expense Edited")),this.route.navigate(["/travelexpense/travel-list"])})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.LA),e.Y36(a.qu),e.Y36(f.$),e.Y36(h.e),e.Y36(p.gz),e.Y36(p.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-edit-travel"]],decls:75,vars:15,consts:[[1,"button-heading-container"],[1,"mb-2","back-button",3,"routerLink"],[1,"material-icons"],[1,"card","pl-4","pr-4","pb-3","pt-4"],[3,"formGroup"],[1,"row","mb-4"],[1,"col-6"],[1,"row"],[1,"col-4"],[1,"starlabel"],[1,"col-8"],["formControlName","employeeId","placeholder","Enter employee name","type","text",1,"form-control","custom-placeholder","input-padding"],[4,"ngIf"],["formControlName","employeeName","placeholder","Enter employee name","type","text",1,"form-control","custom-placeholder","input-padding"],["formControlName","journeyDate","placeholder","Enter employee type","type","date",1,"form-control","custom-placeholder","input-padding",3,"min"],["formControlName","returnDate","placeholder","Enter Reason","type","date",1,"form-control","custom-placeholder","input-padding",3,"min"],[1,"row","mb-4","mt-2"],["formControlName","travelFrom","placeholder","Enter travel from","type","text",1,"form-control","custom-placeholder","input-padding"],["formControlName","travelTo","placeholder","Enter travel to","type","text",1,"form-control","custom-placeholder","input-padding"],[1,"col-12"],[1,"col-2"],[1,"col-10"],["formControlName","purposeTravel","type","text","placeholder","Enter travel purpose ",1,"form-control","custom-placeholder","input-padding",2,"height","100px"],[1,"row","mb-5","mt-4"],[1,"d-flex","justify-content-end","col-11","mt-4"],["type","submit",1,"btn","btn-info","mr-3",2,"background","rgb(228, 28, 28)","border","none",3,"disabled","click"],[1,"btn","btn-info",2,"background","#637381","border","none",3,"routerLink"],[2,"color","rgb(253, 122, 122)","font-size","small","font-style","italic",3,"hidden"],["style","color: rgb(253, 122, 122); font-size: small; font-style: italic;",4,"ngIf"],[2,"color","rgb(253, 122, 122)","font-size","small","font-style","italic"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e.TgZ(2,"i",2),e._uU(3,"arrow_back"),e.qZA(),e.qZA(),e.TgZ(4,"h5"),e._uU(5,"\xa0Edit Expense"),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.TgZ(7,"form",4),e.TgZ(8,"div",5),e.TgZ(9,"div",6),e.TgZ(10,"div",7),e.TgZ(11,"div",8),e.TgZ(12,"label",9),e._uU(13,"Employee ID"),e.qZA(),e.qZA(),e.TgZ(14,"div",10),e._UZ(15,"input",11),e.YNc(16,E,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",6),e.TgZ(18,"div",7),e.TgZ(19,"div",8),e.TgZ(20,"label",9),e._uU(21,"Employee Name"),e.qZA(),e.qZA(),e.TgZ(22,"div",10),e._UZ(23,"input",13),e.YNc(24,P,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"div",5),e.TgZ(26,"div",6),e.TgZ(27,"div",7),e.TgZ(28,"div",8),e.TgZ(29,"label",9),e._uU(30,"Journey date"),e.qZA(),e.qZA(),e.TgZ(31,"div",10),e._UZ(32,"input",14),e.YNc(33,O,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"div",6),e.TgZ(35,"div",7),e.TgZ(36,"div",8),e.TgZ(37,"label",9),e._uU(38,"Return Date"),e.qZA(),e.qZA(),e.TgZ(39,"div",10),e._UZ(40,"input",15),e.YNc(41,Q,4,2,"div",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(42,"div",16),e.TgZ(43,"div",6),e.TgZ(44,"div",7),e.TgZ(45,"div",8),e.TgZ(46,"label",9),e._uU(47,"Travel From"),e.qZA(),e.qZA(),e.TgZ(48,"div",10),e._UZ(49,"input",17),e.YNc(50,j,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(51,"div",6),e.TgZ(52,"div",7),e.TgZ(53,"div",8),e.TgZ(54,"label",9),e._uU(55,"Travel To"),e.qZA(),e.qZA(),e.TgZ(56,"div",10),e._UZ(57,"input",18),e.YNc(58,S,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(59,"div",16),e.TgZ(60,"div",19),e.TgZ(61,"div",7),e.TgZ(62,"div",20),e.TgZ(63,"label",9),e._uU(64,"Purpose of Travel"),e.qZA(),e.qZA(),e.TgZ(65,"div",21),e._UZ(66,"textarea",22),e.YNc(67,Y,3,1,"div",12),e.qZA(),e.qZA(),e.qZA(),e._UZ(68,"div",6),e.qZA(),e.TgZ(69,"div",23),e.TgZ(70,"div",24),e.TgZ(71,"button",25),e.NdJ("click",function(){return o.submit()}),e._uU(72," Submit "),e.qZA(),e.TgZ(73,"button",26),e._uU(74," Cancel "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(13,x)),e.xp6(6),e.Q6J("formGroup",o.selectForm),e.xp6(9),e.Q6J("ngIf",!o.selectForm.controls.employeeId.valid&&(o.selectForm.controls.employeeId.touched||o.selectForm.controls.employeeId.dirty)),e.xp6(8),e.Q6J("ngIf",!o.selectForm.controls.employeeName.valid&&(o.selectForm.controls.employeeName.touched||o.selectForm.controls.employeeName.dirty)),e.xp6(8),e.Q6J("min",o.getMinimumDate()),e.xp6(1),e.Q6J("ngIf",!o.selectForm.controls.journeyDate.valid&&(o.selectForm.controls.journeyDate.touched||o.selectForm.controls.journeyDate.dirty)),e.xp6(7),e.Q6J("min",o.getMinimumDate()),e.xp6(1),e.Q6J("ngIf",!o.selectForm.controls.returnDate.valid&&(o.selectForm.controls.returnDate.touched||o.selectForm.controls.returnDate.dirty)),e.xp6(9),e.Q6J("ngIf",!o.selectForm.controls.travelFrom.valid&&(o.selectForm.controls.travelFrom.touched||o.selectForm.controls.travelFrom.dirty)),e.xp6(8),e.Q6J("ngIf",!o.selectForm.controls.travelTo.valid&&(o.selectForm.controls.travelTo.touched||o.selectForm.controls.travelTo.dirty)),e.xp6(9),e.Q6J("ngIf",!o.selectForm.controls.purposeTravel.valid&&(o.selectForm.controls.purposeTravel.touched||o.selectForm.controls.purposeTravel.dirty)),e.xp6(4),e.Q6J("disabled",!o.selectForm.valid),e.xp6(2),e.Q6J("routerLink",e.DdM(14,x)))},directives:[p.rH,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,m.O5],styles:['.back-button[_ngcontent-%COMP%]{background:#e41c1c;color:#fff;border:none;padding:5px;border-radius:5px;width:40px}  .back-button:hover{background-color:#f08080!important}.button-heading-container[_ngcontent-%COMP%]{display:flex;align-items:center}.card-title[_ngcontent-%COMP%]{background-color:#5f9ea0;color:#f5f5f5;line-height:30px;padding-left:10px}label.starlabel[_ngcontent-%COMP%]:after{content:"*";color:#e41c1c}.custom-placeholder[_ngcontent-%COMP%]::placeholder{color:#495057}']}),r})();var R=d(3583),Z=d(574),z=d(2983),$=d.n(z),K=d(845),A=d(4851),G=d(9783),H=d(1424),X=d(4119);const V=["dt"];function W(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",12),e.TgZ(1,"div",13),e.TgZ(2,"div",14),e._UZ(3,"img",15),e.TgZ(4,"input",16,17),e.NdJ("input",function(n){return e.CHM(t),e.oxw().applyFilterGlobal(n,"contains")}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div"),e.TgZ(7,"button",18),e.NdJ("click",function(){return e.CHM(t),e.oxw().exportPdf()}),e._UZ(8,"img",19),e.qZA(),e.TgZ(9,"button",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().exportExcel()}),e._UZ(10,"img",21),e.qZA(),e.qZA(),e.qZA()}}function ee(r,l){1&r&&(e.TgZ(0,"tr"),e.TgZ(1,"th"),e.TgZ(2,"div",22),e._uU(3," S.No. "),e.qZA(),e.qZA(),e.TgZ(4,"th",23),e.TgZ(5,"div",22),e._uU(6," Employee ID "),e._UZ(7,"p-sortIcon",24),e.qZA(),e.qZA(),e.TgZ(8,"th",25),e.TgZ(9,"div",22),e._uU(10," Travel From "),e._UZ(11,"p-sortIcon",26),e.qZA(),e.qZA(),e.TgZ(12,"th",27),e.TgZ(13,"div",22),e._uU(14," Travel To "),e._UZ(15,"p-sortIcon",28),e.qZA(),e.qZA(),e.TgZ(16,"th",29),e.TgZ(17,"div",22),e._uU(18," Start Date "),e._UZ(19,"p-sortIcon",30),e.qZA(),e.qZA(),e.TgZ(20,"th",31),e.TgZ(21,"div",22),e._uU(22," Return Date "),e._UZ(23,"p-sortIcon",32),e.qZA(),e.qZA(),e.TgZ(24,"th",33),e.TgZ(25,"div",22),e._uU(26," Added By "),e._UZ(27,"p-sortIcon",34),e.qZA(),e.qZA(),e.TgZ(28,"th",35),e.TgZ(29,"div",22),e._uU(30," Added Time "),e._UZ(31,"p-sortIcon",36),e.qZA(),e.qZA(),e.TgZ(32,"th",37),e.TgZ(33,"div",22),e._uU(34," Modified By "),e._UZ(35,"p-sortIcon",38),e.qZA(),e.qZA(),e.TgZ(36,"th",39),e.TgZ(37,"div",22),e._uU(38," Modified Time "),e._UZ(39,"p-sortIcon",40),e.qZA(),e.qZA(),e.TgZ(40,"th",41),e._uU(41,"Action"),e.qZA(),e.qZA())}const te=function(){return["/travelexpense/edit-travel"]},oe=function(r){return{id:r}};function re(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"span",42),e._uU(3,"Sr.no"),e.qZA(),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"date"),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.ALo(16,"date"),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.ALo(21,"date"),e.qZA(),e.TgZ(22,"td"),e._uU(23),e.qZA(),e.TgZ(24,"td"),e._uU(25),e.ALo(26,"date"),e.qZA(),e.TgZ(27,"td"),e.TgZ(28,"div",43),e.TgZ(29,"a",44),e._UZ(30,"img",45),e.qZA(),e.TgZ(31,"a",46),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw().openDialog(i)}),e._UZ(32,"img",47),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=l.$implicit,o=l.rowIndex;e.xp6(4),e.hij(" ",o+1," "),e.xp6(2),e.Oqu(t.employeeId),e.xp6(2),e.Oqu(t.travelFrom),e.xp6(2),e.Oqu(t.travelTo),e.xp6(2),e.Oqu(e.xi3(13,12,t.journeyDate,"MM/dd/yyyy")),e.xp6(3),e.Oqu(e.xi3(16,15,t.returnDate,"MM/dd/yyyy")),e.xp6(3),e.Oqu(t.addedBy),e.xp6(2),e.Oqu(e.xi3(21,18,t.createdAt,"MM/dd/yyyy")),e.xp6(3),e.Oqu(t.addedBy),e.xp6(2),e.Oqu(e.xi3(26,21,t.updatedAt,"MM/dd/yyyy")),e.xp6(5),e.Q6J("routerLink",e.DdM(24,te))("queryParams",e.VKq(25,oe,t._id))}}function ne(r,l){1&r&&(e.TgZ(0,"tr"),e.TgZ(1,"td",48),e._uU(2,"No records to show"),e.qZA(),e.qZA())}const le=function(){return["/travelexpense/add-travel"]},ae=function(){return["employeeId","travelFrom","travelTo","journeyDate","returnDate","anythingShare","createdAt","updatedAt","allAssets","noticePeriod"]},ie=[{path:"travel-list",component:(()=>{class r{constructor(t,o,n,i){this.leaveService=t,this.toastr=o,this.ngxLoader=n,this.dialog=i,this.travelData=[],this.sidebarSpacing="contracted",this.statusList=["Active","Inactive"]}ngOnInit(){this.getTravelData()}getTravelData(){this.leaveService.getTravelList().subscribe(t=>{this.travelData=t,console.log("51",this.travelData)})}openDialog(t){this.dialog.open(b).afterClosed().subscribe(n=>{1==n&&this.deleteTravelDetails(t)})}deleteTravelDetails(t){this.leaveService.deleteTravel(t._id).subscribe(o=>{o&&(this.toastr.showSuccess("Travel Expense deleted successfully","Travel Expense deleted"),this.getTravelData())})}exportExcel(){const t=new m.uU("en-US"),o=this.travelData.map((c,ue)=>({"S.No.":ue+1,"Employee Id":c.employeeId,"Travel From":c.travelFrom,"Travel To":c.travelTo,JourneyDate:c.journeyDate,ReturnDate:c.returnDate,"Added By":c.addedBy,AddedTime:t.transform(c.createdAt,"MM/dd/yyyy"),"Modified By":c.addedBy,ModifiedTime:t.transform(c.updatedAt,"MM/dd/yyyy")})),n=Z.utils.book_new(),i=Z.utils.json_to_sheet(o);Z.utils.book_append_sheet(n,i,"Sheet1");const s=this.workbookToBlob(n),T=URL.createObjectURL(s),g=document.createElement("a");g.href=T,g.download="table_data.xlsx",g.click(),URL.revokeObjectURL(T)}workbookToBlob(t){const o=Z.write(t,{bookType:"xlsx",type:"array"});return new Blob([o],{type:"application/octet-stream"})}exportPdf(){this.exitDetails=this.travelData.map((i,s)=>Object.assign({sno:s+1},i));const t=new R.jsPDF("l","pt"),o=this.exitDetails.map(i=>Object.assign(Object.assign({},i),{createdAt:this.formatDate(i.createdAt),updatedAt:this.formatDate(i.updatedAt)}));$()(t,{columns:[{title:"S No.",dataKey:"sno"},{title:"Employee Id",dataKey:"employeeId"},{title:"Travel From",dataKey:"travelFrom"},{title:"Travel To",dataKey:"travelTo"},{title:"JourneyDate",dataKey:"journeyDate"},{title:"ReturnDate",dataKey:"returnDate"},{title:"Added By",dataKey:"addedBy"},{title:"AddedTime",dataKey:"createdAt"},{title:"Modified By",dataKey:"addedBy"},{title:"ModifiedTime",dataKey:"updatedAt"}],body:o}),t.save("Travel Expense List.pdf")}formatDate(t){const o=new Date(t);return`${String(o.getDate()).padStart(2,"0")}/${String(o.getMonth()+1).padStart(2,"0")}/${o.getFullYear()}`}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}applyFilterGlobal(t,o){const n=t.target.value;!n||/^\s*$/.test(n)?this.dt.filterGlobal("",o):this.dt.filterGlobal(n.trim(),o)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(h.e),e.Y36(f.$),e.Y36(v.LA),e.Y36(u.uw))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-travel-list"]],viewQuery:function(t,o){if(1&t&&e.Gf(V,5),2&t){let n;e.iGM(n=e.CRH())&&(o.dt=n.first)}},decls:14,vars:10,consts:[[1,"page-heading"],[1,"row","mb-2","mt-2"],[1,"col-6"],[1,"col-6","text-right"],[1,"p-input-icon-right","ml-5"],["pButton","","type","button","label"," + Add Expense",1,"add-button-rating",3,"routerLink"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","showCurrentPageReport","value","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"d-flex","justify-content-between"],[1,"d-flex","align-items-center","p-0"],[1,"input-container"],["src","../../../assets/images/search-white.svg",1,"input-container-img"],["pInputText","","type","text","placeholder","Search...",3,"input"],["search",""],["pButton","","type","button","pTooltip","Pdf","tooltipPosition","bottom",1,"custom-image",3,"click"],["src","../../../../assets/images/pdf.svg","alt","Button Image"],["pButton","","type","button","pTooltip","Excel","tooltipPosition","bottom",1,"custom-image",3,"click"],["src","../../../../assets/images/excel.svg","alt","Button Image"],[1,"flex","justify-content-between","align-items-center","head1"],["pSortableColumn","employeeId"],["field","employeeId"],["pSortableColumn","travelFrom"],["field","travelFrom"],["pSortableColumn","travelTo"],["field","travelTo"],["pSortableColumn","journeyDate"],["field","journeyDate"],["pSortableColumn","returnDate"],["field","returnDate"],["pSortableColumn","addedBy"],["field","addedBy"],["pSortableColumn","createdAt"],["field","createdAt"],["pSortableColumn","modifiedBy"],["field","modifiedBy"],["pSortableColumn","updatedAt"],["field","updatedAt"],[1,"text-center"],[1,"p-column-title"],[2,"display","flex","align-items","center"],["pTooltip","Edit Travel","tooltipPosition","bottom",2,"margin-right","15px","cursor","pointer"],["src","../../../../assets/images/edit.svg","alt","img",3,"routerLink","queryParams"],["pTooltip","Delete Travel","tooltipPosition","bottom","href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","../../../../assets/images/delete.svg","alt","img"],["colspan","12",1,"text-danger"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h4"),e._uU(4,"Travel Expense List"),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"span",4),e._UZ(7,"button",5),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"p-table",6,7),e.YNc(10,W,11,0,"ng-template",8),e.YNc(11,ee,42,0,"ng-template",9),e.YNc(12,re,33,27,"ng-template",10),e.YNc(13,ne,3,0,"ng-template",11),e.qZA()),2&t&&(e.xp6(7),e.Q6J("routerLink",e.DdM(8,le)),e.xp6(1),e.Q6J("columns",o.cols)("paginator",!0)("rows",5)("showCurrentPageReport",!0)("value",o.travelData)("responsive",!0)("globalFilterFields",e.DdM(9,ae)))},directives:[K.Hq,p.rH,A.iA,G.jx,H.o,X.u,A.lQ,A.fz],pipes:[m.uU],styles:['[_nghost-%COMP%]  .captionFilter p-columnFilter .p-column-filter>button:before{content:"Filter";margin-right:10px}[_nghost-%COMP%]  .captionFilter p-columnFilter .p-column-filter>button{width:100px;height:40px;border-radius:3px;font-size:large;margin:1px 5px 1px 1px;padding:15px 20px;border:1px solid #ced4da}.page-heading[_ngcontent-%COMP%]{padding:0}.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;letter-spacing:1.2px;word-spacing:.1rem}.add-button-rating[_ngcontent-%COMP%]{background-color:#f52e2e;color:#fff;border:none}.add-button-rating[_ngcontent-%COMP%]:hover{background-color:#f08080;color:#fff;border:none}.custom-image[_ngcontent-%COMP%], .custom-image[_ngcontent-%COMP%]:hover{background:none;border:none}.input-container[_ngcontent-%COMP%]{position:relative;border:.5px solid rgba(145,158,171,.32)!important}.input-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding-left:30px;font-size:.875rem}.custom-image[_ngcontent-%COMP%]{background:none;border:none}[_nghost-%COMP%]  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight{background-color:#e41c1c;margin-bottom:10px;margin-top:10px;border-radius:5px}  .p-paginator{background:white!important;border:none!important}.head1[_ngcontent-%COMP%]{color:#000;text-align:center}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:none!important;border-bottom:1px solid #d7c6c6!important;background-color:#fff!important;color:#000!important;justify-content:center}  .edit-delete-button{background-color:#fff!important;border:none!important}  .p-datatable .p-datatable-header{background:white;border:none}[_nghost-%COMP%]  .p-datatable .p-sortable-column .p-sortable-column-icon{color:#848484}[_nghost-%COMP%]  .p-datatable .p-sortable-column.p-highlight:hover .p-sortable-column-icon{color:#848484}.input-container-img[_ngcontent-%COMP%]{position:absolute;left:10px;top:50%;transform:translateY(-50%);width:20px;height:20px;cursor:pointer}.input-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding-left:30px;font-size:.875rem;height:37px}']}),r})()},{path:"travel-delete",component:b},{path:"add-travel",component:w},{path:"edit-travel",component:B}];let de=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[p.Bz.forChild(ie)],p.Bz]}),r})();var se=d(529),ce=d(4834);let pe=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[m.ez,de,v.Js,u.Is,_.ot,se.m,a.u5,ce.t]]}),r})()}}]);