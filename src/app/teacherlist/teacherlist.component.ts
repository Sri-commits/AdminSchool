import {
  Component,
  OnInit
} from '@angular/core';
import {
  Iteacher
} from '../models/iteacher';
import {
  RestService
} from '../service/rest.service';


@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {

  title = "Teachers Dashboard";
  teachers: Iteacher[] = [];
  firstName: any;
  p: number = 1;

  constructor(private rs: RestService) { }

  ngOnInit() {
    this.rs.getTeachers().subscribe(data => this.teachers = data);
  }

  Search() {
    if (this.firstName == "") {
      this.ngOnInit();
    } else {
      this.teachers = this.teachers.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }

  key: string = 'employeeId';
  reverse: boolean = false;
  Sort(key) {
    this.key = key;
    this.reverse = !this.reverse;

  }
}
