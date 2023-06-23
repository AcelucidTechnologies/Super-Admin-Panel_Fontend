"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[561],{1561:(k,h,l)=>{l.d(h,{e:()=>S});var r=l(520),i=l(2340),m=l(5e3),u=l(1083);let S=(()=>{class d{constructor(e,s){this.http=e,this.router=s}approveLeave(e,s){const o=localStorage.getItem("token")||"",a=(new r.WM).set("x-access-token",o);return this.http.put(`${i.N.JSON_SERVER}/approve?id=${s}`,e,{headers:a})}disapproveLeave(e,s){const o=localStorage.getItem("token")||"",a=(new r.WM).set("x-access-token",o);return this.http.put(`${i.N.JSON_SERVER}/disApproved?id=${s}`,e,{headers:a})}getLeaveProfileById(e){const s=localStorage.getItem("token")||"";let o=(new r.WM).set("x-access-token",s);return this.http.get(`${i.N.JSON_SERVER}/getLeaveProfileById?id=${e}`,{headers:o})}getProfileList(){const e=localStorage.getItem("token")||"",s=localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getLeaveProfile?username=${s}`,{headers:o})}getLeaveTrackerById(e){const s=localStorage.getItem("token")||"";let o=(new r.WM).set("x-access-token",s);return this.http.get(`${i.N.JSON_SERVER}/getLeaveTrackerById?id=${e}`,{headers:o})}getcalenderList(){const e=localStorage.getItem("token")||"";localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getCalenderLeaves`,{headers:o})}getLeaveList(){const e=localStorage.getItem("token")||"",s=localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getTotalLeaves?username=${s}`,{headers:o})}getLeaveTrackerList(){const e=localStorage.getItem("token")||"",s=localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getLeaveTracker?username=${s}`,{headers:o})}getAllLeaveList(){const e=localStorage.getItem("token")||"";localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getAllLeaveTracker`,{headers:o})}createLeave(e){const s=localStorage.getItem("token")||"";localStorage.getItem("email");let a=(new r.WM).set("x-access-token",s);return this.http.post(`${i.N.JSON_SERVER}/createLeaveTracker?`,e,{headers:a})}getLeaveById(e){const s=localStorage.getItem("token")||"";let o=(new r.WM).set("x-access-token",s);return this.http.get(`${i.N.JSON_SERVER}/getLeaveTrackerById?id=${e}`,{headers:o})}getEmail(){const e=localStorage.getItem("token")||"",s=localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getEmail?username=${s}`,{headers:o})}addProfile(e){const s=localStorage.getItem("token")||"",o=localStorage.getItem("email")||"";let a=(new r.WM).set("x-access-token",s);const t=new FormData;return t.append("username",o),t.append("employeeFullName",e.employeeFullName),t.append("FirstName",e.FirstName),t.append("lastName",e.lastName),t.append("email",e.email),t.append("image",e.image),t.append("department",e.department),t.append("designation",e.designation),t.append("location",e.location),t.append("role",e.role),t.append("employmentType",e.employmentType),t.append("employeeStatus",e.employeeStatus),t.append("sourceHiring",e.sourceHiring),t.append("dateOfJoining",e.dateOfJoining),t.append("currentExp",e.currentExp),t.append("totalExp",e.totalExp),t.append("reportingManager",e.reportingManager),t.append("personalDetails[dateOfBirth]",e.personalDetails.dateOfBirth),t.append("personalDetails[age]",e.personalDetails.age),t.append("personalDetails[gender]",e.personalDetails.gender),t.append("personalDetails[maritalStatus]",e.personalDetails.maritalStatus),t.append("personalDetails[aboutMe]",e.personalDetails.aboutMe),t.append("personalDetails[expertise]",e.personalDetails.expertise),t.append("identityInformation[uan]",e.identityInformation.uan),t.append("identityInformation[panNumber]",e.identityInformation.panNumber),t.append("identityInformation[aadharNumber]",e.identityInformation.aadharNumber),t.append("contactDetails[workingPhoneNumber]",e.contactDetails.workingPhoneNumber),t.append("contactDetails[personalMobileNumber]",e.contactDetails.personalMobileNumber),t.append("contactDetails[personalEmailAddress]",e.contactDetails.personalEmailAddress),t.append("contactDetails[presentAddress][address1]",e.contactDetails.presentAddress.address1),t.append("contactDetails[presentAddress][address2]",e.contactDetails.presentAddress.address2),t.append("contactDetails[presentAddress][country]",e.contactDetails.presentAddress.country),t.append("contactDetails[presentAddress][state]",e.contactDetails.presentAddress.state),t.append("contactDetails[presentAddress][city]",e.contactDetails.presentAddress.city),t.append("contactDetails[presentAddress][pincode]",e.contactDetails.presentAddress.pincode),t.append("contactDetails[permanentAddress][address1]",e.contactDetails.permanentAddress.address1),t.append("contactDetails[permanentAddress][address2]",e.contactDetails.permanentAddress.address2),t.append("contactDetails[permanentAddress][country]",e.contactDetails.permanentAddress.country),t.append("contactDetails[permanentAddress][State]",e.contactDetails.permanentAddress.state),t.append("contactDetails[permanentAddress][city]",e.contactDetails.permanentAddress.city),t.append("contactDetails[permanentAddress][pincode]",e.contactDetails.permanentAddress.pincode),t.append("separationOfDate",e.separationOfDate),t.append("systemFields[addedTime]",e.systemFields.addedTime),t.append("systemFields[modifiedBy]",e.systemFields.modifiedBy),t.append("systemFields[modifiedTime]",e.systemFields.modifiedTime),t.append("systemFields[onBoardingStatus]",e.systemFields.onBoardingStatus),t.append("systemFields[addedBy]",e.systemFields.addedBy),null==e||e.workExperience.map((n,p)=>{t.append(`workExperience[${p}][companyName]`,n.companyName),t.append(`workExperience[${p}][jobTitle]`,n.jobTitle),t.append(`workExperience[${p}][fromDate]`,n.fromDate),t.append(`workExperience[${p}][toDate]`,n.toDate),t.append(`workExperience[${p}][jobDescription]`,n.jobDescription),t.append(`workExperience[${p}][releventExp]`,n.releventExp)}),null==e||e.educationDetails.map((n,p)=>{t.append(`educationDetails[${p}][instituteName]`,n.instituteName),t.append(`educationDetails[${p}][degree]`,n.degree),t.append(`educationDetails[${p}][specialization]`,n.specialization),t.append(`educationDetails[${p}][toDate]`,n.toDate)}),console.log("add profile"+t),this.http.post(`${i.N.JSON_SERVER}/createLeaveProfile`,t,{headers:a})}editProfile(e,s){const o=localStorage.getItem("token")||"",a=localStorage.getItem("email")||"";let t=(new r.WM).set("x-access-token",o);const g=`${i.N.JSON_SERVER}/updateLeaveProfile?id=${s}`,n=new FormData;return n.append("username",a),n.append("employeeFullName",e.employeeFullName),n.append("FirstName",e.FirstName),n.append("lastName",e.lastName),n.append("email",e.email),n.append("image",e.image),n.append("department",e.department),n.append("designation",e.designation),n.append("location",e.location),n.append("role",e.role),n.append("employmentType",e.employmentType),n.append("employeeStatus",e.employeeStatus),n.append("sourceHiring",e.sourceHiring),n.append("dateOfJoining",e.dateOfJoining),n.append("currentExp",e.currentExp),n.append("totalExp",e.totalExp),n.append("reportingManager",e.reportingManager),n.append("personalDetails[dateOfBirth]",e.personalDetails.dateOfBirth),n.append("personalDetails[age]",e.personalDetails.age),n.append("personalDetails[gender]",e.personalDetails.gender),n.append("personalDetails[maritalStatus]",e.personalDetails.maritalStatus),n.append("personalDetails[aboutMe]",e.personalDetails.aboutMe),n.append("personalDetails[expertise]",e.personalDetails.expertise),n.append("identityInformation[uan]",e.identityInformation.uan),n.append("identityInformation[panNumber]",e.identityInformation.panNumber),n.append("identityInformation[aadharNumber]",e.identityInformation.aadharNumber),n.append("contactDetails[workingPhoneNumber]",e.contactDetails.workingPhoneNumber),n.append("contactDetails[personalMobileNumber]",e.contactDetails.personalMobileNumber),n.append("contactDetails[personalEmailAddress]",e.contactDetails.personalEmailAddress),n.append("contactDetails[presentAddress][address1]",e.contactDetails.presentAddress.address1),n.append("contactDetails[presentAddress][address2]",e.contactDetails.presentAddress.address2),n.append("contactDetails[presentAddress][country]",e.contactDetails.presentAddress.country),n.append("contactDetails[presentAddress][state]",e.contactDetails.presentAddress.state),n.append("contactDetails[presentAddress][city]",e.contactDetails.presentAddress.city),n.append("contactDetails[presentAddress][pincode]",e.contactDetails.presentAddress.pincode),n.append("contactDetails[permanentAddress][address1]",e.contactDetails.permanentAddress.address1),n.append("contactDetails[permanentAddress][address2]",e.contactDetails.permanentAddress.address2),n.append("contactDetails[permanentAddress][country]",e.contactDetails.permanentAddress.country),n.append("contactDetails[permanentAddress][State]",e.contactDetails.permanentAddress.state),n.append("contactDetails[permanentAddress][city]",e.contactDetails.permanentAddress.city),n.append("contactDetails[permanentAddress][pincode]",e.contactDetails.permanentAddress.pincode),n.append("separationOfDate",e.separationOfDate),n.append("systemFields[addedTime]",e.systemFields.addedTime),n.append("systemFields[modifiedBy]",e.systemFields.modifiedBy),n.append("systemFields[modifiedTime]",e.systemFields.modifiedTime),n.append("systemFields[onBoardingStatus]",e.systemFields.onBoardingStatus),n.append("systemFields[addedBy]",e.systemFields.addedBy),null==e||e.workExperience.map((p,c)=>{n.append(`workExperience[${c}][companyName]`,p.companyName),n.append(`workExperience[${c}][jobTitle]`,p.jobTitle),n.append(`workExperience[${c}][fromDate]`,p.fromDate),n.append(`workExperience[${c}][toDate]`,p.toDate),n.append(`workExperience[${c}][jobDescription]`,p.jobDescription),n.append(`workExperience[${c}][releventExp]`,p.releventExp)}),null==e||e.educationDetails.map((p,c)=>{n.append(`educationDetails[${c}][instituteName]`,p.instituteName),n.append(`educationDetails[${c}][degree]`,p.degree),n.append(`educationDetails[${c}][specialization]`,p.specialization),n.append(`educationDetails[${c}][toDate]`,p.toDate)}),this.http.put(g,n,{headers:t})}getdepartmentList(){const e=localStorage.getItem("token")||"",s=localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getDepartment?username=${s}`,{headers:o})}createdepartment(e){const s=localStorage.getItem("token")||"";localStorage.getItem("email");let a=(new r.WM).set("x-access-token",s);return this.http.post(`${i.N.JSON_SERVER}/createDepartment`,e,{headers:a})}getdesignationList(){const e=localStorage.getItem("token")||"",s=localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getDesignation?username=${s}`,{headers:o})}createdesignation(e){const s=localStorage.getItem("token")||"";localStorage.getItem("email");let a=(new r.WM).set("x-access-token",s);return this.http.post(`${i.N.JSON_SERVER}/createDesignation`,e,{headers:a})}getSourceHiringList(){const e=localStorage.getItem("token")||"",s=localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getsourceHiring?username=${s}`,{headers:o})}createSourceHiring(e){const s=localStorage.getItem("token")||"";localStorage.getItem("email");let a=(new r.WM).set("x-access-token",s);return this.http.post(`${i.N.JSON_SERVER}/createSourceHiring`,e,{headers:a})}getReportList(){const e=localStorage.getItem("token")||"",s=localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getReporting?username=${s}`,{headers:o})}createReport(e){const s=localStorage.getItem("token")||"";localStorage.getItem("email");let a=(new r.WM).set("x-access-token",s);return this.http.post(`${i.N.JSON_SERVER}/createReporting`,e,{headers:a})}getLocationList(){const e=localStorage.getItem("token")||"",s=localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getLocation?username=${s}`,{headers:o})}createLocation(e){const s=localStorage.getItem("token")||"";localStorage.getItem("email");let a=(new r.WM).set("x-access-token",s);return this.http.post(`${i.N.JSON_SERVER}/createLocation`,e,{headers:a})}deleteProfile(e){const s=localStorage.getItem("token")||"";let o=(new r.WM).set("x-access-token",s);return this.http.delete(`${i.N.JSON_SERVER}/deleteLeaveProfile?id=${e}`,{headers:o})}getAssetList(){const e=localStorage.getItem("token")||"",s=localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getLeaveAssets?username=${s}`,{headers:o})}deleteAsset(e){const s=localStorage.getItem("token")||"";let o=(new r.WM).set("x-access-token",s);return this.http.delete(`${i.N.JSON_SERVER}/deleteLeaveAssets?id=${e}`,{headers:o})}createAsset(e){const s=localStorage.getItem("token")||"";localStorage.getItem("email");let a=(new r.WM).set("x-access-token",s);return this.http.post(`${i.N.JSON_SERVER}/createLeaveAssets`,e,{headers:a})}getAssetById(e){const s=localStorage.getItem("token")||"";let o=(new r.WM).set("x-access-token",s);return this.http.get(`${i.N.JSON_SERVER}/getLeaveAssetsById?id=${e}`,{headers:o})}editAssetList(e,s){const o=localStorage.getItem("token")||"",a=(new r.WM).set("x-access-token",o);return this.http.put(`${i.N.JSON_SERVER}/updateLeaveAssets?id=${s}`,e,{headers:a})}getExitList(){const e=localStorage.getItem("token")||"",s=localStorage.getItem("email");let o=(new r.WM).set("x-access-token",e);return this.http.get(`${i.N.JSON_SERVER}/getExitDetails?username=${s}`,{headers:o})}}return d.\u0275fac=function(e){return new(e||d)(m.LFG(r.eN),m.LFG(u.F0))},d.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);