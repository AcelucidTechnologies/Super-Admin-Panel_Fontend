import { Component } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { LeaveService } from 'src/app/_services/leave.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent {
  calendarOptions: CalendarOptions;
  calenderList:any
  eventList: EventInput[] = [];
  leaveTrackerList:any
  fgsType:any

  constructor( private leaveservice: LeaveService,
    private toastr: ToastrMsgService,
    private ngxLoader: NgxUiLoaderService,
    ){
      this.fgsType = SPINNER.squareLoader;
  }
  ngOnInit() {
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
    };
    this.getCalendar();
    this.getTableforLeaves()
  }

  getCalendar() {
    this.leaveservice.getcalenderList().subscribe((res) => {
      this.calenderList = res;
      console.log("response 24==>", res);
      this.ngxLoader.stop();

      // Map the response data to the FullCalendar event format
      const events = [];
      this.eventList = events;
      if (this.calenderList) {
      Object.keys(this.calenderList).forEach((month) => {
        this.calenderList[month].forEach((holiday) => {
          if (holiday.date) {
            events.push({
              title: holiday.name,
              start: holiday.date,
            });
          }
        });
      });
    }

          if (this.leaveTrackerList) {
    this.leaveTrackerList.forEach((leave) => {
      events.push({
        title: leave.leaveType,
        start: leave.fromDate,
        end: leave.toDate,
        color: 'green',
      });
    });
  }

    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin],
      initialView: 'dayGridMonth',
      events: events,
    };



      this.ngxLoader.stop();
    });
  }


  getTableforLeaves() {
    this.leaveservice.getLeaveTrackerList().subscribe((res) => {
      this.leaveTrackerList = res.filter(item => item.status.toLowerCase() === 'approved');

      console.log("response approved ==>", this.leaveTrackerList);
      this.getCalendar();
      this.ngxLoader.stop();
    });
  }




}
