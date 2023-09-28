import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './entry/aboutus/aboutus.component';
import { ContactusComponent } from './entry/contactus/contactus.component';
import { HomeComponent } from './entry/home/home.component';
import { LoginComponent } from './entry/login/login.component';
import { InquiryComponent } from './entry/inquiry/inquiry.component';
import { ReComponent } from './entry/re/re.component';
import { ViewinquiryComponent } from './entry/re/viewinquiry/viewinquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    LoginComponent,
    InquiryComponent,
    ReComponent,
    ViewinquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
