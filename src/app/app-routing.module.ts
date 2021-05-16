import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomelistComponent } from './components/homelist/homelist.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProfiledetailsComponent } from './components/profiledetails/profiledetails.component';
import { StafflistComponent } from './components/stafflist/stafflist.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { TeacherlistComponent } from './components/teacherlist/teacherlist.component';


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
