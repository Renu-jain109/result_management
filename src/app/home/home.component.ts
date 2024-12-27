import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HomeService } from './home.service';
import { ToastrService } from 'ngx-toastr';
import { TeacherdashboardComponent } from '../teacher/teacherdashboard/teacherdashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,TeacherdashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private formBuilder : FormBuilder){}
  loginService = inject(HomeService);
  toastr = inject(ToastrService);
  router = inject(Router);

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required],
      role : [false,Validators.required]
    });
  };

submit (){
  const json = {
    email : this.loginForm.get('email').value,
    password : this.loginForm.get('password').value,
    role : this.loginForm.get('role').value
  };


  this.loginService.login(json).subscribe((res : any)=>{
    if(res.role == 'teacher'){
      this.router.navigate(['/teacher']);
    }
this.toastr.success("Login successfully"); 
this.loginForm.reset();
}, error => {
  console.error('Login failed:', error);
  this.toastr.error('Invalid login credentials');
});
} 

};
