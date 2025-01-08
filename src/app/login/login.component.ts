import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeacherdashboardComponent } from '../teacher/teacherdashboard/teacherdashboard.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,TeacherdashboardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {

  loginForm : FormGroup;
  loginService = inject(LoginService);
  toastr = inject(ToastrService);
  router = inject(Router);
  constructor(private formBuilder : FormBuilder){}
  

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required],
      role : [false,Validators.required]
    });
  };

submit (){
  const json = {
    email : this.loginForm.get('email')?.value,
    password : this.loginForm.get('password')?.value,
    role : this.loginForm.get('role')?.value
  };



  this.loginService.login(json).subscribe((res : any)=>{
    
    localStorage.setItem('token','asdf');
     localStorage.setItem('username',res.username);
     localStorage.setItem('role',res.role);

    if(res.role == 'teacher'){
      // this.router.navigate(['/teacher/teacherdashboard']);
      window.location.href='/teacher/teacherdashboard';
    }else{  
      // this.router.navigate(['/student/studentdashboard']);
      window.location.href='/student/studentdashboard';
    }
this.toastr.success("Login successfully"); 
this.loginForm.reset();

}, (error) => {
  console.error('Login failed:', error);
  this.toastr.error('Invalid login credentials');
});

};

}
