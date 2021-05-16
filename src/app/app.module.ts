import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherlistComponent } from './components/teacherlist/teacherlist.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { StafflistComponent } from './components/stafflist/stafflist.component';
import { HomelistComponent } from './components/homelist/homelist.component';
import { ProfiledetailsComponent } from './components/profiledetails/profiledetails.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './service/rest.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TeacherlistComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    StudentlistComponent,
    StafflistComponent,
    HomelistComponent,
    ProfiledetailsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
