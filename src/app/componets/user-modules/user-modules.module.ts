import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  // default path
  {path:'editProfile',component:EditProfileComponent},
  {path: 'viewProfile', component:ViewProfileComponent,title:"User cart"},
  {path: '',component:LoginComponent,title:"User Track Order"},
]

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModulesModule { }
