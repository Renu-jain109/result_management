import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  // getResult (rollno : number) : Observable <any>{
  //   return this.http.get(environment.API_URL+"result/${rollno}")
  // }

  getResult(rollno: number): Observable<any> {
    return this.http.get(`${environment.API_URL}result/${rollno}`);
};
}
