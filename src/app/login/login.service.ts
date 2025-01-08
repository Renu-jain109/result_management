import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login (object : any) : Observable <any>{
    return this.http.post(environment.API_URL+"user/login", object);
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  };

  isAuthenticated() : boolean{
    return !!localStorage.getItem('token');
  };
  getRole (){
   return localStorage.getItem('role');
  }
  
  }
  

