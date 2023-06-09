import { Component, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import { MatDialog } from '@angular/material/dialog';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { LeaveService } from 'src/app/_services/leave.service';
import { Table } from 'primeng/table';
import autoTable from 'jspdf-autotable';
import { DialogExitComponent } from '../dialog-exit/dialog-exit.component';

@Component({
  selector: 'app-exit-list',
  templateUrl: './exit-list.component.html',
  styleUrls: ['./exit-list.component.scss'],
})
export class ExitListComponent {
  exitData: any[] = [];
  exitDetails: any;

  sidebarSpacing: string = 'contracted';
  cols: any[];
  @ViewChild('dt') dt: Table | undefined;

  exportColumns: any[];
  fgsType: any;

  statusList = ['Active', 'Inactive'];
  constructor(
    private leaveService: LeaveService,
    private toastr: ToastrMsgService,
    private ngxLoader: NgxUiLoaderService,
    private dialog: MatDialog
  ) {
    this.fgsType = SPINNER.squareLoader;
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();

    this.getExitData();
  }

  getExitData() {
    this.leaveService.getExitList().subscribe((res) => {
      this.exitData = res;
      this.ngxLoader.stop();
    });
  }

  openDialog(name: any) {
    const dialogRef = this.dialog.open(DialogExitComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.deleteExitDetails(name);
      }
    });
  }

  deleteExitDetails(id: any) {
    this.leaveService.deleteExit(id._id).subscribe((res) => {
      if (res) {
        this.toastr.showSuccess('Exit deleted successfully', 'Exit deleted');
        this.getExitData();
      }
    });
  }

  exportExcel(): void {
    const datePipe = new DatePipe('en-US');
    const data = this.exitData.map((item, index) => ({
      'S.No.': index + 1,
      'Employee Id': item.employeeId,
      'Interviewer Type': item.interviewerType,
      'Reason For Leaving': item.reasonForLeaving,
      // 'Work With Organisation Again': item.workingOrganization,
      'Most Of The Company': item.mostTheCompany,
      'Anything To Share': item.anythingShare,
      Resignation: item.reasonForLeaving,
      'All Assets': item.allAssets,
      'Notice Period': item.noticePeriod,
      Manager: item.manager,
      'Added By': item.addedBy,
      AddedTime: datePipe.transform(item.createdAt, 'MM/dd/yyyy'),
      'Modified By': item.addedBy,
      ModifiedTime: datePipe.transform(item.updatedAt, 'MM/dd/yyyy'),
    }));

    // Create a new workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Generate a Blob from the workbook
    const workbookBlob = this.workbookToBlob(workbook);

    // Create a download link
    const url = URL.createObjectURL(workbookBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'table_data.xlsx';

    // Simulate a click on the link to start the download
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
  }

  // Helper function to convert a workbook to Blob
  private workbookToBlob(workbook: XLSX.WorkBook): Blob {
    const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    return blob;
  }

  exportPdf() {
    this.exitDetails = this.exitData.map((item, index) => {
      return { sno: index + 1, ...item };
    });

    const doc = new jsPDF.jsPDF('l', 'pt');
    // const data = this.reviewerDetails;
    const data = this.exitDetails.map((item) => {
      return {
        ...item,
        createdAt: this.formatDate(item.createdAt), // Format the createdAt date
        updatedAt: this.formatDate(item.updatedAt), // Format the createdAt date
        separationDate: this.formatDate(item.separationDate), // Format the createdAt date
      };
    });
    const exportColumns = [
      { title: 'S No.', dataKey: 'sno' },
      { title: 'Employee Id', dataKey: 'employeeId' },
      { title: 'Interviewer Type ', dataKey: 'interviewerType' },
      { title: 'Type Of Assets', dataKey: 'typeOfAssets' },
      { title: 'Separation Date', dataKey: 'separationDate' },
      { title: 'Reason For Leaving', dataKey: 'reasonForLeaving' },
      {
        title: 'Work With OrganisationAgain ',
        dataKey: 'workingOrganization ',
      },
      { title: 'Most Of The Company', dataKey: 'mostTheCompany' },
      { title: 'Anything Share', dataKey: 'anythingShare' },
      { title: 'Resignation', dataKey: 'reasonForLeaving' },
      { title: 'All Assets', dataKey: 'allAssets' },
      { title: 'Notice Period', dataKey: 'noticePeriod' },
      { title: 'manager', dataKey: 'manager' },
      { title: 'Added By', dataKey: 'addedBy' },
      { title: 'AddedTime', dataKey: 'createdAt' },
      { title: 'Modified By', dataKey: 'addedBy' },
      { title: 'ModifiedTime', dataKey: 'updatedAt' },
    ];

    autoTable(doc, {
      columns: exportColumns,
      body: data,
    });

    doc.save('Exit Detail List.pdf');
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  // search functionality start here

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
