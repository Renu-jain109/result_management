import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http : HttpClient) { }

  saveAddResult (result : any) : Observable <any>{
return this.http.post(environment.API_URL+"result",result);
  }

  getAllResult() : Observable <any> {
    return this.http.get(environment.API_URL+"result");
  }

  deleteResult (rollno : any) : Observable <any>{
    return this.http.delete(`${environment.API_URL}result/${rollno}`);

  };
  editResult (rollno : number,result : any) : Observable <any>{
    return this.http.put(`${environment.API_URL}result/${rollno}`,result);

  };
  

}
