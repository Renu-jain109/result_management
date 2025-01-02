import { Component, inject, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updateresult',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule,FormsModule],
  templateUrl: './updateresult.component.html',
  styleUrl: './updateresult.component.css'
})
export class UpdateresultComponent implements OnInit {
  teacherService = inject(TeacherService);
  updateForm : FormGroup;
  Fb = inject(FormBuilder);
  router = inject(Router);


  ngOnInit(): void {    
      const data = history.state?.data;
      if(data){ 
      this.updateForm = this.Fb.group({
        rollno : data.rollno,
        name : data.name,
        dob : data.dob,
        score : data.score
      })
      }   
  }

  submit(){
    const editData = {
      rollno : this.updateForm.get('rollno').value,
      name : this.updateForm.get('name').value,
      dob : this.updateForm.get('dob').value,
      score : this.updateForm.get('score').value
    };
    this.teacherService.saveAddResult(editData).subscribe((res : any)=>{
      this.router.navigate(['/teacher/teacherdashboard'],{state:{data : res}})});
    };
    resetForm(){
      this.updateForm.reset();
    }
  }

  

