import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { HomelistComponent } from './homelist/homelist.component';
import { ProfiledetailsComponent } from './profiledetails/profiledetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './service/rest.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
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
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
