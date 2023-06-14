import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import * as xlsxPackage from 'xlsx';
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import { ReviewsService } from 'src/app/_services/reviews.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ModulePermissionService } from 'src/app/_services/module-permission.service';
import { access } from 'src/app/_models/modulepermission';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  sidebarSpacing:string='contracted'
  @ViewChild('dt') dt:Table|any
  cols:any[]
  reviewListValue:any[]=[]
  reviewDetails:any[]
  exportColumns:any[]
  statusList:string[]=['Active','Inactive']
  accessPermission:access
  constructor(private reviewsService:ReviewsService,
    private toastr: ToastrMsgService,
    private ngxLoader: NgxUiLoaderService,
    public dialog:MatDialog,private permissionService:ModulePermissionService) {
      this.permissionService.getModulePermission().subscribe(res=>{
        this.accessPermission=res[0].RatingList
        console.log( this.accessPermission)
        this.getReviewList()
      })
    }


  ngOnInit(): void {

  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
getReviewList(){
  this.reviewsService.getReviewList().subscribe((res)=>{
    this.reviewListValue=res
    console.log("55",this.reviewListValue)
  })
}

exportExcel() {
  const worksheet = xlsxPackage.utils.json_to_sheet(this.reviewListValue);
  const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = xlsxPackage.write(workbook, { bookType: 'xlsx', type: 'array' });
  this.saveAsExcelFile(excelBuffer, "reviews");
}

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
    type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}


exportPdf() {
  this.reviewDetails = this.reviewListValue.map((item, index) => {
    return { sno: index + 1, ...item };
  });

  const doc = new jsPDF.jsPDF('l', 'pt');
  const data = this.reviewDetails;
  const exportColumns = [
    { title: 'S No.', dataKey: 'sno' },
    { title: 'Review Subject', dataKey: 'reviewSubject' },
    { title: 'Publishing Site Url', dataKey: 'publishingSiteUrl' },
    { title: 'Rating Count Review ', dataKey: 'ratingCountReview' },
    { title: 'status', dataKey: 'status' },

  ];

  autoTable(doc, {
    columns: exportColumns,
    body: data
  });

  doc.save('Review List.pdf');
}
      openDialog(name: any) {
        const dialogRef = this.dialog.open(DialogComponent);
        dialogRef.afterClosed().subscribe(result => {
          if (result == true) {
            this.deleteReviewDetails(name._id)
          }
        });
      }

      deleteReviewDetails(id:number) {
        this.ngxLoader.start();
        this.reviewsService.deleteReviewDetails(id).subscribe(res => {
          if (res) {
            this.toastr.showSuccess("Review deleted successfully", "Review deleted")
            this.getReviewList();
          }
        })
      }
//search functionality
// applyFilterGlobal($event, stringVal) {
//   this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
// }
applyFilterGlobal(event: Event, stringVal: string) {
  const searchValue = (event.target as HTMLInputElement).value;

  // Check if the search value is empty or contains only whitespace
  if (!searchValue || /^\s*$/.test(searchValue)) {
    // Clear the global filter if the search value is empty
    this.dt.filterGlobal('', stringVal);
  } else {
    // Apply the global filter with the search value
    this.dt.filterGlobal(searchValue.trim(), stringVal);
  }
}

}
