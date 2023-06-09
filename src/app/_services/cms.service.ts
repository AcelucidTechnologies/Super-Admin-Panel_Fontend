import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, from, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { CATEGORY, SUB_CATEGORY, SPONSOR, BANNERSPECIAL, FEATURE, SPECIALOFFER, Admin, DELETE_FEATURE_PRODUCT } from '../_models/cms'
import { category, sub_category } from '../DummyData/category_subCategory';
import {sponsors} from '../DummyData/sponsor'
import { bannerSpecialData } from '../DummyData/bannerSpecial';
import { featureData } from '../DummyData/feature';
import { SLIDER } from '../_models/slider';
import { sliderData } from '../DummyData/slider';
import { specialOffer } from '../DummyData/special-offer';
import { access } from 'fs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CmsService {
  // BehaviouralSubject = new BehaviorSubject({
  //   pageTitle: "",
  //   pageLink: ""
  // })

  constructor(private http: HttpClient,private router: Router) {}

    getCategoryList(): Observable<CATEGORY[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category`;
        // return this.http.get<CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
        return of(category)
    }
    getCategoryById(id: number): Observable<CATEGORY> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
        let indexObj = category.findIndex((obj)=>obj.id==id);
        //return this.http.get<CATEGORY>(endpointUrl,{ 'headers': httpOptions });
        return of(category[indexObj])
    }
    addCategory(categoryData: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category`;
        // return this.http.post<any>(endpointUrl, categoryData, { 'headers': httpOptions });
        categoryData.id = category.length + 1
        category.push(categoryData);
        return of(categoryData)
    }

    editCategory(categoryData: CATEGORY, id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
        // return this.http.put<CATEGORY>(endpointUrl, categoryData, { 'headers': httpOptions });
        let categoryObj = category.findIndex((obj) => obj.id == id);
        category[categoryObj] = categoryData
        return of(categoryData)
    }

    deleteCategory(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
        //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
        let categoryObj = category.map(item => {
            item.id == id;
            return item
        })
        category.splice(category.findIndex((index) => index.id == id),1);
        return of(categoryObj)
    }

    getSubCategoryList() {
        let subCategoryData = from(sub_category)
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category`;
        // return this.http.get<SUB_CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
        return of(sub_category)
    }
    getSubCategoryListById(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category/${id}`;
        //return this.http.get<any>(endpointUrl, { 'headers': httpOptions });
        let subCategoryObj = sub_category.findIndex((obj)=>obj.id==id)
        return of(sub_category[subCategoryObj])
    }
    addSubCategory(subCategoryData: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category`;
        //return this.http.post<any>(endpointUrl, subCategoryData, { 'headers': httpOptions });
        subCategoryData.id = sub_category.length + 1
        sub_category.push(subCategoryData)
        return of(subCategoryData)
    }
    editSubCategory(subCategoryData: any, id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category/${id}`;
        //return this.http.put<any>(endpointUrl, subCategoryData, { 'headers': httpOptions });
        let subCategoryObje = sub_category.findIndex((obj) => obj.id == id);
        sub_category[subCategoryObje] = subCategoryData;
        return of(subCategoryData)
    }
    deleteSubCategory(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category/${id}`;
        // return this.http.delete<any>(endpointUrl, { 'headers': httpOptions });
        let subCategoryObj = sub_category.map(item => {
            item.id == id;
            return item
        })
        category.splice(sub_category.findIndex((index) => index.id == id), 1);
        return of(subCategoryObj)
    }

    getSponsorList() {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors`;
        // return this.http.get<SPONSOR[]>(endpointUrl, { 'headers': httpOptions });
        return of(sponsors)
    }
    getSponsorDetailsById(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors/${id}`;
        let sponsorObj = sponsors.findIndex(obj=>obj.id===id)
        return of(sponsors[sponsorObj])
        // return this.http.get<SPONSOR>(endpointUrl,{ 'headers': httpOptions });
    }
    addSponsor(sponsorData: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors`;
        // return this.http.post<any>(endpointUrl, sponsorData, { 'headers': httpOptions });
        sponsorData.id = sponsors.length + 1;
        sponsors.push(sponsorData)
        return of(sponsorData)
    }
    editSponsor(sponsorData: any, id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors/${id}`;
        //return this.http.put<any>(endpointUrl, sponsorData, { 'headers': httpOptions });
        let sponsorObj = sponsors.findIndex((obj) => obj.id == id);
        sponsors[sponsorObj] = sponsorData;
        return of(sponsorData)
    }
    deleteSponsor(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors/${id}`;
        //return this.http.delete<any>(endpointUrl, { 'headers': httpOptions });
        let sponsorObj = sponsors.map(item => {
            item.id == id;
            return item;
        })
        sponsors.splice(sponsors.findIndex((index) => index.id == id), 1)
        return of(sponsorObj)
    }


    createPageSetUpData(payload:any): Observable<any[]> {
      const token = localStorage.getItem('token') || '';
            const email = localStorage.getItem('email') || '';
            let httpOptions = new HttpHeaders().set('x-access-token', token)
              const endpointUrl = `${environment.JSON_SERVER}/createPageSetUpData`;
            return this.http.post<any>(endpointUrl, payload,{ 'headers': httpOptions });
    }

 addPageLink(payload:any): Observable<any[]> {
  const token = localStorage.getItem('token') || '';
        const email = localStorage.getItem('email') || '';
        console.log("add page link"  + email)
        let httpOptions = new HttpHeaders().set('x-access-token', token)
          const endpointUrl = `${environment.JSON_SERVER}/createPageSetUp`;
        return this.http.post<any>(endpointUrl, payload,{ 'headers': httpOptions });

}
 getPageValue(): Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    const email = localStorage.getItem('email')
    let httpOptions = new HttpHeaders().set('x-access-token', token)
   const endpointUrl = `${environment.JSON_SERVER}/getPageSetUp?username=${email}`;
   return this.http.get<any[]>(endpointUrl ,{ 'headers': httpOptions });
}

