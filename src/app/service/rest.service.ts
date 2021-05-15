import { Injectable } from '@angular/core';
import { Iteacher } from '../models/iteacher';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {



  constructor(private http: HttpClient) { }
  //fetching data from local json file, replace the URL as required
  url: string = "./assets/data/db.json";
  getTeachers(): Observable<Iteacher[]> {
    return this.http.get<Iteacher[]>(this.url);
  }
}
