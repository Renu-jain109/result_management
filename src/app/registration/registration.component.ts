import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  
  registrationForm : FormGroup;
  formBuilder = inject(FormBuilder);
registrationService = inject(RegistrationService)
toastr = inject(ToastrService);


  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      password : ['',Validators.required],
      confirmPassword : ['',Validators.required],
      role : [false,Validators.required]

    });
  };

  submit(){
    let json = {
      username : this.registrationForm.get('username').value,
      email : this.registrationForm.get('email').value,
      password : this.registrationForm.get('password').value,
      confirmPassword : this.registrationForm.get('confirmPassword').value,
      role : this.registrationForm.get('role').value
    };

    if(json.password !== json.confirmPassword){
      this.toastr.error("Password do not match");
      return;
    };

    if(!this.registrationForm.valid){
      this.toastr.error("Please all fields required");
      return;
    };

    this.registrationService.registeration(json).subscribe((res : any)=>{
      this.toastr.success("Registered successfully");
      this.registrationForm.reset();

    },error => {
      this.toastr.error('Registration failed');

    });
  };
  
}






