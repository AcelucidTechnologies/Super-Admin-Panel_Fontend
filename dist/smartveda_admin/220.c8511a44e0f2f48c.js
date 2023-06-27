"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[220],{7220:($,_,a)=>{a.r(_),a.d(_,{DocumentModule:()=>K});var f=a(9808),u=a(1083),r=a(3075),t=a(5e3),m=a(8441),A=a(7650),h=a(1561);const T=function(){return["/documents/document-list"]};let y=(()=>{class o{constructor(e,n,i,d,c){this.ngxLoader=e,this.fb=n,this.toastr=i,this.leaveservice=d,this.route=c,this.selectForm=this.fb.group({username:localStorage.getItem("email"),employee:["",[r.kI.required]],fileDescription:["",[r.kI.required]],toview:["",[r.kI.required]],toDownload:["",[r.kI.required]],folderName:[""],fileName:[""]})}getMinimumDate(){const e=new Date;return e.setDate(e.getDate()),e.toISOString().split("T")[0]}ngOnInit(){}submit(){this.ngxLoader.start(),this.leaveservice.createDocument(this.selectForm.value).subscribe(e=>{this.assetlist=e,e&&(this.ngxLoader.start(),this.toastr.showSuccess("Document added successfully","Document Added"))})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.LA),t.Y36(r.qu),t.Y36(A.$),t.Y36(h.e),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-document"]],decls:79,vars:8,consts:[[1,"button-heading-container"],[1,"mb-2","back-button",3,"routerLink"],[1,"material-icons"],[1,"card","pl-4","pr-4","pb-3","pt-5"],[3,"formGroup"],[1,"row","mb-4"],[1,"col-6"],[1,"row"],[1,"col-4"],[1,"starlabel"],[1,"col-8"],["formControlName","employee","placeholder","Enter name","type","file",1,"form-control","custom-placeholder","input-padding"],["formControlName","fileName","placeholder","Enter file name","type","text",1,"form-control","custom-placeholder","input-padding"],["formControlName","employee","placeholder","Enter Employee","type","text",1,"form-control","custom-placeholder","input-padding"],["formControlName","folderName","placeholder","Enter folder name","type","text",1,"form-control","custom-placeholder","input-padding"],[1,"col-2"],[1,"col-10"],["name","editor1","placeholder","Enter asset details","formControlName","fileDescription",1,"form-control","custom-placeholder",2,"width","100%","height","100px"],["type","checkbox","formControlName","toDownload"],[2,"padding-left","5px"],[1,"row","mb-5","mt-4"],[1,"d-flex","justify-content-end","col-11","mt-4"],["type","submit",1,"btn","btn-info","mr-3",2,"background","rgb(228, 28, 28)","border","none",3,"disabled","routerLink","click"],[1,"btn","btn-info",2,"background","#637381","border","none",3,"routerLink"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t.TgZ(2,"i",2),t._uU(3,"arrow_back"),t.qZA(),t.qZA(),t.TgZ(4,"h5"),t._uU(5,"\xa0Add Document"),t.qZA(),t.qZA(),t.TgZ(6,"div",3),t.TgZ(7,"form",4),t.TgZ(8,"div",5),t.TgZ(9,"div",6),t.TgZ(10,"div",7),t.TgZ(11,"div",8),t.TgZ(12,"label",9),t._uU(13,"File Browse"),t.qZA(),t.qZA(),t.TgZ(14,"div",10),t._UZ(15,"input",11),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",6),t.TgZ(17,"div",7),t.TgZ(18,"div",8),t.TgZ(19,"label",9),t._uU(20,"File Name"),t.qZA(),t.qZA(),t.TgZ(21,"div",10),t._UZ(22,"input",12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",5),t.TgZ(24,"div",6),t.TgZ(25,"div",7),t.TgZ(26,"div",8),t.TgZ(27,"label",9),t._uU(28,"Employee"),t.qZA(),t.qZA(),t.TgZ(29,"div",10),t._UZ(30,"input",13),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"div",6),t.TgZ(32,"div",7),t.TgZ(33,"div",8),t.TgZ(34,"label",9),t._uU(35,"Folder Name"),t.qZA(),t.qZA(),t.TgZ(36,"div",10),t._UZ(37,"input",14),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"div",5),t.TgZ(39,"div",15),t.TgZ(40,"label",9),t._uU(41,"File Description"),t.qZA(),t.qZA(),t.TgZ(42,"div",16),t._UZ(43,"textarea",17),t.qZA(),t.qZA(),t.TgZ(44,"div",5),t.TgZ(45,"div",15),t.TgZ(46,"label",9),t._uU(47,"File Permission"),t.qZA(),t.qZA(),t.TgZ(48,"div",16),t.TgZ(49,"div",7),t.TgZ(50,"div",15),t.TgZ(51,"b"),t._uU(52,"To View"),t.qZA(),t.qZA(),t.TgZ(53,"div",15),t._UZ(54,"input",18),t.TgZ(55,"label",19),t._uU(56,"Employee"),t.qZA(),t.qZA(),t.TgZ(57,"div",8),t._UZ(58,"input",18),t.TgZ(59,"label",19),t._uU(60,"Reporting Manager"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(61,"div",7),t.TgZ(62,"div",15),t.TgZ(63,"b"),t._uU(64,"To Download"),t.qZA(),t.qZA(),t.TgZ(65,"div",15),t._UZ(66,"input",18),t.TgZ(67,"label",19),t._uU(68,"Employee"),t.qZA(),t.qZA(),t.TgZ(69,"div",8),t._UZ(70,"input",18),t.TgZ(71,"label",19),t._uU(72,"Reporting Manager"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(73,"div",20),t.TgZ(74,"div",21),t.TgZ(75,"button",22),t.NdJ("click",function(){return n.submit()}),t._uU(76,"Submit"),t.qZA(),t.TgZ(77,"button",23),t._uU(78,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(5,T)),t.xp6(6),t.Q6J("formGroup",n.selectForm),t.xp6(68),t.Q6J("disabled",!n.selectForm.valid)("routerLink",t.DdM(6,T)),t.xp6(2),t.Q6J("routerLink",t.DdM(7,T)))},directives:[u.rH,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Wl],styles:['.back-button[_ngcontent-%COMP%]{background:#e41c1c;color:#fff;border:none;padding:5px;border-radius:5px;width:40px}  .back-button:hover{background-color:#f08080!important}.button-heading-container[_ngcontent-%COMP%]{display:flex;align-items:center}label.starlabel[_ngcontent-%COMP%]:after{content:"*";color:#e41c1c}.custom-placeholder[_ngcontent-%COMP%]::placeholder{color:#495057}.checkbox-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{margin-right:5px;margin-bottom:4px}']}),o})();var p=a(8966),D=a(7423);let x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dialog-document"]],decls:10,vars:1,consts:[["mat-dialog-title",""],[1,"mat-typography"],["align","end"],["mat-button","",1,"dialog1","mr-2",3,"mat-dialog-close"],["mat-button","","mat-dialog-close","",1,"dialog2"]],template:function(e,n){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Delete Document Details"),t.qZA(),t.TgZ(2,"mat-dialog-content",1),t.TgZ(3,"h3"),t._uU(4,"Do you want to delete this Record?"),t.qZA(),t.qZA(),t.TgZ(5,"mat-dialog-actions",2),t.TgZ(6,"button",3),t._uU(7,"Yes"),t.qZA(),t.TgZ(8,"button",4),t._uU(9,"Cancel"),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("mat-dialog-close",!0))},directives:[p.uh,p.xY,p.H8,D.lW,p.ZT],styles:["mat-dialog-content[_ngcontent-%COMP%]{width:600px}[_nghost-%COMP%]  .dialog1{background:#e41c1c;color:#fff;border-radius:5px;outline:none}.dialog2[_ngcontent-%COMP%]{color:#fff;background:#637381;border-radius:5px;outline:none}.mat-dialog-title[_ngcontent-%COMP%], .mat-dialog-content[_ngcontent-%COMP%]{text-align:center}.mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),o})();var C=a(3583),Z=a(574),U=a(2983),w=a.n(U),M=a(845),v=a(4851),k=a(9783),P=a(1424),O=a(4119);const L=["dt"];function F(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",12),t.TgZ(1,"div",13),t.TgZ(2,"div",14),t._UZ(3,"img",15),t.TgZ(4,"input",16,17),t.NdJ("input",function(i){return t.CHM(e),t.oxw().applyFilterGlobal(i,"contains")}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div"),t.TgZ(7,"button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().exportPdf()}),t._UZ(8,"img",19),t.qZA(),t.TgZ(9,"button",20),t.NdJ("click",function(){return t.CHM(e),t.oxw().exportExcel()}),t._UZ(10,"img",21),t.qZA(),t.qZA(),t.qZA()}}function N(o,l){1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"th"),t.TgZ(2,"div",22),t._uU(3," S.No. "),t.qZA(),t.qZA(),t.TgZ(4,"th",23),t.TgZ(5,"div",22),t._uU(6," Employee Name "),t._UZ(7,"p-sortIcon",24),t.qZA(),t.qZA(),t.TgZ(8,"th",25),t.TgZ(9,"div",22),t._uU(10," File Description "),t._UZ(11,"p-sortIcon",26),t.qZA(),t.qZA(),t.TgZ(12,"th",27),t.TgZ(13,"div",22),t._uU(14," view "),t._UZ(15,"p-sortIcon",28),t.qZA(),t.qZA(),t.TgZ(16,"th",29),t.TgZ(17,"div",22),t._uU(18," Download "),t._UZ(19,"p-sortIcon",30),t.qZA(),t.qZA(),t.TgZ(20,"th",29),t.TgZ(21,"div",22),t._uU(22," Download File "),t._UZ(23,"p-sortIcon",30),t.qZA(),t.qZA(),t.TgZ(24,"th",31),t.TgZ(25,"div",22),t._uU(26," Added By "),t._UZ(27,"p-sortIcon",32),t.qZA(),t.qZA(),t.TgZ(28,"th",33),t.TgZ(29,"div",22),t._uU(30," Added Time "),t._UZ(31,"p-sortIcon",34),t.qZA(),t.qZA(),t.TgZ(32,"th",31),t.TgZ(33,"div",22),t._uU(34," Modified By "),t._UZ(35,"p-sortIcon",32),t.qZA(),t.qZA(),t.TgZ(36,"th",35),t.TgZ(37,"div",22),t._uU(38," Modified Time "),t._UZ(39,"p-sortIcon",36),t.qZA(),t.qZA(),t.TgZ(40,"th",37),t._uU(41,"Action"),t.qZA(),t.qZA())}const E=function(){return["/documents/edit-document"]},S=function(o){return{id:o}};function I(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t.TgZ(2,"span",38),t._uU(3,"Sr.no"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.ALo(19,"date"),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.ALo(24,"date"),t.qZA(),t.TgZ(25,"td"),t.TgZ(26,"div",39),t.TgZ(27,"a",40),t._UZ(28,"img",41),t.qZA(),t.TgZ(29,"a",42),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().openDialog(d)}),t._UZ(30,"img",43),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=l.$implicit,n=l.rowIndex;t.xp6(4),t.hij(" ",n+1," "),t.xp6(2),t.Oqu(e.employee),t.xp6(2),t.Oqu(e.fileDescription),t.xp6(2),t.Oqu(e.toview),t.xp6(2),t.Oqu(e.toDownload),t.xp6(2),t.Oqu(e.image),t.xp6(2),t.Oqu(e.addedBy),t.xp6(2),t.Oqu(t.xi3(19,12,e.createdAt,"MM/dd/yyyy")),t.xp6(3),t.Oqu(e.addedBy),t.xp6(2),t.Oqu(t.xi3(24,15,e.updatedAt,"MM/dd/yyyy")),t.xp6(5),t.Q6J("routerLink",t.DdM(18,E))("queryParams",t.VKq(19,S,e._id))}}function B(o,l){1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td",44),t._uU(2,"No records to show"),t.qZA(),t.qZA())}const J=function(){return["/documents/add-document"]},Y=function(){return["employee","fileDescription","toDownload","toview","addedBy","createdAt","updatedAt"]},q=function(){return["/documents/document-list"]},R=[{path:"document-list",component:(()=>{class o{constructor(e,n,i,d){this.leaveService=e,this.toastr=n,this.ngxLoader=i,this.dialog=d,this.docuemntData=[],this.sidebarSpacing="contracted",this.statusList=["Active","Inactive"],this.getDocumentData()}ngOnInit(){}getDocumentData(){this.leaveService.getDocumentList().subscribe(e=>{this.docuemntData=e,console.log("51",this.docuemntData)})}openDialog(e){this.dialog.open(x).afterClosed().subscribe(i=>{1==i&&this.deleteDocumentDetails(e)})}deleteDocumentDetails(e){this.leaveService.deleteDocument(e._id).subscribe(n=>{n&&(this.toastr.showSuccess("Document deleted successfully","Document deleted"),this.getDocumentData())})}exportExcel(){const e=new f.uU("en-US"),n=this.docuemntData.map((s,z)=>({"S.No.":z+1,"Employee Id":s.employeeId,"File Description":s.fileDescription,view:s.toview,Download:s.toDownload,"Return Date":s.returnDate,"Added By":s.addedBy,AddedTime:e.transform(s.createdAt,"MM/dd/yyyy"),"Modified By":s.addedBy,ModifiedTime:e.transform(s.updatedAt,"MM/dd/yyyy")})),i=Z.utils.book_new(),d=Z.utils.json_to_sheet(n);Z.utils.book_append_sheet(i,d,"Sheet1");const c=this.workbookToBlob(i),b=URL.createObjectURL(c),g=document.createElement("a");g.href=b,g.download="table_data.xlsx",g.click(),URL.revokeObjectURL(b)}workbookToBlob(e){const n=Z.write(e,{bookType:"xlsx",type:"array"});return new Blob([n],{type:"application/octet-stream"})}exportPdf(){this.assetDetails=this.docuemntData.map((d,c)=>Object.assign({sno:c+1},d));const e=new C.jsPDF("l","pt"),n=this.assetDetails.map(d=>Object.assign(Object.assign({},d),{createdAt:this.formatDate(d.createdAt),updatedAt:this.formatDate(d.updatedAt)}));w()(e,{columns:[{title:"S No.",dataKey:"sno"},{title:"Employee Id",dataKey:"employeeId"},{title:"File Description ",dataKey:"fileDescription"},{title:"view",dataKey:"toview"},{title:"Download",dataKey:"toDownload"},{title:"Added By",dataKey:"addedBy"},{title:"AddedTime",dataKey:"createdAt"},{title:"Modified By",dataKey:"addedBy"},{title:"ModifiedTime",dataKey:"updatedAt"}],body:n}),e.save("Document List.pdf")}formatDate(e){const n=new Date(e);return`${String(n.getDate()).padStart(2,"0")}/${String(n.getMonth()+1).padStart(2,"0")}/${n.getFullYear()}`}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}applyFilterGlobal(e,n){const i=e.target.value;!i||/^\s*$/.test(i)?this.dt.filterGlobal("",n):this.dt.filterGlobal(i.trim(),n)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.e),t.Y36(A.$),t.Y36(m.LA),t.Y36(p.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-document-list"]],viewQuery:function(e,n){if(1&e&&t.Gf(L,5),2&e){let i;t.iGM(i=t.CRH())&&(n.dt=i.first)}},decls:14,vars:10,consts:[[1,"page-heading"],[1,"row","mb-2","mt-2"],[1,"col-6"],[1,"col-6","text-right"],[1,"p-input-icon-right","ml-5"],["pButton","","type","button","label"," + Add documents",1,"add-button-rating",3,"routerLink"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","showCurrentPageReport","value","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"d-flex","justify-content-between"],[1,"d-flex","align-items-center","p-0"],[1,"input-container"],["src","../../../assets/images/search-white.svg",1,"input-container-img"],["pInputText","","type","text","placeholder","Search...",3,"input"],["search",""],["pButton","","type","button","pTooltip","Pdf","tooltipPosition","bottom",1,"custom-image",3,"click"],["src","../../../../assets/images/pdf.svg","alt","Button Image"],["pButton","","type","button","pTooltip","Excel","tooltipPosition","bottom",1,"custom-image",3,"click"],["src","../../../../assets/images/excel.svg","alt","Button Image"],[1,"flex","justify-content-between","align-items-center","head1"],["pSortableColumn","employee"],["field","employee"],["pSortableColumn","fileDescription"],["field","fileDescription"],["pSortableColumn","toview"],["field","toview"],["pSortableColumn","toDownload"],["field","toDownload"],["pSortableColumn","addedBy"],["field","addedBy"],["pSortableColumn","createdAt"],["field","createdAt"],["pSortableColumn","updatedAt"],["field","updatedAt"],[1,"text-center"],[1,"p-column-title"],[2,"display","flex","align-items","center"],["pTooltip","Edit Document","tooltipPosition","bottom",2,"margin-right","15px","cursor","pointer"],["src","../../../../assets/images/edit.svg","alt","img",3,"routerLink","queryParams"],["pTooltip","Delete Document","tooltipPosition","bottom","href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","../../../../assets/images/delete.svg","alt","img"],["colspan","12",1,"text-danger"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h4"),t._uU(4,"Document List"),t.qZA(),t.qZA(),t.TgZ(5,"div",3),t.TgZ(6,"span",4),t._UZ(7,"button",5),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"p-table",6,7),t.YNc(10,F,11,0,"ng-template",8),t.YNc(11,N,42,0,"ng-template",9),t.YNc(12,I,31,21,"ng-template",10),t.YNc(13,B,3,0,"ng-template",11),t.qZA()),2&e&&(t.xp6(7),t.Q6J("routerLink",t.DdM(8,J)),t.xp6(1),t.Q6J("columns",n.cols)("paginator",!0)("rows",5)("showCurrentPageReport",!0)("value",n.docuemntData)("responsive",!0)("globalFilterFields",t.DdM(9,Y)))},directives:[M.Hq,u.rH,v.iA,k.jx,P.o,O.u,v.lQ,v.fz],pipes:[f.uU],styles:['[_nghost-%COMP%]  .captionFilter p-columnFilter .p-column-filter>button:before{content:"Filter";margin-right:10px}[_nghost-%COMP%]  .captionFilter p-columnFilter .p-column-filter>button{width:100px;height:40px;border-radius:3px;font-size:large;margin:1px 5px 1px 1px;padding:15px 20px;border:1px solid #ced4da}.page-heading[_ngcontent-%COMP%]{padding:0}.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;letter-spacing:1.2px;word-spacing:.1rem}.add-button-rating[_ngcontent-%COMP%]{background-color:#f52e2e;color:#fff;border:none}.add-button-rating[_ngcontent-%COMP%]:hover{background-color:#f08080;color:#fff;border:none}.custom-image[_ngcontent-%COMP%], .custom-image[_ngcontent-%COMP%]:hover{background:none;border:none}.input-container[_ngcontent-%COMP%]{position:relative;border:.5px solid rgba(145,158,171,.32)!important}.input-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding-left:30px;font-size:.875rem}.custom-image[_ngcontent-%COMP%]{background:none;border:none}[_nghost-%COMP%]  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight{background-color:#e41c1c;margin-bottom:10px;margin-top:10px;border-radius:5px}  .p-paginator{background:white!important;border:none!important}.head1[_ngcontent-%COMP%]{color:#000;text-align:center}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:none!important;border-bottom:1px solid #d7c6c6!important;background-color:#fff!important;color:#000!important;justify-content:center}  .edit-delete-button{background-color:#fff!important;border:none!important}  .p-datatable .p-datatable-header{background:white;border:none}[_nghost-%COMP%]  .p-datatable .p-sortable-column .p-sortable-column-icon{color:#848484}[_nghost-%COMP%]  .p-datatable .p-sortable-column.p-highlight:hover .p-sortable-column-icon{color:#848484}.input-container-img[_ngcontent-%COMP%]{position:absolute;left:10px;top:50%;transform:translateY(-50%);width:20px;height:20px;cursor:pointer}.input-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding-left:30px;font-size:.875rem;height:37px}']}),o})()},{path:"document-delete",component:x},{path:"add-document",component:y},{path:"edit-document",component:(()=>{class o{constructor(e,n,i,d,c,b){this.ngxLoader=e,this.fb=n,this.toastr=i,this.leaveservice=d,this.activatedRoute=c,this.route=b,this.activatedRoute.queryParamMap.subscribe(g=>{this.id=g.get("id")}),this.selectForm=this.fb.group({username:localStorage.getItem("email"),employee:["",[r.kI.required]],fileDescription:["",[r.kI.required]],toview:["",[r.kI.required]],toDownload:["",[r.kI.required]],folderName:[""],fileName:[""]})}getMinimumDate(){const e=new Date;return e.setDate(e.getDate()),e.toISOString().split("T")[0]}ngOnInit(){this.getEditByIDDetail()}getEditByIDDetail(){this.leaveservice.getDocumentById(this.id).subscribe(e=>{this.selectForm.patchValue({employee:e.employee,fileDescription:e.fileDescription,toview:e.toview,givenDate:e.givenDate,toDownload:e.toDownload,folderName:e.folderName,fileName:e.fileName})})}submit(){this.ngxLoader.start(),this.leaveservice.editDocumentList(this.selectForm.value,this.id).subscribe(e=>{this.assetlist=e,e&&(this.ngxLoader.start(),this.toastr.showSuccess("Document edited successfully","Document edited"))})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.LA),t.Y36(r.qu),t.Y36(A.$),t.Y36(h.e),t.Y36(u.gz),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-document"]],decls:79,vars:8,consts:[[1,"button-heading-container"],[1,"mb-2","back-button",3,"routerLink"],[1,"material-icons"],[1,"card","pl-4","pr-4","pb-3","pt-5"],[3,"formGroup"],[1,"row","mb-4"],[1,"col-6"],[1,"row"],[1,"col-4"],[1,"starlabel"],[1,"col-8"],["formControlName","employee","placeholder","Enter name","type","file",1,"form-control","custom-placeholder","input-padding"],["formControlName","fileName","placeholder","Enter file name","type","text",1,"form-control","custom-placeholder","input-padding"],["formControlName","employee","placeholder","Enter Employee","type","text",1,"form-control","custom-placeholder","input-padding"],["formControlName","folderName","placeholder","Enter Folder name","type","text",1,"form-control","custom-placeholder","input-padding"],[1,"col-2"],[1,"col-10"],["name","editor1","placeholder","Enter asset details","formControlName","fileDescription",1,"form-control","custom-placeholder",2,"width","100%","height","100px"],["type","checkbox","formControlName","toDownload"],[2,"padding-left","5px"],[1,"row","mb-5","mt-4"],[1,"d-flex","justify-content-end","col-11","mt-4"],["type","submit",1,"btn","btn-info","mr-3",2,"background","rgb(228, 28, 28)","border","none",3,"disabled","routerLink","click"],[1,"btn","btn-info",2,"background","#637381","border","none",3,"routerLink"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t.TgZ(2,"i",2),t._uU(3,"arrow_back"),t.qZA(),t.qZA(),t.TgZ(4,"h5"),t._uU(5,"\xa0Edit Document"),t.qZA(),t.qZA(),t.TgZ(6,"div",3),t.TgZ(7,"form",4),t.TgZ(8,"div",5),t.TgZ(9,"div",6),t.TgZ(10,"div",7),t.TgZ(11,"div",8),t.TgZ(12,"label",9),t._uU(13,"File Browse"),t.qZA(),t.qZA(),t.TgZ(14,"div",10),t._UZ(15,"input",11),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",6),t.TgZ(17,"div",7),t.TgZ(18,"div",8),t.TgZ(19,"label",9),t._uU(20,"File Name"),t.qZA(),t.qZA(),t.TgZ(21,"div",10),t._UZ(22,"input",12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",5),t.TgZ(24,"div",6),t.TgZ(25,"div",7),t.TgZ(26,"div",8),t.TgZ(27,"label",9),t._uU(28,"Employee"),t.qZA(),t.qZA(),t.TgZ(29,"div",10),t._UZ(30,"input",13),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"div",6),t.TgZ(32,"div",7),t.TgZ(33,"div",8),t.TgZ(34,"label",9),t._uU(35,"Folder Name"),t.qZA(),t.qZA(),t.TgZ(36,"div",10),t._UZ(37,"input",14),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"div",5),t.TgZ(39,"div",15),t.TgZ(40,"label",9),t._uU(41,"File Description"),t.qZA(),t.qZA(),t.TgZ(42,"div",16),t._UZ(43,"textarea",17),t.qZA(),t.qZA(),t.TgZ(44,"div",5),t.TgZ(45,"div",15),t.TgZ(46,"label",9),t._uU(47,"File Permission"),t.qZA(),t.qZA(),t.TgZ(48,"div",16),t.TgZ(49,"div",7),t.TgZ(50,"div",15),t.TgZ(51,"b"),t._uU(52,"To View"),t.qZA(),t.qZA(),t.TgZ(53,"div",15),t._UZ(54,"input",18),t.TgZ(55,"label",19),t._uU(56,"Employee"),t.qZA(),t.qZA(),t.TgZ(57,"div",8),t._UZ(58,"input",18),t.TgZ(59,"label",19),t._uU(60,"Reporting Manager"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(61,"div",7),t.TgZ(62,"div",15),t.TgZ(63,"b"),t._uU(64,"To Download"),t.qZA(),t.qZA(),t.TgZ(65,"div",15),t._UZ(66,"input",18),t.TgZ(67,"label",19),t._uU(68,"Employee"),t.qZA(),t.qZA(),t.TgZ(69,"div",8),t._UZ(70,"input",18),t.TgZ(71,"label",19),t._uU(72,"Reporting Manager"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(73,"div",20),t.TgZ(74,"div",21),t.TgZ(75,"button",22),t.NdJ("click",function(){return n.submit()}),t._uU(76,"Submit"),t.qZA(),t.TgZ(77,"button",23),t._uU(78,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(5,q)),t.xp6(6),t.Q6J("formGroup",n.selectForm),t.xp6(68),t.Q6J("disabled",!n.selectForm.valid)("routerLink",t.DdM(6,q)),t.xp6(2),t.Q6J("routerLink",t.DdM(7,q)))},directives:[u.rH,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Wl],styles:['.back-button[_ngcontent-%COMP%]{background:#e41c1c;color:#fff;border:none;padding:5px;border-radius:5px;width:40px}  .back-button:hover{background-color:#f08080!important}.button-heading-container[_ngcontent-%COMP%]{display:flex;align-items:center}label.starlabel[_ngcontent-%COMP%]:after{content:"*";color:#e41c1c}.custom-placeholder[_ngcontent-%COMP%]::placeholder{color:#495057}.checkbox-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{margin-right:5px;margin-bottom:4px}']}),o})()}];let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.Bz.forChild(R)],u.Bz]}),o})();var G=a(4834),H=a(529);let K=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.ez,Q,m.Js,p.Is,D.ot,H.m,r.u5,G.t]]}),o})()}}]);