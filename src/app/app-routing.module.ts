import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomelistComponent } from './homelist/homelist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfiledetailsComponent } from './profiledetails/profiledetails.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomelistComponent },
    { path: 'teacher/:employeeid', component: ProfiledetailsComponent },
    { path: 'teacher', component: TeacherlistComponent },
    { path: 'student', component: StudentlistComponent },
    { path: 'staff', component: StafflistComponent },
    { path: '**', component: PagenotfoundComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
