import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../login/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  user : string ;
  loggedIn : boolean = false;
  router = inject(Router);
   username = localStorage.getItem('username'); 
   role = localStorage.getItem('role');
  constructor(private loginService : LoginService){}

  ngOnInit(): void {
    if(this.loginService.isAuthenticated()){
      this.loggedIn = this.loginService.isAuthenticated();
    }
    this.user = this.username || null;
   this.getRole();
  }

getRole(){
if(this.username && this.role){
  if(this.role == 'teacher'){
    this.user = `Teacher : ${this.username}`;
  } else if(this.role == 'student'){
    this.user = `Student : ${this.username}`;
  }  
}
}

  logOut(){
    this.loginService.logOut();
    // location.reload();
    // this.router.navigate(['/login']);
    window.location.href='/login';

  }
  
}
