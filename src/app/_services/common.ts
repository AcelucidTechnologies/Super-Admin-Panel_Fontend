import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable({ providedIn: 'root' })
export class CommonService {
    URLBase64:any
    myData:any;
    plantext: any;
    constructor(
        private http:HttpClient
    ) {

    }
    generateRandomNo() {
        var date = new Date()
        var StringValueOfDate = date.valueOf()
        return `ASNO/${StringValueOfDate}`
    }
    generateRandomeOrderId() {
        var date = new Date()
        var StringValueOfDate = date.valueOf()
        return `${StringValueOfDate}`
    }

    getCurrentDate() {
        let TodayDate = new Date().toLocaleDateString()
        return `${TodayDate}`
    }

    convertDate(dateFormat) {
        return moment(dateFormat).format("YYYY-MM-DD");
    }

    convertTime(timeFormat){
        return moment(timeFormat).format("HH:mm")
    }

    fileReadAndDetails(event: any) {
        var image = event.target.files;
        console.log(event.target.files)
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (data) => {
            this.URLBase64 = data.target.result;
        }
        return {
            fileData: image,
            URLBase64: this.URLBase64
        }
    }

    getCountries(){
        return this.http.get('https://trial.mobiscroll.com/content/countries.json')
    }

    public getConfig(height: number, maxCharCount: number){
        return {
          customConfig: '/assets/js/ckeditor/ckeditor-config.js',
          height: height,
          wordcount: {
            showParagraphs: false,
            showWordCount: false,
            showCharCount: true,
            maxCharCount: maxCharCount
          }
        }
    }
}
