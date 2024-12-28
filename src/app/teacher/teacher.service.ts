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
    return this.http.get("http://localhost:8084/rollnumber");
  }
}
