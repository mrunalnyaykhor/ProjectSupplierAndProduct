import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './entry/aboutus/aboutus.component';
import { ContactusComponent } from './entry/contactus/contactus.component';
import { HomeComponent } from './entry/home/home.component';
import { InquiryComponent } from './entry/inquiry/inquiry.component';
import { LoginComponent } from './entry/login/login.component';
import { ReComponent } from './entry/re/re.component';
import { ViewinquiryComponent } from './entry/re/viewinquiry/viewinquiry.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent,
    children:[
      {
    path:'re',component:ReComponent
   },
   {
    path:'inquiry',component:InquiryComponent
   }
  
  ],  
  }
  ,
  {

    path:'inquiry',component:InquiryComponent
  },
  
  {

    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutusComponent
  },
  {
    path:'contact',component:ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
