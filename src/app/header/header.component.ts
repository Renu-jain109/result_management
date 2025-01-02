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
  loggedIn : boolean = false;
  constructor(private loginService : LoginService){}
  router = inject(Router);

  ngOnInit(): void {
    if(this.loginService.isAuthenticated()){
      this.loggedIn = this.loginService.isAuthenticated();
    }
  }
  logOut(){
    this.loginService.logOut();
    this.router.navigate(['/login']);

  }
  
}
