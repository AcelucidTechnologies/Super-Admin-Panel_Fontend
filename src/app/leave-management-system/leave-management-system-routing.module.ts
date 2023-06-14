import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'user-profile', component: UserProfileComponent
  },
  {
    path:'add-profile', component: AddProfileComponent
  },
  {
    path:'edit-profile', component: EditProfileComponent
  },
  {
    path:'profile-list', component: ProfileListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveManagementSystemRoutingModule { }
