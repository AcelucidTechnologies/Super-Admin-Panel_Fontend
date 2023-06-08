"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[389],{4263:(ie,h,r)=>{r.r(h),r.d(h,{ReviewerModule:()=>ee});var m=r(9808),T=r(529),u=r(1083),f=r(574),A=r(4327),R=r(3583),C=r(2983),_=r.n(C),e=r(5e3),p=r(8966),Z=r(7423);let q=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-lead-view"]],decls:10,vars:1,consts:[["mat-dialog-title",""],[1,"mat-typography"],["align","end"],["mat-button","",1,"dialog1","mr-2",3,"mat-dialog-close"],["mat-button","","mat-dialog-close","",1,"dialog2"]],template:function(t,o){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Delete Reviewer's Details"),e.qZA(),e.TgZ(2,"mat-dialog-content",1),e.TgZ(3,"h3"),e._uU(4,"Do you want to delete this Record?"),e.qZA(),e.qZA(),e.TgZ(5,"mat-dialog-actions",2),e.TgZ(6,"button",3),e._uU(7,"Yes"),e.qZA(),e.TgZ(8,"button",4),e._uU(9,"Cancel"),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.Q6J("mat-dialog-close",!0))},directives:[p.uh,p.xY,p.H8,Z.lW,p.ZT],styles:["mat-dialog-content[_ngcontent-%COMP%]{width:600px}[_nghost-%COMP%]  .dialog1{background:#e41c1c;color:#fff;border-radius:5px;outline:none}.dialog2[_ngcontent-%COMP%]{color:#fff;background:#637381;border-radius:5px;outline:none}.mat-dialog-title[_ngcontent-%COMP%], .mat-dialog-content[_ngcontent-%COMP%]{text-align:center}.mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),i})();var c=r(520),g=r(2340);let w=(()=>{class i{constructor(t){this.http=t}getReviewerList(){const t=localStorage.getItem("token")||"",o=localStorage.getItem("email");let n=(new c.WM).set("x-access-token",t);return this.http.get(`${g.N.JSON_SERVER}/getReviewerList?username=${o}`,{headers:n})}getReviewerDetails(t){const o=localStorage.getItem("token")||"";let n=(new c.WM).set("x-access-token",o);return this.http.get(`${g.N.JSON_SERVER}/getReviewerListById?id=${t}`,{headers:n})}getReviewerDetailsById(t){const o=localStorage.getItem("token")||"";let n=(new c.WM).set("x-access-token",o);return this.http.get(`${g.N.JSON_SERVER}/getReviewerListById?id=${t}`,{headers:n})}submitReviewerDetail(t){const o=localStorage.getItem("token")||"";let n=(new c.WM).set("x-access-token",o);return this.http.post(`${g.N.JSON_SERVER}/createReviewerList`,t,{headers:n})}submitEditedDetails(t,o){const n=localStorage.getItem("token")||"";let s=(new c.WM).set("x-access-token",n);return this.http.put(`${g.N.JSON_SERVER}/updateReviewerList?id=${o}`,t,{headers:s})}deleteReviewerDetails(t){const o=localStorage.getItem("token")||"";let n=(new c.WM).set("x-access-token",o);return this.http.delete(`${g.N.JSON_SERVER}/deleteReviewerList?id=${t}`,{headers:n})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(c.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var y=r(7650),S=r(8441),U=r(2888),M=r(845),v=r(4851),P=r(9783),O=r(1424),F=r(4119);const D=["dt"];function E(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",12),e.TgZ(1,"div",13),e.TgZ(2,"div",14),e._UZ(3,"img",15),e.TgZ(4,"input",16,17),e.NdJ("input",function(n){return e.CHM(t),e.oxw().applyFilterGlobal(n,"contains")}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div"),e.TgZ(7,"button",18),e.NdJ("click",function(){return e.CHM(t),e.oxw().exportPdf()}),e._UZ(8,"img",19),e.qZA(),e.TgZ(9,"button",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().exportExcel()}),e._UZ(10,"img",21),e.qZA(),e.qZA(),e.qZA()}}function k(i,a){1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"th"),e.TgZ(2,"div",22),e._uU(3," S.No. "),e.qZA(),e.qZA(),e.TgZ(4,"th",23),e.TgZ(5,"div",22),e._uU(6," Name "),e._UZ(7,"p-sortIcon",24),e.qZA(),e.qZA(),e.TgZ(8,"th",25),e.TgZ(9,"div",22),e._uU(10," Email "),e._UZ(11,"p-sortIcon",26),e.qZA(),e.qZA(),e.TgZ(12,"th",27),e.TgZ(13,"div",22),e._uU(14," Rating "),e._UZ(15,"p-sortIcon",28),e.qZA(),e.qZA(),e.TgZ(16,"th",29),e.TgZ(17,"div",22),e._uU(18," First Rating "),e._UZ(19,"p-sortIcon",30),e.qZA(),e.qZA(),e.TgZ(20,"th",31),e.TgZ(21,"div",22),e._uU(22," Status "),e._UZ(23,"p-sortIcon",32),e.qZA(),e.qZA(),e.TgZ(24,"th",33),e._uU(25,"Action"),e.qZA(),e.qZA())}const b=function(){return["/reviewer/reviewerform"]},N=function(i){return{id:i}};function I(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"span",34),e._uU(3,"Sr.no"),e.qZA(),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"lowercase"),e.ALo(14,"date"),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e.TgZ(18,"a",35),e._UZ(19,"img",36),e.qZA(),e.TgZ(20,"a",37),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().openDialog(s)}),e._UZ(21,"img",38),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=a.$implicit,o=a.rowIndex;e.xp6(4),e.hij(" ",o+1," "),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.ratingCount),e.xp6(2),e.Oqu(e.lcZ(13,8,e.xi3(14,10,t.firstRating,"short"))),e.xp6(4),e.Oqu(t.status),e.xp6(3),e.Q6J("routerLink",e.DdM(13,b))("queryParams",e.VKq(14,N,t._id))}}function J(i,a){1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"td",39),e._uU(2,"No records to show"),e.qZA(),e.qZA())}const L=function(){return["name","email","ratingCount"]};let Y=(()=>{class i{constructor(t,o,n,s,d){this.reviewerService=t,this.toastr=o,this.ngxLoader=n,this.dialog=s,this.permissionService=d,this.sidebarSpacing="contracted",this.statusList=["Active","Inactive"],this.permissionService.getModulePermission().subscribe(te=>{this.accessPermission=te[0].ReviewerList,console.log(this.accessPermission)}),this.getReviewerData()}ngOnInit(){this.cols=[{headers:"Name",field:"name"},{headers:"Email",field:"email"},{headers:"Rating",field:"ratingCount"},{headers:"First Rating",field:"firstRating"},{headers:"status",field:"status"}],this.exportColumns=this.cols.map(t=>({title:t.headers,dataKey:t.field}))}getReviewerData(){this.reviewerService.getReviewerList().subscribe(t=>{this.reviewerData=t,console.log("51",this.reviewerData)})}openDialog(t){this.dialog.open(q).afterClosed().subscribe(n=>{1==n&&this.deleteReviewDetails(t)})}deleteReviewDetails(t){this.reviewerService.deleteReviewerDetails(t._id).subscribe(o=>{o&&(this.toastr.showSuccess("reviewer deleted successfully","reviewer deleted"),this.getReviewerData())})}exportExcel(){const o={Sheets:{data:f.utils.json_to_sheet(this.reviewerData)},SheetNames:["data"]},n=f.write(o,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(n,"reviewers")}saveAsExcelFile(t,o){const d=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});A.saveAs(d,o+"_export_"+(new Date).getTime()+".xlsx")}exportPdf(){this.reviewerDetails=this.reviewerData,console.log(this.reviewerDetails);const t=new R.jsPDF("l","pt");_()(t,{columns:this.exportColumns,body:this.reviewerDetails}),t.save("reviewers.pdf")}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}applyFilterGlobal(t,o){this.dt.filterGlobal(t.target.value,o)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(w),e.Y36(y.$),e.Y36(S.LA),e.Y36(p.uw),e.Y36(U.y))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-reviewer"]],viewQuery:function(t,o){if(1&t&&e.Gf(D,5),2&t){let n;e.iGM(n=e.CRH())&&(o.dt=n.first)}},decls:14,vars:11,consts:[[1,"container","page-heading"],[1,"row","mb-2","mt-2"],[1,"col-6"],[1,"col-6","text-right"],[1,"p-input-icon-right","ml-5"],["pButton","","type","button","label"," + Add Reviewer",1,"add-button-rating",3,"routerLink","disabled"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","showCurrentPageReport","value","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"d-flex","justify-content-between"],[1,"d-flex","align-items-center","p-0"],[1,"input-container"],["src","../../../assets/images/search-white.svg",1,"input-container-img"],["pInputText","","type","text","placeholder","Search...",3,"input"],["search",""],["pButton","","type","button","pTooltip","Pdf","tooltipPosition","bottom",1,"custom-image",3,"click"],["src","../../../../assets/images/pdf.svg","alt","Button Image"],["pButton","","type","button","pTooltip","Excel","tooltipPosition","bottom",1,"custom-image",3,"click"],["src","../../../../assets/images/excel.svg","alt","Button Image"],[1,"flex","justify-content-between","align-items-center","head1"],["pSortableColumn","name"],["field","name"],["pSortableColumn","email"],["field","email"],["pSortableColumn","ratingCount"],["field","ratingCount"],["pSortableColumn","firstRating"],["field","firstRating"],["pSortableColumn","status"],["field","status"],[1,"text-center"],[1,"p-column-title"],["pTooltip","Edit Reviewer","tooltipPosition","bottom",2,"margin-right","15px","cursor","pointer"],["src","../../../../assets/images/edit.svg","alt","img",3,"routerLink","queryParams"],["pTooltip","Delete Reviewer","tooltipPosition","bottom","href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","../../../../assets/images/delete.svg","alt","img"],["colspan","12",1,"text-danger"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h4"),e._uU(4,"Reviewer List"),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"span",4),e._UZ(7,"button",5),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"p-table",6,7),e.YNc(10,E,11,0,"ng-template",8),e.YNc(11,k,26,0,"ng-template",9),e.YNc(12,I,22,16,"ng-template",10),e.YNc(13,J,3,0,"ng-template",11),e.qZA()),2&t&&(e.xp6(7),e.Q6J("routerLink",e.DdM(9,b))("disabled",!(null!=o.accessPermission&&o.accessPermission.add)),e.xp6(1),e.Q6J("columns",o.cols)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("value",o.reviewerData)("responsive",!0)("globalFilterFields",e.DdM(10,L)))},directives:[M.Hq,u.rH,v.iA,P.jx,O.o,F.u,v.lQ,v.fz],pipes:[m.i8,m.uU],styles:['[_nghost-%COMP%]  .captionFilter p-columnFilter .p-column-filter>button:before{content:"Filter";margin-right:10px}[_nghost-%COMP%]  .captionFilter p-columnFilter .p-column-filter>button{width:100px;height:40px;border-radius:3px;font-size:large;margin:1px 5px 1px 1px;padding:15px 20px;border:1px solid #ced4da}.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;letter-spacing:1.2px;word-spacing:.1rem}.add-button-rating[_ngcontent-%COMP%]{background-color:#f52e2e;color:#fff;border:none}.add-button-rating[_ngcontent-%COMP%]:hover{background-color:#f08080;color:#fff;border:none}.custom-image[_ngcontent-%COMP%], .custom-image[_ngcontent-%COMP%]:hover{background:none;border:none}.input-container[_ngcontent-%COMP%]{position:relative;border:.5px solid rgba(145,158,171,.32)!important}.input-container-img[_ngcontent-%COMP%]{position:absolute;left:10px;top:50%;transform:translateY(-50%);width:20px;height:20px;cursor:pointer}.input-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding-left:30px;font-size:.875rem}.custom-image[_ngcontent-%COMP%]{background:none;border:none}[_nghost-%COMP%]  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight{background-color:#e41c1c;margin-bottom:10px;margin-top:10px;border-radius:5px}  .p-paginator{background:white!important;border:none!important}.head1[_ngcontent-%COMP%]{color:#000;text-align:center}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:none!important;border-bottom:1px solid #d7c6c6!important;background-color:#fff!important;color:#000!important;justify-content:center}  .edit-delete-button{background-color:#fff!important;border:none!important}  .p-datatable .p-datatable-header{background:white;border:none}']}),i})();var l=r(3075),j=r(4036);function Q(i,a){if(1&i&&(e.TgZ(0,"div"),e.TgZ(1,"div",25),e._uU(2," Name is required "),e.qZA(),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.reviewerForm.controls.name.errors.required)}}function z(i,a){1&i&&(e.TgZ(0,"div",28),e._uU(1," Please enter valid email "),e.qZA())}function $(i,a){if(1&i&&(e.TgZ(0,"div"),e.TgZ(1,"div",26),e._uU(2," email is required "),e.qZA(),e.YNc(3,z,2,0,"div",27),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.reviewerForm.controls.email.errors.required),e.xp6(2),e.Q6J("ngIf",t.reviewerForm.controls.email.errors.email)}}function B(i,a){if(1&i&&(e.TgZ(0,"div"),e.TgZ(1,"div",25),e._uU(2," Status is required "),e.qZA(),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.reviewerForm.controls.reviewerStatus.errors.required)}}const x=function(){return["/reviewer/reviewerlist"]},V=[{path:"reviewerlist",component:Y},{path:"reviewerform",component:(()=>{class i{constructor(t,o,n,s){this.reviewerService=t,this.fb=o,this.route=n,this.activatedRoute=s,this.sidebarSpacing="contracted",this.statusList=["Active","Inactive"],this.editMode=!1,this.reviewerForm=this.fb.group({name:["",[l.kI.required]],email:["",[l.kI.required,l.kI.email]],reviewerStatus:["",[l.kI.required]]}),this.activatedRoute.queryParamMap.subscribe(d=>{this.id=d.get("id"),this.id&&null!=this.id?(this.editMode=!0,this.title="Edit Rating",this.update="Update"):this.editMode=!1})}ngOnInit(){this.getReviewerDetail()}getReviewerDetail(){this.reviewerService.getReviewerDetailsById(this.id).subscribe(t=>{this.reviewerForm.patchValue({name:t.name,email:t.email,reviewerStatus:t.status})})}submit(){let t={username:localStorage.getItem("email"),name:this.reviewerForm.controls.name.value,email:this.reviewerForm.controls.email.value,status:this.reviewerForm.controls.reviewerStatus.value};this.id?this.submitEditedDetails(t):this.submitDetails(t)}submitEditedDetails(t){let o=Object.assign({},t);this.reviewerService.submitEditedDetails(o,this.id).subscribe(n=>{n&&this.route.navigate(["/reviewer/reviewerlist"])})}submitDetails(t){let o=Object.assign({},t);this.reviewerService.submitReviewerDetail(o).subscribe(n=>{n&&this.route.navigate(["/reviewer/reviewerlist"])})}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}capitalizeFirstLetter(t){const n=t.target.value;if(n.length>0){const s=n.charAt(0).toUpperCase()+n.slice(1);this.reviewerForm.patchValue({name:s})}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(w),e.Y36(l.qu),e.Y36(u.F0),e.Y36(u.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-edit-reviewer"]],decls:43,vars:11,consts:[[2,"height","700px","margin-bottom","100px"],[1,"page-heading"],[1,"button-heading-container"],[1,"mb-2","p-1","back-button",3,"routerLink"],[1,"material-icons"],[1,"d-flex","justify-content-center"],[1,"card",2,"width","1000px","height","500px"],[1,"p-5"],[1,"card-body","h-100","pl-4",2,"width","800px","margin","auto"],[1,"mt-3","mb-5"],[3,"formGroup"],[1,"form-row","ml-3","mt-4"],[1,"col-1"],["for","reviewerName",1,"text-center","starlabel","mb-4"],[1,"col-10"],["type","text","id","reviewerName","formControlName","name","placeholder","enter name..",1,"form-control",3,"input"],[4,"ngIf"],["for","reviewerEmail",1,"text-center","starlabel","mb-4"],["type","text","id","reviewerEmail","formControlName","email","placeholder","enter email..",1,"form-control"],["for","status",1,"text-center","starlabel","mb-4"],["styleClass","statusDropdown","placeholder","Select status","formControlName","reviewerStatus",3,"options"],[1,"row"],[1,"d-flex","justify-content-end","col-11","mt-4"],["type","submit",1,"btn","btn-info","mr-3",2,"background","rgb(228, 28, 28)","border","none",3,"disabled","click"],[1,"btn","btn-info",2,"background","#637381","border","none",3,"routerLink"],[2,"font-size","smaller","color","rgb(253, 122, 122)","font-style","italic",3,"hidden"],[2,"color","rgb(253, 122, 122)","font-size","small","font-style","italic",3,"hidden"],["style","\n                      color: rgb(253, 122, 122);\n                      font-size: small;\n                      font-style: italic;\n                    ",4,"ngIf"],[2,"color","rgb(253, 122, 122)","font-size","small","font-style","italic"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"button",3),e.TgZ(4,"i",4),e._uU(5,"arrow_back"),e.qZA(),e.qZA(),e.TgZ(6,"h5"),e._uU(7,"\xa0Reviewer Details"),e.qZA(),e.qZA(),e.TgZ(8,"div",5),e.TgZ(9,"div",6),e.TgZ(10,"div",7),e.TgZ(11,"div",8),e.TgZ(12,"div",9),e.TgZ(13,"h4"),e._uU(14),e.qZA(),e.qZA(),e.TgZ(15,"form",10),e.TgZ(16,"div",11),e.TgZ(17,"div",12),e.TgZ(18,"label",13),e._uU(19,"Name"),e.qZA(),e.qZA(),e.TgZ(20,"div",14),e.TgZ(21,"input",15),e.NdJ("input",function(s){return o.capitalizeFirstLetter(s)}),e.qZA(),e.YNc(22,Q,3,1,"div",16),e.qZA(),e.qZA(),e.TgZ(23,"div",11),e.TgZ(24,"div",12),e.TgZ(25,"label",17),e._uU(26,"Email"),e.qZA(),e.qZA(),e.TgZ(27,"div",14),e._UZ(28,"input",18),e.YNc(29,$,4,2,"div",16),e.qZA(),e.qZA(),e.TgZ(30,"div",11),e.TgZ(31,"div",12),e.TgZ(32,"label",19),e._uU(33,"Status"),e.qZA(),e.qZA(),e.TgZ(34,"div",14),e._UZ(35,"p-dropdown",20),e.YNc(36,B,3,1,"div",16),e.qZA(),e.qZA(),e.TgZ(37,"div",21),e.TgZ(38,"div",22),e.TgZ(39,"button",23),e.NdJ("click",function(){return o.submit()}),e._uU(40," Update "),e.qZA(),e.TgZ(41,"button",24),e._uU(42," Cancel "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("routerLink",e.DdM(9,x)),e.xp6(11),e.hij("",o.title," Reviewer"),e.xp6(1),e.Q6J("formGroup",o.reviewerForm),e.xp6(7),e.Q6J("ngIf",!o.reviewerForm.controls.name.valid&&o.reviewerForm.controls.name.touched),e.xp6(7),e.Q6J("ngIf",!o.reviewerForm.controls.email.valid&&(o.reviewerForm.controls.email.touched||o.reviewerForm.controls.email.dirty)),e.xp6(6),e.Q6J("options",o.statusList),e.xp6(1),e.Q6J("ngIf",!o.reviewerForm.controls.reviewerStatus.valid&&o.reviewerForm.controls.reviewerStatus.touched),e.xp6(3),e.Q6J("disabled",!o.reviewerForm.valid),e.xp6(2),e.Q6J("routerLink",e.DdM(10,x)))},directives:[u.rH,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,m.O5,j.Lt],styles:['[_nghost-%COMP%]  .statusDropdown{width:100%}[_nghost-%COMP%]  label.starlabel:after{content:"*";color:#e41c1c}.button-heading-container[_ngcontent-%COMP%]{display:flex;align-items:center}.back-button[_ngcontent-%COMP%]{background:#e41c1c;color:#fff;border:none;border-radius:5px;margin-left:80px;width:40px}  .back-button:hover{background-color:#f08080!important}  .p-dropdown{border:1px solid lightgray}']}),i})()}];let H=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[m.ez,u.Bz.forChild(V)]]}),i})();var G=r(6526),W=r(9224),X=r(9114),K=r(3407);let ee=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[m.ez,T.m,H,G.q4,W.QW,v.U$,K.A,X.D,p.Is,Z.ot]]}),i})()}}]);