getPageById(id: number): Observable<any> {
  const token = localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token', token)
  const endpointUrl = `${environment.JSON_SERVER}/getPageSetUpById?id=${id}`;
  // let indexObj = bannerSpecialData.findIndex((obj)=>obj.id==id);
  return this.http.get<any>(endpointUrl,{ 'headers': httpOptions });
  // return of(bannerSpecialData[indexObj])
}


    addSpecialBanner(payload: any): Observable<any[]> {
        const token = localStorage.getItem('token') || '';
        const email = localStorage.getItem('email') || '';
        console.log("add admin todkemn"  + email)
        let httpOptions = new HttpHeaders().set('x-access-token', token)

        const formData = new FormData();
        formData.append('username', email);
        formData.append('bannerName', payload.bannerName);
          formData.append('bannerDescription', payload.bannerDescription);
          formData.append('bannerOrder', payload.bannerOrder);
          formData.append('image', payload.image);
          console.log("add special banner" + formData)
          const endpointUrl = `${environment.JSON_SERVER}/createBannerSpecial`;
        return this.http.post<any>(endpointUrl, formData,{ 'headers': httpOptions });

    }

    getSpecialBannerList(id:string): Observable<any[]> {
        const token = localStorage.getItem('token') || '';
        const email = localStorage.getItem('email')
        let httpOptions = new HttpHeaders().set('x-access-token', token)
       const endpointUrl = `${environment.JSON_SERVER}/getBannerSpecial?username=${email}`;
       return this.http.get<any[]>(endpointUrl ,{ 'headers': httpOptions });
        // return of(bannerSpecialData)
    }
    getPostById(id: number): Observable<any> {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
      return this.http.get<any>(url);
    }
    getBannerById(id: number): Observable<any> {
      const token = localStorage.getItem('token') || '';
      let httpOptions = new HttpHeaders().set('x-access-token', token)
      const endpointUrl = `${environment.JSON_SERVER}/getBannerById?id=${id}`;
      // let indexObj = bannerSpecialData.findIndex((obj)=>obj.id==id);
      return this.http.get<any>(endpointUrl,{ 'headers': httpOptions });
      // return of(bannerSpecialData[indexObj])
  }



    deleteSpecialBanner(id: string) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        // const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
        const endpointUrl = `${environment.JSON_SERVER}/deleteBannerSpecial?id=${id}`;
        return this.http.delete<Admin>(endpointUrl, { 'headers': httpOptions });
    }

    editSpecialBanner(payload: any, id: number) {
        const token = localStorage.getItem('token') || '';
        const email = localStorage.getItem('email') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/updateBannerSpecial?id=${id}`;
        const formData = new FormData();
        formData.append('username', email);
        formData.append('bannerName', payload.bannerName);
          formData.append('bannerDescription', payload.bannerDescription);
          formData.append('bannerOrder', payload.bannerOrder);
          formData.append('image', payload.image);
        return this.http.put<Admin>(endpointUrl,formData, { 'headers': httpOptions });
    }

    getbannerList(): Observable<any[]> {
      const token = localStorage.getItem('token') || '';
      const email = localStorage.getItem('email')
      let httpOptions = new HttpHeaders().set('x-access-token', token)
     const endpointUrl = `${environment.JSON_SERVER}/getBannerSpecial?username=${email}`;
      return this.http.get<any[]>(endpointUrl, { 'headers': httpOptions });
      // return of(featureData)
  }




    // ----------------FEATURE API----------------

    getFeatureList(): Observable<any[]> {
        const token = localStorage.getItem('token') || '';
        const email = localStorage.getItem('email')
        let httpOptions = new HttpHeaders().set('x-access-token', token)
       const endpointUrl = `${environment.JSON_SERVER}/getFeatureProduct?username=${email}`;
        return this.http.get<any[]>(endpointUrl, { 'headers': httpOptions });
        // return of(featureData)
    }

    addFeatureProduct(payload: any) {
        const token = localStorage.getItem('token') || '';
        const email = localStorage.getItem('email') || '';
        const formData = new FormData();
        formData.append('username', email);
        formData.append('productName', payload.productName);
        formData.append('isSpecialProduct', payload.isSpecialProduct);
        formData.append('productQuantity', payload.productQuantity);
          formData.append('productModel', payload.productModel);
          formData.append('productPrice', payload.productPrice);
          formData.append('image', payload.image);



        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/createFeatureProduct`;

        return this.http.post<any>(endpointUrl, formData,{ 'headers': httpOptions });
    }

    editFeature(payload: any, id: number) {
        const token = localStorage.getItem('token') || '';
        const email = localStorage.getItem('email') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/updateFeatureProduct?id=${id}`;
        const formData = new FormData();
        formData.append('username', email);
        formData.append('productName', payload.productName);
        formData.append('productQuantity', payload.productQuantity);
          formData.append('productModel', payload.productModel);
          formData.append('productPrice', payload.productPrice);
          formData.append('image', payload.image);
        return this.http.put<any>(endpointUrl,formData, { 'headers': httpOptions });
        // let featureObj = featureData.findIndex((obj) => obj.id == id);
        // featureData[featureObj] = featuresData
        // return of(featuresData)
    }

    getFeatureById(id: number): Observable<any> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/getFeatureProductById?id=${id}`;
        // let indexObj = featureData.findIndex((obj)=>obj.id==id);
        return this.http.get<any>(endpointUrl,{ 'headers': httpOptions });
        // return of(featureData[indexObj])
    }

    deleteProduct(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/deleteFeatureProduct?id=${id}`;
        return this.http.delete<DELETE_FEATURE_PRODUCT>(endpointUrl, { 'headers': httpOptions });
        // let productObj = featureData.map(item => {
        //     item.id == id;
        //     return item;
        // })
        // featureData.splice(featureData.findIndex((index) => index.id == id),1);
        // return of(productObj)
    }


     // ------------------------Slider Api-------------------------

     getSliderList(): Observable<any[]> {
        const token = localStorage.getItem('token') || '';
        const email = localStorage.getItem('email') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
       const endpointUrl = `${environment.JSON_SERVER}/getSlider?username=${email}`;
        return this.http.get<any[]>(endpointUrl, { 'headers': httpOptions });
        // return of(sliderData)
    }



    addSlider(payload: any) {
        const token = localStorage.getItem('token') || '';
        const email = localStorage.getItem('email') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)

        const formData = new FormData();
        formData.append('username', email);
        formData.append('sliderName', payload.sliderName);
          formData.append('sliderDiscription', payload.sliderDiscription);
          formData.append('sliderOrder', payload.sliderOrder);
          formData.append('image', payload.image);
          console.log("add special banner" + formData)
          const endpointUrl = `${environment.JSON_SERVER}/createSlider`;

        return this.http.post<any>(endpointUrl, formData, { 'headers': httpOptions });
        // slider.id = sliderData.length + 1
        // sliderData.push(slider);
        // return of(slider)
    }

    editSlider(payload: any, id: number) {
        const token = localStorage.getItem('token') || '';
        const email = localStorage.getItem('email') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/updateSlider?id=${id}`;
        const formData = new FormData();
        formData.append('username', email);
        formData.append('sliderName', payload.sliderName);
        formData.append('sliderDiscription', payload.sliderDiscription);
          formData.append('sliderOrder', payload.sliderOrder);
          formData.append('image', payload.image);
        return this.http.put<any>(endpointUrl, formData, { 'headers': httpOptions });
        // let sliderObj = sliderData.findIndex((obj) => obj.id == id);
        // sliderData[sliderObj] = slidersData
        // return of(slidersData)
    }

    deleteSlider(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/deleteSlider?id=${id}`;
        return this.http.delete<any[]>(endpointUrl, { 'headers': httpOptions });
        // let sliderObj = sliderData.map(item => {
        //     item.id == id;
        //     return item;
        // })
        // sliderData.splice(sliderData.findIndex((index) => index.id == id),1);
        // return of(sliderObj)
    }

    getSliderById(id: number): Observable<any> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/getSliderById?id=${id}`;
        // let indexObj = sliderData.findIndex((obj)=>obj.id==id);
        return this.http.get<CATEGORY>(endpointUrl,{ 'headers': httpOptions });
        // return of(sliderData[indexObj])
    }

    // -----------------special offer Api------------------------------

    getOfferList(): Observable<any[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
       const endpointUrl = `${environment.JSON_SERVER}/getSpecialProduct`;
        return this.http.get<any[]>(endpointUrl, { 'headers': httpOptions });
        // return of(specialOffer)
    }

    addOffer(offer: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/slider`;
        // return this.http.post<any>(endpointUrl, categoryData, { 'headers': httpOptions });
        offer.id = specialOffer.length + 1
        specialOffer.push(offer);
        return of(offer)
    }

    editOffer(offersData: SPECIALOFFER, id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
        return this.http.put<any>(endpointUrl, { 'headers': httpOptions });
        // let sliderObj = specialOffer.findIndex((obj) => obj.id == id);
        // specialOffer[sliderObj] = offersData
        // return of(offersData)
    }

    deleteOffer(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/slider/${id}`;
        return this.http.delete<any>(endpointUrl, { 'headers': httpOptions });
        // let offerObj = specialOffer.map(item => {
        //     item.id == id;
        //     return item;
        // })
        // specialOffer.splice(specialOffer.findIndex((index) => index.id == id),1);
        // return of(offerObj)
    }

    getOfferById(id: number): Observable<SPECIALOFFER> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/getSliderById?id=${id}`;
        return this.http.get<any>(endpointUrl,{ 'headers': httpOptions });
        // let indexObj = specialOffer.findIndex((obj)=>obj.id==id);
        // return this.http.get<any>(endpointUrl,{ 'headers': httpOptions });
        // return of(specialOffer[indexObj])
    }
}
// function categoryData<T>(endpointUrl: string, categoryData: any, arg2: { headers: HttpHeaders; }) {
//   throw new Error('Function not implemented.');
// }

