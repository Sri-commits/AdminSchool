import {
  Component,
  OnInit
} from '@angular/core';
import { Iteacher } from 'src/app/models/iteacher';
import { RestService } from 'src/app/service/rest.service';


@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {

  title = "Teachers Dashboard";
  teachers: Iteacher[];


  constructor(private rs: RestService) { }

  ngOnInit() {
    this.rs.getTeachers().subscribe(data => this.teachers = data);
  }

  myOrder = -1;

  mysort(columnName: string) {

    this.myOrder = this.myOrder * -1;
    let myOrder = this.myOrder;

    if (columnName == 'id') {
      this.teachers.sort(function (t1, t2) {
        return t1.employeeId > t2.employeeId ? -1 * myOrder : 1 * myOrder;
      })
    }
    else if (columnName == 'first') {
      this.teachers.sort(function (t1, t2) {
        return t1.firstName > t2.firstName ? -1 * myOrder : 1 * myOrder;
      })
    };
  }




}
