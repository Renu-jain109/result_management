import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-addresult',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './addresult.component.html',
  styleUrl: './addresult.component.css'
})
export class AddresultComponent implements OnInit{

  addResultForm : FormGroup;
  formBuilder = inject(FormBuilder);
  teacherService = inject(TeacherService);
  router = inject(Router);

  ngOnInit(): void {
    this.addResultForm = this.formBuilder.group({
      rollno : ['',Validators.required],
      name : ['',Validators.required],
      dob : ['',Validators.required],
      score : ['',Validators.required]
    });
  };



  submit (){
    let json = {
      rollno : this.addResultForm.get('rollno').value,
      name : this.addResultForm.get('name').value,
      dob : this.addResultForm.get('dob').value,
      score : this.addResultForm.get('score').value
    }
    this.teacherService.saveAddResult(json).subscribe((res : any)=>{
      this.router.navigate(['/teacher/teacherdashboard']);
    })
  };

  resetForm (){
    this.addResultForm.reset();
  }

}
